import { describe, expect, it } from "vitest"

import {
  decodeSharedPreset,
  encodeSharedPreset,
  type SharedPresetPayload,
} from "./sharedPreset"

describe("shared preset encoding", () => {
  const payload: SharedPresetPayload = {
    label: "My cool view 🚀",
    description: "Engineering, by salary",
    filter: { department: ["Engineering"] },
    sortings: { field: "salary", order: "desc" },
    grouping: { field: "role" },
    visualization: 1,
    settings: { columns: ["name", "salary"] },
  }

  it("round-trips a full payload (non-ASCII title survives)", () => {
    const decoded = decodeSharedPreset(encodeSharedPreset(payload))
    expect(decoded).toEqual(payload)
  })

  it("produces a URL-safe blob (no +, /, or = characters)", () => {
    const encoded = encodeSharedPreset(payload)
    expect(encoded).not.toMatch(/[+/=]/)
  })

  it("returns null for malformed input", () => {
    expect(decodeSharedPreset("")).toBeNull()
    expect(decodeSharedPreset(undefined)).toBeNull()
    expect(decodeSharedPreset("not-valid-base64!!!")).toBeNull()
  })

  it("rejects a decoded payload without a string label", () => {
    const encoded = Buffer.from(JSON.stringify({ foo: "bar" }))
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "")
    expect(decodeSharedPreset(encoded)).toBeNull()
  })
})
