#!/usr/bin/env bash
#
# scripts/kickstart.sh
#
# One-shot "I'm new, I want my prototype live on Vercel" flow.
#
# Usage:
#   pnpm kickstart                        # interactive (asks for slug + title)
#   pnpm kickstart <slug> "<Title>"       # fully scripted
#
# What this script does, in order:
#   1. Sanity-checks the toolchain (pnpm, node, vercel CLI).
#   2. Runs `pnpm install` so f0-react is built and skills are synced.
#   3. Scaffolds `src/prototypes/<slug>/<Pascal>.tsx` if it doesn't
#      exist yet (a real, route-able, minimal F0 page).
#   4. Starts `pnpm dev` in the background so the designer can see
#      hot-reload as soon as opencode starts editing.
#   5. Runs `pnpm deploy-share <slug>` so a live Vercel URL exists
#      from minute one.
#   6. Prints the local URL, the live URL, and the next-step prompt
#      to paste into opencode.
#
# Designed to be safe to re-run: every step is idempotent.

set -euo pipefail

cd "$(dirname "$0")/.."

# Pretty output helpers --------------------------------------------------------

bold() { printf "\033[1m%s\033[0m\n" "$*"; }
dim()  { printf "\033[2m%s\033[0m\n" "$*"; }
ok()   { printf "\033[32m✓\033[0m %s\n" "$*"; }
warn() { printf "\033[33m⚠\033[0m %s\n" "$*"; }
fail() { printf "\033[31m✗\033[0m %s\n" "$*"; }

echo
bold "f0compose kickstart — let's get your prototype live."
echo

# 1. Args ---------------------------------------------------------------------

SLUG="${1:-}"
TITLE="${2:-}"

if [[ -z "$SLUG" ]]; then
  echo "What's the short name for your prototype?"
  echo "  Use lowercase letters, digits and hyphens only."
  echo "  Examples: time-off-calendar, hiring-funnel, payroll-review"
  read -r -p "  Slug: " SLUG
fi

if [[ -z "$TITLE" ]]; then
  echo
  echo "What's the human-readable title? (shown at the top of the page)"
  echo "  Examples: \"Time off calendar\", \"Hiring funnel\""
  read -r -p "  Title: " TITLE
fi

if [[ ! "$SLUG" =~ ^[a-z0-9-]+$ ]]; then
  fail "Slug '$SLUG' is invalid. Lowercase letters, digits and hyphens only."
  exit 1
fi

if [[ -z "$TITLE" ]]; then
  fail "Title cannot be empty."
  exit 1
fi

LOCAL_URL="http://localhost:5174/p/$SLUG"
LIVE_URL="https://f0-$SLUG.vercel.app"

# 2. Tooling check ------------------------------------------------------------

bold "Step 1/5 — Checking your tools…"

if ! command -v pnpm >/dev/null 2>&1; then
  fail "pnpm is not installed."
  echo "  Install pnpm first: https://pnpm.io/installation"
  exit 1
fi
ok "pnpm is installed."

if ! command -v node >/dev/null 2>&1; then
  fail "node is not installed."
  exit 1
fi
ok "node is installed ($(node --version))."

VERCEL_OK=1
if ! command -v vercel >/dev/null 2>&1; then
  VERCEL_OK=0
  warn "Vercel CLI not found. We'll install it for you."
  if npm install -g vercel >/dev/null 2>&1; then
    ok "Vercel CLI installed."
    VERCEL_OK=1
  else
    warn "Couldn't auto-install Vercel CLI (probably needs sudo)."
    warn "Run this in your terminal and re-run kickstart:"
    echo "      sudo npm install -g vercel"
    echo "      vercel login"
  fi
else
  ok "Vercel CLI is installed."
fi

# Quick check: are they logged into Vercel?
if [[ $VERCEL_OK -eq 1 ]]; then
  if ! vercel whoami >/dev/null 2>&1; then
    warn "You're not logged into Vercel."
    echo "      Run: vercel login"
    echo "      Then re-run: pnpm kickstart $SLUG \"$TITLE\""
    exit 1
  fi
  ok "Logged into Vercel as $(vercel whoami 2>/dev/null)."
fi

# 3. Install + skills sync ----------------------------------------------------

echo
bold "Step 2/5 — Installing dependencies (this can take a minute)…"
pnpm install >/tmp/f0compose-kickstart-install.log 2>&1 || {
  fail "pnpm install failed. See /tmp/f0compose-kickstart-install.log"
  exit 1
}
ok "Dependencies installed and skills synced."

# 4. Scaffold the prototype ---------------------------------------------------

echo
bold "Step 3/5 — Creating your prototype folder…"
tsx scripts/scaffold-prototype.ts "$SLUG" "$TITLE"

# 5. Start dev server in background ------------------------------------------

echo
bold "Step 4/5 — Starting the local dev server…"

DEV_LOG="/tmp/f0compose-kickstart-dev.log"
PID_FILE=".kickstart-dev.pid"

# If a previous kickstart left a dev server running, leave it alone.
if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  ok "Dev server already running (PID $(cat "$PID_FILE"))."
else
  nohup pnpm dev >"$DEV_LOG" 2>&1 &
  DEV_PID=$!
  echo "$DEV_PID" > "$PID_FILE"
  ok "Dev server started (PID $DEV_PID). Logs: $DEV_LOG"
  echo "  (To stop later: kill \$(cat packages/f0compose/$PID_FILE))"
fi

# Wait for Vite to be ready before deploying — otherwise the first
# /p/<slug> hit on the local URL might 404 while the registry is
# still building.
echo "  Waiting for Vite to come online…"
for _ in $(seq 1 30); do
  if curl -sf "http://localhost:5174" >/dev/null 2>&1; then
    ok "Vite is up at http://localhost:5174"
    break
  fi
  sleep 1
done

# 6. Deploy first build to Vercel --------------------------------------------

echo
bold "Step 5/5 — Publishing your first live build to Vercel…"
if [[ $VERCEL_OK -eq 1 ]]; then
  if pnpm deploy-share "$SLUG"; then
    ok "Live build published."
  else
    warn "Vercel deploy failed. You can retry later with: pnpm deploy-share $SLUG"
  fi
else
  warn "Skipping Vercel deploy because the CLI isn't ready."
  echo "  Once Vercel is set up, run: pnpm deploy-share $SLUG"
fi

# 7. Final summary ------------------------------------------------------------

echo
echo
bold "All set. Your prototype is live."
echo
echo "  Local (auto-reloads as opencode edits):  $LOCAL_URL"
echo "  Live  (share this with teammates):       $LIVE_URL"
echo
bold "Next step — open opencode at this exact folder:"
echo
echo "  packages/f0compose/"
echo
echo "Then paste this message into opencode to start designing:"
echo
dim "  ──────────────────────────────────────────────────────────────"
echo "  I just scaffolded a new prototype at src/prototypes/$SLUG/."
echo "  Read AGENTS.md, then ask me 4 quick questions to scope the"
echo "  screen I want to build, write a short plan, and start"
echo "  iterating. The dev server is already running at $LOCAL_URL"
echo "  and the live share is at $LIVE_URL."
echo "  After every meaningful change, run \`pnpm deploy-share $SLUG\`"
echo "  so my colleagues see the latest build."
dim "  ──────────────────────────────────────────────────────────────"
echo
