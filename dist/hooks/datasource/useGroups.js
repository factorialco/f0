import { useState as c, useEffect as u } from "react";
const a = (e, t) => e.reduce(
  (i, n) => (i[n.key] = typeof t == "boolean" ? t : t.includes(n.key), i),
  {}
), m = (e, t = []) => {
  const [i, n] = c(
    () => a(e, t)
  );
  return u(() => {
    const s = a(e, t);
    Object.values(s).length > 0 && n(s);
  }, [JSON.stringify(e), JSON.stringify(t)]), { openGroups: i, setGroupOpen: (s, r) => {
    n((y) => ({ ...y, [s]: r }));
  } };
}, l = {
  delay: 0.03,
  duration: 0.03,
  maxDelay: 20
}, d = (e) => {
  const { delay: t, duration: i, maxDelay: n } = {
    ...l,
    ...e
  };
  return {
    hidden: { opacity: 0, y: -10 },
    // Start position for the animation
    visible: (o) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: Math.min(o * t, n),
        // Delay each row based on its index
        duration: i,
        // Duration of the animation
        type: "spring",
        // Use a spring type animation for a bounce effect
        stiffness: 100,
        // Spring stiffness, adjust for more/less bounce
        damping: 10
        // Spring damping, adjust to change how the bounce behaves
      }
    })
  };
};
export {
  d as getAnimationVariants,
  m as useGroups
};
