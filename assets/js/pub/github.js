// Minimal GitHub Git-Data client: one atomic commit per publish.
const API = 'https://api.github.com';
export class GH {
  constructor({ token, owner, repo, branch }) { Object.assign(this, { token, owner, repo, branch }); }
  async req(path, opts = {}) {
    let r;
    try {
      r = await fetch(`${API}/repos/${this.owner}/${this.repo}${path}`, { ...opts, headers: { Authorization: `Bearer ${this.token}`, Accept: 'application/vnd.github+json', ...(opts.headers || {}) } });
    } catch (e) { throw new Error('Could not reach GitHub. Please check your internet connection.'); }
    if (r.status === 401) throw new Error('GitHub did not accept the token. Please paste a new token in Settings.');
    if (r.status === 403 || r.status === 404) throw new Error('GitHub refused access. Check that the token is for this website and allows "Contents: Read and write".');
    if (!r.ok) throw new Error(`GitHub reported a problem (${r.status}). Please try again.`);
    return r.status === 204 ? null : r.json();
  }
  post(path, body, method = 'POST') { return this.req(path, { method, body: JSON.stringify(body) }); }
  async readJson(path, fallback) {
    try {
      const r = await fetch(`${API}/repos/${this.owner}/${this.repo}/contents/${path}?ref=${this.branch}`, { headers: { Authorization: `Bearer ${this.token}`, Accept: 'application/vnd.github.raw+json' }, cache: 'no-store' });
      if (r.status === 404) return fallback;
      if (!r.ok) throw 0;
      return await r.json();
    } catch (e) { return fallback; }
  }
  async repoSizeKB() { return (await this.req('')).size; }
  async listPaths(prefix) {
    const ref = await this.req(`/git/ref/heads/${this.branch}`);
    const t = await this.req(`/git/trees/${ref.object.sha}?recursive=1`);
    return t.tree.filter(e => e.type === 'blob' && e.path.startsWith(prefix)).map(e => e.path);
  }
  // files: [{path, blob|text}], deletes: [path]
  async commit(message, files, deletes = [], onProgress) {
    const ref = await this.req(`/git/ref/heads/${this.branch}`);
    const base = (await this.req(`/git/commits/${ref.object.sha}`)).tree.sha;
    const entries = [];
    let done = 0;
    for (const f of files) {
      const content = f.text !== undefined ? btoa(unescape(encodeURIComponent(f.text))) : await toB64(f.blob);
      const b = await this.post('/git/blobs', { content, encoding: 'base64' });
      entries.push({ path: f.path, mode: '100644', type: 'blob', sha: b.sha });
      onProgress && onProgress(++done, files.length);
    }
    for (const p of deletes) entries.push({ path: p, mode: '100644', type: 'blob', sha: null });
    const tree = await this.post('/git/trees', { base_tree: base, tree: entries });
    const c = await this.post('/git/commits', { message, tree: tree.sha, parents: [ref.object.sha] });
    await this.post(`/git/refs/heads/${this.branch}`, { sha: c.sha }, 'PATCH');
  }
}
function toB64(blob) {
  return new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result.split(',')[1]); r.onerror = rej; r.readAsDataURL(blob); });
}
