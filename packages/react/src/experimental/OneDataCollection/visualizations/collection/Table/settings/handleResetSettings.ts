import { DataCollectionSettingsContextType } from "@/experimental/OneDataCollection/Settings/SettingsProvider"

export const handleTableResetSettings = (
  settings: DataCollectionSettingsContextType
) => {
  console.log("reset settings table")

  settings.setSettings({
    visualization: {
      table: {
        order: [],
        hidden: [],
      },
    },
  })
}
