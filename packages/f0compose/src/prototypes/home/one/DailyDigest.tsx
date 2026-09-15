/**
 * The digest itself, a screen below the composer (Angel, 2026-09-15): a
 * header and four boxes, two by two, on the same 712px column the input
 * stands on. The boxes are EMPTY on purpose for now — the frame is what
 * is being designed; what goes in them comes later.
 */
export function DailyDigest() {
  return (
    <section
      data-home-digest
      aria-label="Daily digest"
      className="flex w-[712px] max-w-full shrink-0 flex-col gap-4 pb-16 pt-10"
    >
      <header className="flex flex-col gap-1">
        <h2 className="text-2xl font-semibold text-f1-foreground">
          Your daily digest
        </h2>
        <p className="text-base text-f1-foreground-secondary">
          Tuesday 22 July · what One would tell you if you asked.
        </p>
      </header>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {[0, 1, 2, 3].map((box) => (
          <div
            key={box}
            className="h-40 rounded-xl border border-solid border-f1-border-secondary bg-f1-background"
          />
        ))}
      </div>
    </section>
  )
}
