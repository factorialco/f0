import { forwardRef, useImperativeHandle, useRef } from "react"

import { cn } from "@/lib/utils"

import { audienceEntityKey, type F0AudienceEntity } from "../types"
import { AudienceChip } from "./AudienceChip"

/**
 * The element F0InputField clones as its child: selected entities as chips
 * plus the inline combobox input. Input-specific props (value, onChange,
 * aria-*, id, role, disabled) are injected by F0InputField and forwarded to
 * the real `<input>`; the injected className carries the field padding and is
 * applied to the wrapper so chips sit inside the padded area.
 */
type AudienceFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  entities: F0AudienceEntity[]
  onRemoveEntity: (entity: F0AudienceEntity) => void
}

export const AudienceField = forwardRef<HTMLInputElement, AudienceFieldProps>(
  ({ entities, onRemoveEntity, className, ...inputProps }, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement>(null)
    useImperativeHandle(forwardedRef, () => inputRef.current!)

    return (
      <div
        className={cn(
          className,
          "flex h-auto w-full min-w-0 flex-wrap items-center gap-1 py-1"
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {entities.map((entity) => (
          <AudienceChip
            key={audienceEntityKey(entity)}
            entity={entity}
            onRemove={onRemoveEntity}
          />
        ))}
        <input
          ref={inputRef}
          type="text"
          autoComplete="off"
          {...inputProps}
          className="h-7 min-w-20 flex-1 border-none bg-transparent text-f1-foreground outline-none"
        />
      </div>
    )
  }
)

AudienceField.displayName = "AudienceField"
