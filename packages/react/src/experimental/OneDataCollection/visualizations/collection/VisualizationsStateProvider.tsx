import React, { createContext, useContext, useState } from "react"
import { collectionVisualizations } from "./collectionViewRegistry"

// Utility type to extract settings from visualization definitions
type ExtractVisualizationState<T> = T extends {
  state: {
    default: infer S
  }
}
  ? S
  : never

// Dynamic type that extracts settings from all visualizations
type VisualizationState = {
  [K in keyof typeof collectionVisualizations]: ExtractVisualizationState<
    (typeof collectionVisualizations)[K]
  >
}

export type DataCollectionVisualizationsState = {
  // Dynamically generated from visualization definitions
  visualization: VisualizationState
}

// Helper function to generate initial settings from visualization registry
const generateInitialVisualizationState = (): VisualizationState => {
  const state = {} as Record<string, unknown>

  for (const [key, visualization] of Object.entries(collectionVisualizations)) {
    if (visualization.state.default) {
      state[key] = { ...visualization.state.default }
    }
  }

  return state as VisualizationState
}

export interface DataCollectionVisualizationsStateContextType {
  setVisualizationState: (
    key: keyof VisualizationState,
    state:
      | VisualizationState[keyof VisualizationState]
      | ((
          prevVisualiztionState: VisualizationState[keyof VisualizationState]
        ) => VisualizationState[keyof VisualizationState])
  ) => void
  visualizationsState: DataCollectionVisualizationsState
}

const DataCollectionVisualizationsStateContext =
  createContext<DataCollectionVisualizationsStateContextType>({
    setVisualizationState: () => {},
    visualizationsState: {
      // To avoid circular dependency initializating the state (the value is provided in the provider)
      visualization: {} as VisualizationState,
    },
  })

export const useDataCollectionVisualizationsState = () => {
  const context = useContext(DataCollectionVisualizationsStateContext)
  if (!context) {
    throw new Error(
      "useDataCollectionVisualizationsState must be used within a DataCollectionVisualizationsStateProvider"
    )
  }
  return context
}

export const DataCollectionVisualizationsStateProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, setState] = useState<DataCollectionVisualizationsState>({
    visualization: generateInitialVisualizationState(),
  })

  const setVisualizationState = (
    key: keyof VisualizationState,
    state:
      | VisualizationState[keyof VisualizationState]
      | ((
          prevVisualiztionState: VisualizationState[keyof VisualizationState]
        ) => VisualizationState[keyof VisualizationState])
  ) => {
    if (typeof state === "function") {
      setState((prev) => ({
        ...prev,
        visualization: {
          ...prev.visualization,
          [key]: state(prev.visualization[key]),
        },
      }))
    } else {
      setState((prev) => ({
        ...prev,
        visualization: {
          ...prev.visualization,
          [key]: state,
        },
      }))
    }
  }

  return (
    <DataCollectionVisualizationsStateContext.Provider
      value={{
        visualizationsState: state,
        setVisualizationState,
      }}
    >
      {children}
    </DataCollectionVisualizationsStateContext.Provider>
  )
}
