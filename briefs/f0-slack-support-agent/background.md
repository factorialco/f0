# Background

## Source

**Channel/Thread:** Conversación opencode con Desi, 2026-05-15
**Participants:** Desi (PM/Designer F0), agent

## Raw Context

Desi propuso:

> "Podemos crear un agente que conteste las dudas de f0 por slack por los diseñadores de f0 segun a quien le toque contestar cada semana? que filtre las peticiones y si no las puede contestar que haga ping @ al diseñador que este te firefighting esa semana?"

Aclaraciones recogidas en la conversación:

- **Canal:** `#f0-support`
- **Equipo F0:** 2 diseñadores + 2 devs (4 personas en rotación)
- **Fuente de info:** Storybook MCP + código fuente del repo
- **Criterio de escalado:** Confianza baja **y** clasificación (design_decision siempre escala)
- **Forma de escalar:** Mención al firefighter + resumen de lo investigado
- **Rotación:** Quería algo "sencillo y automático"

## Estado actual del repo F0

- Repo: `factorialco/factorial-one` (monorepo pnpm con `packages/react`, `packages/react-native`, `packages/core`, `packages/one`)
- Storybook MCP server ya configurado en `.mcp.json` (root) → `http://localhost:6006/mcp`
- Toolsets MCP disponibles:
  - `docs` (local + publicado): `list-all-documentation`, `get-documentation`, `get-documentation-for-story`
  - `dev` (solo local): `get-storybook-story-instructions`, `preview-stories`
  - `test` (solo local): `run-story-tests`
- AGENTS.md ya instruye explícitamente: "Never hallucinate component properties. Before using any prop on an F0 component, query `get-documentation`"

Eso es exactamente lo que el agente debe hacer también.

## Related Links

- AGENTS.md: `/AGENTS.md`
- MCP config: `/.mcp.json`
- Storybook MCP docs: ver sección "Storybook MCP Server" en AGENTS.md
- Skill `factorial-ai`: para crear el skill v3 en factorial-agent
- Skill `factorial-specs`: workflow del tech spec
