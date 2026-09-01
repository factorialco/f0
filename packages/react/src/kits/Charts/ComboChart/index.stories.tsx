import { Meta } from "@storybook/react-vite"

import { ComboChart } from "./index"

const meta: Meta = {
  title: "Charts/ComboChart",
  component: ComboChart,
  tags: ["autodocs", "no-sidebar"],
  decorators: [
    (Story) => (
      <div className="w-100 h-52">
        <Story />
      </div>
    ),
  ],
}

export default meta

const hiresConfig = {
  hires: {
    label: "Number of hires",
  },
  critical: {
    label: "Critical hires",
    color: "categorical-5",
  },
}

export const Default: Meta<typeof ComboChart<typeof hiresConfig>> = {
  args: {
    dataConfig: hiresConfig,
    data: [
      {
        label: "January",
        values: { hires: 24, critical: 4 },
      },
      {
        label: "February",
        values: { hires: 32, critical: 12 },
      },
      {
        label: "March",
        values: { hires: 28, critical: 3 },
      },
      {
        label: "April",
        values: { hires: 36, critical: 9 },
      },
      {
        label: "May",
        values: { hires: 22, critical: 4 },
      },
    ],
    bar: {
      categories: ["hires"],
    },
    scatter: {
      categories: ["critical"],
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value + " hires",
    },
    legend: true,
  },
}

const trainingsConfig = {
  trainings: {
    label: "Number of trainings",
  },
  completion: {
    label: "Completion rate",
    color: "categorical-5",
  },
}

