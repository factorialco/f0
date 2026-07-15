// The Walkthrough's five interactive flows, as FeatureGrid entries. Single
// source of truth for the flow cards rendered on BOTH the AI Cocreation index
// page (index.mdx) and the Walkthrough page (creation-with-ai.mdx) — edit the
// list here and both pages stay in sync.

import type { FeatureCardProps } from "~/docs/components/FeatureCard"

import { Comment, CreditCard, Menu, Messages, Wallet } from "@/icons/app"

export const WALKTHROUGH_FLOW_FEATURES: FeatureCardProps[] = [
  {
    icon: Menu,
    title: "Welcome Screen",
    description:
      "A full-width welcome screen of entry-point cards and starter-prompt suggestions. Uses the Engagement / eNPS data.",
    href: "/?path=/story/patterns-ai-cocreation-walkthrough--welcome-screen",
  },
  {
    icon: Comment,
    title: "Guided Chat · Triage",
    description:
      "One clarifying question up front that triages the survey type, then a type-scoped template gallery. Uses the Training data.",
    href: "/?path=/story/patterns-ai-cocreation-walkthrough--guided-chat-triage",
  },
  {
    icon: Messages,
    title: "Guided Chat · Entry Actions",
    description:
      "One clarifying question whose options are entry actions — Empty Survey, Use a Template, or the most-used templates.",
    href: "/?path=/story/patterns-ai-cocreation-walkthrough--guided-chat-entry-actions",
  },
  {
    icon: CreditCard,
    title: "Welcome Screen · No Credits",
    description:
      "The welcome-screen flow with AI credits exhausted — the soft credit banner and the typed-message redirect into guided entry.",
    href: "/?path=/story/patterns-ai-cocreation-walkthrough--welcome-screen-no-credits",
  },
  {
    icon: Wallet,
    title: "Guided Chat · No Credits",
    description:
      "The guided-chat flow with credits exhausted. Guided creation (templates, blank survey) still needs no credits, so it keeps working.",
    href: "/?path=/story/patterns-ai-cocreation-walkthrough--guided-chat-no-credits",
  },
]
