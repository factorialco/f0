import { NavigationTour } from "./NavigationTour"
import "./onboarding.css"
import { F0Box, F0Button, F0Heading, F0Text } from "@factorialco/f0-react"
import { F0OneIcon } from "@factorialco/f0-react/dist/ai"
import { ArrowLeft } from "@factorialco/f0-react/icons/app"
import { F0ClarifyingPanel } from "../one/f0-clarifying/F0ClarifyingPanel"
import { Connections } from "../preferences/PreferencesScreen"
import type { ProfileId } from "../profileStore"
import { completeOnboardingHome } from "../one/conversationStore"
import {
  getOnboarding,
  SUMMARY_OPTIONS,
  updateOnboarding,
  useOnboarding,
  startNavigationTour,
} from "./state"

export function Onboarding({ profile }: { profile: ProfileId }) {
  const state = useOnboarding(profile)
  const update = (patch: Parameters<typeof updateOnboarding>[1]) =>
    updateOnboarding(profile, patch)
  const finish = (useDefaults = false) => {
    completeOnboardingHome(
      profile,
      useDefaults ? [] : state.selected,
      useDefaults ? "" : state.customActive ? state.custom : ""
    )
    update({
      screen: "complete",
      hidden: false,
      suggestReport: true,
      ...(useDefaults ? { usedDefaults: true } : {}),
    })
  }
  const next = () => {
    const current = getOnboarding(profile)
    if (
      !current.selected.length &&
      !(current.customActive && current.custom.trim())
    )
      return
    update({ screen: "connections", usedDefaults: false })
  }
  if (state.screen === "tour") return <NavigationTour profile={profile} />
  return (
    <F0Box
      width="full"
      height="full"
      overflowY="auto"
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding="3xl"
    >
      <F0Box
        data-home-onboarding
        maxWidth="full"
        marginTop="5xl"
        display="flex"
        flexDirection="column"
        gap="2xl"
        paddingBottom="2xl"
      >
        <F0OneIcon size="lg" className="home-onboarding-logo" />
        {state.screen === "welcome" && (
          <>
            <F0Box
              data-onboarding-headline
              display="flex"
              flexDirection="column"
              gap="none"
            >
              <F0Heading
                data-onboarding-muted
                content="Welcome to your new Factorial"
                variant="heading-large"
              />
              <F0Heading
                content="I’m One, your personal assistant"
                variant="heading-large"
              />
            </F0Box>
            <F0Text
              content="Before we start, let me show you what’s new and where to find everything."
              variant="label"
            />
            <F0Box
              display="flex"
              flexDirection="column"
              gap="md"
              alignItems="start"
            >
              <F0Button
                size="md"
                label="Show me around"
                onClick={() => startNavigationTour(profile)}
              />
              <F0Button
                size="md"
                label="Go to Home"
                variant="ghost"
                onClick={() => update({ screen: "preferences" })}
              />
            </F0Box>
          </>
        )}
        {state.screen === "preferences" && (
          <>
            <F0Box
              data-onboarding-headline
              display="flex"
              flexDirection="column"
              gap="none"
            >
              <F0Heading
                data-onboarding-muted
                content="Your day at a glance!"
                variant="heading-large"
              />
              <F0Heading
                content="Let’s prepare your Home"
                variant="heading-large"
              />
            </F0Box>
            <F0Text
              content="I’ll put together a summary of what matters to you, ready whenever you open Factorial. Select all that apply. You can change this later."
              variant="label"
            />
            <F0Box
              background="primary"
              borderRadius="lg"
              overflow="hidden"
              border="default"
              borderColor="secondary"
            >
              <F0ClarifyingPanel
                confirmLabel="Continue"
                actionSize="md"
                skipLabel="Use default preferences"
                alwaysShowSkip
                hideCancel
                clarifyingQuestion={{
                  currentStep: {
                    question: "What would you like in your summary?",
                    options: SUMMARY_OPTIONS.filter(
                      (option) =>
                        profile === "admin" || option.id === "personal"
                    ).map((option) => ({ ...option })),
                    selectionMode: "multiple",
                    optional: false,
                    allowCustomAnswer: true,
                    selectedOptionIds: state.selected,
                    customAnswerText: state.custom,
                    isCustomAnswerActive: state.customActive,
                  },
                  currentStepIndex: 0,
                  totalSteps: 1,
                  toggleOption: (id) => {
                    const valid = SUMMARY_OPTIONS.find(
                      (option) => option.id === id
                    )
                    if (!valid) return
                    const selected = getOnboarding(profile).selected
                    update({
                      selected: selected.includes(valid.id)
                        ? selected.filter((value) => value !== valid.id)
                        : [...selected, valid.id],
                    })
                  },
                  confirm: next,
                  skip: () =>
                    update({
                      screen: "connections",
                      selected: [],
                      custom: "",
                      customActive: false,
                      usedDefaults: true,
                    }),
                  cancel: () => finish(true),
                  back: () => update({ screen: "welcome" }),
                  setCustomAnswerText: (custom) => update({ custom }),
                  setCustomAnswerActive: (customActive) =>
                    update({ customActive }),
                  activateCustomAnswer: () => update({ customActive: true }),
                }}
              />
            </F0Box>
            <F0Box
              display="flex"
              justifyContent="between"
              alignItems="center"
              gap="md"
            >
              <F0Button
                size="md"
                label="Back"
                icon={ArrowLeft}
                variant="ghost"
                onClick={() => update({ screen: "welcome" })}
              />
            </F0Box>
          </>
        )}
        {state.screen === "connections" && (
          <>
            <F0Heading content="Connect your tools" variant="heading-large" />
            <F0Text
              content="I can use your other tools to bring context to your Home and help you get things done, like finding information or updating a task."
              variant="label"
            />
            <F0Text
              content="You can connect them now or later."
              variant="label"
            />
            <Connections onboarding />
            <F0Box display="flex" gap="md" alignItems="center">
              <F0Button
                size="md"
                label="Back"
                icon={ArrowLeft}
                variant="ghost"
                onClick={() => update({ screen: "preferences" })}
              />
              <F0Button
                size="md"
                label="Continue to my Home"
                onClick={() => finish(state.usedDefaults)}
              />
            </F0Box>
          </>
        )}
      </F0Box>
    </F0Box>
  )
}
