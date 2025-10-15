'use strict';

var nativewind = require('nativewind');

// src/lib/iconWithClassName.ts
function iconWithClassName(icon) {
  nativewind.cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true
      }
    }
  });
}

exports.iconWithClassName = iconWithClassName;
//# sourceMappingURL=iconWithClassName.js.map
//# sourceMappingURL=iconWithClassName.js.map