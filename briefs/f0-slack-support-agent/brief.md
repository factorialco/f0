# F0 Slack Support Agent

**Created:** 2026-05-15
**Source:** Conversación con Desi (opencode session)
**Status:** raw
**Owner:** Desi (a confirmar entre los 4 stakeholders)

---

## Summary

Crear un Slack bot **propiedad del equipo F0** que viva en el canal [`#f0-support`](https://factorialteam.slack.com/archives/C082ZNKS403) (`C082ZNKS403`) y conteste dudas sobre el design system F0 (componentes, props, ejemplos de uso). Cuando el bot no tenga suficiente confianza o la pregunta sea una decisión de diseño, debe escalar haciendo `@mention` al **dev experto en el componente afectado** (vía `git blame`) o, en su defecto, al **firefighter de la semana** (rotación entre 2 diseñadores y 2 devs), incluyendo un resumen de lo que ya investigó.

El bot es una app **Slack Bolt JS** (TypeScript) que vive en `apps/slack-support/` de este repo, se despliega en **Google Cloud Run**, usa **Claude Sonnet** como LLM, y consulta el **Storybook MCP de F0** + el código fuente del repo.

**Importante:** este bot NO tiene relación con Factorial One (el producto agentic de Factorial). Es una herramienta interna del equipo F0, completamente independiente, mantenida por F0.

## Key Takeaways

- **Plataforma:** Slack Bolt JS app standalone en `apps/slack-support/` de este repo (NO en factorial-agent / Factorial One)
- **Hosting:** Google Cloud Run (scale-to-zero, deploy desde GitHub Actions)
- **LLM:** Anthropic Claude Sonnet vía API directa
- **Canal:** Solo [`#f0-support`](https://factorialteam.slack.com/archives/C082ZNKS403) (`C082ZNKS403`), invocado por mención al bot
- **Fuente de verdad:** Storybook MCP de F0 (`http://localhost:6006/mcp` en local, Azure SWA en producción) + lectura del código fuente del repo
- **Rotación:** Archivo `f0-rotation.yml` versionado en la raíz de este repo, con 4 personas (2 diseñadores + 2 devs), cálculo automático por semana ISO + overrides para vacaciones
- **Criterio de escalado:** Clasificación de pregunta + score de confianza
  - Escala si: `design_decision`, `bug_or_issue`, o confianza < umbral
  - Responde si: `component_usage` con confianza alta y match en docs
- **Routing inteligente:** Antes de pingar al firefighter, busca en `git log` quién ha tocado más recientemente el componente sobre el que se pregunta (últimos 90 días). Si ese dev pertenece al equipo F0, se le hace ping. Si no o está OOO, fallback al firefighter de la rota. Para `design_decision` siempre va al designer firefighter (ignora git blame).
- **Forma de escalar:** Reply en el mismo thread con `@mention` + resumen estructurado de lo investigado
- **Idioma:** Bot responde en el idioma de la pregunta (auto-detect ES/EN)

## Próximos pasos

Ver [`tasks.md`](./tasks.md) y [`tech-spec.md`](./tech-spec.md).
