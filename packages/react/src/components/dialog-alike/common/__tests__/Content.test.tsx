import { describe, expect, it } from "vitest"

import { zeroRender as render } from "@/testing/test-utils"

import { DialogWrapperProvider } from "../DialogWrapperProvider"
import { Content } from "../Content"

describe("Content", () => {
  it("lets its flex-1 wrapper shrink below content size so the inner ScrollArea can scroll instead of clipping", () => {
    const { container } = render(
      <DialogWrapperProvider
        isOpen
        onClose={() => {}}
        position="center"
        portalContainer={null}
      >
        <Content>
          <div>Step content</div>
        </Content>
      </DialogWrapperProvider>
    )

    const wrapper = container.querySelector(".flex-1.flex-col.overflow-hidden")
    expect(wrapper).not.toBeNull()
    expect(wrapper).toHaveClass("min-h-0")
  })
})
