/**
 * This is a list of class names that are used to style the value display components in the table.
 * The base case is that the value display can not be centered manually as some value can use a lot of height (e.g. longText), and we want to center the texts, not wrapper.
 *
 * `text` gets a small top nudge so single-line text reads as optically centered
 * within the top-aligned cell (glyphs sit high in their line box).
 * Avatars are fixed-size boxes that the cell padding already centers, so they must
 * NOT get that nudge — the extra top padding pushes them down and makes the top/bottom
 * gaps uneven, which is especially visible on square (team) avatars.
 */
export const tableDisplayClassNames = {
  text: "pt-0.5",
  avatar: "",
  avatarList: "",
}
