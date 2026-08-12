import { motion } from "motion/react"
import { Dispatch, useState } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Select } from "@/components/F0Select"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"

import { ClockInGraph, ClockInGraphProps } from "../ClockInGraph"
import { getLabels } from "../ClockInGraph/helpers"
import { getInfo } from "./helpers"
import {
  type ClockInLocation,
  LocationSelector,
  toLocationTree,
} from "./LocationSelector"
import { type ClockInProject, ProjectSelector } from "./ProjectSelector"
import Selector from "./Selector"
import { ClockInControlsSkeleton } from "./Skeleton"
import { findLeaf } from "./TreeSelector"

export type { ClockInLocation, ClockInProject }

interface BreakType {
  id: string
  name: string
  duration?: string
  description?: string
  isPaid: boolean
}

/**
 * How the pieces are laid out. Both variants show the same day, run the same
 * state machine and use the same controls — only their arrangement differs.
 */
export type ClockInControlsVariant = "default" | "horizontal-bar"

/**
 * Drops a picker's field FILL so whatever the tile sits on shows through; its
 * border still draws the field.
 *
 * This tile lives on a Home widget card, and that card is TRANSLUCENT
 * (`bg-f1-background-inverse-secondary`, 5% white over the page in dark, 60% in
 * light) while an F0 field paints an opaque `bg-f1-background` — the page's own
 * colour. Two opaque fields on a see-through card read as darker (or whiter)
 * rectangles than the card itself, which is why this widget looked like it had a
 * different background from its neighbours. Nothing else in the rail puts an
 * opaque surface inside a card.
 *
 * AD HOC on purpose, and it shows: it hooks the field wrapper by `data-testid`,
 * because `F0Select`'s `className` goes to the dropdown rather than the trigger,
 * so there is no honest handle for this yet. The general fix is a surface-only
 * variant on `F0InputField` (bordered, no fill) exposed through `F0Select`, which
 * every field-inside-a-widget would want — a Foundations change, not this PR's.
 */
const FIELD_WITHOUT_FILL =
  "[&_[data-testid=input-field-wrapper]]:bg-transparent"

/** Everything both variants take, on the same terms. */
interface ClockInControlsBaseProps {
  /** Optional remaining time in minutes */
  remainingMinutes?: number
  /** Clock in entries data */
  data: ClockInGraphProps["data"]
  /** Tracked minutes */
  trackedMinutes: number
  /** Labels for all text content */
  labels: {
    clockedOut: string
    clockedIn: string
    onBreak: string
    clockIn: string
    clockOut: string
    break: string
    resume: string
    remainingTime: string
    overtime: string
    selectLocation: string
    selectProject: string
    paid: string
    unpaid: string
    /**
     * Placeholders for the pickers' search boxes (`horizontal-bar` only).
     * Optional: without them the pickers fall back to F0Select's own wording.
     */
    searchProject?: string
    searchLocation?: string
  }
  /** The selected location — a leaf, when the list nests. */
  locationId?: string
  onChangeLocationId: Dispatch<string>
  /**
   * The locations to offer. Each may carry `sublocations`, two or three levels
   * deep (location → workplace → work area), and selection is then a leaf.
   *
   * Nesting is drawn by the `horizontal-bar` variant, which owns its picker. The
   * `default` variant's built-in select is flat and offers only the top level — it
   * has `locationSelectorElement` for a consumer's own drill-in instead — though
   * it still DISPLAYS a selected leaf wherever it sits in the tree.
   */
  locations: ClockInLocation[]
  breakTypes?: BreakType[]
  onChangeBreakTypeId?: Dispatch<string>
  canShowLocation?: boolean
  locationSelectorDisabled?: boolean
  canShowBreakButton?: boolean
  canSeeGraph?: boolean
  canSeeRemainingTime?: boolean
  /** Callback when Clock In button is clicked */
  onClockIn?: () => void
  /** Callback when Clock Out button is clicked */
  onClockOut?: () => void
  /** Callback when Break button is clicked */
  onBreak?: (breakTypeId?: string) => void
  canShowProject?: boolean
  breakTypeName?: string
  /**
   * On a break, which action gets the primary button — the other becomes an
   * icon-only outline beside it.
   *
   * Unset, it follows the day: `"clock-out"` once you're into overtime (the hours
   * are done, so ending them is the useful move), `"resume"` while there are hours
   * left. Set it to pin one regardless.
   */
  onBreakPromote?: "resume" | "clock-out"
  /**
   * Draws a placeholder shaped like the chosen `variant` instead of the
   * controls — for when the day itself hasn't arrived yet. Prefer it over
   * rendering a zeroed-out day: `trackedMinutes={0}` with no `data` is a real
   * state ("clocked out, nothing tracked"), not a missing one.
   */
  loading?: boolean
}

