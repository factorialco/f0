import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ChevronLeft, ChevronRight } from "@/icons/app"
import { withDataTestId } from "@/lib/data-testid"
import { experimentalComponent } from "@/lib/experimental"

import type { CarouselPaging } from "@/ui/carousel"

import { F0Dialog } from "../F0Dialog"
import type { F0DialogInternalProps } from "../F0Dialog/internal-types"

/** One page of the dialog. */
export interface F0CarouselDialogItem {
  id: string
  /**
   * The dialog's title while this page is showing. The header therefore changes
   * with the content, which is what makes this ONE dialog moving rather than a
   * frame with something loaded into it.
   *
   * GIVE EVERY PAGE ONE: it is the dialog's accessible name as well as the words
   * in the header, and a dialog without one is announced as nothing at all. If
   * the content already shows the title itself, hide it THERE — `CommunityPost`
   * has `hideTitle` for exactly this — rather than leaving the header blank.
   */
  title?: string
  content: ReactNode
}

export interface F0CarouselDialogProps extends Pick<
  F0DialogInternalProps,
  | "isOpen"
  | "onClose"
  | "width"
  | "primaryAction"
  | "secondaryAction"
  | "otherActions"
  | "disableContentPadding"
  | "container"
> {
  /** The pages, in the order they are walked. */
  items: F0CarouselDialogItem[]
  /**
   * WHICH PAGE IS SHOWING. Controlled, deliberately: the thing you opened the
   * dialog on is already state the app holds — the post you clicked in a feed,
   * a param in the URL — and a dialog keeping its own copy of it is two answers
   * to one question.
   *
   * An id that names nothing in `items` shows the {@link placeholder}, NOT some
   * other page. In a params-driven app the URL moves before the data does, and
   * "the id I asked for isn't here yet" must never render as "here is a
   * different post".
   */
  currentId: string
  onNavigate: (id: string) => void
  /**
   * WHAT TO SHOW WHILE `currentId` NAMES SOMETHING THE DIALOG DOESN'T HAVE — the
   * gap between the URL changing and the data arriving.
   *
   * The dialog stays open and stays put: same element, no reopen animation, the
   * arrows held until it knows where it is. Give it a `title` so the dialog keeps
   * an accessible name across the gap; a feed usually knows a post's title long
   * before its body.
   *
   * PREFER NOT TO NEED IT. If you can put an item in `items` for the id you are
   * navigating to — with skeleton `content` while its body loads — do that
   * instead: the id is always found, the title comes with it, and the position in
   * the header stays honest. This is the net for when you genuinely cannot.
   */
  placeholder?: {
    title?: string
    content: ReactNode
  }
  /**
   * The controls' words. There is no visible text on the arrows, so `previous`
   * and `next` are what a screen reader reads and what the tooltips say;
   * `position` writes the header's reading ("3 of 11").
   */
  labels?: {
    previous?: string
    next?: string
    position?: (current: number, total: number) => string
  }
  /**
   * The ends JOIN UP: Next on the last page goes to the first. Off by default —
   * a list of eleven posts has an end, and an arrow that silently returns you to
   * the top is how you read the same thing twice without noticing.
   */
  loop?: boolean
  /**
   * THE ITEMS ARE A PAGE of a longer set. Next then stays live past the last one
   * loaded: pressing it fetches, and the walk CONTINUES onto the new page as
   * soon as it lands, so the reader presses once rather than pressing, waiting,
   * and pressing again.
   *
   * It is the same {@link CarouselPaging} the carousel takes, on purpose. A post
   * opened from a feed is the same query as the feed it came from, so one
   * `useData` feeds both: the same records, the same `loadMore`. Walk past the
   * end in the dialog and the carousel behind it grows too, because there is one
   * list and both are looking at it.
   *
   * Arriving at the last loaded item ALSO asks for the next page, once per
   * position — so a source that answers `hasMore: true` with no new records
   * stalls instead of looping.
   *
   * `loop` is ignored while `hasMore`: an end that hasn't been reached yet is not
   * an end to join up.
   */
  pagination?: CarouselPaging
}

const ARROW = "Previous"

/**
 * SOLID, because these float on the overlay rather than sitting on a card.
 *
 * `outline`'s resting fill is 60% opaque — right on a white surface, where the
 * 40% showing through is more white. Over the dimmed page behind a dialog it
 * lets that dimming through instead, and the button reads as greyed out: the
 * same look a DISABLED control has, on the two controls whose whole job is to
 * say whether you can keep going.
 *
 * Only the RESTING fill is replaced. Hover, press and disabled set their own
 * backgrounds and are left exactly as they are — a disabled arrow should look
 * faded, and that difference is the whole point of making the live one solid.
 *
 * `ButtonInternal` rather than `F0Button` because `F0Button` deliberately drops
 * `className`; `F0DialogHeader`'s own controls reach for the same escape hatch.
 */
