//#region src/components/avatars/F0AvatarList/utils.ts
function e(e, t) {
	switch (e) {
		case "person": return `${t.firstName} ${t.lastName}`;
		case "team": return t.name;
		case "company": return t.name;
		case "file": return t.file.name;
		case "flag": return t.name;
		default: return "";
	}
}
//#endregion
export { e as getAvatarDisplayName };
