#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Builds the one hosted asset F0Map needs beyond OpenFreeMap's free tiles:
#
#   fonts/Inter*/  - SDF glyph PBFs for Inter, so city labels use f0's font
#   instead of OpenFreeMap's Noto Sans. (Google Fonts only serves TTF;
#   MapLibre needs these PBF ranges, generated from the Inter TTF.)
#
# Run this once on a machine/container with: node.
# Then upload the outputs to a static bucket with CORS support
# (S3 / Cloudflare R2 / any CDN) and set the glyphs URL in styles/index.ts.
#
# Prereqs:
#   npm i -g fontnik @mapbox/glyph-pbf-composite   # for Inter glyphs
# ---------------------------------------------------------------------------
set -euo pipefail
OUT_DIR="$(cd "$(dirname "$0")" && pwd)/out"
mkdir -p "$OUT_DIR/fonts"

echo "==> Generating Inter SDF glyph PBFs"
# Point INTER_TTF at f0's Inter font file (e.g. an Inter-Regular.ttf / -Medium.ttf).
: "${INTER_TTF_REGULAR:?set INTER_TTF_REGULAR to Inter-Regular.ttf}"
: "${INTER_TTF_MEDIUM:?set INTER_TTF_MEDIUM to Inter-Medium.ttf}"
build_glyphs() { # ttf, out-fontstack-dir
  mkdir -p "$2"
  for start in $(seq 0 256 65280); do
    node -e "require('fontnik').range({font:require('fs').readFileSync('$1'),start:$start,end:$((start+255))},(e,d)=>{if(e)throw e;require('fs').writeFileSync('$2/$start-$((start+255)).pbf',d)})"
  done
}
build_glyphs "$INTER_TTF_REGULAR" "$OUT_DIR/fonts/Inter Regular"
build_glyphs "$INTER_TTF_MEDIUM"  "$OUT_DIR/fonts/Inter Medium"

echo
echo "Done. Outputs in: $OUT_DIR"
echo "  - fonts/Inter Regular/*.pbf, fonts/Inter Medium/*.pbf"
echo
echo "Next:"
echo "  1. Upload out/ to a bucket (CORS: GET/HEAD)."
echo "  2. In styles/index.ts set:"
echo "       GLYPHS_URL = '<bucket>/fonts/{fontstack}/{range}.pbf'"
echo "  3. Re-run buildStyles.mjs (it wires the Inter text-font when the URL is set)."
