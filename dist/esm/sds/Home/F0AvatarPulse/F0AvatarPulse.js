import { F0Icon as e } from "../../../components/F0Icon/index.js";
import { EmojiImage as t } from "../../../lib/emojis.js";
import n from "../../../icons/app/Reaction.js";
import { useI18n as r } from "../../../lib/providers/i18n/i18n-provider.js";
import { Action as i } from "../../../ui/Action/Action.js";
import { ButtonInternal as a } from "../../../components/F0Button/internal.js";
import { BaseAvatar as o } from "../../../components/avatars/internal/BaseAvatar/BaseAvatar.js";
import { pulseIcon as s, pulseIconColor as c } from "../../../lib/mood.js";
import { useState as l } from "react";
import { jsx as u, jsxs as d } from "react/jsx-runtime";
import { AnimatePresence as f, motion as p } from "motion/react";
//#region src/sds/Home/F0AvatarPulse/F0AvatarPulse.tsx
var m = ({ firstName: m, lastName: h, src: g, "aria-label": _, "aria-labelledby": v, pulse: y, onPulseClick: b }) => {
	let x = r(), [S, C] = l(!y);
	return /* @__PURE__ */ u("div", {
		className: "relative h-10 w-10",
		children: /* @__PURE__ */ u(f, {
			mode: "popLayout",
			initial: !!S,
			children: S ? /* @__PURE__ */ u(p.div, {
				className: "relative h-10 w-10 rounded-full bg-f1-background-warning",
				initial: {
					opacity: 0,
					scale: .8
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .5
				},
				transition: {
					scale: {
						type: "spring",
						stiffness: 290,
						damping: 15.1,
						mass: 1.4
					},
					opacity: {
						type: "linear",
						duration: .2
					}
				},
				children: /* @__PURE__ */ u(p.div, {
					initial: {
						opacity: 0,
						originX: .6,
						originY: .6
					},
					animate: {
						rotate: [
							-15,
							20,
							-15
						],
						opacity: 1
					},
					exit: {
						opacity: 0,
						scale: 0
					},
					transition: {
						opacity: {
							duration: .4,
							ease: "easeOut"
						},
						scale: {
							duration: .4,
							ease: "easeOut"
						},
						rotate: {
							repeat: 1,
							duration: .5,
							ease: "easeInOut"
						}
					},
					onAnimationComplete: () => C(!1),
					className: "absolute inset-0 flex select-none items-center justify-center text-4xl",
					children: /* @__PURE__ */ u(t, {
						emoji: "👋",
						size: "md"
					})
				}, "wave")
			}) : /* @__PURE__ */ d(p.div, {
				initial: {
					opacity: 0,
					scale: .5
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .5
				},
				className: "relative h-10 w-10",
				transition: {
					scale: {
						type: "spring",
						stiffness: 290,
						damping: 15.1,
						mass: 1.4
					},
					opacity: {
						type: "linear",
						duration: .2
					}
				},
				children: [/* @__PURE__ */ u(o, {
					type: "rounded",
					name: [m, h],
					src: g,
					size: "lg",
					color: "random",
					"aria-label": _,
					"aria-labelledby": v
				}), y ? /* @__PURE__ */ u("div", {
					className: "absolute -bottom-1.5 -right-1.5 inline-flex rounded-sm bg-f1-background",
					children: /* @__PURE__ */ u(i, {
						variant: "neutral",
						size: "sm",
						compact: !0,
						onClick: (e) => {
							e.preventDefault(), e.stopPropagation(), b();
						},
						"aria-label": x.actions.edit,
						children: /* @__PURE__ */ u(e, {
							icon: s[y],
							color: c[y],
							size: "sm"
						})
					})
				}) : /* @__PURE__ */ u(p.div, {
					initial: {
						opacity: 0,
						scale: .5
					},
					animate: {
						opacity: 1,
						scale: 1
					},
					exit: {
						opacity: 0,
						scale: .5
					},
					transition: {
						opacity: { delay: .25 },
						scale: { delay: .25 }
					},
					className: "absolute -bottom-1.5 -right-1.5 rounded-sm bg-f1-background",
					children: /* @__PURE__ */ u(a, {
						compact: !0,
						label: x.actions.add,
						variant: "neutral",
						size: "sm",
						icon: n,
						onClick: (e) => {
							e.preventDefault(), e.stopPropagation(), b();
						},
						hideLabel: !0
					})
				}, "reaction-button")]
			}, "avatar")
		})
	});
};
m.displayName = "PulseAvatar";
//#endregion
export { m as F0AvatarPulse };
