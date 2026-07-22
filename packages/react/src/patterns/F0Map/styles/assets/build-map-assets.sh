#!/usr/bin/env bash
# ---------------------------------------------------------------------------
# Builds the two hosted assets F0Map needs beyond OpenFreeMap's free tiles:
#
#   1. lowzoom-landcover.pmtiles - global land cover for z0-7 (the zoomed-out
#      "green world / tan deserts" carpet). OpenFreeMap ships no landcover
#      below z7, so this fills the gap. Source: Overture Maps `base/land_cover`
#      (derived from ESA WorldCover, CC-BY 4.0). Small because it's coarse.
#
#   2. fonts/Inter*/  - SDF glyph PBFs for Inter, so city labels use f0's font
#      instead of OpenFreeMap's Noto Sans. (Google Fonts only serves TTF;
#      MapLibre needs these PBF ranges, generated from the Inter TTF.)
#
# Run this once on a machine/container with: duckdb, tippecanoe, node.
# Then upload the outputs to a static bucket with CORS + HTTP range support
# (S3 / Cloudflare R2 / any CDN) and set the two URLs in styles/index.ts.
#
# Prereqs:
#   brew install duckdb tippecanoe            # or apt / container image
#   npm i -g fontnik @mapbox/glyph-pbf-composite   # for Inter glyphs
# ---------------------------------------------------------------------------
set -euo pipefail
OVERTURE_RELEASE="2026-06-17.0"   # bump to the latest release/ prefix
OUT_DIR="$(cd "$(dirname "$0")" && pwd)/out"
mkdir -p "$OUT_DIR/fonts"

echo "==> [1/3] Extracting global land cover from Overture $OVERTURE_RELEASE"
# Two files: nature (forest/grass/desert...) only needs low zoom (z0-7); above
# that OpenFreeMap has its own wood/grass/farmland. Urban ('built-up') must run
# up to ~z13 so cities read white/light at mid zoom too - OpenFreeMap's own
# residential polygons don't appear until ~z14, which is why the city looks
# green when zoomed out today. Urban is a small fraction of land, so z0-13 stays
# manageable.
duckdb -c "
  INSTALL spatial; LOAD spatial; INSTALL httpfs; LOAD httpfs;
  SET s3_region='us-west-2';
  COPY (SELECT subtype AS class, ST_AsWKB(ST_SimplifyPreserveTopology(geometry, 0.02)) AS geometry
        FROM read_parquet('s3://overturemaps-us-west-2/release/${OVERTURE_RELEASE}/theme=base/type=land_cover/*', hive_partitioning=1)
        WHERE subtype IN ('forest','tree','grass','shrub','crop','barren','snow','wetland','moss','mangrove'))
    TO '$OUT_DIR/nature.fgb' WITH (FORMAT GDAL, DRIVER 'FlatGeobuf', SRS 'EPSG:4326');
  COPY (SELECT subtype AS class, ST_AsWKB(ST_SimplifyPreserveTopology(geometry, 0.005)) AS geometry
        FROM read_parquet('s3://overturemaps-us-west-2/release/${OVERTURE_RELEASE}/theme=base/type=land_cover/*', hive_partitioning=1)
        WHERE subtype = 'urban')
    TO '$OUT_DIR/urban.fgb' WITH (FORMAT GDAL, DRIVER 'FlatGeobuf', SRS 'EPSG:4326');
"

echo "==> [2/3] Tiling to PMTiles - nature z0-7, urban z0-13, joined into one layer"
tippecanoe -o "$OUT_DIR/nature.pmtiles" -f -Z0 -z7 -l landcover \
  --drop-densest-as-needed --coalesce-densest-as-needed --simplification=4 "$OUT_DIR/nature.fgb"
tippecanoe -o "$OUT_DIR/urban.pmtiles" -f -Z0 -z13 -l landcover \
  --drop-densest-as-needed --coalesce-densest-as-needed --simplification=4 "$OUT_DIR/urban.fgb"
tile-join -o "$OUT_DIR/lowzoom-landcover.pmtiles" -f "$OUT_DIR/nature.pmtiles" "$OUT_DIR/urban.pmtiles"

echo "==> [3/3] Generating Inter SDF glyph PBFs"
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
echo "  - lowzoom-landcover.pmtiles"
echo "  - fonts/Inter Regular/*.pbf, fonts/Inter Medium/*.pbf"
echo
echo "Next:"
echo "  1. Upload out/ to a bucket (CORS: GET/HEAD, allow 'range','if-match', expose 'etag')."
echo "  2. In styles/index.ts set:"
echo "       LOWZOOM_LANDCOVER_URL = 'pmtiles://<bucket>/lowzoom-landcover.pmtiles'"
echo "       GLYPHS_URL            = '<bucket>/fonts/{fontstack}/{range}.pbf'"
echo "  3. Re-run buildStyles.mjs (it wires the landcover source + Inter text-font"
echo "     when those URLs are set)."
