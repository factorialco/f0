# Inter webfonts

These files are derived from the official Inter 4.1 web release:
https://github.com/rsms/inter/releases/tag/v4.1

The source files are `InterVariable.woff2` and
`InterVariable-Italic.woff2`. Their SHA-256 checksums are:

- `693b77d4f32ee9b8bfc995589b5fad5e99adf2832738661f5402f9978429a8e3`
- `e564f652916db6c139570fefb9524a77c4d48f30c92928de9db19b6b5c7a262a`

The published WOFF2 files retain the `opsz` axis from 14 to 32 and restrict
the `wght` axis to the 400–700 range used by F0. FontTools 4.64.0 was used to
split each style into the language subsets declared in `style.css`, while
retaining applicable OpenType layout features. Remaining source codepoints are
retained in the `symbols` subset.

The fonts remain licensed under the SIL Open Font License 1.1; see
`INTER-LICENSE.txt`.
