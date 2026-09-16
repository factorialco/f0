import { type F0ChatComposableAttachment } from "../types"
import { measureImageSize } from "../utils/image-size"

/**
 * What a host hands back from an upload.
 *
 * Photos carry their intrinsic size, because a real backend knows it: the
 * transcript lays a lone photo out from those numbers, and without them it can
 * only reserve a square until it has decoded the file itself. Mocks that skip
 * this are how a host ends up shipping cropped photos without noticing.
 */
export const uploadedAttachmentFromFile = async (
  file: File
): Promise<F0ChatComposableAttachment> => {
  const url = URL.createObjectURL(file)
  if (file.type.startsWith("image/")) {
    const size = await measureImageSize(url)
    return {
      kind: "image",
      url,
      name: file.name,
      mimeType: file.type,
      width: size?.width,
      height: size?.height,
    }
  }
  return {
    kind: "file",
    url,
    name: file.name,
    size: file.size,
    mimeType: file.type,
    thumbnailUrl: file.type.startsWith("video/")
      ? "/video-poster.webp"
      : undefined,
  }
}
