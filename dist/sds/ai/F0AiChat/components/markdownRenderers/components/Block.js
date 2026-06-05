import { jsx as o } from "react/jsx-runtime";
import { cn as a } from "../../../../../../lib/utils.js";
function d({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ o(
    "pre",
    {
      ...r,
      className: a(
        "relative mx-0 overflow-x-auto whitespace-pre-wrap rounded-md bg-f1-background-secondary p-2",
        r.className
      ),
      children: e
    }
  );
}
function c({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ o(
    "code",
    {
      ...r,
      className: a(
        // Inline default
        "rounded bg-f1-background-secondary px-1 py-0.5 font-mono text-base text-f1-foreground",
        // Reset inside <pre> — let the parent handle the surface
        "[pre_&]:rounded-none [pre_&]:bg-transparent [pre_&]:p-0 [pre_&]:text-base",
        r.className
      ),
      children: e
    }
  );
}
function s({
  children: e,
  ...r
}) {
  return /* @__PURE__ */ o(
    "blockquote",
    {
      ...r,
      className: a(
        "mr-1 my-2 mb-2.5 border-0 border-l-4 border-solid border-f1-border pl-3 text-base",
        r.className
      ),
      children: e
    }
  );
}
function b({ ...e }) {
  return /* @__PURE__ */ o(
    "hr",
    {
      ...e,
      className: a("my-3 border-0 border-t border-f1-border", e.className)
    }
  );
}
export {
  s as Blockquote,
  c as Code,
  b as Hr,
  d as Pre
};
