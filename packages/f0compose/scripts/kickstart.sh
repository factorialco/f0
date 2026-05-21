#!/usr/bin/env bash
#
# scripts/kickstart.sh — One-shot "publish my prototype to Vercel".
#
# Usage:
#   pnpm kickstart                        # interactive
#   pnpm kickstart <slug> "<Title>"       # scripted
#
# Idempotent: safe to re-run.

set -euo pipefail
cd "$(dirname "$0")/.."

bold() { printf "\033[1m%s\033[0m\n" "$*"; }
dim()  { printf "\033[2m%s\033[0m\n" "$*"; }
ok()   { printf "\033[32m✓\033[0m %s\n" "$*"; }
warn() { printf "\033[33m⚠\033[0m %s\n" "$*"; }
fail() { printf "\033[31m✗\033[0m %s\n" "$*"; }

echo
bold "f0compose kickstart — let's get your prototype live."
echo

SLUG="${1:-}"
TITLE="${2:-}"

if [[ -z "$SLUG" ]]; then
  echo "Slug (lowercase letters, digits, hyphens only):"
  echo "  Examples: time-off-calendar, hiring-funnel"
  read -r -p "  Slug: " SLUG
fi

if [[ -z "$TITLE" ]]; then
  echo
  echo "Human-readable title (shown on the page):"
  read -r -p "  Title: " TITLE
fi

if [[ ! "$SLUG" =~ ^[a-z0-9-]+$ ]]; then
  fail "Slug '$SLUG' invalid. Lowercase letters, digits, hyphens only."
  exit 1
fi
if [[ -z "$TITLE" ]]; then
  fail "Title cannot be empty."; exit 1
fi

LOCAL_URL="http://localhost:5174/p/$SLUG"
LIVE_URL="https://f0-$SLUG.vercel.app"

bold "Step 1/5 — Checking your tools…"
command -v pnpm >/dev/null 2>&1 || { fail "pnpm missing."; exit 1; }
ok "pnpm OK."
command -v node >/dev/null 2>&1 || { fail "node missing."; exit 1; }
ok "node OK ($(node --version))."

VERCEL_OK=1
if ! command -v vercel >/dev/null 2>&1; then
  VERCEL_OK=0
  warn "Vercel CLI not found."
  if npm install -g vercel >/dev/null 2>&1; then
    ok "Vercel CLI installed."; VERCEL_OK=1
  else
    warn "Run: sudo npm install -g vercel && vercel login"
  fi
else
  ok "Vercel CLI OK."
fi

if [[ $VERCEL_OK -eq 1 ]]; then
  if ! vercel whoami >/dev/null 2>&1; then
    warn "Not logged into Vercel. Run: vercel login"
    exit 1
  fi
  ok "Logged in as $(vercel whoami 2>/dev/null)."
fi

echo
bold "Step 2/5 — Installing dependencies…"
pnpm install >/tmp/f0compose-kickstart-install.log 2>&1 || {
  fail "pnpm install failed. See /tmp/f0compose-kickstart-install.log"
  exit 1
}
ok "Dependencies installed."

echo
bold "Step 3/5 — Scaffolding prototype folder…"
tsx scripts/scaffold-prototype.ts "$SLUG" "$TITLE"

echo
bold "Step 4/5 — Starting dev server…"
DEV_LOG="/tmp/f0compose-kickstart-dev.log"
PID_FILE=".kickstart-dev.pid"
if [[ -f "$PID_FILE" ]] && kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then
  ok "Dev server already running (PID $(cat "$PID_FILE"))."
else
  nohup pnpm dev >"$DEV_LOG" 2>&1 &
  DEV_PID=$!
  echo "$DEV_PID" > "$PID_FILE"
  ok "Dev server started (PID $DEV_PID). Logs: $DEV_LOG"
fi

echo "  Waiting for Vite to come online…"
for _ in $(seq 1 30); do
  if curl -sf "http://localhost:5174" >/dev/null 2>&1; then
    ok "Vite is up at http://localhost:5174"
    break
  fi
  sleep 1
done

echo
bold "Step 5/5 — Publishing first live build to Vercel…"
if [[ $VERCEL_OK -eq 1 ]]; then
  pnpm deploy-share "$SLUG" && ok "Live build published." || \
    warn "Deploy failed. Retry: pnpm deploy-share $SLUG"
else
  warn "Skipped Vercel deploy. Once set up: pnpm deploy-share $SLUG"
fi

echo
echo
bold "All set."
echo "  Local: $LOCAL_URL"
echo "  Live:  $LIVE_URL"
echo
