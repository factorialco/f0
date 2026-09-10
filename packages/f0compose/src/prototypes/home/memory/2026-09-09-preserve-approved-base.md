# Aprendizaje para el agente de prototipado — 2026-09-09

## Instrucción de Jonathan
Estamos construyendo un agente en paralelo. Conservar los aprendizajes y convertirlos después en un proceso más eficiente. Volver a la base anterior para construir la propuesta.

## Evidencia y error observado
Jonathan pidió ampliar la home sobre la última base aprobada, conservar su chat y reutilizar widgets de la PR factorial-composer#48. La implementación sustituyó /p/home por HomeV2 y creó una conversación de onboarding paralela. Usar piezas F0 y pasar controles técnicos no garantizó respetar la experiencia aprobada. No faltaba información esencial en el prompt.
INTEGRATION.md ya establecía explícitamente que HomeV2 era una exploración separada, no un reemplazo de /p/home. Fue un fallo de aplicación del contexto disponible.

## Regla reutilizable
1. Identificar y registrar la base aprobada (checkout, commit, URL y componentes visibles).
2. Separar referencias de comportamiento de la UI que debe conservarse.
3. Reutilizar componentes completos y patrones existentes antes de construir nuevas piezas F0.
4. No sustituir chat, compositor, navegación ni estructura de widgets al solicitar una extensión.
5. Validar primero un recorrido pequeño sobre la UI original: widget de nómina → Ask Factorial → conversación original con contexto.
6. Comparar la experiencia antes/después en navegador, además de ejecutar controles técnicos.
7. Describir con precisión qué se conserva y qué cambia; no llamar integración a una sustitución.
8. Conservar trabajo paralelo y mantener las exploraciones descartadas fuera de la ruta principal.

## Base para continuar
Commit 78067a6dd186e1cbb7ec7f5d3918d8dbf98691f9, checkout local f0-home-first-version, rama codex/home-first-version, URL http://127.0.0.1:5180/p/home.
Home.tsx → HybridHome + HomeCanvas; compositor de HybridHome; ConversationView y conversationStore originales; widgets WindowsColumn/WindowStack y WindowsMenu.
No publicar ni mergear esta exploración. El trabajo de otros checkouts queda intacto.

## Estado
Se ha recuperado la ruta original de Home y el almacén original de conversaciones. Los cambios descartados de HomeV2 están archivados en rejected-exploration/home-v2.patch y NewsReview.tsx.txt. HomeV2 vuelve a su estado anterior. Los nuevos widgets quedan aparcados como referencia, sin montarse en /p/home.
La reconstrucción completa del onboarding NO está implementada sobre la base original todavía.
Este archivo es memoria local para incorporar al agente posteriormente; no implica que se haya modificado el agente que se construye en paralelo.

## Primera pieza reconstruida y comprobada
Se incorporan al WindowsMenu/WindowsColumn originales Mi nómina, Mis vacaciones, Recruitment y Recent documents. Los dos últimos recuperan datos y composición F0 de la PR #48 (procedencia exacta en ../home-widgets/REFERENCE.md). Home, HybridHome y ConversationView permanecen iguales al checkpoint aprobado. conversationStore solo admite un guion opcional en su entrada contextual existente.

Verificado en navegador: nómina → Ask Factorial → explicación original con 3400 − 900 = 2500 euros; candidatos y documentos de la PR visibles; ampliar, restaurar y cerrar Recruitment usa las acciones originales. TypeScript y controles F0 pasan.

Pendientes de siguientes fases: entrevista y resumen dentro del chat original, revisión de fuentes, disponibilidad y captura de gastos de la PR, rutinas y reports. No afirmar que esos recorridos están reconstruidos.
