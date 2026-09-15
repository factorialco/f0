import { type ReactNode } from "react"
import { F0Checkbox } from "@/components/F0Checkbox"
import { F0Select } from "@/components/F0Select"
import { F0Dialog } from "@/patterns/F0Dialog"
import { mockCopy } from "./mockCopy"
import { type MockCommunityOption } from "./mockPostComposerTypes"

/**
 * The last step before a post goes out: WHERE it lands and WHO hears about it.
 *
 * These three fields are in a dialog rather than the form because they are
 * decisions about the audience, not about the writing — and because the moment
 * to make them is when you are done, not while you are drafting. That is the
 * product's arrangement and it is the right one.
 */
export const PublishDialog = ({
  communities,
  communityId,
  allowCommentsAndReactions,
  sendNotifications,
  submitting,
  error,
  onCommunityChange,
  onAllowInteractionsChange,
  onSendNotificationsChange,
  onPublish,
  onClose,
}: {
  communities: MockCommunityOption[]
  communityId: string | null
  allowCommentsAndReactions: boolean
  sendNotifications: boolean
  submitting: boolean
  error?: string
  onCommunityChange: (id: string) => void
  onAllowInteractionsChange: (next: boolean) => void
  onSendNotificationsChange: (next: boolean) => void
  onPublish: () => void
  onClose: () => void
}): ReactNode => {
  return (
    <F0Dialog
      isOpen
      onClose={onClose}
      width="sm"
      title={mockCopy.composer.publishTitle}
      description={mockCopy.composer.publishDescription}
      primaryAction={{
        label: mockCopy.composer.publish,
        onClick: onPublish,
        // No community, no post — the one thing this dialog exists to collect.
        disabled: submitting || !communityId,
        loading: submitting,
      }}
      secondaryAction={{
        label: mockCopy.composer.cancel,
        onClick: onClose,
        disabled: submitting,
      }}
    >
      <div className="flex flex-col gap-4">
        <F0Select
          label={mockCopy.composer.selectCommunity}
          placeholder={mockCopy.composer.selectCommunity}
          value={communityId ?? undefined}
          onChange={onCommunityChange}
          disabled={submitting}
          error={error}
          options={communities.map((community) => ({
            value: community.id,
            label: community.title,
          }))}
        />
        <F0Checkbox
          title={mockCopy.composer.allowCommentsAndReactions}
          checked={allowCommentsAndReactions}
          onCheckedChange={onAllowInteractionsChange}
          disabled={submitting}
        />
        <F0Checkbox
          title={mockCopy.composer.sendEmailNotification}
          checked={sendNotifications}
          onCheckedChange={onSendNotificationsChange}
          disabled={submitting}
        />
      </div>
    </F0Dialog>
  )
}
