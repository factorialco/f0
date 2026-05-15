# Decisions

## 2026-05-15 — Plataforma: Slack Bolt JS standalone en este repo (NO Factorial One)

**Decision:** El bot es una app Slack Bolt JS independiente, vive en `apps/slack-support/` dentro del repo `factorial-one`, y NO se mete en Factorial One (factorial-agent).

**Context:** En la primera versión de este brief se había propuesto meterlo como skill v3 en factorial-agent. Desi señaló correctamente que mezcla dos cosas que no tienen nada que ver: Factorial One es un producto para clientes, esto es una herramienta interna del equipo F0.

**Alternatives Considered:**
- Skill v3 en Factorial One (factorial-agent) — **rechazado**: acopla una herramienta interna a un producto cliente. Cualquier cambio requeriría coordinar con el equipo de plataforma AI, competir con prioridades de producto, y dividir la lógica entre dos repos.
- GitHub Action triggered by Slack — rechazado: latencia mayor (10-30s), límites de tiempo de ejecución, peor DX para iterar
- Slack Workflow + servicio AI externo (n8n/Make) — rechazado: menos control, más dependencias externas
- Repo nuevo dedicado — rechazado: overhead inicial, pierde la ventaja de tener bot + componentes en el mismo PR

**Rationale:** Equipo F0 dueño total. Iteración a la velocidad de F0. Bot, rotación y código de los componentes que documenta viven en el mismo repo (un solo PR puede tocar todo). Despliegue independiente.

---

## 2026-05-15 — Hosting: Google Cloud Run

**Decision:** Despliegue en Google Cloud Run vía GitHub Actions con Dockerfile.

**Rationale:** Scale-to-zero (no cuesta cuando no se usa), HTTPS gestionado, Factorial ya usa GCP, deploy automático desde GH Action con un workflow simple.

---

## 2026-05-15 — LLM: Anthropic Claude Sonnet

**Decision:** Claude Sonnet vía API directa de Anthropic para clasificación y respuesta.

**Rationale:** Buen razonamiento, soporte multilenguaje fuerte, fácil de cambiar luego (abstrayendo provider). Sin acoplar el bot a la infra IA de Factorial.

---

## 2026-05-15 — Invocación: solo por @mención en #f0-support

**Decision:** El bot solo escucha cuando se le menciona explícitamente en `#f0-support` (`C082ZNKS403`). No auto-detecta preguntas.

**Alternatives Considered:**
- Multi-canal — diferido: empezar con un canal acota el riesgo
- Auto-detección — rechazado: requiere `message.channels` scope, mucho ruido, mucho coste de tokens

**Rationale:** Mención explícita = intención clara del usuario, scope mínimo de Slack, menos falsos positivos.

---

## 2026-05-15 — Fuente de conocimiento: Storybook MCP + código fuente

**Decision:** El bot usa el Storybook MCP de F0 como fuente primaria y lee código de `packages/react` / `packages/react-native` como fuente secundaria.

**Context:** AGENTS.md ya documenta el MCP server y prohíbe explícitamente alucinar props.

**Rationale:** El MCP es la fuente canónica de docs/stories. El código cubre los huecos. Notion/Confluence se añade solo si hay demanda.

---

## 2026-05-15 — Rotación: f0-rotation.yml en la raíz del repo

**Decision:** La rotación se define en `f0-rotation.yml` en la raíz del repo `factorial-one`, con cálculo automático por semana ISO y overrides puntuales.

**Alternatives Considered:**
- Google Calendar — rechazado: requiere OAuth/API extra, no versionable
- Slack User Group dinámico — rechazado: requiere job que actualice el grupo cada semana
- PagerDuty/OpsGenie — rechazado: overkill para 4 personas

**Rationale:** YAML versionado = PR-friendly, auditable, cero infra. Cálculo por semana ISO es determinista. `overrides:` cubre vacaciones sin cambiar la rota base. Lectura del archivo desde el bot vía la GitHub API o checkout en el container.

---

## 2026-05-15 — Escalado: clasificación + confianza, con resumen estructurado

**Decision:** El bot escala si la pregunta es `design_decision`, `bug_or_issue`, o si la confianza es < umbral (inicial 0.7). Al escalar, postea reply en el mismo thread con `@mention` al target y un resumen de lo investigado.

**Rationale:** Doble criterio reduce tanto falsos positivos (responder mal) como falsos negativos (escalar lo trivial). El resumen estructurado ahorra tiempo a quien recibe el ping.

---

## 2026-05-15 — Routing inteligente vía git blame antes que rota

**Decision:** Antes de hacer ping al firefighter de la rota, el bot identifica el/los componentes mencionados en la pregunta y busca en `git log` qué dev del equipo F0 ha tocado ese código en los últimos 90 días. Si hay match, se hace ping a ese dev. Si no o está OOO, fallback al firefighter de la rota.

**Reglas:**
1. Si el dev "experto" no está en el equipo F0 → ignorar y usar firefighter
2. Si el dev "experto" está en `oof:` → ignorar y usar firefighter
3. Si hay empate, elegir al que tiene commits más recientes
4. **`design_decision` siempre ignora git blame y va al designer firefighter** (las decisiones de diseño no las decide quien tocó el código)

**Rationale:** Combina lo predecible de la rota con la intuición de "quién sabe más de esto ahora mismo". Mejor experiencia para quien pregunta y para el resto del equipo.

---

## 2026-05-15 — Idioma de respuesta

**Decision:** El bot detecta el idioma de la pregunta y responde en el mismo idioma. Soporta español e inglés inicialmente.

**Rationale:** UX > convención de código. Forzar inglés en Slack reduce adopción.
