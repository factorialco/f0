# Coste de oportunidad: migrar CopilotKit fuera de f0

## Resumen ejecutivo

f0 es un **design system puro de UI** (`f0-core`, `f0-react`, `f0-react-native`). Sin embargo, CopilotKit introduce una dependencia de **runtime/infraestructura de AI** dentro de la librería de componentes. Este documento analiza el coste de oportunidad de extraer CopilotKit de f0 para que este sea exclusivamente UI.

**Veredicto**: La migración es estratégicamente correcta pero operativamente costosa. El acoplamiento actual es profundo (55+ ficheros, tipos compartidos, sistema de acciones completo). La recomendación es una **migración incremental con capa de abstracción**, no un big-bang.

---

## 1. Estado actual del acoplamiento

### 1.1 Superficie de dependencia

CopilotKit se consume como **4 peer dependencies** en `packages/react/package.json`:

```
@copilotkit/react-core   ^1.54.0   → Provider, hooks (useCopilotAction, useCopilotContext, etc.)
@copilotkit/react-ui     ^1.54.0   → CopilotSidebar, Markdown, tipos de props (InputProps, etc.)
@copilotkit/runtime      ^1.54.0   → Tipo para configuración del runtime
@copilotkit/shared       ^1.54.0   → Message, AIMessage, randomId
```

Dependencias transitivas adicionales: `graphql`, `@urql/core`, `@headlessui/react`, `@ag-ui/*`, paquetes deprecated `@copilotkitnext/*`.

### 1.2 Ficheros afectados

| Capa | Ficheros con imports de @copilotkit | Ejemplos |
|------|-------------------------------------|----------|
| **Tipos públicos** | 3 | `types.ts`, `internal-types.ts`, `components/messages/types.ts` |
| **Provider/Bridge** | 2 | `F0AiChat.tsx`, `CopilotFunctionBridge.tsx` |
| **Acciones (hooks)** | 11 | `useOrchestratorThinkingAction`, `useFormFillAction`, `useDataDownloadAction`, ... |
| **Componentes de mensajes** | 6 | `AssistantMessage`, `MessagesContainer`, `WelcomeScreen`, `UserMessage` |
| **Componentes de input** | 3 | `ChatInput`, `ChatTextarea`, `types.ts` |
| **Componentes de layout** | 2 | `ChatHeader`, `ChatWindow` |
| **Feedback** | 3 | `FeedbackProvider`, `FeedbackModal`, `TurnFeedback` |
| **History** | 1 | `useChatHistory.ts` |
| **Canvas** | 1 | `DashboardContext.tsx` |
| **Utilities** | 2 | `fetchThreadMessages.ts`, `turnUtils.ts` |
| **UpsellingKit** | 5 | `useBookAMeetingCardAction`, `useFAQCardAction`, `useDemoCardAction`, ... |
| **Stories** | 7+ | Diversos stories de Storybook |
| **Tests** | 2+ | `formActions.test.tsx`, `MessagesContainer.test.ts` |
| **Total** | **~55 ficheros** | |

### 1.3 Qué provee CopilotKit vs qué ha construido f0

| Responsabilidad | Proveedor actual | Detalle |
|----------------|-----------------|---------|
| Provider de contexto AI | **CopilotKit** | `<CopilotKit>` wrapping toda la app |
| Conexión con LLM/agente | **CopilotKit** | `runtimeUrl`, `agent`, `credentials`, `headers` |
| Tipo `Message` / `AIMessage` | **CopilotKit** | Usado en 19+ ficheros como tipo base |
| Registro de acciones/tools | **CopilotKit** | `useCopilotAction()`, `useFrontendTool()` |
| `sendMessage` / `reset` / `setMessages` | **CopilotKit** | Via `useCopilotChatInternal()` |
| Threading (`threadId`) | **CopilotKit** | `setThreadId`, history endpoints |
| Sidebar container | **CopilotKit** | `<CopilotSidebar>` como shell del chat |
| Markdown rendering | **CopilotKit** | `<Markdown>` de `@copilotkit/react-ui` |
| Lazy tool rendering | **CopilotKit** | `useLazyToolRenderer()` |
| **UI visual (estilos, layout)** | **f0** | ChatHeader, ChatInput, ChatTextarea, etc. |
| **Estado de la app** | **f0** | `AiChatStateProvider` (modo, canvas, feedback, etc.) |
| **Canvas system** | **f0** | Registries, entities, DashboardCard |
| **Entity refs** | **f0** | Markdown entity references (person, candidate, etc.) |
| **Feedback UI** | **f0** | Thumbs up/down, modal, turn feedback |
| **Form actions (lógica)** | **f0** | F0FormRegistry, Zod schema handling |
| **Clarifying questions UI** | **f0** | ClarifyingQuestionPanel, multi-step |
| **Tool hints** | **f0** | Selector UI, prompt injection |
| **Credits system** | **f0** | Popover, fetchUsage |
| **File attachments** | **f0** | Upload handler, UI |

