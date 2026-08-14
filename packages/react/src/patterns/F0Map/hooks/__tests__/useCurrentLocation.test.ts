import { beforeEach, describe, expect, it, vi } from "vitest"

import {
  act,
  waitFor,
  zeroRenderHook as renderHook,
} from "@/testing/test-utils"

import { useCurrentLocation } from "../useCurrentLocation"

const COORDS = { longitude: 2.15, latitude: 41.39 }

const stubGeolocation = () => {
  const getCurrentPosition = vi.fn((success: PositionCallback) =>
    success({ coords: COORDS } as GeolocationPosition)
  )
  Object.defineProperty(navigator, "geolocation", {
    configurable: true,
    value: { getCurrentPosition },
  })
  return getCurrentPosition
}

const stubPermissions = (state: PermissionState) => {
  const query = vi.fn(async () => ({ state }) as PermissionStatus)
  Object.defineProperty(navigator, "permissions", {
    configurable: true,
    value: { query },
  })
  return query
}

describe("useCurrentLocation", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("never touches geolocation when disabled, even if permission is granted", () => {
    const getCurrentPosition = stubGeolocation()
    const query = stubPermissions("granted")

    const { result } = renderHook(() => useCurrentLocation(false))

    // The whole path is gated: no permission query, no fetch, no dot.
    expect(query).not.toHaveBeenCalled()
    expect(getCurrentPosition).not.toHaveBeenCalled()
    expect(result.current.coords).toBeNull()
  })

  it("auto-shows silently when enabled and permission is already granted", async () => {
    const getCurrentPosition = stubGeolocation()
    stubPermissions("granted")

    const { result } = renderHook(() => useCurrentLocation(true))

    await waitFor(() => expect(result.current.coords).toEqual([2.15, 41.39]))
    expect(getCurrentPosition).toHaveBeenCalledTimes(1)
  })

  it("does not prompt on mount when enabled but permission is not yet granted", async () => {
    const getCurrentPosition = stubGeolocation()
    const query = stubPermissions("prompt")

    const { result } = renderHook(() => useCurrentLocation(true))

    await waitFor(() => expect(query).toHaveBeenCalled())
    // "prompt" state must stay silent - the locate control is the only prompt.
    expect(getCurrentPosition).not.toHaveBeenCalled()
    expect(result.current.coords).toBeNull()
  })

  it("request() prompts and sets coords when enabled", async () => {
    const getCurrentPosition = stubGeolocation()
    stubPermissions("prompt")

    const { result } = renderHook(() => useCurrentLocation(true))

    act(() => result.current.request())

    await waitFor(() => expect(result.current.coords).toEqual([2.15, 41.39]))
    expect(getCurrentPosition).toHaveBeenCalledTimes(1)
  })

  it("request() is a no-op when disabled", () => {
    const getCurrentPosition = stubGeolocation()
    stubPermissions("prompt")

    const { result } = renderHook(() => useCurrentLocation(false))

    act(() => result.current.request())

    expect(getCurrentPosition).not.toHaveBeenCalled()
    expect(result.current.coords).toBeNull()
  })
})
