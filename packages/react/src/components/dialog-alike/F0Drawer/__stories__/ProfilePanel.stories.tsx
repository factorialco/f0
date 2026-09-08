import type { Decorator, Meta, StoryObj } from "@storybook/react-vite"
import { AnimatePresence, motion } from "motion/react"
import {
  ComponentProps,
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react"
import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0AvatarAlert } from "@/components/avatars/F0AvatarAlert"
import { F0Accordion } from "@/components/F0Accordion"
import type { F0AccordionItem } from "@/components/F0Accordion"
import { F0Button } from "@/components/F0Button"
import { F0Card } from "@/components/F0Card"
import { F0Heading } from "@/components/F0Heading"
import { F0Icon } from "@/components/F0Icon"
import type { IconType } from "@/components/F0Icon"
import { DataList } from "@/experimental/Lists/DataList"
import type { DetailsItemType } from "@/experimental/Lists/DetailsItem"
import { DetailsItemsList } from "@/experimental/Lists/DetailsItemsList"
import type { RecordType } from "@/hooks/datasource"
import {
  AlertCircle,
  ArrowUp,
  CheckCircleLine,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  Clock,
  Handshake,
  Messages,
  Money,
  Person,
  Plane,
} from "@/icons/app"
import { useReducedMotion } from "@/lib/a11y"
import { cn, focusRing } from "@/lib/utils"
import { F0ResourceHeader } from "@/patterns/F0ResourceHeader"
import { OneDataCollection } from "@/patterns/OneDataCollection"
import { useDataCollectionSource } from "@/patterns/OneDataCollection/hooks/useDataCollectionSource"
import type { PropertyDefinition } from "@/patterns/OneDataCollection/property-render"
import type { ItemDefinition } from "@/patterns/OneDataCollection/visualizations/collection/List/types"
import { F0Drawer } from ".."

/**
 * Working copy of the employee profile drawer prototype for the AI Insight
 * "Employee summary" redesign. The `Drawer` stories keep a frozen snapshot of
 * an earlier state, next to an accordion treatment, for comparison.
 */
const meta: Meta<typeof F0Drawer> = {
  title: "Drawer/Profile panel",
  component: F0Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: { inline: false, height: "720px" },
    },
  },
  tags: ["experimental"],
}

export default meta
type Story = StoryObj<typeof F0Drawer>

/** A canvas with one button that opens the story's drawer. */
const withOpenButton: Decorator = (Story, { args: { isOpen, ...rest } }) => {
  const [open, setOpen] = useState(isOpen)

  return (
    <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
      <F0Button label="Open drawer" onClick={() => setOpen(true)} />
      <Story args={{ ...rest, isOpen: open, onClose: () => setOpen(false) }} />
    </div>
  )
}

/**
 * How to reach the person: emails and phone copyable, plus pronouns.
 */
const CONTACTS: DetailsItemType[] = [
  {
    title: "Phone",
    content: {
      type: "item",
      text: "+34 612 345 678",
      action: { type: "copy" },
    },
  },
  {
    title: "Work email",
    content: {
      type: "item",
      text: "ana.ruiz@factorial.co",
      action: { type: "copy" },
    },
  },
  {
    title: "Personal email",
    content: {
      type: "item",
      text: "ana.ruiz.design@gmail.com",
      action: { type: "copy" },
    },
  },
  {
    title: "Pronouns",
    content: { type: "item", text: "she/her" },
  },
]

/**
 * Where the person works: the office and the legal entity.
 */
const WORKPLACE: DetailsItemType[] = [
  {
    title: "Office",
    content: { type: "item", text: "Barcelona office" },
  },
  {
    title: "Legal entity",
    content: {
      type: "company",
      name: "Factorial HR S.L.",
      action: { type: "navigate", href: "#legal-entities/factorial-es" },
    },
  },
]

/**
 * Identity block shared by both profile drawers, so the comparison below is
 * about the body treatment only.
 */
const EMPLOYEE = {
  firstName: "Ana",
  lastName: "Ruiz",
  name: "Ana Ruiz",
  role: "Senior Product Designer",
  avatar: "https://randomuser.me/api/portraits/women/44.jpg",
}

/**
 * Lets the header tell the drawer whether the employee's name is on screen.
 * A context rather than a prop because the panels live in story args, so the
 * drawer wrapper never renders the header directly.
 */
const NameInViewContext = createContext<(inView: boolean) => void>(() => {})

const ProfileHeader = () => {
  const onNameInViewChange = useContext(NameInViewContext)
  const nameRef = useRef<HTMLDivElement>(null)

  // Ancestors' overflow clips the intersection, so a `null` root still
  // reports when the drawer body scrolls the name away.
  useEffect(() => {
    const element = nameRef.current
    if (!element) {
      return
    }
    const observer = new IntersectionObserver(([entry]) =>
      onNameInViewChange(entry.isIntersecting)
    )
    observer.observe(element)
    return () => {
      observer.disconnect()
      onNameInViewChange(true)
    }
  }, [onNameInViewChange])

  return (
    <>
      <div ref={nameRef}>
        <F0ResourceHeader
          avatar={{
            type: "person",
            firstName: EMPLOYEE.firstName,
            lastName: EMPLOYEE.lastName,
            src: EMPLOYEE.avatar,
          }}
          title={EMPLOYEE.name}
          description={EMPLOYEE.role}
        />
      </div>
      <div className="flex gap-2">
        <div className="flex flex-1 flex-col">
          <F0Button variant="outline" label="Message" onClick={() => {}} />
        </div>
        <div className="flex flex-1 flex-col">
          <F0Button
            variant="outline"
            label="View profile"
            href="#employees/ana-ruiz"
          />
        </div>
      </div>
    </>
  )
}

/**
 * The drawer's title reads "Profile" while the employee's name is on screen
 * and becomes "Name · Position" once the body scrolls it away, so the header
 * keeps saying whose profile this is.
 */
const ProfileDrawer = ({ title, ...args }: ComponentProps<typeof F0Drawer>) => {
  const [nameInView, setNameInView] = useState(true)

  return (
    <NameInViewContext.Provider value={setNameInView}>
      <F0Drawer
        {...args}
        title={nameInView ? title : `${EMPLOYEE.name} · ${EMPLOYEE.role}`}
      />
    </NameInViewContext.Provider>
  )
}

const PROMOTION_POLICY = "Promotions and salary increase"

/** One line of a verdict: what was checked, what was found, and whether it passed. */
type Check = { label: string; actual: string; met: boolean }

const PROMOTION_CONDITIONS: Check[] = [
  {
    label: "Avg. review score exceeds 4",
    actual: "Avg. score: 4.1",
    met: true,
  },
  { label: "No recent review below 3", actual: "None", met: true },
  { label: "Time in position exceeds 1 year", actual: "1.6 years", met: true },
  { label: "Goal attainment more than 80%", actual: "87%", met: true },
]

/**
 * A verdict in a box that borrows the collection rows' border and padding so
 * it lines up with the lists below. The row is a disclosure: a large alert
 * avatar carries the verdict, and the chevron unfolds the checks behind it
 * with the same reveal the other drawers use. Positive when every check is
 * met, a warning otherwise.
 */
