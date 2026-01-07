import { DataCollectionSettingsContextType } from "@/experimental/OneDataCollection/Settings/SettingsProvider"

export const handleTableResetSettings = (
  settings: DataCollectionSettingsContextType
) => {
  settings.setVisualizationSettings("table", {})
}
