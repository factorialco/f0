# Briefs

Structured captures from conversations, Slack threads, Jira tickets, and meetings.

Each subfolder is a self-contained brief. Start with `brief.md` in any folder.

## File Reference

| File | Required | Purpose |
|---|---|---|
| `brief.md` | Yes | Summary, status, key takeaways |
| `background.md` | No | Raw context, quotes, links |
| `concerns.md` | No | Risks, open questions, dependencies |
| `wip.md` | No | Evolving thinking, scratch notes |
| `tasks.md` | No | Concrete next steps with checkboxes |
| `decisions.md` | No | Choices made + rationale |
| `tech-spec.md` | No | Implementation-level design (moves to `factorial/tech_specs/` once impl starts) |

## Status Values

- **raw** — just captured, not yet reviewed
- **processed** — reviewed, tasks extracted, ready to act on
- **archived** — done or no longer relevant