const VerdictDisclosure = ({
  title,
  description,
  checks,
}: {
  title: string
  description: string
  checks: Check[]
}) => {
  const [open, setOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const listId = useId()
  const allMet = checks.every((c) => c.met)
  // The verdict tints the whole box, the same green or amber the alert
  // avatar and status tags use.
  const verdict = allMet ? "positive" : "warning"
  const tintBorder = allMet
    ? "border-f1-border-positive"
    : "border-f1-border-warning"
  const tintBackground = allMet
    ? "bg-f1-background-positive"
    : "bg-f1-background-warning"

  return (
    <div
      className={cn(
        "flex flex-col rounded-md border border-solid",
        tintBorder,
        tintBackground
      )}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={open ? listId : undefined}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "flex min-h-16 items-center gap-3 rounded-md py-2 pl-3 pr-4 text-left",
          focusRing()
        )}
      >
        <F0AvatarAlert
          type={verdict}
          size="lg"
          aria-label={allMet ? "All checks met" : "Some checks not met"}
        />
        <div className="flex min-w-0 flex-1 flex-col gap-0.5">
          <span className="text-base font-medium text-f1-foreground">
            {title}
          </span>
          <span className="text-base text-f1-foreground-secondary">
            {description}
          </span>
        </div>
        <F0Icon
          icon={open ? ChevronUp : ChevronDown}
          size="md"
          color={verdict}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={listId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
            className="overflow-hidden"
          >
            <ul
              className={cn(
                // White body under the tinted header; the radius keeps the
                // white inside the box's rounded corners.
                "m-0 flex list-none flex-col gap-1 rounded-b-md border-0 border-t border-solid bg-f1-background py-3 pl-3 pr-4",
                tintBorder
              )}
            >
              {checks.map((condition) => (
                <li
                  key={condition.label}
                  className="flex items-center gap-2 py-1 text-base"
                >
                  <F0Icon
                    icon={condition.met ? CheckCircleLine : AlertCircle}
                    size="md"
                    color={condition.met ? "positive" : "warning"}
                    aria-label={condition.met ? "Met" : "Not met"}
                  />
                  <span className="flex-1 text-f1-foreground">
                    {condition.label}
                  </span>
                  <span className="text-f1-foreground-secondary">
                    {condition.actual}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}

/** The promotion check: the policy's conditions, all met. */
const PromotionEligibility = () => (
  <VerdictDisclosure
    title="Eligible for promotion"
    description={`Based on ${PROMOTION_POLICY} policy`}
    checks={PROMOTION_CONDITIONS}
  />
)

const MANAGER = {
  firstName: "Saul",
  lastName: "Dominguez",
  name: "Saul Dominguez",
  role: "Head of Design",
  avatar: "https://randomuser.me/api/portraits/men/32.jpg",
}

/**
 * The manager in the same box as the promotion check: the rows' border and
 * insets (12px left, 16px right, 64px tall), a large avatar, name and role,
 * and the Message action at the trailing edge.
 */
const ManagedBy = () => (
  <div className="flex flex-col gap-2">
    <F0Heading as="h3" content="Reports to" markdown={false} />
    <div className="flex min-h-16 items-center gap-3 rounded-md border border-solid border-f1-border-secondary py-2 pl-3 pr-4">
      <F0Avatar
        avatar={{
          type: "person",
          firstName: MANAGER.firstName,
          lastName: MANAGER.lastName,
          src: MANAGER.avatar,
        }}
        size="lg"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <span className="text-base font-medium text-f1-foreground">
          {MANAGER.name}
        </span>
        <span className="text-base text-f1-foreground-secondary">
          {MANAGER.role}
        </span>
      </div>
      <F0Button
        variant="outline"
        label="Message"
        icon={Messages}
        onClick={() => {}}
      />
    </div>
  </div>
)

const TEAMS = [
  { id: "design", name: "Design", href: "#teams/design" },
  { id: "product", name: "Product", href: "#teams/product" },
  { id: "barcelona", name: "Barcelona", href: "#teams/barcelona" },
]

/**
 * The org chart side panel's Teams section: each team a row with its avatar,
 * linking to the team, through the same collection as the other lists.
 */
const Teams = () => (
  <div className="flex flex-col gap-2">
    <F0Heading as="h3" content="Teams" markdown={false} />
    <RecordCollection
      records={TEAMS}
      itemDefinition={(team) => ({
        title: team.name,
        avatar: { type: "team", name: team.name },
      })}
      itemUrl={(team) => team.href}
    />
  </div>
)

/**
 * Each figure names the Details section it comes from, so a click on its card
 * can open that section. The same keys are the accordion item ids.
 */
type SummaryStatus = "positive" | "warning" | "critical" | "neutral"

type SummaryFigure = {
  label: string
  value: string
  /**
   * A reference the value is read against, set after it — "12h / 14h", where
   * the 14h is what the 12h came out of. Same size as the value, secondary
   * colour, so the figure that matters is the one that carries the status.
   */
  of?: string
  section?: string
  status?: SummaryStatus
}

/**
 * A figure gets a `status` only when it is a verdict (on track, needs a look);
 * facts like tenure or salary stay neutral so the colored ones stand out. The
 * performance figure is the last-four average, the same number the reviews
 * block shows, so it is computed rather than typed in.
 */
const getSummary = (): SummaryFigure[] => {
  const lastFour = average(CAREER_REVIEWS.slice(-4).map((r) => r.score))
  const lastFourStatus = scoreStatus(lastFour)
  const goalsOnTime = GOALS.filter((g) => g.status !== "Overdue").length
  const recentAbsenceDays = sumDays(RECENT_ABSENCES)

  return [
    { label: "Tenure", value: "5.5 years", section: "tenure" },
    { label: "In role", value: "1.6 years", section: "tenure" },
    { label: "Base salary", value: "€68,000", section: "tenure" },
    {
      label: "Avg. performance",
      value: formatScore(lastFour),
      section: "performance",
      status: lastFourStatus,
    },
    {
      label: "Goals on time",
      value: `${goalsOnTime}/${GOALS.length}`,
      section: "goals",
      status: goalsOnTime < GOALS.length ? "warning" : "positive",
    },
    {
      label: "1:1 progress",
      value: ONE_ON_ONES.progress,
      section: "one-on-ones",
      status: "positive",
    },
    {
      label: "Absences last 3 mo.",
      value: `${recentAbsenceDays} days`,
      section: "absences",
    },
    {
      label: "Punctuality last 3 mo.",
      value: `${PUNCTUALITY.onTime}%`,
      section: "punctuality",
      status: "positive",
    },
  ]
}

// The same dot and text colors the status tag uses, so both read as one system.
const STATUS_DOT: Record<SummaryStatus, string> = {
  positive: "bg-f1-icon-positive",
  warning: "bg-f1-icon-warning",
  critical: "bg-f1-icon-critical",
  neutral: "bg-f1-icon",
}
// Only the negative verdicts color their value; good ones keep the dot alone.
const STATUS_TEXT: Record<SummaryStatus, string> = {
  positive: "text-f1-foreground",
  neutral: "text-f1-foreground",
  warning: "text-f1-foreground-warning",
  critical: "text-f1-foreground-critical",
}

/**
 * The verdict box, then the headline figures as a two-column grid of compact
 * F0Cards, one figure each: the label in secondary text, the value large
 * underneath. A card tied to a section is clickable, shows a chevron, and
 * hands the section to the panel, which scrolls there and opens it.
 */
const Summary = ({
  title,
  meta,
  verdict,
  figures,
  onSelect,
}: {
  title: string
  /** The period the cards are for; a subheader under the heading, in BASE secondary. */
  meta?: string
  verdict: ReactNode
  figures: SummaryFigure[]
  onSelect: (section: string) => void
}) => (
  <div className="flex flex-col gap-2">
    <div className="flex flex-col gap-0.5">
      <F0Heading as="h3" content={title} markdown={false} />
      {meta ? (
        <span className="text-base text-f1-foreground-secondary">{meta}</span>
      ) : null}
    </div>
    {verdict}
    <div className="grid grid-cols-2 gap-2">
      {figures.map(({ label, value, of, section, status }) => (
        <F0Card
          key={label}
          compact
          subtleBorder
          onClick={section ? () => onSelect(section) : undefined}
        >
          {/* The card renders an empty title row above its children; pull
              the content up over that row's gap so the padding stays even. */}
          <div className="-mt-2 flex flex-col gap-1">
            <div className="flex items-center justify-between gap-1 text-base font-medium text-f1-foreground-secondary">
              <span>{label}</span>
              {section ? (
                <F0Icon
                  icon={ChevronRight}
                  size="sm"
                  className="text-f1-icon-bold"
                />
              ) : null}
            </div>
            <span
              className={`flex items-center gap-2 text-xl font-semibold ${status ? STATUS_TEXT[status] : "text-f1-foreground"}`}
            >
              {status ? (
                <span
                  aria-hidden="true"
                  className={`aspect-square w-2 rounded-full ${STATUS_DOT[status]}`}
                />
              ) : null}
              {value}
              {of ? (
                <span className="text-f1-foreground-secondary">/ {of}</span>
              ) : null}
            </span>
          </div>
        </F0Card>
      ))}
    </div>
  </div>
)

const detailsRowId = (section: string) => `details-${section}`

/**
 * A static list of records through the Data Collection's List visualization:
 * the records are the whole data source, each item is a title with secondary
 * lines and an optional avatar, and `fields` render on the right. Full width,
 * so it lines up with the table-view blocks.
 */
const RecordCollection = <R extends RecordType>({
  records,
  itemDefinition,
  fields = [],
  itemUrl,
}: {
  records: R[]
  itemDefinition: (record: R) => ItemDefinition
  fields?: PropertyDefinition<R>[]
  itemUrl?: (record: R) => string
}) => {
  const source = useDataCollectionSource<R>({
    dataAdapter: { fetchData: () => ({ records }) },
    itemUrl,
  })

  // The list pads itself 8px above and 20px below; pull that back so the
  // block sits on the same rhythm as the table-view blocks.
  return (
    <div className="-mb-5 -mt-2">
      <OneDataCollection
        source={source}
        tmpFullWidth
        visualizations={[{ type: "list", options: { itemDefinition, fields } }]}
      />
    </div>
  )
}

const REVIEWS = [
  {
    id: "q4-2025",
    title: "Q4 2025 review",
    date: "Feb 28, 2026",
    score: 4.2,
    href: "#reviews/q4-2025",
  },
  {
    id: "mid-2025",
    title: "Mid-year 2025",
    date: "Aug 14, 2025",
    score: 3.8,
    href: "#reviews/mid-year-2025",
  },
  {
    id: "q4-2024",
    title: "Q4 2024 review",
    date: "Feb 20, 2025",
    score: 4.0,
    href: "#reviews/q4-2024",
  },
  {
    id: "mid-2024",
    title: "Mid-year 2024",
    date: "Aug 9, 2024",
    score: 2.6,
    href: "#reviews/mid-year-2024",
  },
]

const ReviewsCollection = () => (
  <RecordCollection
    records={REVIEWS}
    itemDefinition={(review) => ({
      title: review.title,
      description: [review.date],
    })}
    fields={[
      {
        label: "Score",
        render: (review) => ({
          type: "status",
          value: {
            status: scoreStatus(review.score),
            label: formatScore(review.score),
          },
        }),
      },
    ]}
    itemUrl={(review) => review.href}
  />
)

/** Every review since joining, oldest first; the last four are the list. */
const CAREER_REVIEWS = [
  { period: "H2 2021", score: 3.1 },
  { period: "H1 2022", score: 3.3 },
  { period: "H2 2022", score: 3.4 },
  { period: "H1 2023", score: 3.6 },
  { period: "H2 2023", score: 3.7 },
  { period: "H1 2024", score: 2.6 },
  { period: "H2 2024", score: 4.0 },
  { period: "H1 2025", score: 3.8 },
  { period: "H2 2025", score: 4.2 },
]

const average = (values: number[]) =>
  values.reduce((sum, value) => sum + value, 0) / values.length
const formatScore = (score: number) => `${score.toFixed(1)} / 5`

/** How a review score reads: below 3 red, exactly 3 neutral, above 3 green. */
const scoreStatus = (score: number): "critical" | "neutral" | "positive" =>
  score < 3 ? "critical" : score > 3 ? "positive" : "neutral"

type Figure = { label: string; value: string; status?: SummaryStatus }

const FigureView = ({ label, value, status }: Figure) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-base font-medium text-f1-foreground-secondary">
      {label}
    </span>
    <span
      className={cn(
        "flex items-center gap-2 text-xl font-semibold",
        status ? STATUS_TEXT[status] : "text-f1-foreground"
      )}
    >
      {status ? (
        <span
          aria-hidden="true"
          className={cn("aspect-square w-2 rounded-full", STATUS_DOT[status])}
        />
      ) : null}
      {value}
    </span>
  </div>
)

/**
 * A list with its headline figures on top, in one box: the figures in the
 * summary cards' style, a hairline, then the rows. The collection draws its
 * own rounded border around the rows; the descendant selectors strip it so
 * the outer box is the only frame.
 */
const FiguresBlock = ({
  figures,
  children,
}: {
  figures: Figure[]
  children?: ReactNode
}) => (
  <div className="flex flex-col overflow-hidden rounded-md border border-solid border-f1-border-secondary [&_.rounded-xl]:rounded-none [&_.rounded-xl]:border-0">
    <div
      className={cn(
        "grid grid-cols-2 gap-2 py-3 pl-3 pr-4",
        children && "border-0 border-b border-solid border-f1-border-secondary"
      )}
    >
      {figures.map((figure) => (
        <FigureView key={figure.label} {...figure} />
      ))}
    </div>
    {children}
  </div>
)

/** The last-four and career averages, computed from every review since joining. */
const ReviewsBlock = () => {
  const lastFour = average(CAREER_REVIEWS.slice(-4).map((r) => r.score))
  const career = average(CAREER_REVIEWS.map((r) => r.score))
  const lastFourStatus = scoreStatus(lastFour)

  return (
    <FiguresBlock
      figures={[
        {
          label: "Last 4 average",
          value: formatScore(lastFour),
          status: lastFourStatus,
        },
        {
          label: "Career average",
          value: formatScore(career),
          status: scoreStatus(career),
        },
      ]}
    >
      <ReviewsCollection />
    </FiguresBlock>
  )
}

const GOALS = [
  {
    id: "pricing",
    title: "Ship pricing experiment",
    period: "Q4 2026",
    status: "On track",
    variant: "info" as const,
    progress: 90,
    href: "#goals/pricing-experiment",
  },
  {
    id: "onboarding",
    title: "Reduce onboarding time",
    period: "2026",
    status: "At risk",
    variant: "warning" as const,
    progress: 65,
    href: "#goals/onboarding-time",
  },
  {
    id: "hiring",
    title: "Hire two engineers",
    period: "Q3 2026",
    status: "Overdue",
    variant: "warning" as const,
    progress: 50,
    href: "#goals/hire-engineers",
  },
]

const GoalsCollection = () => (
  <RecordCollection
    records={GOALS}
    // Only an overdue goal says so, in its secondary line; the others just
    // show their period and progress.
    itemDefinition={(goal) => ({
      title: goal.title,
      description:
        goal.status === "Overdue" ? [goal.period, "Overdue"] : [goal.period],
    })}
    fields={[
      {
        label: "Progress",
        render: (goal) => ({
          type: "progressBar",
          value: {
            value: goal.progress,
            label: `${goal.progress}%`,
            // The chart palette has no warning token; categorical-5 is its orange.
            color: goal.status === "Overdue" ? "categorical-5" : undefined,
          },
        }),
      },
    ]}
    itemUrl={(goal) => goal.href}
  />
)

/** How many goals are active, and how many of them are overdue. */
const GoalsBlock = () => {
  const overdue = GOALS.filter((g) => g.status === "Overdue").length

  return (
    <FiguresBlock
      figures={[
        { label: "Total", value: String(GOALS.length) },
        {
          label: "Overdue",
          value: String(overdue),
          status: overdue > 0 ? "warning" : undefined,
        },
      ]}
    >
      <GoalsCollection />
    </FiguresBlock>
  )
}

/** Leave types as a company might name them; Factorial ships seven by default and companies add their own. */
type AbsenceType =
  | "Holidays"
  | "Sick leave"
  | "Personal day"
  | "Compassionate leave"
  | "Doctor's appointment"
  | "Training"
  | "Moving house"

type Absence = {
  id: string
  /** Same-month ranges drop the repeated month ("Aug 3 – 21, 2026") so titles stay short. */
  dates: string
  length: string
  days: number
  type: AbsenceType
  /**
   * The absence meets its documentation requirement: no attachment was needed
   * (holidays never need one), or one was needed and provided (a sick note).
   */
  justified: boolean
  /** Falls in the last three months, the people report's window. */
  recent: boolean
  href: string
}

/** Every absence in the last 12 months, newest first. Both profile panels read this list. */
const ABSENCE_HISTORY: Absence[] = [
  {
    id: "aug-2026",
    dates: "Aug 3 – 21, 2026",
    length: "15 days",
    days: 15,
    type: "Holidays",
    justified: true,
    recent: true,
    href: "#timeoff/absences/5",
  },
  {
    id: "jul-2026",
    dates: "Jul 20 – 21, 2026",
    length: "2 days",
    days: 2,
    type: "Sick leave",
    justified: false,
    recent: true,
    href: "#timeoff/absences/4",
  },
  {
    id: "jun-2026",
    dates: "Jun 12, 2026",
    length: "1 day",
    days: 1,
    type: "Personal day",
    justified: true,
    recent: true,
    href: "#timeoff/absences/3",
  },
  {
    id: "may-2026",
    dates: "Apr 28 – May 1, 2026",
    length: "4 days",
    days: 4,
    type: "Holidays",
    justified: true,
    recent: false,
    href: "#timeoff/absences/2",
  },
  {
    id: "mar-2026",
    dates: "Mar 9 – 18, 2026",
    length: "8 days",
    days: 8,
    type: "Sick leave",
    justified: true,
    recent: false,
    href: "#timeoff/absences/1",
  },
  {
    id: "feb-2026",
    dates: "Feb 17, 2026",
    length: "1 day",
    days: 1,
    type: "Doctor's appointment",
    justified: true,
    recent: false,
    href: "#timeoff/absences/0",
  },
  {
    id: "jan-2026",
    dates: "Jan 21, 2026",
    length: "1 day",
    days: 1,
    type: "Training",
    justified: true,
    recent: false,
    href: "#timeoff/absences/-1",
  },
  {
    id: "nov-2025",
    dates: "Nov 10 – 12, 2025",
    length: "3 days",
    days: 3,
    type: "Compassionate leave",
    justified: true,
    recent: false,
    href: "#timeoff/absences/-2",
  },
  {
    id: "oct-2025",
    dates: "Oct 6, 2025",
    length: "1 day",
    days: 1,
    type: "Moving house",
    justified: true,
    recent: false,
    href: "#timeoff/absences/-3",
  },
]

const sumDays = (absences: Absence[]) =>
  absences.reduce((sum, a) => sum + a.days, 0)
const formatDays = (days: number) => `${days} ${days === 1 ? "day" : "days"}`

const AbsencesCollection = () => (
  <RecordCollection
    records={RECENT_ABSENCES}
    itemDefinition={(absence) => ({
      title: absence.dates,
      description: [absence.length],
    })}
    fields={[
      {
        label: "Type",
        render: (absence) => ({
          type: "status",
          value: { status: "neutral", label: absence.type },
        }),
      },
    ]}
    itemUrl={(absence) => absence.href}
  />
)

/** The last three months of absences: how many, how many justified, the days they add up to, and how long they run. */
const RECENT_ABSENCES = ABSENCE_HISTORY.filter((a) => a.recent)

const AbsencesBlock = () => {
  const days = RECENT_ABSENCES.map((a) => a.days)
  const justified = RECENT_ABSENCES.filter((a) => a.justified).length

  return (
    <FiguresBlock
      figures={[
        { label: "Absences", value: String(RECENT_ABSENCES.length) },
        {
          label: "Justified",
          value: `${justified}/${RECENT_ABSENCES.length}`,
          status: justified < RECENT_ABSENCES.length ? "warning" : undefined,
        },
        {
          label: "Total",
          value: `${days.reduce((sum, d) => sum + d, 0)} days`,
        },
        {
          label: "Average duration",
          value: `${Math.round(average(days))} days`,
        },
      ]}
    >
      <AbsencesCollection />
    </FiguresBlock>
  )
}

type TenureEventKind = "promotion" | "increase" | "joined"

/** Every change to role or pay since joining, newest first. */
const TENURE_EVENTS: {
  id: string
  kind: TenureEventKind
  role: string
  date: string
  salary: string
}[] = [
  {
    id: "2025-01",
    kind: "promotion",
    role: "Senior Product Designer",
    date: "Jan 15, 2025",
    salary: "€68,000",
  },
  {
    id: "2024-01",
    kind: "increase",
    role: "Product Designer",
    date: "Jan 15, 2024",
    salary: "€58,000",
  },
  {
    id: "2022-06",
    kind: "promotion",
    role: "Product Designer",
    date: "Jun 1, 2022",
    salary: "€54,000",
  },
  {
    id: "2021-09",
    kind: "promotion",
    role: "Junior Product Designer",
    date: "Sep 1, 2021",
    salary: "€42,000",
  },
  {
    id: "2021-03",
    kind: "joined",
    role: "Design Intern",
    date: "Mar 4, 2021",
    salary: "€24,000",
  },
]

// The icon avatar tells promotions from raises at a glance.
const TENURE_EVENT_ICON: Record<TenureEventKind, IconType> = {
  promotion: ArrowUp,
  increase: Money,
  joined: Handshake,
}
const SALARY_INCREASE_LABEL = "Salary increase"

const RolesCollection = () => (
  <RecordCollection
    records={TENURE_EVENTS}
    itemDefinition={(event) => ({
      title: event.kind === "increase" ? SALARY_INCREASE_LABEL : event.role,
      // The icon says what kind of change it is; the line under is the date.
      description: [event.date],
      avatar: { type: "icon", icon: TENURE_EVENT_ICON[event.kind] },
    })}
    fields={[
      {
        label: "Salary",
        render: (event) => ({ type: "tag", value: { label: event.salary } }),
      },
    ]}
  />
)

/** 1:1s held and how the manager rates their progress. */
const ONE_ON_ONES = { meetings: 6, progress: "Good" }

const OneOnOnesBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Meetings", value: String(ONE_ON_ONES.meetings) },
      { label: "Progress", value: ONE_ON_ONES.progress, status: "positive" },
    ]}
  />
)

