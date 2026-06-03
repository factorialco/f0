#!/usr/bin/env bash
#
# scripts/deploy-share.sh
#
# One-shot "ship a prototype to its own public Vercel URL".
#
# Usage:
#   pnpm deploy-share <slug>
#
# What it does:
#   1. Validates `<slug>` matches a real prototype directory.
#   2. Builds f0compose once with a root-redirect baked in so the
#      URL deep-links into the requested prototype.
#   3. Creates (or reuses) a Vercel project named `f0-<slug>`,
#      separate from whatever the repo's root .vercel/ is currently
#      linked to. Deploys `dist/` to it.
#   4. Pins the short alias `f0-<slug>.vercel.app` at the new
#      deployment.
#
# Design note — why this script exists alongside `redeploy.sh`:
#   `redeploy.sh` follows the single project recorded in
#   `packages/f0compose/.vercel/project.json` and pins one fixed
#   short alias (`f0-controlling.vercel.app`). That's perfect for
#   the "main" prototype the designer iterates on every day, but
#   useless when they want to spin up a SECOND prototype as its
#   own share link without disrupting the first. This script
#   touches a throwaway `dist/.vercel/` only — the repo-root link
#   stays untouched, so `pnpm redeploy` keeps targeting the
#   original prototype.
#
# Requirements (same as redeploy.sh):
#   - `vercel login` cached on the machine.
#   - The Vercel team the user wants is reachable from that token
#     (we resolve org via the existing root link if present).

set -euo pipefail

cd "$(dirname "$0")/.."

# -- 1. Arg validation -----------------------------------------------

SLUG="${1:-}"
if [[ -z "$SLUG" ]]; then
  echo "Usage: pnpm deploy-share <slug>"
  echo "Example: pnpm deploy-share expense-policy-settings"
  exit 1
fi

if [[ ! "$SLUG" =~ ^[a-z0-9-]+$ ]]; then
  echo "✗ Slug must be lowercase letters, digits and hyphens only: '$SLUG'"
  exit 1
fi

if [[ ! -d "src/prototypes/$SLUG" ]]; then
  echo "✗ No prototype at src/prototypes/$SLUG/"
  echo "  Check the slug (it's the folder name under src/prototypes/)."
  exit 1
fi

PROJECT_NAME="f0-$SLUG"
SHORT_ALIAS="$PROJECT_NAME.vercel.app"

# -- 2. CLI presence -------------------------------------------------

if ! command -v vercel > /dev/null 2>&1; then
  echo "✗ Vercel CLI not installed."
  echo "  Run: npm install -g vercel && vercel login"
  exit 1
fi

# -- 3. Build --------------------------------------------------------

# The deploy has no reachable Mastra agent, so prototypes that need one
# (e.g. expense-policy-settings) run their scripted, agent-less "demo
# mode" — gated on this build-time flag (see prototypes' lib/demoMode).
echo "→ Building f0compose (VITE_DEMO_MODE=1)…"
VITE_DEMO_MODE=1 pnpm build > /tmp/f0compose-build.log 2>&1 || {
  echo "✗ Build failed. See /tmp/f0compose-build.log"
  exit 1
}

# Root redirect deep-links the bare share URL into THIS prototype, so
# the recipient never sees the catalog index. SPA-rewrite catch-all
# is the same dance `redeploy.sh` does: client-side routing fails
# without it.
cat > dist/vercel.json <<EOF
{
  "redirects": [
    { "source": "/", "destination": "/p/$SLUG", "permanent": false }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    },
    {
      "source": "/p/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, must-revalidate" }
      ]
    },
    {
      "source": "/index.html",
      "headers": [
        { "key": "Cache-Control", "value": "no-cache, must-revalidate" }
      ]
    }
  ]
}
EOF

# -- 4. Deploy -------------------------------------------------------

# We deploy from inside dist/ so Vercel treats it as the project
# root (no source files, just the static output). Without an
# inherited `.vercel/` link in dist/, the `--name` flag tells the
# CLI which project to create/reuse — this is what keeps the new
# share separate from the root-linked prototype.
#
# If the same SLUG is run twice in a row, Vercel reuses the
# existing project rather than creating a duplicate. That makes
# the script idempotent: re-running just publishes a new
# deployment under the same f0-<slug>.vercel.app alias.

# Pre-existing dist/.vercel from a previous run would force the CLI
# to use THAT project regardless of --name. Wipe it.
rm -rf dist/.vercel

echo "→ Deploying dist/ to Vercel (project: $PROJECT_NAME)…"
DEPLOY_OUT=$(cd dist && vercel deploy --prod --yes --name "$PROJECT_NAME" 2>&1) || {
  echo "✗ Deploy failed:"
  echo "$DEPLOY_OUT"
  exit 1
}

# Parse the deployment URL. Vercel prints multiple URLs; the canonical
# hashed one is the last `https://...vercel.app` token. Prefer the
# "Production:" line when present.
LIVE_URL=$(echo "$DEPLOY_OUT" | grep -E "^(Production:|Preview:)" | tail -1 | awk '{print $2}')
if [[ -z "$LIVE_URL" ]]; then
  LIVE_URL=$(echo "$DEPLOY_OUT" | grep -Eo "https://[a-z0-9.-]+\.vercel\.app" | tail -1)
fi

# -- 5. Pin short alias ----------------------------------------------

ALIAS_OK=1
if [[ -n "$LIVE_URL" ]]; then
  if ! vercel alias set "$LIVE_URL" "$SHORT_ALIAS" > /dev/null 2>&1; then
    ALIAS_OK=0
    echo "⚠ Could not pin short alias $SHORT_ALIAS."
    echo "  It may already be owned by another Vercel account."
    echo "  The auto-alias still works (see canonical URL below)."
  fi
fi

# -- 6. Final report -------------------------------------------------

# Record this prototype as "live" so the skill's auto-redeploy logic
# at the end of every turn can find it. The registry is a flat list
# of slugs, one per line, in a gitignored marker file. Idempotent:
# we add the slug only if it's not already there. The skill reads
# this file to decide which `pnpm deploy-share <slug>` invocations
# to run after a prototype edit.
mkdir -p .vercel-shares
REGISTRY=".vercel-shares/registry"
if [[ ! -f "$REGISTRY" ]] || ! grep -qxF "$SLUG" "$REGISTRY"; then
  echo "$SLUG" >> "$REGISTRY"
fi

echo ""
if [[ $ALIAS_OK -eq 1 && -n "$LIVE_URL" ]]; then
  echo "✓ Live at:  https://$SHORT_ALIAS"
  echo "  (canonical: $LIVE_URL)"
else
  echo "✓ Live at:  $LIVE_URL"
fi
echo ""
echo "  Note: anyone with this URL can see the prototype."
echo "  Re-run \`pnpm deploy-share $SLUG\` to push an updated build."
