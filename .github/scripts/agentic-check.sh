#!/usr/bin/env bash
#
# agentic-check.sh
#
# Runs an agentic check against a pull request using a prompt file.
# The agent's verdict determines pass/fail, but this script always exits 0
# (advisory mode — findings are posted as PR comments but never block CI).
#
# Adapted from Factorial's agentic-check.sh for the F0 design system monorepo.
#
# Required environment variables:
#   PR_NUMBER              - The pull request number
#   PROMPT_FILE            - Path to the prompt markdown file (relative to repo root)
#   MODEL                  - The model to use (e.g. claude-opus-4.6)
#   GH_TOKEN               - GitHub token for API calls and PR comments
#   COPILOT_GITHUB_TOKEN   - Token for Copilot CLI authentication
#   GITHUB_REPOSITORY      - owner/repo (auto-set by GitHub Actions)
#
# Optional environment variables:
#   CHECK_NAME             - Human-readable check name (e.g. "Code Review")
#   CHECK_EMOJI            - Emoji for the check (e.g. "📋")
#

set -euo pipefail

GITHUB_API="https://api.github.com"

# --- Helpers ---

# Post a comment on the PR via the GitHub REST API.
post_pr_comment() {
  local body="$1"
  local payload
  payload=$(jq -n --arg body "${body}" '{"body": $body}')
  curl -sS -X POST \
    -H "Authorization: Bearer ${GH_TOKEN}" \
    -H "Accept: application/vnd.github+json" \
    -H "Content-Type: application/json" \
    "${GITHUB_API}/repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
    -d "${payload}" > /dev/null
}

# Redact common secret patterns from output before posting to PR comments.
# GitHub masks secrets in logs but not in API-posted comments.
redact_secrets() {
  local text="$1"
  # Redact GitHub tokens
  text=$(printf '%s' "${text}" | sed -E 's/ghp_[A-Za-z0-9]{36}/[REDACTED]/g')
  text=$(printf '%s' "${text}" | sed -E 's/gho_[A-Za-z0-9]{36}/[REDACTED]/g')
  text=$(printf '%s' "${text}" | sed -E 's/ghs_[A-Za-z0-9]{36}/[REDACTED]/g')
  text=$(printf '%s' "${text}" | sed -E 's/github_pat_[A-Za-z0-9_]{80,}/[REDACTED]/g')
  # Redact generic API key patterns (long hex/base64 strings after common key labels)
  text=$(printf '%s' "${text}" | sed -E 's/(api[_-]?key|token|secret|password|credential)["\x27]?\s*[:=]\s*["\x27]?[A-Za-z0-9+\/\-_]{20,}/\1=[REDACTED]/gi')
  printf '%s' "${text}"
}

# --- Validation ---

if [[ -z "${PR_NUMBER:-}" ]]; then
  echo "::error::PR_NUMBER is required"
  exit 1
fi

if [[ -z "${PROMPT_FILE:-}" ]]; then
  echo "::error::PROMPT_FILE is required"
  exit 1
fi

if [[ ! -f "${PROMPT_FILE}" ]]; then
  echo "::error::Prompt file not found: ${PROMPT_FILE}"
  exit 1
fi

if [[ -z "${MODEL:-}" ]]; then
  echo "::error::MODEL is required"
  exit 1
fi

if [[ -z "${GH_TOKEN:-}" ]]; then
  echo "::error::GH_TOKEN is required"
  exit 1
fi

if [[ -z "${COPILOT_GITHUB_TOKEN:-}" ]]; then
  echo "::error::COPILOT_GITHUB_TOKEN is required"
  exit 1
fi

if [[ -z "${GITHUB_REPOSITORY:-}" ]]; then
  echo "::error::GITHUB_REPOSITORY is required"
  exit 1
fi

# --- Verify Copilot CLI ---

if ! command -v copilot &>/dev/null; then
  echo "::error::Copilot CLI is not installed. Add an 'Install Copilot CLI' step before running this script."
  exit 1
fi

# --- Prepare prompt ---

echo "::group::Preparing prompt"

# Fetch PR metadata for template substitution
PR_JSON=$(curl -sS \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  "${GITHUB_API}/repos/${GITHUB_REPOSITORY}/pulls/${PR_NUMBER}" 2>/dev/null || echo '{}')
BASE_BRANCH=$(echo "${PR_JSON}" | jq -r '.base.ref // "main"')
HEAD_BRANCH=$(echo "${PR_JSON}" | jq -r '.head.ref // "unknown"')

