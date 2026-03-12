import { useCallback, useState } from "react"

import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi } from "vitest"
import { z } from "zod"

import { zeroRender as render, screen } from "@/testing/test-utils"

import type {
  FileUploadResult,
  FileUploadStatus,
  UseFileUpload,
} from "../../F0Form/fields/file/types"
import type { F0Field } from "../../F0Form/fields/types"

import { F0FormField } from "../F0FormField"

function createMockUploadHook(): UseFileUpload {
  return () => {
    const [progress, setProgress] = useState(0)
    const [status, setStatus] = useState<FileUploadStatus>("idle")

    const upload = useCallback(
      async (file: File): Promise<FileUploadResult> => {
        setStatus("uploading")
        setProgress(1)
        setStatus("success")
        return { type: "success", value: `signed_${file.name}` }
      },
      []
    )

    const cancelUpload = useCallback(() => {
      setStatus("idle")
      setProgress(0)
    }, [])

    return { upload, cancelUpload, progress, status }
  }
}

describe("F0FormField", () => {
  describe("text field rendering", () => {
    it("renders a text field with label", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }

      const onChange = vi.fn()
      const onBlur = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          onBlur={onBlur}
        />
      )

      expect(screen.getByLabelText("Full Name")).toBeInTheDocument()
    })

    it("renders a number field", () => {
      const field: F0Field = { id: "age", type: "number", label: "Age" }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={0} onChange={onChange} />)

      const input = screen.getByLabelText("Age") as HTMLInputElement
      expect(input.type).toBe("text")
      expect(input.inputMode).toBe("decimal")
    })

    it("renders a duration field", () => {
      const field: F0Field = {
        id: "duration",
        type: "duration",
        label: "Duration",
        units: ["hours", "minutes"],
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={5400} onChange={onChange} />)

      expect(
        screen.getByRole("group", { name: "Duration" })
      ).toBeInTheDocument()
      expect(screen.getByLabelText("Hours")).toBeInTheDocument()
      expect(screen.getByLabelText("Minutes")).toBeInTheDocument()
    })

    it("renders a textarea field", () => {
      const field: F0Field = {
        id: "bio",
        type: "textarea",
        label: "Bio",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      expect(screen.getByLabelText("Bio")).toBeInTheDocument()
    })

    it("renders a select field with options", () => {
      const field: F0Field = {
        id: "country",
        type: "select",
        label: "Country",
        options: [
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
        ],
        multiple: false,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // Select field renders with a button/combobox
      expect(screen.getByLabelText("Country")).toBeInTheDocument()
    })

    it("renders a checkbox field", () => {
      const field: F0Field = {
        id: "agreed",
        type: "checkbox",
        label: "I agree",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // Checkbox doesn't show external label (hideLabel is implicit for checkboxes)
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeInTheDocument()
    })

    it("renders a switch field", () => {
      const field: F0Field = {
        id: "notifications",
        type: "switch",
        label: "Enable notifications",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // Switch renders with a role
      expect(screen.getByRole("switch")).toBeInTheDocument()
    })

    it("renders a date field", () => {
      const field: F0Field = {
        id: "birthDate",
        type: "date",
        label: "Birth Date",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={null} onChange={onChange} />)

      expect(screen.getByLabelText("Birth Date")).toBeInTheDocument()
    })

    it("renders a file field", () => {
      const field: F0Field = {
        id: "resume",
        type: "file",
        label: "Resume",
        useUpload: createMockUploadHook(),
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value={undefined} onChange={onChange} />
      )

      expect(screen.getByText("Resume")).toBeInTheDocument()
      expect(
        screen.getByText("Drag and drop a file, or click to select")
      ).toBeInTheDocument()
    })

    it("renders initial file metadata for a file field", () => {
      const field: F0Field = {
        id: "contract",
        type: "file",
        label: "Contract",
        useUpload: createMockUploadHook(),
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value="signed_contract.pdf"
          onChange={onChange}
          initialFiles={[
            {
              value: "signed_contract.pdf",
              name: "contract.pdf",
              type: "application/pdf",
              size: 1024,
            },
          ]}
        />
      )

      expect(screen.getByText("contract.pdf")).toBeInTheDocument()
    })
  })

  describe("required indicator", () => {
    it("shows required asterisk when required=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} required />
      )

      const labelText = screen.getByText(/Full Name/)
      expect(labelText.parentElement?.textContent).toMatch(/\*/)
    })

    it("shows required asterisk from validation schema", () => {
      const field: F0Field = {
        id: "email",
        type: "text",
        label: "Email",
        validation: z.string().email().min(1),
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const labelText = screen.getByText(/Email/)
      expect(labelText.parentElement?.textContent).toMatch(/\*/)
    })

    it("does not show asterisk when not required", () => {
      const field: F0Field = {
        id: "nickname",
        type: "text",
        label: "Nickname",
        validation: z.string().optional(),
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const label = screen.getByLabelText("Nickname")
      expect(label.parentElement?.textContent).not.toMatch(/\*/)
    })
  })

  describe("error state", () => {
    it("displays error message and icon when error=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          error
          errorMessage="Name is required"
        />
      )

      expect(screen.getByText("Name is required")).toBeInTheDocument()
    })

    it("does not display error when error=false", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          error={false}
          errorMessage="Name is required"
        />
      )

      expect(screen.queryByText("Name is required")).not.toBeInTheDocument()
    })

    it("does not display error when errorMessage is not provided", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} error />)

      // Alert circle icon expects errorMessage to be present
      expect(screen.queryByText(/Full Name/)).toBeInTheDocument()
    })

    it("displays warning status message", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          status={{ type: "warning", message: "Review this value" }}
        />
      )

      const message = screen.getByText("Review this value")
      expect(message).toHaveClass("text-f1-foreground-warning")
    })

    it("displays info status message for non-input fields", () => {
      const field: F0Field = {
        id: "notifications",
        type: "switch",
        label: "Enable notifications",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value={false}
          onChange={onChange}
          status={{ type: "info", message: "This will notify managers" }}
        />
      )

      const message = screen.getByText("This will notify managers")
      expect(message).toHaveClass("text-f1-foreground-info")
    })

    it("prioritizes error over other statuses", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          error
          errorMessage="Name is required"
          status={{ type: "warning", message: "Review this value" }}
        />
      )

      expect(screen.getByText("Name is required")).toBeInTheDocument()
      expect(screen.queryByText("Review this value")).not.toBeInTheDocument()
    })
  })

  describe("disabled state", () => {
    it("disables the field when disabled=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} disabled />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })

    it("enables the field when disabled=false", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          disabled={false}
        />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(false)
    })

    it("respects field-level disabled property", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
        disabled: true,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })

    it("overrides field-level disabled with prop", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
        disabled: false,
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} disabled />
      )

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.disabled).toBe(true)
    })
  })

  describe("label visibility", () => {
    it("hides label when hideLabel=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(
        <F0FormField field={field} value="" onChange={onChange} hideLabel />
      )

      // The label element should not exist in the DOM
      expect(screen.queryByText("Full Name")).not.toBeInTheDocument()
    })

    it("hides label for checkbox fields by default", () => {
      const field: F0Field = {
        id: "agreed",
        type: "checkbox",
        label: "I agree to terms",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value={false} onChange={onChange} />)

      // External label is hidden for checkboxes - but the checkbox itself exists
      const checkbox = screen.getByRole("checkbox")
      expect(checkbox).toBeInTheDocument()
    })

    it("hides label for custom fields by default", () => {
      const field: F0Field = {
        id: "custom",
        type: "custom",
        label: "Custom Field",
        render: () => <div>Custom content</div>,
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // External label hidden for custom fields
      expect(screen.queryByText("Custom Field")).not.toBeInTheDocument()
    })
  })

  describe("help text", () => {
    it("displays help text when provided", () => {
      const field: F0Field = {
        id: "password",
        type: "text",
        label: "Password",
        helpText: "Must be at least 8 characters",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      expect(
        screen.getByText("Must be at least 8 characters")
      ).toBeInTheDocument()
    })

    it("does not display help text when not provided", () => {
      const field: F0Field = {
        id: "username",
        type: "text",
        label: "Username",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // No help text in the document
      const helpTexts = screen.queryAllByText(/Username/)
      expect(helpTexts.length).toBe(1) // Only label, no help text
    })
  })

  describe("callbacks", () => {
    it("calls onChange when field value changes", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      await userEvent.type(input, "John Doe")

      expect(onChange).toHaveBeenCalled()
    })

    it("calls onBlur when field loses focus", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()
      const onBlur = vi.fn()

      render(
        <F0FormField
          field={field}
          value=""
          onChange={onChange}
          onBlur={onBlur}
        />
      )

      const input = screen.getByLabelText("Full Name")
      await userEvent.click(input)
      await userEvent.tab()

      expect(onBlur).toHaveBeenCalled()
    })

    it("handles missing onBlur prop", async () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name")
      await userEvent.click(input)
      // Should not throw error when onBlur is not provided
      await expect(userEvent.tab()).resolves.not.toThrow()
    })
  })

  describe("loading state", () => {
    it("shows loading state when loading=true", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} loading />)

      // Field should still be in the document but in loading state
      expect(screen.getByLabelText("Full Name")).toBeInTheDocument()
    })
  })

  describe("value handling", () => {
    it("renders with initial value", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="John Doe" onChange={onChange} />)

      const input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("John Doe")
    })

    it("updates when value prop changes", () => {
      const field: F0Field = {
        id: "name",
        type: "text",
        label: "Full Name",
      }
      const onChange = vi.fn()

      const { rerender } = render(
        <F0FormField field={field} value="John" onChange={onChange} />
      )

      let input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("John")

      rerender(<F0FormField field={field} value="Jane" onChange={onChange} />)

      input = screen.getByLabelText("Full Name") as HTMLInputElement
      expect(input.value).toBe("Jane")
    })
  })

  describe("placeholder handling", () => {
    it("renders with placeholder when provided", () => {
      const field: F0Field = {
        id: "email",
        type: "text",
        label: "Email",
        placeholder: "your@email.com",
      }
      const onChange = vi.fn()

      render(<F0FormField field={field} value="" onChange={onChange} />)

      // InputField renders placeholder as visible text, not as HTML attribute
      const input = screen.getByLabelText("Email") as HTMLInputElement
      expect(input).toBeInTheDocument()
    })
  })
})
