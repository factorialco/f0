import "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/index.js";
import { useCallback as s, useMemo as u } from "react";
import d from "../../../icons/app/Image.js";
import "../../../icons/app/Menu.js";
import f from "../../../icons/app/Table.js";
import { detectDataShape as g } from "../utils/chartDataAdapter.js";
import { chartDataToTabular as w } from "../utils/chartDataToTabular.js";
import { downloadAsImage as k, downloadAsExcel as y, downloadAsCsv as C } from "../utils/downloadHelpers.js";
import { useI18n as x } from "../../../lib/providers/i18n/i18n-provider.js";
import { getInstanceByDom as I } from "../../../node_modules/.pnpm/echarts@6.0.0/node_modules/echarts/lib/core/echarts.js";
function j(a) {
  const r = a.current?.querySelector(":scope > div");
  return r ? I(r) ?? null : null;
}
function U({
  chartContainerRef: a,
  chartConfig: r,
  data: n,
  title: e
}) {
  const { t } = x(), c = s(
    (o) => {
      const i = j(a);
      if (!i) return;
      const b = o === "jpg" ? "jpeg" : "png", D = i.getDataURL({
        type: b,
        pixelRatio: 2,
        ...o === "jpg" ? { backgroundColor: "#fff" } : {}
      });
      k(D, e, o);
    },
    [a, e]
  ), l = u(() => {
    if (!n) return r;
    const o = g(n, r.type);
    return o !== r.type ? { ...r, type: o } : r;
  }, [r, n]), m = s(() => {
    if (!n) return;
    const o = w(l, n);
    y(o.columns, o.rows, e);
  }, [l, n, e]), p = s(() => {
    if (!n) return;
    const o = w(l, n);
    C(o.columns, o.rows, e);
  }, [l, n, e]);
  return u(() => n ? [
    {
      label: t("ai.dataDownload.download", { format: "PNG" }),
      icon: d,
      onClick: () => c("png")
    },
    {
      label: t("ai.dataDownload.download", { format: "JPG" }),
      icon: d,
      onClick: () => c("jpg")
    },
    {
      type: "separator"
    },
    {
      label: t("ai.dataDownload.download", { format: "Excel" }),
      icon: f,
      onClick: m
    },
    {
      label: t("ai.dataDownload.download", { format: "CSV" }),
      icon: f,
      onClick: p
    }
  ] : [], [n, t, c, m, p]);
}
export {
  U as useChartDownloadActions
};
