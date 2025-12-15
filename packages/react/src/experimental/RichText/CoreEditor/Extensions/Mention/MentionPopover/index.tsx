import * as Popover from "@radix-ui/react-popover"
import { Editor } from "@tiptap/react"
import React from "react"

interface MentionPopoverProps {
  content: HTMLElement
  anchorRect: DOMRect
  editor: Editor
}

export const MentionPopover = ({ content, anchorRect, editor }: MentionPopoverProps) => {
  const anchorStyle: React.CSSProperties = {
    position: "absolute",
    top: anchorRect.bottom + window.scrollY,
    left: anchorRect.left + window.scrollX,
    width: 0,
    height: 0,
  }

  return (
    <Popover.Root
      open
      modal={false}
      onOpenChange={(open) => {
        if (open) {
          editor?.commands.focus()
        }
      }}
    >
      <div style={anchorStyle} />
      <Popover.Anchor asChild>
        <div style={anchorStyle} />
      </Popover.Anchor>
      <Popover.Content
        side="top"
        align="start"
        sideOffset={25}
        collisionPadding={10}
        style={{ zIndex: 9999 }}
        onMouseDownCapture={() => {
          editor?.commands.focus()
        }}
        onOpenAutoFocus={(event) => {
          event.preventDefault()
        }}
        onCloseAutoFocus={(event) => {
          event.preventDefault()
        }}
      >
        <div
          ref={(el) => {
            if (el && content.parentNode !== el) {
              el.appendChild(content)
            }
          }}
        />
      </Popover.Content>
    </Popover.Root>
  )
}
