import type { Meta, StoryObj } from "@storybook/react-vite"

import heart from "@factorialco/f0-core/assets/icons/app/heart.svg"
import star from "@factorialco/f0-core/assets/icons/app/star.svg"

import { ImageProvider, type SrcProps } from "@/lib/imageHandler"
import { withSnapshot } from "@/lib/storybook-utils/parameters"

import { Image } from "./index"

const meta = {
  title: "Utilities/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  // Manual MDX page lives next to this file, so autodocs is opted out of.
  tags: ["!autodocs", "stable"],
  args: {
    src: heart,
    width: 100,
    height: 100,
    alt: "Heart",
  },
} satisfies Meta<typeof Image>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {}

/**
 * Stands in for a host app's CDN resolver: it ignores the incoming `src` and
 * returns a different asset plus responsive hints, so the injection is visible
 * (the heart renders as a star) and inspectable in the DOM (`srcset`/`sizes`).
 */
const cdnSrc = ({ width }: { width?: string | number }): SrcProps => ({
  src: `${star}?w=${width ?? ""}`,
  srcSet: `${star}?w=100 1x, ${star}?w=200 2x`,
  sizes: "100px",
})

export const WithProvider: Story = {
  render: (args) => (
    <ImageProvider src={cdnSrc}>
      <Image {...args} alt="Star, injected by ImageProvider" />
    </ImageProvider>
  ),
}

// `Image` is a thin passthrough to `<img>`, so its only real flexibility is
// intrinsic sizing and the `ImageProvider` injection path — the snapshot covers
// both: the same source at a few sizes, plain and provider-injected.
export const Snapshot: Story = {
  parameters: withSnapshot({}),
  render: () => (
    <div className="flex flex-col gap-6">
      {(
        [
          ["No provider", null, "Heart"],
          ["With ImageProvider", cdnSrc, "Star, injected by ImageProvider"],
        ] as const
      ).map(([label, src, alt]) => {
        const row = (
          <div className="flex flex-row items-end gap-6">
            {[24, 48, 96].map((size) => (
              <div key={size} className="flex flex-col items-center gap-2">
                <span className="text-sm font-medium text-f1-foreground-secondary">
                  {size}px
                </span>
                <Image src={heart} width={size} height={size} alt={alt} />
              </div>
            ))}
          </div>
        )

        return (
          <div key={label} className="flex flex-col gap-2">
            <span className="text-sm font-medium text-f1-foreground-secondary">
              {label}
            </span>
            {src ? <ImageProvider src={src}>{row}</ImageProvider> : row}
          </div>
        )
      })}
    </div>
  ),
}
