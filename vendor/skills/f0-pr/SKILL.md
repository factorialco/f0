---
name: f0-pr
description: Create pull requests for the F0 design system monorepo using gh CLI. Use when opening a PR from the f0 repo — handles title format, PR body mapped to PULL_REQUEST_TEMPLATE.md, conventional commit change list, and interactive clarification for missing context.
---

# F0 Pull Request

Creates PRs for the F0 monorepo (`factorialco/f0`). For general branch naming and title conventions, see the `factorial-pr` skill.

## Step 1 — Verify gh CLI

```bash
command -v gh
```

If not found:

- Tell the user: "gh CLI is required. Install it from https://github.com/cli/cli#installation"
- Offer to install it automatically. If the user accepts, run:
  ```bash
  brew install gh
  ```
- After install, run `gh auth status` to confirm authentication. If not authenticated, run `gh auth login`.

## Step 2 — Gather Context

Run these before drafting anything:

```bash
# Full diff stat vs main
git diff --stat origin/main...HEAD

# Commit log since main
git log --oneline origin/main..HEAD

# Current branch name
git branch --show-current
```

## Step 3 — Draft PR Title

Format: `{type}({area}): {summary}`

- **type**: `feat`, `fix`, `refactor`, `chore`, `docs`, `test`
- **area**: component or domain — use the affected package/component name (e.g., `F0Button`, `storybook`, `icons`, `react`, `react-native`)
- **summary**: imperative mood, max 50 characters ("add", "fix", "update" — not "added", "fixed")
- No Jira ID suffix (F0 is not Jira-tracked)

Examples:

```
feat(F0Button): add loading state
fix(F0Select): prevent portal scroll lock
chore(storybook): upgrade to v8
refactor(F0Form): extract field validation hook
```

## Step 4 — Ask for Missing Context

Before writing the body, ask the user about anything not inferable from the diff:

- Are there **visual changes**? If yes, ask for screenshots and/or Figma link.
- Is there anything specific about **why** this change was needed that isn't obvious from the code?
- Is there anything about the **implementation** worth calling out?

Use the `question` tool to collect answers interactively rather than guessing.

## Step 5 — Draft PR Body

Map to the F0 PR template (`.github/PULL_REQUEST_TEMPLATE.md`):

```markdown
## Description

{One or two sentences: what this PR does and why it's needed.}

## Screenshots (if applicable)

{Attach screenshots for any visual or responsive change. If none, omit this section entirely.}

[Link to Figma Design]({Figma URL — omit line if not provided})

## Implementation details

{Consolidated list of changes in conventional commit format:}

- feat: {change 1}
- fix: {change 2}
- chore: {change 3}
```

### Rules for each section

**Description**

- One paragraph maximum — what changed and why
- No bullet points; write in prose
- If the explanation is long, move detail into a collapsed section (see below)

**Screenshots**

- Include for any visual, layout, or responsive change
- Omit the section entirely if there are no visual changes
- If the user provides a Figma link, keep the `[Link to Figma Design](url)` line; otherwise remove it

**Implementation details**

- One bullet per logical change, prefixed with its conventional commit type
- Describe the outcome, not the file path ("add loading spinner to F0Button" not "update F0Button.tsx")
- If a change needs more explanation, use a collapsed section immediately after its bullet:

```markdown
- refactor: extract validation logic into useFieldValidation hook

  <details>
  <summary>Why?</summary>

  The previous approach inlined 80 lines of validation in F0Form.tsx,
  making it hard to test in isolation. The new hook is independently
  testable and reusable across form variants.
  </details>
```

## Step 6 — Create the PR

```bash
gh pr create \
  --title "{title}" \
  --body "$(cat <<'EOF'
## Description

...

## Screenshots (if applicable)

...

## Implementation details

...
EOF
)"
```

- Target branch is `main` unless explicitly told otherwise
- Create as **draft** if the work is not ready for review; ask the user if unsure
- After creation, output the PR URL

## Checklist Before Creating

- [ ] `gh` is installed and authenticated
- [ ] Title follows `{type}({area}): {summary}` format
- [ ] Description is prose, not bullets
- [ ] Screenshots section present only if there are visual changes
- [ ] Figma link present only if provided by the user
- [ ] Implementation details use conventional commit prefixes
- [ ] Collapsed `<details>` used for any explanation longer than 2 sentences
- [ ] No placeholder text remaining in the body
