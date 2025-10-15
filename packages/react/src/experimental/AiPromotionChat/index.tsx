import { Check } from "@/icons/app"
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
  children: React.ReactNode
}

const AiPromotionChatProviderCmp = ({
  enabled = false,
  greeting,
  title,
  description,
  benefits,
  actions,
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
    >
      {children}
    </AiPromotionChatStateProvider>
  )
}

const AiPromotionChatCmp = () => {
  const { enabled, greeting, title, description, benefits, actions } =
    useAiPromotionChat()

  if (!enabled) {
    return null
  }

  return (
    <div className="p-1 pl-0">
      <ChatWindow clickOutsideToClose hitEscapeToClose shortcut="">
        <div className="flex-1 content-center overflow-y-auto">
          <div className="flex flex-col gap-4 p-6">
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
                  <CustomButton key={index} action={action} />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Disabled chat input fixed at the bottom */}
        <div className="flex-shrink-0">
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
