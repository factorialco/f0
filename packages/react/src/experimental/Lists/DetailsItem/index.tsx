import { AnimatePresence, motion } from "motion/react"
import {
  ComponentProps,
  FC,
  ForwardRefExoticComponent,
  forwardRef,
  Fragment,
  RefAttributes,
  useId,
  useState,
} from "react"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarListProps } from "@/components/avatars/F0AvatarList/types"
import { F0FileItem } from "@/components/F0FileItem"
import { TagBalanceProps } from "@/components/tags/F0TagBalance"
import { TagListProps, TagType } from "@/components/tags/F0TagList"
import { Weekdays } from "@/experimental/Widgets/Content/Weekdays"
import { useReducedMotion } from "@/lib/a11y"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"
import { cn } from "@/lib/utils"
import { DataList } from "../DataList"
import type { ActionType, DrawerActionType } from "../DataList"

/**
 * Reveals more rows under this one when the item is clicked. The nested rows
 * take the layout (table or stacked) of the row that owns them.
 */
export type DetailsItemDrawerAction = {
  type: "drawer"
  details: DetailsItemType[]
  /**
   * Open state, when something outside the row needs to drive it (a summary
   * card that opens the section, say). Leave it undefined and the row keeps
   * its own state.
   */
  expanded?: boolean
  /** Called when the row is clicked. Required to close a controlled row. */
  onToggle?: () => void
}

/**
 * DataList's drawer action is always controlled; here the row owns the open
 * state unless `expanded` is passed, so consumers usually only declare what a
 * row reveals.
 */
export type DetailsItemAction =
  | Exclude<ActionType, DrawerActionType>
  | DetailsItemDrawerAction

// Distributive, so union props (a dot tag's `color` | `customColor`) keep
// their variant-specific keys; a plain `Omit` over the union would drop them.
type WithDetailsItemAction<T> = T extends unknown
  ? Omit<T, "action"> & { action?: DetailsItemAction }
  : never

