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
  NotionTableControls,
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
} from "@/components/RichText/CoreEditor"
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
    NotionTableControls.configure({
      labels: translations.richTextEditor.tableControls,
    }),
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
