import {
  type RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react"

import { type SidebarChatGroup } from "./types"

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

type PortalRoots = {
  above: HTMLElement | null
  below: HTMLElement | null
}

const EMPTY_DIRECTIONAL_UNREAD: DirectionalUnread = {
  count: 0,
  target: null,
}

const EMPTY_PORTAL_ROOTS: PortalRoots = { above: null, below: null }

const getDirection = (entry: IntersectionObserverEntry): Direction | null => {
  if (entry.isIntersecting || !entry.rootBounds) return null
  if (entry.boundingClientRect.bottom <= entry.rootBounds.top) return "above"
  if (entry.boundingClientRect.top >= entry.rootBounds.bottom) return "below"
  return null
}

const getDirectionalUnread = (
  statuses: Map<HTMLElement, TargetStatus>
): { above: DirectionalUnread; below: DirectionalUnread } => {
  let aboveCount = 0
  let belowCount = 0
  let aboveTarget: HTMLElement | null = null
  let belowTarget: HTMLElement | null = null
  let nearestAboveBottom = Number.NEGATIVE_INFINITY
  let nearestBelowTop = Number.POSITIVE_INFINITY

  for (const [element, status] of statuses) {
    if (status.direction === "above") {
      aboveCount += status.count
      if (status.bottom > nearestAboveBottom) {
        nearestAboveBottom = status.bottom
        aboveTarget = element
      }
    } else if (status.direction === "below") {
      belowCount += status.count
      if (status.top < nearestBelowTop) {
        nearestBelowTop = status.top
        belowTarget = element
      }
    }
  }

  return {
    above:
      aboveCount > 0
        ? { count: aboveCount, target: aboveTarget }
        : EMPTY_DIRECTIONAL_UNREAD,
    below:
      belowCount > 0
        ? { count: belowCount, target: belowTarget }
        : EMPTY_DIRECTIONAL_UNREAD,
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
  const [portalRoots, setPortalRoots] = useState(EMPTY_PORTAL_ROOTS)
  const [navigation, setNavigation] = useState(() => ({
    above: EMPTY_DIRECTIONAL_UNREAD,
    below: EMPTY_DIRECTIONAL_UNREAD,
  }))
  const pendingFocusRef = useRef<PendingFocus | null>(null)
  const unreadTargetsRef = useRef({
    byChatId: new Map<string, number>(),
    byGroupId: new Map<string, number>(),
  })

  const clearPendingFocus = useCallback(() => {
    const pendingFocus = pendingFocusRef.current
    pendingFocusRef.current = null
    pendingFocus?.cleanup()
  }, [])

  const { unreadByChatId, unreadByGroupId, unreadTargetSignature } =
    useMemo(() => {
      const byChatId = new Map<string, number>()
      const byGroupId = new Map<string, number>()
      const signature: string[] = []

      for (const group of groups) {
        const unreadIds: string[] = []
        for (const chat of group.chats) {
          if (chat.loading || (chat.unreadCount ?? 0) <= 0) continue
          byChatId.set(chat.id, 1)
          unreadIds.push(chat.id)
        }
        byGroupId.set(group.id, unreadIds.length)
        signature.push(
          `${group.id}:${group.isOpen !== false ? "open" : "closed"}:${unreadIds.join(",")}`
        )
      }

      return {
        unreadByChatId: byChatId,
        unreadByGroupId: byGroupId,
        unreadTargetSignature: signature.join("|"),
      }
    }, [groups])
  unreadTargetsRef.current = {
    byChatId: unreadByChatId,
    byGroupId: unreadByGroupId,
  }
  useEffect(() => {
    const root = rootRef.current
    const viewport = root?.closest<HTMLElement>("[data-scroll-container]")
    const scrollArea = viewport?.parentElement ?? null

    if (
      !root ||
      !viewport ||
      !scrollArea ||
      typeof IntersectionObserver === "undefined"
    ) {
      setPortalRoots(EMPTY_PORTAL_ROOTS)
      setNavigation({
        above: EMPTY_DIRECTIONAL_UNREAD,
        below: EMPTY_DIRECTIONAL_UNREAD,
      })
      return
    }

    // Keep focus order consistent with the visual placement: the upper
    // shortcut precedes the viewport in the DOM and the lower one follows it.
    const abovePortalRoot = root.ownerDocument.createElement("div")
    const belowPortalRoot = root.ownerDocument.createElement("div")
    abovePortalRoot.dataset.sidebarUnreadPortal = "above"
    belowPortalRoot.dataset.sidebarUnreadPortal = "below"
    abovePortalRoot.style.display = "contents"
    belowPortalRoot.style.display = "contents"
    scrollArea.insertBefore(abovePortalRoot, viewport)
    scrollArea.insertBefore(belowPortalRoot, viewport.nextSibling)
    setPortalRoots({ above: abovePortalRoot, below: belowPortalRoot })

    let intersectionObserver: IntersectionObserver | null = null
    let animationFrame: number | null = null
    let initialFrame: number | null = null
    let initialized = false
    let bindingSignature = ""

    const getBindingSignature = () => {
      const searching = root.querySelector(
        "[data-sidebar-tab-panel-searching='true']"
      )
      if (searching) return "searching"

      const { byChatId, byGroupId } = unreadTargetsRef.current
      return Array.from(
        root.querySelectorAll<HTMLElement>("[data-sidebar-panel-group-id]")
      )
        .map((groupElement) => {
          const groupId = groupElement.dataset.sidebarPanelGroupId ?? ""
          const collapsed = Boolean(
            groupElement.querySelector(
              "[data-sidebar-collapsible-open='false']"
            )
          )
          if (collapsed) {
            return `${groupId}:closed:${byGroupId.get(groupId) ?? 0}`
          }
          const unreadIds = Array.from(
            groupElement.querySelectorAll<HTMLElement>("[data-sidebar-chat-id]")
          )
            .map((chatElement) => chatElement.dataset.sidebarChatId ?? "")
            .filter((chatId) => byChatId.has(chatId))
          return `${groupId}:open:${unreadIds.join(",")}`
        })
        .join("|")
    }

    const bindTargets = () => {
      const nextBindingSignature = getBindingSignature()
      if (intersectionObserver && bindingSignature === nextBindingSignature) {
        return
      }
      bindingSignature = nextBindingSignature
      intersectionObserver?.disconnect()
      const statuses = new Map<HTMLElement, TargetStatus>()
      setNavigation({
        above: EMPTY_DIRECTIONAL_UNREAD,
        below: EMPTY_DIRECTIONAL_UNREAD,
      })
      if (root.querySelector("[data-sidebar-tab-panel-searching='true']")) {
        return
      }

      const updateDirections = () => {
        const next = getDirectionalUnread(statuses)
        setNavigation((current) =>
          current.above.count === next.above.count &&
          current.above.target === next.above.target &&
          current.below.count === next.below.count &&
          current.below.target === next.below.target
            ? current
            : next
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

      const { byChatId, byGroupId } = unreadTargetsRef.current
      root
        .querySelectorAll<HTMLElement>("[data-sidebar-panel-group-id]")
        .forEach((groupElement) => {
          const groupId = groupElement.dataset.sidebarPanelGroupId
          const groupUnreadCount = groupId ? (byGroupId.get(groupId) ?? 0) : 0
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
              if (!chatId || !byChatId.has(chatId)) return
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
      if (!initialized || animationFrame !== null) return
      animationFrame = requestAnimationFrame(() => {
        animationFrame = null
        bindTargets()
      })
    }

    // Let the sidebar's rows paint before registering its unread observers.
    // Two frame boundaries guarantee at least one completed browser paint.
    initialFrame = requestAnimationFrame(() => {
      initialFrame = requestAnimationFrame(() => {
        initialFrame = null
        initialized = true
        bindTargets()
      })
    })
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
      abovePortalRoot.remove()
      belowPortalRoot.remove()
      clearPendingFocus()
      intersectionObserver?.disconnect()
      mutationObserver.disconnect()
      if (animationFrame !== null) cancelAnimationFrame(animationFrame)
      if (initialFrame !== null) cancelAnimationFrame(initialFrame)
    }
  }, [clearPendingFocus, rootRef, unreadTargetSignature])

  const jump = useCallback(
    (direction: Direction, origin: HTMLElement) => {
      const target =
        direction === "above"
          ? navigation.above.target
          : navigation.below.target
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
    [clearPendingFocus, navigation, shouldReduceMotion]
  )

  return {
    portalRoots,
    above: navigation.above,
    below: navigation.below,
    jump,
  }
}
