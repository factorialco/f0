import {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
} from "react"
import { type AvatarVariant, F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Icon } from "@/components/F0Icon"
import { People } from "@/icons/app"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"
import {
  type MentionCandidate,
  type PopoverPosition,
} from "../hooks/useMentions"
import { type F0ChatUser } from "../types"

export type ChatMentionPopoverProps = {
  isOpen: boolean
  listboxId: string
  /** Rows to display: the "everyone" option (when matching) then members. */
  results: MentionCandidate[]
  isLoading: boolean
  selectedIndex: number
  position: PopoverPosition
  onSelect: (candidate: MentionCandidate) => void
  /** Localized "Notify everyone in this group" description for the @here row. */
  everyoneDescription: string
}

const optionId = (listboxId: string, candidate: MentionCandidate): string => {
  const key =
    candidate.kind === "everyone" ? "everyone" : `user-${candidate.user.id}`
  return `${listboxId}-option-${key.replace(/[^a-zA-Z0-9_-]/g, "-")}`
}

export const getChatMentionOptionId = optionId

type MentionOptionProps = {
  optionId: string
  index: number
  isSelected: boolean
  onSelect: (index: number) => void
  innerRef: React.Ref<HTMLDivElement> | undefined
  children: React.ReactNode
}

function MentionOption({
  optionId,
  index,
  isSelected,
  onSelect,
  innerRef,
  children,
}: MentionOptionProps) {
  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.preventDefault()
      onSelect(index)
    },
    [onSelect, index]
  )

  return (
    <div
      ref={innerRef}
      id={optionId}
      role="option"
      aria-selected={isSelected}
      className={cn(
        "flex cursor-pointer items-center gap-2 p-2 rounded",
        "transition-colors",
        isSelected
          ? "bg-f1-background-secondary"
          : "hover:bg-f1-background-secondary-hover"
      )}
      onMouseDown={handleMouseDown}
    >
      {children}
    </div>
  )
}

type MentionRowProps = Omit<MentionOptionProps, "children">

const EveryoneRow = memo(function EveryoneRow({
  label,
  description,
  ...option
}: MentionRowProps & { label: string; description: string }) {
  return (
    <MentionOption {...option}>
      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-f1-background-secondary">
        <F0Icon icon={People} size="sm" color="default" />
      </span>
      <div className="flex min-w-0 flex-1 flex-col">
        <OneEllipsis className="text-base font-medium text-f1-foreground">
          {label}
        </OneEllipsis>
        <OneEllipsis className="text-sm text-f1-foreground-secondary">
          {description}
        </OneEllipsis>
      </div>
    </MentionOption>
  )
})

const UserRow = memo(function UserRow({
  user,
  ...option
}: MentionRowProps & { user: F0ChatUser }) {
  const avatar = useMemo<AvatarVariant>(
    () => user.avatar ?? { type: "person", firstName: user.name, lastName: "" },
    [user]
  )

  return (
    <MentionOption {...option}>
      <F0Avatar size="xs" avatar={avatar} />
      <div className="flex min-w-0 flex-1 flex-col">
        <OneEllipsis className="text-base font-medium text-f1-foreground">
          {user.name}
        </OneEllipsis>
      </div>
    </MentionOption>
  )
})

/**
 * Inline `@`-mention autocomplete, positioned above the textarea — the comms
 * twin of the AI chat's MentionPopover (same chrome, positioning and skeletons).
 * Renders group members, with the "everyone" (`@here`) option pinned on top.
 *
 * Every candidate the search returned stays mounted — the keyboard cycles
 * through all of them and nothing in the contract caps the list — but rows are
 * memoized on the candidate they render, so a keystroke that leaves the
 * candidates alone re-renders none of them.
 */
export function ChatMentionPopover({
  isOpen,
  listboxId,
  results,
  isLoading,
  selectedIndex,
  position,
  onSelect,
  everyoneDescription,
}: ChatMentionPopoverProps) {
  const listRef = useRef<HTMLDivElement>(null)
  const selectedItemRef = useRef<HTMLDivElement>(null)

  // The composer rebuilds `results` and `onSelect` on every keystroke, so a row
  // handed either of them directly would re-render on every keystroke however
  // it was memoized. Rows get an index and this handler instead, both stable.
  const resultsRef = useRef(results)
  resultsRef.current = results
  const onSelectRef = useRef(onSelect)
  onSelectRef.current = onSelect

  const handleSelect = useCallback((index: number) => {
    const candidate = resultsRef.current[index]
    if (candidate) {
      onSelectRef.current(candidate)
    }
  }, [])

  useEffect(() => {
    selectedItemRef.current?.scrollIntoView({ block: "nearest" })
  }, [selectedIndex])

  useLayoutEffect(() => {
    const el = listRef.current
    const parent = el?.offsetParent as HTMLElement | null
    if (!el || !parent) {
      return
    }
    const overflow = el.offsetLeft + el.offsetWidth - parent.clientWidth
    if (overflow > 0) {
      el.style.left = `${Math.max(0, el.offsetLeft - overflow)}px`
    }
  }, [position])

  const hasUserResults = results.some((r) => r.kind === "user")
  const showMemberSkeleton = isLoading && !hasUserResults
  // Nothing matches at all and we're not loading → render nothing.
  if (!isOpen || (results.length === 0 && !isLoading)) {
    return null
  }

  return (
    <div
      ref={listRef}
      id={listboxId}
      role="listbox"
      style={{
        position: "absolute",
        bottom: position ? `${position.bottom}px` : "100%",
        left: position ? `${position.left}px` : 0,
      }}
      className={cn(
        "z-50",
        "w-64 max-h-60 overflow-y-auto",
        "rounded-lg border border-solid border-f1-border-secondary",
        "bg-f1-background shadow-md",
        "p-1"
      )}
    >
      {results.map((candidate, index) => {
        const isSelected = index === selectedIndex
        const innerRef = isSelected ? selectedItemRef : undefined
        const id = optionId(listboxId, candidate)
        return candidate.kind === "everyone" ? (
          <EveryoneRow
            key="@everyone"
            optionId={id}
            index={index}
            isSelected={isSelected}
            onSelect={handleSelect}
            innerRef={innerRef}
            label={candidate.label}
            description={everyoneDescription}
          />
        ) : (
          <UserRow
            key={candidate.user.id}
            optionId={id}
            index={index}
            isSelected={isSelected}
            onSelect={handleSelect}
            innerRef={innerRef}
            user={candidate.user}
          />
        )
      })}

      {showMemberSkeleton &&
        Array.from({ length: 3 }, (_, i) => (
          <div
            key={`skeleton-${i}`}
            className="flex items-center gap-2 p-2"
            aria-hidden="true"
          >
            <Skeleton className="size-5 shrink-0 rounded-full" />
            <Skeleton
              className={cn("h-4 rounded", i === 1 ? "w-24" : "w-32")}
            />
          </div>
        ))}
    </div>
  )
}