export type DetailsItemContent =
  | (WithDetailsItemAction<ComponentProps<typeof DataList.Item>> & {
      type: "item"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.PersonItem>> & {
      type: "person"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.CompanyItem>> & {
      type: "company"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.TeamItem>> & {
      type: "team"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.RecordItem>> & {
      type: "record"
    })
  | (ComponentProps<typeof Weekdays> & {
      type: "weekdays"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.DotTagItem>> & {
      type: "dot-tag"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.AlertTagItem>> & {
      type: "alert-tag"
    })
  | (TagBalanceProps & {
      type: "balance-tag"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.StatusTagItem>> & {
      type: "status-tag"
    })
  | (WithDetailsItemAction<ComponentProps<typeof DataList.RawTagItem>> & {
      type: "raw-tag"
    })
  | {
      [T in TagType]: {
        type: "tag-list"
        tagList: TagListProps<T>
      }
    }[TagType]
  | {
      type: "avatar-list"
      avatarList: F0AvatarListProps
    }
  | (ComponentProps<typeof F0FileItem> & {
      type: "file"
    })

export interface DetailsItemType {
  /** DOM id of the row, so it can be scrolled to or linked from elsewhere. */
  id?: string
  title: string
  content: DetailsItemContent | DetailsItemContent[]
  isHorizontal?: boolean
  /**
   * When true inside a tableView, keeps the table-row padding but stacks
   * the label above the content instead of side-by-side. Useful for
   * long-form text fields like rich-text or textarea.
   */
  verticalLayout?: boolean
  spacingAtTheBottom?: boolean
}

// Content types whose DataList item takes an `action`.
const actionContentTypes = [
  "item",
  "person",
  "company",
  "team",
  "record",
  "dot-tag",
  "alert-tag",
  "status-tag",
  "raw-tag",
] as const

type ActionContent = Extract<
  DetailsItemContent,
  { type: (typeof actionContentTypes)[number] }
>

const isActionContent = (
  content: DetailsItemContent
): content is ActionContent =>
  (actionContentTypes as readonly string[]).includes(content.type)

const drawerDetails = (
  content: DetailsItemContent
): DetailsItemType[] | undefined =>
  isActionContent(content) && content.action?.type === "drawer"
    ? content.action.details
    : undefined

// `action` is spread from the content and then overridden: the content carries
// the DetailsItem-level action, the DataList item needs the resolved one.
const ItemContent: FC<{ content: DetailsItemContent; action?: ActionType }> = ({
  content,
  action,
}) => (
  <>
    {content.type === "weekdays" ? (
      <li className="list-none px-1.5 py-1">
        <Weekdays {...content} />
      </li>
    ) : null}
    {content.type === "person" ? (
      <DataList.PersonItem {...content} action={action} />
    ) : null}
    {content.type === "item" ? (
      <DataList.Item {...content} action={action} />
    ) : null}
    {content.type === "team" ? (
      <DataList.TeamItem {...content} action={action} />
    ) : null}
    {content.type === "company" ? (
      <DataList.CompanyItem {...content} action={action} />
    ) : null}
    {content.type === "record" ? (
      <DataList.RecordItem {...content} action={action} />
    ) : null}
    {content.type === "dot-tag" ? (
      <DataList.DotTagItem {...content} action={action} />
    ) : null}
    {content.type === "alert-tag" ? (
      <DataList.AlertTagItem {...content} action={action} />
    ) : null}
    {content.type === "balance-tag" ? (
      <DataList.BalanceTagItem {...content} />
    ) : null}
    {content.type === "status-tag" ? (
      <DataList.StatusTagItem {...content} action={action} />
    ) : null}
    {content.type === "raw-tag" ? (
      <DataList.RawTagItem {...content} action={action} />
    ) : null}
    {content.type === "tag-list" ? (
      <DataList.TagListItem {...content.tagList} />
    ) : null}
    {content.type === "avatar-list" ? (
      <li className="list-none px-1.5 py-1">
        <F0AvatarList {...content.avatarList} />
      </li>
    ) : null}
    {content.type === "file"
      ? (() => {
          const { type: _type, ...fileProps } = content
          return (
            <li className="list-none px-1.5 py-1">
              <F0FileItem {...fileProps} />
            </li>
          )
        })()
      : null}
  </>
)

// Annotated so the nested-row recursion below doesn't make the type
// self-referential.
const _DetailsItem: ForwardRefExoticComponent<
  DetailsItemType & RefAttributes<HTMLDivElement>
> = forwardRef<HTMLDivElement, DetailsItemType>(function DetailsItem(
  {
    id,
    title,
    content,
    isHorizontal = false,
    verticalLayout = false,
    spacingAtTheBottom,
  },
  ref
) {
  const contentArray = Array.isArray(content) ? content : [content]
  const [expanded, setExpanded] = useState<ReadonlySet<number>>(() => new Set())
  const drawerId = useId()
  const shouldReduceMotion = useReducedMotion()

  const toggle = (index: number) =>
    setExpanded((current) => {
      const next = new Set(current)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })

  // A controlled drawer (`expanded` given) reports clicks and leaves the state
  // to its owner; otherwise the row keeps the state itself.
  const isOpen = (item: DetailsItemContent, index: number) =>
    isActionContent(item) && item.action?.type === "drawer"
      ? (item.action.expanded ?? expanded.has(index))
      : false

  const actionFor = (
    item: DetailsItemContent,
    index: number
  ): ActionType | undefined => {
    if (!isActionContent(item)) {
      return undefined
    }
    if (item.action?.type !== "drawer") {
      return item.action
    }
    const { expanded: controlled, onToggle } = item.action
    const isExpanded = isOpen(item, index)
    return {
      type: "drawer",
      expanded: isExpanded,
      onToggle: () => {
        onToggle?.()
        if (controlled === undefined) {
          toggle(index)
        }
      },
      // Only reference the revealed block while it is in the DOM.
      controls: isExpanded ? `${drawerId}-${index}` : undefined,
    }
  }

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        "flex flex-col",
        spacingAtTheBottom && !isHorizontal && "pb-3",
        isHorizontal && !verticalLayout && "xs:[&_ul>li]:p-0 [&_ul]:flex-1",
        isHorizontal &&
          verticalLayout &&
          "[&_ul>li>*]:px-0 [&_ul]:flex-1 xs:[&>div]:flex-col"
      )}
    >
      <DataList label={title} isHorizontal={isHorizontal}>
        {contentArray.map((c, i) => (
          <ItemContent key={i} content={c} action={actionFor(c, i)} />
        ))}
      </DataList>
      {/* Same reveal as F0Accordion: the block grows from the row and fades
          in, and shrinks back on collapse. */}
      <AnimatePresence initial={false}>
        {contentArray.map((c, i) => {
          const details = drawerDetails(c)
          if (!details || !isOpen(c, i)) {
            return null
          }

          return (
            <motion.div
              key={i}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="overflow-hidden"
            >
              <div
                id={`${drawerId}-${i}`}
                className={cn(
                  // The spacing sits inside the animated block so it grows
                  // and shrinks with the rows instead of jumping.
                  "mt-0.5 flex flex-col",
                  // In table view the divider marks the nesting, so rows stay
                  // flush with the parent; stacked rows indent instead.
                  // The body's own padding frames the nested rows, so the
                  // rows drop their horizontal padding (row container and
                  // action wrapper) and sit flush with it.
                  isHorizontal
                    ? "border-0 border-t border-solid border-f1-border-secondary px-5 py-3 [&>div>div]:px-0 [&_ul>li>*]:px-0"
                    : "pl-3"
                )}
              >
                {details.map((detail, j) => (
                  // Nested rows may share a title (or have none, for
                  // label-less record rows), so the index is part of the key.
                  <Fragment key={`${detail.title}-${j}`}>
                    <_DetailsItem {...detail} isHorizontal={isHorizontal} />
                    {isHorizontal && j !== details.length - 1 ? (
                      <div className="h-[1px] w-full bg-f1-border-secondary" />
                    ) : null}
                  </Fragment>
                ))}
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>
    </div>
  )
})

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const DetailsItem = withDataTestId(
  experimentalComponent("DetailsItem", _DetailsItem)
)
