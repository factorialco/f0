// Babel plugin to skip transformation of ViewConfigIgnore.js
// This file uses TypeScript 5.0+ syntax that Hermes parser can't handle
module.exports = function () {
  return {
    visitor: {},
    pre() {
      // Check if this is ViewConfigIgnore.js and skip transformation
      if (
        this.file.opts.filename &&
        this.file.opts.filename.includes("ViewConfigIgnore.js")
      ) {
        // Return early to skip transformation
        this.file.path.skip();
      }
    },
  };
};
