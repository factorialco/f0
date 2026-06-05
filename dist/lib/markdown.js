import o from "../node_modules/.pnpm/dompurify@3.3.3/node_modules/dompurify/dist/purify.es.js";
import { unified as t } from "../node_modules/.pnpm/unified@11.0.5/node_modules/unified/lib/index.js";
import p from "../node_modules/.pnpm/remark-parse@11.0.0/node_modules/remark-parse/lib/index.js";
import i from "../node_modules/.pnpm/remark-rehype@11.1.2/node_modules/remark-rehype/lib/index.js";
import n from "../node_modules/.pnpm/rehype-stringify@10.0.1/node_modules/rehype-stringify/lib/index.js";
const m = t().use(p).use(i).use(n);
function g(r) {
  const e = String(m.processSync(r));
  return o.sanitize(e, {
    ALLOWED_TAGS: ["strong", "b", "em", "i"],
    KEEP_CONTENT: !0
  });
}
function _(r) {
  return r.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\*(.+?)\*/g, "$1").replace(/__(.+?)__/g, "$1").replace(/_(.+?)_/g, "$1").replace(/\[(.+?)\]\(.+?\)/g, "$1").replace(/`(.+?)`/g, "$1");
}
export {
  g as parseMarkdown,
  _ as stripMarkdown
};
