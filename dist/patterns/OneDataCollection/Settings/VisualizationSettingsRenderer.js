import { collectionVisualizations as r } from "../visualizations/collection/collectionViewRegistry.js";
const s = (t) => {
  if (t === "custom")
    return null;
  const e = r[t];
  if (!e)
    throw new Error(`Visualization type ${t} not found`);
  return e;
}, n = (t) => s(t.type)?.settings.renderer ?? null, o = (t) => {
  if (t.type === "custom")
    return !1;
  const e = n(t);
  return e ? e(
    t.options
  ) !== null : !1;
}, u = ({
  visualization: t
}) => {
  if (t.type === "custom")
    return null;
  const e = n(t);
  return e ? e(
    t.options
  ) : null;
};
export {
  u as VisualizationSettingsRenderer,
  s as getVisualizationTypeRegistry,
  o as hasVisualizacionSettings
};
