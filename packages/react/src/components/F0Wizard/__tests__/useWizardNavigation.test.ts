import { act } from "@testing-library/react"
import { describe, expect, it, vi } from "vitest"
import { zeroRenderHook } from "@/testing/test-utils"

import { useWizardNavigation } from "../hooks/useWizardNavigation"
import type { F0WizardStep } from "../types"

const makeSteps = (count: number): F0WizardStep[] =>
  Array.from({ length: count }, (_, i) => ({ title: `Step ${i + 1}` }))

describe("useWizardNavigation", () => {
  it("initialises at step 0 by default", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3) })
    )
    expect(result.current.currentStep).toBe(0)
    expect(result.current.loading).toBe(false)
  })

  it("initialises at defaultStepIndex", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3), defaultStepIndex: 2 })
    )
    expect(result.current.currentStep).toBe(2)
  })

  it("goNext advances to the next step", async () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3) })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(result.current.currentStep).toBe(1)
  })

  it("goPrevious goes back one step", async () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3), defaultStepIndex: 2 })
    )

    act(() => {
      result.current.goPrevious()
    })

    expect(result.current.currentStep).toBe(1)
  })

  it("goPrevious does nothing at step 0", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3) })
    )

    act(() => {
      result.current.goPrevious()
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goToStep jumps to a valid step when allowStepSkipping is true", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3), allowStepSkipping: true })
    )

    act(() => {
      result.current.goToStep(2)
    })

    expect(result.current.currentStep).toBe(2)
  })

  it("goToStep blocks jumping more than one step ahead when allowStepSkipping is false", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3), allowStepSkipping: false })
    )

    act(() => {
      result.current.goToStep(2)
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goToStep allows going to the next step when allowStepSkipping is false", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3), allowStepSkipping: false })
    )

    act(() => {
      result.current.goToStep(1)
    })

    expect(result.current.currentStep).toBe(1)
  })

  it("goToStep allows going backwards when allowStepSkipping is false", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(3),
        defaultStepIndex: 2,
        allowStepSkipping: false,
      })
    )

    act(() => {
      result.current.goToStep(0)
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goToStep ignores out-of-bounds indices", () => {
    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps: makeSteps(3) })
    )

    act(() => {
      result.current.goToStep(-1)
    })
    expect(result.current.currentStep).toBe(0)

    act(() => {
      result.current.goToStep(5)
    })
    expect(result.current.currentStep).toBe(0)
  })

  it("goToStep is blocked when a previous step returns isCompleted false", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", isCompleted: () => false },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() => useWizardNavigation({ steps }))

    act(() => {
      result.current.goToStep(2)
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goNext calls step.onNext before advancing", async () => {
    const onNext = vi.fn().mockResolvedValue(undefined)
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    const { result } = zeroRenderHook(() => useWizardNavigation({ steps }))

    await act(async () => {
      await result.current.goNext()
    })

    expect(onNext).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(1)
  })

  it("goNext calls onSubmit on the last step", async () => {
    const onSubmit = vi.fn().mockResolvedValue(undefined)

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(2),
        defaultStepIndex: 1,
        onSubmit,
      })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(1)
  })

  it("sets loading true during async onNext", async () => {
    let resolveOnNext: () => void
    const onNext = () =>
      new Promise<void>((resolve) => {
        resolveOnNext = resolve
      })

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    const { result } = zeroRenderHook(() => useWizardNavigation({ steps }))

    let goNextPromise: Promise<void>
    act(() => {
      goNextPromise = result.current.goNext()
    })

    expect(result.current.loading).toBe(true)

    await act(async () => {
      resolveOnNext!()
      await goNextPromise!
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.currentStep).toBe(1)
  })

  it("calls onStepChanged when step changes", async () => {
    const onStepChanged = vi.fn()

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(3),
        onStepChanged,
        allowStepSkipping: true,
      })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onStepChanged).toHaveBeenCalledWith(1)

    act(() => {
      result.current.goPrevious()
    })

    expect(onStepChanged).toHaveBeenCalledWith(0)

    act(() => {
      result.current.goToStep(2)
    })

    expect(onStepChanged).toHaveBeenCalledWith(2)
    expect(onStepChanged).toHaveBeenCalledTimes(3)
  })

  it("goToStep is blocked when current step has errors", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => true },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() => useWizardNavigation({ steps }))

    act(() => {
      result.current.goToStep(1)
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goToStep is allowed when current step has no errors and allowStepSkipping is true", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => false },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: true })
    )

    act(() => {
      result.current.goToStep(2)
    })

    expect(result.current.currentStep).toBe(2)
  })

  it("goToStep blocks jumping when an intermediate step has errors", () => {
    const steps: F0WizardStep[] = [
      { title: "Step 1", hasErrors: () => false },
      { title: "Step 2", hasErrors: () => true },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: true })
    )

    act(() => {
      result.current.goToStep(2)
    })

    expect(result.current.currentStep).toBe(0)
  })

  it("goNext stays on current step when onNext rejects", async () => {
    const onNext = vi.fn().mockRejectedValue(new Error("Validation failed"))
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    const { result } = zeroRenderHook(() => useWizardNavigation({ steps }))

    await act(async () => {
      await result.current.goNext()
    })

    expect(onNext).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(0)
    expect(result.current.loading).toBe(false)
  })

  it("goToStep with allowStepSkipping runs onNext for each intermediate step", async () => {
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const onNext1 = vi.fn().mockResolvedValue(undefined)
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2", onNext: onNext1 },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: true })
    )

    await act(async () => {
      await result.current.goToStep(2)
    })

    expect(onNext0).toHaveBeenCalledOnce()
    expect(onNext1).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(2)
  })

  it("goToStep with allowStepSkipping stops at failing intermediate step", async () => {
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const onNext1 = vi.fn().mockRejectedValue(new Error("Validation failed"))
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2", onNext: onNext1 },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: true })
    )

    await act(async () => {
      await result.current.goToStep(2)
    })

    expect(onNext0).toHaveBeenCalledOnce()
    expect(onNext1).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(0)
    expect(result.current.loading).toBe(false)
  })

  it("goToStep with allowStepSkipping sets loading during validation", async () => {
    let resolveOnNext: () => void
    const onNext = () =>
      new Promise<void>((resolve) => {
        resolveOnNext = resolve
      })

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: true })
    )

    let goToStepPromise: Promise<void>
    act(() => {
      goToStepPromise = result.current.goToStep(2)
    })

    expect(result.current.loading).toBe(true)

    await act(async () => {
      resolveOnNext!()
      await goToStepPromise!
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.currentStep).toBe(2)
  })

  it("goToStep forward always runs onNext for the current step even without allowStepSkipping", async () => {
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: false })
    )

    await act(async () => {
      await result.current.goToStep(1)
    })

    expect(onNext0).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(1)
  })

  it("goToStep forward sets loading during onNext even without allowStepSkipping", async () => {
    let resolveOnNext: () => void
    const onNext = () =>
      new Promise<void>((resolve) => {
        resolveOnNext = resolve
      })

    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext },
      { title: "Step 2" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: false })
    )

    let goToStepPromise: Promise<void>
    act(() => {
      goToStepPromise = result.current.goToStep(1)
    })

    expect(result.current.loading).toBe(true)

    await act(async () => {
      resolveOnNext!()
      await goToStepPromise!
    })

    expect(result.current.loading).toBe(false)
    expect(result.current.currentStep).toBe(1)
  })

  it("goToStep forward stays on current step when onNext rejects", async () => {
    const onNext0 = vi.fn().mockRejectedValue(new Error("Validation failed"))
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, allowStepSkipping: false })
    )

    await act(async () => {
      await result.current.goToStep(1)
    })

    expect(onNext0).toHaveBeenCalledOnce()
    expect(result.current.currentStep).toBe(0)
    expect(result.current.loading).toBe(false)
  })

  it("goToStep backwards does not run intermediate onNext even with allowStepSkipping", async () => {
    const onNext0 = vi.fn().mockResolvedValue(undefined)
    const steps: F0WizardStep[] = [
      { title: "Step 1", onNext: onNext0 },
      { title: "Step 2" },
      { title: "Step 3" },
    ]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps,
        defaultStepIndex: 2,
        allowStepSkipping: true,
      })
    )

    await act(async () => {
      await result.current.goToStep(0)
    })

    expect(onNext0).not.toHaveBeenCalled()
    expect(result.current.currentStep).toBe(0)
  })

  it("goNext does not call onSubmit when onNext rejects on last step", async () => {
    const onNext = vi.fn().mockRejectedValue(new Error("Validation failed"))
    const onSubmit = vi.fn()
    const steps: F0WizardStep[] = [{ title: "Step 1", onNext }]

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({ steps, onSubmit })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onNext).toHaveBeenCalledOnce()
    expect(onSubmit).not.toHaveBeenCalled()
    expect(result.current.loading).toBe(false)
  })

  // ---------------------------------------------------------------------------
  // autoCloseOnLastStepSubmit
  // ---------------------------------------------------------------------------

  it("calls onClose after last step when autoCloseOnLastStepSubmit is true", async () => {
    const onClose = vi.fn()
    const onSubmit = vi.fn()

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(1),
        onSubmit,
        autoCloseOnLastStepSubmit: true,
        onClose,
      })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(onClose).toHaveBeenCalledOnce()
  })

  it("does not call onClose when autoCloseOnLastStepSubmit is false", async () => {
    const onClose = vi.fn()
    const onSubmit = vi.fn()

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(1),
        onSubmit,
        autoCloseOnLastStepSubmit: false,
        onClose,
      })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(onClose).not.toHaveBeenCalled()
  })

  it("does not call onClose when onSubmit throws", async () => {
    const onClose = vi.fn()
    const onSubmit = vi.fn().mockRejectedValue(new Error("fail"))

    const { result } = zeroRenderHook(() =>
      useWizardNavigation({
        steps: makeSteps(1),
        onSubmit,
        autoCloseOnLastStepSubmit: true,
        onClose,
      })
    )

    await act(async () => {
      await result.current.goNext()
    })

    expect(onSubmit).toHaveBeenCalledOnce()
    expect(onClose).not.toHaveBeenCalled()
  })
})
