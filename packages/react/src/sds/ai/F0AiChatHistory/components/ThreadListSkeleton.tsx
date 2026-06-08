export function ThreadListSkeleton() {
  return (
    <div className="flex flex-col gap-2 py-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-between gap-3 rounded-lg px-3 py-2"
        >
          <div className="h-5 w-full animate-pulse rounded bg-f1-background-secondary" />
          <div className="h-5 w-6 animate-pulse rounded bg-f1-background-secondary" />
        </div>
      ))}
    </div>
  )
}
