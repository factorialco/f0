# Tasks

## Bloqueantes (necesitamos input del equipo F0 antes de implementar)

- [ ] Confirmar lista de los 4 stakeholders (2 diseñadores + 2 devs) con: **nombre, Slack ID, GitHub handle**
- [ ] Confirmar que `#f0-support` (`C082ZNKS403`) está disponible para añadir un bot
- [ ] Crear/elegir Google Cloud project para hostear el bot (¿reutilizamos uno existente del equipo F0 o creamos `f0-tooling`?)
- [ ] Conseguir API key de Anthropic (¿hay cuenta corporativa o creamos una para F0?)
- [ ] Decidir umbral de confianza inicial (sugerencia: 0.7 sobre 1.0)
- [ ] Decidir ventana del routing inteligente (sugerencia: 90 días)

## Implementación — Fase 1: Rotación (en este repo, sin bot todavía)

- [ ] Crear `f0-rotation.yml` en la raíz del repo con la rota inicial
- [ ] Crear `scripts/whos-on-call.ts` que lea el YAML y print el firefighter de la semana actual
- [ ] Test unit del cálculo de rotación (semanas ISO, overrides, OOF)
- [ ] Documentar en el header del YAML cómo editar (rota, overrides, oof)
- [ ] Commit + PR

## Implementación — Fase 2: Slack app (sin LLM todavía)

- [ ] Crear app de Slack en api.slack.com:
  - Nombre: `F0 Support`
  - Scopes: `app_mentions:read`, `chat:write`, `users:read`, `reactions:read`
  - Event Subscriptions: `app_mention`
  - Instalar en el workspace
- [ ] Crear `apps/slack-support/` con scaffold Bolt JS + TypeScript
- [ ] Implementar listener de `app_mention` que responda "echo" en thread
- [ ] Crear `Dockerfile` y verificar build local
- [ ] Configurar GitHub Actions workflow `deploy-slack-support.yml`:
  - Trigger: push a `main` que toque `apps/slack-support/**` o `f0-rotation.yml`
  - Build + push a Google Artifact Registry
  - Deploy a Cloud Run
- [ ] Hacer un primer deploy de prueba en Cloud Run y verificar que el `app_mention` llega

## Implementación — Fase 3: Investigación + clasificación

- [ ] Implementar `mcp-client.ts` (cliente MCP al endpoint de F0 Storybook publicado)
- [ ] Implementar `git-blame.ts` (clona el repo en el container o usa GitHub API para `git log`)
- [ ] Implementar `classifier.ts` (Claude Sonnet, prompt que devuelve `{type, confidence, components, language}`)
- [ ] Implementar `investigator.ts` (orquesta MCP + lectura de código según los componentes)
- [ ] Implementar `rotation.ts` (lee `f0-rotation.yml`, calcula firefighter para semana actual)
- [ ] Implementar `router.ts` (decisión: responder vs escalar, target del escalado)
- [ ] Implementar `responder.ts` (genera respuesta final en el idioma detectado)
- [ ] Implementar `slack-templates.ts` (mensajes ES/EN para escalado y respuesta)

## Implementación — Fase 4: Wire-up + tests

- [ ] Conectar todo en `index.ts`: app_mention → classifier → investigator → router → responder
- [ ] Tests unitarios de cada módulo
- [ ] Tests de integración con golden questions del tech-spec
- [ ] Health check endpoint para Cloud Run
- [ ] Logs estructurados (JSON) para debug en Cloud Logging

## Implementación — Fase 5: Rollout

- [ ] Beta con los 4 stakeholders en `#f0-support` (1 semana)
- [ ] Recoger feedback (👍/👎 reactions + thread replies)
- [ ] Ajustar umbral de confianza y prompts según feedback
- [ ] Anunciar en compañía
- [ ] Dashboard de métricas: % respondidas vs escaladas, satisfacción, tiempo de respuesta del firefighter

## Métricas y observabilidad

- [ ] Loggear cada interacción a Cloud Logging: clasificación, confianza, decisión, target, latencia
- [ ] Opt-in a un sheet o dashboard simple para que el equipo F0 vea métricas semanales
- [ ] Alerta si error rate > 5% o si el bot escala > 80% de las preguntas (señal de que el umbral está mal)

## Completed

<!-- Move tasks here when done, with date -->
