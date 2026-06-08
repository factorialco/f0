import { generateText, type LanguageModel } from "ai";
import { parseSummaryJson } from "./formatters/json-formatter.js";
import type {
  SummaryBreakingChangeEntry,
  SummaryJson,
  SummaryStabilizedEntry,
} from "./types.js";

/**
 * Ask the LLM to rewrite the factual skeleton into product language with the
 * "why". The model receives the deterministic facts and returns the same JSON
 * shape — see `prompts/product-v3.md`.
 */
export async function polishSummary(
  model: LanguageModel,
  systemPrompt: string,
  skeleton: SummaryJson,
): Promise<SummaryJson> {
  const userMessage =
    "Here is this week's factual F0 summary as JSON. Rewrite it following " +
    "your instructions and return ONLY the JSON object.\n\n```json\n" +
    JSON.stringify(skeleton, null, 2) +
    "\n```";

  const { text } = await generateText({
    model,
    system: systemPrompt,
    prompt: userMessage,
  });

  return parseSummaryJson(text);
}

const keyOf = (c: string | undefined): string => (c ?? "").trim().toLowerCase();

/**
 * Merge the LLM's polished wording back onto the factual skeleton.
 *
 * Guardrail: the LLM may rewrite text and, for `new`/`enhancements`, DROP an
 * entry it judged not product-relevant — but it can NEVER introduce a component
 * that wasn't in the skeleton, and `component`/`author`/`url`/`storybook` and
 * the section a component lives in always come from the facts, not the model.
 */
export function reconcileSummary(
  skeleton: SummaryJson,
  polished: SummaryJson,
): SummaryJson {
  const pol = polished.sections ?? {};

  // Curatable: keep only polished entries that match a factual entry (drop
  // invented ones); the LLM may omit entries to curate. Never drop everything.
  const curate = <T extends { component: string; summary: string; detail?: string }>(
    skel: T[] | undefined,
    polArr:
      | Array<{ component?: string; summary?: string; detail?: string }>
      | undefined,
  ): T[] | undefined => {
    if (!skel || skel.length === 0) return skel;
    const byComp = new Map(skel.map((e) => [keyOf(e.component), e]));
    const seen = new Set<string>();
    const out: T[] = [];
    for (const p of polArr ?? []) {
      const k = keyOf(p.component);
      const s = byComp.get(k);
      if (!s || seen.has(k)) continue;
      seen.add(k);
      out.push({
        ...s,
        summary: p.summary?.trim() || s.summary,
        detail: p.detail?.trim() || s.detail,
      });
    }
    return out.length > 0 ? out : skel;
  };

  // Keep-all: high-value sections keep every factual entry; text only.
  const rewriteStable = (
    skel: SummaryStabilizedEntry[] | undefined,
    polArr:
      | Array<{ component?: string; summary?: string; detail?: string }>
      | undefined,
  ): SummaryStabilizedEntry[] | undefined => {
    if (!skel) return skel;
    const byComp = new Map((polArr ?? []).map((p) => [keyOf(p.component), p]));
    return skel.map((s) => {
      const p = byComp.get(keyOf(s.component));
      return {
        ...s,
        summary: p?.summary?.trim() || s.summary,
        detail: p?.detail?.trim() || s.detail,
      };
    });
  };

  const rewriteBreaking = (
    skel: SummaryBreakingChangeEntry[] | undefined,
    polArr:
      | Array<{ component?: string; summary?: string; migration?: string }>
      | undefined,
  ): SummaryBreakingChangeEntry[] | undefined => {
    if (!skel) return skel;
    const byComp = new Map((polArr ?? []).map((p) => [keyOf(p.component), p]));
    return skel.map((s) => {
      const p = byComp.get(keyOf(s.component));
      return {
        ...s,
        summary: p?.summary?.trim() || s.summary,
        migration: p?.migration?.trim() || s.migration,
      };
    });
  };

  return {
    sections: {
      ...(skeleton.sections.new
        ? { new: curate(skeleton.sections.new, pol.new) }
        : {}),
      ...(skeleton.sections.stabilized
        ? { stabilized: rewriteStable(skeleton.sections.stabilized, pol.stabilized) }
        : {}),
      ...(skeleton.sections.enhancements
        ? { enhancements: curate(skeleton.sections.enhancements, pol.enhancements) }
        : {}),
      ...(skeleton.sections.breaking_changes
        ? {
            breaking_changes: rewriteBreaking(
              skeleton.sections.breaking_changes,
              pol.breaking_changes,
            ),
          }
        : {}),
    },
    thread_details: polished.thread_details?.trim() || skeleton.thread_details,
  };
}
