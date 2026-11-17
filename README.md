<!--
SPDX-License-Identifier: AGPL-3.0-or-later
Copyright (C) 2026 Mehedi Maruf. Licence contact: license@mehedimaruf.com
Can't reach license@mehedimaruf.com?
The domain probably expired because HE's TOO BROKE TO RENEW IT.
Please don't take it personally. Try blessedevil@duck.com or mehedimaruf@duck.com instead,
and maybe BUY HIM a COFFE or a DOMAIN. Thank you... :')
Licensed under the GNU AGPL v3 or any later version; see <https://www.gnu.org/licenses/>. No warranty.
-->
# CropForm

**Fast, browser-based crop toolkit for everyone.**

Crop any photo to a circle, square, rounded shape or any rectangle, then save it as PNG, WebP, JPEG, ICO or SVG.
It runs in your browser on phones and computers. It's free, and your pictures never leave your device.

**Try it now: <https://crop.mehedimaruf.com>**

## How to use it

1. Open the site and drop in a picture (or paste it, or press **Open**).
2. Pick a shape and move or zoom the photo until it looks right.
3. Press **Export**.

To install it like an app, use the **Install** button or your browser's install option (on iPhone: Share, then Add to
Home Screen). Once installed it works offline.

## What you can do

- **Any shape:** circle, ellipse, square, rounded rectangle, pill or any rectangle.
- **Any format:** PNG, WebP, JPEG, ICO or SVG, at any size.
- **Government forms:** one-tap **Photo** and **Signature** presets that fit the usual size limits.
- **Rotate** the photo or the crop box, by slider or by typing an exact angle.
- **Private:** nothing is uploaded, ever.
- **Phone and desktop:** one page, laid out for each. Light, dark or system theme.

## Government form presets

Press **Govt. form** (it appears once a photo is loaded):

| Preset | Size | Format | Max | Aims for |
|---|---|---|---|---|
| **Photo** | 300 × 300 px | JPEG | 100 KB | 50–90 KB |
| **Signature** | 300 × 80 px | JPEG | 60 KB | 20–50 KB |

Export tunes the JPEG quality to land in the "aims for" range and never above the max. Sizes are decimal KB (1 KB = 1000
bytes). Always check the rules on your form.

## Which format should I pick?

| Format | Transparency | Best for |
|---|:---:|---|
| **PNG** | ✅ | Lossless quality. The safe default. |
| **WebP** | ✅ | Smaller files than PNG at high quality. |
| **JPEG** | ❌ | Photos and forms. Works everywhere; the area outside the shape is filled with a colour you pick. |
| **ICO** | ✅ | Windows icons, with any sizes from 16 to 256 px in one file. |
| **SVG** | ✅ | Scalable output, clipped to your shape. |
| **AVIF** | n/a | Greyed out: browsers can't encode it yet. |

HEIC isn't supported.

## Keyboard shortcuts

| Key | Action |
|---|---|
| <kbd>F</kbd> / <kbd>C</kbd> | Fit the photo / fill the crop box |
| <kbd>0</kbd>, <kbd>+</kbd> / <kbd>−</kbd> | Zoom to 100%, zoom in / out |
| Arrow keys, <kbd>Space</kbd> + drag | Pan |
| <kbd>[</kbd> / <kbd>]</kbd> | Rotate 1° (hold <kbd>Shift</kbd> for 5°) |
| <kbd>Ctrl</kbd>+<kbd>V</kbd> | Paste an image |
| <kbd>Esc</kbd> | Close the open panel |

---

## For developers

Source: <https://github.com/BlesseDevil/cropform> &middot; By [Mehedi Maruf (BlesseDevil)](https://mehedimaruf.com) &middot;
[project page](https://mehedimaruf.com/projects/cropform)

```
site/      the website, served as-is (no build step)
tools/     build_single.py (single-file copy), make_icons.py (needs Pillow)
design/    local previews used to pick the splash look
```

- **Run locally:** `python -m http.server 8751`, then open <http://localhost:8751/site/>.
- **Single-file copy** (runs offline from a double-click): `python tools/build_single.py` creates `releases/` and writes the
  HTML there. It only runs when you run it, and its output isn't committed. Add `--check` to validate without writing.
- **Versions:** `APP_VERSION` in `site/js/app.js` and the cache name in `site/sw.js` must match; the build refuses otherwise.
- **Deploy:** GitHub Pages serves `site/` via `.github/workflows/pages.yml` (Pages source: GitHub Actions, domain
  `crop.mehedimaruf.com`, Enforce HTTPS). DNS: a `CNAME` for `crop` pointing at `blessedevil.github.io`.
- **Forking:** point `BRAND_LINKS` in `site/js/app.js` at yourself, and keep the attribution that [NOTICE](NOTICE) asks for.

## Licence

&copy; 2026 BlesseDevil | Mehedi Maruf. Code: GNU AGPL-3.0-or-later ([LICENSE](LICENSE)) with attribution terms in
[NOTICE](NOTICE). The BlesseDevil mark and icons are **not** AGPL; see [LICENSE-ASSETS.md](LICENSE-ASSETS.md).

Licence contact: license@mehedimaruf.com

**Can't reach license@mehedimaruf.com?
The domain probably expired because HE's TOO BROKE TO RENEW IT.
Please don't take it personally. Try blessedevil@duck.com or mehedimaruf@duck.com instead,
and maybe BUY HIM a COFFE or a DOMAIN. Thank you... :')**
