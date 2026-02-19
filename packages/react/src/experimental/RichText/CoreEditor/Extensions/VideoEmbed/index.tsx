import { mergeAttributes, Node, nodePasteRule } from "@tiptap/core"
import {
  NodeViewWrapper,
  ReactNodeViewRenderer,
  type NodeViewProps,
} from "@tiptap/react"

import { F0Button } from "@/components/F0Button"
import { Delete } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn } from "@/lib/utils"

// YouTube URL patterns:
//   https://www.youtube.com/watch?v=VIDEO_ID
//   https://youtu.be/VIDEO_ID
//   https://www.youtube.com/embed/VIDEO_ID
//   https://youtube.com/shorts/VIDEO_ID
const YOUTUBE_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/

// Vimeo URL patterns:
//   https://vimeo.com/VIDEO_ID
//   https://player.vimeo.com/video/VIDEO_ID
const VIMEO_REGEX =
  /(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/

// Full-line paste patterns (match the entire pasted text)
const YOUTUBE_PASTE_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)(?:\S*)$/gm

const VIMEO_PASTE_REGEX =
  /^(?:https?:\/\/)?(?:www\.)?(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)(?:\S*)$/gm

type VideoProvider = "youtube" | "vimeo"

interface VideoEmbedInfo {
  provider: VideoProvider
  videoId: string
  embedUrl: string
}

export function parseVideoUrl(url: string): VideoEmbedInfo | null {
  const ytMatch = url.match(YOUTUBE_REGEX)
  if (ytMatch) {
    return {
      provider: "youtube",
      videoId: ytMatch[1],
      embedUrl: `https://www.youtube-nocookie.com/embed/${ytMatch[1]}`,
    }
  }

  const vimeoMatch = url.match(VIMEO_REGEX)
  if (vimeoMatch) {
    return {
      provider: "vimeo",
      videoId: vimeoMatch[1],
      embedUrl: `https://player.vimeo.com/video/${vimeoMatch[1]}`,
    }
  }

  return null
}

const VideoEmbedNodeView = ({
  node,
  deleteNode,
  selected,
  editor,
}: NodeViewProps) => {
  const { src, provider } = node.attrs
  const isEditable = editor.isEditable
  const translations = useI18n()

  return (
    <NodeViewWrapper className="mb-2">
      <div
        className={cn(
          "video-embed-wrapper relative overflow-hidden rounded-lg",
          selected && "border-2 border-solid border-f1-border-selected-bold"
        )}
      >
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src={src}
            title={`${provider} video`}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {isEditable && (
          <div className="dark absolute right-2 top-2">
            <F0Button
              onClick={deleteNode}
              label={translations.actions.delete}
              icon={Delete}
              variant="outline"
              hideLabel
              size="sm"
            />
          </div>
        )}
      </div>
    </NodeViewWrapper>
  )
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    videoEmbed: {
      setVideoEmbed: (options: { src: string }) => ReturnType
    }
  }
}

export const VideoEmbedExtension = Node.create({
  name: "videoEmbed",
  group: "block",
  atom: true,
  draggable: true,

  addAttributes() {
    return {
      src: { default: null },
      provider: { default: null },
      videoId: { default: null },
    }
  },

  parseHTML() {
    return [
      {
        tag: "div[data-video-embed]",
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-video-embed": "" }),
      [
        "iframe",
        {
          src: HTMLAttributes.src,
          frameborder: "0",
          allowfullscreen: "true",
          allow:
            "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          style: "width:100%;aspect-ratio:16/9;",
        },
      ],
    ]
  },

  addNodeView() {
    return ReactNodeViewRenderer(VideoEmbedNodeView)
  },

  addCommands() {
    return {
      setVideoEmbed:
        ({ src }) =>
        ({ commands }) => {
          const info = parseVideoUrl(src)
          if (!info) return false

          return commands.insertContent({
            type: this.name,
            attrs: {
              src: info.embedUrl,
              provider: info.provider,
              videoId: info.videoId,
            },
          })
        },
    }
  },

  addPasteRules() {
    return [
      nodePasteRule({
        find: YOUTUBE_PASTE_REGEX,
        type: this.type,
        getAttributes: (match) => {
          const info = parseVideoUrl(match[0])
          if (!info) return false
          return {
            src: info.embedUrl,
            provider: info.provider,
            videoId: info.videoId,
          }
        },
      }),
      nodePasteRule({
        find: VIMEO_PASTE_REGEX,
        type: this.type,
        getAttributes: (match) => {
          const info = parseVideoUrl(match[0])
          if (!info) return false
          return {
            src: info.embedUrl,
            provider: info.provider,
            videoId: info.videoId,
          }
        },
      }),
    ]
  },
})
