import fs from "node:fs"
import { CODEOWNERS_FILE, generateCodeowners } from "./lib.ts"

fs.writeFileSync(CODEOWNERS_FILE, generateCodeowners())
console.log(`✅ CODEOWNERS regenerated at ${CODEOWNERS_FILE}`)
