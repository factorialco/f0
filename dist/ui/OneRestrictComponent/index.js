import { useMemo as i } from "react";
import { useIsDev as p } from "../../lib/providers/user-platafform/UserPlatformProvider.js";
const u = ({
  identifier: c,
  allowedRoutes: n,
  disallowedRoutes: r,
  children: m
}) => {
  const o = p(), e = window.location.pathname, h = i(() => n?.length ? n.includes(e) : r?.length ? !r.includes(e) : !0, [e, n, r]), f = i(() => {
    let t = `The component ${c} is not allowed to be rendered in the current route.`;
    return n && n.length > 0 && (t += ` Allowed routes: ${n.join(", ")}`), r && r.length > 0 && (t += ` Disallowed routes: ${r.join(", ")}`), t;
  }, [c, n, r]);
  return h ? m : (o && console.error(f), null);
};
export {
  u as OneRestrictComponent
};
