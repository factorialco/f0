import e from "../../../../icons/app/Delete.js";
import t from "../../../../icons/app/Share.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as r } from "../../../../F0Dialog.js";
import { F0TextAreaInput as i } from "../../../../components/F0TextAreaInput/F0TextAreaInput.js";
import { F0TextInput as a } from "../../../../components/F0TextInput/F0TextInput.js";
import { useEffect as o, useId as s, useRef as c, useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
//#region src/patterns/OneDataCollection/components/PresetFormDialog/PresetFormDialog.tsx
function f({ isOpen: f, mode: p, initialValues: m, onClose: h, onSubmit: g, onDelete: _, onShare: v, existingNames: y = [] }) {
	let b = n().collections.presets, [x, S] = l(m?.title ?? ""), [C, w] = l(m?.description ?? ""), [T, E] = l(), D = c(null), O = s();
	o(() => {
		f && (S(m?.title ?? ""), w(m?.description ?? ""), E(void 0));
	}, [
		m?.description,
		m?.title,
		f,
		p
	]);
	let k = () => {
		let e = x.trim().toLowerCase();
		if (y.some((t) => t.trim().toLowerCase() === e)) {
			E(b.duplicateName), D.current?.focus();
			return;
		}
		e && g({
			title: x,
			description: C || void 0
		});
	};
	return /* @__PURE__ */ u(r, {
		isOpen: f,
		onClose: h,
		title: p === "create" ? b.createTitle : b.updateTitle,
		description: p === "create" ? b.createDescription : b.updateDescription,
		primaryAction: {
			label: b.save,
			onClick: k,
			disabled: !x.trim()
		},
		secondaryAction: {
			label: b.cancel,
			onClick: h
		},
		otherActions: p === "update" ? [...v ? [{
			label: b.share,
			onClick: v,
			icon: t
		}] : [], ..._ ? [{
			label: b.delete,
			onClick: _,
			icon: e,
			critical: !0
		}] : []] : [],
		disableContentPadding: !0,
		children: /* @__PURE__ */ d("div", {
			className: "flex flex-col gap-4",
			children: [
				/* @__PURE__ */ u(a, {
					ref: D,
					label: b.nameLabel,
					placeholder: b.namePlaceholder,
					value: x,
					onChange: (e) => {
						S(e), E(void 0);
					},
					error: T,
					required: !0,
					onPressEnter: k,
					"aria-invalid": T ? !0 : void 0,
					"aria-describedby": T ? O : void 0
				}),
				T && /* @__PURE__ */ u("span", {
					id: O,
					className: "sr-only",
					role: "alert",
					children: T
				}),
				/* @__PURE__ */ u(i, {
					label: b.descriptionLabel,
					placeholder: b.descriptionPlaceholder,
					value: C,
					onChange: w,
					rows: 4
				})
			]
		})
	});
}
//#endregion
export { f as PresetFormDialog };
