# Tech Spec — F0 Slack Support Agent

**Status:** draft
**Owner:** TBD
**Reviewers:** Equipo F0 (2 diseñadores + 2 devs)

---

## 1. Goal

Reducir la carga de soporte 1:1 sobre el equipo F0 contestando automáticamente las dudas de uso de componentes en `#f0-support`, y enrutando lo no trivial al dev experto en el componente afectado o, en su defecto, al firefighter de la semana, siempre con contexto de lo ya investigado.

## 2. Non-goals

- No es un agente de generación de código (no produce componentes nuevos).
- No reemplaza la review de diseño ni decisiones de roadmap.
- No escucha mensajes sin mención explícita.
- No responde en DMs (solo en thread del canal).
- No tiene relación con Factorial One (producto agentic de Factorial). Es una herramienta interna del equipo F0.

## 3. High-level architecture

```
Usuario en #f0-support (C082ZNKS403)
        │ @F0Support ¿Cómo uso F0Form con un wizard?
        ▼
  Slack Events API → POST /slack/events
        │
        ▼
  Cloud Run service (Slack Bolt JS, TypeScript)
        │
        ├─► classifier.ts (Claude Sonnet)
        │     └─► { type: "component_usage", confidence: 0.9,
        │           components: ["F0Form","F0WizardForm"], language: "es" }
        │
        ├─► investigator.ts
        │     ├─► mcp-client.ts → MCP F0 Storybook (list/get-documentation)
        │     └─► git-blame.ts (si necesita leer código fuente)
        │
        ├─► router.ts
        │     ├─► confianza ≥ 0.7 + answerable → responder
        │     └─► escalar:
        │           1. design_decision → designer firefighter
        │           2. else → git-blame del componente
        │              ├─ experto F0 + no OOO → ping al experto
        │              └─ else → dev firefighter
        │
        └─► responder.ts → Slack Web API (chat.postMessage en thread, idioma detectado)
```

## 4. Project layout

```
factorial-one/  (este repo)
├── f0-rotation.yml                       # Rotación + equipo + OOF (raíz, visible)
├── apps/
│   └── slack-support/
│       ├── package.json                  # Workspace pnpm
│       ├── tsconfig.json
│       ├── Dockerfile
│       ├── README.md
│       ├── src/
│       │   ├── index.ts                  # Bolt app + listener app_mention
│       │   ├── config.ts                 # env vars (zod-validated)
│       │   ├── classifier.ts             # Claude Sonnet wrapper
│       │   ├── investigator.ts           # Orquesta MCP + código
│       │   ├── router.ts                 # Decisión escalado + target
│       │   ├── responder.ts              # Genera respuesta final
│       │   ├── rotation.ts               # Lee f0-rotation.yml
│       │   ├── git-blame.ts              # Tool: dev experto por componente
│       │   ├── mcp-client.ts             # Cliente MCP F0
│       │   └── slack-templates.ts        # Mensajes ES/EN
│       └── tests/
│           ├── classifier.test.ts
│           ├── rotation.test.ts
│           ├── router.test.ts
│           └── golden-questions.test.ts  # Test scenarios end-to-end
└── scripts/
    └── whos-on-call.ts                   # CLI: print firefighter de la semana actual
```

## 5. Key components

### 5.1 `f0-rotation.yml` (raíz del repo)

```yaml
# Rotación semanal de firefighter del design system F0.
# El bot calcula la semana ISO actual y hace módulo sobre las listas
# para determinar quién está on-call.
#
# Para cambiar la rota base: edita las listas y avanza `anchor_iso_week`.
# Para overrides puntuales (vacaciones, swaps): añade entrada en `overrides:`.
# Para opt-out temporal del routing inteligente: añade el slack_id a `oof:`.

# Equipo completo de F0. Todos pueden ser pingados por el routing inteligente
# (git blame), no solo los que estén on-call esta semana.
team:
  designers:
    - { name: "TBD-Designer-A", slack_id: "U_TBD_1", github: "tbd-designer-a" }
    - { name: "TBD-Designer-B", slack_id: "U_TBD_2", github: "tbd-designer-b" }
  devs:
    - { name: "TBD-Dev-A", slack_id: "U_TBD_3", github: "tbd-dev-a" }
    - { name: "TBD-Dev-B", slack_id: "U_TBD_4", github: "tbd-dev-b" }

# Rotación: orden en el que se asigna el firefighter semanal.
rotation:
  designers: ["U_TBD_1", "U_TBD_2"]
  devs: ["U_TBD_3", "U_TBD_4"]

# Semana ISO desde la que el índice 0 está on-call. Format: YYYY-Www
anchor_iso_week: "2026-W21"

# Overrides puntuales. Key = semana ISO. Cualquier rol omitido usa la rota base.
overrides:
  # "2026-W30": { designer: "U_TBD_2", dev: "U_TBD_4" }

# Opt-out temporal del routing inteligente.
oof:
  # - { slack_id: "U_TBD_3", until: "2026-08-15", reason: "vacaciones" }
```

