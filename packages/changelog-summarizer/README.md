# @factorialco/f0-changelog-summarizer

An AI-powered CLI tool that collects changelog entries and git commits across the F0 packages (`react`, `react-native`, `core`) for a given date range, and generates an informal, emoji-rich Slack-ready weekly summary.

A GitHub Actions workflow runs it every Friday at 10:00 UTC and posts to `#f0-updates`.

## Usage

```sh
pnpm tsx src/index.ts --provider <provider> [options]
```

### Required

| Flag                    | Description                                             |
| ----------------------- | ------------------------------------------------------- |
| `--provider <provider>` | AI provider: `openai`, `anthropic`, `google`, or `groq` |

### Optional

| Flag                  | Description                                                                        |
| --------------------- | ---------------------------------------------------------------------------------- |
| `--model <model>`     | Model identifier (defaults to the provider's recommended model — see below)        |
| `--api-key <key>`     | API key (falls back to the provider's env var — see below)                         |
| `--from <YYYY-MM-DD>` | Start date (default: last successful run date, or 7 days ago)                      |
| `--to <YYYY-MM-DD>`   | End date (default: today)                                                          |
| `--ignore-last-run`   | Ignore the cached last-run date and always use the last 7 days                     |
| `--prompt <file>`     | Path to a custom system prompt markdown file                                       |
| `--output <file>`     | Write the summary to a file instead of stdout                                      |
| `--repo-root <path>`  | Path to the git repo root (auto-detected by default)                               |
| `--debug`             | Save collected context to a temp directory before calling the LLM                  |
| `--debug-dir <path>`  | Directory for debug files (default: `/tmp/changelog-summarizer-debug-{timestamp}`) |

### Default models

| Provider    | Default model              |
| ----------- | -------------------------- |
| `openai`    | `gpt-4o`                   |
| `anthropic` | `claude-3-5-sonnet-latest` |
| `google`    | `gemini-1.5-pro`           |
| `groq`      | `llama-3.3-70b-versatile`  |

### API key resolution

The `--api-key` flag takes precedence. If omitted, the following environment variables are checked:

| Provider    | Environment variable           |
| ----------- | ------------------------------ |
| `openai`    | `OPENAI_API_KEY`               |
| `anthropic` | `ANTHROPIC_API_KEY`            |
| `google`    | `GOOGLE_GENERATIVE_AI_API_KEY` |
| `groq`      | `GROQ_API_KEY`                 |

## Examples

Generate a summary for the last 7 days using Groq:

```sh
GROQ_API_KEY=... pnpm tsx src/index.ts --provider groq
```

Generate a summary for a specific week and write it to a file:

```sh
pnpm tsx src/index.ts \
  --provider openai \
  --from 2026-02-23 \
  --to 2026-03-01 \
  --output /tmp/summary.md
```

Inspect what data will be sent to the LLM without calling it:

```sh
pnpm tsx src/index.ts \
  --provider groq \
  --from 2026-02-23 \
  --debug
```

## Date range heuristic

When `--from` is not provided the tool resolves the start date as follows:

1. Read `.cache/summarizer-last-run` from the repo root (written after each successful run)
2. Use whichever is more recent: the cached date or 7 days ago
3. If no cache exists, fall back to 7 days ago

Pass `--ignore-last-run` to skip step 1 and always start from 7 days ago.

## Debug mode

`--debug` saves five files to a timestamped directory before calling the LLM:

| File                 | Contents                                    |
| -------------------- | ------------------------------------------- |
| `changelogs.json`    | Parsed changelog entries for the date range |
| `commits.json`       | Git commits grouped by package              |
| `system-prompt.md`   | The system prompt sent to the LLM           |
| `context-message.md` | The full user message sent to the LLM       |
| `meta.json`          | Run metadata (dates, entry counts)          |

## GitHub Actions workflow

The workflow at `.github/workflows/changelog-summary.yaml` runs every Friday at 10:00 UTC. It can also be triggered manually via `workflow_dispatch` with these inputs:

| Input             | Description                              | Default               |
| ----------------- | ---------------------------------------- | --------------------- |
| `from`            | Start date (YYYY-MM-DD)                  | last run / 7 days ago |
| `to`              | End date (YYYY-MM-DD)                    | today                 |
| `dry_run`         | Skip Slack publish, print to log instead | `false`               |
| `ignore_last_run` | Ignore cached last-run date              | `false`               |

The provider is fixed to `groq` (`llama-3.3-70b-versatile`) in the workflow env.

### Required secrets

| Secret                        | Description                                       |
| ----------------------------- | ------------------------------------------------- |
| `CHANGELOG_AI_API_KEY`        | API key for the configured provider               |
| `SLACK_WEBHOOK_F0_SUMMARIZER` | Incoming webhook URL for the target Slack channel |