/** Last three months: the on-time rate and the days clocked in late. */
const PUNCTUALITY = { onTime: 96, lateDays: 3 }

const PunctualityBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Total", value: `${PUNCTUALITY.onTime}%`, status: "positive" },
      { label: "Late", value: `${PUNCTUALITY.lateDays} days` },
    ]}
  />
)

type Section = {
  id: string
  title: string
  /** The period the section's figures cover; a subheader under its heading. */
  meta?: string
  content: ReactNode
  /** Where the full list lives; rendered as a small button by the heading. */
  viewAllHref?: string
}

/**
 * The sections between the manager and the contact details. Lists of things
 * (reviews, goals, absences, roles) go through the Data Collection; single
 * values and key/value facts stay as table-view rows.
 */
const SECTIONS: Section[] = [
  {
    id: detailsRowId("performance"),
    title: "Performance reviews",
    content: <ReviewsBlock />,
    viewAllHref: "#reviews",
  },
  {
    id: detailsRowId("tenure"),
    title: "Role & salary history",
    content: <RolesCollection />,
    viewAllHref: "#employees/ana-ruiz/job-history",
  },
  {
    id: detailsRowId("goals"),
    title: "Active goals",
    content: <GoalsBlock />,
    viewAllHref: "#goals",
  },
  {
    id: detailsRowId("one-on-ones"),
    title: "1:1 meetings",
    content: <OneOnOnesBlock />,
  },
  {
    id: detailsRowId("absences"),
    title: "Absences last 3 mo.",
    content: <AbsencesBlock />,
    viewAllHref: "#timeoff/absences",
  },
  {
    id: detailsRowId("punctuality"),
    title: "Punctuality last 3 mo.",
    content: <PunctualityBlock />,
  },
]

