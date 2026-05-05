export function formatDate(date: string | undefined): string | undefined {
  if (!date) return undefined
  const d = new Date(date)
  if (isNaN(d.getTime())) return date
  return d.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })
}
