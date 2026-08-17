import { useMemo } from "react"

import {
  CameraPlus,
  Desktop,
  Handshake,
  Microphone,
  MicrophoneNegative,
  Phone,
  Settings,
  VideoRecorder,
  VideoRecorderNegative,
} from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"

import {
  useF0MeetingRoster,
  useF0MeetingStable,
} from "../../providers/F0MeetingProvider"
import {
  type F0MeetingAction,
  type F0MeetingLocalSource,
  type F0MeetingPermission,
} from "../../types"

const permissionMessage = (
  permission: F0MeetingPermission | undefined,
  messages: Record<string, string>
): string | undefined => {
  switch (permission) {
    case "denied":
      return messages.blocked
    case "unavailable":
      return messages.unavailable
    case "in-use":
      return messages.inUse
    default:
      return undefined
  }
}

/**
 * The device picker is a control of its own next to the source it configures,
 * not a chevron hanging off it: a menu glued to a toggle turns one target into
 * two, and the small one always wins the misclick.
 */
const settingsAction = (
  id: string,
  source: F0MeetingLocalSource | undefined,
  label: string,
  icon: F0MeetingAction["icon"],
  priority: number
): F0MeetingAction | null => {
  if (!source?.devices?.length || !source.selectDevice) return null
  return {
    id,
    label,
    icon,
    // F0 owns the button; what it opens belongs to the host.
    onClick: () => {},
    priority,
    group: "media",
  }
}

/**
 * Builds the core actions from the runtime so hosts never reimplement mute.
 *
 * A capability the host lacks is rendered DISABLED with a reason rather than
 * removed: a control that silently disappears is more confusing than one that
 * explains itself. A feature the deployment does not have at all (no
 * `setScreenShareEnabled`) is the case that is genuinely omitted.
 */
export const useSynthesizedActions = (): F0MeetingAction[] => {
  const i18n = useI18n()
  const stable = useF0MeetingStable()
  const { localMedia, participants } = useF0MeetingRoster()

  const local = participants.find(
    (participant) => participant.id === stable.localParticipantId
  )
  const handRaised = Boolean(local?.raisedHandAt)

  return useMemo(() => {
    const actions: F0MeetingAction[] = []
    const capabilities = stable.capabilities

    const microphoneReason = permissionMessage(
      localMedia.microphone.permission,
      {
        blocked: i18n.meeting.microphoneBlocked,
        unavailable: i18n.meeting.microphoneUnavailable,
        inUse: i18n.meeting.microphoneInUse,
      }
    )

    actions.push({
      id: "core:microphone",
      label: localMedia.microphone.enabled
        ? i18n.meeting.turnOffMicrophone
        : i18n.meeting.turnOnMicrophone,
      icon: Microphone,
      activeIcon: MicrophoneNegative,
      pressed: !localMedia.microphone.enabled,
      pending: localMedia.microphone.pending,
      disabled:
        capabilities?.canPublishAudio === false || Boolean(microphoneReason),
      disabledReason: microphoneReason,
      onClick: () =>
        stable.setMicrophoneEnabled(!localMedia.microphone.enabled),
      pinned: true,
      priority: 90,
      group: "media",
    })

    const microphoneSettings = settingsAction(
      "core:microphoneSettings",
      localMedia.microphone,
      i18n.meeting.selectMicrophone,
      Settings,
      70
    )
    if (microphoneSettings) actions.push(microphoneSettings)

    const cameraReason = permissionMessage(localMedia.camera.permission, {
      blocked: i18n.meeting.cameraBlocked,
      unavailable: i18n.meeting.cameraUnavailable,
      inUse: i18n.meeting.cameraInUse,
    })

    actions.push({
      id: "core:camera",
      label: localMedia.camera.enabled
        ? i18n.meeting.turnOffCamera
        : i18n.meeting.turnOnCamera,
      icon: VideoRecorder,
      activeIcon: VideoRecorderNegative,
      pressed: !localMedia.camera.enabled,
      pending: localMedia.camera.pending,
      disabled:
        capabilities?.canPublishVideo === false || Boolean(cameraReason),
      disabledReason: cameraReason,
      onClick: () => stable.setCameraEnabled(!localMedia.camera.enabled),
      pinned: true,
      priority: 80,
      group: "media",
    })

    const cameraSettings = settingsAction(
      "core:cameraSettings",
      localMedia.camera,
      i18n.meeting.selectCamera,
      CameraPlus,
      65
    )
    if (cameraSettings) actions.push(cameraSettings)

    if (stable.hasScreenShare) {
      const sharing = Boolean(localMedia.screenShare?.enabled)
      actions.push({
        id: "core:screenShare",
        label: sharing ? i18n.meeting.stopSharing : i18n.meeting.shareScreen,
        icon: Desktop,
        pressed: sharing,
        pending: localMedia.screenShare?.pending,
        disabled: capabilities?.canShareScreen === false,
        onClick: () => stable.setScreenShareEnabled(!sharing),
        priority: 60,
        group: "media",
      })
    }

    if (stable.hasRaiseHand) {
      actions.push({
        id: "core:raiseHand",
        label: handRaised ? i18n.meeting.lowerHand : i18n.meeting.raiseHand,
        icon: Handshake,
        pressed: handRaised,
        onClick: () => stable.setHandRaised(!handRaised),
        priority: 40,
        group: "collab",
      })
    }

    actions.push({
      id: "core:leave",
      label: i18n.meeting.leave,
      icon: Phone,
      variant: "critical",
      onClick: () => stable.leave(),
      pinned: true,
      priority: 100,
      group: "leave",
    })

    return actions
  }, [i18n, stable, localMedia, handRaised])
}
