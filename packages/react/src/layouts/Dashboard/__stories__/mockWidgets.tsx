import type { EChartsOption } from "echarts"

import { F0Chart } from "@/components/Charts/F0Chart"
import {
  getMockVisualizations,
  ExampleComponent as OneDataCollectionExampleComponent,
} from "@/experimental/OneDataCollection/__stories__/mockData"

type ChartOptions = Partial<Omit<EChartsOption, "grid" | "emphasis">>

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

const names = [
  "Thomas Anderson",
  "Isabella Garcia",
  "Alexander Lee",
  "Sophie Davis",
  "David Brown",
  "Olivia Martinez",
  "James Wilson",
  "Emma Thompson",
  "Michael Chen",
  "Sarah Johnson",
]

// Chart helper functions
const getRandomBarChartOptions = (): ChartOptions => {
  const variants = ["single", "multiple", "stacked"] as const
  const variant = getRandomArrayElement(variants)

  if (variant === "single") {
    return {
      showLegend: false,
      xAxis: {
        type: "category",
        data: getRandomArrayElement([departments, locations]),
      },
      yAxis: {
        type: "value",
        name: getRandomArrayElement(["Headcount", "Revenue", "Sales"]),
      },
      series: [
        {
          name: "Data",
          type: "bar",
          data: generateRandomData(
            getRandomArrayElement([departments, locations]).length,
            5,
            150
          ),
        },
      ],
    }
  }

  if (variant === "multiple") {
    const seriesCount = Math.floor(Math.random() * 3) + 2 // 2-4 series
    const seriesNames = [
      ["Headcount", "Open positions", "Turnovers"],
      ["Q1", "Q2", "Q3", "Q4"],
      ["Revenue", "Expenses", "Profit"],
    ][seriesCount - 2] || ["Series 1", "Series 2", "Series 3"]

    return {
      legend: {
        data: seriesNames.slice(0, seriesCount),
      },
      xAxis: {
        type: "category",
        data: getRandomArrayElement([
          departments,
          locations,
          shortMonths.slice(0, 6),
        ]),
      },
      yAxis: {
        type: "value",
      },
      series: seriesNames.slice(0, seriesCount).map((name) => ({
        name,
        type: "bar" as const,
        data: generateRandomData(
          getRandomArrayElement([
            departments,
            locations,
            shortMonths.slice(0, 6),
          ]).length,
          0,
          150
        ),
      })),
    }
  }

  // Stacked
  return {
    legend: {
      data: ["Profit", "Losses"],
    },
    xAxis: {
      type: "category",
      data: shortMonths.slice(0, 5),
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: string | number) => `${value} €`,
      },
    },
    series: [
      {
        name: "Profit",
        type: "bar",
        stack: "total",
        data: generateRandomData(5, 2000, 8000),
      },
      {
        name: "Losses",
        type: "bar",
        stack: "total",
        data: generateRandomData(5, -3000, -500),
      },
    ],
  }
}

const getRandomLineChartOptions = (): ChartOptions => {
  const variant = getRandomArrayElement(["single", "multiple"] as const)
  const categories = shortMonths.slice(0, 6)

  if (variant === "single") {
    return {
      legend: {
        data: [getRandomArrayElement(["Time to hire", "Headcount", "Revenue"])],
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLabel: {
          formatter: (value: string | number) => String(value).slice(0, 3),
        },
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number) =>
            `${value} ${getRandomArrayElement(["days", "units", ""])}`,
        },
      },
      series: [
        {
          name: getRandomArrayElement(["Time to hire", "Headcount", "Revenue"]),
          type: "line",
          data: generateRandomData(6, 10, 100),
          smooth: Math.random() > 0.5,
        },
      ],
    }
  }

  // Multiple lines
  const seriesNames = [
    ["Junior", "Mid", "Senior"],
    ["Q1", "Q2", "Q3"],
    ["Team A", "Team B", "Team C"],
  ]
  const names = getRandomArrayElement(seriesNames)

  return {
    legend: {
      data: names,
    },
    xAxis: {
      type: "category",
      data: categories,
    },
    yAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: string | number) =>
          `${value} ${getRandomArrayElement(["days", "units", ""])}`,
      },
    },
    series: names.map((name) => ({
      name,
      type: "line" as const,
      data: generateRandomData(6, 10, 100),
      smooth: Math.random() > 0.5,
    })),
  }
}

