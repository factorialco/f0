import type { Candidate } from "@/fixtures"

import { ratingStatusVariant } from "./candidateRating"

/**
 * Column definitions for the Candidates OneDataCollection table.
 * Renderers return plain strings or compound { type, value } objects.
 */
export const candidatesColumns = [
  {
    id: "fullName",
    label: "Full name",
    sorting: "fullName",
    render: (item: Candidate) => ({
      type: "person" as const,
      value: {
        firstName: item.firstName,
        lastName: item.lastName,
        src: item.avatarUrl,
      },
    }),
  },
  {
    id: "email",
    label: "Email",
    render: (item: Candidate) => item.email,
  },
  {
    id: "phone",
    label: "Phone",
    render: (item: Candidate) => item.phone,
  },
  {
    id: "jobApplied",
    label: "Jobs",
    render: (item: Candidate) => ({
      type: "tag" as const,
      value: { label: item.jobApplied },
    }),
  },
  {
    id: "source",
    label: "Source",
    render: (item: Candidate) => ({
      type: "tag" as const,
      value: { label: item.source },
    }),
  },
  {
    id: "rating",
    label: "Rating",
    sorting: "rating",
    render: (item: Candidate) => ({
      type: "status" as const,
      value: {
        label: String(item.rating),
        status: ratingStatusVariant(item.rating),
      },
    }),
  },
  {
    id: "appliedOn",
    label: "Applied on",
    sorting: "appliedOn",
    render: (item: Candidate) => item.appliedOn,
  },
  {
    id: "categories",
    label: "Categories",
    render: (item: Candidate) => ({
      type: "tagList" as const,
      value: {
        type: "dot" as const,
        tags: item.categories.map((c) => ({ text: c })),
        max: 2,
      },
    }),
  },
]
