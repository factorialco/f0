import { colord } from "colord"
import { registerTheme } from "echarts"
import { baseColors } from "../../../../../../core/src/tokens/colors"

function chartColor(hslValue: string): string {
  return colord(`hsl(${hslValue})`).toHex()
}

export const colorPalette = [
  chartColor(baseColors.malibu[50]),
  chartColor(baseColors.orange[50]),
  chartColor(baseColors.lilac[50]),
  chartColor(baseColors.camel[50]),
  chartColor(baseColors.purple[50]),
  chartColor(baseColors.smoke[50]),
  chartColor(baseColors.flubber[60]),
]

export const theme = {
  color: colorPalette,
  textStyle: {
    fontFamily: "Inter, sans-serif",
    fontWeight: "normal",
    fontSize: 12,
    overflow: "truncate",
    color: chartColor(baseColors.grey[80]),
  },

  title: {
    textStyle: {
      color: chartColor(baseColors.grey[80]),
      overflow: "truncate",
      fontSize: 16,
      fontWeight: "medium",
    },
    show: false,
  },

  visualMap: {
    color: ["#d8361b", "#ffd2d2"],
  },

  dataRange: {
    color: ["#bd0707", "#ffd2d2"],
  },

  toolbox: {
    color: ["#d8361b", "#d8361b", "#d8361b", "#d8361b"],
  },

  tooltip: {
    padding: 16,
    borderWith: 0,
    textStyle: {
      color: chartColor(baseColors.grey[80]),
      fontSize: 12,
    },
    position: function (
      point: [number, number],
      _params: unknown,
      _dom: unknown,
      _rect: unknown,
      size: { viewSize: [number, number]; contentSize: [number, number] }
    ) {
      const tooltipWidth = size.contentSize[0]
      const isLeftHalf = point[0] < size.viewSize[0] / 2
      const x = isLeftHalf ? point[0] + 10 : point[0] - tooltipWidth - 10

      return [x, "20%"]
    },
    axisPointer: {
      type: "line",
      lineStyle: {
        color: chartColor(baseColors.grey[30]),
        type: "dashed",
      },
    },
    extraCssText:
      "box-shadow: 0px 12px 24px -14px rgba(13, 22, 37, 0.2), 0px 0px 0px 1px rgba(13, 22, 37, 0.1); border-radius: 16px; border-radius: 10px; border: none; background-filter: blur(30px); background: rgba(255, 255, 255, 0.97);",
    transitionDuration: 0.2,
  },

  // Area scaling controller
  dataZoom: {
    dataBackgroundColor: "#eee", // Data background color
    fillerColor: "rgba(216,54,27,0.2)", // Fill the color
    handleColor: "#d8361b", // Handle color
  },

  grid: {
    borderWidth: 0,
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  },

  categoryAxis: {
    axisLine: {
      lineStyle: {
        color: chartColor(baseColors.grey[10]),
      },
    },
    splitLine: {
      lineStyle: {
        color: chartColor(baseColors.grey[10]),
      },
    },
    axisLabel: {
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "medium",
      formatter: (value: string) => {
        return value.slice(0, 3)
      },
    },
  },

  valueAxis: {
    nameTextStyle: {
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "medium",
    },
    axisLine: {
      lineStyle: {
        color: chartColor(baseColors.grey[10]),
        type: "dashed",
        dashOffset: 4,
      },
    },
    splitLine: {
      lineStyle: {
        color: chartColor(baseColors.grey[10]),
      },
    },
    axisLabel: {
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "medium",
    },
  },

  timeline: {
    lineStyle: {
      color: "#d8361b",
    },
    controlStyle: {
      color: "#d8361b",
      borderColor: "#d8361b",
    },
  },

  candlestick: {
    itemStyle: {
      color: "#f16b4c",
      color0: "#f7b4a9",
    },
    lineStyle: {
      width: 1,
      color: "#d8361b",
      color0: "#d26666",
    },
    areaStyle: {
      color: "#d8361b",
      color0: "#d07e75",
    },
  },

  graph: {
    itemStyle: {
      color: "#d07e75",
    },
    linkStyle: {
      color: "#d8361b",
    },
  },

  chord: {
    padding: 4,
    itemStyle: {
      color: "#d07e75",
      borderWidth: 1,
      borderColor: "rgba(128, 128, 128, 0.5)",
    },
    lineStyle: {
      color: "rgba(128, 128, 128, 0.5)",
    },
    areaStyle: {
      color: "#d8361b",
    },
  },

  map: {
    itemStyle: {
      color: "#d8361b",
    },
    areaStyle: {
      color: "#d07e75",
    },
    label: {
      color: "#c12e34",
    },
  },

  gauge: {
    axisLine: {
      lineStyle: {
        color: [
          [0.2, "#f16b4c"],
          [0.8, "#d8361b"],
          [1, "#99311c"],
        ],
        width: 8,
      },
    },
  },

  bar: {
    itemStyle: {
      borderRadius: 6,
    },
    label: {
      show: true,
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "bold",
      position: "top",
    },
  },

  pie: {
    emphasis: {
      scale: false,
    },
    labelLine: {
      smooth: true,
      lineStyle: {
        color: chartColor(baseColors.grey[30]),
      },
    },
  },

  funnel: {
    orient: "horizontal",
    gap: 0,
    minSize: "1%",
    label: {
      show: false,
    },
    emphasis: {
      disabled: true,
    },
  },

  line: {
    label: {
      show: true,
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "regular",
      position: "top",
    },
  },

  legend: {
    selectedMode: false,
    textStyle: {
      color: chartColor(baseColors.grey[50]),
      fontSize: 12,
      fontWeight: "medium",
    },
  },
  animation: false,
}

registerTheme("f0.light", theme)
