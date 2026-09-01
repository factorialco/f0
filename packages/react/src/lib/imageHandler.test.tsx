import { createRef } from "react"
import { describe, expect, test, vi } from "vitest"

import { Image as ReExportedImage } from "@/components/Utilities/Image"
import { zeroRender as render, screen } from "@/testing/test-utils"

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

  test("receives the full set of img props in the src resolver", () => {
    const resolver = vi.fn(() => ({ src: "resolved.jpg" }))

    render(
      <ImageProvider src={resolver}>
        <Image src="original.jpg" alt="test" width={24} height={48} />
      </ImageProvider>
    )

    expect(resolver).toHaveBeenCalledWith(
      expect.objectContaining({
        src: "original.jpg",
        alt: "test",
        width: 24,
        height: 48,
      })
    )
  })

  test("keeps the original src when the provider returns only srcSet", () => {
    render(
      <ImageProvider
        src={() => ({
          srcSet: "image-2x.jpg 2x",
        })}
      >
        <Image src="original.jpg" alt="test" />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("src")).toEqual("original.jpg")
    expect(img.getAttribute("srcset")).toEqual("image-2x.jpg 2x")
  })

  test("provider-returned src overrides the src prop", () => {
    render(
      <ImageProvider src={() => ({ src: "provider.jpg" })}>
        <Image src="prop.jpg" alt="test" />
      </ImageProvider>
    )

    // `<img {...props} {...extraProps} />`: extraProps is spread last, so it wins.
    expect(screen.getByAltText("test").getAttribute("src")).toEqual(
      "provider.jpg"
    )
  })

  test("provider returning `src: undefined` preserves the original src prop", () => {
    render(
      <ImageProvider src={() => ({ src: undefined })}>
        <Image src="original.jpg" alt="test" />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("src")).toEqual("original.jpg")
  })

  test("an explicitly absent src key in the provider result preserves the original src", () => {
    render(
      <ImageProvider src={() => ({ sizes: "50vw" })}>
        <Image src="original.jpg" alt="test" />
      </ImageProvider>
    )

    const img = screen.getByAltText("test")
    expect(img.getAttribute("src")).toEqual("original.jpg")
    expect(img.getAttribute("sizes")).toEqual("50vw")
  })

  test("the innermost provider wins when providers are nested", () => {
    render(
      <ImageProvider src={(props) => ({ src: `outer-${props.src}` })}>
        <ImageProvider src={(props) => ({ src: `inner-${props.src}` })}>
          <Image src="original.jpg" alt="test" />
        </ImageProvider>
      </ImageProvider>
    )

    expect(screen.getByAltText("test").getAttribute("src")).toEqual(
      "inner-original.jpg"
    )
  })

  test("a nested provider without a src resolver falls back to a plain img, not the outer provider", () => {
    render(
      <ImageProvider src={(props) => ({ src: `outer-${props.src}` })}>
        <ImageProvider>
          <Image src="original.jpg" alt="test" />
        </ImageProvider>
      </ImageProvider>
    )

    // The inner provider shadows the outer context value entirely.
    expect(screen.getByAltText("test").getAttribute("src")).toEqual(
      "original.jpg"
    )
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

  test("forwards the ref to the underlying img when no provider is present", () => {
    const ref = createRef<HTMLImageElement>()
    render(<Image ref={ref} src="test.jpg" alt="test" />)

    expect(ref.current).toBe(screen.getByAltText("test"))
    expect(ref.current?.tagName).toBe("IMG")
  })

  test("forwards the ref to the underlying img when a provider is present", () => {
    const ref = createRef<HTMLImageElement>()
    render(
      <ImageProvider src={(props) => ({ src: `transformed-${props.src}` })}>
        <Image ref={ref} src="test.jpg" alt="test" />
      </ImageProvider>
    )

    expect(ref.current).toBe(screen.getByAltText("test"))
    expect(ref.current?.getAttribute("src")).toEqual("transformed-test.jpg")
  })

  test("Utilities/Image re-exports the same component as lib/imageHandler", () => {
    expect(ReExportedImage).toBe(Image)
  })
})