/**
 * Scrolls the drawer body to an element on the next frame, once an opened
 * section has its height.
 */
const scrollToNextFrame = (find: () => Element | null) =>
  requestAnimationFrame(() =>
    find()?.scrollIntoView({ behavior: "smooth", block: "start" })
  )

/**
 * The employee profile as a stack of sections: header, summary, manager, one
 * section per former Details row with its content shown outright, contact and
 * teams. A summary card scrolls to its section. The skeleton is the same
 * whatever report the drawer opened from; the report decides the verdict, the
 * figures, the sections and the workplace facts.
 */
const ProfilePanel = ({
  summaryTitle = "Performance summary",
  summaryMeta,
  managerAfterSections = false,
  verdict,
  summary,
  sections,
  workplace,
}: {
  /** What the cards are about; the people report's default fits the other panels. */
  summaryTitle?: string
  /** The period the cards cover, as a subheader under the summary heading. */
  summaryMeta?: string
  /** Put the manager after the sections instead of right under the summary. */
  managerAfterSections?: boolean
  verdict: ReactNode
  summary: SummaryFigure[]
  sections: Section[]
  workplace: DetailsItemType[]
}) => {
  const reveal = (section: string) =>
    scrollToNextFrame(() => document.getElementById(detailsRowId(section)))

  // The drawer's own content padding is off (see the story args) so the
  // hairline under the header can run edge to edge; the panel pads itself.
  // Sections sit 32px apart, the line 24px from its neighbours.
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col px-4">
        <ProfileHeader />
      </div>
      <div className="h-px bg-f1-border-secondary" />
      <div className="flex flex-col gap-8 px-4">
        <Summary
          title={summaryTitle}
          meta={summaryMeta}
          verdict={verdict}
          figures={summary}
          onSelect={reveal}
        />
        {!managerAfterSections ? <ManagedBy /> : null}
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="flex flex-col gap-2">
            <div className="flex items-start justify-between gap-2">
              <div className="flex flex-col gap-0.5">
                <F0Heading as="h3" content={section.title} markdown={false} />
                {section.meta ? (
                  <span className="text-base text-f1-foreground-secondary">
                    {section.meta}
                  </span>
                ) : null}
              </div>
              {section.viewAllHref ? (
                <F0Button
                  variant="ghost"
                  size="sm"
                  label="View all"
                  href={section.viewAllHref}
                />
              ) : null}
            </div>
            {section.content}
          </div>
        ))}
        {managerAfterSections ? <ManagedBy /> : null}
        <div className="flex flex-col gap-2">
          <F0Heading as="h3" content="Contacts" markdown={false} />
          <DetailsItemsList tableView details={CONTACTS} />
        </div>
        <div className="flex flex-col gap-2">
          <F0Heading as="h3" content="Workplace" markdown={false} />
          <DetailsItemsList tableView details={workplace} />
        </div>
        <Teams />
      </div>
    </div>
  )
}

/** The drawer as opened from a people report: promotion, performance, goals, tenure. */
const ProfileDetailsPanel = () => (
  <ProfilePanel
    verdict={<PromotionEligibility />}
    summary={getSummary()}
    sections={SECTIONS}
    workplace={WORKPLACE}
  />
)

export const Details: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Profile",
    disableContentPadding: true,
    children: <ProfileDetailsPanel />,
  },
  render: (args) => <ProfileDrawer {...args} />,
  decorators: [withOpenButton],
  parameters: {
    docs: {
      description: {
        story:
          "An employee profile: header, summary cards, manager, `DetailsItemsList`s in table view and teams. Rows with a chevron reveal nested rows in place; a Summary card scrolls to its row and opens it; once the name scrolls out of view the drawer title becomes the employee's name.",
      },
    },
  },
}

/*
 * ───────────────────────────────────────────────────────────────────────────
 * The same drawer, opened from an absences report
 * ───────────────────────────────────────────────────────────────────────────
 * The skeleton holds (header, verdict, summary cards, manager, sections,
 * contacts, teams), but everything the report is about comes first, and all
 * of it is for the report's period: the last 12 months. There is no policy
 * verdict for now; the cards carry the Time and Attendance cube's
 * absenteeism rate (planned hours lost to approved time off, holidays
 * included — Factorial has no planned/unplanned split) judged against the
 * team; the sections are the four figures against the team
 * average, the period's days by leave type as an accordion (a company's types are its own, so the list grows with
 * them) that opens to each type's records and their facts, upcoming time off
 * and balances. The vocabulary
 * follows the Absences overview report and the Time off cube: absences,
 * absence days, average duration, justified, days by type. Balances speak the
 * time off page's accrued, available and taken.
 */

/**
 * The report's period, the same window as the shipped summary; every figure
 * in the panel is for it unless it says otherwise.
 */
const REPORT_PERIOD = "last 12 mo."

