import {
  F0AvatarCompany,
  F0Box,
  F0Button,
  F0Card,
  F0Heading,
  F0Icon,
  F0TagStatus,
  F0Text,
} from "@factorialco/f0-react"
import { Celebration } from "@factorialco/f0-react/dist/experimental"
import { Pencil, Spinner } from "@factorialco/f0-react/icons/app"
import { useEffect, useRef, useState } from "react"
import { avatarFor } from "@/fixtures/helpers"
import type { HomeArtifact } from "./homeSetup"
import { useFixedWidgets } from "./widgetPreferences"
import { FactorialAgentIcon } from "../FactorialAgentIcon"
import { PROFILE_PEOPLE, factorialLogo, needsYouTasks } from "../fixtures"
import { RecruitmentWindow } from "../home-widgets/OriginalStackWidgets"
import { candidates } from "../home-widgets/recruitment"
import { NeedsYouItem } from "../NeedsYouItem"
import { SectionHeader } from "../SectionHeader"
import {
  requestWindow,
  resumeHomeSetup,
  startConversationWithContext,
  type ChatMessage,
  type Conversation,
} from "../one/conversationStore"
import { COMMUNITY_POSTS } from "../windows/communityPosts"
import { Post } from "../windows/CommunitiesWindow"
import { BIRTHDAY_SAMPLE, REPORT_SAMPLE, PERSONAL_TASKS } from "./mock-data"
import googleLogo from "./assets/google.svg"
import notionLogo from "./assets/notion.svg"
import { HomeLoadingSkeleton, useHomeRefreshing } from "./homeRefresh"

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
  const animate = useRef(stage < 3)
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
    : [artifact.focus]
  const tasks = [
    ...(focuses.includes("team") ? needsYouTasks.slice(0, 1) : []),
    ...(focuses.includes("recruitment") ||
    (!artifact.focuses && artifact.focus === "team")
      ? needsYouTasks.filter((t) => t.module === "ats")
      : []),
    ...(focuses.includes("personal") ? PERSONAL_TASKS : []),
  ]
  return (
    <F0Box display="flex" flexDirection="column" gap="lg">
      {stage === 0 && (
        <F0Text content="Preparing your home…" variant="description" />
      )}
      {stage >= 1 && (
        <div
          className={`${animate.current ? "f0c-card-in " : ""}flex w-full flex-col gap-2`}
          data-home-generated-section="attention"
        >
          <SectionHeader title="Needs your attention" />
          <div className="flex w-full flex-col">
            {tasks.map((task, index) => (
              <NeedsYouItem
                key={task.id}
                task={task}
                index={index}
                onOpen={() =>
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
                }
              />
            ))}
          </div>
        </div>
      )}
      {stage >= 2 && !fixedWidgets.includes("communities") && (
        <div
          className={`${animate.current ? "f0c-card-in " : ""}flex flex-col gap-3`}
          data-home-generated-section="news"
        >
          <F0Heading
            content="Latest from your communities"
            variant="heading"
          />
          <Post post={COMMUNITY_POSTS[1]} />
        </div>
      )}
      {stage >= 3 && !fixedWidgets.includes("celebrations") && (
        <div
          className={`${animate.current ? "f0c-card-in " : ""}flex flex-col gap-3`}
          data-home-generated-section="celebrations"
        >
          <F0Heading content="Worth celebrating" variant="heading" />
          <div className="w-48 max-w-full">
            <Celebration
              link="#"
              firstName={BIRTHDAY_SAMPLE.firstName}
              lastName={BIRTHDAY_SAMPLE.lastName}
              src={avatarFor(BIRTHDAY_SAMPLE.seed)}
              type="birthday"
              typeLabel="Birthday today"
              date={BIRTHDAY_SAMPLE.date}
              onClick={() => requestWindow("celebrations")}
            />
          </div>
        </div>
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
        (REPORT_SAMPLE.expenseActual / REPORT_SAMPLE.expenseBudget - 1) *
          100
      )
  const alert = actual > d.threshold
  return (
    <F0Card
      title={d.title}
      description={`Report · ${d.cadence} · sample data`}
    >
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
          text={
            alert ? "Change detected in this example" : "Within threshold"
          }
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
          <RecruitmentWindow
            candidateId={REPORT_SAMPLE.stalledCandidateId}
          />
        )}
      </F0Box>
    </F0Card>
  )
}

export function GuidedHome({
  conversation,
}: {
  conversation: Conversation
}) {
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
    <div className="mx-auto w-[712px] max-w-full px-3 pb-6">
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
  const profile =
    conversation.homeSetup?.profile ?? conversation.homeBriefing
  const updating = useHomeRefreshing(profile ?? "admin")
  const [reviewing, setReviewing] = useState(true)
  const [sources, setSources] = useState(false)
  useEffect(() => {
    setReviewing(true)
    const timer = window.setTimeout(() => setReviewing(false), 1900)
    return () => window.clearTimeout(timer)
  }, [conversation.id])
  if (!profile || conversation.homeSetup?.purpose) return null
  return (
    <F0Box display="flex" flexDirection="column" gap="md" paddingY="lg">
      <F0Box
        display="flex"
        alignItems="start"
        justifyContent="between"
        gap="md"
      >
        <F0Box display="flex" alignItems="center" gap="sm">
          <FactorialAgentIcon width={40} height={40} />
          <F0Box display="flex" flexDirection="column" gap="xs">
            <F0Heading
              content={`Welcome back, ${PROFILE_PEOPLE[profile].firstName}`}
              variant="heading"
            />
            <F0Box display="flex" alignItems="center" gap="sm">
              {reviewing && (
                <span className="animate-spin">
                  <F0Icon icon={Spinner} size="xs" />
                </span>
              )}
              <span role="status">
                <F0Text
                  content={
                    updating
                      ? "Updating your home…"
                      : reviewing
                        ? "Checking in"
                        : "Up to date · Checked now"
                  }
                  variant="description"
                />
              </span>
              <F0AvatarCompany
                name="Factorial"
                src={factorialLogo}
                size="xs"
              />
              <F0AvatarCompany
                name="Google Calendar"
                src={googleLogo}
                size="xs"
              />
              <F0AvatarCompany name="Notion" src={notionLogo} size="xs" />
              <F0Button
                label={sources ? "Hide sources" : "Sources"}
                size="sm"
                variant="ghost"
                onClick={() => setSources(!sources)}
              />
            </F0Box>
          </F0Box>
        </F0Box>
        <F0Button
          label="Edit"
          icon={Pencil}
          variant="ghost"
          size="sm"
          onClick={() => resumeHomeSetup(profile)}
        />
      </F0Box>
      {sources && (
        <F0Box display="flex" flexDirection="column" gap="sm" padding="md">
          <F0Text content="Sources for your updates" variant="label" />
          <F0Text content="Factorial · sample requests, people and community posts" />
          <F0Text content="Google Calendar · sample events" />
          <F0Text content="Notion · sample team updates" />
          <F0Text
            content="Simulated review. No external accounts are connected."
            variant="description"
          />
        </F0Box>
      )}
    </F0Box>
  )
}
