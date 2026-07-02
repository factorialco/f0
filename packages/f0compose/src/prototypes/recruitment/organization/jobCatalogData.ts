/**
 * Job Catalog Tree fixtures for the Recruitment Organization tab.
 */

export type JobCatalogNodeType = "root" | "family" | "function" | "role" | "level"

export interface JobCatalogNode {
  id: string
  name: string
  type: JobCatalogNodeType
  description?: string
  children: JobCatalogNode[]
}

export const jobCatalogTree: JobCatalogNode = {
  id: "root",
  name: "Factorial Clothing Co",
  type: "root",
  children: [
    {
      id: "fam-eng",
      name: "Engineering",
      type: "family",
      children: [
        {
          id: "fn-backend",
          name: "Backend",
          type: "function",
          children: [
            {
              id: "role-be-eng",
              name: "Backend Engineer",
              type: "role",
              description: "Designs, builds, and maintains server-side applications and APIs.",
              children: [
                { id: "lvl-be-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-be-mid", name: "Mid", type: "level", children: [] },
                { id: "lvl-be-sr", name: "Senior", type: "level", children: [] },
                { id: "lvl-be-staff", name: "Staff", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-frontend",
          name: "Frontend",
          type: "function",
          children: [
            {
              id: "role-fe-eng",
              name: "Frontend Engineer",
              type: "role",
              description: "Builds and maintains client-side web applications using React and TypeScript.",
              children: [
                { id: "lvl-fe-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-fe-mid", name: "Mid", type: "level", children: [] },
                { id: "lvl-fe-sr", name: "Senior", type: "level", children: [] },
                { id: "lvl-fe-staff", name: "Staff", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-platform",
          name: "Platform",
          type: "function",
          children: [
            {
              id: "role-sre",
              name: "Site Reliability Engineer",
              type: "role",
              description: "Ensures the reliability, scalability, and performance of production systems.",
              children: [
                { id: "lvl-sre-mid", name: "Mid", type: "level", children: [] },
                { id: "lvl-sre-sr", name: "Senior", type: "level", children: [] },
              ],
            },
            {
              id: "role-devops",
              name: "DevOps Engineer",
              type: "role",
              description: "Builds and maintains CI/CD pipelines and infrastructure automation.",
              children: [
                { id: "lvl-devops-mid", name: "Mid", type: "level", children: [] },
                { id: "lvl-devops-sr", name: "Senior", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-eng-mgmt",
          name: "Engineering Management",
          type: "function",
          children: [
            {
              id: "role-em",
              name: "Engineering Manager",
              type: "role",
              description: "Leads engineering teams, manages delivery and people development.",
              children: [
                { id: "lvl-em-m1", name: "M1", type: "level", children: [] },
                { id: "lvl-em-m2", name: "M2", type: "level", children: [] },
              ],
            },
            {
              id: "role-dir-eng",
              name: "Director of Engineering",
              type: "role",
              children: [
                { id: "lvl-dir-eng", name: "Director", type: "level", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fam-product",
      name: "Product & Design",
      type: "family",
      children: [
        {
          id: "fn-product",
          name: "Product Management",
          type: "function",
          children: [
            {
              id: "role-pm",
              name: "Product Manager",
              type: "role",
              description: "Defines product strategy and roadmap, works with engineering and design.",
              children: [
                { id: "lvl-pm-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-pm-sr", name: "Senior", type: "level", children: [] },
                { id: "lvl-pm-lead", name: "Lead", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-design",
          name: "Design",
          type: "function",
          children: [
            {
              id: "role-pd",
              name: "Product Designer",
              type: "role",
              description: "Creates user-centered designs and prototypes for product features.",
              children: [
                { id: "lvl-pd-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-pd-sr", name: "Senior", type: "level", children: [] },
              ],
            },
            {
              id: "role-ux-res",
              name: "UX Researcher",
              type: "role",
              children: [
                { id: "lvl-ux-mid", name: "Mid", type: "level", children: [] },
                { id: "lvl-ux-sr", name: "Senior", type: "level", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fam-sales",
      name: "Sales",
      type: "family",
      children: [
        {
          id: "fn-ae",
          name: "Account Executives",
          type: "function",
          children: [
            {
              id: "role-ae",
              name: "Account Executive",
              type: "role",
              description: "Manages the full sales cycle from prospecting to close.",
              children: [
                { id: "lvl-ae-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-ae-sr", name: "Senior", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-sdr",
          name: "Sales Development",
          type: "function",
          children: [
            {
              id: "role-sdr",
              name: "SDR",
              type: "role",
              description: "Generates qualified pipeline through outbound prospecting.",
              children: [
                { id: "lvl-sdr", name: "SDR", type: "level", children: [] },
                { id: "lvl-sdr-sr", name: "Senior SDR", type: "level", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "fam-people",
      name: "People & Culture",
      type: "family",
      children: [
        {
          id: "fn-hr",
          name: "HR Operations",
          type: "function",
          children: [
            {
              id: "role-hrbp",
              name: "HR Business Partner",
              type: "role",
              description: "Strategic people advisor to business leaders.",
              children: [
                { id: "lvl-hrbp", name: "HRBP", type: "level", children: [] },
                { id: "lvl-hrbp-sr", name: "Senior HRBP", type: "level", children: [] },
              ],
            },
          ],
        },
        {
          id: "fn-ta",
          name: "Talent Acquisition",
          type: "function",
          children: [
            {
              id: "role-recruiter",
              name: "Recruiter",
              type: "role",
              description: "Manages full-cycle recruitment for open positions.",
              children: [
                { id: "lvl-rec-jr", name: "Junior", type: "level", children: [] },
                { id: "lvl-rec-sr", name: "Senior", type: "level", children: [] },
              ],
            },
          ],
        },
      ],
    },
  ],
}
