/**
 * A clock whose digits roll like a slot machine (Angel, 2026-09-15).
 *
 * Each digit is a strip of 0-9 inside a one-character window, translated
 * by the digit it should show: counting up rolls the strip up, and going
 * back down rolls it the other way, because the transform is animated
 * rather than the text swapped. No library — the prototype's imports are
 * fixed, and this is twenty lines of transform.
 */
export function RollingTime({
  value,
  className,
}: {
  /** Already formatted, e.g. "07:42". */
  value: string
  className?: string
}) {
  return (
    <span
      className={`inline-flex items-center tabular-nums ${className ?? ""}`}
      aria-label={value}
      role="timer"
    >
      {value.split("").map((character, index) =>
        /\d/.test(character) ? (
          <Digit key={index} digit={Number(character)} />
        ) : (
          <span key={index} aria-hidden className="px-px">
            {character}
          </span>
        )
      )}
    </span>
  )
}

function Digit({ digit }: { digit: number }) {
  return (
    <span
      aria-hidden
      // 1em tall and clipped, so only the current number shows through.
      className="relative inline-block h-[1.2em] w-[0.62em] overflow-hidden align-middle"
    >
      <span
        className="absolute inset-x-0 top-0 flex flex-col items-center"
        style={{
          transform: `translateY(${-digit * 1.2}em)`,
          transition: "transform 420ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <span key={number} className="h-[1.2em] leading-[1.2em]">
            {number}
          </span>
        ))}
      </span>
    </span>
  )
}
