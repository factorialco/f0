import { jsx as f } from "react/jsx-runtime";
import { useSortable as a } from "../../../../../node_modules/.pnpm/@dnd-kit_sortable@10.0.0_@dnd-kit_core@6.3.1_react-dom@18.3.1_react@18.3.1__react@18.3.1__react@18.3.1/node_modules/@dnd-kit/sortable/dist/sortable.esm.js";
import { CSS as m } from "../../../../../node_modules/.pnpm/@dnd-kit_utilities@3.2.2_react@18.3.1/node_modules/@dnd-kit/utilities/dist/utilities.esm.js";
const S = ({ id: t, children: r }) => {
  const { attributes: o, listeners: e, setNodeRef: s, transform: n, transition: i } = a({ id: t }), l = {
    transform: m.Translate.toString(n),
    transition: i,
    flex: "1 1",
    display: "flex",
    flexDirection: "column"
  };
  return /* @__PURE__ */ f("div", { ref: s, style: l, ...o, ...e, children: r });
};
export {
  S as SortableBlock
};
