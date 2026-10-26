// convertPdf(file, onProgress) -> [{n,w,h,img,thumb,text,ext}]
// pdf.js parses in its own worker; pages are drawn here (it needs a DOM for fonts) with a yield between pages.
import * as pdfjs from '../../vendor/pdf.min.mjs';
pdfjs.GlobalWorkerOptions.workerSrc = new URL('../../vendor/pdf.worker.min.mjs', import.meta.url).href;

const PAGE_BUDGET = 470 * 1024; // ~4 MB per 8 pages
const toBlob = (c, type, q) => new Promise(r => c.toBlob(r, type, q));
async function encode(canvas, q) {
  let blob = await toBlob(canvas, 'image/webp', q);
  if (!blob || blob.type !== 'image/webp') blob = await toBlob(canvas, 'image/jpeg', q);
  return blob;
}
async function draw(page, longEdge) {
  const v1 = page.getViewport({ scale: 1 });
  const vp = page.getViewport({ scale: longEdge / Math.max(v1.width, v1.height) });
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(vp.width); canvas.height = Math.round(vp.height);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvasContext: ctx, viewport: vp }).promise;
  return canvas;
}
export async function convertPdf(file, onProgress) {
  let pdf;
  try { pdf = await pdfjs.getDocument({ data: await file.arrayBuffer() }).promise; }
  catch (e) { throw new Error('The PDF could not be read. Please try another file.', { cause: e }); }
  const out = [];
  try {
    for (let n = 1; n <= pdf.numPages; n++) {
      const page = await pdf.getPage(n);
      const big = await draw(page, 2000);
      let img;
      for (const q of [0.85, 0.75, 0.65, 0.55]) { img = await encode(big, q); if (img.size <= PAGE_BUDGET) break; }
      const small = await draw(page, 400);
      const thumb = await encode(small, 0.7);
      let text = '';
      try { text = (await page.getTextContent()).items.map(i => i.str).join(' ').replace(/\s+/g, ' ').trim(); } catch (e) {}
      out.push({ n, w: big.width, h: big.height, img, thumb, text, ext: img.type === 'image/webp' ? 'webp' : 'jpg' });
      big.width = big.height = small.width = small.height = 0;
      page.cleanup();
      onProgress && onProgress(n, pdf.numPages);
      await new Promise(r => setTimeout(r));
    }
  } catch (e) { throw new Error('The PDF could not be converted. Please try another file.', { cause: e }); }
  return out;
}
