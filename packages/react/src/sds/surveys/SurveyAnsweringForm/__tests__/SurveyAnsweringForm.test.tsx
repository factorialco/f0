import { describe, expect, it, vi } from "vitest"

import { zeroRender as render, screen, userEvent } from "@/testing/test-utils"

import type { SurveyFormBuilderElement, SurveyFormSubmitResult } from "../types"

import { SurveyAnsweringForm } from "../SurveyAnsweringForm"

// --- Fixtures ---

const makeTextQuestion = (
  id: string,
  title: string,
  required = false
): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title, type: "text" as const, required },
})

const makeLinkQuestion = (
  id: string,
  title: string,
  required = false
): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title, type: "link" as const, required },
})

const makeSelectQuestion = (
  id: string,
  title: string,
  options: { value: string; label: string }[],
  required = false
): SurveyFormBuilderElement => ({
  type: "question",
  question: {
    id,
    title,
    type: "select" as const,
    options,
    required,
  },
})

const makeFileQuestion = (
  id: string,
  title: string,
  required = false
): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title, type: "file" as const, required },
})

const makeCheckboxQuestion = (
  id: string,
  title: string,
  required = false,
  label = "I agree"
): SurveyFormBuilderElement => ({
  type: "question",
  question: { id, title, type: "checkbox" as const, required, label },
})

const defaultProps = {
  title: "Test Survey",
  isOpen: true,
  onClose: vi.fn(),
  mode: "all-questions" as const,
  module: {
    id: "test-module",
    label: "Test Module",
    href: "/test-module",
  },
}

// --- Tests ---

