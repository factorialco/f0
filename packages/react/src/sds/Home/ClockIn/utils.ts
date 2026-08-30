export const getNormalizedRemainingMinutes = (
  trackedMinutes: number | undefined,
  remainingMinutes: number | undefined
) => {
  const result =
    (remainingMinutes ?? 0) < -1 * (trackedMinutes ?? 0)
      ? -1 * (trackedMinutes ?? 0)
      : remainingMinutes

  return result ?? 0
}
