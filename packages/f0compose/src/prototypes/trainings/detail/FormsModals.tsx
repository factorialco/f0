import {
  F0Box,
  F0Card,
  F0Checkbox,
  F0Dialog,
  F0Select,
  F0Text,
} from "@factorialco/f0-react"
import {
  Textarea,
} from "@factorialco/f0-react/dist/experimental"
import { useEffect, useState } from "react"

import {
  surveyTemplates,
  type SurveyAnswer,
  type SurveyTemplate,
  type Training,
} from "@/fixtures"
import { NewFormWizard } from "./NewFormWizard"

export type FormAction =
  | "attach-survey"
  | "create-template"
  | "preview-template"
  | "detach-template"
  | "remind-pending"
  | "answer-detail"
  | "publish-questions"
  | "match-data"
  | null

type Props = {
  action: FormAction
  training: Training
  template?: SurveyTemplate | null
  answer?: SurveyAnswer | null
  onClose: () => void
}

const TITLES: Record<Exclude<FormAction, null>, string> = {
  "attach-survey": "Attach survey",
  "create-template": "New survey template",
  "preview-template": "Preview survey",
  "detach-template": "Detach survey",
  "remind-pending": "Send reminders",
  "answer-detail": "Response detail",
  "publish-questions": "Publish questions",
  "match-data": "Match data fields",
}

const PRIMARY: Record<Exclude<FormAction, null>, string> = {
  "attach-survey": "Attach survey",
  "create-template": "Create template",
  "preview-template": "Close",
  "detach-template": "Detach survey",
  "remind-pending": "Send reminders",
  "answer-detail": "Close",
  "publish-questions": "Publish",
  "match-data": "Save mapping",
}

const TRIGGER_OPTIONS = [
  { value: "after-completion", label: "After training completion" },
  { value: "after-each-session", label: "After each session" },
  { value: "manual", label: "Manual — send when I decide" },
]

const MATCH_OPTIONS = [
  { value: "training.satisfaction", label: "training.satisfaction" },
  { value: "training.knowledge_score", label: "training.knowledge_score" },
  { value: "training.recommend_score", label: "training.recommend_score" },
  { value: "employee.engagement", label: "employee.engagement" },
]

