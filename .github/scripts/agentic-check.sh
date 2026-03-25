#!/usr/bin/env bash
# =============================================================================
# Agentic Check — F0 Design System
#
# Runs a single AI-powered review agent against a PR diff using GitHub Copilot CLI.
# Adapted from Factorial's agentic-check.sh for the F0 monorepo.
#
# Required environment variables:
#   PR_NUMBER             — Pull request number
#   PROMPT_FILE           — Path to the agent prompt markdown file
#   MODEL                 — Model identifier (e.g., claude-opus-4.6)
#   GH_TOKEN              — GitHub token for API access
#   COPILOT_GITHUB_TOKEN  — Token for Copilot CLI authentication
#   GITHUB_REPOSITORY     — owner/repo (e.g., factorialco/f0)
#
# Optional environment variables:
#   CHECK_NAME            — Human-readable check name (default: "Agentic Check")
#   CHECK_EMOJI           — Emoji prefix for the check (default: "")
# =============================================================================

set -euo pipefail

CHECK_NAME="${CHECK_NAME:-Agentic Check}"
CHECK_EMOJI="${CHECK_EMOJI:-}"

# -----------------------------------------------------------------------------
# Helpers
# -----------------------------------------------------------------------------

post_pr_comment() {
  local body="$1"
  local comment_marker="<!-- agentic-check: ${CHECK_NAME} -->"

  # Check if a comment with this marker already exists
  local existing_comment_id
  existing_comment_id=$(gh api \
    "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
    --jq ".[] | select(.body | contains(\"${comment_marker}\")) | .id" \
    2>/dev/null | head -1 || true)

  local full_body="${comment_marker}
${body}"

  if [[ -n "${existing_comment_id}" ]]; then
    gh api \
      "repos/${GITHUB_REPOSITORY}/issues/comments/${existing_comment_id}" \
      -X PATCH \
      -f body="${full_body}" > /dev/null
    echo "Updated existing PR comment (id: ${existing_comment_id})"
  else
    gh api \
      "repos/${GITHUB_REPOSITORY}/issues/${PR_NUMBER}/comments" \
      -f body="${full_body}" > /dev/null
    echo "Created new PR comment"
  fi
}

redact_secrets() {
  local text="$1"
  # Strip GitHub tokens
  text=$(echo "${text}" | sed -E 's/gh[pousr]_[A-Za-z0-9_]{36,}/**REDACTED**/g')
  # Strip common API key patterns
  text=$(echo "${text}" | sed -E 's/(Bearer|token|key|secret|password|credential)[= :]+[A-Za-z0-9_\-]{20,}/**REDACTED**/gi')
  echo "${text}"
}

# -----------------------------------------------------------------------------
# Validation
# -----------------------------------------------------------------------------

missing_vars=()
for var in PR_NUMBER PROMPT_FILE MODEL GH_TOKEN COPILOT_GITHUB_TOKEN GITHUB_REPOSITORY; do
  if [[ -z "${!var:-}" ]]; then
    missing_vars+=("${var}")
  fi
done

