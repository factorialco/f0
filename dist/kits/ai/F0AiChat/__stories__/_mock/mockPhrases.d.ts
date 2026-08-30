/**
 * Pools of random phrases the storybook mock streams as fake assistant
 * responses. Each call to `pickRandom*()` returns one entry — kept short
 * so the streaming animation finishes in a reasonable demo timeframe.
 */
export declare function pickRandomResponse(): string;
export declare function pickRandomThinkingSteps(count?: number): string[];
