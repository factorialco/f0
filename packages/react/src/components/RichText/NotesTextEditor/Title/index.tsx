import { KeyboardEvent } from "react"

export interface TitleProps {
  value: string
  onChange?: (value: string) => void
  placeholder?: string
  disabled?: boolean
}

const Title = ({
  value,
  onChange,
  placeholder,
  disabled = false,
}: TitleProps) => {
  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault()
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // Remove any newlines (in case of paste)
    const newValue = e.target.value.replace(/[\r\n]/g, "")
    onChange?.(newValue)
    e.target.style.height = "auto"
    e.target.style.height = `${e.target.scrollHeight}px`
  }

  return (
    <div className="mx-auto flex w-full max-w-[824px] flex-col pb-4 pt-5 transition-all duration-300 sm:px-14 px-0">
      <textarea
        ref={(el) => {
          if (el) {
            el.style.height = "auto"
            el.style.height = `${el.scrollHeight}px`
          }
        }}
        disabled={disabled}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="resize-none overflow-hidden font-semibold text-f1-foreground placeholder-f1-foreground-tertiary sm:text-[39px] sm:leading-[49px] text-[34px] leading-[42px]"
        rows={1}
      />
    </div>
  )
}

export default Title
