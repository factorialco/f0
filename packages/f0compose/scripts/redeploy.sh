#!/usr/bin/env bash
#
# scripts/redeploy.sh
#
# Rebuilds f0compose and redeploys the static output to the linked
# Vercel project, preserving the same public URL. Designed for the
# f0-prototype skill's end-of-turn redeploy hook: every time the
# designer asks for a change, the skill runs this so the share link
# they handed out stays current.
#
# Requirements (one-time):
#   - `vercel login` has been run (token cached on the machine).
#   - `vercel link` has been run in `packages/f0compose/` so
#     `.vercel/project.json` exists pointing at the right project.
#
# If `.vercel/project.json` is missing the script bails with a
# message instead of accidentally creating a new project.
#
# Output: prints the final live URL on success, suitable for the
# end-of-turn response template.

set -euo pipefail

cd "$(dirname "$0")/.."

if [[ ! -f .vercel/project.json ]]; then
  echo "✗ Not linked to a Vercel project."
  echo "  Run \`vercel link\` in packages/f0compose/ first, or have a"
  echo "  human deploy the prototype once manually so the link is set."
  exit 1
fi

PROJECT_NAME=$(node -e "console.log(require('./.vercel/project.json').projectName)")

echo "→ Building f0compose…"
pnpm build > /tmp/f0compose-build.log 2>&1 || {
  echo "✗ Build failed. See /tmp/f0compose-build.log"
  exit 1
}

# Copy the SPA fallback config into dist so client-side routing works
# on Vercel — every URL that isn't a real file falls through to
# index.html. We write it post-build because `pnpm build` clobbers
# dist/.
cat > dist/vercel.json <<'EOF'
{
  "redirects": [
    { "source": "/", "destination": "/p/controlling-step-poc", "permanent": false }
  ],
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
EOF

# Vercel resolves the project link from `<cwd>/.vercel/project.json`.
# We want to deploy `dist/` as a static-only payload but keep it
# linked to the existing project, so we copy the link config into
# dist/ before deploying and run vercel from inside dist/. Without
# this, passing `dist` as a positional arg makes Vercel treat it as
# a fresh project name and creates `dist-<hash>.vercel.app`.
mkdir -p dist/.vercel
cp .vercel/project.json dist/.vercel/project.json

echo "→ Deploying dist/ to Vercel (project: $PROJECT_NAME)…"
DEPLOY_OUT=$(cd dist && vercel deploy --prod --yes 2>&1) || {
  echo "✗ Deploy failed:"
  echo "$DEPLOY_OUT"
  exit 1
}

# Extract the aliased production URL (stable, doesn't change per
# deploy). Falls back to the deployment-specific URL if the alias
# line isn't present.
LIVE_URL=$(echo "$DEPLOY_OUT" | grep -E "^Aliased:" | tail -1 | awk '{print $2}')
if [[ -z "$LIVE_URL" ]]; then
  LIVE_URL=$(echo "$DEPLOY_OUT" | grep -Eo "https://[a-z0-9.-]+\.vercel\.app" | tail -1)
fi

# Re-point the short share alias at this new deployment. The
# automatic `<project-name>.vercel.app` alias is owned by Vercel and
# always tracks the latest production deploy, but the friendlier
# short alias we set up manually (`f0-controlling.vercel.app`) only
# moves when we tell it to. Without this step, the short URL would
# silently stay frozen on the first-ever deploy.
SHORT_ALIAS="f0-controlling.vercel.app"
if [[ -n "$LIVE_URL" ]]; then
  vercel alias set "$LIVE_URL" "$SHORT_ALIAS" > /dev/null 2>&1 || \
    echo "⚠ Could not update short alias $SHORT_ALIAS (continuing)."
fi

echo ""
echo "✓ Live at:  https://$SHORT_ALIAS"
echo "  (canonical: $LIVE_URL)"