# Read prompt and substitute placeholders
PROMPT=$(cat "${PROMPT_FILE}")
PROMPT="${PROMPT//\{\{PR_NUMBER\}\}/${PR_NUMBER}}"
PROMPT="${PROMPT//\{\{BASE_BRANCH\}\}/${BASE_BRANCH}}"
PROMPT="${PROMPT//\{\{HEAD_BRANCH\}\}/${HEAD_BRANCH}}"
PROMPT="${PROMPT//\{\{REPO\}\}/${GITHUB_REPOSITORY}}"

echo "Prompt file: ${PROMPT_FILE}"
echo "PR: #${PR_NUMBER} (${HEAD_BRANCH} -> ${BASE_BRANCH})"
echo "Model: ${MODEL}"
echo ""
echo "--- Prompt content ---"
echo "${PROMPT}"
echo "--- End prompt ---"
echo "::endgroup::"

# --- Fetch PR diff ---

echo "::group::Fetching PR diff"
DIFF_FILE="/tmp/pr.diff"
HTTP_STATUS=$(curl -sS -w '%{http_code}' -o "${DIFF_FILE}" \
  -H "Authorization: Bearer ${GH_TOKEN}" \
  -H "Accept: application/vnd.github.v3.diff" \
  "${GITHUB_API}/repos/${GITHUB_REPOSITORY}/pulls/${PR_NUMBER}")

if [[ "${HTTP_STATUS}" != "200" ]]; then
  echo "::error::Failed to fetch PR diff (HTTP ${HTTP_STATUS})"
  cat "${DIFF_FILE}" || true
  rm -f "${DIFF_FILE}"
  # Advisory mode: exit 0 even on infra errors
  exit 0
fi

DIFF_SIZE=$(wc -c < "${DIFF_FILE}" | tr -d ' ')
DIFF_FILES=$(grep -c '^diff --git' "${DIFF_FILE}" || echo "0")
DIFF_ADDITIONS=$(grep -c '^+[^+]' "${DIFF_FILE}" || echo "0")
DIFF_DELETIONS=$(grep -c '^-[^-]' "${DIFF_FILE}" || echo "0")
echo "PR diff fetched: ${DIFF_SIZE} bytes, ${DIFF_FILES} files changed, +${DIFF_ADDITIONS}/-${DIFF_DELETIONS} lines"
echo "Files in diff:"
grep '^diff --git' "${DIFF_FILE}" | sed 's|diff --git a/||;s| b/.*||' || true
echo "::endgroup::"

# --- Run Copilot CLI ---

echo "::group::Running Copilot agent"
echo "Command: copilot -p <prompt> --model \"${MODEL}\" --allow-all-tools --add-dir . --add-dir /tmp --no-ask-user"
echo "Prompt length: ${#PROMPT} characters"
echo ""

OUTPUT_FILE=$(mktemp)
EXIT_CODE=0

# Stream output to both the log (via tee) and the file for later parsing.
# This gives real-time visibility in the Actions log.
# Temporarily disable errexit so we can capture the exit code from the pipeline.
#
# Permission model:
#   --allow-all-tools : required for non-interactive (-p) mode; grants shell and tool access
#   --add-dir .       : allow read access to the repo checkout
#   --add-dir /tmp    : allow access to the PR diff file
#   Note: the agent inherits env vars including secrets. Raw output must NOT be
#   posted to PR comments — only to workflow logs where GitHub masks secrets.
set +e
copilot \
  -p "${PROMPT}" \
  --model "${MODEL}" \
  --allow-all-tools \
  --add-dir . \
  --add-dir /tmp \
  --no-ask-user \
  2>&1 | tee "${OUTPUT_FILE}"
EXIT_CODE=${PIPESTATUS[0]}
set -e

echo ""
echo "copilot exited with code: ${EXIT_CODE}"
echo "Output size: $(wc -c < "${OUTPUT_FILE}" | tr -d ' ') bytes"
echo "::endgroup::"

