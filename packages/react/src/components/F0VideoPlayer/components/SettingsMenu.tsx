import { F0Button } from "@/components/F0Button"
import { Settings } from "@/icons/app"
import { type LanguageOption, languageLabel } from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

// Synthetic radio value for the "feature off" row (subtitles / audio
// description). Locales never collide with it in practice.
const OFF = "off"

// Roomier padding/type than the compact defaults, matching the survey question
// menu's rhythm (the shared classes win over the primitives' via tailwind-merge).
const ITEM_CLASS = "py-2 pr-4 text-base font-medium"
const LABEL_CLASS =
  "px-3 pb-1 pt-2 text-sm font-medium text-f1-foreground-secondary"

export interface SettingsMenuProps {
  /**
   * Element the menu portals into. Set to the player wrapper so the menu stays
   * inside the fullscreened element (the menu portals to `document.body`
   * otherwise, which is hidden while the player is fullscreen).
   */
  containerRef: React.RefObject<HTMLElement | null>
  /** Audio (dubbed `src`) languages — a language-only choice, no "Off". */
  audioLanguages: LanguageOption[]
  audioLanguage: string | undefined
  onAudioLanguageChange: (locale: string) => void
  /** Caption/subtitle languages — languages plus an "Off" row. */
  captionLanguages: LanguageOption[]
  captionLanguage: string | undefined
  captionsOn: boolean
  onCaptionLanguageChange: (locale: string) => void
  onCaptionsOff: () => void
  /** Audio-description languages — languages plus an "Off" row. */
  audioDescriptionLanguages: LanguageOption[]
  audioDescriptionLanguage: string | undefined
  audioDescriptionOn: boolean
  onAudioDescriptionLanguageChange: (locale: string) => void
  onAudioDescriptionOff: () => void
}

/**
 * YouTube-style settings gear. Holds the language selection for every dimension
 * offered in more than one language — the audio track, the subtitles, and the
 * audio description — so those don't each need a control in the bar. Subtitles
 * and audio description also get an "Off" row (selecting a language enables the
 * feature; "Off" disables it); the audio track is always playing, so it only
 * lists languages.
 *
 * Built on the shared `DropdownMenu` primitives (same pattern as the survey
 * question menu / audio kebab) — Radix gives roving focus, typeahead, and
 * Escape for free. Render only when a section applies (see {@link hasSettingsMenu}).
 */
export function SettingsMenu({
  containerRef,
  audioLanguages,
  audioLanguage,
  onAudioLanguageChange,
  captionLanguages,
  captionLanguage,
  captionsOn,
  onCaptionLanguageChange,
  onCaptionsOff,
  audioDescriptionLanguages,
  audioDescriptionLanguage,
  audioDescriptionOn,
  onAudioDescriptionLanguageChange,
  onAudioDescriptionOff,
}: SettingsMenuProps) {
  const { t } = useI18n()

  const showAudio = audioLanguages.length > 1
  const showCaptions = captionLanguages.length > 1
  const showAudioDescription = audioDescriptionLanguages.length > 1

  const options = (list: LanguageOption[]) =>
    list.map((option) => (
      <DropdownMenuRadioItem
        key={option.locale}
        value={option.locale}
        className={ITEM_CLASS}
      >
        {languageLabel(option)}
      </DropdownMenuRadioItem>
    ))

  // "Off" enabled or a language picked: route the shared radio value back to
  // either the disable handler or the language setter.
  const onToggleableChange =
    (onLanguage: (locale: string) => void, onOff: () => void) =>
    (value: string) =>
      value === OFF ? onOff() : onLanguage(value)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <F0Button
          variant="ghost"
          size="sm"
          hideLabel
          icon={Settings}
          label={t("videoPlayer.settings")}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        container={containerRef.current}
        side="top"
        align="end"
        // Cap to the space between the trigger and the viewport edge and scroll
        // within it — a full set of languages across all three sections can be
        // taller than the player.
        className="max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1"
      >
        {showAudio && (
          <>
            <DropdownMenuLabel className={LABEL_CLASS}>
              {t("videoPlayer.audio")}
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={audioLanguage}
              onValueChange={onAudioLanguageChange}
            >
              {options(audioLanguages)}
            </DropdownMenuRadioGroup>
          </>
        )}

        {showCaptions && (
          <>
            {showAudio && <DropdownMenuSeparator />}
            <DropdownMenuLabel className={LABEL_CLASS}>
              {t("videoPlayer.subtitles")}
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={captionsOn ? captionLanguage : OFF}
              onValueChange={onToggleableChange(
                onCaptionLanguageChange,
                onCaptionsOff
              )}
            >
              {options(captionLanguages)}
              <DropdownMenuRadioItem value={OFF} className={ITEM_CLASS}>
                {t("videoPlayer.off")}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </>
        )}

        {showAudioDescription && (
          <>
            {(showAudio || showCaptions) && <DropdownMenuSeparator />}
            <DropdownMenuLabel className={LABEL_CLASS}>
              {t("videoPlayer.audioDescription")}
            </DropdownMenuLabel>
            <DropdownMenuRadioGroup
              value={audioDescriptionOn ? audioDescriptionLanguage : OFF}
              onValueChange={onToggleableChange(
                onAudioDescriptionLanguageChange,
                onAudioDescriptionOff
              )}
            >
              {options(audioDescriptionLanguages)}
              <DropdownMenuRadioItem value={OFF} className={ITEM_CLASS}>
                {t("videoPlayer.off")}
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

/**
 * Whether the settings gear has anything to show — true once any dimension
 * (audio track, subtitles, audio description) is offered in several languages.
 * Single-language features stay as their own on/off toggle in the bar instead.
 */
export function hasSettingsMenu(counts: {
  audioLanguages: number
  captionLanguages: number
  audioDescriptionLanguages: number
}): boolean {
  return (
    counts.audioLanguages > 1 ||
    counts.captionLanguages > 1 ||
    counts.audioDescriptionLanguages > 1
  )
}