export function FormsModals({
  action,
  training,
  template = null,
  answer = null,
  onClose,
}: Props) {
  const [description, setDescription] = useState("")
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    surveyTemplates[0]?.id ?? ""
  )
  const [trigger, setTrigger] = useState<
    "after-completion" | "after-each-session" | "manual"
  >("after-completion")
  const [anonymous, setAnonymous] = useState(false)
  const [notifyPending, setNotifyPending] = useState(true)
  const [discardOld, setDiscardOld] = useState(false)
  const [matchMap, setMatchMap] = useState<string[]>([
    "training.satisfaction",
    "training.knowledge_score",
    "training.recommend_score",
    "employee.engagement",
  ])

  useEffect(() => {
    if (!action) return
    setDescription("")
    setSelectedTemplateId(surveyTemplates[0]?.id ?? "")
    setTrigger("after-completion")
    setAnonymous(false)
    setNotifyPending(true)
    setDiscardOld(false)
  }, [action])

  if (!action) return null

  // The "create-template" action is a 2-step wizard mirroring upstream
  // NewFormWizard (FormTypeStep + BasicInfoStep). It renders its own
  // dialog via F0WizardForm so we short-circuit before the generic
  // F0Dialog below.
  if (action === "create-template") {
    return (
      <NewFormWizard
        isOpen
        onClose={onClose}
        onCreated={() => onClose()}
      />
    )
  }

  const isWide =
    action === "preview-template" ||
    action === "answer-detail" ||
    action === "publish-questions" ||
    action === "match-data"

  const isCritical = action === "detach-template"

  const templateOptions = surveyTemplates
    .filter((t) => t.active)
    .map((t) => ({
      value: t.id,
      label: `${t.name} · ${t.questionCount} questions · ${t.responseScale}`,
    }))

  return (
    <F0Dialog
      open={action !== null}
      onOpenChange={(o: boolean) => {
        if (!o) onClose()
      }}
      width={isWide ? "lg" : "md"}
      title={TITLES[action]}
      description={`${training.name}${
        template ? ` · ${template.name}` : ""
      }${answer ? ` · ${answer.employeeName}` : ""}`}
      primaryAction={{
        label: PRIMARY[action],
        onClick: onClose,
        variant: isCritical ? "critical" : "default",
      }}
      secondaryAction={
        action === "answer-detail" || action === "preview-template"
          ? undefined
          : { label: "Cancel", onClick: onClose }
      }
    >
      <F0Box display="flex" flexDirection="column" gap="md">
        {action === "attach-survey" && (
          <>
            <F0Select
              label="Choose a template"
              value={selectedTemplateId}
              onChange={(v: string) => setSelectedTemplateId(v)}
              options={templateOptions}
            />
            <F0Select
              label="When to send"
              value={trigger}
              onChange={(v: typeof trigger) => setTrigger(v)}
              options={TRIGGER_OPTIONS}
            />
            <F0Checkbox
              checked={anonymous}
              onCheckedChange={(c) => setAnonymous(c === true)}
              title="Anonymise responses (hide employee identity in reports)"
            />
            <F0Text
              content="Reminders are sent automatically after 3 and 7 days for pending responses."
              variant="small"
            />
          </>
        )}

        {/* create-template is rendered as NewFormWizard above */}

        {action === "preview-template" && template && (
          <>
            <F0Text content={template.description} variant="small" />
            <F0Box display="flex" flexDirection="column" gap="sm">
              {Array.from({ length: template.questionCount }).map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-1 rounded-md border border-f1-border-secondary p-3"
                >
                  <F0Text
                    content={`Q${i + 1}. ${
                      template.category === "knowledge"
                        ? `Concept ${i + 1} is correctly applied?`
                        : template.category === "satisfaction"
                          ? `How would you rate aspect ${i + 1}?`
                          : `Open feedback on topic ${i + 1}`
                    }`}
                    variant="label"
                  />
                  <PreviewScale scale={template.responseScale} />
                </div>
              ))}
            </F0Box>
          </>
        )}

        {action === "detach-template" && (
          <F0Text
            content="Detaching the survey stops new invitations. Existing responses are kept in reports. You can re-attach it later."
            variant="body"
          />
        )}

        {action === "remind-pending" && (
          <>
            <F0Text
              content="A reminder will be sent by email and in-app to all participants with pending responses."
              variant="body"
            />
            <Textarea
              label="Optional message"
              value={description}
              onChange={(v) => setDescription(v ?? "")}
              rows={3}
              placeholder="Hi! Could you complete your survey when you have a minute?"
            />
          </>
        )}

        {action === "answer-detail" && answer && (
          <>
            <div className="flex gap-3">
              <Stat label="Status" value={answer.status} />
              <Stat
                label="Score"
                value={
                  answer.averageScore == null
                    ? "—"
                    : `${answer.averageScore}/5`
                }
              />
              <Stat
                label="Submitted"
                value={answer.submittedAt?.slice(0, 10) ?? "—"}
              />
            </div>
            <F0Box display="flex" flexDirection="column" gap="sm">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-md border border-f1-border-secondary p-2"
                >
                  <F0Text content={`Q${i + 1}. Question ${i + 1}`} variant="body" />
                  <F0Text
                    content={
                      answer.status === "submitted"
                        ? `${4 + (i % 2)} / 5`
                        : "—"
                    }
                    variant="label"
                  />
                </div>
              ))}
            </F0Box>
          </>
        )}

        {action === "publish-questions" && (
          <>
            <F0Text
              content="Publishing locks the question set. Existing responses are kept; new participants will see this version."
              variant="body"
            />
            <F0Checkbox
              checked={notifyPending}
              onCheckedChange={(c) => setNotifyPending(c === true)}
              title="Notify participants with pending responses"
            />
            <F0Checkbox
              checked={discardOld}
              onCheckedChange={(c) => setDiscardOld(c === true)}
              title="Discard old responses on republish"
            />
          </>
        )}

        {action === "match-data" && (
          <>
            <F0Text
              content="Map each survey question to a Factorial reporting field so answers feed into AI Reports automatically."
              variant="body"
            />
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="grid grid-cols-[1fr_auto_2fr] items-center gap-3"
              >
                <F0Text content={`Q${i + 1}`} variant="body" />
                <F0Text content="→" variant="small" />
                <F0Select
                  label={`Map Q${i + 1}`}
                  hideLabel
                  value={matchMap[i] ?? ""}
                  onChange={(v: string) =>
                    setMatchMap((prev) => {
                      const next = [...prev]
                      next[i] = v
                      return next
                    })
                  }
                  options={MATCH_OPTIONS}
                />
              </div>
            ))}
          </>
        )}
      </F0Box>
    </F0Dialog>
  )
}

function PreviewScale({
  scale,
}: {
  scale: "1-5" | "1-10" | "yes-no" | "mixed"
}) {
  if (scale === "yes-no") {
    return (
      <div className="flex gap-2">
        <Chip>Yes</Chip>
        <Chip>No</Chip>
      </div>
    )
  }
  if (scale === "mixed") {
    return <F0Text content="Open answer" variant="small" />
  }
  const max = scale === "1-10" ? 10 : 5
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Chip key={i}>{i + 1}</Chip>
      ))}
    </div>
  )
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-sm border border-f1-border-secondary px-2 py-0.5 text-xs">
      {children}
    </span>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <F0Card title={label}>
      <div className="p-3">
        <F0Text content={value} variant="label" />
      </div>
    </F0Card>
  )
}