if [[ ${EXIT_CODE} -ne 0 ]]; then
  echo "::warning::copilot exited with code ${EXIT_CODE}"
  # Security: Do not post raw agent output — only to workflow logs where GitHub masks secrets.
  post_pr_comment "$(cat <<EOF
## ⚠️ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}: Agent Error

The agent failed to run (exit code: ${EXIT_CODE}).
This is an **advisory check** — it does not block the PR.

> Full agent output is available in the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID) where secrets are automatically masked by GitHub.

**Prompt file**: \`${PROMPT_FILE}\` | **Model**: \`${MODEL}\`
EOF
)"
  cat >> "${GITHUB_STEP_SUMMARY}" <<EOF
## ⚠️ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

Agent failed to run (exit code: ${EXIT_CODE}).

> Check the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID) for details.
EOF
  rm -f "${OUTPUT_FILE}"
  # Advisory mode: always exit 0
  exit 0
fi

# --- Parse verdict ---

echo "::group::Parsing verdict"

AGENT_OUTPUT=$(cat "${OUTPUT_FILE}")
rm -f "${OUTPUT_FILE}"

# Extract the VERDICT JSON from the output (POSIX-compatible, no PCRE)
VERDICT_LINE=$(printf '%s\n' "${AGENT_OUTPUT}" | sed -n 's/.*<!-- VERDICT:[[:space:]]*\({.*}\).*/\1/p' | head -n 1 || true)

if [[ -z "${VERDICT_LINE}" ]]; then
  echo "::warning::No VERDICT marker found in agent output. Defaulting to fail."
  echo ""
  echo "--- Agent output (searching for VERDICT) ---"
  # Show last 100 lines to help debug why no verdict was produced
  printf '%s\n' "${AGENT_OUTPUT}" | tail -100
  echo "--- End agent output ---"
  echo ""
  echo "Expected format: <!-- VERDICT: {\"pass\": true/false, \"summary\": \"...\"} -->"
  PASS="false"
  SUMMARY="Agent did not produce a structured verdict. Review the output manually."
elif ! echo "${VERDICT_LINE}" | jq empty >/dev/null 2>&1; then
  echo "::warning::VERDICT JSON is invalid. Defaulting to fail."
  echo "Raw verdict line: ${VERDICT_LINE}"
  PASS="false"
  SUMMARY="Agent produced invalid verdict JSON. Review the output manually."
else
  PASS=$(echo "${VERDICT_LINE}" | jq -r '.pass // false')
  SUMMARY=$(echo "${VERDICT_LINE}" | jq -r '.summary // "No summary provided"')
  echo "Verdict found: pass=${PASS}"
  echo "Summary: ${SUMMARY}"
fi

echo "::endgroup::"

# --- Write verdict to job summary and post comment on failure ---

# Redact the summary on both pass and fail paths — prompt injection could embed secrets
# in the verdict JSON regardless of the pass/fail outcome.
SAFE_SUMMARY=$(redact_secrets "${SUMMARY}")

if [[ "${PASS}" == "true" ]]; then
  echo "Agent check passed. Skipping PR comment."
  cat >> "${GITHUB_STEP_SUMMARY}" <<EOF
## ✅ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

${SAFE_SUMMARY}
EOF
  # Advisory mode: always exit 0
  exit 0
fi

echo "::group::Posting PR comment"

# Security: Do NOT post raw agent output in PR comments.
# The agent has shell access and inherits env vars (including secrets). Since the PR
# diff is attacker-controlled, prompt injection could trick the agent into leaking
# secrets. GitHub only auto-masks secrets in workflow logs, not in API-posted comments.
COMMENT_BODY=$(cat <<EOF
## ❌ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}: Issues Found

**Summary**: ${SAFE_SUMMARY}

> This is an **advisory check** — it does not block the PR. Full agent output is available in the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID) where secrets are automatically masked by GitHub.

---
**Prompt file**: \`${PROMPT_FILE}\` | **Model**: \`${MODEL}\`
EOF
)

post_pr_comment "${COMMENT_BODY}"
echo "PR comment posted."
echo "::endgroup::"

cat >> "${GITHUB_STEP_SUMMARY}" <<EOF
## ❌ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

${SAFE_SUMMARY}

> Full agent output is available in the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID).
EOF

echo "::warning::Agent check found issues: ${SAFE_SUMMARY}"
# Advisory mode: always exit 0 regardless of pass/fail
exit 0
