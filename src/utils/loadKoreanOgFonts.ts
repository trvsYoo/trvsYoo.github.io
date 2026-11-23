// satori draws OG images only with the fonts it is given, and Google Sans
// Code has no Hangul glyphs. Google Fonts serves Korean fonts as split
// subsets, so fetch whole Pretendard files (woff, which satori reads) once
// per build instead.
const PRETENDARD_WOFF =
  "https://cdn.jsdelivr.net/npm/pretendard@1.3.9/dist/web/static/woff";

let cache: Promise<{ regular: ArrayBuffer; bold: ArrayBuffer }> | undefined;

async function fetchFont(file: string): Promise<ArrayBuffer> {
  const res = await fetch(`${PRETENDARD_WOFF}/${file}`);
  if (!res.ok) {
    throw new Error(`Cannot load OG font ${file}: HTTP ${res.status}`);
  }
  return res.arrayBuffer();
}

export function loadKoreanOgFonts() {
  cache ??= Promise.all([
    fetchFont("Pretendard-Regular.woff"),
    fetchFont("Pretendard-Bold.woff"),
  ]).then(([regular, bold]) => ({ regular, bold }));
  return cache;
}
