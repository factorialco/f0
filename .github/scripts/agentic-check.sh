#!/usr/bin/env bash
#
# agentic-check.sh
#
# Runs an agentic check against a pull request using a prompt file.
# The agent's verdict determines the check's pass/fail status.
#
# Required environment variables:
#   PR_NUMBER              - The pull request number
#   PROMPT_FILE            - Path to the prompt markdown file (relative to repo root)
#   MODEL                  - The model to use (e.g. azure-cognitive-services/gpt-5.3-codex)
#   GH_TOKEN               - GitHub token for API calls and PR comments
#   AZURE_API_KEY          - Azure API key for OpenCode CLI authentication
#   AZURE_RESOURCE_NAME    - Azure resource name for OpenCode CLI
#   GITHUB_REPOSITORY      - owner/repo (auto-set by GitHub Actions)
#
# Optional environment variables:
#   CHECK_NAME             - Human-readable check name (e.g. "Security Review")
#   CHECK_EMOJI            - Emoji for the check (e.g. "🔒")
#

set -euo pipefail

GITHUB_API="https://api.github.com"

# --- Helpers ---

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

if [[ -z "${AZURE_API_KEY:-}" ]]; then
	echo "::error::AZURE_API_KEY is required"
	exit 1
fi

if [[ -z "${GITHUB_REPOSITORY:-}" ]]; then
	echo "::error::GITHUB_REPOSITORY is required"
	exit 1
fi

# --- Verify OpenCode CLI ---

if ! command -v opencode &>/dev/null; then
	echo "::error::OpenCode CLI is not installed. Add an 'Install OpenCode CLI' step before running this script."
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
PR_AUTHOR=$(echo "${PR_JSON}" | jq -r '.user.login // "unknown"')

# Read prompt and substitute placeholders
PROMPT=$(cat "${PROMPT_FILE}")
PROMPT="${PROMPT//\{\{PR_NUMBER\}\}/${PR_NUMBER}}"
PROMPT="${PROMPT//\{\{BASE_BRANCH\}\}/${BASE_BRANCH}}"
PROMPT="${PROMPT//\{\{HEAD_BRANCH\}\}/${HEAD_BRANCH}}"
PROMPT="${PROMPT//\{\{REPO\}\}/${GITHUB_REPOSITORY}}"

echo "Prompt file: ${PROMPT_FILE}"
echo "PR: #${PR_NUMBER} (${HEAD_BRANCH} -> ${BASE_BRANCH}, author: ${PR_AUTHOR})"
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

if [[ "${HTTP_STATUS}" == "406" ]]; then
	echo "::warning::PR diff is too large for the GitHub API (HTTP 406). Skipping agentic check."
	cat "${DIFF_FILE}" || true
	rm -f "${DIFF_FILE}"
	cat >>"${GITHUB_STEP_SUMMARY}" <<EOF
## ⏭️ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check} — Skipped

PR diff exceeds GitHub's maximum diff size (HTTP 406). The diff is too large to fetch via the API.

