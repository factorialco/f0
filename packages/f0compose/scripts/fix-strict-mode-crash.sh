#!/usr/bin/env bash
# ---------------------------------------------------------------------
# fix-strict-mode-crash.sh
#
# One-shot fix for the localhost crash:
#
#   "Maximum update depth exceeded. This can happen when a component
#    repeatedly calls setState inside componentWillUpdate or
#    componentDidUpdate."
#
# Root cause: experimental f0-react components (selectors,
# OneDataCollection lanes, F0AiChat) re-enter setState during
# React.StrictMode's dev double-invocation. Vercel prod is unaffected.
#
# This script removes the <StrictMode> wrapper from
# packages/f0compose/src/main.tsx so localhost matches Vercel.
#
# Usage (from anywhere inside the f0 repo):
#   bash packages/f0compose/scripts/fix-strict-mode-crash.sh
#
# Idempotent - running it twice is safe.
# ---------------------------------------------------------------------

set -euo pipefail

# Resolve repo paths regardless of where the script is invoked from.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
F0COMPOSE_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
MAIN_TSX="$F0COMPOSE_DIR/src/main.tsx"
AGENTS_MD="$F0COMPOSE_DIR/AGENTS.md"

if [ ! -f "$MAIN_TSX" ]; then
  echo "[FAIL] Could not find $MAIN_TSX"
  echo "       Run this from inside the f0 repo. The script auto-resolves paths"
  echo "       relative to its own location, so just run it directly."
  exit 1
fi

# Already fixed? Bail early. Detect "fixed" by absence of either:
#   - the import line                              import { StrictMode } from "react"
#   - the JSX wrapper on its own line              <StrictMode>  (with only whitespace before it)
# We intentionally do NOT match the bare word, because the explanatory
# comment block we add includes "Re-enable <StrictMode> only after ..."
# which would otherwise cause false positives.
if ! grep -qE '^import \{ StrictMode \} from "react"$|^[[:space:]]*<StrictMode>[[:space:]]*$' "$MAIN_TSX"; then
  echo "[OK] StrictMode wrapper already removed from main.tsx - nothing to do."
  echo "     If you are still seeing the crash:"
  echo "       1. Hard-refresh the browser tab (Cmd+Shift+R on macOS)"
  echo "       2. Make sure 'pnpm dev' is actually running"
  echo "       3. Check the terminal where pnpm dev is running for compile errors"
  exit 0
fi

echo "[INFO] Patching $MAIN_TSX"

# Use a temp file + atomic mv so a crash mid-write doesn't corrupt
# main.tsx.
TMP="$(mktemp)"
trap 'rm -f "$TMP"' EXIT

# 1. Drop the `import { StrictMode } from "react"` line.
# 2. Replace the StrictMode wrapper with a bare <RouterProvider />.
# 3. Insert an explanatory comment block so the next person (or AI)
#    doesn't re-add it.
awk '
  /^import \{ StrictMode \} from "react"$/ { next }
  /^createRoot\(rootEl\)\.render\($/ {
    print "// NOTE: React.StrictMode is intentionally NOT used here."
    print "//"
    print "// f0compose pulls in experimental f0-react components (selectors,"
    print "// OneDataCollection lanes, F0AiChat) that arent strict-mode-safe -"
    print "// they re-enter setState during devs double-invocation and crash"
    print "// localhost with \"Maximum update depth exceeded\". Vercel prod builds"
    print "// dont double-invoke, which is why deployments work fine."
    print "//"
    print "// Re-enable <StrictMode> only after the upstream f0-react components"
    print "// have been audited for strict-mode compliance. Until then we mirror"
    print "// production behaviour in dev so teammates can run prototypes locally."
    print "createRoot(rootEl).render(<RouterProvider router={router} />)"
    # Skip the original 4 lines:
    #   <StrictMode>
    #     <RouterProvider router={router} />
    #   </StrictMode>
    # )
    getline; getline; getline; getline
    next
  }
  { print }
' "$MAIN_TSX" > "$TMP"

mv "$TMP" "$MAIN_TSX"

# Sanity checks. If anything looks wrong, restore from git.
# Use the same precise pattern as the early-bail: import line or JSX
# wrapper on its own line, NOT the bare word (the explanatory comment
# mentions <StrictMode> in prose, which is fine).
if grep -qE '^import \{ StrictMode \} from "react"$|^[[:space:]]*<StrictMode>[[:space:]]*$' "$MAIN_TSX"; then
  echo "[FAIL] Patch did not remove all StrictMode references. Restoring original."
  git -C "$F0COMPOSE_DIR" checkout -- "$MAIN_TSX" || true
  echo "       Open $MAIN_TSX manually and:"
  echo "         1. Delete the line: import { StrictMode } from \"react\""
  echo "         2. Replace <StrictMode><RouterProvider .../></StrictMode>"
  echo "            with just <RouterProvider ... />"
  exit 1
fi

if ! grep -q "createRoot(rootEl).render(<RouterProvider router={router} />)" "$MAIN_TSX"; then
  echo "[FAIL] Patch produced an unexpected result. Restoring original."
  git -C "$F0COMPOSE_DIR" checkout -- "$MAIN_TSX" || true
  echo "       Your main.tsx has a non-standard shape. Edit it manually:"
  echo "         1. Delete: import { StrictMode } from \"react\""
  echo "         2. Replace the StrictMode wrapper with the RouterProvider directly"
  exit 1
fi

# Mirror the rule into AGENTS.md so AI agents in this repo do not re-add it.
# Match liberally on either "re-add" + "StrictMode" appearing in the file -
# different existing wordings (with/without backticks, "Dont"/"Don't") all
# count as "already documented", so we don't duplicate the note.
if [ -f "$AGENTS_MD" ] && ! grep -q "re-add.*StrictMode\|StrictMode.*re-add" "$AGENTS_MD"; then
  echo "[INFO] Adding guard note to $AGENTS_MD"
  cat >> "$AGENTS_MD" <<'EOF'

## Don't re-add React.StrictMode

`src/main.tsx` intentionally does NOT wrap the app in
`<React.StrictMode>`. Experimental f0-react components (selectors,
OneDataCollection lanes, F0AiChat) re-enter setState during dev's
double-invocation and crash localhost with "Maximum update depth
exceeded". Vercel prod is unaffected. Re-enable only after upstream
f0-react has been audited for strict-mode safety.
EOF
fi

echo ""
echo "[OK] Done. Next steps:"
echo "  1. Hard-refresh your browser tab (Cmd+Shift+R on macOS)"
echo "  2. If 'pnpm dev' isn't running, start it:"
echo "       cd $F0COMPOSE_DIR && pnpm dev"
echo "  3. Open http://localhost:5174 - the crash should be gone"
echo ""
echo "This is a local-only edit. Don't commit unless your team agrees to"
echo "remove StrictMode globally. To stop git nagging about the change:"
echo "  git update-index --skip-worktree packages/f0compose/src/main.tsx"
