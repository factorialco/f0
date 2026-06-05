import { Extension as r } from "../../../../../node_modules/.pnpm/@tiptap_core@2.24.0_@tiptap_pm@2.24.0/node_modules/@tiptap/core/dist/index.js";
import { Plugin as n, PluginKey as a } from "../../../../../node_modules/.pnpm/prosemirror-state@1.4.3/node_modules/prosemirror-state/dist/index.js";
const s = /\xA0|&nbsp;|&#0*160;|&#[xX]0*[aA]0;/g, e = (t) => t.replace(s, " "), p = r.create({
  name: "pasteSanitizer",
  addProseMirrorPlugins() {
    return [
      new n({
        key: new a("pasteSanitizer"),
        props: {
          transformPastedHTML: e,
          transformPastedText: e
        }
      })
    ];
  }
});
export {
  p as PasteSanitizer,
  e as sanitizePasted
};