const ARROW_CLASS = "bg-f1-background"

/**
 * F0CarouselDialog — one dialog you WALK THROUGH: an arrow on each side of the
 * panel, the position in the header, and the content swapped underneath without
 * the dialog ever closing.
 *
 * For a set of things a reader moves between — a post opened from a feed, one
 * photo of many, a record and the next record. Not for a wizard: those steps are
 * one task with a beginning and an end, and belong in `F0Wizard`, which knows
 * about progress and about not letting you skip.
 *
 * THE ARROWS ARE OUTSIDE THE PANEL, which is the whole reason this is a
 * component rather than two buttons in someone's `children`. Inside, they would
 * compete with the content for the reader's attention and for its width; beside
 * it, they are unmistakably chrome. They are still rendered within the dialog's
 * own element, so the focus trap holds and the keyboard reaches them — and the
 * left/right arrow keys drive them directly.
 *
 * The content is MOUNTED ONE AT A TIME. Walking to the next page unmounts the
 * last one, so a dialog over a hundred posts costs one post — and anything a page
 * needs to keep across a walk (a video's position, a draft reply) has to live
 * with the caller, not in the page.
 */
const F0CarouselDialogComponent = ({
  items,
  currentId,
  onNavigate,
  labels,
  loop = false,
  pagination,
  placeholder,
  isOpen,
  onClose,
  ...dialogProps
}: F0CarouselDialogProps) => {
  const foundIndex = items.findIndex((item) => item.id === currentId)
  // NOT clamped to 0. An id the dialog has never heard of is a page still on its
  // way, and answering it with `items[0]` shows a post nobody asked for.
  const waiting = foundIndex < 0
  const index = waiting ? 0 : foundIndex
  const current = items[index]
  /** How many are MOUNTED — one page's worth, when the set is paged. */
  const loaded = items.length
  /**
   * How many there ARE. The source's own count when it reports one, else what is
   * loaded — which is the truth for an unpaged set and an understatement for a
   * paged one, hence the `+` the default label adds when more is coming.
   */
  const total = pagination?.total ?? loaded

  const hasMore = pagination?.hasMore ?? false
  const isLoadingMore = pagination?.isLoading ?? false
  // A set whose end has not been reached yet is not an end to join up.
  const wraps = loop && !hasMore

  // Nowhere to step while the dialog doesn't know where it is standing: `index`
  // is 0 in that state purely so the arithmetic below has something to work
  // with, and stepping from a position you don't hold would land anywhere.
  const previousId = waiting
    ? undefined
    : wraps
      ? items[(index - 1 + loaded) % loaded]?.id
      : items[index - 1]?.id
  const nextId = waiting
    ? undefined
    : wraps
      ? items[(index + 1) % loaded]?.id
      : items[index + 1]?.id

  const goPrevious = useCallback(() => {
    if (previousId) onNavigate(previousId)
  }, [previousId, onNavigate])

  /**
   * THE MOVE THE READER ASKED FOR, still owed. Pressing Next at the end of a
   * page cannot navigate yet — the item does not exist — so the press is
   * remembered and finished when the page lands. Without it Next at the boundary
   * looks like it did nothing, and the reader presses twice to advance once.
   */
  const [owedAdvance, setOwedAdvance] = useState(false)

  /**
   * The item count the next page was last asked for at. Both the press and the
   * prefetch go through it, so one position produces one request however they
   * interleave — a source that reports `isLoading` a tick late cannot be asked
   * twice for the same records.
   *
   * A fetch that FAILS therefore isn't retried by pressing Next again: the count
   * has not moved, so the position still counts as asked. Surfacing and retrying
   * a failed page is the app's job, and it holds the source.
   */
  const askedAtCount = useRef(-1)

  const askForNextPage = useCallback(() => {
    if (!pagination || isLoadingMore) return
    if (askedAtCount.current === loaded) return
    askedAtCount.current = loaded
    pagination.onLoadMore()
  }, [pagination, isLoadingMore, loaded])

  const goNext = useCallback(() => {
    if (nextId) {
      onNavigate(nextId)
      return
    }
    if (waiting || !hasMore || !pagination) return
    // THE PRESS IS RECORDED EITHER WAY. The prefetch has usually already asked
    // for this page, so a press at the boundary lands while it is in flight —
    // asking again would be a second request for the same records, and treating
    // the press as nothing would lose the move the reader just made. So the
    // intent is remembered here, and the asking is left to the one guard.
    setOwedAdvance(true)
    askForNextPage()
  }, [nextId, onNavigate, waiting, hasMore, pagination, askForNextPage])

  // The page landed: finish the move. And if the fetch settled without one, stop
  // waiting rather than holding a spinner over nothing.
  const wasLoadingMore = useRef(isLoadingMore)
  useEffect(() => {
    const settled = wasLoadingMore.current && !isLoadingMore
    wasLoadingMore.current = isLoadingMore
    if (!owedAdvance) return
    if (nextId) {
      setOwedAdvance(false)
      onNavigate(nextId)
      return
    }
    if (settled) setOwedAdvance(false)
  }, [owedAdvance, nextId, isLoadingMore, onNavigate])

  /**
   * PREFETCH on arrival at the last loaded item, so the next press usually just
   * navigates. The count guard is what makes this safe to run from an effect: a
   * source answering `hasMore: true` with no new records leaves the count where
   * it was, so nothing asks again — without it, `isLoading` cycling
   * false→true→false would re-enter this on every response.
   */
  useEffect(() => {
    // Not while waiting: "there is no next item" means "we don't know yet", not
    // "we have reached the end", and fetching on it would page the set forward
    // every time the URL moved ahead of the data.
    if (!isOpen || waiting || nextId || !hasMore) return
    askForNextPage()
  }, [isOpen, waiting, nextId, hasMore, askForNextPage])

  // THE ARROW KEYS, on the document while the dialog is open. A modal dialog owns
  // the keyboard, and left/right is how anyone who has used a photo viewer
  // expects to move — asking them to tab to a button first is asking them to
  // find it. Bound to the document rather than to the panel because focus starts
  // nowhere in particular (`onOpenAutoFocus` is prevented).
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      // Not while someone is typing: a text field's own caret movement is the
      // more specific claim on these keys.
      const target = event.target as HTMLElement | null
      if (
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      )
        return
      if (event.key === "ArrowLeft") goPrevious()
      if (event.key === "ArrowRight") goNext()
    }
    document.addEventListener("keydown", onKeyDown)
    return () => document.removeEventListener("keydown", onKeyDown)
  }, [isOpen, goPrevious, goNext])

  const sideControls = useMemo(
    () => ({
      // BOTH ARROWS ALWAYS, disabled at the ends rather than removed: an arrow
      // that vanishes takes the reader's aim with it, and on the first page the
      // one that vanished is the one they are about to want.
      previous: (
        <ButtonInternal
          variant="outline"
          size="md"
          icon={ChevronLeft}
          label={labels?.previous ?? ARROW}
          hideLabel
          className={ARROW_CLASS}
          disabled={!previousId}
          onClick={goPrevious}
        />
      ),
      next: (
        <ButtonInternal
          variant="outline"
          size="md"
          icon={ChevronRight}
          label={labels?.next ?? "Next"}
          hideLabel
          className={ARROW_CLASS}
          // ONLY WHEN SOMEBODY IS WAITING. A page pulled in ahead of the
          // reader — the prefetch on arriving at the last item — is work nobody
          // asked about, and a spinner over it invites them to wait for
          // something that was never in their way.
          loading={owedAdvance}
          // Live past the last loaded item whenever the set continues — the
          // carousel's own arrow answers the same way.
          disabled={!nextId && !(hasMore && !isLoadingMore)}
          onClick={goNext}
        />
      ),
    }),
    [
      labels?.previous,
      labels?.next,
      previousId,
      nextId,
      hasMore,
      isLoadingMore,
      owedAdvance,
      goPrevious,
      goNext,
    ]
  )

  // Nothing to show and nothing promised: neither items nor a placeholder means
  // there is no dialog to draw.
  if (!current && !placeholder) return null

  // `+` when the set continues past a count nobody has told us: "3 of 4" would
  // be a number that silently grows every time another page lands.
  const openEnded = hasMore && pagination?.total === undefined
  const position =
    labels?.position ??
    ((n: number, of: number) => `${n} of ${of}${openEnded ? "+" : ""}`)

  return (
    <F0Dialog
      {...dialogProps}
      isOpen={isOpen}
      onClose={onClose}
      title={waiting ? placeholder?.title : current?.title}
      // Only worth saying when there is more than one: "1 of 1" is a reading
      // nobody needs and a dialog that isn't really a carousel.
      //
      // And nothing at all while WAITING: the page's number is exactly what is
      // not known yet, and a number that appears and then corrects itself is
      // worse than no number.
      headerStatus={
        !waiting && (loaded > 1 || hasMore)
          ? position(index + 1, total)
          : undefined
      }
      // The arrows STAY, held: a row of controls that disappears for the length
      // of a fetch and comes back is the dialog flinching.
      sideControls={waiting || loaded > 1 || hasMore ? sideControls : undefined}
    >
      {waiting ? placeholder?.content : current?.content}
    </F0Dialog>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
export const F0CarouselDialog = withDataTestId(
  experimentalComponent("F0CarouselDialog", F0CarouselDialogComponent)
)
