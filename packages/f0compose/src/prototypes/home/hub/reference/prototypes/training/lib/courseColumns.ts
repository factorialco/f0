import { EyeVisible } from "@factorialco/f0-react/icons/app"

import type { Course } from "../mocks/courses"

import { DASH, peopleLabel, requirementLabel, statusLabel } from "./format"

/**
 * Column definitions for the Training courses OneDataCollection table — mirrors
 * the reference screen: Course · Internal code · Participants · Validity expired
 * · Catalog · Status · Requirement · Categories · Axes · Competencies.
 * Renderers return strings or compound `{ type, value }` cells — never JSX
 * (OneDataCollection maps these to F0 value-display cell components).
 */
export function courseColumns() {
  return [
    {
      id: "name",
      label: "Course",
      sorting: "name",
      render: (item: Course) => item.name,
    },
    {
      id: "internalCode",
      label: "Internal code",
      render: (item: Course) => item.internalCode ?? DASH,
    },
    {
      id: "participants",
      label: "Participants",
      sorting: "participants",
      render: (item: Course) => ({
        type: "number" as const,
        value: item.participants,
      }),
    },
    {
      id: "validityExpired",
      label: "Validity expired",
      render: (item: Course) => ({
        type: "dotTag" as const,
        value: {
          label: peopleLabel(item.validityExpired),
          color: "viridian" as const,
        },
      }),
    },
    {
      id: "catalog",
      label: "Catalog",
      render: (item: Course) =>
        item.onCatalog
          ? {
              type: "icon" as const,
              value: { icon: EyeVisible, label: "On catalog" },
            }
          : DASH,
    },
    {
      id: "status",
      label: "Status",
      render: (item: Course) => ({
        type: "status" as const,
        value: { label: statusLabel(item.status), status: "positive" as const },
      }),
    },
    {
      id: "requirement",
      label: "Requirement",
      render: (item: Course) => ({
        type: "tag" as const,
        value: { label: requirementLabel(item.requirement) },
      }),
    },
    {
      id: "categories",
      label: "Categories",
      render: (item: Course) =>
        item.categories.length === 0
          ? DASH
          : {
              type: "tagList" as const,
              value: {
                type: "raw" as const,
                tags: item.categories.map((text) => ({ text })),
                max: 2,
              },
            },
    },
    {
      id: "axes",
      label: "Axes",
      render: (item: Course) =>
        item.axes.length === 0
          ? DASH
          : {
              type: "tagList" as const,
              value: {
                type: "raw" as const,
                tags: item.axes.map((text) => ({ text })),
                max: 2,
              },
            },
    },
    {
      id: "competencies",
      label: "Competencies",
      render: (item: Course) =>
        item.competencies.length === 0
          ? DASH
          : {
              type: "tagList" as const,
              value: {
                type: "raw" as const,
                tags: item.competencies.map((text) => ({ text })),
                max: 2,
              },
            },
    },
  ]
}
