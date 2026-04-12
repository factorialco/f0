import { IconType } from "@/components/F0Icon";

type enhanceTextParams = {
  text: string;
  selectedIntent?: string;
  customIntent?: string;
  context?: string;
};

type enhancedTextResponse = {
  success: boolean;
  text: string;
  error?: string;
};

type EnhancementOption = {
  id: string;
  label: string;
  icon?: IconType;
  subOptions?: EnhancementOption[];
};

type enhanceConfig = {
  onEnhanceText: (params: enhanceTextParams) => Promise<enhancedTextResponse>;
  enhancementOptions?: EnhancementOption[];
};

type lastIntentType = {
  selectedIntent?: string;
  customIntent?: string;
} | null;

export type {
  enhanceConfig,
  enhancedTextResponse,
  EnhancementOption,
  enhanceTextParams,
  lastIntentType,
};
