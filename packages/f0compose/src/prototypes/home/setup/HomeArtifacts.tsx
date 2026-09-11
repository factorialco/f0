import {
  F0Box,
  F0Button,
  F0Card,
  F0Dialog,
  F0Heading,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Pencil } from "@factorialco/f0-react/icons/app"
import { useEffect, useState } from "react"

import { avatarFor } from "@/fixtures/helpers"

import type { HomeArtifact } from "./homeSetup"

import { FactorialAgentIcon } from "../FactorialAgentIcon"
import { PROFILE_PEOPLE, needsYouTasks } from "../fixtures"
import { RecruitmentWindow } from "../home-widgets/OriginalStackWidgets"
import { candidates } from "../home-widgets/recruitment"
import {
  resumeHomeSetup,
  startConversationWithContext,
  type ChatMessage,
  type Conversation,
} from "../one/conversationStore"
import { Post } from "../windows/CommunitiesWindow"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { HomeLoadingSkeleton, useHomeRefreshing } from "./homeRefresh"
import { REPORT_SAMPLE, PERSONAL_TASKS, HOME_FOCUS_LABELS } from "./mock-data"
import { useFixedWidgets } from "./widgetPreferences"

// Pending questions replace the original composer in its existing slot; completed questions stay in the transcript.
export function HomeQuestion({
  message,
}: {
  conversation: Conversation
  message: ChatMessage
}) {
  const q = message.question!
  if (!q.answer && !q.skipped) return null
  return <F0Text content={q.text} variant="body" />
}

function Briefing({
  artifact,
  entrance,
}: {
  artifact: Extract<HomeArtifact, { kind: "briefing" }>
  entrance: boolean
}) {
  const [communityOpen, setCommunityOpen] = useState(false)
  const fixedWidgets = useFixedWidgets(artifact.profile)
  const key = `f0compose:home:generated-v1:${artifact.profile}`
  const [stage, setStage] = useState(() => {
    try {
      return !entrance ||
        localStorage.getItem(key) ||
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? 3
        : 0
    } catch {
      return 3
    }
  })
  useEffect(() => {
    if (stage === 3) return
    const timers = [450, 1000, 1550].map((delay, index) =>
      window.setTimeout(() => {
        setStage(index + 1)
        if (index === 2) {
          try {
            localStorage.setItem(key, "true")
          } catch {
            /* A restricted browser still shows the home. */
          }
        }
      }, delay)
    )
    return () => timers.forEach(window.clearTimeout)
    // One sequence per mounted landing, never on a conversation preview.
  }, [key])
  const focuses = artifact.focuses?.length
    ? artifact.focuses
    : ["personal", "team"]
  const tasks = [
    ...(artifact.focuses?.includes("team") ? needsYouTasks.slice(0, 1) : []),
    ...(focuses.includes("recruitment")
      ? needsYouTasks.filter((t) => t.module === "ats")
      : []),
    ...(focuses.includes("personal") ? PERSONAL_TASKS : []),
  ]
  const post = COMMUNITY_POSTS[0]
  const focusedOn = focuses
    .map((focus) =>
      HOME_FOCUS_LABELS[focus as keyof typeof HOME_FOCUS_LABELS].toLowerCase()
    )
    .join(" and ")
  const openTask = (task: (typeof tasks)[number]) =>
    startConversationWithContext(
      {
        kind: "metric",
        title: task.title,
        stats: [{ label: "Status", value: task.subtitle }],
      },
      `Help me review: ${task.title}`,
      {
        reply: [
          `${task.title}. ${task.subtitle}.`,
          "This is a sample task. Nothing has been approved or sent.",
        ],
      }
    )
  return (
    <F0Box display="flex" flexDirection="column" gap="xl">
      <F0Text content={`I’ve focused your briefing on ${focusedOn}.`} />
      {stage === 0 && (
        <F0Text content="Preparing your home…" variant="description" />
      )}
      {stage >= 1 && tasks.length > 0 && (
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          data-home-generated-section="attention"
        >
          <F0Text
            variant="label"
            content={
              focuses.includes("personal")
                ? "Your Modelo 145 is due tomorrow. You also have a survey due this week and 3 forms to complete."
                : `You have ${tasks.length} ${tasks.length === 1 ? "item" : "items"} to review. Here’s where you can help.`
            }
          />
          <F0Box
            background="primary"
            borderRadius="xl"
            overflow="hidden"
            padding="xs"
          >
            {tasks.map((task) => (
              <F0Box
                key={task.id}
                display="flex"
                alignItems="center"
                flexWrap="wrap"
                gap="sm"
                padding="sm"
              >
                <F0Button
                  label={task.title}
                  icon={task.icon}
                  variant="ghost"
                  onClick={() => openTask(task)}
                />
                <F0Text content={task.subtitle} variant="description" />
              </F0Box>
            ))}
          </F0Box>
        </F0Box>
      )}
      {stage >= 2 && !fixedWidgets.includes("communities") && (
        <F0Box
          display="flex"
          flexDirection="column"
          gap="md"
          data-home-generated-section="news"
        >
          <F0Text
            content="From your communities, you’ve been invited to a Taco party:"
            variant="label"
          />
          <F0Card
            compact
            title={post.title}
            description={`${post.author} in ${post.community} · ${post.posted}`}
            avatar={{
              type: "person",
              firstName: "Eleanor",
              lastName: "Pena",
              src: avatarFor(post.seed),
            }}
            onClick={() => setCommunityOpen(true)}
          />
        </F0Box>
      )}
      <F0Dialog
        isOpen={communityOpen}
        onClose={() => setCommunityOpen(false)}
        title="Company updates"
        width="md"
      >
        <F0Box padding="lg">
          <Post post={post} />
        </F0Box>
      </F0Dialog>
      {stage >= 3 && (
        <F0Text content="Let me know if you are missing anything, so we can adjust." />
      )}
    </F0Box>
  )
}

