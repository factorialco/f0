import { useMemo } from "react"

import { cn } from "@/lib/utils"
import { Skeleton } from "@/ui/skeleton"

import type { F0SectionConfig, F0FormSchema } from "../types"

import { FIELD_GAP, FORM_MAX_WIDTH, SECTION_MARGIN } from "../constants"
import { getSchemaDefinition } from "../useSchemaDefinition"

// =============================================================================
// Skeleton shapes for different field types
// =============================================================================

function LabelSkeleton() {
  return <Skeleton className="h-4 w-24 rounded-sm" />
}

function InputSkeleton() {
  return <Skeleton className="h-10 w-full rounded-sm" />
}

function TextareaSkeleton() {
  return <Skeleton className="h-24 w-full rounded-sm" />
}

function ToggleSkeleton() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-1">
        <Skeleton className="h-4 w-32 rounded-sm" />
        <Skeleton className="h-3 w-48 rounded-sm" />
      </div>
      <Skeleton className="h-5 w-9 rounded-full" />
    </div>
  )
}

function FieldSkeleton({ type }: { type: string }) {
  if (type === "switch" || type === "checkbox") {
    return <ToggleSkeleton />
  }

  if (type === "textarea" || type === "richtext") {
    return (
      <div className="flex flex-col gap-2">
        <LabelSkeleton />
        <TextareaSkeleton />
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-2">
      <LabelSkeleton />
      <InputSkeleton />
    </div>
  )
}

function SectionHeaderSkeleton() {
  return (
    <div className="flex flex-col gap-1">
      <Skeleton className="h-5 w-40 rounded-sm" />
      <Skeleton className="h-3 w-64 rounded-sm" />
    </div>
  )
}

// =============================================================================
// Public skeleton component
// =============================================================================

interface F0FormSkeletonProps {
  schema: F0FormSchema
  sections?: Record<string, F0SectionConfig>
  className?: string
}

/**
 * Renders field-shaped skeleton placeholders that match the form layout
 * derived from the schema and sections configuration.
 */
export function F0FormSkeleton({
  schema,
  sections,
  className,
}: F0FormSkeletonProps) {
  const definition = useMemo(
    () => getSchemaDefinition(schema, sections),
    [schema, sections]
  )

  return (
    <div
      className={cn("flex w-full flex-col", FORM_MAX_WIDTH, FIELD_GAP, className)}
      aria-busy="true"
      aria-live="polite"
    >
      {definition.map((item, idx) => {
        if (item.type === "field") {
          return <FieldSkeleton key={idx} type={item.field.type} />
        }

        if (item.type === "row") {
          return (
            <div key={idx} className={cn("flex w-full", FIELD_GAP)}>
              {item.fields.map((field, fieldIdx) => (
                <div key={fieldIdx} className="flex-1">
                  <FieldSkeleton type={field.type} />
                </div>
              ))}
            </div>
          )
        }

        if (item.type === "section") {
          return (
            <div
              key={idx}
              className={cn("flex flex-col", FIELD_GAP, idx !== 0 && SECTION_MARGIN)}
            >
              <SectionHeaderSkeleton />
              {item.section.fields.map((sectionItem, sIdx) => {
                if (sectionItem.type === "field") {
                  return (
                    <FieldSkeleton
                      key={sIdx}
                      type={sectionItem.field.type}
                    />
                  )
                }
                if (sectionItem.type === "row") {
                  return (
                    <div key={sIdx} className={cn("flex w-full", FIELD_GAP)}>
                      {sectionItem.fields.map((field, fieldIdx) => (
                        <div key={fieldIdx} className="flex-1">
                          <FieldSkeleton type={field.type} />
                        </div>
                      ))}
                    </div>
                  )
                }
                return null
              })}
            </div>
          )
        }

        return null
      })}
    </div>
  )
}

// =============================================================================
// Per-section skeleton
// =============================================================================

interface F0FormPerSectionSkeletonProps {
  schema: Record<string, F0FormSchema>
  sections?: Record<string, F0SectionConfig>
  className?: string
}

/**
 * Renders skeleton placeholders for a per-section form.
 * Each section is rendered independently.
 */
export function F0FormPerSectionSkeleton({
  schema,
  sections,
  className,
}: F0FormPerSectionSkeletonProps) {
  const sectionIds = useMemo(() => Object.keys(schema), [schema])

  return (
    <div
      className={cn("flex w-full flex-col", FORM_MAX_WIDTH, className)}
      aria-busy="true"
      aria-live="polite"
    >
      {sectionIds.map((sectionId, idx) => {
        const sectionSchema = schema[sectionId]
        const definition = getSchemaDefinition(sectionSchema)
        const sectionConfig = sections?.[sectionId]

        return (
          <div
            key={sectionId}
            className={cn("flex flex-col", FIELD_GAP, idx !== 0 && SECTION_MARGIN)}
          >
            {sectionConfig && <SectionHeaderSkeleton />}
            {definition.map((item, itemIdx) => {
              if (item.type === "field") {
                return <FieldSkeleton key={itemIdx} type={item.field.type} />
              }
              if (item.type === "row") {
                return (
                  <div key={itemIdx} className={cn("flex w-full", FIELD_GAP)}>
                    {item.fields.map((field, fieldIdx) => (
                      <div key={fieldIdx} className="flex-1">
                        <FieldSkeleton type={field.type} />
                      </div>
                    ))}
                  </div>
                )
              }
              return null
            })}
          </div>
        )
      })}
    </div>
  )
}
