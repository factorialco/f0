# F0 clarifying panel compatibility copy

Source: `/Users/jonathan.centeno/code/f0-pr-4510/packages/react/src/sds/ai/F0ClarifyingPanel`, checkout HEAD `50a38df41838316c9210a1a5510564a9820cccdd` (local source inspected, including types and stories). This is a complete panel with its component children, not a newly designed wrapper. Its standalone story confirms that a local state controller is supported without mounting another chat.

The F0 package actually resolved by this old Composer does not export this standalone panel. Therefore this directory preserves the source composition locally. Imports use the installed public F0 buttons, checkboxes, icons, OneEllipsis, reduced-motion hook and AI i18n. The strings-only class helper preserves the F0 focus tokens without copying shared infrastructure. Motion-only wrappers are omitted because this Composer has no direct Motion dependency; the approved HybridHome slot retains its geometry animation. OptionsList uses the equivalent roving-focus implementation inspected in `f0-home-first-version/packages/react/src/sds/ai/F0AiChat/components/input/ClarifyingQuestionPanel/OptionsList.tsx`. Autofocus is passed by the slot adapter. No gradient is added.

Behavior also checked against Factorial's `frontend/src/modules/ai/copilotActions/global/clarifyingQuestion/useClarifyingQuestionAction.tsx`: confirm resolves the question and sends an answer; cancel resolves without inventing an answer. F0's ChatTextarea switches between its clarifying panel and normal textarea. HybridHome now follows that exclusive-input behavior while retaining its original mounted composer/draft.

`../ClarifyPanel.tsx` only maps the existing conversation question and callbacks into F0 state. No parallel chat/provider, package update or framework replacement.

Follow-up continuity adjustment: option autofocus uses preventScroll so it does not hide the agent introduction above the panel. Selected options are initialized from saved home widget preferences; multiple selection uses the unchanged F0 checkbox mode.
