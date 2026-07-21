import { jsx as r } from "react/jsx-runtime";
import { D as l, P as d, e as s } from "./pdfWorker-BPHPphPX.js";
s();
const f = ({
  url: n,
  width: o,
  onError: e,
  onRendered: a
}) => (
  // No inner loading skeletons: the card keeps its own skeleton UNDER this
  // layer and fades the snapshot in over it once the page paints.
  /* @__PURE__ */ r(
    l,
    {
      file: n,
      loading: null,
      error: null,
      onLoadError: e,
      onSourceError: e,
      children: /* @__PURE__ */ r(
        d,
        {
          pageNumber: 1,
          width: o,
          renderTextLayer: !1,
          renderAnnotationLayer: !1,
          loading: null,
          error: null,
          onRenderError: e,
          onRenderSuccess: a
        }
      )
    }
  )
);
export {
  f as default
};