export const BarAndLine: Meta<typeof ComboChart<typeof trainingsConfig>> = {
  args: {
    dataConfig: trainingsConfig,
    data: [
      {
        label: "January",
        values: { trainings: 100, completion: 80 },
      },
      {
        label: "February",
        values: { trainings: 120, completion: 90 },
      },
      {
        label: "March",
        values: { trainings: 110, completion: 85 },
      },
      {
        label: "April",
        values: { trainings: 130, completion: 95 },
      },
      {
        label: "May",
        values: { trainings: 140, completion: 100 },
      },
    ],
    bar: {
      categories: ["trainings"],
    },
    line: {
      categories: ["completion"],
      dot: true,
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    legend: true,
  },
}

const departmentConfig = {
  applicants: {
    label: "Applicants",
  },
  interviews: {
    label: "Interviews",
  },
  hires: {
    label: "Hires",
  },
}

export const Biaxial: Meta<typeof ComboChart<typeof departmentConfig>> = {
  args: {
    dataConfig: departmentConfig,
    data: [
      {
        label: "Engineering",
        values: { applicants: 120, interviews: 100, hires: 30 },
      },
      {
        label: "Product",
        values: { applicants: 100, interviews: 92, hires: 25 },
      },
      {
        label: "Design",
        values: { applicants: 110, interviews: 100, hires: 28 },
      },
    ],
    bar: {
      categories: ["applicants", "interviews"],
      axisLabel: "Count",
      hideAxis: false,
      axisPosition: "left",
    },
    line: {
      categories: ["hires"],
      dot: true,
      axisLabel: "Hires",
      hideAxis: false,
      axisPosition: "right",
      lineType: "linear",
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${value}`,
    },
    legend: true,
  },
}

const headcountConfig = {
  actuals: {
    label: "Actuals",
    color: "categorical-1",
  },
  incoming: {
    label: "Incoming",
    color: "categorical-4",
  },
  terminations: {
    label: "Terminations",
    color: "categorical-3",
  },
  planned: {
    label: "Planned",
    color: "categorical-2",
    dashed: true,
  },
}

const forecastConfig = {
  actuals: {
    label: "Actuals",
    color: "categorical-1",
  },
  incoming: {
    label: "Incoming",
    color: "categorical-4",
  },
  terminations: {
    label: "Terminations",
    color: "categorical-3",
  },
  forecastGrowth: {
    label: "Forecast growth",
    color: "categorical-6",
    projected: true,
  },
  forecastAttrition: {
    label: "Forecast attrition",
    color: "categorical-3",
    projected: true,
  },
  planned: {
    label: "Planned",
    color: "categorical-2",
    dashed: true,
  },
}

export const ProjectedBars: Meta<typeof ComboChart<typeof forecastConfig>> = {
  args: {
    dataConfig: forecastConfig,
    data: [
      {
        label: "January",
        values: {
          actuals: 78,
          incoming: 10,
          terminations: 0,
          forecastGrowth: 24,
          forecastAttrition: 0,
          planned: 86,
        },
      },
      {
        label: "February",
        values: {
          actuals: 80,
          incoming: 0,
          terminations: -8,
          forecastGrowth: 33,
          forecastAttrition: 0,
          planned: 84,
        },
      },
      {
        label: "March",
        values: {
          actuals: 64,
          incoming: 0,
          terminations: 0,
          forecastGrowth: 73,
          forecastAttrition: 0,
          planned: 100,
        },
      },
      {
        label: "April",
        values: {
          actuals: 64,
          incoming: 0,
          terminations: 0,
          forecastGrowth: 98,
          forecastAttrition: 0,
          planned: 122,
        },
      },
      {
        label: "May",
        values: {
          actuals: 64,
          incoming: 0,
          terminations: 0,
          forecastGrowth: 87,
          forecastAttrition: -55,
          planned: 128,
        },
      },
      {
        label: "June",
        values: {
          actuals: 64,
          incoming: 0,
          terminations: 0,
          forecastGrowth: 34,
          forecastAttrition: -60,
          planned: 76,
        },
      },
    ],
    bar: {
      type: "stacked-by-sign",
      categories: [
        "actuals",
        "incoming",
        "terminations",
        "forecastGrowth",
        "forecastAttrition",
      ],
    },
    line: {
      categories: ["planned"],
      dot: true,
      lineType: "linear",
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    legend: true,
  },
}

export const StackedBySignWithLine: Meta<
  typeof ComboChart<typeof headcountConfig>
> = {
  args: {
    dataConfig: headcountConfig,
    data: [
      {
        label: "January",
        values: { actuals: 60, incoming: 12, terminations: 0, planned: 80 },
      },
      {
        label: "February",
        values: { actuals: 70, incoming: 0, terminations: -8, planned: 78 },
      },
      {
        label: "March",
        values: { actuals: 66, incoming: 24, terminations: 0, planned: 95 },
      },
      {
        label: "April",
        values: { actuals: 90, incoming: 0, terminations: -20, planned: 110 },
      },
    ],
    bar: {
      type: "stacked-by-sign",
      categories: ["actuals", "incoming", "terminations"],
    },
    line: {
      categories: ["planned"],
      dot: true,
      lineType: "linear",
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    legend: true,
  },
}

const continuationConfig = {
  actuals: {
    label: "Actuals",
    color: "categorical-1",
  },
  forecast: {
    label: "Forecast",
    color: "categorical-1",
    dashed: true,
    continues: "actuals",
  },
  planned: {
    label: "Planned",
    color: "categorical-2",
    dashed: true,
    legendIndicator: "dot",
  },
}

export const LineContinuation: Meta<
  typeof ComboChart<typeof continuationConfig>
> = {
  args: {
    dataConfig: continuationConfig,
    data: [
      {
        label: "January",
        values: { actuals: 27000, forecast: null, planned: 27000 },
      },
      {
        label: "February",
        values: { actuals: 22000, forecast: null, planned: 27000 },
      },
      {
        label: "March",
        values: { actuals: 25500, forecast: null, planned: 31500 },
      },
      {
        label: "April",
        values: { actuals: 31000, forecast: null, planned: 35500 },
      },
      {
        label: "May",
        values: { actuals: 35500, forecast: null, planned: 35500 },
      },
      {
        label: "June",
        values: { actuals: 49000, forecast: null, planned: 52500 },
      },
      {
        label: "July",
        values: { actuals: 51000, forecast: null, planned: 56000 },
      },
      {
        label: "August",
        values: { actuals: null, forecast: 60000, planned: 56000 },
      },
      {
        label: "September",
        values: { actuals: null, forecast: 42500, planned: 49000 },
      },
      {
        label: "October",
        values: { actuals: null, forecast: 27000, planned: 30000 },
      },
      {
        label: "November",
        values: { actuals: null, forecast: 11000, planned: 16500 },
      },
      {
        label: "December",
        values: { actuals: null, forecast: 11000, planned: 16500 },
      },
    ],
    line: {
      categories: ["actuals", "forecast", "planned"],
      lineType: "linear",
    },
    xAxis: {
      hide: false,
      tickFormatter: (value: string) => value,
    },
    yAxis: {
      hide: false,
      tickFormatter: (value: string) => `${Number(value) / 1000}k`,
    },
    legend: true,
  },
}
