#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

SLUG="${1:-}"

if [[ -z "$SLUG" ]]; then
  echo "Usage: pnpm deploy-share <slug>"
  exit 1
fi

if [[ ! "$SLUG" =~ ^[a-z0-9-]+$ ]]; then
  echo "Slug '$SLUG' invalid. Lowercase letters, digits, hyphens only."
  exit 1
fi

LIVE_URL="https://f0-$SLUG.vercel.app"

pnpm build

rm -rf .vercel/output
mkdir -p .vercel/output/static
cp -R dist/. .vercel/output/static/
cat > .vercel/output/config.json <<'EOF'
{
  "version": 3,
  "routes": [
    { "handle": "filesystem" },
    { "src": "/.*", "dest": "/index.html" }
  ]
}
EOF

DEPLOYMENT_URL="$(vercel deploy --prebuilt --yes --prod 2>&1 | tee /tmp/f0compose-deploy-share.log | grep -Eo 'https://[^ ]+\.vercel\.app' | tail -n 1)"

if [[ -z "$DEPLOYMENT_URL" ]]; then
  echo "Deploy did not return a Vercel URL. See /tmp/f0compose-deploy-share.log"
  exit 1
fi

vercel alias set "$DEPLOYMENT_URL" "f0-$SLUG.vercel.app" >/tmp/f0compose-deploy-share-alias.log 2>&1 || {
  echo "Alias failed. Deployment is live at: $DEPLOYMENT_URL"
  echo "See /tmp/f0compose-deploy-share-alias.log"
  exit 1
}

echo "$LIVE_URL"