/**
 * Absenteeism the way the Time and Attendance cube computes it
 * (`absenteeism_rate`): planned working time lost to approved time off —
 * total absence hours over total planned hours, in percent. Every approved
 * leave counts, holidays included; Factorial has no planned/unplanned split.
 * The mock schedule is Mon – Fri, 8h, so days and hours convert cleanly.
 */
const HOURS_PER_DAY = 8
/** Planned working days in the last 12 months on a Mon – Fri schedule. */
const PLANNED_WORKING_DAYS = 249
const absenteeismRate = (absences: Absence[]) =>
  Math.round(
    (1000 * sumDays(absences) * HOURS_PER_DAY) /
      (PLANNED_WORKING_DAYS * HOURS_PER_DAY)
  ) / 10
const formatRate = (rate: number) => `${rate}%`

const EMPLOYEE_TIME_OFF_HREF = "#employees/ana-ruiz/time-off"

/**
 * Each allowance as the time off page counts it for this year's cycle:
 * accrued, carried over from the last cycle, taken so far; what is left is
 * available. Sick leave has no allowance, so it only appears among the
 * absences.
 */
const BALANCES = [
  {
    id: "holidays",
    name: "Holidays",
    accrued: 23,
    carryOver: 2,
    taken: 19,
    href: EMPLOYEE_TIME_OFF_HREF,
  },
  {
    id: "personal",
    name: "Personal days",
    accrued: 3,
    carryOver: 0,
    taken: 1,
    href: EMPLOYEE_TIME_OFF_HREF,
  },
]

type Balance = (typeof BALANCES)[number]

const entitled = (balance: Balance) => balance.accrued + balance.carryOver
const available = (balance: Balance) => entitled(balance) - balance.taken

/** Approved and requested time off ahead, soonest first. */
const UPCOMING_ABSENCES = [
  {
    id: "sep-2026",
    dates: "Sep 25, 2026",
    length: "1 day",
    type: "Personal day",
    approved: true,
    href: "#timeoff/absences/6",
  },
  {
    id: "dec-2026",
    dates: "Dec 22, 2026 – Jan 2, 2027",
    length: "8 days",
    type: "Holidays",
    approved: false,
    href: "#timeoff/absences/7",
  },
]

/**
 * The cards answer the report's questions for the report's period, in the
 * report's order: how many absences, the days they add up to and how long
 * each runs, then the absenteeism rate and what lacks paperwork, then what
 * is left of the main allowance. Average duration, absenteeism and paperwork
 * are judged and get a status; the counts, total duration and balance are
 * facts and stay neutral.
 */
const getAbsenceSummary = (): SummaryFigure[] => {
  const unjustified = ABSENCE_HISTORY.filter((a) => !a.justified).length
  const rate = absenteeismRate(ABSENCE_HISTORY)

  return [
    {
      label: "Absences",
      value: String(ABSENCE_HISTORY.length),
      section: "types",
    },
    {
      label: "Total duration",
      value: formatDays(sumDays(ABSENCE_HISTORY)),
      section: "types",
    },
    {
      label: "Avg. duration",
      value: formatDays(
        Math.round(average(ABSENCE_HISTORY.map((a) => a.days)))
      ),
      section: "types",
      status: "positive",
    },
    {
      label: "Absenteeism",
      // The cube's rate, judged against the team's: above it is worth a
      // look, below it is good news.
      value: formatRate(rate),
      section: "average",
      status: rate > TEAM_AVERAGE.absenteeismRate ? "warning" : "positive",
    },
    {
      // The count of what needs chasing; zero is the good news, in green.
      label: "Unjustified",
      value: String(unjustified),
      section: "types",
      status: unjustified > 0 ? "warning" : "positive",
    },
    {
      // The main allowance's days left; the Balances section has the rest.
      label: "Balance",
      value: formatDays(available(BALANCES[0])),
      section: "balances",
    },
  ]
}

/**
 * Days per leave type, most first. A company defines its own leave types
 * (seven by default, dozens possible, plus custom ones), so this is a list
 * with one row per type rather than a fixed grid of figures.
 */
type AbsenceTypeTotal = {
  id: string
  type: AbsenceType
  absences: number
  days: number
}

const ABSENCE_TYPES: AbsenceTypeTotal[] = [
  ...ABSENCE_HISTORY.reduce((totals, absence) => {
    const total = totals.get(absence.type) ?? {
      id: absence.type.toLowerCase().replace(/\s+/g, "-"),
      type: absence.type,
      absences: 0,
      days: 0,
    }
    totals.set(absence.type, {
      ...total,
      absences: total.absences + 1,
      days: total.days + absence.days,
    })
    return totals
  }, new Map<AbsenceType, AbsenceTypeTotal>()).values(),
].sort((a, b) => b.days - a.days)

/**
 * The Design team's averages per person over the same period, from the same
 * cube queries filtered to the manager's team.
 */
const TEAM_AVERAGE = {
  absences: 7,
  days: 30,
  avgDuration: 4.3,
  /** The cube's absenteeism rate for the team, in percent. */
  absenteeismRate: 9.6,
}

/** How far the person sits from the average, as a rounded percentage. */
const percentDelta = (value: number, averageValue: number) =>
  Math.round(((value - averageValue) / averageValue) * 100)
const formatPercentDelta = (delta: number) =>
  `${delta > 0 ? "+" : delta < 0 ? "−" : ""}${Math.abs(delta)}%`
/** Counts and days are facts: they carry no colour. */
const neutralDelta = (): SummaryStatus | undefined => undefined
/** More absenteeism than the team is worth a look, less is good news, the same is neither. */
const deltaStatus = (delta: number): SummaryStatus | undefined =>
  delta > 0 ? "warning" : delta < 0 ? "positive" : undefined
/**
 * Duration runs the other way: a shorter average means many short absences,
 * the pattern worth watching, so below the team is flagged. Longer is not
 * "good" either — one long sick leave says nothing about a habit — so it
 * stays neutral.
 */
const durationDeltaStatus = (delta: number): SummaryStatus | undefined =>
  delta < 0 ? "warning" : undefined

/**
 * The four headline figures against the team's average per person, as
 * percentages: how many absences, the days they add up to, how long each
 * runs, and the absenteeism rate. Only the last two are judged: the count
 * and the days stay neutral.
 */
const ComparedToAverageBlock = () => {
  const deltas = [
    {
      label: "Absences",
      delta: percentDelta(ABSENCE_HISTORY.length, TEAM_AVERAGE.absences),
      status: neutralDelta,
    },
    {
      label: "Total duration",
      delta: percentDelta(sumDays(ABSENCE_HISTORY), TEAM_AVERAGE.days),
      status: neutralDelta,
    },
    {
      label: "Avg. duration",
      delta: percentDelta(
        average(ABSENCE_HISTORY.map((a) => a.days)),
        TEAM_AVERAGE.avgDuration
      ),
      status: durationDeltaStatus,
    },
    {
      label: "Absenteeism",
      delta: percentDelta(
        absenteeismRate(ABSENCE_HISTORY),
        TEAM_AVERAGE.absenteeismRate
      ),
      status: deltaStatus,
    },
  ]

  return (
    <FiguresBlock
      figures={deltas.map(({ label, delta, status }) => ({
        label,
        value: formatPercentDelta(delta),
        status: status(delta),
      }))}
    />
  )
}

/** The leave types that need a document (a sick note, a certificate) to count as justified. */
const DOCUMENTED_TYPES: AbsenceType[] = [
  "Sick leave",
  "Doctor's appointment",
  "Compassionate leave",
]

/**
 * The types as an accordion: the type and its days in the header, and the
 * absences of that type inside, one row each with its dates and length, who
 * approved it, and — where a document is required — whether it is justified.
 * A row opens the record in Time off.
 */
const ABSENCE_TYPE_ITEMS: F0AccordionItem[] = ABSENCE_TYPES.map((entry) => ({
  id: entry.id,
  title: entry.type,
  summary: (
    <DataList>
      <DataList.RawTagItem text={formatDays(entry.days)} />
    </DataList>
  ),
  content: (
    <DataList>
      {ABSENCE_HISTORY.filter((absence) => absence.type === entry.type).map(
        (absence) => (
          <DataList.RecordItem
            key={absence.id}
            title={`${absence.dates} · ${absence.length}`}
            description={`Approved by ${MANAGER.name}`}
            detail={
              DOCUMENTED_TYPES.includes(absence.type)
                ? absence.justified
                  ? {
                      type: "status-tag",
                      text: "Justified",
                      variant: "positive",
                    }
                  : {
                      type: "status-tag",
                      text: "Unjustified",
                      variant: "warning",
                    }
                : undefined
            }
            action={{ type: "navigate", href: absence.href }}
          />
        )
      )}
    </DataList>
  ),
}))

const AbsencesByTypeAccordion = () => <F0Accordion items={ABSENCE_TYPE_ITEMS} />

/** Time off ahead: the approved one green, the request still waiting amber. */
const UpcomingAbsencesCollection = () => (
  <RecordCollection
    records={UPCOMING_ABSENCES}
    itemDefinition={(absence) => ({
      title: absence.dates,
      description: [`${absence.length} · ${absence.type}`],
    })}
    fields={[
      {
        label: "Status",
        render: (absence) => ({
          type: "status",
          value: absence.approved
            ? { status: "positive", label: "Approved" }
            : { status: "warning", label: "Pending approval" },
        }),
      },
    ]}
    itemUrl={(absence) => absence.href}
  />
)

