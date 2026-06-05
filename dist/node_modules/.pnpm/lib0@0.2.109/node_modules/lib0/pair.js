class c {
  /**
   * @param {L} left
   * @param {R} right
   */
  constructor(t, s) {
    this.left = t, this.right = s;
  }
}
const e = (r, t) => new c(r, t);
export {
  c as Pair,
  e as create
};