**Algoritmo de cálculo del firefighter:**

```
weeks_since_anchor = current_iso_week - anchor_iso_week
designer_index = weeks_since_anchor % len(rotation.designers)
dev_index = weeks_since_anchor % len(rotation.devs)
```

Si la semana actual está en `overrides`, ese valor toma precedencia.

**Algoritmo de routing inteligente (para `bug_or_issue` y `component_usage` con baja confianza):**

```
1. Extraer componentes mencionados (ej: ["F0Form"])
2. Para cada componente, resolver path: packages/react/src/.../F0Form.tsx
3. git log --since="90 days ago" --format="%ae" -- <path>
4. Filtrar autores ∈ team.devs (mapeado github → slack_id)
5. Filtrar autores ∈ oof
6. Rankear por número de commits (desc), desempate por commit más reciente
7. Si hay ganador → ese es el target
8. Si no → fallback al firefighter dev de la semana
```

### 5.2 Slack app

- **Nombre visible:** `F0 Support`
- **Scopes (bot):** `app_mentions:read`, `chat:write`, `users:read`, `reactions:read`
- **Event Subscriptions:** `app_mention` → `https://<cloud-run-url>/slack/events`
- **Instalada en:** `factorialteam` workspace, añadida solo a `#f0-support` (`C082ZNKS403`)
- **Modo:** HTTP mode (no Socket Mode), porque Cloud Run expone HTTPS

### 5.3 LLM (Claude Sonnet)

- Provider: Anthropic API directa (`@anthropic-ai/sdk`)
- Modelo: `claude-sonnet-4` (configurable vía env `ANTHROPIC_MODEL`)
- Dos llamadas por interacción:
  1. **Clasificación** (~200 input tokens, ~100 output): devuelve JSON `{type, confidence, components, language}`
  2. **Respuesta** (~2-5k input con contexto MCP, ~500 output): genera respuesta final en idioma detectado
- Coste estimado: <$0.05 por interacción → $50/mes para 1000 preguntas

### 5.4 MCP F0 client

- Endpoint: env `F0_MCP_URL` (por defecto el publicado en Azure SWA)
- Toolset usado: `docs` (`list-all-documentation`, `get-documentation`, `get-documentation-for-story`)
- Health check al boot del container; si MCP cae, el bot escala todo con tag `mcp_unavailable`

### 5.5 Git blame tool

- En el container, el código está disponible (multi-stage Dockerfile copia el repo o monta volumen)
- Mejor: usa GitHub API (`GET /repos/{owner}/{repo}/commits?path=...&since=...`) para no necesitar checkout completo
- Cache de 1h por componente para no hacer rate-limit

## 6. Decisión de escalado y routing (pseudo-código)

```ts
const { type, confidence, components, language } = await classifier(question)

const ESCALATE_TYPES = ["design_decision", "bug_or_issue"]
const CONFIDENCE_THRESHOLD = 0.7
const shouldEscalate =
  ESCALATE_TYPES.includes(type) || confidence < CONFIDENCE_THRESHOLD

if (!shouldEscalate) {
  return answer(investigationResult, { language })
}

let target: string
let routingReason: string

if (type === "design_decision") {
  // Decisiones de diseño SIEMPRE al designer firefighter
  const ff = await getFirefighter()
  target = ff.designer_slack_id
  routingReason = "design_decision → designer firefighter"
} else {
  // bug_or_issue / low_confidence → routing inteligente
  const expert = await findRelevantDev(components)
  const oof = await getOofList()

  if (expert && !oof.includes(expert.slack_id)) {
    target = expert.slack_id
    routingReason = `experto en ${components.join(", ")} (${expert.recent_commits} commits últimos 90d)`
  } else {
    const ff = await getFirefighter()
    target = ff.dev_slack_id
    routingReason = expert
      ? "experto OOO, fallback a firefighter"
      : "sin experto identificable, firefighter"
  }
}

return escalate({ target, summary, reason: routingReason, language })
```

