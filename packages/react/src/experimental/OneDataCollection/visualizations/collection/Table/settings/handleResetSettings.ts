import { DataCollectionSettingsContextType } from "@/experimental/OneDataCollection/Settings/SettingsProvider"

export const handleTableResetSettings = (
  settings: DataCollectionSettingsContextType
) => {
  console.log("reset settings table")

  settings.setVisualizationSettings("table", {
    order: [],
    hidden: [],
  })
}