/**
 * Each allowance as a row: what is left and where the entitlement came from
 * (accrued, plus any carry-over), the taken share of it as a bar. The line is
 * kept short so the bar stays on the row.
 */
const BalancesCollection = () => (
  <RecordCollection
    records={BALANCES}
    itemDefinition={(balance) => ({
      title: balance.name,
      description: [
        `${formatDays(available(balance))} left`,
        balance.carryOver > 0
          ? `${balance.accrued} accrued + ${balance.carryOver} carried over`
          : `${balance.accrued} accrued`,
      ],
    })}
    fields={[
      {
        label: "Taken",
        render: (balance) => ({
          type: "progressBar",
          value: {
            value: Math.round((balance.taken / entitled(balance)) * 100),
            label: `${balance.taken} of ${entitled(balance)}`,
          },
        }),
      },
    ]}
    itemUrl={(balance) => balance.href}
  />
)

/**
 * The person against the team first, then the split by type, each type
 * opening to its records, then what they draw on (upcoming, balances). Reviews,
 * goals, tenure and punctuality are not what an absences report is about, so
 * they go. Every "View all" opens the person's own time off page.
 */
const ABSENCE_SECTIONS: Section[] = [
  {
    id: detailsRowId("average"),
    title: "Compared to team average",
    content: <ComparedToAverageBlock />,
  },
  {
    id: detailsRowId("types"),
    title: "Absences by type",
    content: <AbsencesByTypeAccordion />,
    viewAllHref: EMPLOYEE_TIME_OFF_HREF,
  },
  {
    id: detailsRowId("upcoming"),
    title: "Upcoming time off",
    content: <UpcomingAbsencesCollection />,
    viewAllHref: EMPLOYEE_TIME_OFF_HREF,
  },
  {
    id: detailsRowId("balances"),
    title: "Balances",
    content: <BalancesCollection />,
    viewAllHref: EMPLOYEE_TIME_OFF_HREF,
  },
]

/** The workplace facts that set the absence rules: schedule, policy, calendar. */
const ABSENCE_WORKPLACE: DetailsItemType[] = [
  WORKPLACE[0],
  {
    title: "Work schedule",
    content: { type: "item", text: "Mon – Fri, 40h" },
  },
  {
    title: "Time off policy",
    content: {
      type: "item",
      text: "Spain · 23 days",
      action: { type: "navigate", href: "#timeoff/policies/spain" },
    },
  },
  {
    title: "Public holidays",
    content: { type: "item", text: "Barcelona" },
  },
  WORKPLACE[1],
]

/**
 * No policy verdict for now: the cards carry the judgement. The manager sits
 * after the absences, upcoming time off and balances, next to the contacts.
 */
const AbsencesPanel = () => (
  <ProfilePanel
    summaryTitle={`Absences ${REPORT_PERIOD}`}
    managerAfterSections
    verdict={null}
    summary={getAbsenceSummary()}
    sections={ABSENCE_SECTIONS}
    workplace={ABSENCE_WORKPLACE}
  />
)

export const AbsencesReport: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: "Profile",
    disableContentPadding: true,
    children: <AbsencesPanel />,
  },
  render: (args) => <ProfileDrawer {...args} />,
  decorators: [withOpenButton],
  parameters: {
    docs: {
      description: {
        story:
          "The same drawer opened from an absences report, everything for the report's period (the last 12 months). No policy verdict for now; the cards go count, total and average duration, then the absenteeism rate (the Time and Attendance cube's: absence hours over planned hours, all approved leave) and what lacks paperwork, then the main allowance's balance; they judge average duration, absenteeism and paperwork, and keep counts, total duration and balance neutral; the sections are the four figures against the team average as percentages, the period's days by leave type as an accordion that grows with the company's types and opens to each type's records (dates, length, approver, justified), upcoming time off, and balances in the time off page's accrued / available / taken terms. Reviews, goals, tenure and punctuality are gone.",
      },
    },
  },
}

/*
 * ───────────────────────────────────────────────────────────────────────────
 * The same drawer, opened from a worked hours report
 * ───────────────────────────────────────────────────────────────────────────
 * Attendance's own vocabulary, and only figures the product actually holds:
 * worked hours and the hours inside them, the period balance against planned
 * hours, the extra hours that went to the bank of hours, and the time alerts.
 * The panel is about one period — the one the report was looking at — and it
 * opens on the decision it exists for: can this timesheet be approved.
 */

const HOURS = 60

/** Minutes as "43h 30m"; whole hours drop the minutes. `signed` adds a plus. */
const formatMinutes = (minutes: number, signed = false) => {
  const sign = minutes < 0 ? "−" : signed && minutes > 0 ? "+" : ""
  const abs = Math.abs(minutes)
  const hours = Math.floor(abs / HOURS)
  const rest = abs % HOURS
  const minutePart = rest ? ` ${String(rest).padStart(2, "0")}m` : ""
  return `${sign}${hours}h${minutePart}`
}

/**
 * The period the report was looking at. A timesheet is always read one period
 * at a time — the date navigator's cycle — and a period that runs past today
 * is counted only up to today, so the panel names both.
 */
const PERIOD = {
  label: "August 2026",
  cycle: "Monthly",
  workingDays: 21,
  /**
   * Whether the period still runs past today. A period that does is counted
   * only up to today, and says so; a closed one like this needs no caveat.
   */
  includesToday: false,
}

/**
 * What the contract owes for the period, and how much of it actually reached
 * a shift. The gap is hours nobody scheduled — shift management's Hours to
 * plan, which for a period already closed is simply hours that never got
 * planned.
 */
const AGREEMENT = {
  hours: 168 * HOURS,
  planned: 160 * HOURS,
}

/** The agreement the rota never covered. */
const UNPLANNED = Math.max(0, AGREEMENT.hours - AGREEMENT.planned)

/**
 * The period's hours. Worked hours are what was clocked, so everything the
 * person did is in them, and they decompose into regular hours + paid breaks
 * + overtime — all of the overtime, not just the paid part.
 *
 * This is a deliberate divergence from production, which subtracts only the
 * *settled* extra hours: `balancedRegularMinutes` is
 * `worked − paidBreaks − extraHoursMinutesFromBalance`, so unauthorised
 * overtime ends up inside regular hours, in a bucket whose name denies it
 * exists. Taking all the overtime out keeps regular hours meaning what it
 * says, and leaves the paid/unpaid split to the section that is about it.
 *
 * Overtime and extra hours are not the same figure and the panel shows both.
 * Overtime is what was worked beyond plan, summed per day and never netted —
 * a short day does not cancel a long one. Extra hours are what the policy
 * then recognises out of it, after the baseline, the tranches and the
 * rounding; an overtime request is literally a request to have worked
 * overtime recognised. So overtime is earned, extra hours are granted, and
 * the gap is what is still unauthorised or rounded away.
 *
 * They are "paid" extra hours because this policy routes them to payroll
 * (`payroll_compensation`). The same recognised hours could instead go to
 * time off or to the bank of hours, in which case the label would be wrong —
 * the compensation route is a per-policy setting, not a property of the
 * figure.
 */
const WORKED_TIME = {
  worked: 172 * HOURS,
  planned: AGREEMENT.planned,
  regular: 151 * HOURS,
  paidBreaks: 7 * HOURS,
  overtime: 14 * HOURS,
  extra: 12 * HOURS,
}

/** The overtime the policy did not recognise: unauthorised or rounded away. */
const UNRECOGNISED = Math.max(0, WORKED_TIME.overtime - WORKED_TIME.extra)

/**
 * Where the recognised hours actually go. Recognising overtime is only half
 * the decision — the policy then routes it to payroll, to time off or to the
 * bank of hours, and the split can cut one block of overtime two ways. Until
 * that is settled the report payroll receives does not reflect the choice
 * already made, which is the complaint customers raise about this most.
 *
 * This policy pays rather than banks, so everything recognised is payroll
 * bound and the time-off column is empty.
 */
const DISPOSITION = {
  toTimeOff: 0,
  settles: "Monthly",
  nextPayroll: "Sep 30",
}

const TO_PAYROLL = WORKED_TIME.extra - DISPOSITION.toTimeOff

/**
 * The compensation this period produced, plus the request still waiting on a
 * manager — the overtime nobody has authorised yet, which is why it is not in
 * the paid figure.
 */
const COMPENSATION = [
  {
    id: "payroll-sep",
    title: "Paid with September payroll",
    hours: TO_PAYROLL,
    date: "Sep 30, 2026",
    settled: true,
    href: "#attendance/compensation/2026-09",
  },
  {
    id: "request-aug-26",
    title: "Overtime request",
    hours: UNRECOGNISED,
    date: "Aug 26, 2026",
    settled: false,
    href: "#attendance/overtime-requests/1",
  },
]

/** Worked − planned for the period. Short days offset long ones here. */
const BALANCE = WORKED_TIME.worked - WORKED_TIME.planned

