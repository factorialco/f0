/**
 * Press feedback for the navigation's bespoke buttons: a 0.9 scale on the
 * shared ease-out, dropped entirely under reduced motion.
 *
 * It goes on the CHIP, not on the button, and reads the button's `group`:
 * scaling the whole item drags its label in with it, and a word sliding a
 * pixel toward its icon is the kind of movement you notice without being able
 * to say what moved. The chip is the thing being pressed.
 */
export const PRESSABLE_CHIP =
  "transition-[background-color,transform] duration-150 ease-out group-active:scale-90 motion-reduce:transition-none motion-reduce:group-active:scale-100"
