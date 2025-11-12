import {
  AIBlockConfig,
  AIBlockExtension,
  createAccessibilityExtension,
  createPlaceholderExtension,
  createSlashCommandExtension,
  CustomTaskExtension,
  DetailsContentExtension,
  DetailsExtension,
  DetailsSummaryExtension,
  HighlightExtension,
  LinkExtension,
  MoodTrackerExtension,
  PersistSelection,
  StarterKitExtension,
  TableExtension,
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TranscriptExtension,
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"

import { I18nContextType } from "@/lib/providers/i18n"

interface CreateNotesTextEditorExtensionsProps {
  placeholder: string
  translations: I18nContextType
  aiBlockConfig?: AIBlockConfig
}

export const createNotesTextEditorExtensions = ({
  placeholder,
  translations,
  aiBlockConfig,
}: CreateNotesTextEditorExtensionsProps) => {
  return [
    StarterKitExtension,
    UnderlineExtension,
    TextStyleExtension,
    TypographyExtension,
    TaskListExtension,
    CustomTaskExtension,
    HighlightExtension,
    TextAlignExtension,
    LinkExtension,
    DetailsExtension,
    DetailsSummaryExtension,
    DetailsContentExtension,
    TableExtension,
    MoodTrackerExtension,
    TranscriptExtension,
    AIBlockExtension.configure({
      currentConfig: aiBlockConfig,
    }),
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),
    createSlashCommandExtension({
      translations,
      aiBlockConfig,
    }),
  ]
}
