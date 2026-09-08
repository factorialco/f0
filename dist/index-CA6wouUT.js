import { m as L } from "./F0CanvasPanel-CfLlu11B.js";
const P = (e) => e.map(([o, a]) => ({ lat: a, lng: o })), x = (e, o) => ({
  strokeColor: o && e.hover?.color || e.color,
  strokeWeight: o && e.hover?.width || e.width,
  strokeOpacity: e.dashed ? 0 : (o ? e.hover?.opacity : void 0) ?? e.opacity,
  // Google has no dash array on a stroke: a dashed line is an invisible stroke
  // carrying repeated dot symbols, spaced to match MapLibre's [1.5, 2.8].
  icons: e.dashed ? [
    {
      icon: {
        path: "M 0,-1 0,1",
        strokeOpacity: (o ? e.hover?.opacity : void 0) ?? e.opacity,
        strokeWeight: o && e.hover?.width || e.width,
        scale: 1
      },
      offset: "0",
      repeat: `${(o && e.hover?.width || e.width) * 2.9}px`
    }
  ] : void 0
}), O = (e) => {
  let o = [];
  const a = () => {
    for (const l of o)
      l.listeners.forEach((c) => c.remove()), l.polyline.setMap(null);
    o = [];
  };
  return {
    set: (l, c) => {
      a(), o = l.map((m) => {
        const d = new google.maps.Polyline({
          map: e,
          path: P(m.coordinates),
          clickable: !!c,
          ...x(m, !1)
        }), p = [];
        return c && p.push(
          d.addListener("mouseover", () => {
            d.setOptions(x(m, !0)), e.setOptions({ draggableCursor: "pointer" });
          }),
          d.addListener("mouseout", () => {
            d.setOptions(x(m, !1)), e.setOptions({ draggableCursor: null });
          }),
          d.addListener("click", () => c(m.id))
        ), { line: m, polyline: d, listeners: p };
      });
    },
    destroy: a
  };
}, w = "__f0GoogleMapsReady";
let h;
const T = (e) => h || (h = new Promise((o, a) => {
  const l = window;
  l[w] = () => {
    delete l[w], o();
  };
  const c = document.createElement("script");
  c.async = !0, c.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(e)}&v=weekly&libraries=maps&callback=${w}`, c.onerror = () => {
    h = void 0, a(new Error("F0Map: the Google Maps JavaScript API failed to load."));
  }, document.head.appendChild(c);
}), h), k = (e) => {
  const o = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Set();
  let l, c = !1, m = !1;
  const d = (s, n) => {
    const r = n.fromLatLngToDivPixel(
      new google.maps.LatLng(s.at[1], s.at[0])
    );
    r && (s.element.style.transform = `translate(${r.x}px, ${r.y}px) translate(-50%, -50%)`);
  };
  class p extends google.maps.OverlayView {
    onAdd() {
      l = document.createElement("div"), l.style.cssText = "position:absolute;left:0;top:0;width:0;height:0";
      for (const n of o)
        l.appendChild(n.element);
      this.getPanes()?.overlayMouseTarget.appendChild(l);
    }
    draw() {
      const n = this.getProjection();
      if (n) {
        for (const r of o)
          d(r, n);
        c || (c = !0, a.forEach((r) => r()));
      }
    }
    onRemove() {
      l?.remove(), l = void 0;
    }
  }
  const t = new p();
  t.setMap(e);
  const i = () => m ? void 0 : t.getProjection();
  return {
    add: (s, n) => {
      const r = { element: s, at: n };
      o.add(r), s.style.position = "absolute", l?.appendChild(s);
      const g = i();
      return g && d(r, g), {
        setPosition: (f) => {
          r.at = f;
          const y = i();
          y && d(r, y);
        },
        remove: () => {
          o.delete(r), s.remove();
        }
      };
    },
    project: (s) => {
      const n = i();
      if (!n)
        return null;
      const r = n.fromLatLngToContainerPixel(
        new google.maps.LatLng(s[1], s[0])
      );
      return r ? { x: r.x, y: r.y } : null;
    },
    unproject: (s) => {
      const n = i();
      if (!n)
        return null;
      const r = n.fromContainerPixelToLatLng(
        new google.maps.Point(s.x, s.y)
      );
      return r ? [r.lng(), r.lat()] : null;
    },
    onReady: (s) => c ? (s(), () => {
    }) : (a.add(s), () => a.delete(s)),
    isReady: () => c,
    destroy: () => {
      m = !0, c = !1, a.clear();
      for (const s of o)
        s.element.remove();
      o.clear(), t.setMap(null);
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
}, C = (e) => e, v = ([e, o]) => ({ lat: o, lng: e }), E = {
  move: "bounds_changed",
  zoom: "zoom_changed",
  click: "click",
  styled: "idle"
}, b = 5.3, $ = 11 - b, _ = (e) => {
  const o = new google.maps.Map(e.container, {
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
  }), a = k(o), l = O(o);
  let c = !1, m, d;
  const p = (t) => {
    o.panTo(v(t.center)), t.zoom !== void 0 && o.setZoom(t.zoom);
  };
  return {
    provider: "google",
    capabilities: A,
    native: () => o,
    isAlive: () => !c,
    destroy: () => {
      c = !0, l.destroy(), d?.remove(), a.destroy(), e.container.replaceChildren();
    },
    on: (t, i) => {
      if (t === "ready")
        return a.onReady(i);
      if (t === "resize") {
        const n = new ResizeObserver(() => i());
        return n.observe(e.container), () => n.disconnect();
      }
      if (t === "error") {
        const n = window, r = n.gm_authFailure;
        return n.gm_authFailure = i, () => {
          n.gm_authFailure = r;
        };
      }
      const s = o.addListener(E[t], i);
      return () => s.remove();
    },
    project: a.project,
    unproject: a.unproject,
    getZoom: () => o.getZoom() ?? e.zoom,
    getCenter: () => {
      const t = o.getCenter();
      return t ? [t.lng(), t.lat()] : e.center;
    },
    jumpTo: (t) => {
      o.moveCamera({
        center: v(t.center),
        ...t.zoom === void 0 ? {} : { zoom: t.zoom }
      });
    },
    easeTo: p,
    // No coupled pan+zoom arc exists here, and no duration or easing parameter
    // either; this is the same move, which the renderer glides on its own.
    flyTo: p,
    fitCoordinates: (t, i) => {
      const s = new google.maps.LatLngBounds();
      t.forEach((r) => s.extend(v(r)));
      const n = i?.gutter ?? 0;
      if (o.fitBounds(s, {
        top: n,
        right: n,
        bottom: n,
        left: n
      }), i?.maxZoom !== void 0) {
        const r = o.getZoom();
        r !== void 0 && r > i.maxZoom && o.setZoom(i.maxZoom);
      }
    },
    /**
     * Computed here rather than delegated: Google has no `cameraForBounds`. The
     * pixel box at the current zoom gives the scale change needed to fit, which
     * is a zoom delta - the same maths `fitCoordinates` should eventually share.
     */
    cameraForCoordinates: (t, i) => {
      if (t.length === 0)
        return null;
      const s = t.map((u) => a.project(u));
      if (s.some((u) => u === null))
        return null;
      const n = s.map((u) => u.x), r = s.map((u) => u.y), g = a.unproject({
        x: (Math.min(...n) + Math.max(...n)) / 2,
        y: (Math.min(...r) + Math.max(...r)) / 2
      });
      if (!g)
        return null;
      const f = i?.gutter ?? 0, y = Math.max(Math.max(...n) - Math.min(...n), 1), z = Math.max(Math.max(...r) - Math.min(...r), 1), M = {
        width: Math.max(e.container.clientWidth - f * 2, 1),
        height: Math.max(e.container.clientHeight - f * 2, 1)
      }, Z = Math.min(M.width / y, M.height / z), j = Math.min(
        (o.getZoom() ?? e.zoom) + Math.log2(Z),
        i?.maxZoom ?? 1 / 0
      );
      return { center: g, zoom: j };
    },
    addDomMarker: a.add,
    setLines: (t, i) => l.set(t, i?.onClick),
    setCurrentLocation: (t) => {
      if (!t) {
        d?.remove(), d = void 0, m = void 0;
        return;
      }
      if (!m) {
        m = document.createElement("div"), m.style.cssText = [
          `width:${b * 2}px`,
          `height:${b * 2}px`,
          "border-radius:50%",
          `background:hsl(${L.malibu[60]})`,
          `box-shadow:0 0 0 ${$}px hsl(${L.malibu[50]} / 0.3)`,
          "pointer-events:none"
        ].join(";"), d = a.add(m, t);
        return;
      }
      d?.setPosition(t);
    },
    zoomIn: () => o.setZoom((o.getZoom() ?? e.zoom) + 1),
    zoomOut: () => o.setZoom((o.getZoom() ?? e.zoom) - 1),
    // Google re-reads its container on its own; there is nothing to poke.
    resize: () => {
    },
    applyStyle: (t) => o.setOptions({ styles: C(t) }),
    // Declared unsupported; F0Map degrades rather than pretending.
    setGlobeProjection: () => {
    }
  };
}, G = async (e) => {
  if (!e?.apiKey)
    throw new Error(
      "F0Map: the google provider needs an apiKey on <F0Provider map={{ ... }}>."
    );
  return await T(e.apiKey), _;
};
export {
  _ as createGoogleAdapter,
  G as loadGoogleAdapter
};
