/**
 * A display name split into the halves an avatar wants.
 *
 * F0 carries ONE name because that is what a bubble shows; the avatar wants the
 * halves for its initials. Splitting on the first space is the same
 * approximation the transcript already makes, and it degrades cleanly: a
 * single-word name simply has no last name.
 */
export const splitName = (
  name: string
): { firstName: string; lastName: string } => {
  const spaceAt = name.indexOf(" ")
  return spaceAt === -1
    ? { firstName: name, lastName: "" }
    : {
        firstName: name.slice(0, spaceAt).trim(),
        lastName: name.slice(spaceAt + 1).trim(),
      }
}
