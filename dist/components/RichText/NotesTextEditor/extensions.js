import { TableExtension as e } from "../CoreEditor/Extensions/Table/index.js";
import { MoodTrackerExtension as n } from "../CoreEditor/Extensions/MoodTracker/index.js";
import { TranscriptExtension as m } from "../CoreEditor/Extensions/Transcript/index.js";
import { AIBlockExtension as s } from "../CoreEditor/Extensions/AIBlock/index.js";
import { ImageExtension as x, createFileHandlerExtension as E } from "../CoreEditor/Extensions/Image/index.js";
import { VideoEmbedExtension as p } from "../CoreEditor/Extensions/VideoEmbed/index.js";
import { BlockIdExtension as f } from "../CoreEditor/Extensions/BlockIdExtension/index.js";
import { createSlashCommandExtension as a } from "../CoreEditor/Extensions/SlashCommand/index.js";
import { StarterKitExtension as c } from "../CoreEditor/Extensions/StarterKit/index.js";
import { PasteSanitizer as l } from "../CoreEditor/Extensions/PasteSanitizer/index.js";
import { UnderlineExtension as T } from "../CoreEditor/Extensions/Underline/index.js";
import { TextStyleExtension as d } from "../CoreEditor/Extensions/TextStyle/index.js";
import { TypographyExtension as S } from "../CoreEditor/Extensions/Typography/index.js";
import { TaskListExtension as k } from "../CoreEditor/Extensions/TaskList/index.js";
import { CustomTaskExtension as u } from "../CoreEditor/Extensions/CustomTask/index.js";
import { HighlightExtension as y } from "../CoreEditor/Extensions/Highlight/index.js";
import { TextAlignExtension as h } from "../CoreEditor/Extensions/TextAlign/index.js";
import { LinkExtension as b } from "../CoreEditor/Extensions/Link/index.js";
import { DetailsExtension as A } from "../CoreEditor/Extensions/Details/index.js";
import { DetailsSummaryExtension as D } from "../CoreEditor/Extensions/DetailsSummary/index.js";
import { DetailsContentExtension as I } from "../CoreEditor/Extensions/DetailsContent/index.js";
import { PersistSelection as P } from "../CoreEditor/Extensions/PersistSelection/index.js";
import { createPlaceholderExtension as g } from "../CoreEditor/Extensions/Placeholder/index.js";
import { createAccessibilityExtension as H } from "../CoreEditor/Extensions/Accessibility/index.js";
const U = ({
  placeholder: t,
  translations: i,
  aiBlockConfig: r,
  imageUploadConfig: o
}) => [
  c,
  l,
  T,
  d,
  S,
  k,
  u,
  y,
  h,
  b,
  A,
  D,
  I,
  e,
  n,
  m,
  s.configure({
    currentConfig: r
  }),
  x,
  p,
  ...o ? [E(o)] : [],
  f,
  // Automatically add unique IDs to all block nodes
  P,
  g(t),
  H(t),
  a({
    aiBlockConfig: r,
    translations: i,
    imageUploadConfig: o
  })
];
export {
  U as createNotesTextEditorExtensions
};
