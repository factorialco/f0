import { collectionVisualizations as y } from "./collectionViewRegistry.js";
const f = ({
  visualization: t,
  source: e,
  onSelectItems: r,
  onLoadData: n,
  onLoadError: o,
  tmpFullWidth: i
}) => {
  if (t.type === "custom")
    return t.component({
      source: e,
      onLoadData: n,
      onLoadError: o,
      onSelectItems: r
    });
  const p = y[t.type];
  if (!p)
    throw new Error(`Visualization type ${t.type} not found`);
  return p.render({
    source: e,
    ...t.options,
    onSelectItems: r,
    onLoadData: n,
    onLoadError: o,
    tmpFullWidth: i
  });
};
export {
  f as VisualizationRenderer
};