### 1.4 El "code smell" del Bridge

`CopilotFunctionBridge.tsx` existe porque **la arquitectura de CopilotKit no encaja naturalmente con el estado de f0**. El bridge:

- Extrae funciones imperativas de CopilotKit (`reset`, `setMessages`, `sendMessage`)
- Las inyecta via refs en `AiChatStateProvider`
- Convierte mensajes de Mastra → formato CopilotKit en `fetchThreadMessages.ts`

Esto evidencia que f0 ya está **luchando contra** la abstracción de CopilotKit, no aprovechándola.

---

## 2. Argumentos a favor de migrar (beneficios)

### 2.1 Alineamiento arquitectónico
f0 es un design system. Su misión es proveer componentes UI reutilizables. CopilotKit introduce:
- Dependencia en un **runtime de AI específico** (protocolo GraphQL de CopilotKit)
- Lógica de **comunicación con backend** (threading, history, message sending)
- Un **sistema de acciones** que es infraestructura, no UI

Migrar deja a f0 como lo que debe ser: **puro UI**.

### 2.2 Libertad de vendor
Con CopilotKit fuera, los consumidores de f0 podrían usar:
- Vercel AI SDK
- LangChain.js
- Mastra directamente (sin intermediario)
- Cualquier protocolo custom

Actualmente, **todo consumidor de F0AiChat está obligado a usar CopilotKit como runtime**.

### 2.3 Reducción de superficie de peer dependencies
4 peer dependencies de CopilotKit (+ transitivas: graphql, urql, headlessui, ag-ui) se eliminan. Esto:
- Simplifica las instalaciones de consumidores
- Elimina conflictos de versiones
- Reduce el tamaño del dependency tree

### 2.4 Eliminación de código deprecated
El lock file muestra 6 paquetes `@copilotkitnext/*` marcados como deprecated (transitional v2). Migrar elimina esta deuda técnica de raíz.

### 2.5 Los componentes son `@experimental`
**Todo F0AiChat está marcado como `@experimental`**. No hay contrato de estabilidad. Es el momento ideal para hacer un cambio estructural — antes de que se estabilice la API.

### 2.6 El Bridge ya demuestra fricción
La existencia de `CopilotFunctionBridge` y la conversión Mastra→CopilotKit en `fetchThreadMessages.ts` son señales de que **CopilotKit es un intermediario innecesario** entre Mastra (backend real) y f0 (UI real).

---

## 3. Coste de oportunidad (qué se pierde / qué cuesta)

### 3.1 Esfuerzo de reescritura

| Componente a reemplazar | Esfuerzo estimado | Complejidad |
|------------------------|-------------------|-------------|
| Tipo `Message` / `AIMessage` propio | 1 semana | Baja — definir interfaces + find-and-replace |
| Provider de chat (sendMessage, reset, setMessages) | 2 semanas | Media — state machine de chat |
| Sistema de registro de acciones/tools | 2 semanas | Media-alta — replicar `useCopilotAction` pattern |
| Conexión con Mastra (reemplazar runtimeUrl) | 1-2 semanas | Media — ya tienen fetchThreadMessages como base |
| Reemplazar `<CopilotSidebar>` | 1 semana | Baja — f0 ya tiene `SidebarWindow` custom |
| Reemplazar `<Markdown>` de CopilotKit | 3 días | Baja — existen alternativas (react-markdown, etc.) |
| Reemplazar `useLazyToolRenderer` | 1 semana | Media — renderizado condicional de tools |
| Migrar 5 acciones de UpsellingKit | 3 días | Baja — solo cambia el hook de registro |
| Actualizar tests y stories | 1 semana | Baja |
| **Total estimado** | **8-10 semanas** | |

### 3.2 Riesgo de regresiones
- 55+ ficheros tocados simultáneamente
- Interacción con Mastra backend que podría cambiar de protocolo
- Features como threading, history, voice mode que dependen del flujo actual
- Acciones complejas (forms con fill/submit/getState/present) que usan `useFrontendTool`

