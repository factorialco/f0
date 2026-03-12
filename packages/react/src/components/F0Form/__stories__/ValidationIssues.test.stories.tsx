import type { Meta, StoryObj } from "@storybook/react-vite"
import { z } from "zod"

import { useF0FormDefinition } from "@/components/F0WizardForm"

import { f0FormField, F0Form } from "../index"

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const meta: Meta = {
  title: "Experimental/F0Form/ValidationIssues",
  component: F0Form,
  tags: ["autodocs", "experimental"],
  parameters: { a11y: { skipCi: true } },
}

export default meta
type Story = StoryObj<typeof meta>

/**
 * Test story to validate error display for:
 * 1. Required switch field (must be true)
 * 2. Required richtext field
 * 3. Required single-selection select field
 */
export const RequiredFieldsTest: Story = {
  render() {
    const formSchema = z.object({
      // Required switch - must be true
      agreedToTerms: f0FormField(z.literal(true), {
        label: "I agree to the terms and conditions",
        fieldType: "switch",
        helpText: "This must be enabled to continue",
      }),

      // Required switch in a group - must be true
      privacyConsent: f0FormField(z.literal(true), {
        label: "Privacy consent",
        fieldType: "switch",
        helpText: "Required privacy consent",
      }),
      marketingConsent: f0FormField(z.boolean(), {
        label: "Marketing consent",
        fieldType: "switch",
        helpText: "Optional marketing consent",
      }),

      // Required richtext - value must not be null/empty
      description: f0FormField(
        z
          .object({
            value: z.string().nullable(),
            mentionIds: z.array(z.number()).optional(),
          })
          .refine(
            (data) => data.value !== null && data.value.trim().length > 0,
            {
              message: "Description is required",
            }
          ),
        {
          label: "Description (Required)",
          fieldType: "richtext",
          placeholder: "Enter description...",
          height: "sm",
          plainHtmlMode: true,
        }
      ),

      // Required select - must select an option
      category: f0FormField(
        z
          .string({
            required_error: "Please select a category",
            invalid_type_error: "Please select a category",
          })
          .min(1, "Please select a category"),
        {
          label: "Category (Required)",
          options: [
            { value: "tech", label: "Technology" },
            { value: "design", label: "Design" },
            { value: "marketing", label: "Marketing" },
          ],
          placeholder: "Select a category",
        }
      ),

      // Required multi-select - must select at least one option
      tags: f0FormField(
        z.array(z.string()).min(1, "Please select at least one tag"),
        {
          label: "Tags (Required)",
          options: [
            { value: "frontend", label: "Frontend" },
            { value: "backend", label: "Backend" },
            { value: "mobile", label: "Mobile" },
            { value: "devops", label: "DevOps" },
          ],
          multiple: true,
          placeholder: "Select tags",
        }
      ),

      // Optional field for reference
      notes: f0FormField(z.string().optional(), {
        label: "Notes (Optional)",
        placeholder: "Additional notes...",
      }),
    })

    const formDefinition = useF0FormDefinition({
      name: "validation-issues-test",
      schema: formSchema,
      defaultValues: {
        agreedToTerms: false as unknown as true,
        privacyConsent: false as unknown as true,
        marketingConsent: false,
        description: { value: null, mentionIds: [] },
        category: "",
        tags: [],
        notes: "",
      },
      onSubmit: async ({ data }) => {
        await sleep(1000)
        console.info(`Form submitted: ${JSON.stringify(data, null, 2)}`)
        return { success: true, message: "Form validation passed!" }
      },
      submitConfig: { label: "Submit" },
    })

    return (
      <div className="max-w-2xl">
        <div className="mb-4 rounded-lg bg-yellow-50 p-4 text-sm text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-200">
          <strong>Test Instructions:</strong>
          <ol className="ml-4 mt-2 list-decimal space-y-1">
            <li>Try to submit the form without filling anything</li>
            <li>Verify that errors appear for all required fields</li>
            <li>Check that the switch fields show error messages</li>
            <li>Check that the richtext field shows error message</li>
            <li>Check that the single-select field shows error message</li>
            <li>Check that the multi-select field shows error message</li>
          </ol>
        </div>
        <F0Form formDefinition={formDefinition} />
      </div>
    )
  },
}
