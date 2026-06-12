import * as Popover from "@radix-ui/react-popover"
import { AnimatePresence, motion } from "motion/react"
import { RefObject, memo, useLayoutEffect, useRef, useState } from "react"

import { ButtonInternal } from "@/components/F0Button/internal"
import { ChangeTone } from "@/icons/ai"
import { useI18n } from "@/lib/providers/i18n/i18n-provider"
import { cn } from "@/lib/utils"

import { AIEnhanceMenu } from "./EnhanceMenu"
import type { UseEnhanceReturn } from "./useEnhance"

interface EnhanceActivatorProps {
  enhance: UseEnhanceReturn
  disabled: boolean
  hideLabel?: boolean
  darkMode?: boolean
  menuWidth?: number
  menuContainerRef?: RefObject<HTMLElement | null>
  lockToViewportOnLock?: boolean
}

interface FrozenGeometry {
  alignOffset: number
  sideOffset: number
  menuWidth?: number
}

interface FrozenViewportPosition {
  left: number
  top: number
  width?: number
}

const EnhanceActivator = memo(function EnhanceActivator({
  enhance,
  disabled,
  hideLabel,
  darkMode = false,
  menuWidth,
  menuContainerRef,
  lockToViewportOnLock = false,
}: EnhanceActivatorProps) {
  const {
    config: enhanceConfig,
    handleEnhanceWithAI: onEnhanceWithAI,
    isLoading: isLoadingEnhance,
    isAcceptChangesOpen,
    acceptChanges: onAcceptChanges,
    rejectChanges: onRejectChanges,
    retryChanges: onRetryChanges,
  } = enhance
  const i18n = useI18n()
  const enhanceButtonRef = useRef<HTMLButtonElement>(null)
  const flowOwnerRef = useRef(false)
  const prevLockedRef = useRef(false)
  const [open, setOpen] = useState(false)
  const [triggerHeight, setTriggerHeight] = useState(0)
  const [computedAlignOffset, setComputedAlignOffset] = useState(-5)
  const [computedSideOffset, setComputedSideOffset] = useState(-triggerHeight)
  const [computedMenuWidth, setComputedMenuWidth] = useState<
    number | undefined
  >(menuWidth)
  const [frozenGeometry, setFrozenGeometry] = useState<FrozenGeometry | null>(
    null
  )
  const [frozenViewportPosition, setFrozenViewportPosition] =
    useState<FrozenViewportPosition | null>(null)

  useLayoutEffect(() => {
    if (!open) return
    if (isLocked && flowOwnerRef.current) return

    const updateGeometry = () => {
      if (!enhanceButtonRef.current) return

      setTriggerHeight(enhanceButtonRef.current.offsetHeight)

      if (!menuContainerRef?.current) {
        const fallbackWidth =
          menuWidth || enhanceButtonRef.current.offsetWidth || undefined
        if (fallbackWidth) {
          const safeWidth = Math.min(fallbackWidth, window.innerWidth - 24)
          const triggerRect = enhanceButtonRef.current.getBoundingClientRect()
          const left = triggerRect.left
          const minLeft = 12
          const maxLeft = Math.max(minLeft, window.innerWidth - 12 - safeWidth)
          const clampedLeft = Math.min(Math.max(left, minLeft), maxLeft)
          setComputedAlignOffset(Math.round(clampedLeft - triggerRect.left))
          setComputedMenuWidth(safeWidth)
        } else {
          setComputedAlignOffset(-5)
          setComputedMenuWidth(menuWidth)
        }
        setComputedSideOffset(-enhanceButtonRef.current.offsetHeight)
        return
      }

      const triggerRect = enhanceButtonRef.current.getBoundingClientRect()
      const containerRect = menuContainerRef.current.getBoundingClientRect()
      const desiredWidth =
        menuContainerRef.current.offsetWidth || menuWidth || triggerRect.width
      const safeWidth = Math.min(desiredWidth, window.innerWidth - 24)
      const desiredLeft = containerRect.left
      const minLeft = 12
      const maxLeft = Math.max(minLeft, window.innerWidth - 12 - safeWidth)
      const clampedLeft = Math.min(Math.max(desiredLeft, minLeft), maxLeft)
      setComputedAlignOffset(Math.round(clampedLeft - triggerRect.left))
      setComputedSideOffset(Math.round(containerRect.top - triggerRect.bottom))
      setComputedMenuWidth(safeWidth)
    }

    const rafId = requestAnimationFrame(updateGeometry)
    const resizeObserver = new ResizeObserver(updateGeometry)
    if (enhanceButtonRef.current) {
      resizeObserver.observe(enhanceButtonRef.current)
    }
    if (menuContainerRef?.current) {
      resizeObserver.observe(menuContainerRef.current)
    }
    window.addEventListener("resize", updateGeometry)
    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      window.removeEventListener("resize", updateGeometry)
    }
  }, [open, menuContainerRef, menuWidth])

  const handleEnhanceClick = (e: React.MouseEvent) => {
    e.preventDefault()
    if (!enhanceButtonRef.current) {
      flowOwnerRef.current = false
      setOpen(false)
      return
    }

    setOpen((prev) => {
      const next = !prev
      flowOwnerRef.current = next
      return next
    })
  }

  const isLocked = isLoadingEnhance || isAcceptChangesOpen

  useLayoutEffect(() => {
    // Keep open only for the activator instance that initiated the flow.
    if (isLocked && flowOwnerRef.current) {
      setOpen(true)
    }
  }, [isLocked])

  useLayoutEffect(() => {
    const isOwnerLocked = isLocked && flowOwnerRef.current
    const wasLocked = prevLockedRef.current

    if (isOwnerLocked && !wasLocked) {
      const triggerRect = enhanceButtonRef.current?.getBoundingClientRect()
      if (triggerRect && lockToViewportOnLock) {
        const width = computedMenuWidth
        const left = triggerRect.left + computedAlignOffset
        const top =
          triggerRect.bottom + computedSideOffset + contextualVerticalOffset
        setFrozenViewportPosition({ left, top, width })
      }

      setFrozenGeometry({
        alignOffset: computedAlignOffset,
        sideOffset: computedSideOffset,
        menuWidth: computedMenuWidth,
      })
    }

    if (!isOwnerLocked && wasLocked) {
      setFrozenGeometry(null)
      setFrozenViewportPosition(null)
    }

    prevLockedRef.current = isOwnerLocked
  }, [isLocked, computedAlignOffset, computedSideOffset, computedMenuWidth])

  const activeAlignOffset = frozenGeometry?.alignOffset ?? computedAlignOffset
  const activeSideOffset = frozenGeometry?.sideOffset ?? computedSideOffset
  const activeMenuWidth = frozenGeometry?.menuWidth ?? computedMenuWidth
  const contextualVerticalOffset = 0
  const renderAsFixedLockedPanel =
    lockToViewportOnLock &&
    isLocked &&
    flowOwnerRef.current &&
    !!frozenViewportPosition

  const handleCloseFlow = () => {
    flowOwnerRef.current = false
    setOpen(false)
  }

  const enhanceMenuProps = {
    onSelect: ({
      selectedIntent,
      customIntent,
    }: {
      selectedIntent?: string
      customIntent?: string
    }) => {
      onEnhanceWithAI(selectedIntent, customIntent)
    },
    enhancementOptions: enhanceConfig?.enhancementOptions || [],
    inputPlaceholder: i18n.richTextEditor.ai.customPromptPlaceholder,
    darkMode,
    menuWidth: activeMenuWidth,
    menuState: (isLoadingEnhance
      ? "loading"
      : isAcceptChangesOpen
        ? "review"
        : "idle") as "idle" | "loading" | "review",
    loadingLabel: i18n.richTextEditor.ai.loadingEnhanceLabel,
    onAccept: () => {
      onAcceptChanges?.()
      handleCloseFlow()
    },
    onReject: () => {
      onRejectChanges?.()
      handleCloseFlow()
    },
    onRetry: onRetryChanges,
    canShowOptions: !isLocked,
    compactReview: lockToViewportOnLock,
  }

  const preventIfLocked = (event: Event) => {
    if (isLocked) event.preventDefault()
  }

  return (
    <Popover.Root
      open={open}
      modal={false}
      onOpenChange={(o) => {
        if (!o && isLocked) return
        if (!o) {
          flowOwnerRef.current = false
        }
        setOpen(o)
      }}
    >
      <Popover.Trigger asChild>
        <ButtonInternal
          pressed={open}
          variant="ai"
          ref={enhanceButtonRef}
          icon={ChangeTone}
          label={i18n.richTextEditor.ai.enhanceButtonLabel}
          onClick={handleEnhanceClick}
          disabled={disabled}
          hideLabel={hideLabel}
        />
      </Popover.Trigger>
      <Popover.Portal container={document.body}>
        <AnimatePresence>
          {open &&
            (renderAsFixedLockedPanel ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className={cn(darkMode && "dark")}
                style={{
                  position: "fixed",
                  left: frozenViewportPosition.left,
                  top: frozenViewportPosition.top,
                  width:
                    lockToViewportOnLock && isAcceptChangesOpen
                      ? "fit-content"
                      : frozenViewportPosition.width
                        ? `${frozenViewportPosition.width}px`
                        : undefined,
                  zIndex: 9999,
                }}
              >
                <AIEnhanceMenu {...enhanceMenuProps} />
              </motion.div>
            ) : (
              <Popover.Content
                side="bottom"
                align="start"
                sideOffset={activeSideOffset + contextualVerticalOffset}
                alignOffset={activeAlignOffset}
                collisionPadding={10}
                onEscapeKeyDown={preventIfLocked}
                onPointerDownOutside={preventIfLocked}
                onInteractOutside={preventIfLocked}
                className={cn(darkMode && "dark")}
                style={{ zIndex: 9999 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                >
                  <AIEnhanceMenu {...enhanceMenuProps} />
                </motion.div>
              </Popover.Content>
            ))}
        </AnimatePresence>
      </Popover.Portal>
    </Popover.Root>
  )
})

export { EnhanceActivator }