const getRandomAreaChartOptions = (): ChartOptions => {
  const variant = getRandomArrayElement([
    "single",
    "multiple",
    "dashed",
  ] as const)
  const categories = shortMonths.slice(0, 6)

  if (variant === "single") {
    return {
      legend: {
        data: [getRandomArrayElement(["Total headcount", "Revenue", "Sales"])],
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLabel: {
          formatter: (value: string | number) => String(value).slice(0, 3),
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: getRandomArrayElement(["Total headcount", "Revenue", "Sales"]),
          type: "line",
          data: generateRandomData(6, 100, 400),
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
      ],
    }
  }

  if (variant === "dashed") {
    return {
      legend: {
        data: ["Actual", "Projected"],
      },
      xAxis: {
        type: "category",
        data: categories,
        axisLabel: {
          formatter: (value: string | number) => String(value).slice(0, 3),
        },
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Actual",
          type: "line",
          data: generateRandomData(6, 100, 400),
          smooth: true,
          areaStyle: { opacity: 0.2 },
        },
        {
          name: "Projected",
          type: "line",
          data: generateRandomData(6, 150, 450),
          smooth: true,
          lineStyle: {
            type: "dashed",
          },
          areaStyle: { opacity: 0.2 },
        },
      ],
    }
  }

  // Multiple areas
  const seriesNames = [
    ["Design", "Product", "Engineering"],
    ["Marketing", "Sales", "Support"],
  ]
  const names = getRandomArrayElement(seriesNames)

  return {
    legend: {
      data: names,
    },
    xAxis: {
      type: "category",
      data: categories,
      axisLabel: {
        formatter: (value: string | number) => String(value).slice(0, 3),
      },
    },
    yAxis: {
      type: "value",
    },
    series: names.map((name) => ({
      name,
      type: "line" as const,
      data: generateRandomData(6, 10, 150),
      smooth: true,
      areaStyle: { opacity: 0.2 },
    })),
  }
}

const getRandomPieChartOptions = (): ChartOptions => {
  const variant = getRandomArrayElement([
    "simple",
    "donut",
    "withLabels",
  ] as const)

  const pieDataSets = [
    [
      { value: 234, name: "Male" },
      { value: 189, name: "Female" },
    ],
    [
      { value: 378, name: "Full-time" },
      { value: 89, name: "Part-time" },
      { value: 45, name: "Contractor" },
    ],
    [
      { value: 312, name: "Remote" },
      { value: 187, name: "Office" },
      { value: 92, name: "Hybrid" },
    ],
  ]

  if (variant === "simple") {
    const data = getRandomArrayElement(pieDataSets).map((item) => ({
      value: generateRandomData(1, item.value - 50, item.value + 50)[0],
      name: item.name,
    }))

    return {
      series: [
        {
          name: getRandomArrayElement([
            "Gender Distribution",
            "Work Location",
            "Employment Type",
          ]),
          type: "pie",
          radius: "60%",
          data,
        },
      ],
    }
  }

  if (variant === "donut") {
    const data = pieDataSets[1].map((item) => ({
      value: generateRandomData(1, item.value - 50, item.value + 50)[0],
      name: item.name,
    }))

    return {
      series: [
        {
          name: "Employment Type",
          type: "pie",
          radius: ["60%", "40%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "center",
          },
          labelLine: {
            show: false,
          },
          data,
        },
      ],
    }
  }

  // With labels
  const data = pieDataSets[2].map((item) => ({
    value: generateRandomData(1, item.value - 50, item.value + 50)[0],
    name: item.name,
  }))

  return {
    series: [
      {
        name: "Work Location",
        type: "pie",
        radius: "60%",
        center: ["50%", "50%"],
        data,
        label: {
          show: true,
          formatter: "{b}: {d}%",
        },
      },
    ],
  }
}

