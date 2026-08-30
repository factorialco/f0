import { TranscribeFn } from '../../kits/ai/F0AiChat/types';
/**
 * Builds a streaming STT mock from a pool of transcripts: picks a random one and
 * emits it word by word so the surface fills live (Wispr Flow feel) without any
 * backend. Use this to make voice dictation contextual to a given flow (e.g.
 * survey-refinement phrasing in the AI Cocreation story) instead of the generic
 * pool below.
 */
export declare const makeMockTranscribe: (transcripts: readonly string[]) => TranscribeFn;
/**
 * Default streaming STT mock over the generic transcript pool above. Backs the
 * `WithVoiceDictation` stories that aren't tied to a specific flow.
 */
export declare const mockTranscribe: TranscribeFn;
type MockEnhanceParams = {
    text: string;
    selectedIntent?: string;
    customIntent?: string;
    context?: string;
};
type MockEnhanceResponse = {
    success: boolean;
    error?: string;
    text: string;
};
/**
 * Simulates an AI enhance endpoint: resolves after a random delay with a
 * random long rich-text response. Selecting the "error" intent exercises the
 * failure path.
 */
export declare const mockEnhanceText: (params: MockEnhanceParams) => Promise<MockEnhanceResponse>;
export {};
