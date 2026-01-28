import { render, screen } from "@testing-library/react"
import { describe, expect, test } from "vitest"

import { Image, ImageProvider } from "./imageHandler"

describe("ImageProvider", () => {
  test("allows ImageProvider to transform image sources", () => {
    render(
      <ImageProvider
        src={(props) => ({
          src: `transformed-${props.src}`,
        })}
      >
        <Image src="original.jpg" alt="test" />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("src")).toEqual("transformed-original.jpg")
  })

  test("allows ImageProvider to add srcSet and sizes", () => {
    render(
      <ImageProvider
        src={() => ({
          srcSet: "image-1x.jpg 1x, image-2x.jpg 2x",
          sizes: "100vw",
        })}
      >
        <Image src="original.jpg" alt="test" />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("srcset")).toEqual(
      "image-1x.jpg 1x, image-2x.jpg 2x"
    )
    expect(img.getAttribute("sizes")).toEqual("100vw")
  })
})

describe("Image", () => {
  test("renders a regular img when no provider is present", () => {
    render(<Image src="test.jpg" alt="test" />)

    const img = screen.getByAltText("test")
    expect(img.tagName).toBe("IMG")
    expect(img.getAttribute("src")).toEqual("test.jpg")
  })

  test("preserves original props when transformed", () => {
    render(
      <ImageProvider
        src={(props) => ({
          src: `transformed-${props.src}`,
        })}
      >
        <Image
          src="original.jpg"
          alt="test"
          className="custom-class"
          width={100}
          height={100}
        />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("src")).toEqual("transformed-original.jpg")
    expect(img.getAttribute("class")).toEqual("custom-class")
    expect(img.getAttribute("width")).toEqual("100")
    expect(img.getAttribute("height")).toEqual("100")
  })
})
