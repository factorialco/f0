"use client"

import type { Editor } from "@tiptap/react"

import Placeholder from "@tiptap/extension-placeholder"
import { Fragment, Slice, type Schema } from "@tiptap/pm/model"
import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import {
  type ReactElement,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"

import type { NewColor } from "@/components/tags/F0TagDot/types"

import { DataTestIdWrapper } from "@/lib/data-testid"
import { OneEllipsis } from "@/lib/OneEllipsis"
import { useI18n } from "@/lib/providers/i18n"
import { cn, focusRing } from "@/lib/utils"
import { Popover, PopoverAnchor, PopoverContent } from "@/ui/popover"
import { Skeleton } from "@/ui/skeleton"

import type {
  ActiveTextRange,
  FilterTagNodeAttributes,
  FilterTagOptionsState,
  ResolvedFilterTagOption,
} from "./internal-types"
import type {
  F0FilterTagPickerFiltersDefinition,
  F0FilterTagPickerOptionValue,
  F0FilterTagPickerProps,
  F0FilterTagPickerValue,
} from "./types"

import { getCategoryDotStyle, getDefaultCategoryColors } from "./colorStyles"
import {
  CategoryFilterSelect,
  decodeCategoryFilterSelection,
  encodeCategoryFilterSelection,
} from "./components/CategoryFilterSelect"
import {
  FilterOptionsLoader,
  flattenOptions,
} from "./components/FilterOptionsLoader"
import { FilterTagNode } from "./components/FilterTagNode"
import {
  areFilterTagPickerValuesEqual,
  editorDocumentToFilterTagPickerValue,
  filterTagPickerValueToEditorContent,
  normalizeFilterTagPickerValue,
  normalizeFilterTagPickerValueForMode,
} from "./value"

const REMOTE_SEARCH_MIN_LENGTH = 2
const REMOTE_SEARCH_DEBOUNCE_MS = 250
const LEAF_PLACEHOLDER = "\ufffc"
const ACTIVE_WORD_PATTERN = /[\p{L}\p{N}_'’-]+$/u
const WORD_PATTERN = /[\p{L}\p{N}_'’-]+/gu

function normalizeSearchText(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase()
}

function optionIdentity(
  filterKey: string,
  value: F0FilterTagPickerOptionValue
) {
  return `${filterKey}:${typeof value}:${String(value)}`
}

function hasSource(definition: F0FilterTagPickerFiltersDefinition[string]) {
  return "source" in definition.options
}

function getActiveTextRange(editor: Editor): ActiveTextRange | null {
  const { selection } = editor.state
  if (!selection.empty || !selection.$from.parent.isTextblock) return null

  const textBefore = selection.$from.parent.textBetween(
    0,
    selection.$from.parentOffset,
    "\n",
    LEAF_PLACEHOLDER
  )
  const match = textBefore.match(ACTIVE_WORD_PATTERN)
  if (!match?.[0]) return null

  return {
    from: selection.from - match[0].length,
    query: match[0],
    to: selection.from,
  }
}

function getReplacementFrom(
  editor: Editor,
  activeRange: ActiveTextRange,
  optionLabel: string
) {
  const { selection } = editor.state
  const textBefore = selection.$from.parent.textBetween(
    0,
    selection.$from.parentOffset,
    "\n",
    LEAF_PLACEHOLDER
  )
  const words = Array.from(textBefore.matchAll(WORD_PATTERN))
  const normalizedLabel = normalizeSearchText(optionLabel)

  for (const word of words) {
    const start = word.index
    if (start === undefined) continue

    const candidate = normalizeSearchText(textBefore.slice(start).trim())
    if (
      normalizedLabel === candidate ||
      normalizedLabel.startsWith(candidate) ||
      normalizedLabel.includes(candidate)
    ) {
      return selection.from - (textBefore.length - start)
    }
  }

  return activeRange.from
}

function getCaretRect(editor: Editor | null): DOMRect | null {
  if (!editor) return null

  try {
    const coordinates = editor.view.coordsAtPos(editor.state.selection.from)
    return DOMRect.fromRect({
      x: coordinates.left,
      y: coordinates.top,
      width: Math.max(1, coordinates.right - coordinates.left),
      height: Math.max(1, coordinates.bottom - coordinates.top),
    })
  } catch {
    return editor.view.dom.getBoundingClientRect()
  }
}

function createPlainTextSlice(schema: Schema, text: string) {
  const content = text.split("\n").flatMap((line, index, lines) => {
    const nodes = line ? [schema.text(line)] : []
    if (index < lines.length - 1) {
      nodes.push(schema.nodes.hardBreak.create())
    }
    return nodes
  })

  return new Slice(Fragment.fromArray(content), 0, 0)
}

function optionScore(option: ResolvedFilterTagOption, query: string) {
  const label = normalizeSearchText(option.displayLabel)
  const category = normalizeSearchText(option.categoryLabel)

  if (label === query) return 0
  if (label.startsWith(query)) return 1
  if (label.includes(query)) return 2
  if (category === query) return 3
  if (category.startsWith(query)) return 4
  if (category.includes(query)) return 5
  return null
}

type PopupRow =
  | { kind: "option"; option: ResolvedFilterTagOption }
  | { categoryLabel: string; filterKey: string; kind: "retry" }
  | {
      categoryLabel: string
      filterKey: string
      kind: "loadMore"
      loadMore: () => void
    }

function _F0FilterTagPicker<
  Filters extends F0FilterTagPickerFiltersDefinition,
>({
  filters,
  value,
  onChange,
  label,
  mode = "mixed",
  placeholder,
  categoryColors,
  disabled = false,
  dataTestId,
}: F0FilterTagPickerProps<Filters>) {
  const i18n = useI18n()
  const editorId = useId()
  const labelId = useId()
  const listboxId = useId()
  const keyboardHintId = useId()
  const [activeTextRange, setActiveTextRange] =
    useState<ActiveTextRange | null>(null)
  const [activeRowIndex, setActiveRowIndex] = useState(0)
  const [announcement, setAnnouncement] = useState("")
  const [dismissedSignature, setDismissedSignature] = useState<string | null>(
    null
  )
  const [editorFocused, setEditorFocused] = useState(false)
  const [optionStates, setOptionStates] = useState<
    Record<string, FilterTagOptionsState>
  >({})
  const [loaderRevisions, setLoaderRevisions] = useState<
    Record<string, number>
  >({})
  const [remoteSearch, setRemoteSearch] = useState("")
  const [selectedLabelOverrides, setSelectedLabelOverrides] = useState<
    Record<string, string>
  >({})
  const [categorySelectValues, setCategorySelectValues] = useState<
    Record<string, string[]>
  >({})
  const [openCategorySelectKeys, setOpenCategorySelectKeys] = useState<
    string[]
  >([])
  const caretRectRef = useRef<DOMRect | null>(null)
  const categorySelectValuesRef = useRef<Record<string, string[]>>({})
  const isComposingRef = useRef(false)
  const isApplyingEditorChangeRef = useRef(false)
  const editorInstanceRef = useRef<Editor | null>(null)
  const valueRef = useRef(normalizeFilterTagPickerValueForMode(value, mode))
  const onChangeRef = useRef(onChange)
  const handleEditorActivityRef = useRef<(editor: Editor) => void>(() => {})
  const handleEditorUpdateRef = useRef<(editor: Editor) => void>(() => {})
  const handleEditorBlurRef = useRef<() => void>(() => {})
  const handleEditorKeyDownRef = useRef<(event: KeyboardEvent) => boolean>(
    () => false
  )

  const filterEntries = useMemo(
    () => Object.entries(filters) as [string, Filters[keyof Filters]][],
    [filters]
  )
  const filterOrder = useMemo(
    () =>
      new Map(filterEntries.map(([filterKey], index) => [filterKey, index])),
    [filterEntries]
  )
  const validFilterKeys = useMemo(
    () => new Set(filterEntries.map(([filterKey]) => filterKey)),
    [filterEntries]
  )
  const defaultCategoryColors = useMemo(
    () =>
      getDefaultCategoryColors(filterEntries.map(([filterKey]) => filterKey)),
    [filterEntries]
  )
  const getCategoryColor = useCallback(
    (filterKey: string): NewColor =>
      categoryColors?.[filterKey as keyof Filters] ??
      defaultCategoryColors.get(filterKey)!,
    [categoryColors, defaultCategoryColors]
  )

  const handleOptionsStateChange = useCallback(
    (filterKey: string, state: FilterTagOptionsState) => {
      setOptionStates((current) => ({ ...current, [filterKey]: state }))
    },
    []
  )

  const optionLabels = useMemo(() => {
    const labels = new Map<string, ResolvedFilterTagOption>()

    for (const [filterKey, definition] of filterEntries) {
      if (
        "options" in definition.options &&
        Array.isArray(definition.options.options)
      ) {
        const resolvedOptions = flattenOptions(definition.options.options, {
          categoryKey: filterKey,
          categoryLabel: definition.label,
          filterKey,
          ancestors: [],
        })

        for (const option of resolvedOptions) {
          labels.set(optionIdentity(option.filterKey, option.value), option)
        }
      }
    }

    for (const state of Object.values(optionStates)) {
      for (const option of state.options) {
        labels.set(optionIdentity(option.filterKey, option.value), option)
      }
    }

    return labels
  }, [filterEntries, optionStates])

  const staticCategorySelectOptions = useMemo(() => {
    return Object.fromEntries(
      filterEntries.map(([filterKey, definition]) => {
        if (
          "options" in definition.options &&
          Array.isArray(definition.options.options)
        ) {
          return [
            filterKey,
            flattenOptions(definition.options.options, {
              categoryKey: filterKey,
              categoryLabel: definition.label,
              filterKey,
              ancestors: [],
            }),
          ]
        }

        return [filterKey, null]
      })
    ) as Record<string, ResolvedFilterTagOption[] | null>
  }, [filterEntries])

  const categorySelectOptions = useMemo(
    () =>
      Object.fromEntries(
        filterEntries.map(([filterKey]) => [
          filterKey,
          staticCategorySelectOptions[filterKey] ??
            optionStates[filterKey]?.options ??
            [],
        ])
      ) as Record<string, ResolvedFilterTagOption[]>,
    [filterEntries, optionStates, staticCategorySelectOptions]
  )

  const getTagAttributes = useCallback(
    (
      filterKey: string,
      optionValue: F0FilterTagPickerOptionValue
    ): FilterTagNodeAttributes => {
      const identity = optionIdentity(filterKey, optionValue)
      const resolved = optionLabels.get(identity)
      const categoryKey = resolved?.categoryKey ?? filterKey
      const definition = filters[categoryKey] ?? filters[filterKey]

      return {
        filterKey,
        value: optionValue,
        categoryKey,
        categoryLabel:
          resolved?.categoryLabel ?? definition?.label ?? filterKey,
        color: getCategoryColor(categoryKey),
        label:
          resolved?.displayLabel ??
          selectedLabelOverrides[identity] ??
          String(optionValue),
      }
    },
    [filters, getCategoryColor, optionLabels, selectedLabelOverrides]
  )

  const selectedCategoryValues = useMemo(() => {
    const selections: Record<string, string[]> = {}

    for (const token of value) {
      if (token.type !== "filter") continue

      const resolved = optionLabels.get(
        optionIdentity(token.filterKey, token.value)
      )
      const categoryKey = resolved?.categoryKey ?? token.filterKey
      if (!filters[categoryKey]) continue

      const encoded = encodeCategoryFilterSelection({
        filterKey: token.filterKey,
        value: token.value,
      })
      selections[categoryKey] = [...(selections[categoryKey] ?? []), encoded]
    }

    return selections
  }, [filters, optionLabels, value])

  useEffect(() => {
    setCategorySelectValues((current) => {
      const next: Record<string, string[]> = {}
      for (const [filterKey] of filterEntries) {
        next[filterKey] = selectedCategoryValues[filterKey] ?? []
      }
      if (JSON.stringify(current) === JSON.stringify(next)) return current

      categorySelectValuesRef.current = next
      return next
    })
  }, [filterEntries, selectedCategoryValues])

  const commitCategorySelection = useCallback(
    (categoryKey: string) => {
      const decodedSelections = (
        categorySelectValuesRef.current[categoryKey] ??
        selectedCategoryValues[categoryKey] ??
        []
      )
        .map(decodeCategoryFilterSelection)
        .filter(
          (selection): selection is NonNullable<typeof selection> =>
            selection !== null && validFilterKeys.has(selection.filterKey)
        )
      const selectedIdentities = new Set(
        decodedSelections.map((selection) =>
          optionIdentity(selection.filterKey, selection.value)
        )
      )
      const nextValue = valueRef.current.filter((token) => {
        if (token.type !== "filter") return true

        const identity = optionIdentity(token.filterKey, token.value)
        const resolved = optionLabels.get(identity)
        const tokenCategoryKey = resolved?.categoryKey ?? token.filterKey
        return (
          tokenCategoryKey !== categoryKey || selectedIdentities.has(identity)
        )
      })
      const existingIdentities = new Set(
        nextValue.flatMap((token) =>
          token.type === "filter"
            ? [optionIdentity(token.filterKey, token.value)]
            : []
        )
      )

      for (const selection of decodedSelections) {
        const identity = optionIdentity(selection.filterKey, selection.value)
        if (existingIdentities.has(identity)) continue

        nextValue.push({
          type: "filter",
          filterKey: selection.filterKey,
          value: selection.value,
        } as F0FilterTagPickerValue<Filters>[number])
        existingIdentities.add(identity)
      }

      const normalizedValue = normalizeFilterTagPickerValueForMode(
        normalizeFilterTagPickerValue(nextValue),
        mode
      )
      if (areFilterTagPickerValuesEqual(valueRef.current, normalizedValue)) {
        return
      }

      valueRef.current = normalizedValue
      onChangeRef.current(normalizedValue)
    },
    [mode, optionLabels, selectedCategoryValues, validFilterKeys]
  )

  const handleCategorySelectOpenChange = useCallback(
    (filterKey: string, open: boolean) => {
      if (open) {
        setOpenCategorySelectKeys((current) =>
          current.includes(filterKey) ? current : [...current, filterKey]
        )
        const currentSelection = selectedCategoryValues[filterKey] ?? []
        categorySelectValuesRef.current = {
          ...categorySelectValuesRef.current,
          [filterKey]: currentSelection,
        }
        setCategorySelectValues((current) => ({
          ...current,
          [filterKey]: currentSelection,
        }))
        return
      }

      setOpenCategorySelectKeys((current) =>
        current.filter((key) => key !== filterKey)
      )
      commitCategorySelection(filterKey)
    },
    [commitCategorySelection, selectedCategoryValues]
  )

  const extensions = useMemo(
    () => [
      StarterKit.configure({
        blockquote: false,
        bold: false,
        bulletList: false,
        code: false,
        codeBlock: false,
        dropcursor: false,
        gapcursor: false,
        heading: false,
        history: false,
        horizontalRule: false,
        italic: false,
        listItem: false,
        orderedList: false,
        strike: false,
      }),
      Placeholder.configure({
        placeholder:
          placeholder ??
          (mode === "tags"
            ? i18n.filters.tagPicker.tagsPlaceholder
            : i18n.filters.tagPicker.searchPlaceholder),
      }),
      FilterTagNode,
    ],
    [
      i18n.filters.tagPicker.searchPlaceholder,
      i18n.filters.tagPicker.tagsPlaceholder,
      mode,
      placeholder,
    ]
  )

  const editor = useEditor(
    {
      extensions,
      content: filterTagPickerValueToEditorContent(
        normalizeFilterTagPickerValueForMode(value, mode),
        getTagAttributes
      ),
      editable: !disabled,
      immediatelyRender: false,
      shouldRerenderOnTransaction: false,
      editorProps: {
        attributes: {
          id: editorId,
          role: "combobox",
          "aria-autocomplete": "list",
          "aria-expanded": "false",
          "aria-labelledby": labelId,
          "aria-disabled": String(Boolean(disabled)),
        },
        handleDOMEvents: {
          compositionstart: () => {
            isComposingRef.current = true
            return false
          },
          compositionend: () => {
            isComposingRef.current = false
            queueMicrotask(() => {
              const currentEditor = editorInstanceRef.current
              if (currentEditor) handleEditorActivityRef.current(currentEditor)
            })
            return false
          },
        },
        handleKeyDown: (_view, event) => handleEditorKeyDownRef.current(event),
        handlePaste: (view, event) => {
          const text = event.clipboardData?.getData("text/plain")
          if (text === undefined) return false

          event.preventDefault()
          const plainText =
            mode === "tags" ? text.replace(/\r?\n|\r/gu, " ") : text
          view.dispatch(
            view.state.tr
              .replaceSelection(
                createPlainTextSlice(view.state.schema, plainText)
              )
              .scrollIntoView()
          )
          return true
        },
      },
      onCreate: ({ editor: currentEditor }) => {
        editorInstanceRef.current = currentEditor
        handleEditorActivityRef.current(currentEditor)
      },
      onDestroy: () => {
        editorInstanceRef.current = null
      },
      onFocus: ({ editor: currentEditor }) => {
        setEditorFocused(true)
        handleEditorActivityRef.current(currentEditor)
      },
      onBlur: () => handleEditorBlurRef.current(),
      onSelectionUpdate: ({ editor: currentEditor }) => {
        handleEditorActivityRef.current(currentEditor)
      },
      onUpdate: ({ editor: currentEditor }) => {
        handleEditorUpdateRef.current(currentEditor)
        handleEditorActivityRef.current(currentEditor)
      },
    },
    [extensions, mode]
  )

  onChangeRef.current = onChange

  handleEditorActivityRef.current = (currentEditor) => {
    if (isComposingRef.current) return
    setActiveTextRange(getActiveTextRange(currentEditor))
    caretRectRef.current = getCaretRect(currentEditor)
  }

  handleEditorBlurRef.current = () => {
    setEditorFocused(false)
    setActiveTextRange(null)

    if (mode === "tags" && editor) {
      const editorValue = editorDocumentToFilterTagPickerValue<Filters>(
        editor.state.doc,
        validFilterKeys
      )
      if (editorValue.some((token) => token.type === "text")) {
        const tagsOnlyValue = normalizeFilterTagPickerValueForMode(
          editorValue,
          mode
        )
        isApplyingEditorChangeRef.current = true
        editor.commands.setContent(
          filterTagPickerValueToEditorContent(tagsOnlyValue, getTagAttributes),
          false
        )
        isApplyingEditorChangeRef.current = false
        valueRef.current = tagsOnlyValue
      }
    }
  }

  handleEditorUpdateRef.current = (currentEditor) => {
    if (isApplyingEditorChangeRef.current) return

    const nextValue = normalizeFilterTagPickerValueForMode(
      editorDocumentToFilterTagPickerValue<Filters>(
        currentEditor.state.doc,
        validFilterKeys
      ),
      mode
    )
    if (areFilterTagPickerValuesEqual(valueRef.current, nextValue)) return

    const nextFilterIdentities = new Set(
      nextValue.flatMap((token) =>
        token.type === "filter"
          ? [optionIdentity(token.filterKey, token.value)]
          : []
      )
    )
    const removedToken = valueRef.current.find(
      (token) =>
        token.type === "filter" &&
        !nextFilterIdentities.has(optionIdentity(token.filterKey, token.value))
    )
    if (removedToken?.type === "filter") {
      const metadata = getTagAttributes(
        removedToken.filterKey,
        removedToken.value
      )
      setAnnouncement(
        i18n.t("filters.tagPicker.removed", {
          value: metadata.label,
          category: metadata.categoryLabel,
        })
      )
    }

    valueRef.current = nextValue
    onChangeRef.current(nextValue)
  }

  useEffect(() => {
    if (!editor) return

    const normalizedValue = normalizeFilterTagPickerValueForMode(value, mode)
    valueRef.current = normalizedValue
    const editorValue = normalizeFilterTagPickerValueForMode(
      editorDocumentToFilterTagPickerValue<Filters>(
        editor.state.doc,
        validFilterKeys
      ),
      mode
    )
    if (areFilterTagPickerValuesEqual(editorValue, normalizedValue)) return

    const previousSelection = editor.state.selection.from
    isApplyingEditorChangeRef.current = true
    editor.commands.setContent(
      filterTagPickerValueToEditorContent(normalizedValue, getTagAttributes),
      false
    )
    const documentEnd = editor.state.doc.content.size
    editor.commands.setTextSelection(Math.min(previousSelection, documentEnd))
    isApplyingEditorChangeRef.current = false
    handleEditorActivityRef.current(editor)
  }, [editor, getTagAttributes, mode, validFilterKeys, value])

  useEffect(() => {
    editor?.setEditable(!disabled)
  }, [disabled, editor])

  useEffect(() => {
    if (!editor) return

    const editorElement = editor.view.dom
    editorElement.setAttribute("aria-describedby", keyboardHintId)
    editorElement.setAttribute("aria-labelledby", labelId)
    editorElement.setAttribute("aria-disabled", String(Boolean(disabled)))
  }, [disabled, editor, keyboardHintId, labelId])

  useEffect(() => {
    if (!editor) return

    const transaction = editor.state.tr
    let changed = false

    editor.state.doc.descendants((node, position) => {
      if (node.type.name !== "filterTag") return true

      const current = node.attrs as FilterTagNodeAttributes
      const next = getTagAttributes(current.filterKey, current.value)
      if (JSON.stringify(current) !== JSON.stringify(next)) {
        transaction.setNodeMarkup(position, undefined, next)
        changed = true
      }
      return false
    })

    if (changed) {
      isApplyingEditorChangeRef.current = true
      editor.view.dispatch(transaction)
      isApplyingEditorChangeRef.current = false
    }
  }, [editor, getTagAttributes])

  useEffect(() => {
    let cancelled = false

    const resolveSelectedLabels = async () => {
      const resolved: Record<string, string> = {}

      await Promise.all(
        value.flatMap((token) => {
          if (token.type !== "filter") return []

          const definition = filters[token.filterKey]
          if (!definition?.options.getLabel) return []

          const identity = optionIdentity(token.filterKey, token.value)
          if (optionLabels.has(identity) || selectedLabelOverrides[identity]) {
            return []
          }

          return [
            Promise.resolve(definition.options.getLabel(token.value))
              .then((resolvedLabel) => {
                resolved[identity] = resolvedLabel
              })
              .catch(() => undefined),
          ]
        })
      )

      if (!cancelled && Object.keys(resolved).length > 0) {
        setSelectedLabelOverrides((current) => ({ ...current, ...resolved }))
      }
    }

    void resolveSelectedLabels()

    return () => {
      cancelled = true
    }
  }, [filters, optionLabels, selectedLabelOverrides, value])

  const query = activeTextRange?.query ?? ""
  const normalizedQuery = normalizeSearchText(query)
  const querySignature = activeTextRange
    ? `${activeTextRange.from}:${activeTextRange.to}:${normalizedQuery}`
    : null

  useEffect(() => {
    if (normalizedQuery.length < REMOTE_SEARCH_MIN_LENGTH) {
      setRemoteSearch("")
      return
    }

    const timeout = window.setTimeout(
      () => setRemoteSearch(query),
      REMOTE_SEARCH_DEBOUNCE_MS
    )
    return () => window.clearTimeout(timeout)
  }, [normalizedQuery, query])

  const remoteSearchIsCurrent =
    normalizedQuery.length >= REMOTE_SEARCH_MIN_LENGTH &&
    normalizeSearchText(remoteSearch) === normalizedQuery
  const selectedIdentities = useMemo(
    () =>
      new Set(
        value.flatMap((token) =>
          token.type === "filter"
            ? [optionIdentity(token.filterKey, token.value)]
            : []
        )
      ),
    [value]
  )
  const visibleOptions = useMemo(() => {
    if (!normalizedQuery) return []

    return filterEntries
      .flatMap(([filterKey, definition]) => {
        if (hasSource(definition) && !remoteSearchIsCurrent) return []

        return (optionStates[filterKey]?.options ?? []).flatMap((option) => {
          if (!validFilterKeys.has(option.filterKey)) return []

          if (
            selectedIdentities.has(
              optionIdentity(option.filterKey, option.value)
            )
          ) {
            return []
          }

          const score = optionScore(option, normalizedQuery)
          return score === null ? [] : [{ option, score }]
        })
      })
      .sort(
        (first, second) =>
          first.score - second.score ||
          (filterOrder.get(first.option.categoryKey) ?? 0) -
            (filterOrder.get(second.option.categoryKey) ?? 0)
      )
      .map(({ option }) => option)
  }, [
    filterEntries,
    filterOrder,
    normalizedQuery,
    optionStates,
    remoteSearchIsCurrent,
    selectedIdentities,
    validFilterKeys,
  ])

  const popupRows = useMemo<PopupRow[]>(() => {
    if (!normalizedQuery) return []

    const rows: PopupRow[] = visibleOptions.map((option) => ({
      kind: "option",
      option,
    }))

    for (const [filterKey, definition] of filterEntries) {
      if (hasSource(definition) && !remoteSearchIsCurrent) continue
      const state = optionStates[filterKey]

      if (state?.error) {
        rows.push({
          kind: "retry",
          filterKey,
          categoryLabel: definition.label,
        })
      }
      if (state?.hasMore && state.loadMore) {
        rows.push({
          kind: "loadMore",
          filterKey,
          categoryLabel: definition.label,
          loadMore: state.loadMore,
        })
      }
    }

    return rows
  }, [
    filterEntries,
    normalizedQuery,
    optionStates,
    remoteSearchIsCurrent,
    visibleOptions,
  ])

  const isLoading = filterEntries.some(([filterKey, definition]) => {
    if (hasSource(definition) && !remoteSearchIsCurrent) return false
    return optionStates[filterKey]?.isLoading
  })
  const failedCategoryLabels = filterEntries.flatMap(
    ([filterKey, definition]) => {
      if (hasSource(definition) && !remoteSearchIsCurrent) return []
      return optionStates[filterKey]?.error ? [definition.label] : []
    }
  )
  const isOpen = Boolean(
    !disabled &&
    editorFocused &&
    querySignature &&
    (isLoading || popupRows.length > 0) &&
    querySignature !== dismissedSignature
  )
  const activeRow = popupRows[activeRowIndex]
  const activeDescendantId = isOpen
    ? activeRow
      ? `${listboxId}-row-${activeRowIndex}`
      : undefined
    : undefined

  useEffect(() => {
    setActiveRowIndex(0)
  }, [querySignature])

  useEffect(() => {
    setActiveRowIndex((current) =>
      popupRows.length === 0 ? 0 : Math.min(current, popupRows.length - 1)
    )
  }, [popupRows.length])

  useEffect(() => {
    if (!activeDescendantId) return
    document
      .getElementById(activeDescendantId)
      ?.scrollIntoView?.({ block: "nearest" })
  }, [activeDescendantId])

  useEffect(() => {
    if (!editor) return

    const editorElement = editor.view.dom
    editorElement.setAttribute("aria-expanded", String(isOpen))
    if (isOpen) {
      editorElement.setAttribute("aria-controls", listboxId)
    } else {
      editorElement.removeAttribute("aria-controls")
    }
    if (activeDescendantId) {
      editorElement.setAttribute("aria-activedescendant", activeDescendantId)
    } else {
      editorElement.removeAttribute("aria-activedescendant")
    }
  }, [activeDescendantId, editor, isOpen, listboxId])

  const handleRetry = useCallback((filterKey: string) => {
    setOptionStates((current) => {
      const next = { ...current }
      delete next[filterKey]
      return next
    })
    setLoaderRevisions((current) => ({
      ...current,
      [filterKey]: (current[filterKey] ?? 0) + 1,
    }))
  }, [])

  const handleSelectOption = useCallback(
    (option: ResolvedFilterTagOption) => {
      if (!editor || !activeTextRange) return

      const replacementFrom = getReplacementFrom(
        editor,
        activeTextRange,
        option.displayLabel
      )
      const { selection } = editor.state
      const nextCharacter = selection.$from.parent.textBetween(
        selection.$from.parentOffset,
        Math.min(
          selection.$from.parentOffset + 1,
          selection.$from.parent.content.size
        )
      )
      const shouldAddSpace =
        !nextCharacter || !/^[\s.,;:!?)]/u.test(nextCharacter)
      const content = [
        {
          type: "filterTag",
          attrs: getTagAttributes(option.filterKey, option.value),
        },
        ...(shouldAddSpace ? [{ type: "text", text: " " }] : []),
      ]

      editor
        .chain()
        .focus()
        .insertContentAt(
          { from: replacementFrom, to: activeTextRange.to },
          content
        )
        .run()
      setActiveRowIndex(0)
      setAnnouncement(
        i18n.t("filters.tagPicker.added", {
          value: option.displayLabel,
          category: option.categoryLabel,
        })
      )
    },
    [activeTextRange, editor, getTagAttributes, i18n]
  )

  const activateRow = useCallback(
    (row: PopupRow | undefined) => {
      if (!row) return
      if (row.kind === "option") {
        handleSelectOption(row.option)
      } else if (row.kind === "retry") {
        handleRetry(row.filterKey)
      } else {
        row.loadMore()
      }
    },
    [handleRetry, handleSelectOption]
  )

  handleEditorKeyDownRef.current = (event) => {
    if (isComposingRef.current || event.isComposing) return false

    if (
      editor &&
      editor.state.selection.empty &&
      (event.key === "Backspace" || event.key === "Delete")
    ) {
      const { selection } = editor.state
      const adjacentNode =
        event.key === "Backspace"
          ? selection.$from.nodeBefore
          : selection.$from.nodeAfter

      if (adjacentNode?.type.name === "filterTag") {
        event.preventDefault()
        const from =
          event.key === "Backspace"
            ? selection.from - adjacentNode.nodeSize
            : selection.from
        editor.commands.deleteRange({
          from,
          to: from + adjacentNode.nodeSize,
        })
        return true
      }
    }

    if (event.key === "Escape" && isOpen) {
      event.preventDefault()
      setDismissedSignature(querySignature)
      return true
    }

    if (event.shiftKey && event.key === "Enter") {
      if (mode === "tags") {
        event.preventDefault()
        return true
      }
      return false
    }

    if (event.key === "ArrowDown" && isOpen && popupRows.length > 0) {
      event.preventDefault()
      setActiveRowIndex((current) =>
        current >= popupRows.length - 1 ? 0 : current + 1
      )
      return true
    }

    if (event.key === "ArrowUp" && isOpen && popupRows.length > 0) {
      event.preventDefault()
      setActiveRowIndex((current) =>
        current <= 0 ? popupRows.length - 1 : current - 1
      )
      return true
    }

    if (event.key === "Enter" && isOpen && activeRow) {
      event.preventDefault()
      activateRow(activeRow)
      return true
    }

    if (event.key === "Enter" && mode === "tags") {
      event.preventDefault()
      return true
    }

    return false
  }

  const virtualAnchorRef = useRef({
    getBoundingClientRect: () =>
      caretRectRef.current ?? new DOMRect(0, 0, 1, 1),
  })

  return (
    <DataTestIdWrapper dataTestId={dataTestId}>
      <div className="flex w-full flex-col gap-2 @container">
        {filterEntries.map(([filterKey, definition]) => {
          const sourceBased = hasSource(definition)
          const categorySelectIsOpen =
            openCategorySelectKeys.includes(filterKey)
          if (sourceBased && !remoteSearchIsCurrent && !categorySelectIsOpen) {
            return null
          }

          const loaderSearch = remoteSearchIsCurrent ? remoteSearch : undefined

          return (
            <FilterOptionsLoader
              key={`${filterKey}-${sourceBased ? (loaderSearch ?? "browse") : "local"}-${loaderRevisions[filterKey] ?? 0}`}
              filterKey={filterKey}
              definition={definition}
              search={sourceBased ? loaderSearch : undefined}
              onStateChange={handleOptionsStateChange}
            />
          )
        })}

        <span
          id={labelId}
          className="text-base font-medium text-f1-foreground"
          onMouseDown={(event) => {
            event.preventDefault()
            editor?.commands.focus()
          }}
        >
          {label}
        </span>

        <Popover
          open={isOpen}
          onOpenChange={(open) => {
            if (!open) setDismissedSignature(querySignature)
          }}
        >
          <PopoverAnchor virtualRef={virtualAnchorRef} />
          <div
            className={cn(
              "relative min-h-20 max-h-60 w-full cursor-text overflow-y-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background transition-colors",
              editorFocused &&
                !disabled &&
                "border-f1-border-selected ring-1 ring-f1-special-ring",
              disabled &&
                "cursor-not-allowed border-f1-border bg-f1-background-disabled"
            )}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                event.preventDefault()
                editor?.commands.focus("end")
              }
            }}
          >
            <EditorContent
              editor={editor}
              className={cn(
                "min-h-20 w-full p-2.5 text-base text-f1-foreground",
                "[&_.ProseMirror]:min-h-[3.75rem] [&_.ProseMirror]:whitespace-pre-wrap [&_.ProseMirror]:break-words [&_.ProseMirror]:outline-none",
                "[&_.is-editor-empty:first-child]:before:pointer-events-none [&_.is-editor-empty:first-child]:before:float-left [&_.is-editor-empty:first-child]:before:h-0 [&_.is-editor-empty:first-child]:before:text-f1-foreground-secondary [&_.is-editor-empty:first-child]:before:content-[attr(data-placeholder)]",
                disabled && "text-f1-foreground-disabled"
              )}
            />
          </div>

          <PopoverContent
            align="start"
            side="top"
            sideOffset={6}
            collisionPadding={8}
            className="max-h-60 w-64 max-w-[var(--radix-popover-content-available-width)] overflow-hidden rounded-lg border border-solid border-f1-border-secondary p-1 shadow-md motion-reduce:animate-none"
            onOpenAutoFocus={(event) => event.preventDefault()}
            onCloseAutoFocus={(event) => event.preventDefault()}
          >
            <div
              id={listboxId}
              role="listbox"
              aria-label={i18n.filters.tagPicker.availableOptions}
              aria-busy={isLoading}
              className="max-h-[calc(15rem-0.5rem)] overflow-y-auto"
            >
              {popupRows.map((row, rowIndex) => {
                const isActive = rowIndex === activeRowIndex
                const rowId = `${listboxId}-row-${rowIndex}`

                if (row.kind === "option") {
                  return (
                    <button
                      key={row.option.id}
                      id={rowId}
                      type="button"
                      role="option"
                      aria-selected="false"
                      tabIndex={-1}
                      className={cn(
                        "flex w-full cursor-pointer items-center gap-2 rounded border-0 bg-transparent p-2 text-left transition-colors",
                        isActive
                          ? "bg-f1-background-secondary ring-1 ring-inset ring-f1-border-selected"
                          : "hover:bg-f1-background-secondary-hover",
                        focusRing("focus-visible:ring-inset")
                      )}
                      onMouseEnter={() => setActiveRowIndex(rowIndex)}
                      onMouseDown={(event) => {
                        event.preventDefault()
                      }}
                      onClick={() => {
                        activateRow(row)
                      }}
                    >
                      <span
                        aria-hidden
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={getCategoryDotStyle(
                          getCategoryColor(row.option.categoryKey)
                        )}
                      />
                      <OneEllipsis className="min-w-0 flex-1 text-base font-medium text-f1-foreground">
                        {row.option.displayLabel}
                      </OneEllipsis>
                      <span className="shrink-0 text-sm text-f1-foreground-secondary">
                        {row.option.categoryLabel}
                      </span>
                    </button>
                  )
                }

                const label =
                  row.kind === "retry"
                    ? i18n.t("filters.tagPicker.retryCategory", {
                        category: row.categoryLabel,
                      })
                    : i18n.t("filters.tagPicker.loadMoreCategory", {
                        category: row.categoryLabel,
                      })

                return (
                  <button
                    key={`${row.kind}-${row.filterKey}`}
                    id={rowId}
                    type="button"
                    role="option"
                    aria-selected="false"
                    tabIndex={-1}
                    className={cn(
                      "w-full rounded border-0 bg-transparent p-2 text-left text-base font-medium transition-colors",
                      row.kind === "retry"
                        ? "text-f1-foreground-critical"
                        : "text-f1-foreground",
                      isActive
                        ? "bg-f1-background-secondary ring-1 ring-inset ring-f1-border-selected"
                        : "hover:bg-f1-background-secondary-hover",
                      focusRing("focus-visible:ring-inset")
                    )}
                    onMouseEnter={() => setActiveRowIndex(rowIndex)}
                    onMouseDown={(event) => {
                      event.preventDefault()
                    }}
                    onClick={() => {
                      activateRow(row)
                    }}
                  >
                    {label}
                  </button>
                )
              })}
            </div>

            {isLoading && (
              <div role="status" aria-live="polite">
                <span className="sr-only">
                  {i18n.filters.tagPicker.loadingOptions}
                </span>
                {visibleOptions.length === 0 &&
                  Array.from({ length: 3 }, (_, index) => (
                    <div
                      key={index}
                      aria-hidden
                      className="flex items-center gap-2 p-2"
                    >
                      <Skeleton className="h-2 w-2 shrink-0 rounded-full" />
                      <Skeleton
                        className={cn(
                          "h-4 rounded",
                          index === 1 ? "w-24" : "w-32"
                        )}
                      />
                    </div>
                  ))}
              </div>
            )}
          </PopoverContent>
        </Popover>

        <div className="grid w-full grid-cols-4 gap-2">
          {filterEntries.map(([filterKey, definition]) => (
            <CategoryFilterSelect
              key={filterKey}
              definition={definition}
              disabled={disabled}
              loading={optionStates[filterKey]?.isLoading ?? false}
              options={categorySelectOptions[filterKey] ?? []}
              value={
                categorySelectValues[filterKey] ??
                selectedCategoryValues[filterKey] ??
                []
              }
              onChange={(nextValues, selectedOptions) => {
                categorySelectValuesRef.current = {
                  ...categorySelectValuesRef.current,
                  [filterKey]: nextValues,
                }
                setCategorySelectValues((current) => ({
                  ...current,
                  [filterKey]: nextValues,
                }))

                const labelOverrides = Object.fromEntries(
                  selectedOptions.flatMap((option) => {
                    const selection = decodeCategoryFilterSelection(
                      option.value
                    )
                    return selection
                      ? [
                          [
                            optionIdentity(
                              selection.filterKey,
                              selection.value
                            ),
                            option.label,
                          ],
                        ]
                      : []
                  })
                )
                if (Object.keys(labelOverrides).length > 0) {
                  setSelectedLabelOverrides((current) => ({
                    ...current,
                    ...labelOverrides,
                  }))
                }
              }}
              onOpenChange={(open) =>
                handleCategorySelectOpenChange(filterKey, open)
              }
            />
          ))}
        </div>

        <p id={keyboardHintId} className="text-xs text-f1-foreground-secondary">
          {mode === "tags"
            ? i18n.filters.tagPicker.keyboardHintTags
            : i18n.filters.tagPicker.keyboardHint}
        </p>
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </span>
        {failedCategoryLabels.length > 0 && (
          <span className="sr-only" role="status" aria-live="polite">
            {failedCategoryLabels
              .map((category) =>
                i18n.t("filters.tagPicker.failedToLoad", { category })
              )
              .join(". ")}
          </span>
        )}
      </div>
    </DataTestIdWrapper>
  )
}

_F0FilterTagPicker.displayName = "F0FilterTagPicker"

export const F0FilterTagPicker = _F0FilterTagPicker as <
  Filters extends F0FilterTagPickerFiltersDefinition,
>(
  props: F0FilterTagPickerProps<Filters>
) => ReactElement
