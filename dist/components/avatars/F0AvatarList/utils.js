function r(n, e) {
  switch (n) {
    case "person":
      return `${e.firstName} ${e.lastName}`;
    case "team":
      return e.name;
    case "company":
      return e.name;
    case "file":
      return e.file.name;
    case "flag":
      return e.name;
    default:
      return "";
  }
}
export {
  r as getAvatarDisplayName
};
