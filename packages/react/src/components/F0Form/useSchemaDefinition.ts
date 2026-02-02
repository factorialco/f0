import { useMemo } from "react"
import { z, ZodRawShape, ZodTypeAny } from "zod"

import {
  F0FieldConfig,
  F0FieldType,
  getF0Config,
  inferFieldType,
} from "./f0Schema"
import type { F0Field } from "./fields/types"
import { isOptionalOrNullable } from "./fields/schema"
import { extractNumberConstraints } from "./fields/number/schema"
import { extractDateConstraints } from "./fields/date/schema"
import { extractTextareaConstraints } from "./fields/textarea/schema"
import type {
  F0SectionConfig,
  FieldItem,
  FormDefinitionItem,
  RowDefinition,
  SectionDefinition,
} from "./types"

/**
 * Internal representation of a parsed field with its schema and config
 */
interface ParsedField {
  id: string
  schema: ZodTypeAny
  config: F0FieldConfig
  fieldType: F0FieldType
  position: number
}

// ============================================================================
// Field Conversion
// ============================================================================

/**
 * Convert F0FieldConfig + schema into an F0Field for the renderer
 *
 * Note: We use type assertions because each F0Field type has its own
 * specific renderIf type, but the config has the union RenderIfCondition.
 * The runtime behavior is the same, this is just for type narrowing.
 */
function configToF0Field(
  id: string,
  schema: ZodTypeAny,
  config: F0FieldConfig,
  fieldType: F0FieldType
): F0Field {
  // Base props without renderIf (added per field type for correct typing)
  const baseProps = {
    id,
    label: config.label,
    placeholder: config.placeholder,
    helpText: config.helpText,
    disabled: config.disabled,
    validation: schema,
  }

  // Check if field is optional/nullable for clearable
  const clearable = isOptionalOrNullable(schema)

  switch (fieldType) {
    case "text":
      return {
        ...baseProps,
        type: "text",
        inputType: "inputType" in config ? config.inputType || "text" : "text",
        renderIf: config.renderIf,
      } as F0Field

    case "number": {
      const { min, max } = extractNumberConstraints(schema)
      return {
        ...baseProps,
        type: "number",
        step: "step" in config ? config.step : undefined,
        min,
        max,
        locale: "locale" in config ? config.locale : undefined,
        renderIf: config.renderIf,
      } as F0Field
    }

    case "textarea": {
      const { maxLength } = extractTextareaConstraints(schema)
      return {
        ...baseProps,
        type: "textarea",
        rows: "rows" in config ? config.rows : undefined,
        maxLength,
        renderIf: config.renderIf,
      } as F0Field
    }

    case "select":
      return {
        ...baseProps,
        type: "select",
        options: "options" in config ? config.options : [],
        multiple: "multiple" in config ? config.multiple : undefined,
        clearable,
        showSearchBox:
          "showSearchBox" in config ? config.showSearchBox : undefined,
        searchBoxPlaceholder:
          "searchBoxPlaceholder" in config
            ? config.searchBoxPlaceholder
            : undefined,
        renderIf: config.renderIf,
      } as F0Field

    case "checkbox":
      return {
        ...baseProps,
        type: "checkbox",
        renderIf: config.renderIf,
      } as F0Field

    case "switch":
      return {
        ...baseProps,
        type: "switch",
        renderIf: config.renderIf,
      } as F0Field

    case "date": {
      const { minDate, maxDate } = extractDateConstraints(schema)
      return {
        ...baseProps,
        type: "date",
        granularities:
          "granularities" in config ? config.granularities : undefined,
        minDate,
        maxDate,
        presets: "presets" in config ? config.presets : undefined,
        clearable,
        renderIf: config.renderIf,
      } as F0Field
    }

    case "daterange":
      return {
        ...baseProps,
        type: "daterange",
        fromLabel: "fromLabel" in config ? config.fromLabel : undefined,
        toLabel: "toLabel" in config ? config.toLabel : undefined,
        granularities:
          "granularities" in config ? config.granularities : undefined,
        presets: "presets" in config ? config.presets : undefined,
        clearable,
        renderIf: config.renderIf,
      } as F0Field

    case "richtext":
      return {
        ...baseProps,
        type: "richtext",
        maxCharacters:
          "maxCharacters" in config ? config.maxCharacters : undefined,
        mentionsConfig:
          "mentionsConfig" in config ? config.mentionsConfig : undefined,
        height: "height" in config ? config.height : undefined,
        plainHtmlMode:
          "plainHtmlMode" in config ? config.plainHtmlMode : undefined,
        renderIf: config.renderIf,
      } as F0Field

    case "custom":
      return {
        ...baseProps,
        type: "custom",
        render: "render" in config ? config.render : () => null,
        renderIf: config.renderIf,
      } as F0Field

    default:
      return {
        ...baseProps,
        type: "text",
        inputType: "text",
        renderIf: config.renderIf,
      } as F0Field
  }
}

