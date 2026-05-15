# Concerns

## Open Questions

- [ ] ¿Quiénes son exactamente los 4 stakeholders? (nombres + Slack IDs + GitHub handles para el routing inteligente)
- [x] ~~¿El canal `#f0-support` ya existe?~~ → Sí, `C082ZNKS403`
- [ ] ¿One ya está instalado en el workspace de Slack y tiene acceso a `#f0-support` (`C082ZNKS403`)?
- [ ] ¿La rotación es semanal estricta (lunes-domingo ISO)? ¿O empieza en otro día?
- [ ] ¿Cómo se maneja la rotación en holidays/vacaciones? ¿Auto-skip o swap manual via `overrides:`?
- [ ] ¿El MCP server de F0 publicado (Azure SWA) es accesible desde la infraestructura donde corre One? Si no, hay que decidir si One se conecta al MCP local de cada PR de F0 o a uno hosteado.
- [ ] ¿Queremos métricas? (cuántas preguntas contesta el bot vs escala, tiempo de respuesta del firefighter, satisfacción)
- [ ] ¿El agente debe responder en hilo siempre, o también en mensajes nuevos del canal?
- [x] ~~¿Idioma?~~ → Responde en el idioma de la pregunta (auto-detect)
- [ ] Para el routing por git blame: ¿la ventana de 90 días es razonable? ¿Pesamos por número de commits, líneas tocadas, o último commit?
- [ ] ¿Excluir bots/dependabot del análisis de git blame? (sí, claramente, pero confirmar)

## Risks

- [ ] **Confianza calibrada mal** → si el umbral es bajo, el bot escala todo (inútil); si es alto, contesta cosas mal y degrada la confianza del equipo en él
- [ ] **MCP no disponible en producción** → si el endpoint de F0 MCP cae o no es accesible desde One, el agente queda inservible. Necesitamos health-check + fallback claro
- [ ] **Hallucination de props** → ya documentado en AGENTS.md como riesgo conocido. El skill DEBE forzar consulta MCP antes de citar cualquier prop
- [ ] **Spam al firefighter** → si el agente escala mal, una persona recibe 20 pings en una semana
- [ ] **Drift de la rotación** → si nadie mantiene `f0-rotation.yml`, la rotación queda obsoleta. Mitigación: validador en CI que avise si el anchor lleva > 6 meses sin actualizar
- [ ] **Privacidad** → el agente lee mensajes de Slack. Asegurarse de que no hay PII sensible en `#f0-support` o que One ya cumple con las políticas
- [ ] **Versión de F0** → el código fuente del repo es `main`. Si un usuario pregunta sobre la versión publicada (npm), puede haber drift. ¿Citamos versión?
- [ ] **Ping al "experto" sin consentimiento** → el routing por git blame puede pingar a alguien que no esté preparado para ser support (vacaciones, otra tarea urgente). Mitigación: respetar `oof:` flag en `f0-rotation.yml`, y permitir opt-out con un comando `/f0-support exclude-me 7d`

## Dependencies

- Factorial One con integración Slack funcional en producción
- MCP server de F0 accesible desde donde corre One (local Storybook **o** Azure SWA)
- Repo `factorial-one` accesible para el skill (lectura de código de `packages/react`, `packages/react-native`, **y de `git log` para routing inteligente**)
- Slack API permisos: `chat:write`, `app_mentions:read`, `users:read` para resolver Slack IDs
- Mapeo GitHub handle → Slack ID para los 4 stakeholders (necesario para el routing inteligente; va en `f0-rotation.yml`)
