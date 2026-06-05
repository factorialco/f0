import { useState as d, useMemo as f, useEffect as p } from "react";
import { useDebounceCallback as b } from "../../../../node_modules/.pnpm/usehooks-ts@3.1.1_react@18.3.1/node_modules/usehooks-ts/dist/index.js";
import { useDataCollectionStorage as h } from "../../../../lib/providers/datacollection/DataCollectionStorageProvider.js";
import { getFeatures as O } from "./getFeatures.js";
import { validateStorageKey as j } from "./validateStorageKey.js";
const V = (e, m, a, g) => {
  const [i, u] = d(!1), c = h();
  e && !j(e) && console.error(
    `Invalid storage key format: "${e}". Key must follow the format "name/version" where name can be a path (e.g., "employees/list/") and version must start with "v" (e.g., "v1", "v2.1").`
  );
  const l = f(
    // Settings is always included
    () => [...O(m), "settings"],
    // eslint-disable-next-line react-hooks/exhaustive-deps -- This is intentional
    [JSON.stringify(m)]
  ), s = f(() => !g && !!e, [g, e]);
  p(() => {
    if (!s) {
      u(!0);
      return;
    }
    u(!1), c.get(e).then((n) => {
      Object.entries(a).forEach(
        ([t, r]) => {
          if (l.includes(
            t
          )) {
            const o = n[t];
            o !== void 0 && r.setValue(
              o
            );
          }
        }
      ), u(!0);
    });
  }, [e, s]);
  const S = f(
    () => JSON.stringify(
      Object.entries(a).map(
        ([n, t]) => [
          n,
          t.value
        ]
      )
    ),
    [a]
  ), v = b(
    (n) => {
      if (!s || !i)
        return;
      const t = Object.fromEntries(
        Object.entries(n).map(([r, o]) => l.includes(r) ? [r, o.value] : [r, void 0]).filter(([r, o]) => o !== void 0)
      );
      if (Object.keys(t).length === 0) {
        c.set(e, {});
        return;
      }
      c.set(e, t);
    },
    200
  );
  return p(() => {
    if (!(!s || !i))
      return v(a), () => {
        v.cancel();
      };
  }, [
    e,
    l,
    c,
    i,
    s,
    S
  ]), {
    storageReady: i
  };
};
export {
  V as useDataCollectionStorage
};
