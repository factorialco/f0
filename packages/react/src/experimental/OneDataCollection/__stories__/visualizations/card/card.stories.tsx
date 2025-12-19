import type { CardImageFit } from "@/components/F0Card"
import { Meta, StoryObj } from "@storybook/react-vite"
import { ExampleComponent, getMockVisualizations } from "../../mockData"

const meta = {
  title: "Data Collection/Visualizations/Card",
  parameters: {
    layout: "fullscreen",
    a11y: {
      skipCi: true,
    },
    docs: {
      description: {
        component:
          "[TODO] Card view specific visualization. Displays a card of items with a checkbox column and a list of properties.",
      },
    },
  },
  argTypes: {
    imageFit: {
      control: "select",
      options: ["contain", "fit-width", "fit-height", "scale-down"],
      description:
        "How the image should be displayed/fitted within its container",
      table: {
        defaultValue: { summary: "fit-width" },
      },
    },
    imageHeight: {
      control: "select",
      options: ["h-24", "h-32", "h-40", "h-48", "h-64"],
      description: "Height of the image container (Tailwind height class)",
      table: {
        defaultValue: { summary: "h-32" },
      },
    },
    imageType: {
      control: "select",
      options: ["squared", "small", "wide", "vertical"],
      description: "Type of image to use for demonstration",
      table: {
        defaultValue: { summary: "wide" },
      },
    },
  },
  args: {
    imageFit: "fit-width",
    imageHeight: "h-32",
    imageType: "wide",
  },
} satisfies Meta

export default meta
type Story = StoryObj<
  typeof meta & {
    imageFit?: CardImageFit
    imageHeight?: string
    imageType?: "squared" | "small" | "wide" | "vertical"
  }
>

const imageTypes = {
  squared: "https://picsum.photos/400/400",
  small: "https://picsum.photos/50/50",
  // Use different Unsplash photos to ensure they're visually distinct
  wide: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
  vertical:
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=450&h=800&fit=crop",
} as const

export const BasicCardVisualization: Story = {
  render: () => {
    const mockVisualizations = getMockVisualizations()
    return <ExampleComponent visualizations={[mockVisualizations.card]} />
  },
}

export const ImageFitOptions: Story = {
  parameters: {
    layout: "fullscreen",
  },
  args: {
    imageFit: "fit-width",
    imageHeight: "h-32",
    imageType: "wide",
  },
  render: (args) => {
    const baseCard = getMockVisualizations().card

    const typedArgs = args as {
      imageFit?: CardImageFit
      imageHeight?: string
      imageType?: keyof typeof imageTypes
    }
    const imageFit = (typedArgs.imageFit || "fit-width") as CardImageFit
    const imageHeight = typedArgs.imageHeight || "h-32"
    const imageType = (typedArgs.imageType || "wide") as keyof typeof imageTypes
    const selectedImage = imageTypes[imageType]

    const baseOptions =
      (baseCard as { options?: Record<string, unknown> }).options || {}

    const visualization = {
      ...baseCard,
      options: {
        ...baseOptions,
        imageFit,
        imageHeight,
        image: () => selectedImage,
      },
    } as unknown as typeof baseCard

    return (
      <div className="w-full space-y-4">
        <ExampleComponent
          visualizations={[visualization]}
          searchBar={false}
          hideFilters={true}
          noSorting={true}
        />
      </div>
    )
  },
}