/**
 * The `default` variant, where the consumer may bring its OWN location and
 * project controls as nodes: this is the arrangement Factorial already ships,
 * and both slots are in use (e.g. a drill-in location selector).
 */
interface ClockInControlsDefaultProps extends ClockInControlsBaseProps {
  /**
   * The status and its controls beside the circular `ClockInGraph`, with the
   * location/project row underneath.
   */
  variant?: "default"
  /**
   * Optional custom location control. When provided, it replaces the built-in
   * flat location `F0Select` (in both the editable clocked-out state and the
   * read-only clocked-in state), letting the consumer supply its own control —
   * e.g. a drill-in selector (location → workplace → work area). The consumer
   * owns its data and editable/disabled state, mirroring `projectSelectorElement`.
   */
  locationSelectorElement?: React.ReactNode
  projectSelectorElement?: React.ReactNode
  projects?: never
  projectId?: never
  onChangeProjectId?: never
  projectSelectorDisabled?: never
  /** Only the `horizontal-bar` variant owns the pickers, so only it can relax them. */
  projectRequired?: never
  locationRequired?: never
}

/**
 * The `horizontal-bar` variant, which owns BOTH selectors.
 *
 * The custom-render slots are typed away here (`never`) on purpose: this
 * arrangement puts the two pickers on one line with the day's controls, and a
 * consumer-supplied node in either slot is what would break that line — so it
 * takes DATA instead and renders the pickers itself. Location becomes an
 * `F0ButtonDropdown`, projects an `F0Select` whose groups are the subprojects.
 */
interface ClockInControlsHorizontalBarProps extends ClockInControlsBaseProps {
  /**
   * The Home-widget shape from the custom-home prototype: four full-width rows,
   * each pinning its two halves to the tile's ends — status + running total on
   * one line, the day as a horizontal bar, when it started and what is left of
   * it, then the location and the controls. Fits a narrow rail, where the 160px
   * ring does not.
   */
  variant: "horizontal-bar"
  /** Not available in this variant — pass `locations` and let it render them. */
  locationSelectorElement?: never
  /** Not available in this variant — pass `projects` and let it render them. */
  projectSelectorElement?: never
  /** The projects to offer, each optionally with its own subprojects. */
  projects?: ClockInProject[]
  /** The selected project — or subproject, since selection is always a leaf. */
  projectId?: string
  onChangeProjectId?: Dispatch<string>
  projectSelectorDisabled?: boolean
  /**
   * Whether a project must be chosen to clock in. When it isn't, the picker
   * offers a clear affordance and reports the empty string once cleared.
   * Defaults to `true` — the stricter reading, and the behaviour before there
   * was any way to clear.
   */
  projectRequired?: boolean
  /** The same for the location. Defaults to `true`. */
  locationRequired?: boolean
}

export type ClockInControlsProps =
  | ClockInControlsDefaultProps
  | ClockInControlsHorizontalBarProps

