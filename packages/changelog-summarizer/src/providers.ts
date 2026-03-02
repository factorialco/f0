import { createOpenAI } from "@ai-sdk/openai";
import { createAnthropic } from "@ai-sdk/anthropic";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { createGroq } from "@ai-sdk/groq";
import type { LanguageModel } from "ai";
import type { Provider } from "./types.js";

const DEFAULT_MODELS: Record<Provider, string> = {
  openai: "gpt-4o",
  anthropic: "claude-3-5-sonnet-latest",
  google: "gemini-1.5-pro",
  groq: "llama-3.3-70b-versatile",
};

const ENV_VAR_NAMES: Record<Provider, string> = {
  openai: "OPENAI_API_KEY",
  anthropic: "ANTHROPIC_API_KEY",
  google: "GOOGLE_GENERATIVE_AI_API_KEY",
  groq: "GROQ_API_KEY",
};

export function resolveApiKey(provider: Provider, cliApiKey?: string): string {
  if (cliApiKey) return cliApiKey;

  const envVar = ENV_VAR_NAMES[provider];
  const fromEnv = process.env[envVar];

  if (!fromEnv) {
    throw new Error(
      `No API key found for provider "${provider}". ` +
        `Pass --api-key or set the ${envVar} environment variable.`,
    );
  }

  return fromEnv;
}

export function resolveModel(
  provider: Provider,
  modelId: string | undefined,
  apiKey: string,
): LanguageModel {
  const model = modelId ?? DEFAULT_MODELS[provider];

  switch (provider) {
    case "openai":
      return createOpenAI({ apiKey })(model);
    case "anthropic":
      return createAnthropic({ apiKey })(model);
    case "google":
      return createGoogleGenerativeAI({ apiKey })(model);
    case "groq":
      return createGroq({ apiKey })(model);
    default: {
      const _exhaustive: never = provider;
      throw new Error(`Unknown provider: ${String(_exhaustive)}`);
    }
  }
}
