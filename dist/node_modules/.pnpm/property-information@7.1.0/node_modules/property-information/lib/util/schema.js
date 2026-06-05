class t {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(p, r, o) {
    this.normal = r, this.property = p, o && (this.space = o);
  }
}
t.prototype.normal = {};
t.prototype.property = {};
t.prototype.space = void 0;
export {
  t as Schema
};
