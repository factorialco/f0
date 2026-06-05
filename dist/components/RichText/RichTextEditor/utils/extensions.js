import { PasteSanitizer as m } from "../../CoreEditor/Extensions/PasteSanitizer/index.js";
import { PersistSelection as s } from "../../CoreEditor/Extensions/PersistSelection/index.js";
import { EnhanceHighlight as f } from "../../CoreEditor/Extensions/EnhanceHighlight/index.js";
import { createPlaceholderExtension as p } from "../../CoreEditor/Extensions/Placeholder/index.js";
import { createCharacterCountExtension as x } from "../../CoreEditor/Extensions/CharacterCount/index.js";
import { createMentionExtensions as E } from "../../CoreEditor/Extensions/Mention/index.js";
import { createAccessibilityExtension as a } from "../../CoreEditor/Extensions/Accessibility/index.js";
import { StarterKitExtension as c } from "../../CoreEditor/Extensions/StarterKit/index.js";
import { UnderlineExtension as l } from "../../CoreEditor/Extensions/Underline/index.js";
import { TextStyleExtension as g } from "../../CoreEditor/Extensions/TextStyle/index.js";
import { ColorExtension as h } from "../../CoreEditor/Extensions/Color/index.js";
import { TypographyExtension as C } from "../../CoreEditor/Extensions/Typography/index.js";
import { TextAlignExtension as T } from "../../CoreEditor/Extensions/TextAlign/index.js";
import { LinkExtension as u } from "../../CoreEditor/Extensions/Link/index.js";
import { TaskListExtension as y } from "../../CoreEditor/Extensions/TaskList/index.js";
import { CustomTaskExtension as S } from "../../CoreEditor/Extensions/CustomTask/index.js";
import { HighlightExtension as k } from "../../CoreEditor/Extensions/Highlight/index.js";
const G = ({
  mentionsConfig: t,
  mentionSuggestions: i,
  setMentionSuggestions: r,
  placeholder: o,
  maxCharacters: n,
  plainHtmlMode: e = !1
}) => [
  c,
  m,
  l,
  g,
  h,
  C,
  T,
  u,
  s,
  f,
  ...e ? [] : [y, S, k],
  p(o),
  x(n),
  ...E(
    i,
    r,
    t
  ),
  a(o)
];
export {
  G as ExtensionsConfiguration
};
