import { defaultTranslations } from "@factorialco/f0-react"

/**
 * Global UI language for the prototype shell. Drives both the F0 component
 * "chrome" (search, filters, table empty states, date pickers…) via the F0
 * provider's `i18n.translations`, and date/number formatting via its
 * `l10n.locale`. Hand-written page content is NOT translated here — a screen
 * only switches its own copy if it was built bilingual (see e.g. the
 * `spending` prototype's `language` state).
 */
export type AppLocale = "en" | "es"

/** Recursive plain-object merge: `override` wins, everything else falls back. */
function deepMerge<T>(base: T, override: unknown): T {
  if (
    typeof base !== "object" ||
    base === null ||
    Array.isArray(base) ||
    typeof override !== "object" ||
    override === null ||
    Array.isArray(override)
  ) {
    return override === undefined ? base : (override as T)
  }
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) }
  for (const [key, value] of Object.entries(
    override as Record<string, unknown>
  )) {
    out[key] = deepMerge((base as Record<string, unknown>)[key], value)
  }
  return out as T
}

/**
 * Spanish overrides for the F0 strings that actually surface in these
 * prototypes (data collections, filters, date pickers, common actions). Merged
 * on top of `defaultTranslations`, so any key we don't translate (e.g. country
 * names) keeps the English default instead of disappearing.
 */