## 7. Mensaje de escalado (templates)

**Español:**
```
👋 Hola <@target>, te paso esta consulta porque {routing_reason}.

*Pregunta:* {pregunta resumida en 1 línea}

*Por qué escalo:* {design_decision | potential_bug | low_confidence (0.4)}

*Lo que ya investigué:*
• Componentes relevantes: {F0Form, F0Dialog}
• Docs consultadas: {links}
• Código revisado: {packages/react/src/.../X.tsx:42}

{breve análisis o hipótesis si la hay}
```

**English:** misma estructura traducida. Selección por `language` del clasificador.

## 8. Deployment

- **Hosting:** Google Cloud Run (project: TBD)
- **Build:** GitHub Actions workflow `.github/workflows/deploy-slack-support.yml`
  - Trigger: push a `main` que toque `apps/slack-support/**` o `f0-rotation.yml`
  - Steps: build Docker → push a Artifact Registry → deploy a Cloud Run
- **Secrets** (Cloud Run runtime):
  - `SLACK_BOT_TOKEN` (xoxb-...)
  - `SLACK_SIGNING_SECRET`
  - `ANTHROPIC_API_KEY`
  - `GITHUB_TOKEN` (para git-blame via GitHub API)
- **Observability:** Cloud Logging (logs JSON estructurados), Cloud Run metrics

## 9. Test scenarios

| ID | Pregunta | Esperado |
|----|----------|----------|
| T-1 | "¿Qué props tiene F0Dialog?" | Responde con lista de props del MCP, confianza ≥ 0.8 |
| T-2 | "El EmployeeSelector no carga, ¿bug?" | Escala al dev experto / firefighter con tag `potential_bug` |
| T-3 | "¿Deberíamos hacer un componente nuevo de Timeline?" | Escala al designer firefighter con tag `design_decision` |
| T-4 | "Hola, ¿cómo va el día?" | Tipo=`other`, responde cortésmente sin escalar |
| T-5 | "¿Cómo uso F0Form?" pero MCP cae | Escala con tag `low_confidence` + nota `mcp_unavailable` |
| T-6 | Pregunta en español | Responde en español |
| T-7 | Pregunta en inglés | Responde en inglés |
| T-8 | Override de la semana | Hace ping a la persona del override, no a la rota base |
| T-9 | "Bug en F0Form" → DevA tiene 8 commits últimos 90d, DevB tiene 2 | Pinga a DevA (experto), no al firefighter |
| T-10 | "Bug en F0Form" → único experto está OOO | Fallback al firefighter dev |
| T-11 | "¿Deberíamos cambiar color de F0Button?" → DevA es experto en F0Button | Pinga al designer firefighter (design_decision ignora git blame) |
| T-12 | Pregunta sobre componente que nadie ha tocado en 90d | Pinga al firefighter dev |

## 10. Rollout plan

1. **Semana 1:** `f0-rotation.yml` + `scripts/whos-on-call.ts` + tests de cálculo. PR a main. Validar manualmente que la rota da quien debe.
2. **Semana 2:** Scaffold `apps/slack-support/` con Bolt JS. Listener `app_mention` que responde "echo en thread". Dockerfile + GH Action de deploy. Primer deploy a Cloud Run y verificar que llegan eventos.
3. **Semana 3:** Implementar classifier + investigator + router + responder. Tests unitarios + golden questions. Beta cerrada con los 4 stakeholders.
4. **Semana 4:** Iterar umbral de confianza y prompts según feedback. Anunciar a la compañía. Dashboard de métricas básico.

## 11. Open questions

Ver [`concerns.md`](./concerns.md).
