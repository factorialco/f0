import type { CardImageFit, CardImageSize } from "@/components/F0Card"
import { cardImageFits, cardImageSizes } from "@/components/F0Card"
import { mockImage } from "@/testing/mocks/images"
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
      options: cardImageFits,
      description:
        "How the image should be displayed/fitted within its container",
      table: {
        defaultValue: { summary: "fit-width" },
      },
    },
    imageSize: {
      control: "select",
      options: cardImageSizes,
      description: "Size of the image container",
      table: {
        defaultValue: { summary: "sm" },
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
    imageSize: "sm",
    imageType: "wide",
  },
} satisfies Meta

export default meta
type Story = StoryObj<
  typeof meta & {
    imageFit?: CardImageFit
    imageSize?: CardImageSize
    imageType?: "squared" | "small" | "wide" | "vertical"
  }
>

const imageTypes = {
  squared: mockImage("card", 0), // /cards/squared.jpg
  small: mockImage("card", 1), // /cards/small.jpg
  wide: mockImage("card", 2), // /cards/wide.jpg
  vertical: mockImage("card", 3), // /cards/vertical.jpg
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
    imageSize: "sm",
    imageType: "wide",
  },
  render: (args) => {
    const baseCard = getMockVisualizations().card

    const typedArgs = args as {
      imageFit?: CardImageFit
      imageSize?: CardImageSize
      imageType?: keyof typeof imageTypes
    }
    const imageFit = (typedArgs.imageFit || "fit-width") as CardImageFit
    const imageSize = typedArgs.imageSize || "sm"
    const imageType = (typedArgs.imageType || "wide") as keyof typeof imageTypes
    const selectedImage = imageTypes[imageType]

    const baseOptions =
      (baseCard as { options?: Record<string, unknown> }).options || {}

    const visualization = {
      ...baseCard,
      options: {
        ...baseOptions,
        imageFit,
        imageSize,
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
