import { F0IconProps, IconType } from "@/components/F0Icon"
import {
  FaceNegative,
  FaceNeutral,
  FacePositive,
  FaceSuperNegative,
  FaceSuperPositive,
} from "@/icons/app"

export const pulses = [
  "superNegative",
  "negative",
  "neutral",
  "positive",
  "superPositive",
] as const
export type Pulse = (typeof pulses)[number]

export const pulseIcon: Record<Pulse, IconType> = {
  superNegative: FaceSuperNegative,
  negative: FaceNegative,
  neutral: FaceNeutral,
  positive: FacePositive,
  superPositive: FaceSuperPositive,
}

export const pulseIconColor: Record<Pulse, F0IconProps["color"]> = {
  superNegative: "mood-super-negative",
  negative: "mood-negative",
  neutral: "mood-neutral",
  positive: "mood-positive",
  superPositive: "mood-super-positive",
}
