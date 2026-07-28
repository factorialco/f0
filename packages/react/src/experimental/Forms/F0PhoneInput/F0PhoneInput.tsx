import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { cva } from "cva"
import type { CountryCode as PhoneCountry } from "libphonenumber-js"
import { forwardRef, useId, useMemo, useRef, useState } from "react"
import RPNInput from "react-phone-number-input"
import type { Labels, Value } from "react-phone-number-input"

import { InputMessages } from "@/components/F0InputField/components/InputMessages"
import { Label } from "@/components/F0InputField/components/Label"
import { F0Icon } from "@/components/F0Icon"
import { CrossedCircle } from "@/icons/app"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Spinner } from "@/ui/Spinner"

import { CountrySelect } from "./components/CountrySelect"
import { PhoneNumberInput } from "./components/PhoneNumberInput"
import {
  buildMeta,
  countryForValue,
  e164ToValue,
  toCountryCode,
  toPhoneCountry,
  valueToE164,
} from "./lib/phone"
import {
  exampleInternationalPlaceholder,
  exampleNationalPlaceholder,
} from "./lib/placeholder"
import type { F0PhoneInputProps, F0PhoneInputValue } from "./types"

const containerVariants = cva({
  base: [
    "flex items-center transition-all",
    "border-[1px] border-solid border-f1-border bg-f1-background",
    "focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-0 focus-within:transition-none active:transition-none",
  ],
  variants: {
    size: {
      sm: "h-[32px] rounded",
      md: "h-[40px] rounded-md",
    },
    status: {
      default:
        "focus-within:border-f1-border-selected-bold focus-within:ring-f1-background-selected",
      warning:
        "border-f1-border-warning-bold focus-within:border-f1-border-warning-bold focus-within:ring-f1-border-warning",
      info: "border-f1-border-info-bold focus-within:border-f1-border-info-bold focus-within:ring-f1-border-info",
      error:
        "border-f1-border-critical-bold bg-f1-background-critical bg-opacity-10 focus-within:border-f1-border-critical-bold focus-within:ring-f1-border-critical",
    },
    disabled: {
      true: "cursor-not-allowed bg-f1-background-tertiary",
      false: "",
    },
    readonly: {
      true: "border-f1-border-secondary bg-f1-background-secondary",
      false: "",
    },
  },
  compoundVariants: [
    {
      disabled: false,
      readonly: false,
      status: "default",
      class: "hover:border-f1-border-hover",
    },
    {
      disabled: false,
      readonly: false,
      status: "warning",
      class: "hover:border-f1-border-warning-bold",
    },
    {
      disabled: false,
      readonly: false,
      status: "info",
      class: "hover:border-f1-border-info-bold",
    },
    {
      disabled: false,
      readonly: false,
      status: "error",
      class: "hover:border-f1-border-critical-bold",
    },
  ],
  defaultVariants: {
    size: "md",
    status: "default",
    disabled: false,
    readonly: false,
  },
})

