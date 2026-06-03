# Kickstart — your first f0compose prototype, live in 10 minutes

This is the **dummy-proof** path from "I just opened the f0 repo" to
"I have a live Vercel URL with my own prototype that updates every
time I talk to opencode." No prior knowledge needed.

If anything goes wrong, **don't panic**. Paste the error into opencode
(`packages/f0compose/`) and let it fix things for you.

---

## What you'll end up with

- A folder at `packages/f0compose/src/prototypes/<your-slug>/` that
  is **yours**.
- A local URL `http://localhost:5174/p/<your-slug>` that reloads
  instantly while opencode designs the screen.
- A public URL `https://f0-<your-slug>.vercel.app` you can share
  with anyone at Factorial.
- Opencode wired up to design the screen for you, end-to-end.

---

## Before you start — one-time setup (5 minutes)

You only do this once per laptop. After that, every future prototype
is a single command.

### 1. Get the code

If you haven't cloned the f0 monorepo yet:

```sh
cd ~/code           # or wherever you keep code
git clone git@github.com:factorialco/f0.git
cd f0
```

### 2. Install pnpm + Vercel CLI

```sh
# pnpm — our package manager (only if you don't already have it)
npm install -g pnpm

# Vercel CLI — what publishes your live share
npm install -g vercel
vercel login        # follow the browser flow
```

> **Stuck on `npm install -g`?** It may need `sudo`. Try
> `sudo npm install -g pnpm vercel`. If you don't have `npm` at all,
> install Node.js from https://nodejs.org first.

### 3. Make sure opencode is installed and pointing at factorial-skills

Ask the colleague who shared this doc with you — they have a one-line
install. If they say "yes, you have it", you're good.

---

## The actual kickstart (one command)

Open a terminal:

```sh
cd ~/code/f0/packages/f0compose
pnpm kickstart
```

That's it. The script will:

1. Check your tools (pnpm, node, vercel) and tell you exactly what's
   missing if anything is.
2. Ask you for a **slug** (short name, e.g. `time-off-calendar`) and
   a **title** (`Time off calendar`).
3. Install everything (~1 minute).
4. Create your prototype folder with a real, working Factorial page.
5. Start the local dev server in the background.
6. Publish your first live build to Vercel.
7. Print both URLs and the **exact message to paste into opencode**
   to start designing.

If you'd rather skip the interactive prompts:

```sh
pnpm kickstart time-off-calendar "Time off calendar"
```

---

## After kickstart — start designing with opencode

1. **Open opencode at this exact folder** (very important):

   ```sh
   cd ~/code/f0/packages/f0compose
   opencode
   ```

   Opening it at the monorepo root won't load the right skills.

2. **Paste the message kickstart printed for you**. It looks like:

   > I just scaffolded a new prototype at `src/prototypes/<slug>/`.
   > Read AGENTS.md, then ask me 4 quick questions to scope the
   > screen I want to build, write a short plan, and start
   > iterating. The dev server is already running at
   > `http://localhost:5174/p/<slug>` and the live share is at
   > `https://f0-<slug>.vercel.app`. After every meaningful change,
   > run `pnpm deploy-share <slug>` so my colleagues see the latest
   > build.

3. Answer opencode's 4 questions in plain English. Examples:

   > "It's for managers. The main job is to see who is off this week.
   > One table view, no tabs. Each row shows employee, dates, reason.
   > A button to approve or reject."

4. Opencode writes the code; you watch the **local URL** update live
   as it works. The first edit may take 30 seconds while Vite
   recompiles — after that, every change is instant.

5. When you like what you see, tell opencode **"share it"** and it
   will run `pnpm deploy-share <your-slug>` for you. Your colleagues
   refresh `https://f0-<your-slug>.vercel.app` and they see the new
   version.

---

## Sharing with another designer later

When you want to hand the prototype off to a teammate (with all the
conversation context preserved), read **`SHARING.md`** next door.
Short version: tell opencode *"share this prototype with `<name>`"*
and it'll create the handoff docs, push a branch, and give you a
Slack-ready message.

---

## Frequently confusing things

**Q: I closed my terminal and the local URL stopped working.**
Just run `pnpm dev` from `packages/f0compose/` again. Or re-run
`pnpm kickstart <your-slug> "<your-title>"` — it's safe to run
multiple times; it'll reuse what's there.

**Q: My live URL still shows yesterday's version.**
Run `pnpm deploy-share <your-slug>` from `packages/f0compose/`. Or
just tell opencode "redeploy".

**Q: I want to start a completely new prototype.**
Run `pnpm kickstart` again with a different slug. Each prototype is
fully independent — its own folder, its own live URL.

**Q: Opencode is asking me technical-sounding questions.**
Tell it: *"treat me as non-technical — handle all the technical
choices yourself, just confirm the user-visible decisions with me."*
The skill is supposed to default to that mode; if it's not, that
reminder fixes it.

**Q: I hit an error I don't understand.**
Copy the whole error message, paste it into opencode, type
"fix this please", and let it work. That's literally the workflow.

---

## Quick command cheatsheet

All commands run from `packages/f0compose/`.

| Command | What it does |
|---|---|
| `pnpm kickstart` | First-time setup of a brand new prototype (this guide). |
| `pnpm dev` | Restart the local dev server. |
| `pnpm deploy-share <slug>` | Push a new live build of one prototype. |
| `pnpm tsc --noEmit` | Type-check (opencode runs this for you usually). |
| `pnpm check src/prototypes/<slug>` | Validate prototype rules. |

You'll mostly never run these — opencode runs them for you. Keep the
list nearby just in case.