export function HomeArtifactView({
  artifact,
  entrance = false,
}: {
  artifact: HomeArtifact
  entrance?: boolean
}) {
  if (artifact.kind === "briefing")
    return <Briefing artifact={artifact} entrance={entrance} />
  if (artifact.kind === "routine") {
    const d = artifact.draft
    return (
      <F0Card title={d.title} description="Routine · local simulation">
        <F0Box display="flex" flexDirection="column" gap="md">
          <F0TagStatus
            text={
              d.saved ? "Saved · simulated" : "Draft · review before saving"
            }
            variant={d.saved ? "positive" : "warning"}
          />
          <F0Text content={`When: ${d.cadence}`} variant="label" />
          <F0Text content={`Condition: ${d.condition}`} />
          <F0Text content={`Outcome: ${d.action}`} />
        </F0Box>
      </F0Card>
    )
  }
  const d = artifact.draft
  const recruitment = d.metric === "recruitment"
  const actual = recruitment
    ? REPORT_SAMPLE.daysWithoutProgress
    : Math.round(
        (REPORT_SAMPLE.expenseActual / REPORT_SAMPLE.expenseBudget - 1) * 100
      )
  const alert = actual > d.threshold
  return (
    <F0Card title={d.title} description={`Report · ${d.cadence} · sample data`}>
      <F0Box display="flex" flexDirection="column" gap="md">
        <F0TagStatus
          text={
            d.saved
              ? "Simulated monitoring saved"
              : "Draft · review before saving"
          }
          variant={d.saved ? "positive" : "neutral"}
        />
        <F0Heading
          content={
            recruitment
              ? `${candidates.length} candidates · ${actual} days without progress`
              : `€11,800 · ${actual}% over budget`
          }
          variant="heading"
        />
        <F0Text
          content={`Flag when ${recruitment ? "a candidate has not progressed for more than" : "spending exceeds the budget by more than"} ${d.threshold}${recruitment ? " days" : "%"}.`}
        />
        <F0TagStatus
          text={alert ? "Change detected in this example" : "Within threshold"}
          variant={alert ? "warning" : "positive"}
        />
        <F0Text
          content={
            recruitment
              ? "Fatima has been in assessment for 9 days."
              : "Sample spending: €11,800 against a €10,000 budget."
          }
        />
        <F0Text
          content={
            alert
              ? "Suggested next step: review this with the person responsible before taking action."
              : "This threshold would not trigger an alert."
          }
        />
        {recruitment && (
          <RecruitmentWindow candidateId={REPORT_SAMPLE.stalledCandidateId} />
        )}
      </F0Box>
    </F0Card>
  )
}

export function GuidedHome({ conversation }: { conversation: Conversation }) {
  const loading = useHomeRefreshing(
    conversation.homeSetup?.profile ?? conversation.homeBriefing ?? "admin"
  )
  const setup = conversation.homeSetup
  const saved = [...conversation.messages]
    .reverse()
    .find((m) => m.homeArtifact?.kind === "briefing")?.homeArtifact
  const artifact: HomeArtifact = setup
    ? {
        kind: "briefing",
        focus: setup.focus,
        focuses: setup.focuses,
        profile: setup.profile,
      }
    : (saved ?? {
        kind: "briefing",
        focus: "team",
        profile: conversation.homeBriefing!,
      })
  return (
    <div className="mx-auto w-[712px] max-w-full pb-6">
      {loading ? (
        <>
          <HomeLoadingSkeleton />
          <HomeLoadingSkeleton />
        </>
      ) : (
        <HomeArtifactView artifact={artifact} entrance />
      )}
    </div>
  )
}

export function HomeSessionBar({
  conversation,
}: {
  conversation: Conversation
}) {
  const profile = conversation.homeSetup?.profile ?? conversation.homeBriefing
  if (!profile || conversation.homeSetup?.purpose) return null
  const saved = [...conversation.messages]
    .reverse()
    .find((m) => m.homeArtifact?.kind === "briefing")?.homeArtifact
  const focuses = conversation.homeSetup?.focuses ??
    (saved?.kind === "briefing" ? saved.focuses : undefined) ?? [
      "personal",
      "team",
    ]
  return (
    <F0Box display="flex" flexDirection="column" gap="md" paddingY="xl">
      <FactorialAgentIcon width={40} height={40} />
      <F0Box display="flex" flexDirection="column" gap="xs">
        <F0Heading
          content={`Welcome to your new Home, ${PROFILE_PEOPLE[profile].firstName}`}
          variant="heading"
        />
        <F0Box display="flex" alignItems="center" gap="sm" flexWrap="wrap">
          <F0Text
            content={`Your focus: ${focuses.map((f) => HOME_FOCUS_LABELS[f as keyof typeof HOME_FOCUS_LABELS]).join(" · ")}`}
            variant="description"
          />
          <F0Button
            label="Edit focus"
            icon={Pencil}
            hideLabel
            size="sm"
            variant="ghost"
            onClick={() => resumeHomeSetup(profile, "focus")}
          />
        </F0Box>
      </F0Box>
    </F0Box>
  )
}
