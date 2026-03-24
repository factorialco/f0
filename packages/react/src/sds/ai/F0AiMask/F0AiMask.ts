import "./styles.css"

export type MaskOptions = {
  /**
   * The width of the Mask element.
   * @default 600
   */
  width?: number
  /**
   * The height of the Mask element.
   * @default 600
   */
  height?: number
  /**
   * Device pixel ratio multiplier — kept for API compatibility, unused by CSS renderer.
   */
  ratio?: number
  /**
   * Color mode — kept for API compatibility, unused by CSS renderer.
   * @default "light"
   */
  mode?: "dark" | "light"
  /**
   * The border radius applied to the mask element.
   * @default 20
   */
  borderRadius?: number
  /**
   * Custom class names appended to the wrapper element.
   */
  classNames?: string
  /**
   * Custom inline styles applied to the wrapper element.
   */
  styles?: Partial<CSSStyleDeclaration>
}

export class F0AiMask {
  readonly element: HTMLElement

  private div: HTMLDivElement
  private options: MaskOptions
  private observer?: ResizeObserver

  constructor(options: MaskOptions = {}) {
    this.options = {
      width: options.width ?? 600,
      height: options.height ?? 600,
      borderRadius: options.borderRadius ?? 20,
      ...options,
    }

    this.div = document.createElement("div")
    this.div.className = ["f0-ai-mask", this.options.classNames ?? ""]
      .join(" ")
      .trim()

    this.div.style.display = "block"
    this.div.style.width = `${this.options.width}px`
    this.div.style.height = `${this.options.height}px`
    this.div.style.borderRadius = `${this.options.borderRadius}px`

    if (this.options.styles) {
      Object.assign(this.div.style, this.options.styles)
    }

    this.element = this.div
  }

  /** No-op — kept for API compatibility. CSS renders immediately. */
  start(): void {
    // no-op: CSS gradients render without a render loop
  }

  /** No-op — kept for API compatibility. */
  pause(): void {
    // no-op
  }

  dispose(): void {
    if (this.observer) this.observer.disconnect()
    this.div.remove()
  }

  resize(width: number, height: number): void {
    this.options.width = width
    this.options.height = height
    this.div.style.width = `${width}px`
    this.div.style.height = `${height}px`
  }

  /**
   * Automatically resizes the element to match the dimensions of the given element.
   * @note Uses ResizeObserver.
   */
  autoResize(sourceElement: HTMLElement): void {
    if (this.observer) {
      this.observer.disconnect()
    }

    this.observer = new ResizeObserver(() => {
      const rect = sourceElement.getBoundingClientRect()
      this.resize(rect.width, rect.height)
    })

    this.observer.observe(sourceElement)
  }

  fadeIn(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const animation = this.div.animate(
        [
          { opacity: 0, transform: "scale(1.2)" },
          { opacity: 1, transform: "scale(1)" },
        ],
        { duration: 300, easing: "ease-out", fill: "forwards" }
      )

      animation.onfinish = () => resolve()
      animation.oncancel = () => reject("canceled")
    })
  }

  fadeOut(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const animation = this.div.animate(
        [
          { opacity: 1, transform: "scale(1)" },
          { opacity: 0, transform: "scale(1.2)" },
        ],
        { duration: 300, easing: "ease-in", fill: "forwards" }
      )

      animation.onfinish = () => resolve()
      animation.oncancel = () => reject("canceled")
    })
  }
}
