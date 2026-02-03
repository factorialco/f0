import type { ReactNode } from "react"

import { useCopilotAction } from "@copilotkit/react-core"

import { F0DemoCard } from "../../F0UpsellKit/F0DemoCard"
import { DemoCardArgs } from "./types"

const VIDEO_EXTENSIONS = /\.(mp4|webm|mov|ogg|ogv|m3u8)(\?|$)/i

const isVideoUrl = (url: string): boolean => VIDEO_EXTENSIONS.test(url)

const PreviewPlaceholder = () => (
  <div
    className="flex min-h-[160px] w-full items-center justify-center bg-f1-background-tertiary"
    aria-hidden
  >
    <span className="text-sm text-f1-foreground-secondary">Preview</span>
  </div>
)

/**
 * Hook to register the demo card copilot action.
 * Renders a demo card (preview, title, description, CTA) when the backend requests it.
 */
export const useDemoCardAction = () => {
  useCopilotAction({
    name: "demoCard",
    description:
      "Display a demo card with optional preview image or video, title, description, and a primary action button (e.g. for demos or guided walkthroughs).",
    parameters: [
      {
        name: "moduleName",
        type: "string",
        description:
          "Module name for the icon (e.g. company_projects, benefits, projects, calendar, reports)",
        required: true,
      },
      {
        name: "description",
        type: "string",
        description: "Description text below the title",
        required: true,
      },
      {
        name: "actionHref",
        type: "string",
        description:
          "Optional URL for the action button (opens when user clicks)",
        required: false,
      },
      {
        name: "previewMediaUrl",
        type: "string",
        description:
          "Optional image or video URL for the preview area (type inferred from URL, e.g. .mp4, .webm for video)",
        required: false,
      },
    ],
    available: "disabled",
    render: (props) => {
      const args = props.args as DemoCardArgs
      const url = args.previewMediaUrl
      let preview: ReactNode = <PreviewPlaceholder />
      if (url) {
        if (isVideoUrl(url)) {
          preview = (
            <video
              src={url}
              className="h-auto w-full object-cover"
              autoPlay
              playsInline
              muted
              loop
              aria-label="Preview video"
            />
          )
        } else {
          preview = (
            <img src={url} alt="" className="h-auto w-full object-cover" />
          )
        }
      }
      return (
        <F0DemoCard
          moduleName={args.moduleName}
          description={args.description}
          preview={preview}
          actionHref={args.actionHref}
          onAction={args.actionHref ? undefined : () => {}}
        />
      )
    },
  })
}
