import { getAvatarColor as e } from "../../../../components/avatars/internal/BaseAvatar/utils.js";
//#region src/sds/chat/F0Chat/utils/sender-color.ts
var t = {
	viridian: "text-[hsl(theme(colors.viridian.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.viridian.50)),white_30%)]",
	malibu: "text-[hsl(theme(colors.malibu.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.malibu.50)),white_20%)]",
	yellow: "text-[color-mix(in_srgb,hsl(theme(colors.yellow.70)),black_16%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.yellow.50)),white_10%)]",
	purple: "text-[hsl(theme(colors.purple.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.purple.50)),white_35%)]",
	lilac: "text-[hsl(theme(colors.lilac.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.lilac.50)),white_30%)]",
	barbie: "text-[hsl(theme(colors.barbie.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.barbie.50)),white_25%)]",
	smoke: "text-[hsl(theme(colors.smoke.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.smoke.50)),white_25%)]",
	army: "text-[hsl(theme(colors.army.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.army.50)),white_45%)]",
	flubber: "text-[color-mix(in_srgb,hsl(theme(colors.flubber.70)),black_10%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.flubber.50)),white_10%)]",
	indigo: "text-[hsl(theme(colors.indigo.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.indigo.50)),white_45%)]",
	camel: "text-[hsl(theme(colors.camel.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.camel.50)),white_25%)]",
	radical: "text-[hsl(theme(colors.radical.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.radical.50)),white_45%)]",
	orange: "text-[color-mix(in_srgb,hsl(theme(colors.orange.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.orange.50)),white_15%)]",
	red: "text-[hsl(theme(colors.red.70))] dark:text-[color-mix(in_srgb,hsl(theme(colors.red.50)),white_25%)]",
	grass: "text-[color-mix(in_srgb,hsl(theme(colors.grass.70)),black_6%)] dark:text-[color-mix(in_srgb,hsl(theme(colors.grass.50)),white_15%)]"
}, n = {
	viridian: "bg-[color-mix(in_oklch,hsl(theme(colors.viridian.50))_16.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.viridian.50))_39%,oklab(0.08_0_0))]",
	malibu: "bg-[color-mix(in_oklch,hsl(theme(colors.malibu.50))_24%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.malibu.50))_37%,oklab(0.08_0_0))]",
	yellow: "bg-[color-mix(in_oklch,hsl(theme(colors.yellow.50))_20.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.yellow.50))_31%,oklab(0.08_0_0))]",
	purple: "bg-[color-mix(in_oklch,hsl(theme(colors.purple.50))_26.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.purple.50))_41%,oklab(0.08_0_0))]",
	lilac: "bg-[color-mix(in_oklch,hsl(theme(colors.lilac.50))_20%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.lilac.50))_39.5%,oklab(0.08_0_0))]",
	barbie: "bg-[color-mix(in_oklch,hsl(theme(colors.barbie.50))_22.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.barbie.50))_37%,oklab(0.08_0_0))]",
	smoke: "bg-[color-mix(in_oklch,hsl(theme(colors.smoke.50))_20%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.smoke.50))_38%,oklab(0.08_0_0))]",
	army: "bg-[color-mix(in_oklch,hsl(theme(colors.army.50))_17%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.army.50))_49.5%,oklab(0.08_0_0))]",
	flubber: "bg-[color-mix(in_oklch,hsl(theme(colors.flubber.50))_18.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.flubber.50))_31.5%,oklab(0.08_0_0))]",
	indigo: "bg-[color-mix(in_oklch,hsl(theme(colors.indigo.50))_22%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.indigo.50))_47%,oklab(0.08_0_0))]",
	camel: "bg-[color-mix(in_oklch,hsl(theme(colors.camel.50))_18.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.camel.50))_38.5%,oklab(0.08_0_0))]",
	radical: "bg-[color-mix(in_oklch,hsl(theme(colors.radical.50))_19.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.radical.50))_43%,oklab(0.08_0_0))]",
	orange: "bg-[color-mix(in_oklch,hsl(theme(colors.orange.50))_19%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.orange.50))_35%,oklab(0.08_0_0))]",
	red: "bg-[color-mix(in_oklch,hsl(theme(colors.red.50))_21.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.red.50))_36%,oklab(0.08_0_0))]",
	grass: "bg-[color-mix(in_oklch,hsl(theme(colors.grass.50))_17.5%,hsl(var(--neutral-0)))] dark:bg-[color-mix(in_oklab,hsl(theme(colors.grass.50))_36%,oklab(0.08_0_0))]"
}, r = (e) => e.avatar?.type === "person" ? `${e.avatar.firstName}${e.avatar.lastName ?? ""}` : e.name, i = (t) => t.avatarColor ?? e(r(t)) ?? "viridian", a = (e) => t[i(e)], o = (e) => n[i(e)], s = (e, t) => t ? "bg-f1-background-secondary" : o(e);
//#endregion
export { s as messageSurfaceColorClass, o as senderBubbleColorClass, a as senderNameColorClass };
