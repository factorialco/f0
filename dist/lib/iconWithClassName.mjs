import { cssInterop } from 'nativewind';

// src/lib/iconWithClassName.ts
function iconWithClassName(icon) {
  cssInterop(icon, {
    className: {
      target: "style",
      nativeStyleToProp: {
        color: true,
        opacity: true
      }
    }
  });
}

export { iconWithClassName };
//# sourceMappingURL=iconWithClassName.mjs.map
//# sourceMappingURL=iconWithClassName.mjs.map