import { jsx as C } from "react/jsx-runtime";
import { useState as c, useCallback as s, createContext as f, useContext as l } from "react";
const u = f(void 0), N = ({
  children: t
}) => {
  const [x, n] = c({}), i = s(
    (e, o) => {
      n((a) => ({
        ...a,
        [e]: o
      }));
    },
    []
  ), [D, r] = c({}), h = s(() => {
    n({}), r({});
  }, []), p = s((e, o) => {
    r((a) => {
      if (o) return { ...a, [e]: !0 };
      const d = { ...a };
      return delete d[e], d;
    });
  }, []);
  return /* @__PURE__ */ C(
    u.Provider,
    {
      value: {
        fetchedData: x,
        updateFetchedData: i,
        clearFetchedData: h,
        expandedRowIds: D,
        setRowExpanded: p
      },
      children: t
    }
  );
}, v = () => {
  const t = l(u);
  if (!t)
    throw new Error(
      "useNestedDataContext must be used within NestedDataProvider"
    );
  return t;
};
export {
  N as NestedDataProvider,
  v as useNestedDataContext
};
