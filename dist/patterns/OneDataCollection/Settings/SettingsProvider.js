import { jsx as u } from "react/jsx-runtime";
import { useContext as r, createContext as c, useState as g } from "react";
import { collectionVisualizations as f } from "../visualizations/collection/collectionViewRegistry.js";
const z = () => {
  const t = {};
  for (const [n, i] of Object.entries(f))
    i.settings.default && (t[n] = { ...i.settings.default });
  return t;
}, a = c({
  setSettings: () => {
  },
  settings: {
    // To avoid circular dependency initializating the settings (the value is provided in the provider)
    visualization: {}
  },
  setVisualizationSettings: () => {
  }
}), d = () => {
  const t = r(a);
  if (!t)
    throw new Error(
      "useTableSettings must be used within a TableSettingsProvider"
    );
  return t;
}, x = ({
  children: t
}) => {
  const [n, i] = g({
    visualization: z()
  }), l = (s, o) => {
    i(typeof o == "function" ? (e) => ({
      ...e,
      visualization: {
        ...e.visualization,
        [s]: o(e.visualization[s])
      }
    }) : (e) => ({
      ...e,
      visualization: { ...e.visualization, [s]: o }
    }));
  };
  return /* @__PURE__ */ u(
    a.Provider,
    {
      value: { settings: n, setSettings: i, setVisualizationSettings: l },
      children: t
    }
  );
};
export {
  x as DataCollectionSettingsProvider,
  d as useDataCollectionSettings
};
