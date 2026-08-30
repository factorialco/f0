import { o as e } from "./rolldown-runtime-CEFd7nDs.js";
import { i as t, n, r, t as i } from "./tooltip-BPSwDQpD.js";
import { useCallback as a, useEffect as o, useRef as s, useState as c } from "react";
import { jsx as l, jsxs as u } from "react/jsx-runtime";
//#endregion
//#region src/component-status/component-status.ts
var d = {
	generatedAt: "2026-08-30T14:55:43.912Z",
	stats: {
		total: 265,
		byStatus: {
			stable: 41,
			experimental: 145,
			deprecated: 7,
			internal: 0,
			unknown: 72
		},
		byZone: {
			components: 61,
			deprecated: 5,
			experimental: 53,
			hooks: 4,
			kits: 50,
			layouts: 4,
			patterns: 53,
			sds: 35
		},
		byDocQuality: {
			none: 161,
			stub: 47,
			acceptable: 27,
			good: 6,
			gold: 24
		},
		withUnitTests: 132,
		withMdxDocs: 104
	},
	components: [
		{
			name: "ActionBar",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "components/F0ActionBar/index.stories.tsx"
		},
		{
			name: "Alert",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "enforced",
			storyFile: "components/F0Alert/__stories__/F0Alert.stories.tsx"
		},
		{
			name: "Avatars/Avatar",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 3
			},
			a11yTier: "enforced",
			storyFile: "components/avatars/F0Avatar/__stories__/F0Avatar.stories.tsx"
		},
		{
			name: "Avatars/AvatarAlert",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 2
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarAlert/__stories__/F0AvatarAlert.stories.tsx"
		},
		{
			name: "Avatars/AvatarCompany",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarCompany/__stories__/F0AvatarCompany.stories.tsx"
		},
		{
			name: "Avatars/AvatarDate",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarDate/__stories__/F0AvatarDate.stories.tsx"
		},
		{
			name: "Avatars/AvatarEmoji",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarEmoji/__stories__/F0AvatarEmoji.stories.tsx"
		},
		{
			name: "Avatars/AvatarFile",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 2
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarFile/__stories__/F0AvatarFile.stories.tsx"
		},
		{
			name: "Avatars/AvatarFlag",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarFlag/__stories__/F0AvatarFlag.stories.tsx"
		},
		{
			name: "Avatars/AvatarIcon",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarIcon/__stories__/F0AvatarIcon.stories.tsx"
		},
		{
			name: "Avatars/AvatarList",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "enforced",
			storyFile: "components/avatars/F0AvatarList/__stories__/F0AvatarList.stories.tsx"
		},
		{
			name: "Avatars/AvatarModule",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarModule/__stories__/F0AvatarModule.stories.tsx"
		},
		{
			name: "Avatars/AvatarPerson",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarPerson/__stories__/F0AvatarPerson.stories.tsx"
		},
		{
			name: "Avatars/AvatarTeam",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/avatars/F0AvatarTeam/__stories__/F0AvatarTeam.stories.tsx"
		},
		{
			name: "BigNumber",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0BigNumber/__stories__/F0BigNumber.stories.tsx"
		},
		{
			name: "Button/Button",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 8
			},
			a11yTier: "enforced",
			storyFile: "components/F0Button/__stories__/F0Button.stories.tsx"
		},
		{
			name: "Button/ButtonDropdown",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 12
			},
			a11yTier: "enforced",
			storyFile: "components/F0ButtonDropdown/__stories__/F0ButtonDropdown.stories.tsx"
		},
		{
			name: "Button/ButtonToggle",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "skipped",
			storyFile: "components/F0ButtonToggle/__stories__/F0ButtonToggle.stories.tsx"
		},
		{
			name: "Button/ButtonToggleGroup",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0ButtonToggleGroup/__stories__/F0ButtonToggleGroup.stories.tsx"
		},
		{
			name: "Calendar",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "components/OneCalendar/OneCalendar.stories.tsx"
		},
		{
			name: "Card",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "enforced",
			storyFile: "components/F0Card/__stories__/Card.stories.tsx"
		},
		{
			name: "CardSelectable",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/CardSelectable/index.stories.tsx"
		},
		{
			name: "Checkbox",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "components/F0Checkbox/__stories__/F0Checkbox.stories.tsx"
		},
		{
			name: "Chip/Chip",
			zone: "components",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 6
			},
			a11yTier: "todo",
			storyFile: "components/OneChip/index.stories.tsx"
		},
		{
			name: "Chip/ChipList",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0ChipList/index.stories.tsx"
		},
		{
			name: "DatePicker",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "components/F0DatePicker/__stories__/F0DatePicker.stories.tsx"
		},
		{
			name: "Dialog",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "components/dialog-alike/F0Dialog/__stories__/F0Dialog.stories.tsx"
		},
		{
			name: "Drawer",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 6
			},
			a11yTier: "todo",
			storyFile: "components/dialog-alike/F0Drawer/__stories__/F0Drawer.stories.tsx"
		},
		{
			name: "EmptyState",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/OneEmptyState/__stories__/OneEmptyState.stories.tsx"
		},
		{
			name: "F0Accordion",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 9
			},
			a11yTier: "todo",
			storyFile: "components/F0Accordion/__stories__/F0Accordion.stories.tsx"
		},
		{
			name: "F0AudioPlayer",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 10
			},
			a11yTier: "todo",
			storyFile: "components/F0AudioPlayer/__stories__/F0AudioPlayer.stories.tsx"
		},
		{
			name: "F0PdfViewer",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 1,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 9
			},
			a11yTier: "todo",
			storyFile: "components/F0PdfViewer/__stories__/F0PdfViewer.stories.tsx"
		},
		{
			name: "F0Slider",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 10
			},
			a11yTier: "todo",
			storyFile: "components/F0Slider/__stories__/F0Slider.stories.tsx"
		},
		{
			name: "FileItem",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0FileItem/__stories__/F0FileItem.stories.tsx"
		},
		{
			name: "Heading",
			zone: "components",
			apiStatus: "stable",
			tags: ["!autodocs", "stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "components/F0Heading/__stories__/Heading.stories.tsx"
		},
		{
			name: "Icon",
			zone: "components",
			apiStatus: "stable",
			tags: ["!autodocs", "stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 7
			},
			a11yTier: "enforced",
			storyFile: "components/F0Icon/__stories__/F0Icon.stories.tsx"
		},
		{
			name: "Image",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/Utilities/Image/index.stories.tsx"
		},
		{
			name: "Inputs/Duration input",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 5
			},
			a11yTier: "todo",
			storyFile: "components/F0DurationInput/__stories__/F0DurationInput.stories.tsx"
		},
		{
			name: "Inputs/Number input",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "components/F0NumberInput/__stories__/F0NumberInput.stories.tsx"
		},
		{
			name: "Inputs/Search input",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "components/F0SearchInput/__stories__/F0SearchInput.stories.tsx"
		},
		{
			name: "Inputs/Text area input",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "skipped",
			storyFile: "components/F0TextAreaInput/__stories__/F0TextAreaInput.stories.tsx"
		},
		{
			name: "Inputs/Text input",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "skipped",
			storyFile: "components/F0TextInput/__stories__/F0TextInput.stories.tsx"
		},
		{
			name: "Link",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 4
			},
			a11yTier: "enforced",
			storyFile: "components/F0Link/__stories__/F0Link.stories.tsx"
		},
		{
			name: "Primitives/F0InputField",
			zone: "components",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 12
			},
			a11yTier: "skipped",
			storyFile: "components/F0InputField/__stories__/F0InputField.stories.tsx"
		},
		{
			name: "Rich text/NotesTextEditor",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/RichText/F0NotesTextEditor/__stories__/F0NotesTextEditor.stories.tsx"
		},
		{
			name: "Rich text/RichTextDisplay",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "components/RichText/F0RichTextDisplay/__stories__/F0RichTextDisplay.stories.tsx"
		},
		{
			name: "Rich text/RichTextEditor",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/RichText/F0RichTextEditor/__stories__/F0RichTextEditor.stories.tsx"
		},
		{
			name: "Select",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0Select/__stories__/F0Select.stories.tsx"
		},
		{
			name: "Select/Inline",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0Select/__stories__/F0Select.inline.stories.tsx"
		},
		{
			name: "TableOfContentPopover",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/F0TableOfContentPopover/__stories__/F0TableOfContentPopover.stories.tsx"
		},
		{
			name: "Tags/TagAlert",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagAlert/__storybook__/TagAlert.stories.tsx"
		},
		{
			name: "Tags/TagBalance",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagBalance/__storybook__/TagBalance.stories.tsx"
		},
		{
			name: "Tags/TagCompany",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagCompany/__storybook__/TagCompany.stories.tsx"
		},
		{
			name: "Tags/TagDot",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagDot/__storybook__/TagDot.stories.tsx"
		},
		{
			name: "Tags/TagList",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagList/__storybook__/TagList.stories.tsx"
		},
		{
			name: "Tags/TagPerson",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagPerson/__storybook__/TagPerson.stories.tsx"
		},
		{
			name: "Tags/TagRaw",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagRaw/__storybook__/TagRaw.stories.tsx"
		},
		{
			name: "Tags/TagStatus",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagStatus/__storybook__/TagStatus.stories.tsx"
		},
		{
			name: "Tags/TagTeam",
			zone: "components",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "components/tags/F0TagTeam/__storybook__/TagTeam.stories.tsx"
		},
		{
			name: "Text",
			zone: "components",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 5
			},
			a11yTier: "todo",
			storyFile: "components/F0Text/__stories__/Text.stories.tsx"
		},
		{
			name: "VideoPlayer",
			zone: "components",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 1,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 11
			},
			a11yTier: "todo",
			storyFile: "components/F0VideoPlayer/__stories__/F0VideoPlayer.stories.tsx"
		},
		{
			name: "Dialog (deprecated)",
			zone: "deprecated",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "deprecated/Dialog/index.stories.tsx"
		},
		{
			name: "EntitySelect/EntitySelect",
			zone: "deprecated",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "deprecated/EntitySelect/index.stories.tsx"
		},
		{
			name: "EntitySelect/ListItem",
			zone: "deprecated",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "deprecated/EntitySelect/ListItem/index.stories.tsx"
		},
		{
			name: "EntitySelect/ListTag",
			zone: "deprecated",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "deprecated/EntitySelect/ListTag/index.stories.tsx"
		},
		{
			name: "EntitySelect/Trigger",
			zone: "deprecated",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "deprecated/EntitySelect/Trigger/index.stories.tsx"
		},
		{
			name: "CardHorizontal",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 10
			},
			a11yTier: "todo",
			storyFile: "experimental/F0CardHorizontal/__stories__/F0CardHorizontal.stories.tsx"
		},
		{
			name: "Carousel/Carousel",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Navigation/Carousel/index.stories.tsx"
		},
		{
			name: "Carousel/DynamicCarousel",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Navigation/Carousel/DynamicCarousel/index.stories.tsx"
		},
		{
			name: "Dropdown",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "experimental/Navigation/Dropdown/index.stories.tsx"
		},
		{
			name: "F0Coachmark",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 9
			},
			a11yTier: "todo",
			storyFile: "experimental/Overlays/F0Coachmark/__stories__/F0Coachmark.stories.tsx"
		},
		{
			name: "F0EmojiPicker",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 8
			},
			a11yTier: "enforced",
			storyFile: "experimental/Actions/F0EmojiPicker/__stories__/F0EmojiPicker.stories.tsx"
		},
		{
			name: "F0FormEditableTable",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/F0FormEditableTable/__stories__/F0FormEditableTable.stories.tsx"
		},
		{
			name: "F0MeetingCard",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 1,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 7
			},
			a11yTier: "todo",
			storyFile: "experimental/F0MeetingCard/__stories__/F0MeetingCard.stories.tsx"
		},
		{
			name: "F0ProgressSeries",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 11
			},
			a11yTier: "todo",
			storyFile: "experimental/F0ProgressSeries/__stories__/F0ProgressSeries.stories.tsx"
		},
		{
			name: "F0SegmentedBar",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 10
			},
			a11yTier: "todo",
			storyFile: "experimental/F0SegmentedBar/__stories__/F0SegmentedBar.stories.tsx"
		},
		{
			name: "F0SegmentedControl",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Actions/F0SegmentedControl/__stories__/F0SegmentedControl.stories.tsx"
		},
		{
			name: "Inputs/Phone input",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !1,
				exampleCount: 8
			},
			a11yTier: "todo",
			storyFile: "experimental/Forms/F0PhoneInput/__stories__/F0PhoneInput.stories.tsx"
		},
		{
			name: "Layout/Blocks/AutoGrid",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Utilities/Layout/AutoGrid/index.stories.tsx"
		},
		{
			name: "Layout/Blocks/Split",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Utilities/Layout/Split/index.stories.tsx"
		},
		{
			name: "Layout/Blocks/Stack",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Utilities/Layout/Stack/index.stories.tsx"
		},
		{
			name: "List/DataList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 2
			},
			a11yTier: "todo",
			storyFile: "experimental/Lists/DataList/index.stories.tsx"
		},
		{
			name: "List/DetailsItem",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Lists/DetailsItem/index.stories.tsx"
		},
		{
			name: "List/DetailsItemsList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Lists/DetailsItemsList/index.stories.tsx"
		},
		{
			name: "List/OnePersonListItem",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Lists/OnePersonListItem/index.stories.tsx"
		},
		{
			name: "Navigation/Breadcrumbs",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Navigation/Header/Breadcrumbs/index.stories.tsx"
		},
		{
			name: "Navigation/PageHeader",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Navigation/Header/PageHeader/index.stories.tsx"
		},
		{
			name: "Navigation/TableOfContent",
			zone: "experimental",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Navigation/F0TableOfContent/__stories__/F0TableOfContent.stories.tsx"
		},
		{
			name: "Switch",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "enforced",
			storyFile: "experimental/Forms/Fields/Switch/index.stories.tsx"
		},
		{
			name: "Table",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "experimental/OneTable/index.stories.tsx"
		},
		{
			name: "ToggleGroup",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Forms/Fields/ToggleGroup/index.stories.tsx"
		},
		{
			name: "Tooltip",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Overlays/Tooltip/index.stories.tsx"
		},
		{
			name: "VersionHistory",
			zone: "experimental",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/F0VersionHistory/__stories__/F0VersionHistory.stories.tsx"
		},
		{
			name: "Widgets/Charts/AreaChartWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/AreaChartWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/BarChartWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/BarChartWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/LineChartWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/LineChartWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/PieChartWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/PieChartWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/ProgressBarDuo",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/ProgressBarDuo/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/RadialProgressWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/RadialProgressWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/SummariesWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/SummariesWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Charts/VerticalBarChartWidget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Charts/VerticalBarChartWidget/index.stories.tsx"
		},
		{
			name: "Widgets/Content/CalendarEvent",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/CalendarEvent/index.stories.tsx"
		},
		{
			name: "Widgets/Content/CalendarEventList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/CalendarEventList/index.stories.tsx"
		},
		{
			name: "Widgets/Content/IndicatorsList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/IndicatorsList/index.stories.tsx"
		},
		{
			name: "Widgets/Content/TwoColumnsList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/TwoColumnsList/index.stories.tsx"
		},
		{
			name: "Widgets/Content/Weekdays",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/Weekdays/index.stories.tsx"
		},
		{
			name: "Widgets/EmptyState",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/ChartWidgetEmptyState/index.stories.tsx"
		},
		{
			name: "Widgets/Layout/Dashboard",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Layout/Dashboard/index.stories.tsx"
		},
		{
			name: "Widgets/Layout/WidgetStrip",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Layout/WidgetStrip/index.stories.tsx"
		},
		{
			name: "Widgets/Widget",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Widget/index.stories.tsx"
		},
		{
			name: "Widgets/Widget/Skeleton",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Widget/Skeleton.stories.tsx"
		},
		{
			name: "Widgets/WidgetAvatarsListItem",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/ListItems/WidgetAvatarsListItem/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetEmptyState",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/WidgetEmptyState/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetHighlightButton",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/Highlights/WidgetHighlightButton/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetInboxList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/Lists/WidgetInboxList/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetInboxListItem",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/ListItems/WidgetInboxListItem/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetSection",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/WidgetSection/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetSimpleList",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/Lists/WidgetSimpleList/index.stories.tsx"
		},
		{
			name: "Widgets/WidgetSimpleListItem",
			zone: "experimental",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "experimental/Widgets/Content/ListItems/WidgetSimpleListItem/index.stories.tsx"
		},
		{
			name: "Datasource/Examples",
			zone: "hooks",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "hooks/datasource/__stories__/examples.stories.tsx"
		},
		{
			name: "Datasource/useDataSourceItemNavigation",
			zone: "hooks",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "hooks/datasource/useDataSourceItemNavigation/__stories__/useDataSourceItemNavigation.stories.tsx"
		},
		{
			name: "Datasource/useItemNeighbors",
			zone: "hooks",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "hooks/datasource/itemNeighbors/__stories__/useItemNeighbors.stories.tsx"
		},
		{
			name: "Toast",
			zone: "hooks",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 3,
				hasProps: !1,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "todo",
			storyFile: "hooks/toast/__stories__/toast.stories.tsx"
		},
		{
			name: "AI/AiBanner",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/Banners/F0AiBanner/index.stories.tsx"
		},
		{
			name: "AI/AIButton",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/AIButton/__stories__/AIButton.stories.tsx"
		},
		{
			name: "AI/AICallout",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/Banners/F0Callout/index.stories.tsx"
		},
		{
			name: "AI/AiInsightCard",
			zone: "kits",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiInsightCard/__stories__/F0AiInsightCard.stories.tsx"
		},
		{
			name: "AI/BaseBanner",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/Banners/BaseBanner/index.stories.tsx"
		},
		{
			name: "AI/F0ActionItem",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0ActionItem/__stories__/F0ActionItem.stories.tsx"
		},
		{
			name: "AI/F0ActionItem/ChatSpinner",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0ActionItem/__stories__/ChatSpinner.stories.tsx"
		},
		{
			name: "AI/F0AiChat",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiChat/__stories__/F0AiChat.stories.tsx"
		},
		{
			name: "AI/F0AiChatHeader",
			zone: "kits",
			apiStatus: "stable",
			tags: ["!autodocs", "stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "enforced",
			storyFile: "kits/ai/F0AiChatHeader/__stories__/F0AiChatHeader.stories.tsx"
		},
		{
			name: "AI/F0AiChatHistory",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiChatHistory/__stories__/F0AiChatHistory.stories.tsx"
		},
		{
			name: "AI/F0AiChatTextArea",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiChatTextArea/__stories__/F0AiChatTextArea.stories.tsx"
		},
		{
			name: "AI/F0AiFormTools",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 3
			},
			a11yTier: "skipped",
			storyFile: "kits/ai/F0AiChat/__stories__/F0AiFormTools.stories.tsx"
		},
		{
			name: "AI/F0AiMask",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiMask/__stories__/F0AiMask.stories.tsx"
		},
		{
			name: "AI/F0AiMessagesContainer",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiMessagesContainer/__stories__/F0AiMessagesContainer.stories.tsx"
		},
		{
			name: "AI/F0AiMessageSources",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiMessageSources/__stories__/F0AiMessageSources.stories.tsx"
		},
		{
			name: "AI/F0AiProcessingOverlay",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiProcessingOverlay/__stories__/F0AiProcessingOverlay.stories.tsx"
		},
		{
			name: "AI/F0AiProposalCard",
			zone: "kits",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiProposalCard/__stories__/F0AiProposalCard.stories.tsx"
		},
		{
			name: "AI/F0AiTableCard",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiTableCard/__stories__/F0AiTableCard.stories.tsx"
		},
		{
			name: "AI/F0AuraVoiceAnimation",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AuraVoiceAnimation/__stories__/F0AuraVoiceAnimation.stories.tsx"
		},
		{
			name: "AI/F0CanvasCard",
			zone: "kits",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/canvas/F0CanvasCard/__stories__/F0CanvasCard.stories.tsx"
		},
		{
			name: "AI/F0ClarifyingPanel",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0ClarifyingPanel/__stories__/F0ClarifyingPanel.stories.tsx"
		},
		{
			name: "AI/F0HILActionConfirmation",
			zone: "kits",
			apiStatus: "deprecated",
			tags: ["deprecated"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0HILActionConfirmation/__stories__/F0HILActionConfirmation.stories.tsx"
		},
		{
			name: "AI/F0OneIcon",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0OneIcon/__stories__/F0OneIcon.stories.tsx"
		},
		{
			name: "AI/F0OneSwitch",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0OneSwitch/__stories__/F0OneSwitch.stories.tsx"
		},
		{
			name: "AI/MarkdownRenderers",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/ai/F0AiChat/components/markdownRenderers/__stories__/MarkdownRenderers.stories.tsx"
		},
		{
			name: "Charts/RadarChart",
			zone: "kits",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/Charts/RadarChart/index.stories.tsx"
		},
		{
			name: "F0DataChart/Bar",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Bar.stories.tsx"
		},
		{
			name: "F0DataChart/Empty states",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/EmptyStates.stories.tsx"
		},
		{
			name: "F0DataChart/Funnel",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Funnel.stories.tsx"
		},
		{
			name: "F0DataChart/Gauge",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Gauge.stories.tsx"
		},
		{
			name: "F0DataChart/Heatmap",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Heatmap.stories.tsx"
		},
		{
			name: "F0DataChart/Line",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Line.stories.tsx"
		},
		{
			name: "F0DataChart/Pie",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Pie.stories.tsx"
		},
		{
			name: "F0DataChart/Radar",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Radar.stories.tsx"
		},
		{
			name: "F0DataChart/Scatter",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Scatter.stories.tsx"
		},
		{
			name: "F0DataChart/Skeletons",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 62
			},
			a11yTier: "todo",
			storyFile: "kits/F0DataChart/__stories__/Skeletons.stories.tsx"
		},
		{
			name: "Surveys/SurveyAnsweringForm",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyAnsweringForm/__stories__/SurveyAnsweringForm.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder",
			zone: "kits",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/Form/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/BaseQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/BaseQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/CheckboxQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/CheckboxQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/DateQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/DateQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/DropdownSingleQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "enforced",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/DropdownSingleQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/FileQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/FileQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/LinkQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/LinkQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/NumericQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/NumericQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/RatingQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "enforced",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/RatingQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/Section",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/Section/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/SelectQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "enforced",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/SelectQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveyFormBuilder/TextQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveyFormBuilder/QuestionTypes/TextQuestion/index.stories.tsx"
		},
		{
			name: "Surveys/SurveySampleQuestion",
			zone: "kits",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "kits/surveys/SurveySampleQuestion/index.stories.tsx"
		},
		{
			name: "Dashboard",
			zone: "layouts",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "layouts/Dashboard/__stories__/Dashboard.stories.tsx"
		},
		{
			name: "HomeLayout",
			zone: "layouts",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "layouts/HomeLayout/index.stories.tsx"
		},
		{
			name: "Layout System",
			zone: "layouts",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "layouts/Layout/__stories__/Layout.stories.tsx"
		},
		{
			name: "StandardLayout",
			zone: "layouts",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "layouts/StandardLayout/__stories__/StandardLayout.stories.tsx"
		},
		{
			name: "AI Cocreation/Phases",
			zone: "patterns",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Cocreation/__stories__/phases.stories.tsx"
		},
		{
			name: "AI Cocreation/Standard flow",
			zone: "patterns",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Cocreation/__stories__/standard-flow.stories.tsx"
		},
		{
			name: "AI Cocreation/Walkthrough",
			zone: "patterns",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Cocreation/__stories__/creation-with-ai.stories.tsx"
		},
		{
			name: "AnalyticsDashboard",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 17
			},
			a11yTier: "todo",
			storyFile: "patterns/F0AnalyticsDashboard/__stories__/index.stories.tsx"
		},
		{
			name: "App shell/ApplicationFrame",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/ApplicationFrame/index.stories.tsx"
		},
		{
			name: "Data Collection/Callbacks",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/callbacks/callbacks.stories.tsx"
		},
		{
			name: "Data Collection/CRUD patterns/By view",
			zone: "patterns",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/crud-patterns/by-view/by-view.stories.tsx"
		},
		{
			name: "Data Collection/CRUD patterns/Create",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/crud-patterns/create/create.stories.tsx"
		},
		{
			name: "Data Collection/CRUD patterns/Delete",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/crud-patterns/delete/delete.stories.tsx"
		},
		{
			name: "Data Collection/CRUD patterns/Read",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/crud-patterns/read/read.stories.tsx"
		},
		{
			name: "Data Collection/CRUD patterns/Update",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/crud-patterns/update/update.stories.tsx"
		},
		{
			name: "Data Collection/Full height",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/full-height.stories.tsx"
		},
		{
			name: "Data Collection/Grouping",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "patterns/OneDataCollection/__stories__/grouping.stories.tsx"
		},
		{
			name: "Data Collection/Inside Page",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/inside-page.stories.tsx"
		},
		{
			name: "Data Collection/Navigation Filters",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 8
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/navigation-filters/navigation-filters.stories.tsx"
		},
		{
			name: "Data Collection/Summary",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "patterns/OneDataCollection/__stories__/summary.stories.tsx"
		},
		{
			name: "Data Collection/Temporary or Deprecated features",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/temporary-deprecated/temporary-deprecated.stories.tsx"
		},
		{
			name: "Data Collection/Total Items Summary",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/total-items-summary/total-items-summary.stories.tsx"
		},
		{
			name: "Data Collection/URL params",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/url-params.stories.tsx"
		},
		{
			name: "Data Collection/useDataCollectionItemNavigation",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "patterns/OneDataCollection/hooks/useDataCollectionItemNavigation/__stories__/useDataCollectionItemNavigation.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Card",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "skipped",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/card/card.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Editable Table",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 7
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/editable-table/editable-table.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Graph",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/graph.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Kanban",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/kanban.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/List",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/list/list.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Table",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 14
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/table/table.stories.tsx"
		},
		{
			name: "Data Collection/Visualizations/Table/Default expanded",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 14
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDataCollection/__stories__/visualizations/table/default-expanded.stories.tsx"
		},
		{
			name: "Dialog",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Dialog/__stories__/F0Modal.stories.tsx"
		},
		{
			name: "Filters/DateNavigator",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/OneDateNavigator/__stories__/OneDateNavigator.stories.tsx"
		},
		{
			name: "Filters/FilterPicker",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["!autodocs", "stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneFilterPicker/__stories__/OneFilterPicker.stories.tsx"
		},
		{
			name: "Filters/FilterPicker/Filters/InFilter",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneFilterPicker/filterTypes/InFilter/__stories__/InFilter.stories.tsx"
		},
		{
			name: "Filters/FilterPicker/Filters/NumberFilter",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneFilterPicker/filterTypes/NumberFilter/__stories__/NumberFilter.stories.tsx"
		},
		{
			name: "Filters/FilterPicker/Filters/SearchFilter",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/OneFilterPicker/filterTypes/SearchFilter/__stories__/SearchFilter.stories.tsx"
		},
		{
			name: "Filters/FilterPickerContent",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/F0FilterPickerContent/__stories__/F0FilterPickerContent.stories.tsx"
		},
		{
			name: "Forms/F0Form",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 31
			},
			a11yTier: "enforced",
			storyFile: "patterns/F0Form/__stories__/F0Form.stories.tsx"
		},
		{
			name: "Forms/F0FormField",
			zone: "patterns",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "skipped",
			storyFile: "patterns/F0FormField/__stories__/F0FormField.stories.tsx"
		},
		{
			name: "Forms/F0WizardForm",
			zone: "patterns",
			apiStatus: "unknown",
			tags: ["!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 3
			},
			a11yTier: "todo",
			storyFile: "patterns/F0WizardForm/__stories__/F0WizardForm.stories.tsx"
		},
		{
			name: "Forms/TimeField hourCycle",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 31
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Form/__stories__/TimeFieldHourCycle.stories.tsx"
		},
		{
			name: "Forms/ValidationIssues",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 31
			},
			a11yTier: "enforced",
			storyFile: "patterns/F0Form/__stories__/ValidationIssues.test.stories.tsx"
		},
		{
			name: "Graph/F0Graph",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Graph/__stories__/F0Graph.stories.tsx"
		},
		{
			name: "Graph/F0GraphControls",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Graph/components/F0GraphControls/__stories__/F0GraphControls.stories.tsx"
		},
		{
			name: "Graph/F0GraphEdge",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Graph/components/F0GraphEdge/__stories__/F0GraphEdge.stories.tsx"
		},
		{
			name: "Graph/F0GraphNode",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 4
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Graph/components/F0GraphNode/__stories__/F0GraphNode.stories.tsx"
		},
		{
			name: "Map/F0Map",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 2
			},
			a11yTier: "todo",
			storyFile: "patterns/F0Map/__stories__/F0Map.stories.tsx"
		},
		{
			name: "Navigation/Page",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Page/index.stories.tsx"
		},
		{
			name: "Navigation/Sidebar/ChatList",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 7
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Sidebar/Chats/index.stories.tsx"
		},
		{
			name: "Navigation/Sidebar/SidebarTabPanel",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Sidebar/TabPanel/index.stories.tsx"
		},
		{
			name: "Navigation/Sidebar/Tabs",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Sidebar/Tabs/index.stories.tsx"
		},
		{
			name: "Navigation/SidebarFooter",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Sidebar/Footer/index.stories.tsx"
		},
		{
			name: "Navigation/Tabs",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "patterns/Navigation/Tabs/index.stories.tsx"
		},
		{
			name: "Patterns/F0CarouselDialog",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 4
			},
			a11yTier: "enforced",
			storyFile: "patterns/F0CarouselDialog/index.stories.tsx"
		},
		{
			name: "Resource header",
			zone: "patterns",
			apiStatus: "stable",
			tags: ["stable"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 10
			},
			a11yTier: "enforced",
			storyFile: "patterns/F0ResourceHeader/index.stories.tsx"
		},
		{
			name: "Section header",
			zone: "patterns",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 2,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !0,
				exampleCount: 1
			},
			a11yTier: "todo",
			storyFile: "patterns/SectionHeader/index.stories.tsx"
		},
		{
			name: "F0BookAMeetingCard",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ai/F0BookAMeetingCard/__stories__/F0BookAMeetingCard.stories.tsx"
		},
		{
			name: "F0Chat",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 6
			},
			a11yTier: "todo",
			storyFile: "sds/chat/F0Chat/F0Chat.stories.tsx"
		},
		{
			name: "F0DemoCard",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ai/F0DemoCard/__stories__/F0DemoCard.stories.tsx"
		},
		{
			name: "F0FAQCard",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ai/F0FAQCard/__stories__/F0FAQCard.stories.tsx"
		},
		{
			name: "F0ModuleCard",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ai/F0ModuleCard/__stories__/F0ModuleCard.stories.tsx"
		},
		{
			name: "F0QuestionCard",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ai/F0QuestionCard/__stories__/F0QuestionCard.stories.tsx"
		},
		{
			name: "Home/AvatarPulse",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/F0AvatarPulse/__storybook__/F0AvatarPulse.stories.tsx"
		},
		{
			name: "Home/ClockInControls",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/ClockIn/ClockInControls/index.stories.tsx"
		},
		{
			name: "Home/ClockInGraph",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/ClockIn/ClockInGraph/index.stories.tsx"
		},
		{
			name: "Home/Communities/Celebration",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/Communities/Celebration/index.stories.tsx"
		},
		{
			name: "Home/Communities/F0CommunityPostsCarousel",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "good",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 4
			},
			a11yTier: "enforced",
			storyFile: "sds/Home/Communities/F0CommunityPostsCarousel/index.stories.tsx"
		},
		{
			name: "Home/Communities/HighlightBanner",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/Communities/HighlightBanner/index.stories.tsx"
		},
		{
			name: "Home/Communities/Post/CommunityPost",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/Communities/Post/CommunityPost/index.stories.tsx"
		},
		{
			name: "Home/Communities/Post/PostDescription",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/Communities/Post/PostDescription/index.stories.tsx"
		},
		{
			name: "Home/Communities/Post/PostEvent",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/Communities/Post/PostEvent/index.stories.tsx"
		},
		{
			name: "Home/DaytimePage",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/DaytimePage/index.stories.tsx"
		},
		{
			name: "Home/ENPSButton",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental", "!autodocs"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "gold",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 5
			},
			a11yTier: "enforced",
			storyFile: "sds/Home/F0ENPSButton/__stories__/F0ENPSButton.stories.tsx"
		},
		{
			name: "Home/HomeListItem",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/HomeListItem/index.stories.tsx"
		},
		{
			name: "Home/NewHomeLayout",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/NewHomeLayout/index.stories.tsx"
		},
		{
			name: "Home/SlotWidget",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !0,
			docQuality: "stub",
			docSignals: {
				sectionsCount: 0,
				hasProps: !0,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				hasDoDonts: !1,
				exampleCount: 6
			},
			a11yTier: "todo",
			storyFile: "sds/Home/SlotWidget/index.stories.tsx"
		},
		{
			name: "Home/WidgetCatalog",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/WidgetCatalog/index.stories.tsx"
		},
		{
			name: "Home/WidgetContainer",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/WidgetContainer/index.stories.tsx"
		},
		{
			name: "Home/WidgetUpdateDialog",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Home/WidgetUpdateDialog/index.stories.tsx"
		},
		{
			name: "Inbox/ActivityItem",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/inbox/Activity/ActivityItem/index.stories.tsx"
		},
		{
			name: "Inbox/ApprovalHistory",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/inbox/OneApprovalHistory/index.stories.tsx"
		},
		{
			name: "Internals/EmojiPicker",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/chat/F0Chat/components/EmojiPicker/__stories__/EmojiPicker.stories.tsx"
		},
		{
			name: "ProductBlankslate",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/ProductBlankslate/index.stories.tsx"
		},
		{
			name: "Profile/CategoryBarSection",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Profile/CategoryBarSection/index.stories.tsx"
		},
		{
			name: "Profile/PrivateBox",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Profile/PrivateBox/index.stories.tsx"
		},
		{
			name: "Profile/TaskItem",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Profile/TasksList/TaskItem/index.stories.tsx"
		},
		{
			name: "Profile/TasksList",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/Profile/TasksList/index.stories.tsx"
		},
		{
			name: "Reactions",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["!autodocs", "experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !0,
			hasSnapshot: !0,
			hasMdxDocs: !0,
			docQuality: "acceptable",
			docSignals: {
				sectionsCount: 3,
				hasProps: !0,
				hasWhenToUse: !0,
				hasWhenNotToUse: !0,
				hasDoDonts: !0,
				exampleCount: 2
			},
			a11yTier: "todo",
			storyFile: "sds/social/Reactions/index.stories.tsx"
		},
		{
			name: "TimelineRow",
			zone: "sds",
			apiStatus: "experimental",
			tags: ["experimental"],
			hasStories: !0,
			hasUnitTests: !0,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/timeline/__stories__/F0TimelineRow.stories.tsx"
		},
		{
			name: "UpsellingAlert",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !0,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/UpsellingAlert/index.stories.tsx"
		},
		{
			name: "UpsellingButton",
			zone: "sds",
			apiStatus: "unknown",
			tags: [],
			hasStories: !0,
			hasUnitTests: !1,
			hasPlayFunction: !1,
			hasSnapshot: !1,
			hasMdxDocs: !1,
			docQuality: "none",
			docSignals: {
				sectionsCount: 0,
				hasProps: !1,
				hasDoDonts: !1,
				hasWhenToUse: !1,
				hasWhenNotToUse: !1,
				exampleCount: 0
			},
			a11yTier: "todo",
			storyFile: "sds/UpsellingKit/UpsellingButton/index.stories.tsx"
		}
	]
}, f = "good", p = {
	stable: "Stable",
	experimental: "Experimental",
	deprecated: "Deprecated",
	internal: "Internal",
	unknown: "No tag"
};
function m(e, t, n) {
	return e === "deprecated" ? "deprecated" : e === "internal" ? "internal" : n && t ? "stable" : "experimental";
}
function h(e) {
	return e === "stable" || e === "experimental";
}
function g(e, t, n, r) {
	return e === "deprecated" ? "Deprecated — avoid in new work and migrate to the recommended alternative." : e === "internal" ? "Internal — not part of the public API." : t && n ? "Stable — meets the full definition of done." : r === "tagged-but-below-bar" ? "Marked stable, but it doesn't meet the definition of done yet — treated as experimental." : r === "meets-bar-not-tagged" ? "Meets the definition of done but isn't marked stable yet — still experimental until promoted." : e === "unknown" ? "No maturity tag set — treated as experimental. Complete the checklist below to reach stable." : "Experimental. Complete the checklist below to reach stable.";
}
var _ = /^F0[A-Z]/;
function v(e) {
	let t = e.split("/");
	return t.pop(), t[t.length - 1] === "__stories__" && t.pop(), t[t.length - 1] ?? "";
}
var y = [
	"none",
	"stub",
	"acceptable",
	"good",
	"gold"
];
function b(e, t) {
	return y.indexOf(e) >= y.indexOf(t);
}
var x = [
	"skipped",
	"todo",
	"enforced"
];
function S(e, t) {
	return x.indexOf(e) >= x.indexOf(t);
}
var C = [
	{
		key: "naming",
		label: "Named with the \"F0\" prefix",
		detail: "The component folder and exported symbol are \"F0\" followed by an uppercase letter (e.g. F0Button).",
		isMet: (e) => _.test(v(e.storyFile))
	},
	{
		key: "stories",
		label: "Has Storybook stories",
		detail: "A .stories.tsx file with representative stories.",
		isMet: (e) => e.hasStories
	},
	{
		key: "unitTests",
		label: "Has unit tests",
		detail: "Vitest unit tests covering the public API (a __tests__/ folder or .test.tsx file).",
		isMet: (e) => e.hasUnitTests
	},
	{
		key: "playFunction",
		label: "Has a play function",
		detail: "A Storybook play function (interaction test) covering the primary user flow.",
		isMet: (e) => e.hasPlayFunction
	},
	{
		key: "snapshot",
		label: "Has a visual snapshot story",
		detail: "A Chromatic visual-regression story (via withSnapshot) that renders the component's variants, so unintended visual changes are caught.",
		isMet: (e) => e.hasSnapshot
	},
	{
		key: "mdxDocs",
		label: "Has MDX documentation",
		detail: "An .mdx documentation page alongside the stories.",
		isMet: (e) => e.hasMdxDocs
	},
	{
		key: "docQuality",
		label: `Docs reach "${f}" quality`,
		detail: "Docs at the Good tier build on the Acceptable base and add:",
		criteria: [
			{
				label: "Required sections (Anatomy, Guidelines, Accessibility) and a props table",
				isMet: (e) => e.docSignals.sectionsCount >= 2 && e.docSignals.hasProps
			},
			{
				label: "DoDont examples with realistic Factorial copy",
				isMet: (e) => e.docSignals.hasDoDonts
			},
			{
				label: "A \"when not to use\" section",
				isMet: (e) => e.docSignals.hasWhenNotToUse
			},
			{
				label: "At least three named example stories",
				isMet: (e) => e.docSignals.exampleCount >= 3
			}
		],
		isMet: (e) => b(e.docQuality, f)
	},
	{
		key: "a11y",
		label: "Accessibility enforced",
		detail: "Every story runs axe blocking (test: \"error\"), never skipped or \"todo\" — on a green main, axe-clean (WCAG 2.0–2.2, A/AA).",
		isMet: (e) => S(e.a11yTier, "enforced")
	}
];
function w(e) {
	let t = C.map((t) => ({
		key: t.key,
		label: t.label,
		met: t.isMet(e),
		detail: t.detail,
		criteria: t.criteria?.map((t) => ({
			label: t.label,
			met: t.isMet(e)
		}))
	})), n = t.filter((e) => !e.met).map((e) => e.label), r = n.length === 0, i = e.apiStatus === "stable", a = null;
	i && !r ? a = "tagged-but-below-bar" : !i && r && (a = "meets-bar-not-tagged");
	let o = m(e.apiStatus, r, i);
	return {
		...e,
		requirements: t,
		missing: n,
		meetsBar: r,
		taggedStable: i,
		stableReady: r,
		discrepancy: a,
		effectiveStatus: o,
		label: p[o],
		summary: g(e.apiStatus, r, i, a),
		showChecklist: h(o)
	};
}
function T(e) {
	return e.toLowerCase().replace(/^f0/, "").replace(/[^a-z0-9]/g, "");
}
function E(e) {
	let t = e.split("/");
	return t[t.length - 1] ?? e;
}
function D(e, t = d.components) {
	if (!e) return null;
	let n = T(e), r = T(E(e)), i = (e) => e.find((e) => e.zone === "components") ?? e[0], a = t.filter((e) => T(e.name) === n);
	return a.length === 0 && (a = t.filter((e) => T(E(e.name)) === n || T(e.name) === r || T(E(e.name)) === r)), a.length === 0 && (a = t.filter((e) => T(e.name).endsWith(n))), a.length > 0 ? w(i(a)) : null;
}
function O(e = d.components) {
	return e.map(w);
}
function k() {
	return d.generatedAt;
}
//#endregion
//#region src/lib/storybook-utils/a11yAxeConfig.ts
var A = [
	"wcag2a",
	"wcag2aa",
	"wcag21a",
	"wcag21aa",
	"wcag22a",
	"wcag22aa"
];
[...A];
//#endregion
//#region src/component-status/A11yRow.tsx
var j = [...A];
function M(e) {
	let t = null;
	for (let n of e) {
		let e = /^wcag(\d)(\d)(\d{1,2})$/.exec(n);
		if (e) {
			t = `${e[1]}.${e[2]}.${e[3]}`;
			break;
		}
	}
	let n = e.some((e) => /^wcag2\d?aa$/.test(e)) ? "AA" : "A", r = e.includes("wcag22a") || e.includes("wcag22aa") ? "2.2" : e.includes("wcag21a") || e.includes("wcag21aa") ? "2.1" : "2.0";
	return {
		sc: t,
		level: n,
		version: r
	};
}
function N() {
	return typeof document < "u" && document.querySelector("#storybook-docs") !== null;
}
async function P() {
	let { default: t } = await import("./axe-DfI8zeq3.js").then((t) => /* @__PURE__ */ e(t.default, 1)), n = Array.from(document.querySelectorAll("#storybook-docs .docs-story")), r = n.length > 0 ? n : [], i = /* @__PURE__ */ new Map();
	for (let e of r) {
		let n;
		try {
			n = await t.run(e, { runOnly: {
				type: "tag",
				values: j
			} });
		} catch {
			continue;
		}
		for (let e of n.violations) {
			let t = i.get(e.id), n = e.nodes.length;
			t ? t.nodes += n : i.set(e.id, {
				ruleId: e.id,
				description: e.description,
				nodes: n,
				...M(e.tags)
			});
		}
	}
	return Array.from(i.values()).sort((e, t) => t.nodes - e.nodes);
}
function F() {
	let [e, t] = c({ status: "idle" }), n = s(!1);
	return {
		state: e,
		start: a(() => {
			if (!n.current) {
				if (n.current = !0, !N()) {
					t({ status: "unavailable" });
					return;
				}
				t({ status: "running" }), P().then((e) => t({
					status: "done",
					criteria: e
				}), () => t({ status: "unavailable" }));
			}
		}, [])
	};
}
var I = {
	panel: {
		strong: "text-f1-foreground",
		muted: "text-f1-foreground-secondary"
	},
	tooltip: {
		strong: "",
		muted: "opacity-75"
	}
};
function L({ state: e, tone: t = "panel" }) {
	let n = I[t];
	return /* @__PURE__ */ u("div", {
		className: "mt-2",
		"aria-live": "polite",
		children: [
			e.status === "running" && /* @__PURE__ */ u("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ u("svg", {
					className: `h-4 w-4 shrink-0 animate-spin motion-reduce:animate-none ${n.muted}`,
					viewBox: "0 0 24 24",
					fill: "none",
					"aria-hidden": "true",
					children: [/* @__PURE__ */ l("circle", {
						cx: "12",
						cy: "12",
						r: "9",
						stroke: "currentColor",
						strokeOpacity: "0.25",
						strokeWidth: "3"
					}), /* @__PURE__ */ l("path", {
						d: "M21 12a9 9 0 0 0-9-9",
						stroke: "currentColor",
						strokeWidth: "3",
						strokeLinecap: "round"
					})]
				}), /* @__PURE__ */ l("span", { children: "Checking the rendered stories…" })]
			}),
			e.status === "unavailable" && /* @__PURE__ */ u("p", {
				className: "m-0",
				children: [
					"Live results are available on the Storybook docs page. See the story’s",
					" ",
					/* @__PURE__ */ l("strong", { children: "Accessibility" }),
					" tab for per-element detail."
				]
			}),
			e.status === "done" && e.criteria.length === 0 && /* @__PURE__ */ l("p", {
				className: "m-0 text-f1-foreground-positive",
				children: "No violations in the stories’ default state."
			}),
			e.status === "done" && e.criteria.length > 0 && /* @__PURE__ */ l("div", {
				role: "list",
				className: "space-y-1",
				children: e.criteria.map((e) => /* @__PURE__ */ u("div", {
					role: "listitem",
					className: "flex items-start gap-2 text-base",
					children: [/* @__PURE__ */ l("span", {
						"aria-hidden": !0,
						className: "shrink-0 text-f1-foreground-warning",
						children: "⚠"
					}), /* @__PURE__ */ u("span", { children: [
						/* @__PURE__ */ l("code", {
							className: n.strong,
							children: e.ruleId
						}),
						e.sc && /* @__PURE__ */ u("span", {
							className: n.muted,
							children: [
								" ",
								"· WCAG ",
								e.sc,
								" ",
								e.level,
								" (",
								e.version,
								")"
							]
						}),
						/* @__PURE__ */ u("span", {
							className: n.muted,
							children: [
								" ",
								"· ",
								e.description,
								" · ",
								e.nodes,
								" ",
								e.nodes === 1 ? "element" : "elements"
							]
						})
					] })]
				}, e.ruleId))
			}),
			(e.status === "done" || e.status === "unavailable") && /* @__PURE__ */ l("p", {
				className: `mt-2 text-sm ${n.muted}`,
				children: "Checked in each story’s default state — violations behind interactions (open menus, dialogs) aren’t shown here. CI enforces the full set, including play-function states."
			})
		]
	});
}
function R(e) {
	let t = e === "enforced";
	return {
		enforced: t,
		glyph: t ? "✓" : "✕",
		text: e === "enforced" ? "enforced" : e === "skipped" ? "axe skipped" : "not enforced yet"
	};
}
function z({ detail: e, tier: t }) {
	let { state: n, start: r } = F(), i = a((e) => {
		e.currentTarget.open && r();
	}, [r]), { glyph: o, enforced: s, text: c } = R(t);
	return /* @__PURE__ */ u("div", {
		role: "listitem",
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ l("span", {
			"aria-hidden": !0,
			className: `mt-0.5 shrink-0 ${s ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
			children: o
		}), /* @__PURE__ */ u("div", {
			className: "min-w-0",
			children: [/* @__PURE__ */ u("div", {
				className: "text-base text-f1-foreground",
				children: [
					"Accessibility",
					" ",
					/* @__PURE__ */ u("span", {
						className: "text-f1-foreground-secondary",
						children: ["— ", c]
					})
				]
			}), /* @__PURE__ */ u("div", {
				className: "mt-0.5 text-base text-f1-foreground-secondary",
				children: [e, /* @__PURE__ */ u("details", {
					className: "mt-1",
					onToggle: i,
					children: [/* @__PURE__ */ l("summary", {
						className: "cursor-pointer list-none text-f1-foreground marker:hidden [&::-webkit-details-marker]:hidden",
						children: "Check the rendered stories"
					}), /* @__PURE__ */ l(L, {
						state: n,
						tone: "panel"
					})]
				})]
			})]
		})]
	});
}
function B({ detail: e, tier: t }) {
	let { state: n, start: r } = F();
	o(() => {
		r();
	}, [r]);
	let { glyph: i, enforced: a, text: s } = R(t);
	return /* @__PURE__ */ u("div", {
		role: "listitem",
		className: "flex items-start gap-2",
		children: [/* @__PURE__ */ l("span", {
			"aria-hidden": !0,
			className: `mt-0.5 shrink-0 ${a ? "text-f1-foreground-positive" : "opacity-60"}`,
			children: i
		}), /* @__PURE__ */ u("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ u("div", {
					className: "text-base",
					children: ["Accessibility ", /* @__PURE__ */ u("span", {
						className: "opacity-75",
						children: ["— ", s]
					})]
				}),
				/* @__PURE__ */ l("div", {
					className: "mt-0.5 text-base opacity-75",
					children: e
				}),
				/* @__PURE__ */ l(L, {
					state: n,
					tone: "tooltip"
				})
			]
		})]
	});
}
//#endregion
//#region src/component-status/ComponentStability.tsx
var V = {
	stable: {
		bg: "bg-f1-background-positive",
		text: "text-f1-foreground-positive",
		dot: "bg-f1-background-positive-bold"
	},
	experimental: {
		bg: "bg-f1-background-warning",
		text: "text-f1-foreground-warning",
		dot: "bg-f1-background-warning-bold"
	},
	deprecated: {
		bg: "bg-f1-background-critical",
		text: "text-f1-foreground-critical",
		dot: "bg-f1-background-critical-bold"
	},
	internal: {
		bg: "bg-f1-background-info",
		text: "text-f1-foreground-info",
		dot: "bg-f1-background-info-bold"
	},
	unknown: {
		bg: "bg-f1-background-secondary",
		text: "text-f1-foreground-secondary",
		dot: "bg-f1-foreground-disabled"
	}
};
function H({ status: e }) {
	let t = V[e.effectiveStatus];
	return /* @__PURE__ */ u("span", {
		className: `inline-flex items-center gap-2 rounded-full px-3 py-1 text-base font-medium ${t.bg} ${t.text}`,
		children: [/* @__PURE__ */ l("span", { className: `h-2 w-2 rounded-full ${t.dot}` }), e.label]
	});
}
function U({ componentName: e, components: t, className: n }) {
	let r = D(e, t);
	return r ? /* @__PURE__ */ u("div", {
		className: `sb-unstyled rounded-lg border border-f1-border bg-f1-background ${n ?? ""}`,
		children: [
			/* @__PURE__ */ l("h3", {
				className: "m-0 mb-3 text-xl font-semibold text-f1-foreground",
				children: "Maturity level"
			}),
			/* @__PURE__ */ l("div", {
				className: "mb-2",
				children: /* @__PURE__ */ l(H, { status: r })
			}),
			/* @__PURE__ */ l("p", {
				className: "m-0 text-lg text-f1-foreground-secondary",
				children: r.summary
			}),
			r.showChecklist && /* @__PURE__ */ l("div", {
				role: "list",
				className: "mt-4 space-y-3",
				children: r.requirements.map((e) => e.key === "a11y" ? /* @__PURE__ */ l(z, {
					detail: e.detail,
					tier: r.a11yTier
				}, e.key) : /* @__PURE__ */ u("div", {
					role: "listitem",
					className: "flex items-start gap-2",
					children: [/* @__PURE__ */ l("span", {
						"aria-hidden": !0,
						className: `mt-0.5 shrink-0 ${e.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
						children: e.met ? "✓" : "✕"
					}), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("div", {
						className: "text-base text-f1-foreground",
						children: e.label
					}), /* @__PURE__ */ u("div", {
						className: "mt-0.5 text-base text-f1-foreground-secondary",
						children: [e.detail, e.criteria && e.criteria.length > 0 && /* @__PURE__ */ l("div", {
							role: "list",
							className: "mt-1 space-y-0.5",
							children: e.criteria.map((e) => /* @__PURE__ */ u("div", {
								role: "listitem",
								className: "flex items-start gap-2 text-base",
								children: [/* @__PURE__ */ l("span", {
									"aria-hidden": !0,
									className: `shrink-0 ${e.met ? "text-f1-foreground-positive" : "text-f1-foreground-secondary"}`,
									children: e.met ? "✓" : "✕"
								}), /* @__PURE__ */ l("span", { children: e.label })]
							}, e.label))
						})]
					})] })]
				}, e.key))
			})
		]
	}) : null;
}
function W({ status: e }) {
	return /* @__PURE__ */ u("div", {
		className: "text-f1-foreground-inverse",
		children: [/* @__PURE__ */ l("p", {
			className: "m-0 text-base opacity-90",
			children: e.summary
		}), e.showChecklist && /* @__PURE__ */ l("div", {
			role: "list",
			className: "mt-3 space-y-3",
			children: e.requirements.map((t) => t.key === "a11y" ? /* @__PURE__ */ l(B, {
				detail: t.detail,
				tier: e.a11yTier
			}, t.key) : /* @__PURE__ */ u("div", {
				role: "listitem",
				className: "flex items-start gap-2",
				children: [/* @__PURE__ */ l("span", {
					"aria-hidden": !0,
					className: `mt-0.5 shrink-0 ${t.met ? "text-f1-foreground-positive" : "opacity-60"}`,
					children: t.met ? "✓" : "✕"
				}), /* @__PURE__ */ u("div", { children: [/* @__PURE__ */ l("div", {
					className: "text-base",
					children: t.label
				}), /* @__PURE__ */ u("div", {
					className: "mt-0.5 text-base opacity-75",
					children: [t.detail, t.criteria && t.criteria.length > 0 && /* @__PURE__ */ l("div", {
						role: "list",
						className: "mt-1 space-y-0.5",
						children: t.criteria.map((e) => /* @__PURE__ */ u("div", {
							role: "listitem",
							className: "flex items-start gap-2 text-base",
							children: [/* @__PURE__ */ l("span", {
								"aria-hidden": !0,
								className: `shrink-0 ${e.met ? "text-f1-foreground-positive" : "opacity-60"}`,
								children: e.met ? "✓" : "✕"
							}), /* @__PURE__ */ l("span", { children: e.label })]
						}, e.label))
					})]
				})] })]
			}, t.key))
		})]
	});
}
function G({ componentName: e, components: a, className: o }) {
	let s = D(e, a);
	return s ? /* @__PURE__ */ l(r, {
		delayDuration: 150,
		children: /* @__PURE__ */ u(i, { children: [/* @__PURE__ */ l(t, {
			asChild: !0,
			children: /* @__PURE__ */ l("span", {
				className: `sb-unstyled inline-flex cursor-help align-middle ${o ?? ""}`,
				children: /* @__PURE__ */ l(H, { status: s })
			})
		}), /* @__PURE__ */ l(n, {
			side: "bottom",
			align: "start",
			className: "max-h-[70vh] max-w-sm overflow-y-auto",
			children: /* @__PURE__ */ l("div", {
				className: "sb-unstyled p-1",
				children: /* @__PURE__ */ l(W, { status: s })
			})
		})] })
	}) : null;
}
//#endregion
export { x as A11Y_TIER_ORDER, G as ComponentMaturityTag, U as ComponentStability, _ as F0_NAME_PATTERN, f as MIN_DOC_QUALITY, C as STABLE_REQUIREMENTS, p as STATUS_LABELS, S as a11yTierAtLeast, v as componentFolderName, d as componentStatusData, w as evaluateComponentStatus, O as getAllComponentStatuses, D as getComponentStatus, k as getStatusGeneratedAt };
