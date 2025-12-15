// packages/react/src/flags/flagsMap.ts
import type { ComponentType, ReactElement } from "react"

// Import all flags
import { CountryCode } from "@/lib/countries"

// Create type for the flag component
export type FlagComponent = ComponentType<React.SVGProps<SVGSVGElement>>

// Dynamically import all flag components from the components folder
const flagModules = import.meta.glob<{
  default: FlagComponent
}>("./components/*.tsx", { eager: true })

// Helper function to extract component name from file path
const getComponentName = (path: string): string => {
  const fileName = path.replace("./components/", "").replace(".tsx", "")
  return fileName.charAt(0).toUpperCase() + fileName.slice(1)
}

// Dynamically create and populate flags object
export const flagsComponents: Record<string, FlagComponent> = {}
for (const [path, module] of Object.entries(flagModules)) {
  const componentName = getComponentName(path)
  if (module.default) {
    flagsComponents[componentName] = module.default
  }
}

// Dynamically create and populate flags object
export const flagsMap: Record<CountryCode, FlagComponent> = {} as Record<
  CountryCode,
  FlagComponent
>

for (const [path, module] of Object.entries(flagModules)) {
  const countryCode = getComponentName(path).toLowerCase()
  if (module.default) {
    flagsMap[countryCode as CountryCode] = module.default
  }
}

// Helper function to get a flag component by its lowercase code
export const getFlag = (
  code: string
): FlagComponent | ReactElement | undefined => {
  const FlagComponent = flagsMap[code.toLowerCase() as CountryCode]

  if (!FlagComponent) {
    console.warn(`Flag component for code "${code}" not found`)
    return undefined
  }

  return FlagComponent
}

export default flagsMap
