import { MotionConfig } from "motion/react"
import {
  ComponentProps,
  createContext,
  useContext,
  useRef,
  useState,
} from "react"
import { useIsomorphicLayoutEffect } from "usehooks-ts"

import type { F0FormLikeComponent } from "@/patterns/F0Form/types"

import { CoachmarkProvider } from "@/experimental/Overlays/F0Coachmark"
import { FormCardValueFormatterProvider } from "@/kits/ai/F0AiChat/providers/FormCardValueFormatterProvider"

import { ToastProvider } from "../../../hooks/toast/ToastProvider"
import { ImageContextValue, ImageProvider } from "../../imageHandler"
import { LinkContextValue, LinkProvider } from "../../linkHandler"
import { PrivacyModeProvider } from "../../privacyMode"
import { cn } from "../../utils"
import { XRayProvider } from "../../xray"
import { DialogsAlikeLayoutProvider } from "../dialogs-alike/DialogsAlikeLayoutProvider"
import { FormOverlaysProvider } from "../form-overlays"
import { DataCollectionStorageProvider } from "../datacollection/DataCollectionStorageProvider"
import { DataCollectionStorageHandler } from "../datacollection/types"
import { I18nProvider, I18nProviderProps } from "../i18n"
import { L10nProvider, L10nProviderProps } from "../l10n"
import { UserPlatformProvider } from "../user-platafform"
import type { HourCycle } from "../user-platafform/types"

interface LayoutProps {
  fullScreen?: boolean
  addBodyClasses?: boolean
}

const LayoutContext = createContext<{ element: HTMLElement | null } | null>(
  null
)

export const useLayout = () => {
  const context = useContext(LayoutContext)

  return {
    inLayoutContext: context !== null,
    element: context?.element || null,
  }
}

export const LayoutProvider: React.FC<
  { children: React.ReactNode } & LayoutProps
> = ({ children, fullScreen = true }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [element, setElement] = useState(ref.current)

  useIsomorphicLayoutEffect(() => {
    setElement(ref.current)
  }, [])

  return (
    <LayoutContext.Provider value={{ element }}>
      <div
        ref={ref}
        id="f0-layout"
        className={cn({
          "flex h-screen w-screen flex-col bg-[#F5F6F8] dark:bg-[#0D1625]":
            fullScreen,
        })}
      >
        {children}
        {/*
         * Top-level portal target for modal dialogs. It lives above any app
         * content (e.g. the ApplicationFrame's `isolate` stacking context, where
         * the AI canvas/chat would otherwise paint over a dialog) but inside
         * `#f0-layout`, so design tokens and the theme `.dark` class still apply.
         * `display: contents` keeps it out of the flex layout; portaled dialogs
         * position themselves with `fixed`.
         */}
        <div id="f0-overlay-root" className="contents" />
      </div>
    </LayoutContext.Provider>
  )
}

const MotionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

const FormComponentContext = createContext<F0FormLikeComponent | undefined>(
  undefined
)

export const useFormComponent = () => useContext(FormComponentContext)

export const F0Provider: React.FC<{
  children: React.ReactNode
  link?: LinkContextValue
  privacyModeInitiallyEnabled?: boolean
  image?: ImageContextValue
  layout?: Omit<ComponentProps<typeof LayoutProvider>, "children">
  i18n: Omit<I18nProviderProps, "children">
  l10n: Omit<L10nProviderProps, "children">
  /**
   * Global user preference for how times are displayed and edited (12h/24h).
   * When set, F0 time fields render/parse in this hour cycle so the app can
   * honor the user's preference instead of the browser locale. When omitted,
   * time fields use the native browser-locale input.
   */
  hourCycle?: HourCycle
  isDev?: boolean
  showExperimentalWarnings?: boolean
  dataCollectionStorageHandler?: DataCollectionStorageHandler
  renderDataTestIdAttribute?: boolean
  /**
   * Custom form component to use instead of the default F0Form in
   * AI canvas form panels. Useful for platform-level wrappers that
   * auto-provide `renderCustomField` or `useUpload`.
   *
   * Cast overloaded components when passing:
   * ```tsx
   * <F0Provider formComponent={FactorialF0Form as F0FormLikeComponent} />
   * ```
   */
  formComponent?: F0FormLikeComponent
}> = ({
  children,
  layout,
  link,
  privacyModeInitiallyEnabled,
  image,
  i18n,
  l10n,
  hourCycle,
  isDev = false,
  dataCollectionStorageHandler,
  showExperimentalWarnings = false,
  renderDataTestIdAttribute = false,
  formComponent,
}) => {
  return (
    <MotionProvider>
      <UserPlatformProvider
        isDev={isDev}
        showExperimentalWarnings={showExperimentalWarnings}
        renderDataTestIdAttribute={renderDataTestIdAttribute}
        hourCycle={hourCycle}
      >
        <L10nProvider {...l10n}>
          <I18nProvider {...i18n}>
            <LinkProvider {...link}>
              <LayoutProvider {...layout}>
                <XRayProvider>
                  <PrivacyModeProvider
                    initiallyEnabled={privacyModeInitiallyEnabled}
                  >
                    <ImageProvider {...image}>
                      <DataCollectionStorageProvider
                        handler={dataCollectionStorageHandler}
                      >
                        <DialogsAlikeLayoutProvider>
                          <ToastProvider
                            portalTargets={{
                              mobile: "#f0-overlay-root",
                              desktop: "#f0-overlay-root",
                            }}
                          >
                            <FormOverlaysProvider>
                              <FormComponentContext.Provider
                                value={formComponent}
                              >
                                <FormCardValueFormatterProvider>
                                  <CoachmarkProvider>
                                    {children}
                                  </CoachmarkProvider>
                                </FormCardValueFormatterProvider>
                              </FormComponentContext.Provider>
                            </FormOverlaysProvider>
                          </ToastProvider>
                        </DialogsAlikeLayoutProvider>
                      </DataCollectionStorageProvider>
                    </ImageProvider>
                  </PrivacyModeProvider>
                </XRayProvider>
              </LayoutProvider>
            </LinkProvider>
          </I18nProvider>
        </L10nProvider>
      </UserPlatformProvider>
    </MotionProvider>
  )
}
