import { type ReactNode, useEffect, useState } from "react"

import { F0AvatarFile } from "@/components/avatars/F0AvatarFile"
import { ButtonInternal } from "@/components/F0Button/internal"
import { Cross } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { Spinner } from "@/ui/Spinner"

import { type F0ChatAttachment } from "../types"
import {
  documentPreviewKind,
  isVideoFileAttachment,
  withinPreviewSizeLimit,
} from "../utils/attachments"
import { ChatDocumentAttachmentCard } from "./ChatDocumentAttachmentCard"
import { ChatLocationAttachment } from "./ChatLocationAttachment"
import { ChatVoiceAttachment } from "./ChatVoiceAttachment"
import { FadeInImage } from "./FadeInImage"

const PreviewProgress = (): ReactNode => (
  <div
    className="shadow-sm pointer-events-none absolute bottom-2 left-2 z-20 flex rounded bg-f1-background p-1"
    data-testid="chat-composer-attachment-uploading"
  >
    <Spinner size="small" />
  </div>
)

/**
 * Preview for an attachment waiting in the composer. Images and videos use
 * compact media thumbnails, previewable documents reuse the message snapshot,
 * and voice/location attachments keep their native representation. Unknown
 * files use the same square footprint with their file-type avatar.
 */
export const ChatComposerAttachmentPreview = ({
  attachment,
  uploading,
  onRemove,
}: {
  attachment: F0ChatAttachment
  uploading: boolean
  onRemove: () => void
}): ReactNode => {
  const i18n = useI18n()
  const [videoPreviewFailed, setVideoPreviewFailed] = useState(false)
  const attachmentUrl = "url" in attachment ? attachment.url : undefined
  useEffect(() => setVideoPreviewFailed(false), [attachmentUrl])
  const removeAction = {
    label: i18n.t("chat.removeNamedFile", {
      name:
        attachment.kind === "location"
          ? (attachment.name ?? i18n.chat.location)
          : attachment.kind === "voice"
            ? i18n.chat.voiceNote
            : attachment.name,
    }),
    icon: Cross,
    onClick: onRemove,
  }

  if (attachment.kind === "image") {
    return (
      <figure
        aria-label={attachment.name}
        aria-busy={uploading}
        className="group/attachment relative m-0 flex h-16 w-16 shrink-0"
        data-testid="chat-composer-image-preview"
      >
        <FadeInImage
          src={attachment.thumbnailUrl ?? attachment.url}
          alt={attachment.name}
          className="h-16 w-16 rounded-lg border border-solid border-f1-border-secondary object-cover"
        />
        <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
          <ButtonInternal
            variant="outline"
            size="sm"
            hideLabel
            label={removeAction.label}
            icon={removeAction.icon}
            onClick={removeAction.onClick}
          />
        </div>
        {uploading && <PreviewProgress />}
        <figcaption className="sr-only">{attachment.name}</figcaption>
      </figure>
    )
  }

  if (attachment.kind === "file") {
    if (isVideoFileAttachment(attachment) && !videoPreviewFailed) {
      return (
        <figure
          aria-label={attachment.name}
          aria-busy={uploading}
          className="group/attachment relative m-0 box-border h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary"
          data-testid="chat-composer-video-preview"
        >
          {/* This is a silent, non-interactive visual preview. Playback and its
              accessible captions remain in F0VideoPlayer after sending. */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={attachment.url}
            poster={attachment.thumbnailUrl}
            muted
            playsInline
            preload="auto"
            onError={() => setVideoPreviewFailed(true)}
            onLoadedMetadata={(event) => {
              // Browsers often paint black at exactly 0s until playback starts.
              // Keep a host poster intact; otherwise seek to a decoded frame.
              if (
                !attachment.thumbnailUrl &&
                event.currentTarget.currentTime === 0
              ) {
                const { duration } = event.currentTarget
                event.currentTarget.currentTime = Number.isFinite(duration)
                  ? Math.min(1, duration / 2)
                  : 1
              }
            }}
            aria-hidden="true"
            className="pointer-events-none h-full w-full object-cover"
          />
          <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
            <ButtonInternal
              variant="outline"
              size="sm"
              hideLabel
              label={removeAction.label}
              icon={removeAction.icon}
              onClick={removeAction.onClick}
            />
          </div>
          {uploading && <PreviewProgress />}
          <figcaption className="sr-only">{attachment.name}</figcaption>
        </figure>
      )
    }

    const documentKind = documentPreviewKind(attachment)
    if (documentKind && withinPreviewSizeLimit(attachment, documentKind)) {
      return (
        <div
          aria-busy={uploading}
          className="relative flex"
          data-testid="chat-composer-document-preview"
        >
          <ChatDocumentAttachmentCard
            file={attachment}
            kind={documentKind}
            cornerClass="rounded-lg"
            action={removeAction}
            previewDisabled={uploading}
            compact
          />
          {uploading && <PreviewProgress />}
        </div>
      )
    }

    return (
      <div
        aria-busy={uploading}
        className="group/attachment relative box-border flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background-secondary"
        data-testid="chat-composer-file-preview"
      >
        <F0AvatarFile
          file={{
            name: attachment.name,
            type: attachment.mimeType ?? "",
          }}
          size="md"
        />
        <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
          <ButtonInternal
            variant="outline"
            size="sm"
            hideLabel
            label={removeAction.label}
            icon={removeAction.icon}
            onClick={removeAction.onClick}
          />
        </div>
        {uploading && <PreviewProgress />}
        <span className="sr-only">{attachment.name}</span>
      </div>
    )
  }

  if (attachment.kind === "voice") {
    return (
      <div
        aria-busy={uploading}
        className="group/attachment relative flex"
        data-testid="chat-composer-voice-preview"
      >
        <ChatVoiceAttachment
          voice={attachment}
          cornerClass="rounded-lg"
          className="pr-12"
        />
        <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
          <ButtonInternal
            variant="outline"
            size="sm"
            hideLabel
            label={removeAction.label}
            icon={removeAction.icon}
            onClick={removeAction.onClick}
          />
        </div>
        {uploading && <PreviewProgress />}
      </div>
    )
  }

  return (
    <div
      aria-busy={uploading}
      className="group/attachment relative flex"
      data-testid="chat-composer-location-preview"
    >
      <ChatLocationAttachment location={attachment} cornerClass="rounded-lg" />
      <div className="absolute right-1 top-1 z-30 flex rounded bg-f1-background opacity-0 transition-opacity focus-within:opacity-100 group-hover/attachment:opacity-100">
        <ButtonInternal
          variant="outline"
          size="sm"
          hideLabel
          label={removeAction.label}
          icon={removeAction.icon}
          onClick={removeAction.onClick}
        />
      </div>
      {uploading && <PreviewProgress />}
    </div>
  )
}
