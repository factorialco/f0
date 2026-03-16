import { generateText } from "ai";
import type { LanguageModel } from "ai";
import type { CollectedContext } from "./types.js";
import { buildContextMessage } from "./formatters/markdown.js";

export async function generateSummary(
  model: LanguageModel,
  systemPrompt: string,
  context: CollectedContext,
): Promise<string> {
  const userMessage = buildContextMessage(
    context.changelogs,
    context.commits,
    context.from,
    context.to,
  );

  const { text } = await generateText({
    model,
    system: systemPrompt,
    prompt: userMessage,
  });

  return text;
}
