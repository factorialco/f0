import { useState } from "react"

import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import { HeaderCollapseProvider, useHeaderCollapse } from "../index"

/** Reads the progress the way a header does, and prints it for assertions. */
const Reader = () => <span data-testid="progress">{useHeaderCollapse()}</span>

const progressOf = () => screen.getByTestId("progress").textContent

describe("useHeaderCollapse", () => {
  it("reads the progress the provider was given", () => {
    render(
      <HeaderCollapseProvider progress={0.4}>
        <Reader />
      </HeaderCollapseProvider>
    )

    expect(progressOf()).toBe("0.4")
  })

  it("follows the progress as it changes", async () => {
    const user = userEvent.setup()

    const Owner = () => {
      const [progress, setProgress] = useState(0)
      return (
        <>
          <button onClick={() => setProgress(1)}>scroll</button>
          <HeaderCollapseProvider progress={progress}>
            <Reader />
          </HeaderCollapseProvider>
        </>
      )
    }

    render(<Owner />)
    expect(progressOf()).toBe("0")

    await user.click(screen.getByRole("button", { name: "scroll" }))

    expect(progressOf()).toBe("1")
  })

  it("reads fully open outside any provider, without throwing", () => {
    // The case `F0Dialog` relies on: a header nowhere near a scrolling page.
    render(<Reader />)

    expect(progressOf()).toBe("0")
  })
})

describe("registration", () => {
  it("reports the first header arriving and the last one leaving", () => {
    const onRegistrationChange = vi.fn()

    const { unmount } = render(
      <HeaderCollapseProvider
        progress={0}
        onRegistrationChange={onRegistrationChange}
      >
        <Reader />
      </HeaderCollapseProvider>
    )

    expect(onRegistrationChange).toHaveBeenCalledTimes(1)
    expect(onRegistrationChange).toHaveBeenLastCalledWith(true)

    unmount()

    expect(onRegistrationChange).toHaveBeenCalledTimes(2)
    expect(onRegistrationChange).toHaveBeenLastCalledWith(false)
  })

  it("reports once for two headers, and stays on until both leave", async () => {
    const user = userEvent.setup()
    const onRegistrationChange = vi.fn()

    const Owner = () => {
      const [both, setBoth] = useState(true)
      return (
        <>
          <button onClick={() => setBoth(false)}>drop one</button>
          <HeaderCollapseProvider
            progress={0}
            onRegistrationChange={onRegistrationChange}
          >
            <Reader />
            {both && <Reader />}
          </HeaderCollapseProvider>
        </>
      )
    }

    render(<Owner />)

    // Counted, not flagged: two headers are one reason to watch the scroll.
    expect(onRegistrationChange).toHaveBeenCalledTimes(1)
    expect(onRegistrationChange).toHaveBeenLastCalledWith(true)

    await user.click(screen.getByRole("button", { name: "drop one" }))

    // One left, one still here, so nothing changed for the owner.
    expect(onRegistrationChange).toHaveBeenCalledTimes(1)
  })

  it("comes back after a header unmounts and remounts", async () => {
    const user = userEvent.setup()
    const onRegistrationChange = vi.fn()

    const Owner = () => {
      const [shown, setShown] = useState(true)
      return (
        <>
          <button onClick={() => setShown((was) => !was)}>toggle</button>
          <HeaderCollapseProvider
            progress={0}
            onRegistrationChange={onRegistrationChange}
          >
            {shown && <Reader />}
          </HeaderCollapseProvider>
        </>
      )
    }

    render(<Owner />)
    const toggle = screen.getByRole("button", { name: "toggle" })

    await user.click(toggle)
    expect(onRegistrationChange).toHaveBeenLastCalledWith(false)

    // A route change unmounts the header and mounts a new one. Registration has
    // to come back rather than latching off.
    await user.click(toggle)
    expect(onRegistrationChange).toHaveBeenLastCalledWith(true)
  })

  it("survives an owner that passes a fresh callback every render", async () => {
    const user = userEvent.setup()
    const calls: boolean[] = []

    const Owner = () => {
      const [progress, setProgress] = useState(0)
      return (
        <>
          <button onClick={() => setProgress((was) => was + 0.1)}>
            scroll
          </button>
          <HeaderCollapseProvider
            progress={progress}
            // Deliberately unstable, which is what a scroll handler in the
            // owner looks like. It must not churn the registration.
            onRegistrationChange={(hasHeader) => calls.push(hasHeader)}
          >
            <Reader />
          </HeaderCollapseProvider>
        </>
      )
    }

    render(<Owner />)
    expect(calls).toEqual([true])

    await user.click(screen.getByRole("button", { name: "scroll" }))
    await user.click(screen.getByRole("button", { name: "scroll" }))

    expect(calls).toEqual([true])
  })
})
