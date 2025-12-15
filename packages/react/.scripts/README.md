# Cycle Dependency Checker

A tool to detect and prevent new circular dependencies in the React package by
comparing against a baseline.

## Overview

The Cycle Dependency Checker analyzes the React package for circular import
dependencies and compares them against a baseline to identify newly introduced
cycles. It uses intelligent caching to store baseline results per commit,
enabling fast comparisons without re-analyzing unchanged code.

## Quick Start

```bash
# Run the checker (default: pre-commit mode)
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts

# Check in CI mode
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts --ci

# Get JSON output
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts --json
```

## How It Works

### Baseline Comparison System

The script uses a **baseline comparison** approach:

1. **Baseline**: A snapshot of circular dependencies at a specific commit
   (typically HEAD)
2. **Current State**: The circular dependencies in your working directory
3. **Comparison**: Only cycles that exist now but didn't exist in the baseline
   are flagged

This approach means:

- ✅ Existing cycles are tolerated (they're part of the baseline)
- ❌ New cycles trigger a failure
- 🎉 Removing cycles is celebrated

### Caching Mechanism

The script caches baseline results to avoid expensive re-analysis:

- **Cache Location**: `.cache/cycle-dependencies-{SHA}.json` in the React
  package
- **Cache Key**: Git commit SHA (e.g., `cycle-dependencies-abc1234.json`)
- **Cache Lifecycle**:
  - Created automatically when analyzing a commit
  - Used for fast comparisons on subsequent runs
  - Automatically cleaned up after 30 days

**How caching works:**

```
1. Script checks if baseline cache exists for commit SHA
2. If exists → Load from cache (fast!)
3. If not exists → Run dpdm analysis → Save to cache
4. Compare current state against cached baseline
```

### Cycle Detection Process

1. **Entry Points**: Analyzes `src/f0.ts` and `src/experimental.ts`
2. **Tool**: Uses `dpdm` (Dependency Mapper) to detect circular import chains
3. **Output**: Structured list of cycles with file paths

Example cycle:

```
A.ts -> B.ts -> C.ts -> A.ts
```

## Usage Modes

### Pre-commit Mode (Default)

```bash
./check-cycle-dependencies.ts --pre-commit
```

**Behavior:**

- Only checks if React package files were modified
- Compares against HEAD commit baseline
- Exits early if no relevant files changed
- Optimized for git hooks

**When to use:** Git pre-commit hooks, local development

### CI Mode

```bash
./check-cycle-dependencies.ts --ci
```

**Behavior:**

- Runs full analysis regardless of file changes
- Suppresses verbose output for cleaner CI logs
- Always compares against HEAD baseline
- Skips cache cleanup to avoid noise

**When to use:** Continuous Integration pipelines

### Compare Against Specific Commit

```bash
./check-cycle-dependencies.ts --compare-commit <commit-sha>
```

**Behavior:**

- Compares current state against a specific commit
- Automatically creates baseline cache if missing
- Useful for validating against known good states

**Example:**

```bash
./check-cycle-dependencies.ts --compare-commit main
./check-cycle-dependencies.ts --compare-commit abc1234
```

**When to use:** Validating changes against a specific branch or commit

### JSON Output Mode

```bash
./check-cycle-dependencies.ts --json
```

**Behavior:**

- Outputs structured JSON for programmatic consumption
- Includes baseline, current, and new cycles data
- Exit code: `0` if no new cycles, `1` if new cycles detected

**Output Format:**

```json
{
  "baseline": {
    "commit": "abc1234",
    "cycles": 5,
    "cyclesList": [...]
  },
  "current": {
    "cycles": 6,
    "cyclesList": [...]
  },
  "newCycles": {
    "count": 1,
    "cyclesList": [...]
  },
  "cyclesDecreased": false,
  "cyclesRemoved": 0,
  "hasNewCycles": true
}
```

**When to use:** Scripting, CI integrations, automated reporting

## What to Do When New Cycles Are Detected

### Step 1: Understand the Cycle

The script will show you the circular dependency path:

```
New circular dependencies detected:

  A.ts -> B.ts -> C.ts -> A.ts
  X.ts -> Y.ts -> X.ts

Please resolve these circular dependencies before committing.
```

### Step 2: Break the Cycle

Common strategies to resolve circular dependencies:

1. **Extract Shared Code**: Move shared functionality to a separate module

   ```typescript
   // Before: A.ts imports B.ts, B.ts imports A.ts
   // After: Extract shared code to C.ts, both A.ts and B.ts import C.ts
   ```

2. **Dependency Injection**: Pass dependencies as parameters instead of
   importing

   ```typescript
   // Before: Direct import creates cycle
   // After: Accept dependency as function parameter
   ```

3. **Restructure Modules**: Reorganize code to eliminate the circular reference

   ```typescript
   // Before: Circular imports between components
   // After: Move shared types/interfaces to a common module
   ```

4. **Barrel Exports**: Be careful with barrel exports (`index.ts`) that
   re-export everything

### Step 3: Verify the Fix

After making changes, re-run the checker:

```bash
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts
```

### Step 4: Commit

Once the checker passes (no new cycles detected), commit your changes. The
baseline will automatically update on the next commit.

## Baseline Management

### Automatic Baseline Updates

- Baselines are created automatically when analyzing a commit
- No manual intervention required
- Each commit gets its own baseline cache file

### Manual Baseline Management

**View baseline cache:**

```bash
ls packages/react/.cache/cycle-dependencies-*.json
```

**Inspect a baseline:**

```bash
cat packages/react/.cache/cycle-dependencies-abc1234.json
```

**Clear all caches:**

```bash
rm packages/react/.cache/cycle-dependencies-*.json
```

**Note**: The script automatically cleans up cache files older than 30 days.

## Exit Codes

- `0`: Success - No new cycles detected (or cycles were reduced)
- `1`: Failure - New cycles detected (or error occurred)

## Performance

- **Fast**: Skips analysis if no React package files were modified (unless
  `--ci`)
- **Cached**: Baseline caching speeds up repeated checks significantly
- **Efficient**: Small JSON cache files, minimal disk usage
- **Auto-cleanup**: Old cache files (>30 days) are automatically removed

## Troubleshooting

### "Could not find HEAD commit"

**Cause**: Not in a git repository or git is not available

**Solution**: Ensure you're in a git repository and git is installed

### Baseline cache not found

**Cause**: First time analyzing a commit

**Solution**: This is normal! The script will create the baseline automatically

### False positives

**Cause**: Baseline might be outdated or incorrect

**Solution**:

1. Verify the baseline commit is correct
2. Clear the cache and let it regenerate:
   `rm packages/react/.cache/cycle-dependencies-*.json`
3. Re-run the checker

### Script is slow

**Cause**: Analyzing large codebase or cache missing

**Solution**:

- Ensure cache directory exists and is writable
- First run will be slower (creating baseline)
- Subsequent runs on the same commit will be fast

## Integration Examples

### Git Pre-commit Hook

Add to `.git/hooks/pre-commit`:

```bash
#!/bin/bash
pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts --pre-commit
```

### CI Pipeline (GitHub Actions)

```yaml
- name: Check cycle dependencies
  run: pnpm exec tsx packages/react/.scripts/check-cycle-dependencies.ts --ci
```

### Package.json Script

```json
{
  "scripts": {
    "check:cycles": "tsx packages/react/.scripts/check-cycle-dependencies.ts"
  }
}
```

## Technical Details

- **Tool**: Uses `dpdm` (Dependency Mapper) for analysis
- **Entry Points**: `src/f0.ts` and `src/experimental.ts`
- **File Filter**: Only analyzes `.ts` and `.tsx` files in `packages/react/`
- **Baseline Format**: JSON array of `CycleDependency` objects
- **Migration**: Supports migration from old plain-text baseline format

## Related Documentation

- [Component Guidelines](../../.cursor/rules/01-component-guidelines.mdc)
- [Project Overview](../../.cursor/rules/00-project-overview.mdc)