export function ClockInControls({
  trackedMinutes,
  remainingMinutes,
  data = [],
  labels,
  locationId,
  locations,
  canShowLocation = true,
  locationSelectorDisabled = false,
  onClockIn,
  onClockOut,
  onBreak,
  breakTypes,
  onChangeBreakTypeId,
  canShowBreakButton = true,
  canSeeGraph = true,
  canSeeRemainingTime = true,
  // onClickProjectSelector,
  onChangeLocationId,
  canShowProject = true,
  projectSelectorElement,
  locationSelectorElement,
  projects,
  projectId,
  onChangeProjectId,
  projectSelectorDisabled = false,
  projectRequired = true,
  locationRequired = true,
  breakTypeName,
  onBreakPromote,
  variant = "default",
  loading = false,
}: ClockInControlsProps) {
  const { status, statusText, subtitle, statusColor } = getInfo({
    data,
    labels,
    trackedMinutes,
    remainingMinutes,
    canSeeRemainingTime,
  })

  const showLocationAndProjectSelectors = status === "clocked-out"

  const breakTypeOptions =
    breakTypes?.map((breakType) => ({
      value: breakType.id,
      label: breakType.duration
        ? `${breakType.name} · ${breakType.duration}`
        : breakType.name,
      description: breakType.description,
      tag: breakType.isPaid ? labels.paid : labels.unpaid,
    })) ?? []

  const [breakTypePickerOpen, setBreakTypePickerOpen] = useState(false)

  const handleClickBreakButton = () => {
    if (breakTypeOptions.length > 1) {
      if (!breakTypePickerOpen) {
        setBreakTypePickerOpen(true)
      }
    } else {
      const firstBreakTypeValue = breakTypeOptions?.[0]?.value
      onBreak?.(firstBreakTypeValue)
    }
  }

  const handleChangeBreakType = (value: string) => {
    onChangeBreakTypeId?.(value)
    setBreakTypePickerOpen(false)
    onBreak?.(value)
  }

  const canSelectLocation =
    showLocationAndProjectSelectors &&
    locations.length &&
    !locationSelectorDisabled &&
    canShowLocation

  const canSelectProject =
    showLocationAndProjectSelectors &&
    !projectSelectorDisabled &&
    canShowProject

  // Tree-aware: with `sublocations` the selected id names a LEAF, which
  // `locations.find` would miss. Both variants need the selected location to
  // display, even the flat one that can't offer the drill-in.
  const location = findLeaf(toLocationTree(locations), locationId)

  const locationOptions = locations.map((location) => ({
    value: location.id,
    label: location.name,
    icon: location.icon,
  }))

  const canShowBreakTypeName = status === "break"

  const [locationPickerOpen, setLocationPickerOpen] = useState(false)

  const builtInLocationControl = canSelectLocation ? (
    <F0Select
      label={labels.selectLocation}
      hideLabel
      value={locationId}
      options={locationOptions}
      onChange={onChangeLocationId}
      open={locationPickerOpen}
      onOpenChange={setLocationPickerOpen}
      disabled={locationSelectorDisabled}
    >
      <div aria-label="Select location">
        <Selector
          text={location?.name}
          placeholder={labels.selectLocation}
          icon={location?.icon}
        />
      </div>
    </F0Select>
  ) : location ? (
    <F0TagRaw text={location.name} icon={location.icon} />
  ) : null

  /**
   * The `horizontal-bar` variant's location control — the SAME select whether or
   * not it can be changed, disabled once the day is open rather than swapped for
   * a read-only tag. A control that turns into a tag moves the line it sits on
   * and makes the tile re-flow mid-day; disabled, it stays exactly where it was
   * and still says what was picked.
   */
  const barLocationControl = locations.length ? (
    <LocationSelector
      locations={locations}
      locationId={locationId}
      onChangeLocationId={onChangeLocationId}
      label={labels.selectLocation}
      searchPlaceholder={labels.searchLocation}
      required={locationRequired}
      disabled={!canSelectLocation}
    />
  ) : null

  /** The same deal for projects, as an `F0Select` grouped by parent project. */
  const barProjectControl =
    projects?.length && canShowProject ? (
      <ProjectSelector
        projects={projects}
        projectId={projectId}
        onChangeProjectId={onChangeProjectId}
        label={labels.selectProject}
        searchPlaceholder={labels.searchProject}
        required={projectRequired}
        disabled={!canSelectProject}
      />
    ) : null

  /**
   * Which action leads while you're on a break.
   *
   * Left to itself it follows the DAY: past your hours, the useful thing is to
   * end them, so clocking out leads; inside them, you are coming back, so resume
   * does. A consumer that knows better — a policy that always wants one of them
   * forward — says so with `onBreakPromote`.
   */
  const promotedOnBreak =
    onBreakPromote ?? ((remainingMinutes ?? 0) < 0 ? "clock-out" : "resume")

  // The controls, once for both variants: the state machine, the break-type
  // picker and the buttons' own hierarchy belong to the component, not to a
  // layout, so a variant re-places them rather than redefining them.
  const controls = (
    <>
      {status === "clocked-out" && (
        // The nudge off the right edge is the DEFAULT layout's: it balances the
        // lone button against the ring beside it. The bar variant pins its
        // controls to the tile's edge, where that margin would be a gap.
        <div className={variant === "default" ? "mr-3 @xs:mr-0" : undefined}>
          <F0Button
            onClick={onClockIn}
            label={labels.clockIn}
            icon={SolidPlay}
          />
        </div>
      )}

      {status === "clocked-in" && (
        <>
          {canShowBreakButton && (
            <>
              {breakTypeOptions.length > 1 && onChangeBreakTypeId ? (
                <F0Select
                  label={labels.break}
                  hideLabel
                  value=""
                  options={breakTypeOptions}
                  onChange={handleChangeBreakType}
                  open={breakTypePickerOpen}
                  onOpenChange={setBreakTypePickerOpen}
                >
                  <div aria-label="Select break type">
                    <F0Button
                      label={labels.break}
                      variant="outline"
                      icon={SolidPause}
                      hideLabel
                    />
                  </div>
                </F0Select>
              ) : (
                <F0Button
                  onClick={handleClickBreakButton}
                  label={labels.break}
                  variant="outline"
                  icon={SolidPause}
                  hideLabel
                />
              )}
            </>
          )}
          <F0Button
            onClick={onClockOut}
            label={labels.clockOut}
            variant="outline"
            icon={SolidStop}
          />
        </>
      )}
      {status === "break" &&
        // The PROMOTED action is the primary button, labelled; the other is an
        // icon-only outline beside it. Which one is promoted depends on where the
        // day stands — see `promotedOnBreak`.
        (promotedOnBreak === "clock-out" ? (
          <>
            <F0Button
              onClick={onClockIn}
              label={labels.resume}
              variant="outline"
              icon={SolidPlay}
              hideLabel
            />
            <F0Button
              onClick={onClockOut}
              label={labels.clockOut}
              icon={SolidStop}
            />
          </>
        ) : (
          <>
            <F0Button
              onClick={onClockOut}
              label={labels.clockOut}
              variant="outline"
              icon={SolidStop}
              hideLabel
            />
            <F0Button
              onClick={onClockIn}
              label={labels.resume}
              icon={SolidPlay}
            />
          </>
        ))}
    </>
  )

  // Where you are and what you are on. The two selectors are the variants' one
  // real difference in substance: `default` will take the consumer's own nodes,
  // `horizontal-bar` renders its own from data (see the props union). The break
  // tag is the same in both.
  const locationControl =
    variant === "horizontal-bar"
      ? barLocationControl
      : (locationSelectorElement ?? builtInLocationControl)

  const projectControl =
    variant === "horizontal-bar" ? barProjectControl : projectSelectorElement

  const breakTag =
    canShowBreakTypeName && breakTypeName ? (
      <F0TagRaw text={breakTypeName} />
    ) : null

  const contextTags = (
    <>
      {canShowLocation && locationControl}
      {canShowProject && projectControl}
      {breakTag}
    </>
  )

  // What the `horizontal-bar` footer has to place. Both pickers are FIELDS, and a
  // field is `w-full` by nature: give either one a content-width slot and it
  // pushes the line past the tile instead of fitting in it. So they share what
  // the line has — `flex-1` each, `min-w-0` so a long project name truncates
  // rather than widening its box.
  const showLocation = canShowLocation && !!locationControl
  const showProject = canShowProject && !!projectControl
  // The fill is dropped only while a picker is live: once the day is open they
  // are disabled, and that greyed fill is the only cue saying so.
  const locationSlot = showLocation ? (
    <div
      className={cn(
        "flex min-w-0 flex-1 flex-row",
        canSelectLocation && FIELD_WITHOUT_FILL
      )}
    >
      {locationControl}
    </div>
  ) : null
  const projectSlot = showProject ? (
    <div
      className={cn("min-w-0 flex-1", canSelectProject && FIELD_WITHOUT_FILL)}
    >
      {projectControl}
    </div>
  ) : null

  // WHICH PICKER SHARES THE ACTIONS' LINE. One picker always does — that line is
  // the prototype's own, and a lone picker on a line of its own would leave the
  // buttons stranded under an empty half. With two, the PROJECT takes the line
  // above (its names are the long ones, so it gets the full width) and the
  // location keeps the buttons company.
  const bothPickers = showLocation && showProject
  const pickerAboveActions = bothPickers ? projectSlot : null
  const pickerBesideActions = bothPickers
    ? locationSlot
    : (locationSlot ?? projectSlot)

  if (loading) {
    return (
      <ClockInControlsSkeleton
        variant={variant}
        canSeeGraph={canSeeGraph}
        canShowLocation={canShowLocation}
        // Not `canShowProject` alone: that only says a project picker is ALLOWED.
        // The placeholder should hold a line for one that is actually coming.
        canShowProject={
          canShowProject && !!(projects?.length ?? projectControl)
        }
      />
    )
  }

  if (variant === "horizontal-bar") {
    // The same numbers the ring puts inside itself — its own formatter, so the
    // two variants can't disagree about the day: the running total, and when it
    // started (or `--:--` before it does).
    const { primaryLabel, time } = getLabels({
      data,
      trackedMinutes,
      remainingMinutes: canSeeRemainingTime ? remainingMinutes : 0,
    })

    return (
      <div className="flex flex-col gap-2">
        {/* The state and the running total, one line, ONE type size: they are
            two halves of one fact ("clocked out, nothing tracked yet"), so
            neither is made subordinate to the other. No status dot here — the
            bar below is coloured by that same state, and the total has the
            place the dot holds in the default variant. */}
        <div className="flex flex-row items-end justify-between gap-2">
          <div className="flex min-w-0 flex-row items-baseline gap-1.5">
            {/* `shrink-0`: the STATE is the headline and must read in full — left
                shrinkable it lost to a long break name and became "On a…". */}
            <span className="line-clamp-1 shrink-0 text-xl font-semibold text-f1-foreground">
              {statusText}
            </span>
            {/* WHICH break, next to the fact that you're on one — it belongs to
                the status, not to the controls. Break names are consumer copy and
                can run long ("Lunch break — canteen, second shift"), so it
                truncates; `OneEllipsis` mounts a tooltip only when it actually
                clips, and the status keeps the room it needs first. */}
            {canShowBreakTypeName && breakTypeName && (
              <>
                <span
                  aria-hidden
                  className="shrink-0 text-f1-foreground-secondary"
                >
                  ·
                </span>
                <OneEllipsis
                  tag="span"
                  className="min-w-0 flex-1 text-f1-foreground-secondary"
                >
                  {breakTypeName}
                </OneEllipsis>
              </>
            )}
          </div>
          <span className="shrink-0 text-xl font-semibold tabular-nums text-f1-foreground">
            {time}
          </span>
        </div>
        {/* The same graph the default variant draws, in its rail geometry — so
            the day is normalized and coloured in exactly one place. */}
        {canSeeGraph && (
          <ClockInGraph
            variant="horizontal-bar"
            data={data}
            trackedMinutes={trackedMinutes}
            remainingMinutes={canSeeRemainingTime ? remainingMinutes : 0}
          />
        )}
        {/* The bar's two ends, labelled: when the day started, and what is left
            of it — the same remaining/overtime string the default variant puts
            under its status, so no new label is needed to translate. */}
        <div className="flex flex-row items-center justify-between gap-2 text-f1-foreground-secondary">
          <span className="tabular-nums">{primaryLabel}</span>
          {subtitle && (
            <span className="line-clamp-1 tabular-nums">{subtitle}</span>
          )}
        </div>
        {/* THE FOOTER SPENDS LINES ON WHAT IS THERE: a picker on the actions'
            line, and a second one — the project — on a line above it. Two pickers
            plus the day's buttons on ONE line either wrapped unevenly or squeezed
            a name down to an ellipsis in a 396px rail. */}
        <div className="flex flex-col gap-2 pt-1">
          {pickerAboveActions}
          <div className="flex w-full flex-row items-center gap-2">
            {/* No break tag down here: in this variant it reads beside the status
                line above, where "on a break" is stated. */}
            {pickerBesideActions}
            {/* `ml-auto`: with no picker on this line the buttons still sit at the
                far end, where the prototype has them. */}
            <div className="ml-auto flex shrink-0 flex-row items-center gap-2">
              {controls}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="@container">
      <div className="flex-grow flex-col">
        <div className="flex flex-col-reverse items-center gap-2 @xs:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-center space-y-0.5 @xs:items-start">
              <div className="flex items-center gap-2">
                <span className="line-clamp-1 text-2xl font-semibold text-f1-foreground">
                  {statusText}
                </span>
                <div className="relative aspect-square h-4">
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      backgroundColor: statusColor,
                    }}
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      backgroundColor: statusColor,
                    }}
                  />
                </div>
              </div>
              {subtitle && (
                <p className="line-clamp-1 text-f1-foreground-secondary">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-2 @xs:justify-start">
              {controls}
            </div>
          </div>
          {canSeeGraph && (
            <ClockInGraph
              data={data}
              trackedMinutes={trackedMinutes}
              remainingMinutes={canSeeRemainingTime ? remainingMinutes : 0}
            />
          )}
        </div>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start">
          {contextTags}
        </div>
      </div>
    </div>
  )
}
