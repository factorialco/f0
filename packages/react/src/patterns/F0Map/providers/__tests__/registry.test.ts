import { describe, expect, it, vi } from "vitest"

describe("loadMapAdapterFactory", () => {
  it("forgets a rejected load so the next attempt retries", async () => {
    vi.resetModules()
    const { loadMapAdapterFactory } = await import("../registry")
    const google = await import("../google")
    const spy = vi
      .spyOn(google, "loadGoogleAdapter")
      .mockRejectedValueOnce(new Error("script blocked"))

    await expect(
      loadMapAdapterFactory("google", { apiKey: "k" })
    ).rejects.toThrow("script blocked")

    // A memoised failure would make a transient one permanent for the session.
    spy.mockResolvedValueOnce((() => {
      throw new Error("not reached")
    }) as never)
    await expect(
      loadMapAdapterFactory("google", { apiKey: "k" })
    ).resolves.toBeTypeOf("function")
    expect(spy).toHaveBeenCalledTimes(2)
  })
})
