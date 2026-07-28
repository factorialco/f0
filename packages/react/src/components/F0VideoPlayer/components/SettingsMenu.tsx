import { F0Button } from "@/components/F0Button"
import { F0Icon, IconType } from "@/components/F0Icon/F0Icon"
import { Globe, Settings } from "@/icons/app"
import { type LanguageOption, languageLabel } from "@/lib/localized"
import { useI18n } from "@/lib/providers/i18n"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu"

import { AudioDescriptionLineIcon } from "./AudioDescriptionToggleIcons"
import { CaptionsLineIcon } from "./CaptionsToggleIcons"

// Synthetic radio value for the "feature off" row (subtitles / audio
// description). Locales never collide with it in practice.
const OFF = "off"

// Roomier padding/type than the compact defaults, matching the survey question
// menu's rhythm (the shared classes win over the primitives' via tailwind-merge).
const ITEM_CLASS = "py-2 pr-4 text-base font-medium"
const TRIGGER_CLASS = "gap-2 py-2 pl-3 pr-2 text-base font-medium"
// Cap to the space between the trigger and the viewport edge and scroll within
// it — a full set of languages can be taller than the player.
const CONTENT_CLASS =
  "max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[13rem] overflow-y-auto p-1"

interface LanguageSubmenuProps {
  icon: IconType
  label: string
  /** Portal target, so the submenu also renders inside a fullscreened player. */
  container: HTMLElement | null
  options: LanguageOption[]
  /** Active locale. */
  value: string | undefined
  onLanguageChange: (locale: string) => void
  /**
   * Toggleable dimensions (subtitles / audio description) pass `on` + `onOff`,
   * which adds an "Off" row and shows "Off" as the current value when disabled.
   * The audio track omits both (it always plays).
   */
  on?: boolean
  onOff?: () => void
  offLabel: string
}

/**
 * One first-level entry in the gear: a submenu whose trigger names the dimension
 * and its current selection, opening to the language options (same shape as the
 * survey question menu's type picker).
 */
function LanguageSubmenu({
  icon,
  label,
  container,
  options,
  value,
  onLanguageChange,
  on,
  onOff,
  offLabel,
}: LanguageSubmenuProps) {
  const toggleable = onOff !== undefined
  const active = options.find((o) => o.locale === value)
  const current =
    toggleable && !on ? offLabel : active ? languageLabel(active) : offLabel

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger className={TRIGGER_CLASS}>
        <F0Icon icon={icon} />
        <span className="flex-1">{label}</span>
        <span className="text-f1-foreground-secondary">{current}</span>
      </DropdownMenuSubTrigger>
      <DropdownMenuPortal container={container ?? undefined}>
        <DropdownMenuSubContent className={CONTENT_CLASS}>
          <DropdownMenuRadioGroup
            value={toggleable ? (on ? value : OFF) : value}
            onValueChange={(v) =>
              toggleable && v === OFF ? onOff() : onLanguageChange(v)
            }
          >
            {options.map((option) => (
              <DropdownMenuRadioItem
                key={option.locale}
                value={option.locale}
                className={ITEM_CLASS}
              >
                {languageLabel(option)}
              </DropdownMenuRadioItem>
            ))}
            {toggleable && (
              <DropdownMenuRadioItem value={OFF} className={ITEM_CLASS}>
                {offLabel}
              </DropdownMenuRadioItem>
            )}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  )
}

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
 * audio description — so those don't each need a control in the bar. The first
 * level lists the dimensions (with their current selection); each opens a
 * submenu of languages, and subtitles / audio description get an "Off" row
 * (picking a language enables the feature; "Off" disables it).
 *
 * Built on the shared `DropdownMenu` primitives (same submenu pattern as the
 * survey question menu) — Radix gives roving focus, typeahead, and Escape for
 * free. Render only when a section applies (see {@link hasSettingsMenu}).
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
  const container = containerRef.current
  const offLabel = t("videoPlayer.off")

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
        container={container}
        side="top"
        align="end"
        className={CONTENT_CLASS}
      >
        {audioLanguages.length > 1 && (
          <LanguageSubmenu
            icon={Globe}
            label={t("videoPlayer.audio")}
            container={container}
            options={audioLanguages}
            value={audioLanguage}
            onLanguageChange={onAudioLanguageChange}
            offLabel={offLabel}
          />
        )}
        {captionLanguages.length > 1 && (
          <LanguageSubmenu
            icon={CaptionsLineIcon}
            label={t("videoPlayer.subtitles")}
            container={container}
            options={captionLanguages}
            value={captionLanguage}
            on={captionsOn}
            onLanguageChange={onCaptionLanguageChange}
            onOff={onCaptionsOff}
            offLabel={offLabel}
          />
        )}
        {audioDescriptionLanguages.length > 1 && (
          <LanguageSubmenu
            icon={AudioDescriptionLineIcon}
            label={t("videoPlayer.audioDescription")}
            container={container}
            options={audioDescriptionLanguages}
            value={audioDescriptionLanguage}
            on={audioDescriptionOn}
            onLanguageChange={onAudioDescriptionLanguageChange}
            onOff={onAudioDescriptionOff}
            offLabel={offLabel}
          />
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
