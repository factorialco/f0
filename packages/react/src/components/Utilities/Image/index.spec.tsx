import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"

import { ImageProvider } from "../../../lib/imageHandler"
import { Image } from "./index"

test("allows ImageProvider to change src", async () => {
  render(
    <ImageProvider
      src={({ src, width, height }) => ({
        src: `${src}?w=${width}&h=${height}`,
      })}
    >
      <Image src="test.png" width="24" height="24" />
    </ImageProvider>
  )

  const image = screen.getByRole("img")
  expect(image.getAttribute("src")).toEqual("test.png?w=24&h=24")
})
