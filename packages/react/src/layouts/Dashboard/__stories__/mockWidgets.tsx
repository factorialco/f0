import { F0DataChart } from "@/kits/F0DataChart"
import type { F0DataChartProps } from "@/kits/F0DataChart"
import {
  getMockVisualizations,
  ExampleComponent as OneDataCollectionExampleComponent,
} from "@/patterns/OneDataCollection/__stories__/mockData"

// Utility functions
const getRandomArrayElement = <T,>(array: readonly T[]): T => {
  return array[Math.floor(Math.random() * array.length)]
}

const generateRandomData = (
  length: number,
  min: number = 0,
  max: number = 100
): number[] => {
  return Array.from(
    { length },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  )
}

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const shortMonths = months.map((m) => m.slice(0, 3))

const departments = [
  "Marketing",
  "Sales",
  "Engineering",
  "Product",
  "Design",
  "Finance",
  "Legal",
  "HR",
  "Operations",
]

const locations = ["New York", "London", "Barcelona", "Berlin", "Remote"]

const seriesNames = ["Headcount", "Revenue", "Sales"]

// Chart helper functions
export const getMockChartProps = (): F0DataChartProps => {
  const type = getRandomArrayElement(["bar", "line", "pie"] as const)
  const categories = [
    ...getRandomArrayElement([shortMonths.slice(0, 6), departments, locations]),
  ]

  if (type === "pie") {
    return {
      type,
      series: {
        name: getRandomArrayElement(seriesNames),
        data: locations.map((name) => ({
          name,
          value: generateRandomData(1)[0],
        })),
      },
    }
  }

  return {
    type,
    categories,
    series: seriesNames.slice(0, 2).map((name) => ({
      name,
      data: generateRandomData(categories.length),
    })),
  }
}

export const KpiWidget = () => {
  return (
    <div>
      <h1>KPI Widget</h1>
    </div>
  )
}

export const TableWidget = () => {
  const mockVisualizations = getMockVisualizations()
  return (
    <div className="flex h-full flex-1">
      <OneDataCollectionExampleComponent
        fullHeight
        visualizations={[mockVisualizations.table]}
      />
    </div>
  )
}

export const ChartWidget = () => {
  const chartProps = getMockChartProps()

  return <F0DataChart {...chartProps} />
}

const randomText = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rutrum pharetra sapien, id venenatis risus efficitur ac. Maecenas ac eros non ex auctor vestibulum. Mauris euismod, erat non posuere volutpat, leo ex facilisis eros, ac varius magna enim at enim. Vivamus semper ipsum eu ultricies hendrerit. Pellentesque egestas, erat in sollicitudin pretium, sem ex rhoncus lacus, nec volutpat augue arcu posuere justo.",
  "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quisque viverra, erat lorem posuere metus, et volutpat mi magna at augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam convallis ante id enim gravida, at semper tellus molestie. In libero nulla, pretium at libero vel, imperdiet accumsan elit.",
  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi consequat cursus magna, et dictum justo efficitur pretium. Phasellus vitae ultrices erat, in euismod risus. Sed euismod a nibh vitae egestas.",
  "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse posuere, orci at pulvinar luctus, lectus dolor faucibus libero, tincidunt bibendum ante lectus ac purus. Nunc tincidunt, orci nec commodo viverra, risus felis venenatis nulla, et pretium nisi erat sed eros. Suspendisse a eros ut arcu sodales tristique.",
  "Cillum dolore eu fugiat nulla pariatur. Proin scelerisque velit in odio aenean euismod, vitae dignissim nibh posuere, fermentum at consequat lorem. Pellentesque nec turpis eu justo cursus malesuada. Vestibulum egestas ex et erat consectetur, vitae viverra mi dictum. Cras nec aliquam dolor, vitae cursus ex.",
  "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Etiam euismod imperdiet nibh, non euismod nunc pretium non. Proin laoreet, nisi eget cursus vulputate, purus mauris imperdiet quam, ac efficitur elit ex sed quam. Integer tempor, ipsum sit amet tempor ullamcorper, augue justo rhoncus lectus, nec molestie tortor libero ac erat.",
  "Sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur sagittis rhoncus lacus, at facilisis risus sodales id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. In eu posuere nulla, eget malesuada lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
]

export const TextWidget = ({ globalCounter }: { globalCounter: number }) => {
  return (
    <div>
      <p>Global counter: {globalCounter}</p>
      <p>{getRandomArrayElement(randomText)} </p>
    </div>
  )
}