### 3.3 Pérdida de funcionalidad "gratis"
CopilotKit provee out-of-the-box:
- **Protocolo de comunicación** con el agente (GraphQL, streaming)
- **Gestión de estado de mensajes** (optimistic updates, error handling)
- **Tool rendering pipeline** (lazy rendering, tool call lifecycle)
- **Thread management** (create, switch, load history)

Todo esto habría que reimplementarlo o delegar en el consumidor.

### 3.4 Coste de oportunidad real
Las 8-10 semanas de migración son semanas que **no se dedican a**:
- Nuevas features de AI (voice mode, multimodal, etc.)
- Mejoras de UX del chat
- Componentes no-AI del design system
- Estabilización de la API experimental

---

## 4. Alternativas de migración

### Opción A: Big-bang (NO recomendada)
Reemplazar CopilotKit de golpe. Alto riesgo, alto esfuerzo, bloquea features durante 2-3 meses.

### Opcion B: Capa de abstracción incremental (RECOMENDADA)

**Fase 1 (2-3 semanas): Abstraer tipos y hooks**
1. Crear `types/chat.ts` con `ChatMessage`, `ChatAIMessage` (mirrors de CopilotKit pero propios)
2. Crear `hooks/useChatEngine.ts` que abstrae `sendMessage`/`reset`/`setMessages`
3. Crear `hooks/useActionRegistry.ts` que abstrae `useCopilotAction`/`useFrontendTool`
4. Migrar ficheros internos a usar las nuevas abstracciones
5. Bajo la superficie, sigue usando CopilotKit — **zero impacto en consumidores**

**Fase 2 (2-3 semanas): Abstraer el provider**
1. Crear `ChatEngineProvider` interface-based (engine agnostic)
2. Crear `CopilotKitEngine` como implementación del engine
3. Mover `<CopilotKit>` + `CopilotFunctionBridge` dentro de `CopilotKitEngine`
4. Exponer API de `F0AiChatProvider` sin tipos de CopilotKit

**Fase 3 (3-4 semanas): Implementar engine alternativo**
1. Crear `MastraDirectEngine` que habla directamente con Mastra (sin CopilotKit)
2. Testear en paralelo con CopilotKitEngine
3. Migrar consumidores uno a uno
4. Deprecar CopilotKitEngine

**Beneficio**: Cada fase es deployable independientemente. No hay big-bang.

### Opcion C: Mover F0AiChat fuera de f0 (como paquete separado)

En vez de eliminar CopilotKit de f0, extraer `F0AiChat` completo a un paquete `@factorialco/f0-ai-chat`:
- f0 queda como puro UI
- `f0-ai-chat` importa de `f0-react` para componentes base + de CopilotKit para la infra
- Los consumidores instalan ambos paquetes

**Pros**: Rápido (~2-3 semanas), no rompe nada, f0 queda limpio
**Contras**: Un paquete más que mantener, posible desincronización de versiones

---

## 5. Métricas de decisión

| Criterio | Mantener CopilotKit en f0 | Migrar fuera |
|----------|--------------------------|--------------|
| f0 como puro design system | No | **Si** |
| Vendor lock-in | CopilotKit obligatorio | Agnóstico |
| Esfuerzo inmediato | 0 | 8-10 semanas |
| Riesgo de regresión | Bajo | Medio-alto |
| Deuda técnica | Crece (bridge, deprecated pkgs) | Se elimina |
| Flexibilidad futura | Limitada por CopilotKit | Total |
| API experimental | Buen momento para cambiar | Buen momento |
| Capacidad de features | Bloqueada 2-3 meses | No afectada (con Opción B) |

---

## 6. Recomendación

**Opción B (abstracción incremental)** si el objetivo es eliminar CopilotKit.
**Opción C (extraer a paquete separado)** si el objetivo principal es que f0 sea puro UI, sin importar si CopilotKit sigue existiendo en el ecosistema.

La Opción C es la más pragmática:
- Coste bajo (2-3 semanas)
- Riesgo bajo (no se reescribe lógica, solo se mueve)
- f0 queda limpio inmediatamente
- La migración fuera de CopilotKit se puede hacer después, ya en el paquete separado, sin afectar f0

Si además se quiere eliminar la dependencia de CopilotKit por completo (vendor freedom), combinar C + B: primero extraer, luego abstraer en el nuevo paquete.
