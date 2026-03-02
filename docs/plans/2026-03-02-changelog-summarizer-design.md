# changelog-summarizer Design

**Date:** 2026-03-02  
**Status:** Approved

## Summary

A private CLI tool in the F0 monorepo that collects changelog entries and commits
for a date range across the `react`, `react-native`, and `core` packages, sends the
context to an LLM via `ai-sdk`, and outputs a markdown summary that a GitHub workflow
posts to the `#zero-updater` Slack channel every Friday at 10:00 UTC.

---

## Architecture

### Approach

`tsx` script — no build step. The workflow installs dependencies and runs the CLI
via `pnpm tsx src/index.ts`. Follows the monorepo's no-semicolon, double-quote,
trailing-comma code style (oxfmt).

### Package Location

```
packages/changelog-summarizer/
```

Private workspace (`private: true`), never published to npm.

---

## Package Structure

```
packages/changelog-summarizer/
  src/
    index.ts                -- CLI entry point (commander)
    types.ts                -- Shared types
    providers.ts            -- Provider registry (openai, anthropic, google, groq)
    summarizer.ts           -- Assembles context + prompt, calls LLM
    collectors/
      changelog.ts          -- Parses CHANGELOG.md files for a date range
      commits.ts            -- Runs git log scoped to packages/
    formatters/
      markdown.ts           -- Cleans/formats the LLM output
    prompts/
      default.md            -- Default system prompt
  package.json
  tsconfig.json
```

---

## CLI Interface

```bash
pnpm tsx src/index.ts \
  --provider openai \
  --model gpt-4o \
  --api-key sk-... \
  --from 2026-02-24 \
  --to 2026-02-28 \
  --prompt ./custom-prompt.md \
  --output summary.md
```

| Flag          | Required | Default                | Description                               |
| ------------- | -------- | ---------------------- | ----------------------------------------- |
| `--provider`  | Yes      | —                      | `openai`, `anthropic`, `google`, `groq`   |
| `--model`     | No       | Provider default       | Model identifier                          |
| `--api-key`   | No       | env var fallback       | API key for the chosen provider           |
| `--from`      | No       | 7 days ago or last run | Start date (ISO `YYYY-MM-DD`)             |
| `--to`        | No       | today                  | End date (ISO `YYYY-MM-DD`)               |
| `--prompt`    | No       | built-in `default.md`  | Path to a custom prompt markdown file     |
| `--output`    | No       | stdout                 | Write summary to a file instead of stdout |
| `--repo-root` | No       | auto-detected          | Path to the git repo root                 |

### API Key Resolution Order

1. `--api-key` CLI argument
2. Environment variable (`OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GOOGLE_GENERATIVE_AI_API_KEY`, `GROQ_API_KEY`)
3. Error with a clear message if neither is present

### Date Range Logic

- If `--from` is omitted: use the earlier of (today − 7 days) and (last successful run date
  stored in `.cache/last-run`). This ensures no content is missed when the workflow runs
  slightly late or is manually re-triggered.
- If `--to` is omitted: use today.

---

## Data Collection

### Changelog Parser (`collectors/changelog.ts`)

- Reads `packages/react/CHANGELOG.md`, `packages/react-native/CHANGELOG.md`,
  `packages/core/CHANGELOG.md`
- Parses release-please format: extracts version headers + dates + features/bug-fix entries
- Filters to entries whose release date falls within `[from, to]`
- Returns: `ChangelogEntry[]`

```ts
interface ChangelogEntry {
  package: string; // "@factorialco/f0-react"
  version: string; // "1.384.0"
  date: string; // "2026-02-27"
  features: string[];
  bugFixes: string[];
  compareUrl: string;
}
```

### Commit Collector (`collectors/commits.ts`)

- Runs: `git log --since={from} --until={to} --oneline --no-merges -- packages/react/ packages/react-native/ packages/core/`
- Returns commits grouped by detected package path
- Deduplicates commits already covered by a changelog entry (same hash in changelog links)

```ts
interface CommitEntry {
  hash: string;
  message: string;
  author: string;
  date: string;
  packages: string[]; // which packages were touched
}
```

---

## LLM Summarization

### Provider Registry (`providers.ts`)

Wraps ai-sdk provider factories. Each provider is instantiated with the resolved API key
(from `--api-key` or env var). Returns a `LanguageModel` instance.

Supported providers and their default models:

| Provider    | Package             | Default Model              |
| ----------- | ------------------- | -------------------------- |
| `openai`    | `@ai-sdk/openai`    | `gpt-4o`                   |
| `anthropic` | `@ai-sdk/anthropic` | `claude-3-5-sonnet-latest` |
| `google`    | `@ai-sdk/google`    | `gemini-1.5-pro`           |
| `groq`      | `@ai-sdk/groq`      | `llama-3.3-70b-versatile`  |

### Summarizer (`summarizer.ts`)

Uses `generateText()` from `ai`:

```ts
const { text } = await generateText({
  model: resolvedModel,
  system: promptContent,
  prompt: buildContext(changelogEntries, commitEntries, from, to),
});
```

The context string sent as the user message:

```
Weekly summary period: 2026-02-24 to 2026-02-28

## F0 React changelog entries
[structured changelog entries]

## F0 React Native changelog entries
[structured changelog entries]

## F0 Core changelog entries
[structured changelog entries]

## Additional commits not in changelog
[any extra commits]
```

### Default Prompt (`prompts/default.md`)

Instructs the LLM to:

- Write a Slack-friendly weekly summary in markdown
- Separate sections for react, react-native, and core
- Lead with high-impact changes (new components, breaking changes)
- Group small fixes together
- Reference version numbers
- Keep total under 600 words
- If a package had no changes, briefly note it

---

## Output

The CLI writes markdown to stdout (or `--output` file). The GitHub workflow:

1. Captures output to `/tmp/summary.md`
2. Converts markdown → Slack mrkdwn (same `perl` one-liner as `npm-publish.yaml`)
3. Builds a Block Kit payload with `jq`
4. Posts to `SLACK_WEBHOOK_ZERO_UPDATER` via `curl`

---

## GitHub Workflow

**File:** `.github/workflows/changelog-summary.yaml`  
**Trigger:** Every Friday at 10:00 UTC + manual `workflow_dispatch`

`workflow_dispatch` inputs:

- `from` (optional, YYYY-MM-DD)
- `to` (optional, YYYY-MM-DD)
- `provider` (choice: openai / anthropic / google / groq, default: openai)

The API key is stored as `CHANGELOG_AI_API_KEY` in GitHub secrets.

---

## Error Handling

| Scenario                 | Behaviour                                                    |
| ------------------------ | ------------------------------------------------------------ |
| No changes in date range | Outputs "No changes this week" message, still posts to Slack |
| LLM call fails           | Workflow step fails; GitHub sends failure notification       |
| CHANGELOG file missing   | Skip that package, note in the summary                       |
| API key missing          | Fail immediately with a descriptive error                    |
| `git log` fails          | Fail with the raw error output                               |

---

## Dependencies

```json
{
  "dependencies": {
    "ai": "^6.0.105",
    "@ai-sdk/openai": "^3.0.37",
    "@ai-sdk/anthropic": "^3.0.50",
    "@ai-sdk/google": "^3.0.34",
    "@ai-sdk/groq": "^3.0.26",
    "commander": "^14.0.3"
  },
  "devDependencies": {
    "@types/node": "^22.13.9",
    "tsx": "^4.19.2",
    "typescript": "^5.7.3"
  }
}
```
