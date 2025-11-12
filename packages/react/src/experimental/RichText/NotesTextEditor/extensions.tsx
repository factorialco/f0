import {
  BlockIdExtension,
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
  ImageExtension,
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
  ImageUploadConfig,
  createFileHandlerExtension,
} from "@/experimental/RichText/CoreEditor"

import { I18nContextType } from "@/lib/providers/i18n"

interface CreateNotesTextEditorExtensionsProps {
  placeholder: string
  translations: I18nContextType
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
}

export const createNotesTextEditorExtensions = ({
  placeholder,
  translations,
  aiBlockConfig,
  imageUploadConfig,
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
    ImageExtension,
    ...(imageUploadConfig
      ? [createFileHandlerExtension(imageUploadConfig)]
      : []),
    BlockIdExtension, // Automatically add unique IDs to all block nodes
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),

    createSlashCommandExtension({
      aiBlockConfig,
      translations,
      imageUploadConfig,
    }),
  ]
}
