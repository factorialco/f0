import {
  ColorExtension,
  CustomTaskExtension,
  HighlightExtension,
  LinkExtension,
  MentionedUser,
  MentionsConfig,
  PersistSelection,
  StarterKitExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TypographyExtension,
  UnderlineExtension,
  createAccessibilityExtension,
  createCharacterCountExtension,
  createMentionExtensions,
  createPlaceholderExtension,
} from "@/experimental/RichText/CoreEditor"

interface ExtensionsConfigurationProps {
  mentionsConfig?: MentionsConfig
  mentionSuggestions: MentionedUser[]
  setMentionSuggestions: (suggestions: MentionedUser[]) => void
  placeholder: string
  maxCharacters?: number
  plainHtmlMode?: boolean
}

const ExtensionsConfiguration = ({
  mentionsConfig,
  mentionSuggestions,
  setMentionSuggestions,
  placeholder,
  maxCharacters,
  plainHtmlMode = true,
}: ExtensionsConfigurationProps) => {
  return [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    ColorExtension,
    TypographyExtension,
    ...(plainHtmlMode ? [HighlightExtension] : []),
    TextAlignExtension,
    LinkExtension,
    PersistSelection,
    ...(plainHtmlMode ? [TaskListExtension, CustomTaskExtension] : []),
    createPlaceholderExtension(placeholder),
    createCharacterCountExtension(maxCharacters),
    ...createMentionExtensions(
      mentionSuggestions,
      setMentionSuggestions,
      mentionsConfig
    ),
    createAccessibilityExtension(placeholder),
  ]
}

export { ExtensionsConfiguration }
