import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { SidebarChatGroup } from "./types"

type Direction = "above" | "below"

type DirectionalUnread = {
  count: number
  target: HTMLElement | null
}

type TargetStatus = {
  count: number
  direction: Direction | null
  top: number
  bottom: number
}

type PendingFocus = {
  target: HTMLElement
  origin: HTMLElement
  cleanup: () => void
}

const EMPTY_DIRECTIONAL_UNREAD: DirectionalUnread = {
  count: 0,
  target: null,
}

const getDirection = (entry: IntersectionObserverEntry): Direction | null => {
  if (entry.isIntersecting || !entry.rootBounds) return null
  if (entry.boundingClientRect.bottom <= entry.rootBounds.top) return "above"
  if (entry.boundingClientRect.top >= entry.rootBounds.bottom) return "below"
  return null
}

const getDirectionalUnread = (
  statuses: Map<HTMLElement, TargetStatus>,
  direction: Direction
): DirectionalUnread => {
  const matches = Array.from(statuses.entries()).filter(
    ([, status]) => status.direction === direction
  )

  if (matches.length === 0) return EMPTY_DIRECTIONAL_UNREAD

  const target = matches.reduce((nearest, candidate) => {
    if (direction === "above") {
      return candidate[1].bottom > nearest[1].bottom ? candidate : nearest
    }
    return candidate[1].top < nearest[1].top ? candidate : nearest
  })

  return {
    count: matches.reduce((sum, [, status]) => sum + status.count, 0),
    target: target[0],
  }
}

const focusUnreadTarget = (target: HTMLElement) => {
  const focusable = target.matches("button, [tabindex='0']")
    ? target
    : target.querySelector<HTMLElement>("button, [tabindex='0']")
  focusable?.focus({ preventScroll: true })
}

