import { FiltersState } from "@/components/OneFilterPicker/types"
import { useDataCollectionSource } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource"
import { DataCollectionDataAdapter } from "@/experimental/OneDataCollection/hooks/useDataCollectionSource/types"
import { BaseResponse } from "@/hooks/datasource/types"
import { PromiseState } from "@/lib/promise-to-observable"
import { Meta, StoryObj } from "@storybook/react-vite"
import { Observable } from "zen-observable-ts"
import { CustomEmptyStates } from "../hooks/useEmptyState"
import { OneDataCollection } from "../index"
import { NavigationFiltersDefinition } from "../navigationFilters/types"
import {
  createPromiseDataFetch,
  filters,
  getMockVisualizations,
  MockUser,
  mockUsers,
  sortings,
} from "./mockData"

const meta = {
  title: "Data Collection/Empty State",
  parameters: {
    layout: "padded",
  },
  tags: ["internal"],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

const BaseExampleComponent = ({
  dataAdapter,
  currentFilters,
  emptyStates,
}: {
  dataAdapter: DataCollectionDataAdapter<MockUser, typeof filters, NavigationFiltersDefinition>
  currentFilters?: FiltersState<typeof filters>
  emptyStates?: CustomEmptyStates
}) => {
  const dataSource = useDataCollectionSource({
    filters,
    dataAdapter,
    currentFilters,
    sortings,
    search: {
      enabled: true,
      sync: true,
    },
  })

  const mockVisualizations = getMockVisualizations()

  return (
    <OneDataCollection
      source={dataSource}
      visualizations={[mockVisualizations.table]}
      emptyStates={emptyStates}
    />
  )
}

// Basic story showing all action types
export const NoDataExample: Story = {
  render: () => {
    const dataAdapter = {
      fetchData: () =>
        new Observable<PromiseState<BaseResponse<MockUser>>>((subscriber) => {
          subscriber.next({
            loading: false,
            data: { records: [] },
          })
        }),
    }

    return <BaseExampleComponent dataAdapter={dataAdapter} />
  },
}

export const NoResultsExample: Story = {
  render: () => {
    const dataAdapter = {
      fetchData: createPromiseDataFetch(),
    }
    return (
      <BaseExampleComponent
        dataAdapter={dataAdapter}
        currentFilters={{ search: "Joey Tribbiani" }}
      />
    )
  },
}

export const ErrorExample: Story = {
  render: () => {
    const dataAdapter = {
      fetchData: () => Promise.reject(new Error("Error loading the users")),
    }
    return <BaseExampleComponent dataAdapter={dataAdapter} />
  },
}

export const CustomMessagesAndActions: Story = {
  render: () => {
    const dataAdapter = {
      fetchData: createPromiseDataFetch(),
    }

    const emptyStates: CustomEmptyStates = {
      "no-data": {
        description: "This is a no data custom message",
        emoji: "🤷",
      },
      "no-results": {
        title: "THIS IS A CUSTOM NO RESULTS TITLE",
        description: "This is a no results custom message",
        emoji: "😢",
        actions: [
          {
            label: "Go to main page",
            variant: "outline" as const,
            onClick: () => {
              console.log("clicked")
            },
          },
          {
            label: "Clear filters",
            onClick: () => {
              console.log("clicked")
            },
          },
        ],
      },
      error: {
        description: "This is a error custom message",
      },
    }

    return (
      <BaseExampleComponent
        dataAdapter={dataAdapter}
        currentFilters={{ search: "Joey Tribbiani" }}
        emptyStates={emptyStates}
      />
    )
  },
}

const intervalObservable = new Observable<PromiseState<BaseResponse<MockUser>>>((observer) => {
  let count = 0
  const intervalId = setInterval(() => {
    observer.next({
      loading: false,
      data: { records: mockUsers.slice(0, count) },
    })
    count++
    if (count > 5) {
      observer.complete()
    }
  }, 2000)

  // Teardown logic
  return () => clearInterval(intervalId)
})

// Example: subscribe and log emitted values
intervalObservable.subscribe({
  next(value) {
    console.log("Emitted:", value)
  },
  error(err) {
    console.error("Error:", err)
  },
  complete() {
    console.log("Completed!")
  },
})

export const EmptyToDataExample: Story = {
  parameters: {
    chromatic: {
      skipSnapshot: true,
    },
  },
  render: () => {
    const dataAdapter = {
      fetchData: () => intervalObservable,
    }

    return <BaseExampleComponent dataAdapter={dataAdapter} />
  },
}
