import {
  F0Form,
  f0FormField,
  useF0Form,
  useF0FormDefinition,
} from "@factorialco/f0-react"
import { z } from "zod"

/**
 * "Create job posting" form, modelled on the production Recruitment
 * dialog. Schema + sections + defaults live at module scope (truly
 * static). The hooks `useF0Form` + `useF0FormDefinition` run inside the
 * form component so they're paired with the rendered `<F0Form>` —
 * registering them in a parent that doesn't also render the form
 * loops the AI chat panel.
 *
 * Layout uses the `row` prop to pair related fields side-by-side, per
 * the production design (see screenshot in the spec).
 */

// ---------------------------------------------------------------------
// Static schema — never re-allocated.
// ---------------------------------------------------------------------

const jobSchema = z.object({
  // Job title — full width on its own row.
  title: f0FormField.text({
    label: "Job title",
    placeholder: "Enter job title",
    helpText: "Public-facing title shown on the job posting.",
  }),

  // Role + Level
  role: f0FormField.select({
    label: "Role",
    row: "role-level",
    optional: true,
    placeholder: "Select a role",
    options: [
      { value: "engineer", label: "Engineer" },
      { value: "designer", label: "Designer" },
      { value: "product-manager", label: "Product manager" },
      { value: "data", label: "Data analyst" },
      { value: "sales", label: "Sales" },
      { value: "customer-success", label: "Customer success" },
      { value: "people", label: "People & HR" },
      { value: "finance", label: "Finance" },
      { value: "marketing", label: "Marketing" },
      { value: "other", label: "Other" },
    ],
  }),
  level: f0FormField.select({
    label: "Level",
    row: "role-level",
    optional: true,
    placeholder: "Select a level",
    options: [
      { value: "intern", label: "Intern" },
      { value: "junior", label: "Junior" },
      { value: "mid", label: "Mid" },
      { value: "senior", label: "Senior" },
      { value: "staff", label: "Staff" },
      { value: "lead", label: "Lead" },
      { value: "manager", label: "Manager" },
      { value: "director", label: "Director" },
      { value: "vp", label: "VP" },
    ],
  }),

  // Workplace + Team
  workplace: f0FormField.select({
    label: "Workplace",
    row: "where-1",
    placeholder: "Select location",
    options: [
      { value: "barcelona-hq", label: "Barcelona HQ" },
      { value: "madrid-office", label: "Madrid office" },
      { value: "paris-office-6", label: "Paris office 6" },
      { value: "london-office-13", label: "London office 13" },
      { value: "new-york-office-10", label: "New York office 10" },
      { value: "berlin-office", label: "Berlin office" },
      { value: "remote", label: "Remote (any country)" },
    ],
  }),
  team: f0FormField.select({
    label: "Team",
    row: "where-1",
    optional: true,
    placeholder: "Select team",
    options: [
      { value: "engineering-leadership", label: "Engineering Leadership" },
      { value: "platform", label: "Platform" },
      { value: "payroll", label: "Payroll" },
      { value: "people-ops", label: "People Operations" },
      { value: "design-system", label: "Design System" },
      { value: "product-core", label: "Product Core" },
      { value: "sales-emea", label: "Sales EMEA" },
      { value: "customer-success", label: "Customer Success" },
    ],
  }),

  // Vacancies + Start date
  vacancies: f0FormField.number({
    label: "Number of vacancies",
    row: "logistics-1",
    placeholder: "1",
    isInt: true,
    min: 1,
  }),
  startDate: f0FormField.date({
    label: "Start date",
    row: "logistics-1",
    optional: true,
    placeholder: "Select start date",
  }),

  // Legal entity + Type of location
  legalEntity: f0FormField.select({
    label: "Legal entity",
    row: "where-2",
    placeholder: "Select legal entity",
    options: [
      { value: "factorial-spain-sl", label: "Factorial Spain S.L." },
      { value: "factorial-uk-ltd", label: "Factorial UK Ltd." },
      { value: "factorial-france-sas", label: "Factorial France SAS" },
      { value: "factorial-germany-gmbh", label: "Factorial Germany GmbH" },
      { value: "factorial-us-inc", label: "Factorial US Inc." },
    ],
  }),
  typeOfLocation: f0FormField.select({
    label: "Type of location",
    row: "where-2",
    placeholder: "Select type of location",
    options: [
      { value: "onsite", label: "Onsite" },
      { value: "hybrid", label: "Hybrid" },
      { value: "remote", label: "Remote" },
    ],
  }),

  // Visibility toggles
  allowReferrals: f0FormField.checkbox({
    label: "Allow employees to share referrals",
    row: "visibility-1",
    optional: true,
  }),
  allowEmployeesApply: f0FormField.checkbox({
    label: "Allow employees to apply",
    row: "visibility-1",
    optional: true,
  }),
})

const defaultValues = {
  title: "",
  role: undefined,
  level: undefined,
  workplace: undefined,
  team: undefined,
  typeOfLocation: undefined,
  legalEntity: undefined,
  vacancies: 1,
  startDate: undefined,
  allowReferrals: false,
  allowEmployeesApply: false,
}

const submitConfig = { label: "Create" }

export type NewJob = {
  title: string
  role?: string
  level?: string
  workplace: string
  team?: string
  vacancies: number
  startDate?: Date
  legalEntity: string
  typeOfLocation: string
  allowReferrals: boolean
  allowEmployeesApply: boolean
}

type Props = {
  onCreate: (job: NewJob) => void
}

export function CreateJobForm({ onCreate }: Props) {
  const { formRef } = useF0Form()
  const formDefinition = useF0FormDefinition({
    name: "create-job-posting",
    schema: jobSchema,
    defaultValues,
    submitConfig,
    onSubmit: async ({ data }) => {
      onCreate(data as NewJob)
      return { success: true, message: "Job posting created!" }
    },
  })

  return <F0Form formRef={formRef} formDefinition={formDefinition} />
}
