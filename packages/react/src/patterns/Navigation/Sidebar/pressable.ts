/**
 * Press feedback for the navigation's bespoke buttons: a 0.95 scale on the
 * shared ease-out, dropped entirely under reduced motion.
 *
 * It goes on the CHIP, not on the button, and reads the button's `group`:
 * scaling the whole item drags its label in with it, and a word sliding a
 * pixel toward its icon is the kind of movement you notice without being able
 * to say what moved. The chip is the thing being pressed.
 *
 * `transform` only: the hover tint lands on the frame the pointer arrives,
 * with no fade. A 150ms cross-fade is right for a surface you are reading and
 * wrong for one you are aiming at — it makes a rail of six targets feel like
 * it is catching up with the cursor.
 */
export const PRESSABLE_CHIP =
  "transition-transform duration-150 ease-out group-active:scale-95 motion-reduce:transition-none motion-reduce:group-active:scale-100"
