#!/bin/bash
# Generates barrel (index.ts) files for icon directories.
# Scans for all .tsx files (excluding index.ts) and creates
# `export { default as Name } from "./Name"` entries.
#
# Usage:
#   ./scripts/generate-icon-barrels.sh src/icons/app src/icons/modules src/icons/ai src/flags/components

set -euo pipefail

for dir in "$@"; do
  if [[ ! -d "$dir" ]]; then
    echo "Skipping $dir (not a directory)"
    continue
  fi

  index_file="$dir/index.ts"
  tmp_file="$(mktemp)"

  for file in "$dir"/*.tsx; do
    [[ -f "$file" ]] || continue
    name="$(basename "$file" .tsx)"
    echo "export { default as $name } from \"./$name\"" >> "$tmp_file"
  done

  if [[ -s "$tmp_file" ]]; then
    sort -t' ' -k5 "$tmp_file" > "$index_file"
    echo "Generated $index_file ($(wc -l < "$index_file" | tr -d ' ') exports)"
  else
    echo "No .tsx files found in $dir"
  fi

  rm -f "$tmp_file"
done
