import { F0Button, F0Icon } from "@factorialco/f0-react"
import {
  SolidPlay,
  Reset,
  SolidPause,
  CheckCircleLine,
  Spinner,
  DottedCircle,
} from "@factorialco/f0-react/icons/app"

export type OnboardingStepsCardProps = {
  taskKey?: string
  taskTitle: string
  steps: string[]
  activeStepIndex?: number
  // "to-play"  — never started
  // "playing"  — tour active
  // "paused"   — stopped mid-tour, index preserved
  // "done"     — all steps complete
  status?: "to-play" | "playing" | "paused" | "done"
  onPlay?: () => void
  onPause?: () => void
  onRestart?: () => void
}

export function OnboardingStepsCard({
  taskTitle,
  steps,
  activeStepIndex,
  status,
  onPlay,
  onPause,
  onRestart,
}: OnboardingStepsCardProps) {
  if (steps.length === 0) return null

  const shellBase =
    "w-full rounded-lg border border-solid border-f1-border-secondary bg-f1-background shadow-sm overflow-hidden"

  // No guided tour — plain step list, no controls
  if (!status) {
    return (
      <div className={shellBase}>
        <div className="px-3 pt-3 pb-0">
          <span className="text-base font-semibold text-f1-foreground">
            {taskTitle}
          </span>
        </div>
        <div className="flex flex-col px-3 pt-2 pb-3">
          {steps.map((step, i) => {
            const isDone = activeStepIndex !== undefined && i < activeStepIndex
            return (
              <div key={i} className="flex items-start gap-2.5 py-2">
                {isDone ? (
                  <F0Icon icon={CheckCircleLine} color="positive" size="md" />
                ) : (
                  <F0Icon icon={DottedCircle} color="secondary" size="md" />
                )}
                <span className="text-sm font-semibold text-f1-foreground leading-5 flex-1">
                  {step}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  // "to-play" — never started, entire card is a clickable button
  if (status === "to-play") {
    return (
      <button
        onClick={onPlay}
        className={`${shellBase} text-left transition-colors hover:border-f1-border-hover cursor-pointer`}
      >
        <div className="flex items-center justify-between px-3 pt-3 pb-3 gap-3">
          <div className="flex flex-col gap-0.5 min-w-0 flex-1">
            <span className="text-base font-semibold text-f1-foreground">
              {taskTitle}
            </span>
            <span className="text-sm text-f1-foreground-secondary">
              Take the tour
            </span>
          </div>
          <F0Button variant="neutral" icon={SolidPlay} hideLabel label="Take the tour" size="md" onClick={onPlay} />
        </div>
      </button>
    )
  }

  // "playing" | "paused" | "done" — card shell with header controls + step list
  const subtitle =
    status === "done"
      ? "Restart tour"
      : status === "paused"
        ? "Resume or restart tour"
        : "Pause or restart tour"

  return (
    <div className={shellBase}>
      {/* Header */}
      <div className="flex items-start justify-between px-3 pt-3 pb-0 gap-2">
        <div className="flex flex-col gap-0.5 min-w-0 flex-1">
          <span className="text-base font-semibold text-f1-foreground">
            {taskTitle}
          </span>
          <span className="text-sm text-f1-foreground-secondary">
            {subtitle}
          </span>
        </div>
        <div className="flex items-center gap-1 shrink-0 self-start mt-0.5">
          <F0Button
            variant="ghost"
            icon={Reset}
            hideLabel
            label="Restart"
            size="md"
            onClick={onRestart}
          />
          {/* Toggle: pause when playing, play when paused */}
          {(status === "playing" || status === "paused") && (
            <F0Button
              variant="neutral"
              icon={status === "playing" ? SolidPause : SolidPlay}
              hideLabel
              label={status === "playing" ? "Pause" : "Resume"}
              size="md"
              onClick={status === "playing" ? onPause : onPlay}
            />
          )}
        </div>
      </div>

      {/* Step list */}
      <div className="flex flex-col px-3 pt-2 pb-3">
        {steps.map((step, i) => {
          const isDone = activeStepIndex !== undefined && i < activeStepIndex
          const isActive = status === "playing" && activeStepIndex === i
          return (
            <div key={i} className="flex items-start gap-2.5 py-2">
              {isDone ? (
                <F0Icon icon={CheckCircleLine} color="positive" size="md" />
              ) : isActive ? (
                <span className="flex h-4 w-4 shrink-0 items-center justify-center animate-spin">
                  <F0Icon icon={Spinner} color="secondary" size="md" />
                </span>
              ) : (
                <F0Icon icon={DottedCircle} color="secondary" size="md" />
              )}
              <span className="text-sm font-semibold text-f1-foreground leading-5 flex-1">
                {step}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