/**
 * Group fields by their row ID and convert to row definitions
 */
function groupFieldsIntoRows(
  fields: ParsedField[]
): (FieldItem | RowDefinition)[] {
  const result: (FieldItem | RowDefinition)[] = []
  const processedIndices = new Set<number>()

  for (let i = 0; i < fields.length; i++) {
    if (processedIndices.has(i)) continue

    const field = fields[i]
    const rowId = field.config.row

    if (rowId) {
      // Find all fields with the same row ID
      const rowFields: ParsedField[] = []
      for (let j = i; j < fields.length; j++) {
        if (fields[j].config.row === rowId) {
          rowFields.push(fields[j])
          processedIndices.add(j)
        }
      }

      // Sort row fields by position
      rowFields.sort((a, b) => a.position - b.position)

      // Create row definition
      const rowDefinition: RowDefinition = {
        type: "row",
        fields: rowFields.map((f) =>
          configToF0Field(f.id, f.schema, f.config, f.fieldType)
        ),
      }
      result.push(rowDefinition)
    } else {
      // Single field
      processedIndices.add(i)
      const f0Field = configToF0Field(
        field.id,
        field.schema,
        field.config,
        field.fieldType
      )
      result.push({ type: "field", field: f0Field })
    }
  }

  return result
}

/**
 * Parse schema and extract all F0-configured fields.
 * Position is always derived from declaration order (Object.entries preserves insertion order in ES2015+).
 */
function parseSchemaFields(schema: z.ZodObject<ZodRawShape>): ParsedField[] {
  const shape = schema.shape
  const fields: ParsedField[] = []

  const entries = Object.entries(shape)

  for (let index = 0; index < entries.length; index++) {
    const [fieldId, fieldSchema] = entries[index]
    const config = getF0Config(fieldSchema as ZodTypeAny)
    if (config) {
      const fieldType = inferFieldType(fieldSchema as ZodTypeAny, config)
      fields.push({
        id: fieldId,
        schema: fieldSchema as ZodTypeAny,
        config,
        fieldType,
        position: index,
      })
    }
  }

  return fields
}

/**
 * Hook to convert a Zod schema with F0 configurations into a FormDefinitionItem array.
 *
 * This parses the schema shape, extracts F0 configs, groups fields by section,
 * sorts by position, and groups row fields together.
 *
 * Automatic derivations from the Zod schema:
 * - **Position**: Derived from field declaration order (can be overridden with `position`)
 * - **Number min/max**: `z.number().min(n).max(m)` → min/max constraints
 * - **Date min/max**: `z.date().min(d).max(d)` → minDate/maxDate constraints
 * - **String maxLength**: `z.string().max(n)` → maxLength for textarea
 * - **Clearable**: `z.optional()` or `z.nullable()` → clearable for select/date fields
 *
 * @param schema - Zod object schema with F0 field configurations
 * @param sections - Optional section configurations keyed by section ID
 * @returns Array of form definition items compatible with existing renderers
 *
 * @example
 * ```tsx
 * const formSchema = z.object({
 *   // Fields are ordered by declaration - no need to specify position
 *   firstName: f0(z.string().min(1), { label: "First Name" }),
 *   lastName: f0(z.string().min(1), { label: "Last Name" }),
 *   // Constraints derived from Zod, clearable because optional
 *   birthDate: f0(z.date().min(new Date("1900-01-01")).optional(), {
 *     label: "Birth Date"
 *   }),
 *   age: f0(z.number().min(0).max(120), { label: "Age" })
 * })
 * ```
 */
