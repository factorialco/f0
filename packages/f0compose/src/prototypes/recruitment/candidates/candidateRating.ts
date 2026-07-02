/**
 * Maps a 1–4 candidate rating to a `status` value-display variant. Used in
 * the Rating column so each rating renders as a coloured pill containing the
 * numeric score.
 */
export function ratingStatusVariant(
  rating: number
): "critical" | "warning" | "info" | "positive" {
  if (rating <= 1) return "critical"
  if (rating === 2) return "warning"
  if (rating === 3) return "info"
  return "positive"
}
