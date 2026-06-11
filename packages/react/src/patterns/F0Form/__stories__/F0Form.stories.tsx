import type { Meta, StoryObj } from "@storybook/react-vite"

import { useState, useCallback, useMemo, useRef } from "react"
import { z } from "zod"

import { F0Button } from "@/components/F0Button"
import { createDataSourceDefinition } from "@/hooks/datasource"
import { ExternalLink, Plus, Settings } from "@/icons/app"
import { F0Dialog } from "@/patterns/F0Dialog"
import { useF0FormDefinition } from "@/patterns/F0WizardForm"

import type {
  FileUploadHookReturn,
  FileUploadResult,
  FileUploadStatus,
} from "../fields/types"
import type { RenderCustomFieldSelectConfig } from "../types"

import {
  f0FormField,
  F0Form,
  F0SectionConfig,
  useF0Form,
  RenderCustomFieldProps,
  F0FormRef,
} from "../index"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const meta: Meta = {
  title: "Forms/F0Form",
  component: F0Form,
  tags: ["!autodocs"],
  parameters: { a11y: { skipCi: true } },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Basic form with simple text fields.
 * All form configuration is bundled into a `formDefinition` via `useF0FormDefinition`.
 * Field metadata (label, placeholder) is embedded directly in the Zod schema.
 * Position is derived from declaration order.
 */
export const Default: Story = {
  render() {
    const formSchema = z.object({
      username: f0FormField.text({
        label: "Username",
        placeholder: "Enter username",
        helpText: "Choose a unique username",
        minLength: 2,
        maxLength: 20,
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "you@example.com",
      }),
      bio: f0FormField.textarea({
        label: "Biography",
        helpText: "Tell us about yourself",
        optional: true,
        rows: 4,
      }),
      salary: f0FormField.number({
        label: "Salary",
        placeholder: "Enter salary (decimals allowed)",
        min: 0,
      }),
      age: f0FormField.number({
        label: "Age",
        placeholder: "Enter age (integers only)",
        isInt: true,
        min: 0,
        max: 120,
      }),
      discount: f0FormField.percentage({
        label: "Discount",
        placeholder: "Enter discount",
      }),
      budget: f0FormField.money({
        label: "Budget",
        placeholder: "Enter budget",
        currency: "EUR",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "basic",
      schema: formSchema,
      defaultValues: {
        username: "",
        email: "",
        bio: "",
        salary: 0,
        age: 0,
        discount: 0,
        budget: 0,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Account created successfully" }
      },
      submitConfig: { label: "Create Account" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * A field whose `alert` resolves to `variant: "critical"` is treated as an
 * error: the input shows error styling and the form cannot be submitted while
 * the alert is active.
 *
 * Here, ordering more than the available stock (10) surfaces a critical alert
 * and disables the submit button. Lower the quantity to 10 or below and the
 * alert clears, re-enabling submission.
 */
export const CriticalAlertBlocksSubmit: Story = {
  render() {
    const formSchema = z.object({
      quantity: f0FormField.number({
        label: "Quantity",
        placeholder: "How many units?",
        helpText: "Only 10 units are in stock",
        min: 0,
        alert: ({ fieldValue }) =>
          typeof fieldValue === "number" && fieldValue > 10
            ? {
                title: "Not enough stock",
                description:
                  "Only 10 units are available. Reduce the quantity to continue.",
                variant: "critical" as const,
              }
            : null,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "critical-alert-blocks-submit",
      schema: formSchema,
      defaultValues: {
        quantity: 25,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with fields arranged in rows using the `row` property.
 * Fields with the same `row` value are grouped horizontally.
 */
export const WithRows: Story = {
  render() {
    const formSchema = z.object({
      fullName: f0FormField.text({
        label: "Full Name",
        minLength: 2,
      }),
      email: f0FormField.email({
        label: "Email",
        row: "contact-row",
      }),
      phone: f0FormField.text({
        label: "Phone",
        row: "contact-row",
        placeholder: "+1 (555) 000-0000",
        optional: true,
      }),
      city: f0FormField.text({
        label: "City",
        row: "location-row",
      }),
      country: f0FormField.select({
        label: "Country",
        row: "location-row",
        options: [
          { value: "us", label: "United States" },
          { value: "uk", label: "United Kingdom" },
          { value: "ca", label: "Canada" },
          { value: "es", label: "Spain" },
        ],
        placeholder: "Select country",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "with-rows",
      schema: formSchema,
      defaultValues: {
        fullName: "",
        email: "",
        phone: "",
        city: "",
        country: undefined,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with rows where some fields have validation errors.
 * Demonstrates that error messages appear directly under the field that
 * triggered them, not displaced to adjacent fields in the same row.
 *
 * Click "Submit" to trigger validation — mandatory fields show errors
 * only under their own labels, while optional fields remain clean.
 */
export const WithRowsAndValidation: Story = {
  render() {
    const formSchema = z.object({
      title: f0FormField.text({
        label: "Job Title",
        placeholder: "Enter job title",
      }),
      location: f0FormField.select({
        label: "Location",
        row: "location-team",
        options: [
          { value: "madrid", label: "Madrid" },
          { value: "barcelona", label: "Barcelona" },
          { value: "london", label: "London" },
        ],
        placeholder: "Select location",
      }),
      team: f0FormField.select({
        label: "Team",
        row: "location-team",
        optional: true,
        options: [
          { value: "engineering", label: "Engineering" },
          { value: "design", label: "Design" },
          { value: "product", label: "Product" },
        ],
        placeholder: "Select team",
      }),
      vacancies: f0FormField.number({
        label: "Number of Vacancies",
        placeholder: "1",
        optional: true,
        row: "vacancies-date",
      }),
      startDate: f0FormField.date({
        label: "Start Date",
        placeholder: "Select a date",
        row: "vacancies-date",
        optional: true,
      }),
      legalEntity: f0FormField.select({
        label: "Legal Entity",
        row: "legal-type",
        options: [
          { value: "acme-corp", label: "Acme Corp" },
          { value: "acme-eu", label: "Acme EU" },
        ],
        placeholder: "Select legal entity",
      }),
      workplaceType: f0FormField.select({
        label: "Workplace Type",
        row: "legal-type",
        placeholder: "Select type",
        options: [
          { value: "onsite", label: "On-site" },
          { value: "hybrid", label: "Hybrid" },
          { value: "remote", label: "Remote" },
        ],
      }),
      allowReferral: f0FormField.checkbox({
        label: "Allow referrals",
        row: "checkboxes",
        optional: true,
      }),
      allowInternal: f0FormField.checkbox({
        label: "Allow internal applications",
        row: "checkboxes",
        optional: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "rows-validation",
      schema: formSchema,
      defaultValues: {
        title: "",
        location: undefined,
        team: undefined,
        vacancies: undefined,
        startDate: undefined,
        legalEntity: undefined,
        workplaceType: undefined,
        allowReferral: false,
        allowInternal: false,
      },
      errorTriggerMode: "on-submit",
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with sections for organizing related fields.
 * Fields define which section they belong to via the `section` property.
 */
export const WithSections: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0FormField.text({
        label: "First Name",
        section: "personal",
      }),
      lastName: f0FormField.text({
        label: "Last Name",
        section: "personal",
      }),
      age: f0FormField.number({
        label: "Age",
        section: "personal",
        row: "personal-row",
        min: 18,
        max: 120,
      }),
      birthdate: f0FormField.date({
        label: "Birth Date",
        section: "personal",
        row: "personal-row",
        optional: true,
      }),
      newsletter: f0FormField.checkbox({
        label: "Subscribe to newsletter",
        section: "preferences",
        optional: true,
      }),
      darkMode: f0FormField.boolean({
        label: "Enable dark mode",
        section: "preferences",
        optional: true,
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      personal: {
        title: "Personal Information",
        description: "Enter your basic personal details",
      },
      preferences: {
        title: "Preferences",
        description: "Configure your account preferences",
        action: {
          label: "Go to settings",
          icon: Settings,
          href: "#settings",
        },
      },
    }

    const formDefinition = useF0FormDefinition({
      name: "with-sections",
      schema: formSchema,
      sections,
      defaultValues: {
        firstName: "",
        lastName: "",
        age: undefined,
        birthdate: undefined,
        newsletter: false,
        darkMode: false,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Profile saved" }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with a sections sidebar.
 * Use the `styling` prop to configure the layout:
 * - `showSectionsSidepanel`: Shows a sidebar with section navigation
 */
export const WithSectionsSidepanel: Story = {
  render() {
    const formSchema = z.object({
      // Basic Information
      title: f0FormField.text({
        label: "Title",
        section: "basic",
        placeholder: "Enter survey title",
      }),
      description: f0FormField.textarea({
        label: "Description (Optional)",
        section: "basic",
        optional: true,
        rows: 3,
      }),
      // Participants
      participants: f0FormField.select({
        label: "Select participants",
        section: "participants",
        options: [
          { value: "all", label: "All employees" },
          { value: "department", label: "By department" },
          { value: "custom", label: "Custom selection" },
        ],
        placeholder: "Select participants",
      }),
      // Schedule
      publishOn: f0FormField.date({
        label: "Publish on",
        section: "schedule",
        row: "schedule-dates",
        optional: true,
      }),
      endsAt: f0FormField.date({
        label: "Ends at",
        section: "schedule",
        row: "schedule-dates",
        optional: true,
      }),
      recurrence: f0FormField.select({
        label: "Recurrence",
        section: "schedule",
        options: [
          { value: "none", label: "Does not repeat" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
        ],
      }),
      // Visibility & Privacy
      managerVisibility: f0FormField.boolean({
        label: "Add visibility permissions to managers and team leads",
        helpText:
          "Grant access to managers and team leads. Even if they are not survey editors, they will be able to view the results of their own teams once responses are available",
        section: "visibility",
        optional: true,
      }),
      linkWorkflows: f0FormField.boolean({
        label: "Link this course with Workflows",
        helpText:
          "Use our Workflows solution to automate actions such as generating course certificates or sending questionnaires.",
        section: "visibility",
        optional: true,
        moreInfoLink: {
          href: "https://help.factorial.co/workflows",
        },
        alert: ({ fieldValue }) =>
          fieldValue
            ? {
                title: "Workflows integration active",
                description:
                  "Certificates and questionnaires will be generated automatically when this course is completed.",
              }
            : null,
      }),
      anonymousAnswers: f0FormField.boolean({
        label: "Anonymous answers",
        section: "visibility",
        optional: true,
      }),
      // Editors
      editors: f0FormField.select({
        label: "Select editors",
        section: "editors",
        options: [
          { value: "none", label: "None" },
          { value: "admins", label: "Administrators only" },
          { value: "custom", label: "Custom selection" },
        ],
        placeholder: "Select editors",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      basic: {
        title: "Basic Information",
      },
      participants: {
        title: "Participants",
        description: "Choose who will receive this survey",
        action: {
          label: "Manage groups",
          icon: ExternalLink,
          href: "#groups",
        },
      },
      schedule: {
        title: "Schedule",
      },
      visibility: {
        title: "Visibility & Privacy",
        description:
          "Configure the visibility and privacy settings for this survey",
        action: {
          label: "Privacy settings",
          icon: Settings,
          onClick: () => {
            console.info("Opening privacy settings...")
          },
        },
      },
      editors: {
        title: "Editors",
      },
    }

    const formDefinition = useF0FormDefinition({
      name: "survey-settings",
      schema: formSchema,
      sections,
      defaultValues: {
        title: "Workplace climate survey",
        description:
          "This short workplace climate survey contains just 12 simple questions. It is designed to help measure employees' perceptions, experiences, and overall satisfaction within the workplace.",
        participants: undefined,
        publishOn: undefined,
        endsAt: undefined,
        recurrence: "none",
        managerVisibility: false,
        anonymousAnswers: false,
        editors: "none",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Save Survey" },
    })

    return (
      <F0Form
        formDefinition={formDefinition}
        styling={{ showSectionsSidepanel: true }}
      />
    )
  },
}

/**
 * Form with conditional field rendering based on other field values.
 * Fields can use `renderIf` to conditionally show/hide based on other field values.
 * Supports both condition objects and functions.
 */
export const ConditionalRendering: Story = {
  render() {
    const formSchema = z.object({
      hasAccount: f0FormField.checkbox({
        label: "I already have an account",
        optional: true,
      }),
      accountId: f0FormField.text({
        label: "Account ID",
        helpText: "Enter your existing account ID",
        minLength: 6,
        // Condition object syntax
        renderIf: {
          fieldId: "hasAccount",
          equalsTo: true,
        },
      }),
      newUsername: f0FormField.text({
        label: "New Username",
        helpText: "Choose a username for your new account",
        minLength: 3,
        // Function syntax - equivalent to the condition object above
        renderIf: ({ values }) => values.hasAccount === false,
      }),
      employeeCount: f0FormField.number({
        label: "Number of Employees",
        min: 1,
        isInt: true,
      }),
      enterprisePlan: f0FormField.checkbox({
        label: "Enable Enterprise Plan",
        helpText: "Available for companies with 50+ employees",
        optional: true,
        // Function syntax for complex conditions
        renderIf: ({ values }) =>
          typeof values.employeeCount === "number" &&
          values.employeeCount >= 50,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "conditional-rendering",
      schema: formSchema,
      defaultValues: {
        hasAccount: false,
        accountId: "",
        newUsername: "",
        employeeCount: 1,
        enterprisePlan: false,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Three switch toggles grouped together, with dependent fields auto-nested inside
 * the second and third toggles. Fields using `renderIf: { fieldId, equalsTo: true }`
 * pointing at a switch are automatically rendered as expandable content inside
 * that switch card.
 */
export const SwitchGroupWithDependentFields: Story = {
  render() {
    const formSchema = z.object({
      enableRemoteWork: f0FormField.boolean({
        label: "Enable remote work",
        helpText: "Allow employees to work from home",
        optional: true,
      }),
      enableFlexHours: f0FormField.boolean({
        label: "Enable flexible hours",
        helpText: "Let employees choose their own start and end times",
        optional: true,
      }),
      enableOvertime: f0FormField.boolean({
        label: "Enable overtime",
        helpText: "Allow employees to log overtime hours",
        optional: true,
      }),
      flexStartTime: f0FormField.text({
        label: "Earliest start time",
        placeholder: "e.g. 07:00",
        row: "flex-hours-row",
        optional: true,
        renderIf: { fieldId: "enableFlexHours", equalsTo: true },
      }),
      flexEndTime: f0FormField.text({
        label: "Latest end time",
        placeholder: "e.g. 20:00",
        row: "flex-hours-row",
        optional: true,
        renderIf: { fieldId: "enableFlexHours", equalsTo: true },
      }),
      overtimeRate: f0FormField.select({
        label: "Overtime rate multiplier",
        helpText: "Rate applied to overtime hours (e.g. 1.5x)",
        options: [
          { value: "1.25", label: "1.25x" },
          { value: "1.5", label: "1.5x" },
          { value: "2.0", label: "2.0x" },
        ],
        placeholder: "Select rate",
        renderIf: { fieldId: "enableOvertime", equalsTo: true },
      }),
      overtimeCapHours: f0FormField.number({
        label: "Monthly overtime cap (hours)",
        helpText: "Maximum overtime hours allowed per month",
        min: 1,
        renderIf: { fieldId: "enableOvertime", equalsTo: true },
      }),
      overtimeCompensation: f0FormField.cardSelect({
        label: "Compensation model",
        hideLabel: true,
        options: [
          {
            value: "monetary",
            label: "Monetary",
            description: "Pay extra hours at the selected rate",
          },
          {
            value: "timeOff",
            label: "Time off",
            description: "Compensate with equivalent time off",
          },
          {
            value: "mixed",
            label: "Mixed",
            description: "Combine monetary and time off compensation",
          },
        ],
      }),
      monetaryBonusPercent: f0FormField.number({
        label: "Bonus percentage",
        helpText: "Additional bonus on top of the overtime rate",
        min: 0,
        max: 100,
        optional: true,
        renderIf: {
          fieldId: "overtimeCompensation",
          equalsTo: "monetary",
        },
      }),
      timeOffDaysPerHour: f0FormField.number({
        label: "Time off days per overtime hour",
        helpText: "How many days off the employee earns per overtime hour",
        min: 0,
        optional: true,
        renderIf: {
          fieldId: "overtimeCompensation",
          equalsTo: "timeOff",
        },
      }),
      mixedMonetaryPercent: f0FormField.number({
        label: "Monetary share (%)",
        helpText:
          "Percentage of overtime compensated monetarily (rest is time off)",
        min: 0,
        max: 100,
        optional: true,
        row: "mixed-row",
        renderIf: {
          fieldId: "overtimeCompensation",
          equalsTo: "mixed",
        },
      }),
      mixedTimeOffPercent: f0FormField.number({
        label: "Time off share (%)",
        helpText: "Percentage of overtime compensated with time off",
        min: 0,
        max: 100,
        optional: true,
        row: "mixed-row",
        renderIf: {
          fieldId: "overtimeCompensation",
          equalsTo: "mixed",
        },
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "switch-group-dependent-fields",
      schema: formSchema,
      defaultValues: {
        enableRemoteWork: false,
        enableFlexHours: false,
        flexStartTime: "",
        flexEndTime: "",
        enableOvertime: false,
        overtimeRate: undefined,
        overtimeCapHours: undefined,
        overtimeCompensation: "monetary",
        monetaryBonusPercent: undefined,
        timeOffDaysPerHour: undefined,
        mixedMonetaryPercent: undefined,
        mixedTimeOffPercent: undefined,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Demonstrates `grouped: false` on both switches and cardSelect fields.
 * - Switches with `grouped: false` render as standalone toggles instead of
 *   being merged into a single bordered container with adjacent switches.
 * - CardSelect with `grouped: false` renders each option as a separate bordered
 *   card instead of a single container with dividers.
 */
export const UngroupedFields: Story = {
  render() {
    const formSchema = z.object({
      enableNotifications: f0FormField.boolean({
        label: "Enable notifications",
        helpText: "Receive push notifications",
        optional: true,
      }),
      enableAnalytics: f0FormField.boolean({
        label: "Enable analytics",
        helpText: "This switch is ungrouped from the others",
        grouped: false,
        optional: true,
      }),
      enableDarkMode: f0FormField.boolean({
        label: "Enable dark mode",
        helpText: "Back to a grouped switch",
        optional: true,
      }),
      enableExperimental: f0FormField.boolean({
        label: "Enable experimental features",
        optional: true,
      }),
      billingCycle: f0FormField.cardSelect({
        label: "Billing cycle",
        grouped: false,
        options: [
          {
            value: "monthly",
            label: "Monthly",
            description: "Pay month by month",
          },
          {
            value: "annual",
            label: "Annual",
            description: "Save 20% with yearly billing",
          },
          {
            value: "lifetime",
            label: "Lifetime",
            description: "One-time payment, forever access",
          },
        ],
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "ungrouped-fields",
      schema: formSchema,
      defaultValues: {
        enableNotifications: false,
        enableAnalytics: false,
        enableDarkMode: false,
        enableExperimental: false,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with dynamic disabled fields based on other field values.
 * Fields can use `disabled` as a function that receives form values
 * to conditionally enable/disable based on other field values.
 *
 * Also demonstrates `resetOnDisable` which resets a field to its
 * default value when it becomes disabled.
 */
export const DynamicDisabled: Story = {
  render() {
    const formSchema = z.object({
      status: f0FormField.select({
        label: "Document Status",
        options: [
          { value: "draft", label: "Draft" },
          { value: "published", label: "Published" },
          { value: "archived", label: "Archived" },
        ],
        helpText: "Select 'Archived' to disable editing",
      }),
      title: f0FormField.text({
        label: "Title",
        placeholder: "Enter document title",
        // Disabled when status is 'archived'
        disabled: ({ values }) => values.status === "archived",
        resetOnDisable: true,
      }),
      content: f0FormField.textarea({
        label: "Content",
        rows: 4,
        placeholder: "Enter document content",
        optional: true,
        // Disabled when status is 'archived'
        disabled: ({ values }) => values.status === "archived",
      }),
      enableNotifications: f0FormField.boolean({
        label: "Enable Notifications",
        helpText: "Receive notifications about this document",
        optional: true,
      }),
      notifyOnComments: f0FormField.boolean({
        label: "Notify on Comments",
        helpText: "Get notified when someone comments",
        optional: true,
        // Disabled when notifications are disabled, resets to false
        disabled: ({ values }) => !values.enableNotifications,
        resetOnDisable: true,
      }),
      notifyOnEdits: f0FormField.boolean({
        label: "Notify on Edits",
        helpText: "Get notified when document is edited",
        optional: true,
        // Disabled when notifications are disabled, resets to false
        disabled: ({ values }) => !values.enableNotifications,
        resetOnDisable: true,
      }),
      employeeCount: f0FormField.number({
        label: "Number of Team Members",
        helpText: "Enter at least 10 to enable bulk actions",
        min: 1,
      }),
      bulkAction: f0FormField.select({
        label: "Bulk Action",
        optional: true,
        options: [
          { value: "notify", label: "Notify All" },
          { value: "export", label: "Export Data" },
          { value: "archive", label: "Archive All" },
        ],
        placeholder: "Select bulk action",
        // Disabled when employee count is less than 10, resets to undefined
        disabled: ({ values }) =>
          typeof values.employeeCount !== "number" || values.employeeCount < 10,
        resetOnDisable: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "dynamic-disabled",
      schema: formSchema,
      defaultValues: {
        status: "draft",
        title: "",
        content: "",
        enableNotifications: true,
        notifyOnComments: false,
        notifyOnEdits: false,
        employeeCount: 1,
        bulkAction: undefined,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form demonstrating all available field types.
 */
export const AllFieldTypes: Story = {
  render() {
    const formSchema = z.object({
      textField: f0FormField.text({
        label: "Text Field",
        placeholder: "Regular text input",
      }),
      emailField: f0FormField.email({
        label: "Email Field",
      }),
      passwordField: f0FormField.text({
        label: "Password Field",
        placeholder: "Enter password",
        inputType: "password",
      }),
      numberField: f0FormField.number({
        label: "Number Field",
        step: 1,
        alert: ({ fieldValue }) =>
          fieldValue === 0
            ? {
                title: "No competencies assigned",
                description:
                  "Competencies help assess employee growth. Consider adding at least one.",
                variant: "warning" as const,
                link: {
                  label: "Learn about competencies",
                  href: "https://help.factorial.co/competencies",
                },
              }
            : null,
      }),
      durationField: f0FormField.duration({
        label: "Duration Field",
        units: ["hours", "minutes", "seconds"],
      }),
      textareaField: f0FormField.textarea({
        label: "Textarea Field",
        rows: 3,
        placeholder: "Enter long text...",
      }),
      selectField: f0FormField.select({
        label: "Select Field",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        showSearchBox: true,
      }),
      multiSelectField: f0FormField.multiSelect({
        label: "Multi-Select Field",
        options: [
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ],
        placeholder: "Select multiple options",
      }),
      urlField: f0FormField.url({
        label: "URL Field",
      }),
      checkboxField: f0FormField.checkbox({
        label: "Checkbox Field",
        helpText: "Check this box to agree",
        optional: true,
      }),
      requiredCheckboxField: f0FormField.checkbox({
        label: "Required Checkbox Field",
        helpText: "Check this box to agree",
      }),
      switchField: f0FormField.boolean({
        label: "Switch Field",
        helpText: "Toggle this switch",
        optional: true,
        moreInfoLink: {
          href: "https://help.factorial.co/example",
          label: "Learn more",
        },
        alert: ({ fieldValue }) =>
          fieldValue
            ? {
                title: "Feature enabled",
                description:
                  "Enabling this feature will send notifications to all team members.",
                variant: "info" as const,
              }
            : null,
      }),
      requiredSwitchField: f0FormField.boolean({
        label: "Required Switch Field",
        helpText: "Toggle this switch",
      }),
      dateField: f0FormField.date({
        label: "Date Field",
        placeholder: "Select a date",
        granularities: ["day"],
      }),
      timeField: f0FormField.time({
        label: "Time Field",
        helpText: "Select a time (HH:mm)",
      }),
      datetimeField: f0FormField.datetime({
        label: "DateTime Field",
        helpText: "Select date and time",
        optional: true,
      }),
      dateRangeField: f0FormField.dateRange({
        label: "Date Range Field",
        placeholder: "Select date range",
        fromLabel: "Start",
        toLabel: "End",
      }),
      richTextField: f0FormField.richText({
        label: "Rich Text Field",
        placeholder: "Write something with formatting...",
        maxCharacters: 1000,
        height: "sm",
        plainHtmlMode: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "all-field-types",
      schema: formSchema,
      defaultValues: {
        textField: "",
        emailField: "",
        passwordField: "",
        numberField: 0,
        durationField: 0,
        textareaField: "",
        selectField: "option1",
        multiSelectField: [],
        checkboxField: false,
        switchField: false,
        dateField: undefined,
        timeField: undefined,
        datetimeField: undefined,
        dateRangeField: undefined,
        richTextField: { value: "" },
      },
      submitConfig: {
        type: "action-bar",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form demonstrating all available field types in disabled state.
 * Each field has `disabled: true` and is pre-filled with sample values.
 */
export const AllFieldTypesDisabled: Story = {
  render() {
    const formSchema = z.object({
      textField: f0FormField.text({
        label: "Text Field",
        placeholder: "Regular text input",
        disabled: true,
      }),
      emailField: f0FormField.email({
        label: "Email Field",
        disabled: true,
      }),
      passwordField: f0FormField.text({
        label: "Password Field",
        placeholder: "Enter password",
        inputType: "password",
        minLength: 8,
        disabled: true,
      }),
      numberField: f0FormField.number({
        label: "Number Field",
        min: 0,
        max: 100,
        step: 1,
        disabled: true,
      }),
      durationField: f0FormField.duration({
        label: "Duration Field",
        units: ["hours", "minutes", "seconds"],
        disabled: true,
      }),
      textareaField: f0FormField.textarea({
        label: "Textarea Field",
        rows: 3,
        placeholder: "Enter long text...",
        disabled: true,
      }),
      selectField: f0FormField.select({
        label: "Select Field",
        options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
        ],
        placeholder: "Select an option",
        showSearchBox: true,
        disabled: true,
      }),
      multiSelectField: f0FormField.multiSelect({
        label: "Multi-Select Field",
        options: [
          { value: "a", label: "Option A" },
          { value: "b", label: "Option B" },
          { value: "c", label: "Option C" },
        ],
        placeholder: "Select multiple options",
        disabled: true,
      }),
      urlField: f0FormField.url({
        label: "URL Field",
        disabled: true,
      }),
      checkboxField: f0FormField.checkbox({
        label: "Checkbox Field",
        helpText: "Check this box to agree",
        optional: true,
        disabled: true,
      }),
      requiredCheckboxField: f0FormField.checkbox({
        label: "Required Checkbox Field",
        helpText: "Check this box to agree",
        disabled: true,
      }),
      switchField: f0FormField.boolean({
        label: "Switch Field",
        helpText: "Toggle this switch",
        disabled: true,
      }),
      requiredSwitchField: f0FormField.boolean({
        label: "Required Switch Field",
        helpText: "Toggle this switch",
        disabled: true,
      }),
      dateField: f0FormField.date({
        label: "Date Field",
        placeholder: "Select a date",
        granularities: ["day"],
        optional: true,
        disabled: true,
      }),
      timeField: f0FormField.time({
        label: "Time Field",
        helpText: "Select a time (HH:mm)",
        disabled: true,
      }),
      datetimeField: f0FormField.datetime({
        label: "DateTime Field",
        helpText: "Select date and time",
        disabled: true,
      }),
      dateRangeField: f0FormField.dateRange({
        label: "Date Range Field",
        placeholder: "Select date range",
        optional: true,
        fromLabel: "Start",
        toLabel: "End",
        disabled: true,
      }),
      richTextField: f0FormField.richText({
        label: "Rich Text Field",
        placeholder: "Write something with formatting...",
        maxCharacters: 1000,
        height: "sm",
        plainHtmlMode: true,
        disabled: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "all-field-types-disabled",
      schema: formSchema,
      defaultValues: {
        textField: "Sample text value",
        emailField: "user@example.com",
        passwordField: "secretpassword",
        numberField: 42,
        durationField: 3661,
        textareaField:
          "This is a longer piece of text that demonstrates the textarea field in its disabled state.",
        selectField: "option2",
        multiSelectField: ["a", "b"],
        urlField: "https://example.com",
        checkboxField: true,
        requiredCheckboxField: true,
        switchField: true,
        requiredSwitchField: true,
        dateField: new Date("2024-06-15"),
        timeField: new Date("2024-06-15T14:30:00"),
        datetimeField: new Date("2024-06-15T14:30:00"),
        dateRangeField: {
          from: new Date("2024-01-01"),
          to: new Date("2024-12-31"),
        },
        richTextField: {
          value: "<p>This is <strong>rich text</strong> content.</p>",
        },
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

function useMockUpload(): FileUploadHookReturn {
  const [progress, setProgress] = useState(0)
  const [status, setStatus] = useState<FileUploadStatus>("idle")
  const abortRef = useRef(false)

  const upload = useCallback(async (file: File): Promise<FileUploadResult> => {
    abortRef.current = false
    setStatus("processing")
    setProgress(0)
    await sleep(500)
    if (abortRef.current) return { type: "aborted" }
    setStatus("uploading")
    for (let i = 1; i <= 10; i++) {
      await sleep(200)
      if (abortRef.current) return { type: "aborted" }
      setProgress(i / 10)
    }
    setStatus("success")
    return { type: "success", value: `signed_${file.name}_${Date.now()}` }
  }, [])

  const cancelUpload = useCallback(() => {
    abortRef.current = true
    setStatus("idle")
    setProgress(0)
  }, [])

  return { upload, cancelUpload, progress, status }
}

/**
 * File upload fields integrated within a form alongside other field types.
 * Demonstrates single file, multiple files, and file fields with validation
 * constraints — all using the declarative `f0FormField` API.
 */
export const FileFields: Story = {
  render() {
    const formSchema = z.object({
      title: f0FormField.text({
        label: "Document Title",
        placeholder: "Enter title",
      }),
      singleFile: f0FormField.file({
        label: "Cover Image",
        accept: ["image/jpeg", "image/png", "image/webp"],
        maxSizeMB: 5,
        description: "Upload a JPEG, PNG, or WebP image (max 5 MB)",
      }),
      attachments: f0FormField.multiFile({
        label: "Attachments",
        accept: ["application/pdf", "image"],
        maxSizeMB: 50,
      }),
      notes: f0FormField.textarea({
        label: "Notes",
        optional: true,
        rows: 3,
        placeholder: "Any additional notes...",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "file-fields",
      schema: formSchema,
      defaultValues: {
        title: "",
        singleFile: "",
        attachments: [],
        notes: "",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Document saved" }
      },
      submitConfig: { label: "Save Document" },
    })

    return <F0Form formDefinition={formDefinition} useUpload={useMockUpload} />
  },
}

/**
 * File field with pre-existing files loaded via `initialFiles` on F0Form.
 * The shared pool is automatically matched to each file field by comparing
 * `InitialFile.value` against the field's `defaultValues`.
 */
export const FileFieldsWithInitialFiles: Story = {
  render() {
    const formSchema = z.object({
      document: f0FormField.file({
        label: "Contract Document",
        accept: ["application/pdf"],
      }),
      attachments: f0FormField.multiFile({
        label: "Supporting Documents",
        accept: ["application/pdf", "image"],
        maxSizeMB: 50,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "file-initial",
      schema: formSchema,
      defaultValues: {
        document: "signed_contract_2024.pdf",
        attachments: ["signed_invoice.pdf", "signed_receipt.png"],
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Document updated" }
      },
      submitConfig: { label: "Update Document" },
      initialFiles: [
        {
          value: "signed_contract_2024.pdf",
          name: "contract_2024.pdf",
          type: "application/pdf",
          size: 2_500_000,
        },
        {
          value: "signed_invoice.pdf",
          name: "invoice_march.pdf",
          type: "application/pdf",
          size: 1_200_000,
        },
        {
          value: "signed_receipt.png",
          name: "receipt_photo.png",
          type: "image/png",
          size: 850_000,
        },
      ],
    })

    return <F0Form formDefinition={formDefinition} useUpload={useMockUpload} />
  },
}

/**
 * Mix of regular and file fields where both `defaultValues` and `initialFiles`
 * are fetched asynchronously. Default values resolve in ~800 ms; file metadata
 * resolves in ~1 500 ms. The form stays in a full loading state until the
 * slower of the two (initial files) finishes.
 */
export const FileFieldsWithAsyncInitialFiles: Story = {
  render() {
    const formSchema = z.object({
      title: f0FormField.text({
        label: "Document Title",
      }),
      notes: f0FormField.textarea({
        label: "Notes",
        optional: true,
      }),
      document: f0FormField.file({
        label: "Contract Document",
        accept: ["application/pdf"],
      }),
      attachments: f0FormField.multiFile({
        label: "Supporting Documents",
        accept: ["application/pdf", "image"],
        maxSizeMB: 50,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "file-initial-async",
      schema: formSchema,
      defaultValues: async (_signal) => {
        await sleep(800)
        return {
          title: "Q1 2024 Contract",
          notes: "Reviewed and approved by legal.",
          document: "signed_contract_2024.pdf",
          attachments: ["signed_invoice.pdf", "signed_receipt.png"],
        }
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Document updated" }
      },
      submitConfig: { label: "Update Document" },
      initialFiles: async (_signal) => {
        await sleep(1500)
        return [
          {
            value: "signed_contract_2024.pdf",
            name: "contract_2024.pdf",
            type: "application/pdf",
            size: 2_500_000,
          },
          {
            value: "signed_invoice.pdf",
            name: "invoice_march.pdf",
            type: "application/pdf",
            size: 1_200_000,
          },
          {
            value: "signed_receipt.png",
            name: "receipt_photo.png",
            type: "image/png",
            size: 850_000,
          },
        ]
      },
    })

    return <F0Form formDefinition={formDefinition} useUpload={useMockUpload} />
  },
}

/**
 * Demonstrates the `renderCustomField` prop for integrating external
 * components without inlining a `render` function in each field definition.
 *
 * Fields declare a `customFieldName` and optional `fieldConfig`; the form-level
 * `renderCustomField` callback dispatches on the name and renders the right
 * component. This keeps schema definitions declarative and lets consuming apps
 * register their custom renderers in a single place.
 */
export const CustomField: Story = {
  render() {
    // Simulated external component (like EmployeeSelectorV2)
    const ExternalSelector = ({
      label,
      value,
      onChange,
      error,
      disabled,
      options,
      placeholder,
    }: {
      label: string
      value: string | undefined
      onChange: (value: string | undefined) => void
      error?: string
      disabled?: boolean
      options: { id: string; name: string }[]
      placeholder?: string
    }) => (
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-f1-foreground-secondary">
          {label}
        </label>
        <select
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value || undefined)}
          disabled={disabled}
          className={`rounded-lg border px-3 py-2 text-sm ${
            error ? "border-f1-border-critical" : "border-f1-border-secondary"
          } ${disabled ? "opacity-50" : ""}`}
        >
          <option value="">{placeholder ?? "Select an option..."}</option>
          {options.map((opt) => (
            <option key={opt.id} value={opt.id}>
              {opt.name}
            </option>
          ))}
        </select>
        {error && (
          <span className="text-sm text-f1-foreground-critical">{error}</span>
        )}
      </div>
    )

    const PriorityPicker = ({
      label,
      value,
      onChange,
      error,
      disabled,
    }: {
      label: string
      value: string | undefined
      onChange: (value: string | undefined) => void
      error?: string
      disabled?: boolean
    }) => {
      const priorities = [
        { id: "low", label: "Low", color: "bg-blue-100 text-blue-800" },
        {
          id: "medium",
          label: "Medium",
          color: "bg-yellow-100 text-yellow-800",
        },
        { id: "high", label: "High", color: "bg-red-100 text-red-800" },
      ]
      return (
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium text-f1-foreground-secondary">
            {label}
          </label>
          <div className="flex gap-2">
            {priorities.map((p) => (
              <button
                key={p.id}
                type="button"
                disabled={disabled}
                onClick={() => onChange(value === p.id ? undefined : p.id)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                  value === p.id
                    ? `${p.color} ring-2 ring-offset-1`
                    : "bg-f1-background-tertiary text-f1-foreground-secondary"
                } ${disabled ? "opacity-50" : "cursor-pointer"}`}
              >
                {p.label}
              </button>
            ))}
          </div>
          {error && (
            <span className="text-sm text-f1-foreground-critical">{error}</span>
          )}
        </div>
      )
    }

    const employees = [
      { id: "1", name: "John Doe" },
      { id: "2", name: "Jane Smith" },
      { id: "3", name: "Bob Johnson" },
    ]

    const formSchema = z.object({
      title: f0FormField.text({
        label: "Task Title",
        placeholder: "Enter task title",
      }),
      // Declared with customFieldName — rendered by renderCustomField
      assignee: f0FormField(z.string().min(1, "Please select an assignee"), {
        label: "Assignee",
        fieldType: "custom",
        customFieldName: "employee-selector",
        fieldConfig: { options: employees },
      }),
      // Different customFieldName — same renderCustomField dispatches it
      priority: f0FormField(z.string().optional(), {
        label: "Priority",
        fieldType: "custom",
        customFieldName: "priority-picker",
      }),
      description: f0FormField.textarea({
        label: "Description",
        optional: true,
        rows: 3,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "custom-field-example",
      schema: formSchema,
      defaultValues: {
        title: "",
        assignee: "",
        priority: "",
        description: "",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Create Task" },
    })

    const renderCustomField = useCallback((props: RenderCustomFieldProps) => {
      switch (props.customFieldName) {
        case "employee-selector":
          return (
            <ExternalSelector
              label={props.label}
              value={(props.value as string) || undefined}
              onChange={(v) => props.onChange(v ?? "")}
              error={props.error}
              disabled={props.disabled}
              options={
                (props.config as { options: { id: string; name: string }[] })
                  .options
              }
              placeholder={props.placeholder}
            />
          )
        case "priority-picker":
          return (
            <PriorityPicker
              label={props.label}
              value={(props.value as string) || undefined}
              onChange={(v) => props.onChange(v ?? "")}
              error={props.error}
              disabled={props.disabled}
            />
          )
        default:
          return null
      }
    }, [])

    return (
      <F0Form
        formDefinition={formDefinition}
        renderCustomField={renderCustomField}
      />
    )
  },
}

/**
 * Demonstrates `customFieldName` on a regular **select** field.
 *
 * Instead of using `fieldType: "custom"`, the field stays `fieldType: "select"`
 * but adds `customFieldName`. The `renderCustomField` callback returns a
 * `RenderCustomFieldSelectConfig` object with the `source` and `mapOptions`,
 * which are merged into the field — so the native F0 Select component is rendered
 * with dynamically-provided data.
 */
export const SelectWithCustomFieldName: Story = {
  render() {
    type Department = {
      id: number
      name: string
      headcount: number
    }

    const departmentsData: Department[] = [
      { id: 1, name: "Engineering", headcount: 42 },
      { id: 2, name: "Design", headcount: 15 },
      { id: 3, name: "Product", headcount: 8 },
      { id: 4, name: "Marketing", headcount: 20 },
      { id: 5, name: "Sales", headcount: 30 },
      { id: 6, name: "Support", headcount: 25 },
    ]

    const departmentsSource = createDataSourceDefinition<Department>({
      dataAdapter: {
        fetchData: async ({ search }) => {
          await sleep(200)
          let results = departmentsData
          if (search) {
            const s = search.toLowerCase()
            results = results.filter((d) => d.name.toLowerCase().includes(s))
          }
          return { records: results }
        },
      },
    })

    const mapDepartmentOption = (dept: Department) => ({
      value: dept.id,
      label: dept.name,
      description: `${dept.headcount} people`,
    })

    const formSchema = z.object({
      name: f0FormField.text({
        label: "Employee Name",
        placeholder: "Enter name",
      }),
      // Select field with customFieldName — source/mapOptions provided by renderCustomField
      department: f0FormField(
        z.number({ required_error: "Pick a department" }),
        {
          label: "Department",
          placeholder: "Select a department...",
          showSearchBox: true,
          customFieldName: "department-selector",
        }
      ),
      // Multi-select field with customFieldName
      secondaryDepartments: f0FormField(z.array(z.number()).optional(), {
        label: "Secondary Departments",
        placeholder: "Select additional departments...",
        showSearchBox: true,
        multiple: true,
        customFieldName: "department-selector",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "select-custom-field-name",
      schema: formSchema,
      defaultValues: {
        name: "",
        department: undefined as unknown as number,
        secondaryDepartments: [],
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    const renderCustomField = useCallback(
      (props: RenderCustomFieldProps): RenderCustomFieldSelectConfig => {
        // All fields with customFieldName "department-selector" share the same source
        if (props.customFieldName === "department-selector") {
          return {
            _type: "select-config",
            source: departmentsSource,
            mapOptions: mapDepartmentOption,
          }
        }
        // Fallback — should not happen in this example
        return { _type: "select-config" }
      },
      []
    )

    return (
      <div className="max-w-lg">
        <F0Form
          formDefinition={formDefinition}
          renderCustomField={renderCustomField}
        />
      </div>
    )
  },
}

/**
 * Form with server-side validation errors.
 */
export const ServerValidation: Story = {
  render() {
    const formSchema = z.object({
      username: f0FormField.text({
        label: "Username",
        helpText: "Try 'admin' to see server validation error",
        minLength: 3,
      }),
      email: f0FormField.email({
        label: "Email",
        helpText: "Try 'taken@example.com' to see server validation error",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "server-validation",
      schema: formSchema,
      defaultValues: { username: "", email: "" },
      onSubmit: async ({ data }) => {
        await sleep(1000)

        const errors: Record<string, string> = {}

        if (data.username === "admin") {
          errors.username = "This username is reserved"
        }

        if (data.email === "taken@example.com") {
          errors.email = "This email is already registered"
        }

        if (Object.keys(errors).length > 0) {
          return {
            success: false,
            rootMessage: "Please fix the errors below",
            errors,
          }
        }

        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Complete form matching the visual design example.
 * Demonstrates sections, rows, and switch grouping.
 * Position is derived from declaration order within each section.
 */
export const VisualDesignExample: Story = {
  render() {
    const formSchema = z.object({
      // Basic Information section
      title: f0FormField.text({
        label: "Title",
        section: "basic-info",
        placeholder: "Workplace climate survey",
      }),
      description: f0FormField.textarea({
        label: "Description (Optional)",
        section: "basic-info",
        optional: true,
        rows: 3,
        placeholder:
          "This short workplace climate survey contains just 12 simple questions...",
      }),
      // Participants section
      participants: f0FormField.select({
        label: "Select participants",
        section: "participants",
        options: [
          { value: "all", label: "All employees" },
          { value: "department", label: "By department" },
          { value: "team", label: "By team" },
        ],
        placeholder: "Select participants",
      }),
      // Schedule section with row grouping
      publishOn: f0FormField.date({
        label: "Publish on",
        section: "schedule",
        row: "dates-row",
        optional: true,
      }),
      endsAt: f0FormField.date({
        label: "Ends at",
        section: "schedule",
        row: "dates-row",
        optional: true,
      }),
      recurrence: f0FormField.select({
        label: "Recurrence",
        section: "schedule",
        options: [
          { value: "none", label: "Does not repeat" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" },
          { value: "quarterly", label: "Quarterly" },
        ],
        placeholder: "Does not repeat",
      }),
      // Visibility & Privacy section with switches
      managerVisibility: f0FormField.boolean({
        label: "Add visibility permissions to managers and team leads",
        section: "visibility",
        optional: true,
        helpText:
          "Grant access to managers and team leads. Even if they are not survey editors, they will be able to view the results of their own teams once responses are available",
      }),
      anonymousAnswers: f0FormField.boolean({
        label: "Anonymous answers",
        section: "visibility",
        optional: true,
      }),
      // Editors section
      editors: f0FormField.select({
        label: "Select editors",
        section: "editors",
        options: [
          { value: "none", label: "None" },
          { value: "hr", label: "HR Team" },
          { value: "managers", label: "Managers" },
        ],
        placeholder: "None",
      }),
    })

    const sections: Record<string, F0SectionConfig> = {
      "basic-info": { title: "Basic Information" },
      participants: { title: "Participants" },
      schedule: { title: "Schedule" },
      visibility: { title: "Visibility & Privacy" },
      editors: { title: "Editors" },
    }

    const formDefinition = useF0FormDefinition({
      name: "visual-design-example",
      schema: formSchema,
      sections,
      defaultValues: {
        title: "Workplace climate survey",
        description:
          "This short workplace climate survey contains just 12 simple questions. It is designed to help measure employees' perceptions, experiences, and overall satisfaction within the workplace.",
        participants: undefined,
        publishOn: undefined,
        endsAt: undefined,
        recurrence: "none",
        managerVisibility: false,
        anonymousAnswers: false,
        editors: "none",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Create Survey" },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
      </div>
    )
  },
}

/**
 * Form with action bar submit type.
 * The action bar appears at the bottom of the screen when the form has changes.
 */
export const WithActionBar: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0FormField.text({
        label: "First Name",
        placeholder: "Enter first name",
      }),
      lastName: f0FormField.text({
        label: "Last Name",
        placeholder: "Enter last name",
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "you@example.com",
      }),
      notifications: f0FormField.boolean({
        label: "Enable notifications",
        helpText: "Receive email notifications about updates",
        optional: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "action-bar-example",
      schema: formSchema,
      submitConfig: {
        type: "action-bar",
        label: "Save Changes",
      },
      defaultValues: {
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        notifications: true,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Settings saved successfully" }
      },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Modify any field to see the action bar appear
        </p>
      </div>
    )
  },
}

/**
 * Form with action bar and discard button.
 * When discardable is true, a Discard button appears in the action bar.
 * Labels default to i18n values but can be customized.
 */
export const WithActionBarAndDiscard: Story = {
  render() {
    const formSchema = z.object({
      companyName: f0FormField.text({
        label: "Company Name",
        placeholder: "Enter company name",
      }),
      industry: f0FormField.select({
        label: "Industry",
        options: [
          { value: "tech", label: "Technology" },
          { value: "finance", label: "Finance" },
          { value: "healthcare", label: "Healthcare" },
          { value: "retail", label: "Retail" },
        ],
        placeholder: "Select industry",
      }),
      employeeCount: f0FormField.number({
        label: "Number of Employees",
        min: 1,
        max: 100000,
      }),
      publicCompany: f0FormField.checkbox({
        label: "Publicly traded company",
        optional: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "action-bar-discard-example",
      schema: formSchema,
      submitConfig: {
        type: "action-bar",
        label: "Save",
        discardable: true,
        discardConfig: { label: "Discard Changes" },
      },
      defaultValues: {
        companyName: "Acme Corp",
        industry: "tech",
        employeeCount: 500,
        publicCompany: false,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Company details updated" }
      },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Modify any field to see the action bar with Save and Discard buttons
        </p>
      </div>
    )
  },
}

/**
 * Form with `type: "autosubmit"` — the form is auto-submitted after the user
 * stops editing for the configured `delay` (default 800ms).
 *
 * The internal action bar surfaces the Saving → Saved feedback so the user
 * knows their changes were persisted. No explicit submit button is rendered.
 */
export const Autosubmit: Story = {
  render() {
    const formSchema = z.object({
      title: f0FormField.text({
        label: "Title",
        placeholder: "Enter a title",
        minLength: 2,
      }),
      description: f0FormField.textarea({
        label: "Description",
        placeholder: "Tell us more",
        optional: true,
        rows: 3,
      }),
    })

    const formDefinition = useF0FormDefinition({
      errorTriggerMode: "on-submit",
      name: "autosubmit-example",
      schema: formSchema,
      submitConfig: {
        type: "autosubmit",
      },
      defaultValues: {
        title: "My note",
        description: "",
      },
      onSubmit: async ({ data }) => {
        await sleep(600)
        console.info(`Autosaved: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Saved" }
      },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Edit any field — the form auto-submits 800ms after you stop typing.
          Watch the action bar show Saving → Saved.
        </p>
      </div>
    )
  },
}

/**
 * Autosubmit with a custom `delay` and `hideActionBar: true` for a fully
 * silent autosave. Use this when the parent component provides its own
 * persistence feedback (e.g. a toast or status indicator).
 */
export const AutosubmitCustomDelay: Story = {
  render() {
    const formSchema = z.object({
      query: f0FormField.text({
        label: "Search query",
        placeholder: "Type to search",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "autosubmit-custom-delay-example",
      schema: formSchema,
      submitConfig: {
        type: "autosubmit",
        delay: 1500,
        hideActionBar: true,
      },
      defaultValues: { query: "" },
      onSubmit: async ({ data }) => {
        await sleep(300)
        console.info(`Autosaved (silent): ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
        <p className="mt-4 text-sm text-f1-foreground-secondary">
          Silent autosave after 1500ms with no action bar feedback. Check the
          console to see the submitted values.
        </p>
      </div>
    )
  },
}

/**
 * Demonstrates the different error trigger modes:
 * - **on-blur** (default): Errors appear when the user leaves a field
 * - **on-change**: Errors appear as the user types (real-time validation)
 * - **on-submit**: Errors only appear after attempting to submit
 */
export const ErrorTriggerModes: Story = {
  render() {
    const formSchema = z.object({
      name: f0FormField.text({
        label: "Name",
        placeholder: "Enter your name",
        minLength: 2,
      }),
      email: f0FormField.email({
        label: "Email",
      }),
    })

    const defaultValues = { name: "", email: "" }

    const onSubmit = async () => {
      await sleep(500)
      return { success: true as const }
    }

    const blurDefinition = useF0FormDefinition({
      name: "error-mode-blur",
      schema: formSchema,
      defaultValues,
      errorTriggerMode: "on-blur",
      onSubmit,
    })

    const changeDefinition = useF0FormDefinition({
      name: "error-mode-change",
      schema: formSchema,
      defaultValues,
      errorTriggerMode: "on-change",
      onSubmit,
    })

    const submitDefinition = useF0FormDefinition({
      name: "error-mode-submit",
      schema: formSchema,
      defaultValues,
      errorTriggerMode: "on-submit",
      onSubmit,
    })

    return (
      <div className="grid max-w-4xl grid-cols-3 gap-8">
        <div>
          <h3 className="mb-4 text-lg font-semibold">On Blur (default)</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors appear when you leave a field
          </p>
          <F0Form formDefinition={blurDefinition} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">On Change</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors appear as you type
          </p>
          <F0Form formDefinition={changeDefinition} />
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold">On Submit</h3>
          <p className="mb-4 text-sm text-f1-foreground-secondary">
            Errors only appear after clicking submit
          </p>
          <F0Form formDefinition={submitDefinition} />
        </div>
      </div>
    )
  },
}

// Mock data for data source example
type Country = {
  id: number
  name: string
  code: string
  continent: string
}

const countriesData: Country[] = [
  { id: "1", name: "United States", code: "US", continent: "North America" },
  { id: "2", name: "Canada", code: "CA", continent: "North America" },
  { id: "3", name: "Mexico", code: "MX", continent: "North America" },
  { id: "4", name: "United Kingdom", code: "GB", continent: "Europe" },
  { id: "5", name: "Germany", code: "DE", continent: "Europe" },
  { id: "6", name: "France", code: "FR", continent: "Europe" },
  { id: "7", name: "Spain", code: "ES", continent: "Europe" },
  { id: "8", name: "Italy", code: "IT", continent: "Europe" },
  { id: "9", name: "Japan", code: "JP", continent: "Asia" },
  { id: "10", name: "China", code: "CN", continent: "Asia" },
  { id: "11", name: "Australia", code: "AU", continent: "Oceania" },
  { id: "12", name: "Brazil", code: "BR", continent: "South America" },
  { id: "13", name: "Argentina", code: "AR", continent: "South America" },
  { id: "14", name: "India", code: "IN", continent: "Asia" },
  { id: "15", name: "South Korea", code: "KR", continent: "Asia" },
  { id: "16", name: "Netherlands", code: "NL", continent: "Europe" },
  { id: "17", name: "Belgium", code: "BE", continent: "Europe" },
  { id: "18", name: "Sweden", code: "SE", continent: "Europe" },
  { id: "19", name: "Norway", code: "NO", continent: "Europe" },
  { id: "20", name: "Denmark", code: "DK", continent: "Europe" },
  { id: "21", name: "Finland", code: "FI", continent: "Europe" },
  { id: "22", name: "Poland", code: "PL", continent: "Europe" },
  { id: "23", name: "Portugal", code: "PT", continent: "Europe" },
  { id: "24", name: "Switzerland", code: "CH", continent: "Europe" },
  { id: "25", name: "Austria", code: "AT", continent: "Europe" },
  { id: "26", name: "Ireland", code: "IE", continent: "Europe" },
  { id: "27", name: "New Zealand", code: "NZ", continent: "Oceania" },
  { id: "28", name: "Singapore", code: "SG", continent: "Asia" },
  { id: "29", name: "Thailand", code: "TH", continent: "Asia" },
  { id: "30", name: "Vietnam", code: "VN", continent: "Asia" },
].map((country, index) => ({ ...country, id: index + 1, value: index + 1 }))

/** Non-paginated data source - loads all results at once */
const countriesSource = createDataSourceDefinition<Country>({
  dataAdapter: {
    fetchData: async ({ search }) => {
      // Simulate network latency
      await sleep(200)

      let results = countriesData
      if (search) {
        const searchLower = search.toLowerCase()
        results = results.filter(
          (country) =>
            country.name.toLowerCase().includes(searchLower) ||
            country.code.toLowerCase().includes(searchLower)
        )
      }

      return { records: results }
    },
  },
})

/** Paginated data source - loads results in chunks with infinite scroll */
const countriesPaginatedSource = createDataSourceDefinition<Country>({
  dataAdapter: {
    paginationType: "infinite-scroll",
    fetchData: async ({ search, pagination }) => {
      // Simulate network latency
      await sleep(300)

      const pageSize = pagination.perPage ?? 10
      const cursor = "cursor" in pagination ? pagination.cursor : null
      const offset = cursor ? Number(cursor) : 0

      let results = countriesData
      if (search) {
        const searchLower = search.toLowerCase()
        results = results.filter(
          (country) =>
            country.name.toLowerCase().includes(searchLower) ||
            country.code.toLowerCase().includes(searchLower)
        )
      }

      const paginatedResults = results.slice(offset, offset + pageSize)
      const nextOffset = offset + pageSize

      return {
        type: "infinite-scroll" as const,
        cursor: String(nextOffset),
        perPage: pageSize,
        hasMore: nextOffset < results.length,
        records: paginatedResults,
        total: results.length,
      }
    },
  },
})

const selectDefaultValues = {
  country: 1,
  countryPaginated: 1,
  countries: [],
}

const mapCountryOptions = (country: Country) => ({
  value: country.id,
  label: country.name,
  description: country.continent,
})

/**
 * Select fields can use a data source for dynamic options.
 * This is useful when options need to be fetched from an API
 * or when dealing with large datasets that benefit from search filtering.
 *
 * - **Non-paginated**: Loads all results at once
 * - **Paginated**: Uses infinite scroll, loading 10 items at a time
 */
export const SelectWithDataSource: Story = {
  render() {
    const formSchema = z.object({
      // Non-paginated data source
      country: f0FormField(z.number(), {
        label: "Country (Non-paginated)",
        placeholder: "Search and select a country...",
        showSearchBox: true,
        source: countriesSource,
        mapOptions: mapCountryOptions,
      }),
      // Paginated data source with infinite scroll
      countryPaginated: f0FormField(z.number(), {
        label: "Country (Paginated - scroll for more)",
        placeholder: "Search and select a country...",
        showSearchBox: true,
        source: countriesPaginatedSource,
        mapOptions: mapCountryOptions,
      }),
      // Multi-select with paginated data source
      countries: f0FormField(z.array(z.number()).min(1), {
        label: "Favorite Countries (Multi-select, paginated)",
        placeholder: "Select multiple countries...",
        showSearchBox: true,
        multiple: true,
        source: countriesPaginatedSource,
        mapOptions: mapCountryOptions,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "select-datasource-example",
      schema: formSchema,
      defaultValues: selectDefaultValues,
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return (
      <div className="max-w-lg">
        <F0Form formDefinition={formDefinition} />
      </div>
    )
  },
}

/**
 * Form inside a Dialog using `useF0Form` hook for external control.
 *
 * The `useF0Form` hook provides:
 * - `formRef`: Pass to F0Form to enable external control
 * - `submit()`: Programmatically submit the form (validates first)
 * - `reset()`: Reset the form to default values
 * - `isDirty()`: Check if the form has unsaved changes
 * - `isSubmitting`: Whether the form is currently submitting
 * - `hasErrors`: Whether the form has validation errors
 *
 * This is useful when the submit button needs to be outside the form,
 * such as in a dialog's footer with F0Dialog.
 */
export const FormInDialog: Story = {
  render() {
    const [open, setOpen] = useState(false)
    const { formRef, submit, isSubmitting, hasErrors } = useF0Form()

    const formSchema = z.object({
      name: f0FormField.text({
        label: "Name",
        placeholder: "Enter name",
        minLength: 2,
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "Enter email address",
      }),
      role: f0FormField.select({
        label: "Role",
        options: [
          { value: "admin", label: "Administrator" },
          { value: "editor", label: "Editor" },
          { value: "viewer", label: "Viewer" },
        ],
        placeholder: "Select a role",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "dialog-form",
      schema: formSchema,
      defaultValues: {
        name: "",
        email: "",
        role: undefined,
      },
      submitConfig: { type: "default", hideSubmitButton: true },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        setOpen(false)
        return { success: true }
      },
    })

    return (
      <>
        <F0Button
          label="Add Team Member"
          icon={Plus}
          onClick={() => setOpen(true)}
        />
        <F0Dialog
          isOpen={open}
          onClose={() => setOpen(false)}
          title="Add Team Member"
          description="Add a new member to your team. They will receive an invitation email."
          primaryAction={{
            label: "Add Member",
            icon: Plus,
            onClick: submit,
            loading: isSubmitting,
            disabled: hasErrors,
          }}
          secondaryAction={{
            label: "Cancel",
            onClick: () => setOpen(false),
          }}
          disableContentPadding
        >
          <F0Form formDefinition={formDefinition} formRef={formRef} />
        </F0Dialog>
      </>
    )
  },
}

/**
 * Form with dynamic date constraints.
 *
 * The end date picker dynamically updates its minimum selectable date
 * based on the start date value. This prevents users from selecting
 * an end date before the start date directly in the UI.
 *
 * Uses the `minDate` config option with a function that receives form values.
 */
export const DynamicDateConstraints: Story = {
  render() {
    const formSchema = z
      .object({
        projectName: f0FormField.text({
          label: "Project Name",
          placeholder: "Enter project name",
        }),
        startDate: f0FormField(
          z.date().min(new Date(), "Start date must be in the future"),
          {
            label: "Start Date",
            placeholder: "Select start date",
            helpText: "When does the project begin?",
          }
        ),
        endDate: f0FormField.date({
          label: "End Date",
          placeholder: "Select end date",
          helpText:
            "Dates before the start date are disabled in the date picker",
          // Dynamic minDate: end date must be >= start date
          minDate: ({ values }) => new Date(`${values.startDate}`),
        }),
        deadline: f0FormField.date({
          label: "Final Deadline (Optional)",
          placeholder: "Select deadline",
          helpText: "Must be after the end date",
          optional: true,
          // Dynamic minDate based on end date
          minDate: ({ values }) => new Date(`${values.endDate}`),
        }),
      })
      .superRefine((data, ctx) => {
        // Validate end date is on or after start date
        if (data.startDate && data.endDate && data.endDate < data.startDate) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "End date must be on or after start date",
            path: ["endDate"],
          })
        }
        // Validate deadline is on or after end date
        if (data.endDate && data.deadline && data.deadline < data.endDate) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Deadline must be on or after end date",
            path: ["deadline"],
          })
        }
      })

    const formDefinition = useF0FormDefinition({
      name: "dynamic-date-constraints",
      schema: formSchema,
      defaultValues: {
        projectName: "",
        startDate: undefined,
        endDate: undefined,
        deadline: undefined,
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with per-section schema: each section has its own independent schema,
 * validation, and submit button. Submitting one section does not affect others.
 *
 * Uses `useF0FormDefinition` with a record of schemas. The `onSubmit`
 * callback receives `{ sectionId, data, fullData }`.
 */
export const PerSectionSubmit: Story = {
  render() {
    const schema = {
      personal: z.object({
        firstName: f0FormField.text({
          label: "First Name",
          placeholder: "Enter first name",
        }),
        lastName: f0FormField.text({
          label: "Last Name",
          placeholder: "Enter last name",
        }),
        bio: f0FormField.textarea({
          label: "Bio",
          optional: true,
          rows: 3,
        }),
      }),
      contact: z.object({
        email: f0FormField.email({
          label: "Email",
          placeholder: "you@example.com",
        }),
        phone: f0FormField.text({
          label: "Phone",
          placeholder: "+1 (555) 000-0000",
          optional: true,
        }),
      }),
      preferences: z.object({
        theme: f0FormField.select({
          label: "Theme",
          options: [
            { value: "light", label: "Light" },
            { value: "dark", label: "Dark" },
            { value: "system", label: "System" },
          ],
        }),
        notifications: f0FormField.boolean({
          label: "Enable notifications",
          optional: true,
        }),
      }),
    }

    const formDefinition = useF0FormDefinition({
      name: "per-section",
      schema,
      sections: {
        personal: {
          title: "Personal Information",
          description: "Your basic profile details",
        },
        contact: {
          title: "Contact Details",
          description: "How we can reach you",
        },
        preferences: {
          title: "Preferences",
          description: "Customize your experience",
          submitConfig: { label: "Save Preferences" },
        },
      },
      defaultValues: {
        personal: { firstName: "", lastName: "", bio: "" },
        contact: { email: "", phone: "" },
        preferences: { theme: "system", notifications: true },
      },
      onSubmit: async ({ sectionId, data }) => {
        await sleep(1000)
        alert(
          `Section "${sectionId}" submitted: ${JSON.stringify(data, null, 2)}`
        )
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Per-section schema with sections sidebar navigation.
 * Each section is independently submittable while the sidebar provides quick navigation.
 */
export const PerSectionWithSidebar: Story = {
  render() {
    const schema = {
      general: z.object({
        title: f0FormField.text({
          label: "Survey Title",
          placeholder: "Enter survey title",
        }),
        description: f0FormField.textarea({
          label: "Description",
          optional: true,
          rows: 3,
        }),
      }),
      settings: z.object({
        anonymousAnswers: f0FormField.boolean({
          label: "Anonymous answers",
          helpText: "Respondents' identities will not be recorded",
          optional: true,
        }),
        managerVisibility: f0FormField.boolean({
          label: "Manager visibility",
          helpText: "Allow managers to see individual responses",
          optional: true,
        }),
      }),
      schedule: z.object({
        publishOn: f0FormField.date({
          label: "Publish date",
          optional: true,
        }),
        endsAt: f0FormField.date({
          label: "End date",
          optional: true,
        }),
      }),
    }

    const formDefinition = useF0FormDefinition({
      name: "per-section-sidebar",
      schema,
      sections: {
        general: {
          title: "General",
          description: "Basic survey information",
        },
        settings: {
          title: "Settings",
          description: "Privacy and visibility",
        },
        schedule: { title: "Schedule", description: "When the survey runs" },
      },
      defaultValues: {
        general: { title: "", description: "" },
        settings: { anonymousAnswers: false, managerVisibility: false },
        schedule: { publishOn: undefined, endsAt: undefined },
      },
      onSubmit: async ({ sectionId, data }) => {
        await sleep(1000)
        alert(`Section "${sectionId}" saved: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    return (
      <F0Form
        formDefinition={formDefinition}
        styling={{ showSectionsSidepanel: true }}
      />
    )
  },
}

/**
 * Per-section schema with `showSubmitWhenDirty` enabled.
 * The submit button for each section is hidden until the user modifies a field,
 * keeping the UI clean and only surfacing the save action when there are actual changes.
 *
 * This can be set globally via `submitConfig` (applies to all sections) or
 * overridden per section via `sections[id].submitConfig`.
 */
export const PerSectionShowSubmitWhenDirty: Story = {
  render() {
    const schema = {
      profile: z.object({
        displayName: f0FormField.text({
          label: "Display Name",
          placeholder: "Enter your display name",
        }),
        bio: f0FormField.textarea({
          label: "Bio",
          optional: true,
          rows: 3,
          placeholder: "Tell us about yourself",
        }),
      }),
      notifications: z.object({
        emailNotifications: f0FormField.boolean({
          label: "Email notifications",
          helpText: "Receive updates via email",
          optional: true,
        }),
        pushNotifications: f0FormField.boolean({
          label: "Push notifications",
          helpText: "Receive push notifications on your device",
          optional: true,
        }),
      }),
      security: z.object({
        currentPassword: f0FormField.text({
          label: "Current Password",
          placeholder: "Enter current password",
          inputType: "password",
          minLength: 8,
        }),
        newPassword: f0FormField.text({
          label: "New Password",
          placeholder: "Enter new password",
          inputType: "password",
          minLength: 8,
        }),
      }),
    }

    const formDefinition = useF0FormDefinition({
      name: "per-section-dirty",
      schema,
      sections: {
        profile: {
          title: "Profile",
          description: "Your public profile information",
          submitConfig: { showSubmitWhenDirty: true },
        },
        notifications: {
          title: "Notifications",
          description: "Choose how you want to be notified",
          submitConfig: { showSubmitWhenDirty: true },
        },
        security: {
          title: "Security",
          description: "Update your password",
          submitConfig: { label: "Change Password" },
        },
      },
      defaultValues: {
        profile: { displayName: "Jane Doe", bio: "" },
        notifications: {
          emailNotifications: true,
          pushNotifications: false,
        },
        security: { currentPassword: "", newPassword: "" },
      },
      onSubmit: async ({ sectionId, data }) => {
        await sleep(1000)
        alert(`Section "${sectionId}" saved: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form with async `defaultValues` fetched from an external source.
 * While loading, the form displays field-shaped skeleton placeholders
 * that match the real form layout. Once resolved, the form appears
 * pre-filled with the fetched values.
 *
 * Pass an async function to `defaultValues` that receives an `AbortSignal`
 * for cancellation support (e.g. with `fetch()`).
 */
export const AsyncDefaultValues: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0FormField.text({
        label: "First Name",
        placeholder: "Enter first name",
      }),
      lastName: f0FormField.text({
        label: "Last Name",
        placeholder: "Enter last name",
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "you@example.com",
      }),
      bio: f0FormField.textarea({
        label: "Biography",
        optional: true,
        rows: 3,
      }),
      notifications: f0FormField.boolean({
        label: "Enable notifications",
        optional: true,
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "async-defaults",
      schema: formSchema,
      defaultValues: async (_signal: AbortSignal) => {
        // Simulate fetching user profile from an API
        await sleep(2000)
        return {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          bio: "Software engineer passionate about design systems.",
          notifications: true,
        }
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Profile updated" }
      },
      submitConfig: { label: "Save Profile" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Per-section form with async `defaultValues`.
 * Each section independently shows skeleton placeholders while
 * the shared async function resolves. All sections populate
 * once the promise completes.
 */
export const AsyncDefaultValuesPerSection: Story = {
  render() {
    const schema = {
      personal: z.object({
        firstName: f0FormField.text({
          label: "First Name",
          placeholder: "Enter first name",
        }),
        lastName: f0FormField.text({
          label: "Last Name",
          placeholder: "Enter last name",
        }),
      }),
      contact: z.object({
        email: f0FormField.email({
          label: "Email",
          placeholder: "you@example.com",
        }),
        phone: f0FormField.text({
          label: "Phone",
          placeholder: "+1 (555) 000-0000",
          optional: true,
        }),
      }),
    }

    const formDefinition = useF0FormDefinition({
      name: "async-per-section",
      schema,
      sections: {
        personal: {
          title: "Personal Information",
          description: "Your basic profile details",
        },
        contact: {
          title: "Contact Details",
          description: "How we can reach you",
        },
      },
      defaultValues: async (_signal: AbortSignal) => {
        // Simulate API call
        await sleep(2000)
        return {
          personal: { firstName: "Jane", lastName: "Smith" },
          contact: { email: "jane@example.com", phone: "+1 555 123 4567" },
        }
      },
      onSubmit: async ({ sectionId, data }) => {
        await sleep(1000)
        console.info(
          `Section "${sectionId}" submitted: ${JSON.stringify(data, null, 2)}`
        )
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Form definition with `defaultValuesParamsSchema`.
 *
 * The schema tells the AI what params it can supply when calling `presentForm`.
 * When `defaultValuesParamsSchema` is provided, `defaultValues` can be a
 * function that receives typed params — e.g. `async ({ employeeId }) => { ... }`.
 *
 * For rendered forms, `defaultValues` is resolved at mount time with empty
 * params (`{}`). When the AI calls `presentForm` with params, the registry
 * calls the same function with the actual params.
 *
 * In this example the AI can supply an `employeeId` when presenting the form,
 * which causes the async `defaultValues` to fetch that employee's data.
 */
export const WithDefaultValuesParamsSchema: Story = {
  render() {
    const formSchema = z.object({
      firstName: f0FormField.text({
        label: "First Name",
        placeholder: "Enter first name",
      }),
      lastName: f0FormField.text({
        label: "Last Name",
        placeholder: "Enter last name",
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "you@example.com",
      }),
      role: f0FormField.text({
        label: "Role",
        placeholder: "e.g. Engineer",
        optional: true,
      }),
    })

    // Mock employee database
    const employees: Record<
      string,
      {
        firstName: string
        lastName: string
        email: string
        role: string
      }
    > = {
      "emp-1": {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@factorial.co",
        role: "Staff Engineer",
      },
      "emp-2": {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@factorial.co",
        role: "Product Manager",
      },
    }

    const formDefinition = useF0FormDefinition({
      name: "edit-employee",
      schema: formSchema,
      // TParams is inferred from defaultValuesParamsSchema
      defaultValuesParamsSchema: z.object({
        employeeId: z.string().describe("The ID of the employee to edit"),
      }),
      // defaultValues receives typed params — auto-inferred from defaultValuesParamsSchema
      defaultValues: async ({ employeeId }) => {
        await sleep(1500)
        // At mount time params is {} so employeeId is undefined — return sensible defaults
        const employee = employeeId ? employees[employeeId] : employees["emp-1"]
        return {
          firstName: employee?.firstName ?? "",
          lastName: employee?.lastName ?? "",
          email: employee?.email ?? "",
          role: employee?.role ?? "",
        }
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Employee updated: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Employee updated" }
      },
      submitConfig: { label: "Save Changes" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Per-section form definition with `defaultValuesParamsSchema`.
 *
 * Same as `WithDefaultValuesParamsSchema` but with a per-section schema:
 * `defaultValues` is a function receiving typed params and returning values
 * keyed by section ID. At mount time it's resolved with empty params (`{}`),
 * showing loading indicators until the values arrive.
 */
export const WithDefaultValuesParamsSchemaPerSection: Story = {
  render() {
    const schema = {
      personal: z.object({
        firstName: f0FormField.text({
          label: "First Name",
          placeholder: "Enter first name",
        }),
        lastName: f0FormField.text({
          label: "Last Name",
          placeholder: "Enter last name",
        }),
      }),
      contact: z.object({
        email: f0FormField.email({
          label: "Email",
          placeholder: "you@example.com",
        }),
      }),
    }

    const employees: Record<
      string,
      { firstName: string; lastName: string; email: string }
    > = {
      "emp-1": {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@factorial.co",
      },
      "emp-2": {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@factorial.co",
      },
    }

    const formDefinition = useF0FormDefinition({
      name: "edit-employee-per-section",
      schema,
      sections: {
        personal: { title: "Personal Information" },
        contact: { title: "Contact Details" },
      },
      defaultValuesParamsSchema: z.object({
        employeeId: z.string().describe("The ID of the employee to edit"),
      }),
      defaultValues: async ({ employeeId }) => {
        await sleep(1500)
        // At mount time params is {} so employeeId is undefined — fall back
        const employee = employeeId ? employees[employeeId] : employees["emp-1"]
        return {
          personal: {
            firstName: employee?.firstName ?? "",
            lastName: employee?.lastName ?? "",
          },
          contact: { email: employee?.email ?? "" },
        }
      },
      onSubmit: async ({ sectionId, data }) => {
        await sleep(1000)
        console.info(
          `Section "${sectionId}" submitted: ${JSON.stringify(data, null, 2)}`
        )
        return { success: true }
      },
      submitConfig: { label: "Save" },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

/**
 * Demonstrates using `formRef.current.actionBar.wiggle({ errorHighlight })`
 * to programmatically trigger the action bar wiggle animation from outside the form.
 *
 * The `actionBar` property on `F0FormRef` exposes:
 * - `wiggle({ errorHighlight?: boolean })`: Plays the error-highlight shake + glow animation when `errorHighlight`
 *   is `true` and the form has validation errors; otherwise, it falls back to the standard wiggle animation.
 *
 * This is useful when external logic (e.g. a save shortcut, AI validation, or a parent component)
 * needs to draw attention to the form's action bar without submitting.
 */
/**
 * DateTime field with `minDate` and `maxDate` constraints.
 *
 * Key behaviors:
 * - Users can type any time freely — the constraint is **not** enforced
 *   during typing. The validation error only appears on blur or submit,
 *   matching the form's `errorTrigger` mode.
 *
 * Important: `minDate`/`maxDate` config restricts the calendar picker UI. For
 * dynamic validation rules such as "must be after now", use `.refine()` with
 * a callback that calls `new Date()` so the constraint is re-evaluated at the
 * moment of each validation run (blur or submit). Fixed bounds, such as a
 * precomputed `endOfYear`, can still use `.min()`/`.max()`.
 */
export const DateTimeWithConstraints: Story = {
  render() {
    const endOfYear = useMemo(() => {
      const d = new Date()
      d.setMonth(11, 31)
      d.setHours(23, 59, 59, 0)
      return d
    }, [])

    const formSchema = useMemo(
      () =>
        z.object({
          startsAt: f0FormField(
            // Use .refine() so `new Date()` is evaluated fresh on every
            // validation run — both on blur and on submit. Using .min(now)
            // would capture "now" once at schema creation, allowing a value
            // that was valid when set to slip through if the user waits.
            z
              .date()
              .refine((val) => val >= new Date(), "Must be after current time"),
            {
              label: "Starts At",
              fieldType: "datetime",
              helpText:
                "Must be after now. Set a date and time, then submit or blur to validate.",
              // Dynamic function so the picker also greys out already-past dates
              minDate: () => new Date(),
            }
          ),
          expiresAt: f0FormField(
            z.date().max(endOfYear, "Must be within this year"),
            {
              label: "Expires At",
              fieldType: "datetime",
              helpText:
                "Must be before end of this year. Set a date and time, then submit or blur to validate.",
              maxDate: endOfYear,
            }
          ),
        }),
      [endOfYear]
    )

    const formDefinition = useF0FormDefinition({
      name: "datetime-constraints",
      schema: formSchema,
      defaultValues: {
        startsAt: undefined as unknown as Date,
        expiresAt: undefined as unknown as Date,
      },
      onSubmit: async ({ data }) => {
        await sleep(500)
        console.info(`Submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
    })

    return <F0Form formDefinition={formDefinition} />
  },
}

export const ActionBarWiggle: Story = {
  render() {
    const formRef = useRef<F0FormRef | null>(null)

    const formSchema = z.object({
      name: f0FormField.text({
        label: "Name",
        placeholder: "Enter your name",
        minLength: 2,
      }),
      email: f0FormField.email({
        label: "Email",
        placeholder: "you@example.com",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "wiggle-demo",
      schema: formSchema,
      defaultValues: { name: "Jane", email: "jane@example.com" },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true }
      },
      submitConfig: { label: "Save", type: "action-bar" },
    })

    return (
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <F0Button
            label="Wiggle action bar"
            onClick={() => {
              formRef.current?.actionBar.wiggle({ errorHighlight: true })
            }}
          />
        </div>
        <F0Form formDefinition={formDefinition} formRef={formRef} />
      </div>
    )
  },
}