export const F0PhoneInput = forwardRef<HTMLInputElement, F0PhoneInputProps>(
  function F0PhoneInput(
    {
      label,
      value: valueProp,
      defaultValue,
      onChange,
      onCountryChange,
      defaultCountry,
      pinnedCountries,
      allowedCountries,
      placeholder,
      hideLabel = false,
      labelIcon,
      hint,
      error,
      status,
      required = false,
      disabled = false,
      readonly = false,
      loading = false,
      clearable = false,
      size = "sm",
      name,
      id: idProp,
      autoFocus,
      onBlur,
      onFocus,
    },
    ref
  ) {
    const i18n = useI18n()
    const generatedId = useId()
    const id = idProp ?? generatedId

    const [value, setValue] = useControllableState<
      F0PhoneInputValue | undefined
    >({
      prop: valueProp,
      defaultProp: defaultValue,
    })

    const fallbackCountry = toPhoneCountry(defaultCountry)
    const e164 = useMemo(
      () => valueToE164(value, fallbackCountry),
      [value, fallbackCountry]
    )

    const [country, setCountry] = useState<PhoneCountry | undefined>(
      () => countryForValue(value) ?? fallbackCountry
    )
    const countryRef = useRef(country)

    const handleCountryChange = (next?: PhoneCountry) => {
      countryRef.current = next
      setCountry(next)
      onCountryChange?.(toCountryCode(next))
    }

    const handleChange = (nextE164?: Value) => {
      const next = e164ToValue(nextE164, countryRef.current)
      setValue(next)
      onChange?.(next, buildMeta(nextE164, countryRef.current))
    }

    const labels = useMemo<Labels>(() => {
      const result: Record<string, string> = {
        country: i18n.phoneInput.country,
      }
      for (const [code, countryName] of Object.entries(i18n.countries)) {
        result[code.toUpperCase()] = countryName
      }
      return result as Labels
    }, [i18n])

    const countryOptionsOrder = useMemo(() => {
      const pinned = (pinnedCountries ?? [])
        .map(toPhoneCountry)
        .filter((code): code is PhoneCountry => !!code)
      if (!pinned.length) return undefined
      return [...pinned, "|" as const, "..." as const]
    }, [pinnedCountries])

    // Sample for the country-less state, so the placeholder can still teach
    // the "+prefix number" format
    const sampleCountry = useMemo(
      () => (pinnedCountries ?? []).map(toPhoneCountry).find(Boolean) ?? "ES",
      [pinnedCountries]
    )

    const countries = useMemo(() => {
      if (!allowedCountries) return undefined
      const allowed = allowedCountries
        .map(toPhoneCountry)
        .filter((code): code is PhoneCountry => !!code)
      if (!allowed.length) {
        if (process.env.NODE_ENV !== "production") {
          console.warn(
            "F0PhoneInput: `allowedCountries` resolved to no valid country codes — the restriction was ignored.",
            allowedCountries
          )
        }
        return undefined
      }
      return allowed
    }, [allowedCountries])

    // Legacy `hint`/`error` shortcuts, mirroring F0InputField's semantics
    let effectiveStatus = status
    if (hint) {
      effectiveStatus = { type: "default", message: hint }
    }
    if (error) {
      effectiveStatus = {
        type: "error",
        message: typeof error === "string" ? error : undefined,
      }
    }

    const noEdit = disabled || readonly
    const showClear = clearable && !noEdit && !!e164

    return (
      <div
        className={cn(
          "flex flex-col gap-2",
          "pointer-events-none",
          disabled && "cursor-not-allowed"
        )}
      >
        {!hideLabel && label && (
          <Label
            label={label}
            required={required}
            htmlFor={id}
            icon={labelIcon}
            className="min-w-0 flex-1"
            disabled={disabled}
          />
        )}
        <div
          className={cn(
            "pointer-events-auto",
            containerVariants({
              size,
              status: effectiveStatus?.type ?? "default",
              disabled,
              readonly,
            })
          )}
          data-testid="input-field-wrapper"
        >
          <RPNInput
            className="flex h-full min-w-0 flex-1 items-center"
            value={e164 ?? undefined}
            onChange={handleChange}
            onCountryChange={handleCountryChange}
            defaultCountry={country ?? fallbackCountry}
            countries={countries}
            countryOptionsOrder={countryOptionsOrder}
            labels={labels}
            initialValueFormat="national"
            countrySelectComponent={CountrySelect}
            countrySelectProps={{ size }}
            inputComponent={PhoneNumberInput}
            placeholder={
              placeholder ??
              (country
                ? exampleNationalPlaceholder(country)
                : exampleInternationalPlaceholder(sampleCountry))
            }
            disabled={disabled}
            readOnly={readonly}
            required={required}
            name={name}
            id={id}
            autoFocus={autoFocus}
            onBlur={onBlur}
            onFocus={onFocus}
            // react-phone-number-input types `ref` as its class component, but
            // its forwardRef wrapper actually forwards it to the <input> element
            ref={ref as unknown as React.ComponentProps<typeof RPNInput>["ref"]}
            aria-label={label}
            aria-invalid={effectiveStatus?.type === "error" || undefined}
            aria-busy={loading || undefined}
          />
          {(showClear || loading) && (
            <div
              className={cn(
                "flex h-fit min-w-6 items-center gap-1.5 self-center pr-[3px]",
                size === "md" && "pr-[7px]"
              )}
            >
              {showClear && (
                <button
                  className={cn(
                    "flex h-5 w-5 shrink-0 cursor-pointer items-center justify-center rounded-full p-0",
                    focusRing()
                  )}
                  aria-label="Clear"
                  type="button"
                  tabIndex={0}
                  data-testid="clear-button"
                  onClick={(event) => {
                    event.stopPropagation()
                    handleChange(undefined)
                  }}
                >
                  <F0Icon icon={CrossedCircle} color="default" size="md" />
                </button>
              )}
              {loading && (
                <div className="pointer-events-none flex h-6 w-6 items-center justify-center">
                  <Spinner size="small" className="mt-[1px]" />
                </div>
              )}
            </div>
          )}
        </div>
        <InputMessages status={effectiveStatus} />
      </div>
    )
  }
)
