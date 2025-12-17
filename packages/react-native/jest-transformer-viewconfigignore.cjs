// Custom Jest transformer for ViewConfigIgnore.js
// Returns the mock instead of transforming the file
const fs = require("fs");
const path = require("path");

module.exports = {
  process(sourceText, sourcePath) {
    // If this is ViewConfigIgnore.js, return the mock instead
    if (sourcePath && sourcePath.includes("ViewConfigIgnore.js")) {
      const mockPath = path.resolve(__dirname, "mocks/ViewConfigIgnore.js");
      // Read and return the mock file content directly
      const mockCode = fs.readFileSync(mockPath, "utf8");
      return {
        code: mockCode,
      };
    }
    // For other files, use default Babel transformation
    // This shouldn't be called for other files, but just in case
    const babelJest = require("babel-jest");
    return babelJest.default
      ? babelJest.default.process(sourceText, sourcePath)
      : babelJest.process(sourceText, sourcePath);
  },
};