const esOverrides = {
  inputs: {
    password: { show: "Mostrar contraseña", hide: "Ocultar contraseña" },
    private: { show: "Mostrar {{label}}", hide: "Ocultar {{label}}" },
  },
  link: { opensInNewTab: "se abre en una pestaña nueva" },
  actions: {
    add: "Añadir",
    edit: "Editar",
    save: "Guardar",
    send: "Enviar",
    cancel: "Cancelar",
    ok: "Aceptar",
    delete: "Eliminar",
    copy: "Copiar",
    paste: "Pegar",
    close: "Cerrar",
    collapse: "Contraer",
    collapseItem: "Contraer {{title}}",
    expand: "Expandir",
    expandItem: "Expandir {{title}}",
    showAll: "Mostrar todo",
    showLess: "Mostrar menos",
    seeMore: "Ver más",
    skipToContent: "Saltar al contenido",
    view: "Ver",
    unselect: "Deseleccionar",
    search: "Buscar",
    clear: "Limpiar",
    more: "Más",
    moveUp: "Mover arriba",
    moveDown: "Mover abajo",
    thumbsUp: "Me gusta",
    thumbsDown: "No me gusta",
    other: "Otras acciones",
    toggle: "Alternar",
    toggleDropdownMenu: "Alternar menú desplegable",
    selectAll: "Seleccionar todo",
    selectAllItems: "Seleccionar los {{total}} elementos",
    apply: "Aplicar",
    saveAsPreset: "Guardar vista",
    editPreset: "Editar vista",
  },
  status: {
    selected: {
      singular: "Seleccionado",
      plural: "Seleccionados",
      all: "Todos seleccionados",
      allOnPage: "Los {{count}} elementos de esta página están seleccionados",
      selectAllItems: "Seleccionar los {{total}} elementos",
      allItemsSelected: "Los {{total}} elementos seleccionados",
    },
    noItemsSelected: "Ningún elemento seleccionado",
  },
  filters: {
    searchPlaceholder: "Buscar filtros...",
    inFilter: { searchPlaceholder: "Buscar opciones..." },
    activeFilters: "Filtros activos: {{filters}}",
    filteringBy: "Filtrando por {{label}}",
    availableFilters: "Filtros disponibles",
    label: "Filtros",
    applyFilters: "Aplicar filtros",
    resultsFor: {
      one: "{{count}} resultado para:",
      other: "{{count}} resultados para:",
    },
    applySelection: "Aplicar selección",
    cancel: "Cancelar",
    failedToLoadOptions: "No se pudieron cargar las opciones",
    retry: "Reintentar",
    number: {
      value: "Valor",
      equal: "Igual a",
      equalTo: "Igual a {{value}}",
      lessOrEqual: "Menor o igual que",
      lessThan: "Menor que",
      greaterOrEqual: "Mayor o igual que",
      greaterThan: "Mayor que",
      rangeTitle: "Usar rango",
    },
    search: { relaxed: "Flexible", strict: "Estricto" },
    selectAll: "Seleccionar todo",
    clear: "Limpiar",
  },
  toc: { search: "Buscar..." },
  collections: {
    sorting: {
      noSorting: "Sin ordenar",
      toggleDirection: "Alternar dirección de orden",
      sortBy: "Ordenar por",
    },
    grouping: {
      noGrouping: "Sin agrupar",
      groupBy: "Agrupar por",
      toggleDirection: "Alternar dirección",
    },
    actions: { actions: "Acciones" },
    presets: {
      createTitle: "Guardar vista",
      createDescription:
        "Guarda los filtros, el orden, la agrupación y las columnas actuales como una vista.",
      updateTitle: "Actualizar vista",
      updateDescription: "Actualiza el nombre y la descripción de esta vista.",
      nameLabel: "Título",
      namePlaceholder: "Nombre de la vista",
      duplicateName: "Ya existe una vista con este nombre",
      descriptionLabel: "Descripción",
      descriptionPlaceholder: "Descripción opcional",
      save: "Guardar",
      delete: "Eliminar",
      share: "Compartir vista",
      copiedToClipboard: "Copiado al portapapeles",
      cancel: "Cancelar",
    },
    visualizations: {
      table: "Tabla",
      editableTable: "Tabla editable",
      card: "Tarjetas",
      list: "Lista",
      kanban: "Kanban",
      graph: "Gráfico",
      pagination: { of: "de" },
      settings: "Ajustes de {{visualizationName}}",
      reset: "Restablecer",
      viewSelectorLabel: "Seleccionar vista",
    },
    table: {
      settings: {
        showAllColumns: "Mostrar todas",
        hideAllColumns: "Ocultar todas",
      },
    },
    editableTable: {
      errors: { saveFailed: "Error al guardar" },
      addRow: "Añadir fila",
    },
    itemsCount: "elementos",
    emptyStates: {
      noData: { title: "Sin datos", description: "No hay datos disponibles" },
      noResults: {
        title: "Sin resultados",
        description:
          "No se encontraron resultados. Prueba otra búsqueda o limpia los filtros",
        clearFilters: "Limpiar filtros",
      },
      error: {
        title: "Error",
        description: "Se produjo un error al cargar los datos",
        retry: "Reintentar",
      },
    },
    summaries: { types: { sum: "suma", count: "recuento" } },
    export: {
      label: "Exportar a CSV",
      description: "Descargar todos los datos como un archivo CSV",
    },
  },
  date: {
    from: "Desde",
    to: "Hasta",
    none: "Ninguno",
    date: "Fecha",
    custom: "Periodo personalizado",
    selectDate: "Seleccionar fecha",
    compareTo: "Comparar con",
    presets: {
      last7Days: "Últimos 7 días",
      last30Days: "Últimos 30 días",
      last3Months: "Últimos 3 meses",
      last6Months: "Últimos 6 meses",
      lastYear: "Último año",
      last3Years: "Últimos 3 años",
      last100Years: "Últimos 100 años",
    },
    range: "Rango",
    selectedBy: "Seleccionado por",
    groups: {
      today: "Hoy",
      yesterday: "Ayer",
      lastWeek: "La semana pasada",
      lastMonth: "El mes pasado",
      other: "Otros",
    },
    granularities: {
      day: { currentDate: "Hoy", label: "Día" },
      week: {
        currentDate: "Esta semana",
        label: "Semana",
        long: "Semana del {{day}} {{month}} {{year}}",
        longSingular: "Semana del {{date}}",
        longPlural: "Semanas del {{date}}",
      },
      month: { currentDate: "Este mes", label: "Mes" },
      quarter: { currentDate: "Este trimestre", label: "Trimestre" },
      halfyear: { currentDate: "Este semestre", label: "Semestre" },
      year: { currentDate: "Este año", label: "Año" },
      range: { currentDate: "Hoy", label: "Rango" },
    },
    month: {
      january: "Enero",
      february: "Febrero",
      march: "Marzo",
      april: "Abril",
      may: "Mayo",
      june: "Junio",
      july: "Julio",
      august: "Agosto",
      september: "Septiembre",
      october: "Octubre",
      november: "Noviembre",
      december: "Diciembre",
    },
  },
  select: {
    noResults: "No se encontraron resultados",
    loadingMore: "Cargando...",
    applySelection: "Aplicar selección",
    create: "Crear",
    createWithValue: 'Crear "{{value}}"',
    createEmptyMessage: "Prueba otra búsqueda o crea un elemento nuevo",
  },
}

/** English uses F0's defaults as-is; Spanish merges our overrides on top. */
const esTranslations = deepMerge(defaultTranslations, esOverrides)

/** Translations dictionary for the F0 provider, keyed by app locale. */
export const translationsForLocale: Record<
  AppLocale,
  typeof defaultTranslations
> = {
  en: defaultTranslations,
  es: esTranslations,
}