const getRandomFunnelChartOptions = (): ChartOptions => {
  const funnelStages = [
    { value: 1200, name: "Applications" },
    { value: 850, name: "Phone Screen" },
    { value: 420, name: "First Interview" },
    { value: 180, name: "Technical Test" },
    { value: 95, name: "Final Interview" },
    { value: 62, name: "Offer" },
    { value: 48, name: "Hired" },
  ]

  const data = funnelStages.map((stage) => {
    const baseValue = stage.value
    const variation = baseValue * 0.2 // 20% variation
    return {
      value: Math.floor(baseValue + (Math.random() - 0.5) * variation),
      name: stage.name,
    }
  })

  return {
    title: {
      text: getRandomArrayElement([
        "Recruitment Pipeline",
        "Sales Pipeline",
        "Conversion Funnel",
      ]),
    },
    tooltip: {
      trigger: "item",
    },
    series: [
      {
        type: "funnel",
        data,
      },
    ],
  }
}

const getRandomRadarChartOptions = (): ChartOptions => {
  const indicators = [
    [
      { name: "Sales", max: 6500 },
      { name: "Administration", max: 16000 },
      { name: "Information Technology", max: 30000 },
      { name: "Customer Support", max: 38000 },
      { name: "Development", max: 52000 },
      { name: "Marketing", max: 25000 },
    ],
    [
      { name: "Performance", max: 100 },
      { name: "Quality", max: 100 },
      { name: "Efficiency", max: 100 },
      { name: "Innovation", max: 100 },
      { name: "Collaboration", max: 100 },
    ],
  ]

  const selectedIndicators = getRandomArrayElement(indicators)
  const seriesNames = [
    ["Allocated Budget", "Actual Spending"],
    ["Target", "Actual"],
    ["Q1", "Q2"],
  ]
  const names = getRandomArrayElement(seriesNames)

  return {
    legend: {
      data: names,
    },
    radar: {
      indicator: selectedIndicators,
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: names.map((name) => ({
          value: selectedIndicators.map((ind) =>
            Math.floor(Math.random() * ind.max)
          ),
          name,
        })),
      },
    ],
  }
}

const getRandomHorizontalBarChartOptions = (): ChartOptions => {
  const variant = getRandomArrayElement(["single", "multiple"] as const)

  if (variant === "single") {
    return {
      showLegend: false,
      xAxis: {
        type: "value",
        axisLabel: {
          formatter: (value: string | number) =>
            `${value} ${getRandomArrayElement(["hires", "units", ""])}`,
        },
      },
      yAxis: {
        type: "category",
        data: names.slice(0, 10),
      },
      series: [
        {
          name: getRandomArrayElement([
            "Successful hires",
            "Performance",
            "Sales",
          ]),
          type: "bar",
          data: generateRandomData(10, 10, 30),
          label: {
            show: true,
            position: "right",
          },
        },
      ],
    }
  }

  // Multiple bars
  return {
    legend: {
      data: ["Junior", "Senior"],
    },
    xAxis: {
      type: "value",
      axisLabel: {
        formatter: (value: string | number) =>
          `${value} ${getRandomArrayElement(["hires", "units", ""])}`,
      },
    },
    yAxis: {
      type: "category",
      data: names.slice(0, 10),
    },
    series: [
      {
        name: "Junior",
        type: "bar",
        data: generateRandomData(10, 5, 20),
      },
      {
        name: "Senior",
        type: "bar",
        data: generateRandomData(10, 3, 15),
      },
    ],
  }
}

// Main function
export const getMockChartOptions = (): ChartOptions => {
  const chartTypes = [
    getRandomBarChartOptions,
    getRandomLineChartOptions,
    getRandomAreaChartOptions,
    getRandomPieChartOptions,
    getRandomFunnelChartOptions,
    getRandomRadarChartOptions,
    getRandomHorizontalBarChartOptions,
  ]

  const selectedChartFunction = getRandomArrayElement(chartTypes)
  return selectedChartFunction()
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
  const options = getMockChartOptions()

  return <F0Chart options={options} />
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
