import e from "../../../../icons/app/Delete.js";
import t from "../../../../icons/app/Share.js";
import { useI18n as n } from "../../../../lib/providers/i18n/i18n-provider.js";
import { F0Dialog as r } from "../../../../F0Dialog.js";
import { useF0FormDefinition as i } from "../../../F0WizardForm/useF0FormDefinition.js";
import { f0FormField as a } from "../../../F0Form/f0Schema.js";
import { useF0Form as o } from "../../../F0Form/useF0Form.js";
import { F0Form as s } from "../../../F0Form/index.js";
import { jsx as c } from "react/jsx-runtime";
import { z as l } from "zod";
//#region src/patterns/OneDataCollection/components/PresetFormDialog/PresetFormDialog.tsx
function u({ isOpen: u, mode: d, initialValues: f, onClose: p, onSubmit: m, onDelete: h, onShare: g, existingNames: _ = [] }) {
	let v = n().collections.presets, { formRef: y, submit: b, isSubmitting: x, hasErrors: S } = o(), C = () => {
		b().catch(() => {});
	}, w = new Set(_.map((e) => e.trim().toLowerCase())), T = l.object({
		title: a.text({
			label: v.nameLabel,
			placeholder: v.namePlaceholder,
			minLength: 1
		}),
		description: a.textarea({
			label: v.descriptionLabel,
			placeholder: v.descriptionPlaceholder,
			optional: !0,
			rows: 4
		})
	}).superRefine((e, t) => {
		let n = (e.title ?? "").trim().toLowerCase();
		n && w.has(n) && t.addIssue({
			code: l.ZodIssueCode.custom,
			path: ["title"],
			message: v.duplicateName
		});
	}), E = i({
		name: `preset-${d}-${f?.title ?? ""}`,
		schema: T,
		defaultValues: {
			title: f?.title ?? "",
			description: f?.description ?? ""
		},
		onSubmit: async ({ data: e }) => e.title ? (m({
			title: e.title,
			description: e.description || void 0
		}), { success: !0 }) : { success: !1 },
		submitConfig: {
			type: "default",
			hideSubmitButton: !0
		}
	});
	return /* @__PURE__ */ c(r, {
		isOpen: u,
		onClose: p,
		title: d === "create" ? v.createTitle : v.updateTitle,
		description: d === "create" ? v.createDescription : v.updateDescription,
		primaryAction: {
			label: v.save,
			onClick: C,
			loading: x,
			disabled: S
		},
		secondaryAction: {
			label: v.cancel,
			onClick: p
		},
		otherActions: d === "update" ? [...g ? [{
			label: v.share,
			onClick: g,
			icon: t
		}] : [], ...h ? [{
			label: v.delete,
			onClick: h,
			icon: e,
			critical: !0
		}] : []] : [],
		disableContentPadding: !0,
		children: /* @__PURE__ */ c("div", {
			className: "flex flex-col gap-4",
			children: /* @__PURE__ */ c(s, {
				formDefinition: E,
				formRef: y
			})
		})
	});
}
//#endregion
export { u as PresetFormDialog };
