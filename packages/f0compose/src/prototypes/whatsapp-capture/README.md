# WhatsApp-to-Project — prototype family

Five Factorial prototypes that explore turning a WhatsApp message into
a structured action (cost, hours, document, expense, note) on a
project.

## Surfaces

| ID | Slug                                  | Audience  | What it shows                                                                       |
| -- | ------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| S1 | `whatsapp-capture-settings`           | Admin     | Activation settings with 4 states (empty, pending, active, suspended).              |
| S2 | `whatsapp-capture-activity`           | Admin     | Activity feed of every captured message + filters + right-side detail drawer.       |
| S3 | (integrated in `projects-planning`)   | Admin     | Per-project Activity log sidepanel, with System / Team / WhatsApp filter chips.     |
| S4 | `employee-profile-communication`      | Admin/Mgr | Slim employee profile with right-rail "Comunicación" card, 4 link states.           |
| S5 | `whatsapp-capture-magic-link`         | Employee  | Full-screen mobile landing for the one-time-use vinculación link, 4 states.         |

## Shared fixtures

`shared/data.ts` (this folder) contains:

- `captureEmployees`: 5 Mendoza Instalaciones employees with phone +
  link status.
- `captureProjects`: 6 Spanish-construction projects (Avenida Aragón
  12, Hospital Vega, …).
- `captures`: 40 WhatsApp captures with raw message, type, status,
  amount, sender, project.
- `projectActivityEvents`: hand-authored system / team events the S3
  panel mixes with WhatsApp captures.
- `DISCLOSURE`: privacy copy + URL reproduced verbatim across S1 and
  S5.

## State switchers

S1, S2, S4, and S5 expose a `?state=…` query parameter so designers
can deep-link into a specific state during a review (e.g.
`/p/whatsapp-capture-settings?state=suspended`). S2 also supports
`?cap=<capture-id>` to keep the detail drawer open.

## Cross-prototype consistency

- Every WhatsApp-originated row, message, and chip uses the green
  WhatsApp tint (`#128C7E` / `#25D366`) and the `WhatsappChat` icon
  from F0.
- Spanish microcopy throughout for the demo company "Mendoza
  Instalaciones".
- Privacy disclosure is the same string everywhere it surfaces.
