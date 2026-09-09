import type { Location } from "./types"

export const locations: Location[] = [
  {
    id: "loc-bcn",
    name: "Barcelona",
    country: "ES",
    city: "Barcelona",
    remote: false,
  },
  {
    id: "loc-mad",
    name: "Madrid",
    country: "ES",
    city: "Madrid",
    remote: false,
  },
  {
    id: "loc-ber",
    name: "Berlin",
    country: "DE",
    city: "Berlin",
    remote: false,
  },
  { id: "loc-remote", name: "Remote", country: "—", remote: true },
]

export function findLocation(id: string): Location | undefined {
  return locations.find((l) => l.id === id)
}
