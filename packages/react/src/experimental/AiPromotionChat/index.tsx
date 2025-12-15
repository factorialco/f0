import { ButtonInternal } from "@/components/F0Button/internal"
import { Check, Cross } from "@/icons/app"
import { experimentalComponent } from "@/lib/experimental"

import { ChatTextarea, ChatWindow } from "./components"
import { ActionProps, CustomButton } from "./components/CustomButton"
import OneIcon from "./OneIcon"
import {
  AiPromotionChatStateProvider,
  useAiPromotionChat,
} from "./providers/AiPromotionChatStateProvider"

export type AiPromotionChatProviderProps = {
  enabled?: boolean
  greeting?: string
  title?: string
  description?: string
  benefits?: {
    noBoldText: string
    boldText: string
  }[]
  actions?: ActionProps[]
  onShow?: () => void
  onHide?: () => void
  children: React.ReactNode
}

const AiPromotionChatProviderCmp = ({
  enabled = false,
  greeting,
  title,
  description,
  benefits,
  actions,
  onShow,
  onHide,
  children,
}: AiPromotionChatProviderProps) => {
  return (
    <AiPromotionChatStateProvider
      enabled={enabled}
      greeting={greeting}
      title={title}
      description={description}
      benefits={benefits}
      actions={actions}
      onShow={onShow}
      onHide={onHide}
    >
      {children}
    </AiPromotionChatStateProvider>
  )
}

const AiPromotionChatCmp = () => {
  const {
    enabled,
    greeting,
    title,
    description,
    benefits,
    actions,
    setOpen,
    onHide,
  } = useAiPromotionChat()

  const handleClose = () => {
    setOpen(false)
    onHide?.()
  }

  if (!enabled) {
    return null
  }

  return (
    <div className="p-1 pl-0">
      <ChatWindow clickOutsideToClose hitEscapeToClose shortcut="">
        {/* Close button header */}
        <div className="flex items-center justify-end p-3 pb-0">
          <ButtonInternal
            variant="ghost"
            hideLabel
            label=""
            icon={Cross}
            onClick={handleClose}
          />
        </div>

        <div className="flex-1 content-center overflow-y-auto">
          <div className="flex flex-col gap-4 p-6 pt-3">
            {/* Header with icon and greeting */}
            <div className="flex flex-col gap-4">
              <OneIcon spin size="lg" />
              <div>
                <p className="text-lg font-medium text-f1-foreground-secondary">
                  {greeting}
                </p>
                <h1 className="text-2xl font-semibold text-f1-foreground">
                  {title}
                </h1>
              </div>
            </div>

            {/* Description */}
            {description && (
              <p className="text-md text-f1-foreground-secondary">
                {description}
              </p>
            )}

            {/* Benefits list */}
            {benefits?.length && (
              <ul className="flex flex-col gap-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-1">
                    <Check className="h-5 w-5 flex-shrink-0" />
                    <span className="text-md text-f1-foreground">
                      {benefit.noBoldText} <strong>{benefit.boldText}</strong>
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            {actions?.length && (
              <div className="flex flex-col gap-3 pt-2">
                {actions.map((action, index) => (
                  <CustomButton
                    key={index}
                    action={action}
                    onClose={() => setOpen(false)}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Disabled chat input fixed at the bottom */}
        <div className="m-3 mt-2 flex-shrink-0">
          <ChatTextarea />
        </div>
      </ChatWindow>
    </div>
  )
}

/**
 * @experimental This is an experimental component use it at your own risk
 */
const AiPromotionChat = experimentalComponent(
  "AiPromotionChat",
  AiPromotionChatCmp
)

const AiPromotionChatProvider = experimentalComponent(
  "AiPromotionChatProvider",
  AiPromotionChatProviderCmp
)

export { AiPromotionChat, AiPromotionChatProvider }
