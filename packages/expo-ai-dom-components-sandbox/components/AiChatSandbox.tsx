'use dom'

import { useEffect } from 'react'
import {
  AiChatProvider,
  AiFullscreenChat,
  TranslationsType,
  defaultTranslations,
  I18nProvider,
} from '@factorialco/f0-react/dist/ai'
import { useCoAgent } from '@copilotkit/react-core'
import '@factorialco/f0-react/dist/styles.css'

/**
 * Inner component that uses CopilotKit hooks.
 * Must be rendered inside AiChatProvider to access the CopilotKit context.
 */
const AiAgentChatContent = () => {
  // Setup sharedState with platform: mobile for the backend agent
  // This state will be sent to the backend with each CopilotKit API call
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { state: _sharedState } = useCoAgent<{ platform: 'mobile' }>({
    name: 'one-workflow',
    initialState: { platform: 'mobile' },
  })

  // Note: The sharedState.platform will always be 'mobile' in this component
  // This allows the backend agent to know requests come from mobile

  return <AiFullscreenChat />
}

interface AiChatSandboxProps {
  // AI agent endpoint URL from environment config
  aiAgentEndpoint?: string

  // Translations object for i18n support
  translations?: Partial<TranslationsType>

  // Callback when component is loaded and ready
  onLoad?: () => void
}

/**
 * Sandbox component that mimics the behavior of AiAgentDomComponent
 * used in the mobile app. This allows rapid iteration on react/ai components.
 */
const AiChatSandbox = ({
  aiAgentEndpoint = 'http://mastra.local.factorial.dev:4111/api',
  translations,
  onLoad,
}: AiChatSandboxProps) => {
  // Merge translations with defaultTranslations as fallback
  const aiTranslations: TranslationsType = {
    ...defaultTranslations,
    ...translations,
  }

  // Notify parent when component is loaded
  useEffect(() => {
    if (onLoad) {
      // Small delay to ensure DOM is fully rendered
      const timer = setTimeout(() => {
        onLoad()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [onLoad])

  // Guard: Don't render if aiAgentEndpoint is missing
  if (!aiAgentEndpoint || aiAgentEndpoint.trim() === '') {
    return null
  }

  return (
    <I18nProvider translations={aiTranslations}>
      <AiChatProvider
        runtimeUrl={aiAgentEndpoint}
        credentials="include"
        agent="one-workflow"
        enabled
      >
        <AiAgentChatContent />
      </AiChatProvider>
    </I18nProvider>
  )
}

export default AiChatSandbox
