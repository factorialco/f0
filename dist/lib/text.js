'use strict';

var react = require('react');

// src/lib/text.ts
var textFormatEnforcer = (text, rules) => {
  if (rules.disallowEmpty && text.length === 0) {
    throw Error("You need to provide some text that is not empty");
  }
  if (rules.maxLength !== void 0 && text.length > rules.maxLength) {
    throw Error(
      `"${text}" should have no more than ${rules.maxLength} characters`
    );
  }
  if (rules.minLength !== void 0 && text.length < rules.minLength) {
    throw Error(`"${text}" should have at least ${rules.minLength} characters`);
  }
};
var useTextFormatEnforcer = (text, rules) => {
  react.useEffect(() => {
    if (text !== void 0 && rules) {
      textFormatEnforcer(text, rules);
    }
  }, [text, rules]);
};

exports.useTextFormatEnforcer = useTextFormatEnforcer;
//# sourceMappingURL=text.js.map
//# sourceMappingURL=text.js.map