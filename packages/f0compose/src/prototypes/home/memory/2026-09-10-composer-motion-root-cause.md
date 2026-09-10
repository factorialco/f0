# Root cause: separate layout and animation ownership

Supersedes ancestor-observation correction. Composer was an absolute sibling outside Home content. Layout moved immediately, then ResizeObserver/requestAnimationFrame fed a separate 420ms transform transition. Updating coordinates fixed only the final position.

Reproduced -196px error approaching zero across frames. Previous test waited 500ms and missed it.

Structural fix: same original composer rendered through React portal in existing Home content slot, normal flow and natural question height. State and handlers remain in HybridHome. Non-home modes retain original geometry. Removed Home height writes and ancestor observer workaround.

Verified 35 frames each for collapse and expand, questions and normal composer: all four transitions maximum center error 0px. Typed draft preserved. Settled regression passes; screenshot inspected. Retained composer-motion.browser.cjs accepts PLAYWRIGHT_MODULE and HOME_QA_URL. User storage untouched.

Shared layout owns shared motion. Do not tune separate animation durations. Project guidance only, not a change to an external agent runner.
