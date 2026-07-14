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
  EnhanceHighlight,
  HighlightExtension,
  ImageExtension,
  LinkExtension,
  MoodTrackerExtension,
  PasteSanitizer,
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
  VideoEmbedExtension,
  createFileHandlerExtension,
} from "@/components/RichText/internal"
import { I18nContextType } from "@/lib/providers/i18n"

interface CreateNotesTextEditorExtensionsProps {
  placeholder: string
  translations: I18nContextType
  aiBlockConfig?: AIBlockConfig
  imageUploadConfig?: ImageUploadConfig
  enhanceEnabled?: boolean
}

export const createNotesTextEditorExtensions = ({
  placeholder,
  translations,
  aiBlockConfig,
  imageUploadConfig,
  enhanceEnabled = false,
}: CreateNotesTextEditorExtensionsProps) => {
  return [
    StarterKitExtension,
    PasteSanitizer,
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
    VideoEmbedExtension,
    ...(imageUploadConfig
      ? [createFileHandlerExtension(imageUploadConfig)]
      : []),
    ...(enhanceEnabled ? [EnhanceHighlight] : []),
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
