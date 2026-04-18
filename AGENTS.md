<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Project context

**Fasid Fard** — Fabbrica Siciliana Droghe. Artisan spice shop in Catania, Sicily.
Live at: https://www.fasidfard.com | GitHub: https://github.com/SRFeesha/fasid-fard

Single-page landing site. Light editorial aesthetic: warm paper tones (`#f0e6d3` bg, `#1a0d05` ink, `#b8650a` accent), spice photo top half, text anchored to bottom. Custom chili pepper SVG cursor (desktop only).

---

# Hard-won lessons from the first build

## Satori / ImageResponse (OG images)

- **Satori only reads TTF/OTF** — woff and woff2 are compressed containers it cannot decode. Always fetch fonts as TTF. The Google Fonts `css2` API with a modern user agent returns a direct `.ttf` URL; the old IE6 UA returns EOT (unusable).
- **`readFileSync` returns a Node.js `Buffer`** — Satori's `fonts` array needs a true `ArrayBuffer`. Convert with: `buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength) as ArrayBuffer`
- **`ImageResponse` always outputs PNG** — pipe through `sharp().jpeg()` and return `new Response(new Uint8Array(jpegBuffer), ...)` to get a real JPEG. In Next.js 16 `Response` body must be `BodyInit` — pass `new Uint8Array(buffer)`, not a raw `Buffer`.
- **No webp in Satori `backgroundImage`** — convert to PNG first with `sharp(webpBuffer).png().toBuffer()`, then embed as a `data:image/png;base64,...` URL in an `<img>` tag.
- **No `inset` shorthand in Satori** — use explicit `top`, `right`, `bottom`, `left`.

## Next.js 16 CSS Modules

- `@keyframes` defined in `globals.css` are **not** visible inside CSS Module class blocks. Duplicate the needed keyframes directly inside the `.module.css` file.

## Deployment

- **npm registry timeout** — if behind a corporate Nexus proxy: `npm install --registry https://registry.npmjs.org/`
- **GitHub push with wrong credentials** — embed the username to bypass osxkeychain: `git push https://SRFeesha@github.com/SRFeesha/fasid-fard.git main`

## Touch / cursor

- Use `pointer: coarse` (not `hover: none`) to detect touch devices — it's specific to imprecise inputs (fingers). Hide the custom cursor SVG in JS with `window.matchMedia('(pointer: coarse)').matches` inside `useEffect`, and restore `cursor: auto` in CSS with `@media (pointer: coarse)`.
