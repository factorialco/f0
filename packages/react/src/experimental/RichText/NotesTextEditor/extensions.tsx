import {
  BlockIdExtension,
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
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"
import {
  AIBlockConfigWithLabels,
  AIBlockExtension,
  AIBlockLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/AIBlock"
import {
  createFileHandlerExtension,
  ImageUploadConfig,
} from "@/experimental/RichText/CoreEditor/Extensions/Image"
import {
  LiveCompanionConfig,
  LiveCompanionExtension,
  LiveCompanionLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/LiveCompanion"
import {
  MoodTrackerConfig,
  MoodTrackerLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/MoodTracker"
import { SlashCommandGroupLabels } from "@/experimental/RichText/CoreEditor/Extensions/SlashCommand"
import {
  TranscriptConfig,
  TranscriptExtension,
  TranscriptLabels,
} from "@/experimental/RichText/CoreEditor/Extensions/Transcript"

export const createNotesTextEditorExtensions = (
  placeholder: string,
  toolbarLabels: Record<string, string>,
  groupLabels?: SlashCommandGroupLabels,
  aiBlockConfig?: AIBlockConfigWithLabels,
  aiBlockLabels?: AIBlockLabels,
  moodTrackerLabels?: MoodTrackerLabels,
  liveCompanionLabels?: LiveCompanionLabels,
  transcriptLabels?: TranscriptLabels,
  imageUploadConfig?: ImageUploadConfig
) => {
  // Create enhanced config with labels if both are provided
  const enhancedAIBlockConfig =
    aiBlockConfig && aiBlockLabels
      ? { ...aiBlockConfig, labels: aiBlockLabels }
      : aiBlockConfig

  // Create enhanced MoodTracker config with labels
  const enhancedMoodTrackerConfig: MoodTrackerConfig | undefined =
    moodTrackerLabels ? { labels: moodTrackerLabels } : undefined

  // Create enhanced LiveCompanion config with labels
  const enhancedLiveCompanionConfig: LiveCompanionConfig | undefined =
    liveCompanionLabels ? { labels: liveCompanionLabels } : undefined

  // Create enhanced Transcript config with labels
  const enhancedTranscriptConfig: TranscriptConfig | undefined =
    transcriptLabels ? { labels: transcriptLabels } : undefined

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
    MoodTrackerExtension.configure({
      currentConfig: enhancedMoodTrackerConfig,
    }),
    LiveCompanionExtension.configure({
      currentConfig: enhancedLiveCompanionConfig,
    }),
    TranscriptExtension.configure({
      currentConfig: enhancedTranscriptConfig,
    }),
    AIBlockExtension.configure({
      currentConfig: enhancedAIBlockConfig,
    }),
    ImageExtension,
    ...(imageUploadConfig
      ? [createFileHandlerExtension(imageUploadConfig)]
      : []),
    BlockIdExtension, // Automatically add unique IDs to all block nodes
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),
    createSlashCommandExtension(
      toolbarLabels,
      groupLabels,
      enhancedAIBlockConfig,
      imageUploadConfig
    ),
  ]
}
