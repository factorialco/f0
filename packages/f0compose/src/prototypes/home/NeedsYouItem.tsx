import { F0Button, F0Icon } from "@factorialco/f0-react";
import { CheckCircle, ChevronRight } from "@factorialco/f0-react/icons/app";
import { useEffect, useState } from "react";

import type { NeedsYouTask } from "./fixtures";
import type { TaskPhase } from "./needsYouStore";

import { ChatSpinner } from "./one/chat-spinner/ChatSpinner";

// The cascade is a first-paint welcome, not a navigation transition.
// Opening and closing a conversation, leaving ?view=policies and the nav
// "New" action all remount this list, and the stagger must not replay
// every time (Emil: Home is seen dozens of times a day).
let hasEnteredOnce = false;

/**
 * A "Needs you" row (Figma 2621:23747, redesigned 2026-08-29): 48px tall
 * — a bare 20px icon, then the title and its subtitle on ONE line, then
 * a chevron. The title never shrinks and the subtitle absorbs the slack
 * and clips, so the row reads title-first at any width.
 *
 * The per-row CTA button ("Approve all", "Pick Lucía"…) is gone from the
 * design — opening the row is the only action now. `ctaLabel` stays in
 * the fixtures, unused, in case the buttons come back.
 *
 * `phase` is One working on this row IN PLACE, which is where work with
 * nothing to action afterwards belongs — it never opens a conversation
 * (Oskar, third pass). `thinking` puts the ChatSpinner where the icon was
 * and shimmers each reasoning step through the subtitle's slot; `done`
 * shows a check and what it actually did, for a beat, before the list
 * drops the row.
 *
 * The row goes inert in all of them: nothing to open while One is mid-way,
 * and nothing left to open once it is finished.
 *
 * `min-h-12` is load-bearing. At rest the CHEVRON sets the row's 48px
 * (12 + 24 + 12) — the text is only 20px — so hiding it while One works
 * dropped the row to 44 and the whole list twitched. The floor holds the
 * height through every phase whatever is inside.
 */
export function NeedsYouItem({
  task,
  index = 0,
  onOpen,
  phase,
  surface = "tertiary",
}: {
  task: NeedsYouTask;
  surface?: "primary" | "tertiary";
  /** Position in the list — drives the staggered entrance animation. */
  index?: number;
  onOpen?: (task: NeedsYouTask) => void;
  /** Set while One is closing this row itself. */
  phase?: TaskPhase;
}) {
  const [animate] = useState(() => !hasEnteredOnce);
  useEffect(() => {
    hasEnteredOnce = true;
  }, []);
  const busy = phase !== undefined;
  const finished = phase?.kind === "done" || phase?.kind === "exiting";
  const step =
    phase?.kind === "thinking"
      ? phase.steps[Math.min(phase.visible, phase.steps.length) - 1]
      : undefined;
  return (
    // The slot owns the row's bottom spacing so a collapsing row takes
    // the gap with it — see .f0c-row-slot.
    <div
      className="f0c-row-slot"
      data-exiting={phase?.kind === "exiting" || undefined}
    >
      <div className="overflow-hidden pb-2">
        <div
          onClick={busy || !onOpen ? undefined : () => onOpen(task)}
          aria-busy={phase?.kind === "thinking" || undefined}
          // Explicit duration/easing: a bare `transition-colors` falls back to
          // tailwind's 150ms ease-in-out, which withholds the first third of a
          // hover the pointer is already sitting on. Hover -> plain ease, short.
          className={`f0c-ease-hover flex min-h-12 w-full items-center gap-2 overflow-hidden rounded-[10px] ${surface === "primary" ? "border border-solid border-f1-border-secondary bg-f1-background" : "bg-f1-background-tertiary"} p-3 transition-colors duration-150 ${
            busy || !onOpen
              ? "cursor-default"
              : "cursor-pointer hover:bg-f1-background-secondary"
          } ${animate ? "f0c-card-in" : ""}`}
          style={animate ? { animationDelay: `${index * 30}ms` } : undefined}
        >
          {/* The spinner sits in the icon's own 20px box so the title never
          shifts as the row changes state. */}
          {phase?.kind === "thinking" ? (
            <span className="flex size-5 shrink-0 items-center justify-center">
              <ChatSpinner />
            </span>
          ) : (
            <span className={finished ? "f0c-check-in flex" : "flex"}>
              <F0Icon
                icon={finished ? CheckCircle : task.icon}
                size="md"
                color={finished ? "positive" : "secondary"}
              />
            </span>
          )}
          {step ? (
            // The step REPLACES the whole line rather than trailing the
            // title: it is One narrating, not a fact about the task, and it
            // needs the width to say a sentence.
            // `key` on the step so React remounts it and the entrance
            // replays: without it the text swaps in place and the change is
            // easy to miss entirely.
            <span
              key={step}
              className="f0c-step-in min-w-0 flex-1 truncate text-base text-f1-foreground-secondary"
            >
              <span className="shine-text">{step}</span>
            </span>
          ) : (
            <span className="flex min-w-0 flex-1 items-center gap-2">
              <span
                className={`shrink-0 text-base font-medium ${
                  finished
                    ? "text-f1-foreground-secondary"
                    : "text-f1-foreground"
                }`}
              >
                {task.title}
              </span>
              <span
                key={finished ? "summary" : "subtitle"}
                className={`min-w-0 max-w-[400px] flex-1 truncate text-base text-f1-foreground-secondary ${
                  finished ? "f0c-step-in" : ""
                }`}
              >
                {finished ? phase.summary : task.subtitle}
              </span>
            </span>
          )}
          {/* No chevron while One is on it, and none once it is done: there is
          nothing to open, and leaving it invites a click that goes
          nowhere. */}
          {!busy && onOpen && (
            <F0Button
              variant="ghost"
              size="sm"
              icon={ChevronRight}
              hideLabel
              label={`Open "${task.title}"`}
              onClick={(event: React.MouseEvent) => {
                event.stopPropagation();
                onOpen?.(task);
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
