import type { Meta, StoryObj } from "@storybook/react-vite"

import { useEffect } from "react"

import { F0Button } from "@/components/F0Button"
import { F0Toast } from "@/ui/Toast/F0Toast"

import { toasts } from "../imperative"

/**
 * Toast stories — the static visual reference (anatomy, states) plus the
 * interactive examples that fire real toasts via `toasts.open`. Kept in a single
 * CSF file so the guide (`toast-guide.mdx`, attached with `<Meta of={…} />`) is
 * the one Documentation page for the Toast group.
 */
const meta = {
  title: "Toast",
  component: F0Toast,
  // Opt out of autodocs so the hand-written guide (toast-guide.mdx, attached via
  // `<Meta of={…} />`) is the single Documentation page — not a generated one
  // alongside it.
  tags: ["!autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof F0Toast>

export default meta
type Story = StoryObj<typeof meta>

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: 384, maxWidth: "100%" }}>{children}</div>
)

const wait = (ms: number, fn: () => void) => window.setTimeout(fn, ms)

/** Full anatomy: icon · title · description · link + primary button (trailing). */
export const Anatomy: Story = {
  render: () => (
    <Frame>
      <F0Toast
        variant="success"
        title="3 people archived"
        description="Moved to the archive — you can restore them."
        actions={[
          { type: "button", label: "Undo", onClick: () => {} },
          { type: "link", label: "View", href: "#" },
        ]}
      />
    </Frame>
  ),
}

/** All five variants, stacked, at the real 384px width. */
export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, width: 384, maxWidth: "100%" }}>
      <F0Toast title="Changes saved" onClose={() => {}} />
      <F0Toast variant="success" title="Payment processed" onClose={() => {}} />
      <F0Toast variant="warning" title="Storage almost full" onClose={() => {}} />
      <F0Toast variant="error" title="Upload failed" onClose={() => {}} />
      <F0Toast variant="loading" title="Updating 3 people…" />
    </div>
  ),
}

/** A reversible action inline on the trailing edge; no close (✕) when there's
 *  an action. */
export const InlineAction: Story = {
  render: () => (
    <Frame>
      <F0Toast
        title="3 people archived"
        actions={{ type: "button", label: "Undo", onClick: () => {} }}
      />
    </Frame>
  ),
}

/** Title + description: icon and action align to the top. */
export const WithDescription: Story = {
  render: () => (
    <Frame>
      <F0Toast
        variant="error"
        title="Couldn't send"
        description="The mail server isn't responding."
        actions={{ type: "button", label: "Retry", onClick: () => {} }}
      />
    </Frame>
  ),
}

/**
 * Interactive examples — fire real toasts via `toasts.open` to see the true
 * behaviour: bottom-centre position, timing, the inline action and in-place
 * resolution. In docs it renders in its own iframe (with a height) so the fixed
 * overlay is contained and visible within the frame. No local ToastProvider —
 * the global `F0Provider` (Storybook preview) already mounts one.
 */
export const Examples: Story = {
  parameters: {
    layout: "fullscreen",
    docs: { story: { inline: false, height: "520px" } },
  },
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, padding: 32, maxWidth: 460 }}>
      <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "#565b64" }}>
        Click a button — the toast appears at the bottom-centre of the frame.
        Watch position, duration, the inline action, and how a loading toast
        resolves in place.
      </p>

      <F0Button
        label="Success — auto-dismiss (5s), has close"
        variant="outline"
        onClick={() => {
          toasts.open({ variant: "success", title: "Link copied" })
        }}
      />
      <F0Button
        label="Undo — inline action, no close (10s)"
        variant="outline"
        onClick={() => {
          toasts.open({
            title: "3 people deleted",
            actions: { type: "button", label: "Undo", onClick: () => undefined },
          })
        }}
      />
      <F0Button
        label="Error — auto-dismiss, has close"
        variant="outline"
        onClick={() => {
          toasts.open({ variant: "error", title: "Couldn't load comments" })
        }}
      />
      <F0Button
        label="Error + Retry — resolves in place"
        variant="outline"
        onClick={() => {
          // The retry validates the result: it fails once ("still couldn't
          // send", keeps the Retry), then succeeds on the next attempt.
          let attempts = 0
          const retry = (id: string) => {
            toasts.open({ id, variant: "loading", title: "Retrying…" })
            wait(1200, () => {
              attempts += 1
              if (attempts >= 2) {
                toasts.open({ id, variant: "success", title: "Sent" })
              } else {
                toasts.open({
                  id,
                  variant: "error",
                  title: "Still couldn't send",
                  description: "The mail server isn't responding.",
                  actions: { type: "button", label: "Retry", keepOpen: true, onClick: () => retry(id) },
                })
              }
            })
          }
          const id = toasts.open({
            variant: "error",
            title: "Couldn't send",
            description: "The mail server isn't responding.",
            actions: { type: "button", label: "Retry", keepOpen: true, onClick: () => retry(id) },
          })
        }}
      />
    </div>
  ),
}

/**
 * Resize the viewport to check the responsive width: 384px from the `sm`
 * breakpoint (640px) up, full-width below it. A persistent toast is opened on
 * mount so it stays visible while you drag the canvas.
 */
export const Responsive: Story = {
  parameters: { layout: "fullscreen" },
  render: () => {
    useEffect(() => {
      toasts.closeAll()
      toasts.open({
        id: "responsive-demo",
        variant: "success",
        title: "Resize the viewport",
        description: "Fixed 384px from 640px up; full-width below.",
        persistent: true,
      })
      return () => toasts.close("responsive-demo")
    }, [])
    return (
      <div style={{ padding: 32, maxWidth: 520, color: "#565b64", fontSize: 14, lineHeight: 1.5 }}>
        Drag the canvas edge (or use the viewport toolbar) and watch the toast at
        the bottom: it stays a fixed <b>384px</b> from the <code>sm</code>{" "}
        breakpoint (<b>640px</b>) upward, and switches to <b>full-width</b> below it.
      </div>
    )
  },
}
