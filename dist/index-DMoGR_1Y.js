import { m as L } from "./F0CanvasPanel-CkjDoK5W.js";
const O = (e) => e.map(([n, s]) => ({ lat: s, lng: n })), x = (e, n) => ({
  strokeColor: n && e.hover?.color || e.color,
  strokeWeight: n && e.hover?.width || e.width,
  strokeOpacity: e.dashed ? 0 : (n ? e.hover?.opacity : void 0) ?? e.opacity,
  // Google has no dash array on a stroke: a dashed line is an invisible stroke
  // carrying repeated dot symbols, spaced to match MapLibre's [1.5, 2.8].
  icons: e.dashed ? [
    {
      icon: {
        path: "M 0,-1 0,1",
        strokeOpacity: (n ? e.hover?.opacity : void 0) ?? e.opacity,
        strokeWeight: n && e.hover?.width || e.width,
        scale: 1
      },
      offset: "0",
      repeat: `${(n && e.hover?.width || e.width) * 2.9}px`
    }
  ] : void 0
}), T = (e) => {
  let n = [];
  const s = () => {
    for (const a of n)
      a.listeners.forEach((i) => i.remove()), a.polyline.setMap(null);
    n = [];
  };
  return {
    set: (a, i) => {
      s(), n = a.map((m) => {
        const l = new google.maps.Polyline({
          map: e,
          path: O(m.coordinates),
          clickable: !!i,
          ...x(m, !1)
        }), p = [];
        return i && p.push(
          l.addListener("mouseover", () => {
            l.setOptions(x(m, !0)), e.setOptions({ draggableCursor: "pointer" });
          }),
          l.addListener("mouseout", () => {
            l.setOptions(x(m, !1)), e.setOptions({ draggableCursor: null });
          }),
          l.addListener("click", () => i(m.id))
        ), { line: m, polyline: l, listeners: p };
      });
    },
    destroy: s
  };
}, w = "__f0GoogleMapsReady";
let f;
const k = (e) => f || (f = new Promise((n, s) => {
  const a = window;
  a[w] = () => {
    Reflect.deleteProperty(a, w), n();
  };
  const i = document.createElement("script");
  i.async = !0, i.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(e)}&v=weekly&libraries=maps&callback=${w}`, i.onerror = () => {
    f = void 0, s(new Error("F0Map: the Google Maps JavaScript API failed to load."));
  }, document.head.appendChild(i);
}), f), E = (e) => {
  const n = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
  let a, i = !1, m = !1;
  const l = (t, c) => {
    const o = c.fromLatLngToDivPixel(
      new google.maps.LatLng(t.at[1], t.at[0])
    );
    o && (t.element.style.transform = `translate(${o.x}px, ${o.y}px) translate(-50%, -50%)`);
  };
  class p extends google.maps.OverlayView {
    onAdd() {
      a = document.createElement("div"), a.style.cssText = "position:absolute;left:0;top:0;width:0;height:0";
      for (const c of n)
        a.appendChild(c.element);
      this.getPanes()?.overlayMouseTarget.appendChild(a);
    }
    draw() {
      const c = this.getProjection();
      if (c) {
        for (const o of n)
          l(o, c);
        i || (i = !0, s.forEach((o) => o()));
      }
    }
    onRemove() {
      a?.remove(), a = void 0;
    }
  }
  const g = new p();
  g.setMap(e);
  const r = () => m ? void 0 : g.getProjection();
  return {
    add: (t, c) => {
      const o = { element: t, at: c };
      n.add(o), t.style.position = "absolute", a?.appendChild(t);
      const d = r();
      return d && l(o, d), {
        setPosition: (y) => {
          o.at = y;
          const h = r();
          h && l(o, h);
        },
        remove: () => {
          n.delete(o), t.remove();
        }
      };
    },
    project: (t) => {
      const c = r();
      if (!c)
        return null;
      const o = c.fromLatLngToContainerPixel(
        new google.maps.LatLng(t[1], t[0])
      );
      return o ? { x: o.x, y: o.y } : null;
    },
    unproject: (t) => {
      const c = r();
      if (!c)
        return null;
      const o = c.fromContainerPixelToLatLng(
        new google.maps.Point(t.x, t.y)
      );
      return o ? [o.lng(), o.lat()] : null;
    },
    onReady: (t) => i ? (t(), () => {
    }) : (s.add(t), () => s.delete(t)),
    isReady: () => i,
    destroy: () => {
      m = !0, i = !1, s.clear();
      for (const t of n)
        t.element.remove();
      n.clear(), g.setMap(null);
    }
  };
}, A = {
  globeProjection: !1,
  /**
   * `panTo` / `moveCamera` / `setZoom` all report the destination in the same
   * tick - measured - and the API exposes no duration or easing, so a flight
   * cannot be read or interrupted from the model even though the renderer does
   * glide.
   */
  observableFlight: !1
}, C = (e) => e, v = ([e, n]) => ({ lat: n, lng: e }), $ = {
  move: "bounds_changed",
  zoom: "zoom_changed",
  click: "click",
  styled: "idle"
}, b = 5.3, R = 11 - b, _ = (e) => {
  const n = document.createElement("div");
  n.style.cssText = "position:absolute;inset:0", e.container.appendChild(n);
  const s = new google.maps.Map(n, {
    center: v(e.center),
    zoom: e.zoom,
    minZoom: e.minZoom,
    maxZoom: e.maxZoom,
    // No `mapId`, deliberately: with one, `styles` is ignored and the theme can
    // only change in the Cloud console - and it is immutable after the first
    // render, so a light/dark swap would mean destroying the map.
    styles: C(e.style),
    disableDefaultUI: !0,
    gestureHandling: e.interactive ? e.cooperativeGestures ? "cooperative" : "greedy" : "none"
  }), a = E(s), i = T(s);
  let m = !1, l, p;
  const g = (r) => {
    s.panTo(v(r.center)), r.zoom !== void 0 && s.setZoom(r.zoom);
  };
  return {
    provider: "google",
    capabilities: A,
    native: () => s,
    isAlive: () => !m,
    destroy: () => {
      m = !0, i.destroy(), p?.remove(), a.destroy(), n.remove();
    },
    on: (r, t) => {
      if (r === "ready")
        return a.onReady(t);
      if (r === "resize") {
        const o = new ResizeObserver(() => t());
        return o.observe(e.container), () => o.disconnect();
      }
      if (r === "error") {
        const o = window, d = o.gm_authFailure;
        return o.gm_authFailure = t, () => {
          o.gm_authFailure = d;
        };
      }
      const c = s.addListener($[r], t);
      return () => c.remove();
    },
    project: a.project,
    unproject: a.unproject,
    getZoom: () => s.getZoom() ?? e.zoom,
    getCenter: () => {
      const r = s.getCenter();
      return r ? [r.lng(), r.lat()] : e.center;
    },
    jumpTo: (r) => {
      s.moveCamera({
        center: v(r.center),
        ...r.zoom === void 0 ? {} : { zoom: r.zoom }
      });
    },
    easeTo: g,
    // No coupled pan+zoom arc exists here, and no duration or easing parameter
    // either; this is the same move, which the renderer glides on its own.
    flyTo: g,
    fitCoordinates: (r, t) => {
      const c = new google.maps.LatLngBounds();
      r.forEach((d) => c.extend(v(d)));
      const o = t?.gutter ?? 0;
      if (s.fitBounds(c, {
        top: o,
        right: o,
        bottom: o,
        left: o
      }), t?.maxZoom !== void 0) {
        const d = s.getZoom();
        d !== void 0 && d > t.maxZoom && s.setZoom(t.maxZoom);
      }
    },
    /**
     * Computed here rather than delegated: Google has no `cameraForBounds`. The
     * pixel box at the current zoom gives the scale change needed to fit, which
     * is a zoom delta - the same maths `fitCoordinates` should eventually share.
     */
    cameraForCoordinates: (r, t) => {
      if (r.length === 0)
        return null;
      const c = r.map((u) => a.project(u));
      if (c.some((u) => u === null))
        return null;
      const o = c.map((u) => u.x), d = c.map((u) => u.y), y = a.unproject({
        x: (Math.min(...o) + Math.max(...o)) / 2,
        y: (Math.min(...d) + Math.max(...d)) / 2
      });
      if (!y)
        return null;
      const h = t?.gutter ?? 0, z = Math.max(Math.max(...o) - Math.min(...o), 1), P = Math.max(Math.max(...d) - Math.min(...d), 1), M = {
        width: Math.max(e.container.clientWidth - h * 2, 1),
        height: Math.max(e.container.clientHeight - h * 2, 1)
      }, Z = Math.min(M.width / z, M.height / P), j = Math.min(
        (s.getZoom() ?? e.zoom) + Math.log2(Z),
        t?.maxZoom ?? 1 / 0
      );
      return { center: y, zoom: j };
    },
    addDomMarker: a.add,
    setLines: (r, t) => i.set(r, t?.onClick),
    setCurrentLocation: (r) => {
      if (!r) {
        p?.remove(), p = void 0, l = void 0;
        return;
      }
      if (!l) {
        l = document.createElement("div"), l.style.cssText = [
          `width:${b * 2}px`,
          `height:${b * 2}px`,
          "border-radius:50%",
          `background:hsl(${L.malibu[60]})`,
          `box-shadow:0 0 0 ${R}px hsl(${L.malibu[50]} / 0.3)`,
          "pointer-events:none"
        ].join(";"), p = a.add(l, r);
        return;
      }
      p?.setPosition(r);
    },
    zoomIn: () => s.setZoom((s.getZoom() ?? e.zoom) + 1),
    zoomOut: () => s.setZoom((s.getZoom() ?? e.zoom) - 1),
    // Google re-reads its container on its own; there is nothing to poke.
    resize: () => {
    },
    applyStyle: (r) => s.setOptions({ styles: C(r) }),
    // Declared unsupported; F0Map degrades rather than pretending.
    setGlobeProjection: () => {
    }
  };
}, G = async (e) => {
  if (!e?.apiKey)
    throw new Error(
      "F0Map: the google provider needs an apiKey on <F0Provider map={{ ... }}>."
    );
  return await k(e.apiKey), _;
};
export {
  _ as createGoogleAdapter,
  G as loadGoogleAdapter
};
