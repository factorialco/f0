import { DataCollectionSettingsContextType } from "@/experimental/OneDataCollection/Settings/SettingsProvider"

export const handleEditableTableResetSettings = (
  settings: DataCollectionSettingsContextType
) => {
  settings.setVisualizationSettings("editableTable", {})
}