/** The period's weeks, newest first. The last one is the 31st on its own. */
const WEEKS = [
  {
    id: "aug-31",
    label: "Aug 31",
    worked: 7 * HOURS,
    planned: 8 * HOURS,
    href: "#attendance/timesheet/2026-w36",
  },
  {
    id: "w35",
    label: "Aug 24 – 28",
    worked: 41 * HOURS,
    planned: 40 * HOURS,
    href: "#attendance/timesheet/2026-w35",
  },
  {
    id: "w34",
    label: "Aug 17 – 21",
    worked: 38 * HOURS,
    planned: 32 * HOURS,
    href: "#attendance/timesheet/2026-w34",
  },
  {
    id: "w33",
    label: "Aug 10 – 14",
    worked: 44 * HOURS,
    planned: 40 * HOURS,
    href: "#attendance/timesheet/2026-w33",
  },
  {
    id: "w32",
    label: "Aug 3 – 7",
    worked: 42 * HOURS,
    planned: 40 * HOURS,
    href: "#attendance/timesheet/2026-w32",
  },
]

/**
 * Overtime is counted per day against the baseline and never nets out — a
 * short day does not cancel a long one — so these are the days that generated
 * it, longest first. The four shown are the top of a longer list.
 */
const EXTRA_HOUR_DAYS = [
  {
    id: "aug-26",
    date: "Aug 26, 2026",
    worked: 11 * HOURS,
    planned: 8 * HOURS,
    href: "#attendance/timesheet/2026-08-26",
  },
  {
    id: "aug-12",
    date: "Aug 12, 2026",
    worked: 10 * HOURS,
    planned: 8 * HOURS,
    href: "#attendance/timesheet/2026-08-12",
  },
  {
    id: "aug-11",
    date: "Aug 11, 2026",
    worked: 10 * HOURS,
    planned: 8 * HOURS,
    href: "#attendance/timesheet/2026-08-11",
  },
  {
    id: "aug-5",
    date: "Aug 5, 2026",
    worked: 9 * HOURS,
    planned: 8 * HOURS,
    href: "#attendance/timesheet/2026-08-05",
  },
]

/**
 * The baseline extra hours are measured against, set by the attendance
 * policy. `planned_hours` compares the clocked time; `contract_hours` would
 * compare the effective time instead, so the compared figure is named after
 * whichever baseline is in force.
 */
const EXTRA_HOURS_BASELINE = "Planned hours"

/**
 * Alerts are the period's timesheet inconsistencies — the product calls them
 * Alerts in the table and the filter. There are four kinds: a missing
 * clock-in or clock-out, a break under the minimum, a break that was never
 * recorded. And three states, because an alert can also be ignored rather
 * than fixed. Only the open ones are counted, as in the table's column.
 */
type AlertState = "open" | "resolved" | "ignored"

const ALERTS: {
  id: string
  date: string
  kind: string
  shift: string
  state: AlertState
  href: string
}[] = [
  {
    id: "aug-27",
    date: "Aug 27, 2026",
    kind: "Missing clock-out",
    shift: "9:00 – 18:00",
    state: "open",
    href: "#attendance/timesheet/2026-08-27",
  },
  {
    id: "aug-20",
    date: "Aug 20, 2026",
    kind: "Break under the minimum",
    shift: "9:00 – 18:00",
    state: "resolved",
    href: "#attendance/timesheet/2026-08-20",
  },
  {
    id: "aug-13",
    date: "Aug 13, 2026",
    kind: "Missing clock-in",
    shift: "9:00 – 18:00",
    state: "resolved",
    href: "#attendance/timesheet/2026-08-13",
  },
  {
    id: "aug-6",
    date: "Aug 6, 2026",
    kind: "Break not recorded",
    shift: "9:00 – 18:00",
    state: "ignored",
    href: "#attendance/timesheet/2026-08-06",
  },
  {
    id: "aug-4",
    date: "Aug 4, 2026",
    kind: "Missing clock-out",
    shift: "9:00 – 18:00",
    state: "resolved",
    href: "#attendance/timesheet/2026-08-04",
  },
]

const alertsIn = (state: AlertState) =>
  ALERTS.filter((alert) => alert.state === state).length

/** The attendance policy this person is under — the one named in settings. */
const ATTENDANCE_POLICY = "Standard office hours"

/**
 * The cards in attendance's units, read as a ladder: what the contract owes,
 * how much of it was planned, what was worked, the overtime recognised out of
 * that, and the period's delta. The alerts sit at the foot as the caveat on
 * everything above them — a period with a broken day has wrong numbers
 * underneath it — and they carry the amber along with the unrecognised
 * overtime. The hours themselves are facts and stay neutral.
 */
const getWorkedHoursSummary = (): SummaryFigure[] => {
  const open = alertsIn("open")

  return [
    {
      label: "Contract hours",
      value: formatMinutes(AGREEMENT.hours),
      section: "planned",
    },
    {
      label: "Planned hours",
      value: formatMinutes(WORKED_TIME.planned),
      section: "planned",
    },
    {
      label: "Worked hours",
      value: formatMinutes(WORKED_TIME.worked),
      section: "hours",
    },
    {
      label: "Paid extra hours",
      value: formatMinutes(WORKED_TIME.extra),
      of: formatMinutes(WORKED_TIME.overtime),
      section: "extra-hours",
      status: UNRECOGNISED > 0 ? "warning" : "positive",
    },
    {
      label: "Balance",
      value: formatMinutes(BALANCE, true),
      section: "balance",
    },
    {
      label: "Alerts",
      value: open === 0 ? "–" : String(open),
      section: "alerts",
      status: open > 0 ? "warning" : "positive",
    },
  ]
}

/**
 * Worked hours are what was clocked, and they decompose exactly: regular
 * hours, the paid breaks inside them, and the overtime. It stops at the
 * overtime total on purpose — whether the policy paid for it is the next
 * section's subject, and repeating the split here made the two blocks say the
 * same thing twice. Overtime is the hinge: the last part of what was worked
 * and the first input to what gets recognised. Then the period's weeks, each
 * with its own delta.
 */
const WorkedTimeBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Worked hours", value: formatMinutes(WORKED_TIME.worked) },
      { label: "Regular hours", value: formatMinutes(WORKED_TIME.regular) },
      { label: "Paid breaks", value: formatMinutes(WORKED_TIME.paidBreaks) },
      { label: "Overtime", value: formatMinutes(WORKED_TIME.overtime) },
    ]}
  >
    <RecordCollection
      records={WEEKS}
      itemDefinition={(week) => ({
        title: week.label,
        description: [
          `${formatMinutes(week.planned)} planned`,
          `${formatMinutes(week.worked)} worked`,
        ],
      })}
      fields={[
        {
          label: "Balance",
          render: (week) => {
            const delta = week.worked - week.planned
            return {
              type: "status",
              value:
                delta === 0
                  ? { status: "neutral", label: "Level" }
                  : {
                      status: delta > 0 ? "positive" : "warning",
                      label: formatMinutes(delta, true),
                    },
            }
          },
        },
      ]}
      itemUrl={(week) => week.href}
    />
  </FiguresBlock>
)

/**
 * What reached a shift, the agreement it was measured against, and the hours
 * that never got scheduled.
 */
const PlannedBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Planned", value: formatMinutes(WORKED_TIME.planned) },
      { label: "Contract hours", value: formatMinutes(AGREEMENT.hours) },
      { label: "Unplanned", value: formatMinutes(UNPLANNED) },
    ]}
  />
)

/**
 * The period's delta against planned hours. Unlike extra hours, this nets:
 * a short day cancels a long one, which is why the two figures differ.
 */
const BalanceBlock = () => (
  <FiguresBlock
    figures={[
      {
        label: "Balance",
        value: formatMinutes(BALANCE, true),
        status: BALANCE < 0 ? "warning" : undefined,
      },
      { label: "Planned hours", value: formatMinutes(WORKED_TIME.planned) },
      { label: "Worked hours", value: formatMinutes(WORKED_TIME.worked) },
    ]}
  />
)

/**
 * What the policy recognised, the overtime it was recognised out of, and the
 * gap — unauthorised or rounded away — which is the only part of this worth
 * anyone's attention. Then the baseline it was measured against, named after
 * the one in force as the timesheet names it, and the days behind it.
 *
 * The same shape as the planned block one section up: what was achieved, what
 * it was measured against, and what fell short.
 */
const ExtraHoursBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Paid extra hours", value: formatMinutes(WORKED_TIME.extra) },
      { label: "Overtime", value: formatMinutes(WORKED_TIME.overtime) },
      {
        label: "Unrecognised",
        value: formatMinutes(UNRECOGNISED),
        status: UNRECOGNISED > 0 ? "warning" : undefined,
      },
      {
        label: `${EXTRA_HOURS_BASELINE} (baseline)`,
        value: formatMinutes(WORKED_TIME.planned),
      },
    ]}
  >
    <RecordCollection
      records={EXTRA_HOUR_DAYS}
      itemDefinition={(day) => ({
        title: day.date,
        description: [
          `${formatMinutes(day.planned)} planned`,
          `${formatMinutes(day.worked)} worked`,
        ],
      })}
      fields={[
        {
          label: "Overtime",
          render: (day) => ({
            type: "tag",
            value: { label: formatMinutes(day.worked - day.planned, true) },
          }),
        },
      ]}
      itemUrl={(day) => day.href}
    />
  </FiguresBlock>
)

