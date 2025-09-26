import type { Meta } from "@storybook/react-vite"

import { Chart } from "../index"

const meta: Meta<typeof Chart> = {
  title: "Charts/Chart",
  component: Chart,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <div className="h-52 w-full">
        <Story />
      </div>
    ),
  ],
}

export default meta

export const Default = {
  args: {
    options: {
      // ECharts option for a complex chart: bars, line, dual y-axis, vertical lines
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        axisLine: { onZero: false },
      },
      yAxis: [
        {
          type: "value",
          name: "Sales",
          position: "left",
          axisLabel: { formatter: "{value} k" },
        },
        {
          type: "value",
          name: "Growth (%)",
          position: "right",
          axisLabel: { formatter: "{value} %" },
        },
      ],
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      legend: {
        data: ["Revenue", "Profit", "Growth"],
        top: 0,
      },
      grid: {
        left: 50,
        right: 50,
        bottom: 40,
        top: 40,
        containLabel: true,
      },
      // Mark vertical lines at the middle and at "Apr"
      graphic: [
        {
          type: "line",
          shape: {
            x1: 3 * 60 + 30, // Approximate position for "Apr"
            y1: 0,
            x2: 3 * 60 + 30,
            y2: 200,
          },
          style: {
            stroke: "#888",
            lineWidth: 2,
            lineDash: [4, 4],
          },
          left: "13.5%",
          top: "10%",
          z: 10,
        },
        {
          type: "line",
          shape: {
            x1: "50%",
            y1: 0,
            x2: "50%",
            y2: "100%",
          },
          style: {
            stroke: "#FF4D4F",
            lineWidth: 2,
            lineDash: [2, 6],
          },
          left: "0%",
          top: "0%",
          z: 10,
        },
      ],
      // MarkLine for vertical lines (alternative to graphic)
      series: [
        {
          name: "Revenue",
          type: "bar",
          data: [12, 18, 15, 23, 20, 28, 26],
          yAxisIndex: 0,
          itemStyle: {
            color: "#4F8CFF",
          },
          barWidth: 24,
          markLine: {
            symbol: "none",
            data: [
              {
                xAxis: "Apr",
                lineStyle: {
                  color: "#888",
                  type: "dashed",
                  width: 2,
                },
                label: {
                  show: true,
                  formatter: "Middle",
                  position: "insideEndTop",
                },
              },
              {
                xAxis: 3.5, // Between "Apr" and "May"
                lineStyle: {
                  color: "#FF4D4F",
                  type: "dashed",
                  width: 2,
                },
                label: {
                  show: true,
                  formatter: "Center",
                  position: "insideEndTop",
                },
              },
            ],
          },
        },
        {
          name: "Profit",
          type: "bar",
          data: [6, 9, 7, 12, 10, 15, 13],
          yAxisIndex: 0,
          itemStyle: {
            color: "#A0D911",
          },
          barWidth: 24,
        },
        {
          name: "Growth",
          type: "line",
          data: [10, 15, 13, 20, 18, 25, 22],
          yAxisIndex: 1,
          smooth: true,
          lineStyle: {
            width: 3,
            color: "#FF7A45",
          },
          symbol: "circle",
          symbolSize: 10,
          itemStyle: {
            color: "#FF7A45",
          },
        },
      ],
    },
  },
}