if [[ ${#missing_vars[@]} -gt 0 ]]; then
  echo "::error::Missing required environment variables: ${missing_vars[*]}"
  exit 1
fi

if ! command -v copilot &>/dev/null; then
  echo "::error::Copilot CLI not found. Install with: npm install -g @github/copilot"
  exit 1
fi

if [[ ! -f "${PROMPT_FILE}" ]]; then
  echo "::error::Prompt file not found: ${PROMPT_FILE}"
  exit 1
fi

echo "=== ${CHECK_EMOJI} ${CHECK_NAME} ==="
echo "PR: #${PR_NUMBER}"
echo "Model: ${MODEL}"
echo "Prompt: ${PROMPT_FILE}"

# -----------------------------------------------------------------------------
# Prepare the prompt
# -----------------------------------------------------------------------------

# Fetch PR metadata
BASE_BRANCH=$(gh pr view "${PR_NUMBER}" --json baseRefName -q '.baseRefName')
HEAD_BRANCH=$(gh pr view "${PR_NUMBER}" --json headRefName -q '.headRefName')
REPO="${GITHUB_REPOSITORY}"

echo "Base: ${BASE_BRANCH}"
echo "Head: ${HEAD_BRANCH}"

# Read the prompt and substitute placeholders
PROMPT=$(cat "${PROMPT_FILE}")
PROMPT="${PROMPT//\{\{PR_NUMBER\}\}/${PR_NUMBER}}"
PROMPT="${PROMPT//\{\{BASE_BRANCH\}\}/${BASE_BRANCH}}"
PROMPT="${PROMPT//\{\{HEAD_BRANCH\}\}/${HEAD_BRANCH}}"
PROMPT="${PROMPT//\{\{REPO\}\}/${REPO}}"

# Write the prepared prompt to a temp file for the agent
echo "${PROMPT}" > /tmp/prepared-prompt.md

# -----------------------------------------------------------------------------
# Fetch PR diff
# -----------------------------------------------------------------------------

echo "Fetching PR diff..."
gh api \
  "repos/${GITHUB_REPOSITORY}/pulls/${PR_NUMBER}" \
  -H "Accept: application/vnd.github.v3.diff" \
  > /tmp/pr.diff

DIFF_LINES=$(wc -l < /tmp/pr.diff | tr -d ' ')
DIFF_FILES=$(grep -c '^diff --git' /tmp/pr.diff || true)
DIFF_ADDITIONS=$(grep -c '^+[^+]' /tmp/pr.diff || true)
DIFF_DELETIONS=$(grep -c '^-[^-]' /tmp/pr.diff || true)

echo "Diff stats: ${DIFF_FILES} files, +${DIFF_ADDITIONS}/-${DIFF_DELETIONS}, ${DIFF_LINES} lines"

if [[ "${DIFF_LINES}" -eq 0 ]]; then
  echo "Empty diff — skipping check"
  echo "### ${CHECK_EMOJI} ${CHECK_NAME}: Skipped (empty diff)" >> "${GITHUB_STEP_SUMMARY:-/dev/null}"
  exit 0
fi

# -----------------------------------------------------------------------------
# Run the Copilot agent
# -----------------------------------------------------------------------------

echo "Running Copilot agent..."

AGENT_OUTPUT_FILE="/tmp/agent-output.txt"

set +e
copilot \
  --model "${MODEL}" \
  --allow-all-tools \
  --add-dir . \
  --add-dir /tmp \
  --no-ask-user \
  --prompt "$(cat /tmp/prepared-prompt.md)" \
  2>&1 | tee "${AGENT_OUTPUT_FILE}"
AGENT_EXIT_CODE=$?
set -e

AGENT_OUTPUT=$(cat "${AGENT_OUTPUT_FILE}")

if [[ ${AGENT_EXIT_CODE} -ne 0 ]]; then
  echo "::warning::Copilot agent exited with code ${AGENT_EXIT_CODE}"

  SUMMARY="### ${CHECK_EMOJI} ${CHECK_NAME}: Agent Error

The review agent encountered an error (exit code ${AGENT_EXIT_CODE}).
This is an advisory check — it does not block the PR.

<details>
<summary>Agent output</summary>

\`\`\`
$(redact_secrets "${AGENT_OUTPUT}" | head -100)
\`\`\`

</details>"

  echo "${SUMMARY}" >> "${GITHUB_STEP_SUMMARY:-/dev/null}"
  # Advisory mode: always exit 0
  exit 0
fi

# -----------------------------------------------------------------------------
# Parse verdict
# -----------------------------------------------------------------------------

VERDICT_LINE=$(grep -oP '<!-- VERDICT: \K.*?(?= -->)' "${AGENT_OUTPUT_FILE}" | tail -1 || true)

if [[ -z "${VERDICT_LINE}" ]]; then
  echo "::warning::No VERDICT marker found in agent output"

  SUMMARY="### ${CHECK_EMOJI} ${CHECK_NAME}: No Verdict

The agent completed but did not produce a structured verdict.
This is an advisory check — it does not block the PR.

<details>
<summary>Agent output (last 50 lines)</summary>

\`\`\`
$(redact_secrets "${AGENT_OUTPUT}" | tail -50)
\`\`\`

</details>"

  echo "${SUMMARY}" >> "${GITHUB_STEP_SUMMARY:-/dev/null}"
  # Advisory mode: always exit 0
  exit 0
fi

echo "Verdict: ${VERDICT_LINE}"

# Parse JSON fields
PASS=$(echo "${VERDICT_LINE}" | python3 -c "import sys, json; print(json.loads(sys.stdin.read()).get('pass', False))" 2>/dev/null || echo "")
VERDICT_SUMMARY=$(echo "${VERDICT_LINE}" | python3 -c "import sys, json; print(json.loads(sys.stdin.read()).get('summary', ''))" 2>/dev/null || echo "")

if [[ "${PASS}" == "True" ]]; then
  echo "PASSED"

  SUMMARY="### ${CHECK_EMOJI} ${CHECK_NAME}: Passed

${VERDICT_SUMMARY}"

  echo "${SUMMARY}" >> "${GITHUB_STEP_SUMMARY:-/dev/null}"

  # Post a success comment to the PR (so reviewers can see it ran)
  post_pr_comment "${SUMMARY}"
else
  echo "ISSUES FOUND"

  REDACTED_SUMMARY=$(redact_secrets "${VERDICT_SUMMARY}")

  SUMMARY="### ${CHECK_EMOJI} ${CHECK_NAME}: Issues Found

${REDACTED_SUMMARY}

> This is an **advisory check** — it does not block the PR. Please review the findings above."

  echo "${SUMMARY}" >> "${GITHUB_STEP_SUMMARY:-/dev/null}"

  # Post findings as a PR comment
  post_pr_comment "${SUMMARY}"
fi

# Advisory mode: always exit 0 regardless of pass/fail
exit 0
