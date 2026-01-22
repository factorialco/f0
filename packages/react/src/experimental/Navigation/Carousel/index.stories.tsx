import { Meta, StoryObj } from "@storybook/react-vite"

import { BarChartProps } from "../../../components/Charts/BarChart"
import { Default as BarChartStory } from "../../../components/Charts/BarChart/index.stories"
import { Placeholder } from "../../../lib/storybook-utils/placeholder"
import { BarChartWidget } from "../../Widgets/Charts/BarChartWidget"
import { Carousel } from "./index"

const meta: Meta<typeof Carousel> = {
  title: "Carousel/Carousel",
  component: Carousel,
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  tags: ["autodocs", "experimental"],
}

export default meta

type Story = StoryObj<typeof Carousel>

const SLIDES = Array.from({ length: 15 }, (_, i) => (
  <Placeholder key={i + 1} className="h-32 min-w-40">
    Slide {i + 1}
  </Placeholder>
))

export const Default: Story = {
  decorators: [
    (Story, args) => (
      <div className="w-full p-6">
        <Story {...args} />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  args: {
    autoplay: false,
    showArrows: true,
    showDots: true,
    showPeek: false,
    children: SLIDES,
    columns: { default: 1 },
  },
}

/**
 * `columns`: An object specifying the number of columns to display at different breakpoints:
 *   - `xs`: Number of columns for extra small screens. Default is `2`.
 *   - `sm`: Number of columns for small screens. Default is `3`.
 *   - `md`: Number of columns for medium screens. Default is `4`.
 *   - `lg`: Number of columns for large screens. Default is `6`.
 *
 * Try to **resize the window** to see the number of columns change.
 */
export const CustomColumns: Story = {
  decorators: [
    (Story, args) => (
      <div className="w-full p-6">
        <Story {...args} />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  args: {
    autoplay: false,
    children: SLIDES,
    columns: {
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 6,
    },
  },
}

export const DoubleColumns: Story = {
  args: {
    ...CustomColumns.args,
    doubleColumns: [
      {
        index: 0,
        sizes: ["default", "lg"],
      },
      {
        index: 4,
        sizes: ["default", "lg"],
      },
    ],
  },
}

/**
 * `autoplay`: Whether to automatically scroll through the slides. Default is `false`.
 */
export const AutoScroll: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  args: {
    autoplay: true,
    delay: 3000,
    children: SLIDES,
    columns: { default: 1 },
  },
}

/**
 * `sneakPeek`: Whether to show a peek of the next slide. Default is `false`.
 */
export const SneakPeek: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  args: {
    showArrows: false,
    children: SLIDES,
    showPeek: true,
    columns: { default: 1 },
  },
}

export const NoColumns: Story = {
  decorators: [
    (Story) => (
      <div className="w-full p-6">
        <Story />
      </div>
    ),
  ],
  args: {
    showArrows: false,
    children: SLIDES,
    showPeek: true,
  },
}

const randomClasses = ["h-64", "h-full", "h-32", "w-32", "w-full", "w-64"]

const SLIDES_RANDOM = [
  <BarChartWidget
    key="widget"
    chart={BarChartStory.args as BarChartProps}
    fullHeight
  />,
  ...Array.from({ length: 6 }, (_, i) => {
    const randomHeight = randomClasses[Math.floor(i / 2)]
    const randomWidth = randomClasses[Math.floor(i / 2) + 3]
    return (
      <Placeholder key={i + 1} className={`${randomHeight} ${randomWidth}`}>
        Slide {i + 1} ({randomHeight} {randomWidth})
      </Placeholder>
    )
  }),
]

/**
 * Care using this component for distinct size widgets.
 */
export const MultipleWidths: Story = {
  decorators: [
    (Story) => (
      <div className="h-full w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
  },
  args: {
    showArrows: true,
    children: SLIDES_RANDOM,
    showPeek: true,
    showDots: false,
  },
}

export const RandomWithColumns: Story = {
  decorators: [
    (Story) => (
      <div className="h-full w-full p-6">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    autoplay: { control: "boolean" },
    showDots: { control: "boolean" },
    showArrows: { control: "boolean" },
    showPeek: { control: "boolean" },
    columns: { default: 1 },
  },
  args: {
    showArrows: true,
    children: SLIDES_RANDOM,
    showPeek: true,
    showDots: false,
    columns: {
      xs: 2,
      sm: 3,
      md: 3,
      lg: 3,
    },
  },
}

export const FewItemsWithColumns: Story = {
  args: {
    ...CustomColumns.args,
    children: SLIDES.slice(0, 2),
  },
}