Consider breaking this PR into smaller, focused changes.
EOF
	if [[ "${PR_AUTHOR}" == "factorio-bot" ]] && [[ "${HEAD_BRANCH}" == auto_feature/* ]]; then
		echo "verdict=ok" >>"${GITHUB_OUTPUT}"
	else
		echo "verdict=ko" >>"${GITHUB_OUTPUT}"
	fi
	exit 0
fi

if [[ "${HTTP_STATUS}" != "200" ]]; then
	echo "::error::Failed to fetch PR diff (HTTP ${HTTP_STATUS})"
	cat "${DIFF_FILE}" || true
	rm -f "${DIFF_FILE}"
	exit 1
fi

# Filter out auto-generated files that are large and not useful for review
awk '
  /^diff --git/ { skip = ($0 ~ /sorbet\/rbi\//); }
  !skip { print }
' "${DIFF_FILE}" > "${DIFF_FILE}.filtered" && mv "${DIFF_FILE}.filtered" "${DIFF_FILE}"

DIFF_SIZE=$(wc -c <"${DIFF_FILE}" | tr -d ' ')
DIFF_FILES=$(grep -c '^diff --git' "${DIFF_FILE}" || true)
DIFF_ADDITIONS=$(grep -c '^+[^+]' "${DIFF_FILE}" || true)
DIFF_DELETIONS=$(grep -c '^-[^-]' "${DIFF_FILE}" || true)
echo "PR diff fetched (after filtering generated files): ${DIFF_SIZE} bytes, ${DIFF_FILES} files changed, +${DIFF_ADDITIONS}/-${DIFF_DELETIONS} lines"
echo "Files in diff:"
grep '^diff --git' "${DIFF_FILE}" | sed 's|diff --git a/||;s| b/.*||' || true
echo "::endgroup::"

# --- Check diff size ---

DIFF_LINES=$((DIFF_ADDITIONS + DIFF_DELETIONS))
if [[ -z "${MAX_DIFF_LINES:-}" ]]; then
	MAX_DIFF_LINES="10000"
elif [[ ! "${MAX_DIFF_LINES}" =~ ^[0-9]+$ ]]; then
	echo "::error::Invalid MAX_DIFF_LINES value '${MAX_DIFF_LINES}'. Must be an integer. Falling back to default 10000."
	MAX_DIFF_LINES="10000"
fi

if [[ "${DIFF_LINES}" -gt "${MAX_DIFF_LINES}" ]]; then
	echo "::notice::PR diff is too large (${DIFF_LINES} lines > ${MAX_DIFF_LINES} max). Skipping agentic check."
	cat >>"${GITHUB_STEP_SUMMARY}" <<EOF
## ⏭️ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check} — Skipped

PR diff too large to review meaningfully: **${DIFF_LINES} lines** changed (${DIFF_FILES} files, +${DIFF_ADDITIONS}/-${DIFF_DELETIONS}).

Threshold: ${MAX_DIFF_LINES} lines. Consider breaking this PR into smaller, focused changes.
EOF
	NON_LOCALE_FILES=$(grep '^diff --git' "${DIFF_FILE}" | sed 's|diff --git a/||;s| b/.*||' | \
		grep -Ecv '^(backend/components/[^/]+/config/locales/|backend/config/locales/|frontend/src/modules/[^/]+/locales/|frontend/src/translations/|webpage/lang/|webpage/compiled-lang/|factorial-id/frontend/.*/translations/|factorial-id/config/locales/|mobile/src/locales/)' || true)
	if [[ "${PR_AUTHOR}" == "factorio-bot" ]] && \
		[[ "${HEAD_BRANCH}" == auto_feature/* ]] && \
		[[ "${NON_LOCALE_FILES}" == "0" ]]; then
		echo "verdict=ok" >>"${GITHUB_OUTPUT}"
	else
		echo "verdict=ko" >>"${GITHUB_OUTPUT}"
	fi
	exit 0
fi

# --- Run OpenCode CLI (with retries) ---
#
# The model occasionally emits a canned safety refusal ("I'm sorry, but I cannot
# assist with that request.") instead of performing the review. Refusals are
# stochastic — re-running the same prompt usually succeeds — so retry before
# giving up. A run with no parseable VERDICT marker is an agent/model failure,
# not a review finding, and must not be reported as "issues found".

if [[ -z "${MAX_ATTEMPTS:-}" ]] || [[ ! "${MAX_ATTEMPTS}" =~ ^[0-9]+$ ]] || [[ "${MAX_ATTEMPTS}" -lt 1 ]]; then
	MAX_ATTEMPTS="3"
fi

# Stagger concurrent calls to reduce API burst (once, not per retry)
JITTER=$((RANDOM % 10))
echo "Startup jitter: sleeping ${JITTER}s to stagger concurrent API calls"
sleep ${JITTER}

# Write the prepared prompt (with substitutions) to a temp file for OpenCode
PROMPT_TEMP="/tmp/agentic-check-prompt-${PR_NUMBER}.md"
printf '%s' "${PROMPT}" > "${PROMPT_TEMP}"

OUTPUT_FILE=$(mktemp)
VERDICT_LINE=""
LAST_FAILURE=""

for ATTEMPT in $(seq 1 "${MAX_ATTEMPTS}"); do
	echo "::group::Running OpenCode agent (attempt ${ATTEMPT}/${MAX_ATTEMPTS})"
	echo "Command: opencode run --model \"${MODEL}\" --file <prompt-file> -- \"Execute the review.\""
	echo "Prompt length: ${#PROMPT} characters"
	echo ""

	# Stream output to both the log (via tee) and the file for later parsing.
	# This gives real-time visibility in the Actions log.
	set +e
	opencode run \
		--model "${MODEL}" \
		--file "${PROMPT_TEMP}" \
		-- "Execute the review described in the prompt file. The PR diff is at /tmp/pr.diff." \
		2>&1 | tee "${OUTPUT_FILE}"
	EXIT_CODE=${PIPESTATUS[0]}
	set -e

	echo ""
	echo "opencode exited with code: ${EXIT_CODE}"
	echo "Output size: $(wc -c <"${OUTPUT_FILE}" | tr -d ' ') bytes"
	echo "::endgroup::"

	if [[ ${EXIT_CODE} -ne 0 ]]; then
		LAST_FAILURE="opencode exited with code ${EXIT_CODE}"
	else
		AGENT_OUTPUT=$(cat "${OUTPUT_FILE}")
		# Extract the VERDICT JSON from the output (POSIX-compatible, no PCRE)
		VERDICT_LINE=$(printf '%s\n' "${AGENT_OUTPUT}" | sed -n 's/.*<!-- VERDICT:[[:space:]]*\({.*}\).*/\1/p' | head -n 1 || true)

		if [[ -z "${VERDICT_LINE}" ]]; then
			LAST_FAILURE="no VERDICT marker in agent output (the model may have refused to review)"
			echo "--- Agent output (searching for VERDICT) ---"
			# Show last 100 lines to help debug why no verdict was produced
			printf '%s\n' "${AGENT_OUTPUT}" | tail -100
			echo "--- End agent output ---"
			echo ""
			echo "Expected format: <!-- VERDICT: {\"pass\": true/false, \"summary\": \"...\"} -->"
		elif ! echo "${VERDICT_LINE}" | jq empty >/dev/null 2>&1; then
			LAST_FAILURE="invalid VERDICT JSON"
			echo "Raw verdict line: ${VERDICT_LINE}"
			VERDICT_LINE=""
		else
			# Valid verdict obtained
			break
		fi
	fi

	if [[ ${ATTEMPT} -lt ${MAX_ATTEMPTS} ]]; then
		echo "::warning::Attempt ${ATTEMPT}/${MAX_ATTEMPTS} failed: ${LAST_FAILURE}. Retrying in 5s..."
		sleep 5
	fi
done

rm -f "${PROMPT_TEMP}" "${OUTPUT_FILE}"

if [[ -z "${VERDICT_LINE}" ]]; then
	# All attempts failed to produce a parseable verdict. This is an agent/model
	# failure (crash, refusal, or malformed output), not a review finding, so
	# report it as "error" (non-blocking) rather than "ko" (issues found).
	echo "::error::Agent did not produce a structured verdict after ${MAX_ATTEMPTS} attempts. Last failure: ${LAST_FAILURE}"
	echo "verdict=error" >>"${GITHUB_OUTPUT}"
	cat >>"${GITHUB_STEP_SUMMARY}" <<EOF
## ⚠️ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

Agent did not produce a structured verdict after ${MAX_ATTEMPTS} attempts (last failure: ${LAST_FAILURE}).

The PR was **not** reviewed for this dimension — manual review recommended.

> Check the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID) for details.
EOF
	exit 1
fi

# --- Parse verdict ---

echo "::group::Parsing verdict"

PASS=$(echo "${VERDICT_LINE}" | jq -r '.pass // false')
SUMMARY=$(echo "${VERDICT_LINE}" | jq -r '.summary // "No summary provided"')
echo "Verdict found: pass=${PASS}"
echo "Summary: ${SUMMARY}"

echo "::endgroup::"

# --- Write verdict to job summary ---

# Redact the summary on both pass and fail paths — prompt injection could embed secrets
# in the verdict JSON regardless of the pass/fail outcome.
SAFE_SUMMARY=$(redact_secrets "${SUMMARY}")

if [[ "${PASS}" == "true" ]]; then
	echo "Agent check passed."
	echo "verdict=ok" >>"${GITHUB_OUTPUT}"
	cat >>"${GITHUB_STEP_SUMMARY}" <<EOF
## ✅ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

${SAFE_SUMMARY}
EOF
	exit 0
fi

cat >>"${GITHUB_STEP_SUMMARY}" <<EOF
## ❌ ${CHECK_EMOJI:-} ${CHECK_NAME:-Agentic Check}

${SAFE_SUMMARY}

> Full agent output is available in the [Actions log]($GITHUB_SERVER_URL/$GITHUB_REPOSITORY/actions/runs/$GITHUB_RUN_ID).
EOF

echo "::error::Agent check failed: ${SAFE_SUMMARY}"
echo "verdict=ko" >>"${GITHUB_OUTPUT}"
# Use multiline output syntax with random delimiter to safely pass the summary
DELIM="EOF_$(openssl rand -hex 8)"
echo "verdict_text<<${DELIM}" >>"${GITHUB_OUTPUT}"
echo "${SAFE_SUMMARY}" >>"${GITHUB_OUTPUT}"
echo "${DELIM}" >>"${GITHUB_OUTPUT}"
exit 1