export const useOffscreenUnreadChats = ({
  rootRef,
  groups,
  shouldReduceMotion,
}: {
  rootRef: RefObject<HTMLDivElement | null>
  groups: SidebarChatGroup[]
  shouldReduceMotion: boolean
}) => {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null)
  const [above, setAbove] = useState(EMPTY_DIRECTIONAL_UNREAD)
  const [below, setBelow] = useState(EMPTY_DIRECTIONAL_UNREAD)
  const pendingFocusRef = useRef<PendingFocus | null>(null)

  const clearPendingFocus = useCallback(() => {
    const pendingFocus = pendingFocusRef.current
    pendingFocusRef.current = null
    pendingFocus?.cleanup()
  }, [])

  const unreadByChatId = useMemo(
    () =>
      new Map(
        groups.flatMap((group) =>
          group.chats
            .filter((chat) => !chat.loading && (chat.unreadCount ?? 0) > 0)
            .map((chat) => [chat.id, 1] as const)
        )
      ),
    [groups]
  )

  const unreadByGroupId = useMemo(
    () =>
      new Map(
        groups.map(
          (group) =>
            [
              group.id,
              group.chats.filter((chat) => (chat.unreadCount ?? 0) > 0).length,
            ] as const
        )
      ),
    [groups]
  )

  useEffect(() => {
    const root = rootRef.current
    const viewport = root?.closest<HTMLElement>("[data-scroll-container]")
    const scrollArea = viewport?.parentElement ?? null
    setPortalRoot(scrollArea)

    if (
      !root ||
      !viewport ||
      !scrollArea ||
      typeof IntersectionObserver === "undefined"
    ) {
      setAbove(EMPTY_DIRECTIONAL_UNREAD)
      setBelow(EMPTY_DIRECTIONAL_UNREAD)
      return
    }

    let intersectionObserver: IntersectionObserver | null = null
    let animationFrame: number | null = null

    const bindTargets = () => {
      intersectionObserver?.disconnect()
      const statuses = new Map<HTMLElement, TargetStatus>()
      setAbove(EMPTY_DIRECTIONAL_UNREAD)
      setBelow(EMPTY_DIRECTIONAL_UNREAD)
      if (root.querySelector("[data-sidebar-tab-panel-searching='true']")) {
        return
      }

      const updateDirections = () => {
        const nextAbove = getDirectionalUnread(statuses, "above")
        const nextBelow = getDirectionalUnread(statuses, "below")
        setAbove((current) =>
          current.count === nextAbove.count &&
          current.target === nextAbove.target
            ? current
            : nextAbove
        )
        setBelow((current) =>
          current.count === nextBelow.count &&
          current.target === nextBelow.target
            ? current
            : nextBelow
        )
      }

      intersectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const element = entry.target as HTMLElement
            const current = statuses.get(element)
            if (!current) return
            const pendingFocus = pendingFocusRef.current
            if (entry.isIntersecting && pendingFocus?.target === element) {
              const shouldMoveFocus =
                element.ownerDocument.activeElement === pendingFocus.origin
              clearPendingFocus()
              if (shouldMoveFocus) focusUnreadTarget(element)
            }
            statuses.set(element, {
              ...current,
              direction: getDirection(entry),
              top: entry.boundingClientRect.top,
              bottom: entry.boundingClientRect.bottom,
            })
          })
          updateDirections()
        },
        { root: viewport, threshold: 0 }
      )

      root
        .querySelectorAll<HTMLElement>("[data-sidebar-panel-group-id]")
        .forEach((groupElement) => {
          const groupId = groupElement.dataset.sidebarPanelGroupId
          const groupUnreadCount = groupId
            ? (unreadByGroupId.get(groupId) ?? 0)
            : 0
          if (groupUnreadCount === 0) return

          const collapsed = groupElement.querySelector(
            "[data-sidebar-collapsible-open='false']"
          )
          if (collapsed) {
            statuses.set(groupElement, {
              count: groupUnreadCount,
              direction: null,
              top: 0,
              bottom: 0,
            })
            intersectionObserver?.observe(groupElement)
            return
          }

          groupElement
            .querySelectorAll<HTMLElement>("[data-sidebar-chat-id]")
            .forEach((chatElement) => {
              const chatId = chatElement.dataset.sidebarChatId
              if (!chatId || !unreadByChatId.has(chatId)) return
              statuses.set(chatElement, {
                count: 1,
                direction: null,
                top: 0,
                bottom: 0,
              })
              intersectionObserver?.observe(chatElement)
            })
        })

      if (statuses.size === 0) updateDirections()
    }

    const scheduleBindTargets = () => {
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        animationFrame = null
        bindTargets()
      })
    }

    bindTargets()
    const mutationObserver = new MutationObserver(scheduleBindTargets)
    mutationObserver.observe(root, {
      attributes: true,
      attributeFilter: [
        "data-sidebar-collapsible-open",
        "data-sidebar-tab-panel-searching",
      ],
      childList: true,
      subtree: true,
    })

    return () => {
      clearPendingFocus()
      intersectionObserver?.disconnect()
      mutationObserver.disconnect()
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
    }
  }, [clearPendingFocus, rootRef, unreadByChatId, unreadByGroupId])

  const jump = useCallback(
    (direction: Direction, origin: HTMLElement) => {
      const target = direction === "above" ? above.target : below.target
      if (!target) return

      if (!shouldReduceMotion) {
        clearPendingFocus()
        const viewport = target.closest<HTMLElement>("[data-scroll-container]")
        const ownerDocument = target.ownerDocument
        const cancelPendingFocus = () => clearPendingFocus()
        const handleFocus = () => {
          if (ownerDocument.activeElement !== origin) clearPendingFocus()
        }

        viewport?.addEventListener("wheel", cancelPendingFocus, { once: true })
        viewport?.addEventListener("touchstart", cancelPendingFocus, {
          once: true,
        })
        ownerDocument.addEventListener("keydown", cancelPendingFocus, {
          once: true,
          capture: true,
        })
        ownerDocument.addEventListener("pointerdown", cancelPendingFocus, {
          once: true,
          capture: true,
        })
        ownerDocument.addEventListener("focusin", handleFocus)

        pendingFocusRef.current = {
          target,
          origin,
          cleanup: () => {
            viewport?.removeEventListener("wheel", cancelPendingFocus)
            viewport?.removeEventListener("touchstart", cancelPendingFocus)
            ownerDocument.removeEventListener("keydown", cancelPendingFocus, {
              capture: true,
            })
            ownerDocument.removeEventListener(
              "pointerdown",
              cancelPendingFocus,
              { capture: true }
            )
            ownerDocument.removeEventListener("focusin", handleFocus)
          },
        }
      }
      target.scrollIntoView({
        behavior: shouldReduceMotion ? "auto" : "smooth",
        block: "center",
      })
      if (shouldReduceMotion) focusUnreadTarget(target)
    },
    [above.target, below.target, clearPendingFocus, shouldReduceMotion]
  )

  return { portalRoot, above, below, jump }
}