/**
 * The split, what is still undecided, and when it lands — then the
 * compensation itself, with the pending request that is holding part of it
 * back.
 */
const DispositionBlock = () => (
  <FiguresBlock
    figures={[
      { label: "Paid with payroll", value: formatMinutes(TO_PAYROLL) },
      {
        label: "As time off",
        value:
          DISPOSITION.toTimeOff === 0
            ? "–"
            : formatMinutes(DISPOSITION.toTimeOff),
      },
      {
        label: "Awaiting authorisation",
        value: formatMinutes(UNRECOGNISED),
        status: UNRECOGNISED > 0 ? "warning" : undefined,
      },
      { label: "Next payroll", value: DISPOSITION.nextPayroll },
    ]}
  >
    <RecordCollection
      records={COMPENSATION}
      itemDefinition={(entry) => ({
        title: entry.title,
        description: [entry.date],
      })}
      fields={[
        {
          label: "Status",
          render: (entry) => ({
            type: "status",
            value: entry.settled
              ? { status: "positive", label: "Settled" }
              : { status: "warning", label: "Pending" },
          }),
        },
        {
          label: "Hours",
          render: (entry) => ({
            type: "tag",
            value: { label: formatMinutes(entry.hours) },
          }),
        },
      ]}
      itemUrl={(entry) => entry.href}
    />
  </FiguresBlock>
)

/**
 * The alerts by state, then every alert with its kind and the shift it
 * belongs to. Ignored is its own state, not a kind of resolved, and only the
 * open ones count against the period.
 */
const AlertsBlock = () => {
  const open = alertsIn("open")
  const kinds = ALERTS.map((alert) => alert.kind)
  const commonest = kinds
    .slice()
    .sort(
      (a, b) =>
        kinds.filter((k) => k === b).length -
        kinds.filter((k) => k === a).length
    )[0]

  return (
    <FiguresBlock
      figures={[
        {
          label: "Open",
          value: open === 0 ? "–" : String(open),
          status: open > 0 ? "warning" : "positive",
        },
        { label: "Resolved", value: String(alertsIn("resolved")) },
        { label: "Ignored", value: String(alertsIn("ignored")) },
        { label: "Most common", value: commonest },
      ]}
    >
      <RecordCollection
        records={ALERTS}
        itemDefinition={(alert) => ({
          title: alert.date,
          description: [alert.kind, `Shift ${alert.shift}`],
        })}
        fields={[
          {
            label: "Status",
            render: (alert) => ({
              type: "status",
              value:
                alert.state === "open"
                  ? { status: "warning", label: "Open" }
                  : alert.state === "resolved"
                    ? { status: "positive", label: "Resolved" }
                    : { status: "neutral", label: "Ignored" },
            }),
          },
        ]}
        itemUrl={(alert) => alert.href}
      />
    </FiguresBlock>
  )
}

/**
 * One section per total, in the order the timesheet reads them: what was
 * planned against the agreement, the hours worked, the period's delta, then the overtime and the
 * extra hours recognised out of it, and the alerts
 * holding the approval up. Each title carries the period, because every figure below it
 * is only about that period.
 */
const WORKED_HOURS_SECTIONS: Section[] = [
  {
    id: detailsRowId("planned"),
    title: "Planned",
    meta: PERIOD.label,
    content: <PlannedBlock />,
  },
  {
    id: detailsRowId("hours"),
    title: "Worked hours",
    meta: PERIOD.label,
    content: <WorkedTimeBlock />,
    viewAllHref: "#attendance/timesheet",
  },
  {
    id: detailsRowId("balance"),
    title: "Balance",
    meta: PERIOD.label,
    content: <BalanceBlock />,
  },
  {
    id: detailsRowId("extra-hours"),
    title: "Paid extra hours",
    meta: PERIOD.label,
    content: <ExtraHoursBlock />,
    viewAllHref: "#attendance/extra-hours",
  },
  {
    id: detailsRowId("disposition"),
    title: "Overtime disposition",
    meta: PERIOD.label,
    content: <DispositionBlock />,
    viewAllHref: "#attendance/compensation",
  },
  {
    id: detailsRowId("alerts"),
    title: "Alerts",
    meta: PERIOD.label,
    content: <AlertsBlock />,
    viewAllHref: "#attendance/alerts",
  },
]

/**
 * The settings that decide the hours: the period being read, how the person is
 * planned, the policy they are under and the baseline it measures against.
 */
const WORKED_HOURS_WORKPLACE: DetailsItemType[] = [
  {
    title: "Period",
    content: {
      type: "item",
      text: PERIOD.includesToday ? `${PERIOD.label} · to today` : PERIOD.label,
    },
  },
  {
    title: "Planning tool",
    content: { type: "item", text: "Work schedules" },
  },
  {
    title: "Work schedule",
    content: {
      type: "item",
      text: `Mon – Fri, 40h · ${PERIOD.workingDays} working days`,
    },
  },
  {
    title: "Attendance policy",
    content: {
      type: "item",
      text: ATTENDANCE_POLICY,
      action: {
        type: "navigate",
        href: "#attendance/policies/standard-office-hours",
      },
    },
  },
  {
    title: "Extra hours baseline",
    content: { type: "item", text: EXTRA_HOURS_BASELINE },
  },
  WORKPLACE[0],
  WORKPLACE[1],
]

/**
 * No policy verdict: the cards carry the judgement. Where the timesheet stands
 * and the alerts holding it up lead the grid, so the panel still opens on the
 * decision it exists for. The manager drops to the bottom with the other
 * reference rows — the hours are the reason the drawer opened, not who signs
 * them off.
 */
const WorkedHoursPanel = () => (
  <ProfilePanel
    summaryTitle="Timesheet summary"
    summaryMeta={PERIOD.label}
    managerAfterSections
    verdict={null}
    summary={getWorkedHoursSummary()}
    sections={WORKED_HOURS_SECTIONS}
    workplace={WORKED_HOURS_WORKPLACE}
  />
)

export const WorkedHoursReport: Story = {
  args: {
    isOpen: true,
    onClose: () => {},
    title: `Timesheet · ${PERIOD.label}`,
    disableContentPadding: true,
    children: <WorkedHoursPanel />,
  },
  render: (args) => <ProfileDrawer {...args} />,
  decorators: [withOpenButton],
  parameters: {
    docs: {
      description: {
        story:
          "The same drawer opened from a worked hours report, on the one period the report was looking at. No policy verdict; the cards carry the judgement, reading as a ladder — the contract's hours, the hours planned out of them, the hours worked, the paid extra hours recognised against the overtime they came out of, the balance, and the alerts as the caveat on all of it. The sections are the planned hours against the agreement and the gap nobody scheduled, worked hours with the hours inside it and the period's weeks, the balance against planned hours, the paid extra hours against the overtime they were recognised out of, the gap between them, and the days that generated them, where those hours are going and what is still waiting on a manager, and the alerts by state.",
      },
    },
  },
}

/*
 * ───────────────────────────────────────────────────────────────────────────
 * All three panels behind one menu
 * ───────────────────────────────────────────────────────────────────────────
 */

const PANELS: {
  id: string
  label: string
  icon: IconType
  content: ReactNode
}[] = [
  {
    id: "details",
    label: "Employee details",
    icon: Person,
    content: <ProfileDetailsPanel />,
  },
  {
    id: "absences",
    label: "Absences report",
    icon: Plane,
    content: <AbsencesPanel />,
  },
  {
    id: "hours",
    label: "Worked hours report",
    icon: Clock,
    content: <WorkedHoursPanel />,
  },
]

/**
 * A vertical menu of the three places the drawer can be opened from: ghost
 * buttons, the chosen one filled. Picking one opens the drawer with that
 * panel; picking another while it is open swaps the panel in place. One
 * drawer, so the title swap and scroll state carry over.
 */
const PanelMenu = (args: ComponentProps<typeof F0Drawer>) => {
  const [selected, setSelected] = useState<string | null>(null)
  const panel = PANELS.find((p) => p.id === selected)

  return (
    <div className="flex flex-1 items-center justify-center rounded-md border border-solid border-f1-border-secondary bg-f1-background">
      <nav
        aria-label="Open the profile from"
        className="flex w-64 flex-col gap-1"
      >
        {PANELS.map((p) => (
          <div key={p.id} className="flex flex-col">
            <F0Button
              label={p.label}
              icon={p.icon}
              variant={p.id === selected ? "neutral" : "ghost"}
              onClick={() => setSelected(p.id)}
            />
          </div>
        ))}
      </nav>
      <ProfileDrawer
        {...args}
        isOpen={panel !== undefined}
        onClose={() => setSelected(null)}
      >
        {panel?.content ?? null}
      </ProfileDrawer>
    </div>
  )
}

export const Menu: Story = {
  args: {
    isOpen: false,
    onClose: () => {},
    title: "Profile",
    disableContentPadding: true,
    children: null,
  },
  render: (args) => <PanelMenu {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          "The three panels behind one menu: employee details, the absences report and the worked hours report. Each button opens the drawer with its panel, and choosing another while the drawer is open swaps the panel in place.",
      },
    },
  },
}