describe("SurveyAnsweringForm", () => {
  describe("loading state", () => {
    it("renders all-questions loading skeleton without form controls", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeTextQuestion("q1", "Name", true)]}
          loading
          onSubmit={vi.fn()}
        />
      )

      expect(
        screen.getByTestId("survey-answering-form-loading-all-questions")
      ).toBeInTheDocument()
      expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
      expect(screen.queryByText("Name")).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /submit/i })
      ).not.toBeInTheDocument()
      expect(
        screen.queryByText("No questions to answer")
      ).not.toBeInTheDocument()
    })

    it("renders stepped loading skeleton variant", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          mode="stepped"
          elements={[makeTextQuestion("q1", "Name", true)]}
          loading
          onSubmit={vi.fn()}
        />
      )

      expect(
        screen.getByTestId("survey-answering-form-loading-stepped")
      ).toBeInTheDocument()
      expect(
        screen.queryByTestId("survey-answering-form-loading-all-questions")
      ).not.toBeInTheDocument()
      expect(screen.getAllByTestId("skeleton").length).toBeGreaterThan(0)
      expect(screen.queryByText("Name")).not.toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /submit|next/i })
      ).not.toBeInTheDocument()
    })
  })

  describe("empty state", () => {
    it("renders default empty state labels when there are no elements", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[]}
          onSubmit={vi.fn()}
        />
      )

      expect(screen.getByText("No questions to answer")).toBeInTheDocument()
      expect(
        screen.getByText("This survey has no questions yet.")
      ).toBeInTheDocument()
      expect(screen.getByRole("img", { name: "📝" })).toBeInTheDocument()
      expect(
        screen.queryByRole("button", { name: /submit/i })
      ).not.toBeInTheDocument()
    })

    it("renders custom empty state labels when provided", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[]}
          labels={{
            empty: {
              title: "Nothing to answer",
              description: "Survey has no questions configured yet.",
              emoji: "🧩",
            },
          }}
          onSubmit={vi.fn()}
        />
      )

      expect(screen.getByText("Nothing to answer")).toBeInTheDocument()
      expect(
        screen.getByText("Survey has no questions configured yet.")
      ).toBeInTheDocument()
      expect(screen.getByRole("img", { name: "🧩" })).toBeInTheDocument()
    })
  })

  describe("preview mode", () => {
    it("shows disabled submit and keeps fields editable when preview has no default values", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          preview
          elements={[makeTextQuestion("q1", "Name", true)]}
        />
      )

      const input = screen.getByRole("textbox")
      const submitButton = screen.getByRole("button", { name: /submit/i })

      expect(input).not.toBeDisabled()
      expect(submitButton).toBeDisabled()
    })

    it("renders fields as disabled and hides submit when preview has default values", () => {
      render(
        <SurveyAnsweringForm
          {...defaultProps}
          preview
          elements={[makeTextQuestion("q1", "Name", true)]}
          defaultValues={{
            q1: { type: "text", value: "John" },
          }}
        />
      )

      expect(screen.getByDisplayValue("John")).toBeDisabled()
      expect(
        screen.queryByRole("button", { name: /submit/i })
      ).not.toBeInTheDocument()
    })
  })

  describe("validation on submit", () => {
    it("does not call onSubmit when required fields are empty", async () => {
      const onSubmit = vi.fn()

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeTextQuestion("q1", "Name", true)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("calls onSubmit when all required fields are filled", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeTextQuestion("q1", "Name", true)]}
          defaultValues={{
            q1: { type: "text", value: "John" },
          }}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalled()
    })

    it("shows error on required field after submit attempt", async () => {
      const onSubmit = vi.fn()

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeTextQuestion("q1", "Name", true)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      // Error text should appear (from defaultTranslations)
      expect(screen.getByText(/required/i)).toBeInTheDocument()
    })

    it("validates URL fields on submit", async () => {
      const onSubmit = vi.fn()

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeLinkQuestion("q1", "Website", false)]}
          defaultValues={{
            q1: { type: "link", value: "not-a-valid-url" },
          }}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })
  })

  describe("select question deselect", () => {
    it("allows deselecting a selected option when question is not required", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      const options = [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
      ]

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeSelectQuestion("q1", "Pick one", options, false)]}
          defaultValues={{
            q1: { type: "select", value: "a" },
          }}
          onSubmit={onSubmit}
        />
      )

      // Option A should be pre-selected — click it again to deselect
      const optionA = screen.getByText("Option A")
      await userEvent.click(optionA)

      // Submit and check that value is null (deselected)
      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ q1: null })
      )
    })

    it("does not deselect a selected option when question is required", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      const options = [
        { value: "a", label: "Option A" },
        { value: "b", label: "Option B" },
      ]

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeSelectQuestion("q1", "Pick one", options, true)]}
          defaultValues={{
            q1: { type: "select", value: "a" },
          }}
          onSubmit={onSubmit}
        />
      )

      // Option A is selected — click it again, should stay selected
      const optionA = screen.getByText("Option A")
      await userEvent.click(optionA)

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({ q1: "a" })
      )
    })
  })

  describe("file question", () => {
    it("does not call onSubmit when required file question has no files", async () => {
      const onSubmit = vi.fn()

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeFileQuestion("q1", "Upload docs", true)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("calls onSubmit when optional file question has no files", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeFileQuestion("q1", "Upload docs", false)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalled()
    })

    it("submits pre-filled file values as string[]", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeFileQuestion("q1", "Upload docs", false)]}
          defaultValues={{
            q1: { type: "file", value: ["signed_doc1", "signed_doc2"] },
          }}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          q1: ["signed_doc1", "signed_doc2"],
        })
      )
    })
  })

  describe("checkbox question", () => {
    it("does not call onSubmit when required checkbox question is unchecked", async () => {
      const onSubmit = vi.fn()

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeCheckboxQuestion("q1", "Accept terms", true)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).not.toHaveBeenCalled()
    })

    it("calls onSubmit when optional checkbox question is unchecked", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeCheckboxQuestion("q1", "Accept terms", false)]}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalled()
    })

    it("submits pre-filled checkbox value as boolean", async () => {
      const onSubmit = vi.fn<
        (answers: Record<string, unknown>) => SurveyFormSubmitResult
      >(() => ({
        success: true,
      }))

      render(
        <SurveyAnsweringForm
          {...defaultProps}
          elements={[makeCheckboxQuestion("q1", "Accept terms", false)]}
          defaultValues={{
            q1: { type: "checkbox", value: true },
          }}
          onSubmit={onSubmit}
        />
      )

      const submitButton = screen.getByRole("button", { name: /submit/i })
      await userEvent.click(submitButton)

      expect(onSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          q1: true,
        })
      )
    })
  })
})
