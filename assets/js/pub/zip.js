// Minimal store-only (no compression) zip writer. files: [{path, blob|text}] -> Blob
const T = new Uint32Array(256).map((_, n) => { for (let k = 0; k < 8; k++) n = n & 1 ? 0xEDB88320 ^ (n >>> 1) : n >>> 1; return n >>> 0; });
const crc = u => { let c = ~0; for (let i = 0; i < u.length; i++) c = T[(c ^ u[i]) & 255] ^ (c >>> 8); return ~c >>> 0; };
export async function makeZip(files) {
  const enc = new TextEncoder(), parts = [], cen = []; let off = 0;
  for (const f of files) {
    const name = enc.encode(f.path), data = f.text !== undefined ? enc.encode(f.text) : new Uint8Array(await f.blob.arrayBuffer());
    const c = crc(data), h = new DataView(new ArrayBuffer(30));
    [[0, 0x04034b50, 4], [4, 20, 2], [6, 0x0800, 2], [8, 0, 2], [10, 0, 2], [12, 0x21, 2], [14, c, 4], [18, data.length, 4], [22, data.length, 4], [26, name.length, 2], [28, 0, 2]]
      .forEach(([o, v, s]) => s === 4 ? h.setUint32(o, v, true) : h.setUint16(o, v, true));
    parts.push(h, name, data);
    const d = new DataView(new ArrayBuffer(46));
    [[0, 0x02014b50, 4], [4, 20, 2], [6, 20, 2], [8, 0x0800, 2], [10, 0, 2], [12, 0, 2], [14, 0x21, 2], [16, c, 4], [20, data.length, 4], [24, data.length, 4], [28, name.length, 2], [42, off, 4]]
      .forEach(([o, v, s]) => s === 4 ? d.setUint32(o, v, true) : d.setUint16(o, v, true));
    cen.push(d, name); off += 30 + name.length + data.length;
  }
  const size = cen.reduce((a, p) => a + (p.byteLength ?? p.length), 0), e = new DataView(new ArrayBuffer(22));
  e.setUint32(0, 0x06054b50, true); e.setUint16(8, files.length, true); e.setUint16(10, files.length, true); e.setUint32(12, size, true); e.setUint32(16, off, true);
  return new Blob([...parts, ...cen, e], { type: 'application/zip' });
}