export function useSchemaDefinition(
  schema: z.ZodObject<ZodRawShape>,
  sections?: Record<string, F0SectionConfig>
): FormDefinitionItem[] {
  return useMemo(() => {
    const allFields = parseSchemaFields(schema)

    // Group fields by section
    const rootFields: ParsedField[] = []
    const sectionFields: Record<string, ParsedField[]> = {}

    for (const field of allFields) {
      const sectionId = field.config.section
      if (sectionId) {
        if (!sectionFields[sectionId]) {
          sectionFields[sectionId] = []
        }
        sectionFields[sectionId].push(field)
      } else {
        rootFields.push(field)
      }
    }

    // Sort root fields by position
    rootFields.sort((a, b) => a.position - b.position)

    // Sort fields within each section
    for (const sectionId of Object.keys(sectionFields)) {
      sectionFields[sectionId].sort((a, b) => a.position - b.position)
    }

    // Build result array
    const result: FormDefinitionItem[] = []

    // Add root-level fields first (grouped into rows where applicable)
    result.push(...groupFieldsIntoRows(rootFields))

    // Get section IDs sorted by order (if provided)
    const sectionIds = Object.keys(sectionFields).sort((a, b) => {
      const orderA = sections?.[a]?.order ?? 0
      const orderB = sections?.[b]?.order ?? 0
      return orderA - orderB
    })

    // Add sections
    for (const sectionId of sectionIds) {
      const sectionConfig = sections?.[sectionId]
      const fields = sectionFields[sectionId]

      const sectionDefinition: SectionDefinition = {
        id: sectionId,
        type: "section",
        section: {
          title: sectionConfig?.title ?? sectionId,
          description: sectionConfig?.description,
          renderIf: sectionConfig?.renderIf,
          fields: groupFieldsIntoRows(fields),
        },
      }

      result.push(sectionDefinition)
    }

    return result
  }, [schema, sections])
}

/**
 * Non-hook version for extracting definition outside of React components.
 * Useful for server-side rendering or testing.
 *
 * @param schema - Zod object schema with F0 field configurations
 * @param sections - Optional section configurations keyed by section ID
 * @returns Array of form definition items
 */
export function getSchemaDefinition(
  schema: z.ZodObject<ZodRawShape>,
  sections?: Record<string, F0SectionConfig>
): FormDefinitionItem[] {
  const allFields = parseSchemaFields(schema)

  // Group fields by section
  const rootFields: ParsedField[] = []
  const sectionFields: Record<string, ParsedField[]> = {}

  for (const field of allFields) {
    const sectionId = field.config.section
    if (sectionId) {
      if (!sectionFields[sectionId]) {
        sectionFields[sectionId] = []
      }
      sectionFields[sectionId].push(field)
    } else {
      rootFields.push(field)
    }
  }

  // Sort root fields by position
  rootFields.sort((a, b) => a.position - b.position)

  // Sort fields within each section
  for (const sectionId of Object.keys(sectionFields)) {
    sectionFields[sectionId].sort((a, b) => a.position - b.position)
  }

  // Build result array
  const result: FormDefinitionItem[] = []

  // Add root-level fields first
  result.push(...groupFieldsIntoRows(rootFields))

  // Get section IDs sorted by order
  const sectionIds = Object.keys(sectionFields).sort((a, b) => {
    const orderA = sections?.[a]?.order ?? 0
    const orderB = sections?.[b]?.order ?? 0
    return orderA - orderB
  })

  // Add sections
  for (const sectionId of sectionIds) {
    const sectionConfig = sections?.[sectionId]
    const fields = sectionFields[sectionId]

    const sectionDefinition: SectionDefinition = {
      id: sectionId,
      type: "section",
      section: {
        title: sectionConfig?.title ?? sectionId,
        description: sectionConfig?.description,
        renderIf: sectionConfig?.renderIf,
        fields: groupFieldsIntoRows(fields),
      },
    }

    result.push(sectionDefinition)
  }

  return result
}
