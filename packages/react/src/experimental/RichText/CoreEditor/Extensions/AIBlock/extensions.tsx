import {
  ColorExtension,
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
  TaskListExtension,
  TextAlignExtension,
  TextStyleExtension,
  TypographyExtension,
  UnderlineExtension,
} from "@/experimental/RichText/CoreEditor"
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

export const createAIBlockEditorExtensions = (
  placeholder: string,
  toolbarLabels: Record<string, string>,
  groupLabels?: SlashCommandGroupLabels,
  moodTrackerLabels?: MoodTrackerLabels,
  liveCompanionLabels?: LiveCompanionLabels,
  transcriptLabels?: TranscriptLabels
) => {
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
    ColorExtension,
    TypographyExtension,
    TaskListExtension,
    CustomTaskExtension,
    HighlightExtension,
    TextAlignExtension,
    LinkExtension,
    DetailsExtension,
    DetailsSummaryExtension,
    DetailsContentExtension,
    MoodTrackerExtension.configure({
      currentConfig: enhancedMoodTrackerConfig,
    }),
    LiveCompanionExtension.configure({
      currentConfig: enhancedLiveCompanionConfig,
    }),
    TranscriptExtension.configure({
      currentConfig: enhancedTranscriptConfig,
    }),
    // Note: AIBlockExtension is intentionally excluded to prevent infinite recursion
    PersistSelection,
    createPlaceholderExtension(placeholder),
    createAccessibilityExtension(placeholder),
    createSlashCommandExtension(toolbarLabels, groupLabels),
  ]
}
