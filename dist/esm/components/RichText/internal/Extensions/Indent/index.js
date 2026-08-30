import { Extension as e } from "@tiptap/core";
var t = "f0-indent-", n = ["listItem", "taskItem"], r = e.create({
	name: "indent",
	addOptions() {
		return { types: ["paragraph", "heading"] };
	},
	addGlobalAttributes() {
		return [{
			types: this.options.types,
			attributes: { indent: {
				default: null,
				parseHTML: (e) => {
					let n = Array.from(e.classList).find((e) => e.startsWith(t)), r = n ? Number.parseInt(n.slice(10), 10) : Math.round(Number.parseFloat(e.style.paddingLeft) / 24);
					return Number.isInteger(r) && r >= 1 ? r : null;
				},
				renderHTML: (e) => {
					let n = e.indent;
					return !Number.isInteger(n) || n < 1 ? {} : {
						style: `padding-left: ${n * 24}px`,
						class: `${t}${Math.min(n, 8)}`
					};
				}
			} }
		}];
	},
	addCommands() {
		let { types: e } = this.options, t = (t) => {
			let { $from: n } = t.selection, r = n.parent.type.name;
			return e.includes(r) ? {
				type: r,
				node: n.parent
			} : null;
		};
		return {
			setIndent: (e) => ({ state: n, chain: r }) => {
				let i = t(n);
				if (!i) return !1;
				let a = Math.round(e);
				return a < 1 ? r().updateAttributes(i.type, { indent: null }).run() : r().updateAttributes(i.type, { indent: Math.min(a, 8) }).run();
			},
			unsetIndent: () => ({ state: e, chain: n }) => {
				let r = t(e);
				return r ? n().updateAttributes(r.type, { indent: null }).run() : !1;
			},
			outdent: () => ({ state: e, chain: n }) => {
				let r = t(e);
				if (!r) return !1;
				let i = r.node.attrs.indent;
				return !Number.isInteger(i) || i < 1 ? !1 : n().updateAttributes(r.type, { indent: i > 1 ? i - 1 : null }).run();
			}
		};
	},
	addKeyboardShortcuts() {
		let e = () => {
			let { $from: e } = this.editor.state.selection;
			for (let t = e.depth; t > 0; --t) if (n.includes(e.node(t).type.name)) return !1;
			return this.editor.can().outdent();
		};
		return {
			"Shift-Tab": () => e() && this.editor.commands.outdent(),
			Backspace: () => {
				let { empty: t, $from: n } = this.editor.state.selection;
				return !t || n.parentOffset !== 0 ? !1 : e() && this.editor.commands.outdent();
			}
		};
	}
});
//#endregion
export { r as IndentExtension };
