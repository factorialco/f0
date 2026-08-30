import { Component as e } from "react";
//#region src/lib/RenderErrorBoundary.tsx
var t = class extends e {
	state = { hasError: !1 };
	static getDerivedStateFromError() {
		return { hasError: !0 };
	}
	componentDidCatch(e) {
		this.props.onError?.(e);
	}
	render() {
		return this.state.hasError ? this.props.fallback ?? null : this.props.children;
	}
};
//#endregion
export { t as RenderErrorBoundary };
