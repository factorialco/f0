import { useControllableState } from "@radix-ui/react-use-controllable-state"
import { baseColors } from "@factorialco/f0-core"
import type { ExpressionSpecification } from "maplibre-gl"
import {
  type MouseEvent,
  type Ref,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react"

import { F0Avatar } from "@/components/avatars/F0Avatar"
import { F0Button } from "@/components/F0Button"
import { F0Heading } from "@/components/F0Heading"
import { F0Icon, type IconType } from "@/components/F0Icon"
import { F0Text } from "@/components/F0Text"
import { ChevronDown, ChevronUp, Pin } from "@/icons/app"
import { F0DataChart } from "@/kits/F0DataChart"
import {
  paletteColor,
  resolveChartColorToken,
} from "@/kits/F0DataChart/utils/colors"
import { useContainerSize } from "@/kits/F0DataChart/utils/useContainerSize"
import { cn, focusRing } from "@/lib/utils"
import {
  F0Map,
  f0MapDensityColorSteps,
  f0MapDensityColors,
  f0MapStyles,
  type F0MapDensityLevel,
  type F0MapPoint,
  type F0MapStylePair,
} from "@/patterns/F0Map"
import { Text } from "@/ui/Text"

import type {
  DashboardLocationConfig,
  DashboardLocationData,
  DashboardLocationPoint,
  DashboardLocationSummaryTone,
} from "../../types"

const DEFAULT_DENSITY_SCALE = { mediumAt: 6, highAt: 16 }
const DEFAULT_FORMAT_COUNT = (value: number) => value.toLocaleString()
const normalizeCount = (value: number) =>
  Number.isFinite(value) ? Math.max(0, value) : 0
const densityColor = (level: F0MapDensityLevel) => {
  const color = f0MapDensityColors[level]
  const step = f0MapDensityColorSteps[level]
  return step === 10
    ? `hsl(${baseColors[color][50]} / 0.1)`
    : `hsl(${baseColors[color][step]})`
}
const DENSITY_COLORS: Record<F0MapDensityLevel, string> = {
  low: densityColor("low"),
  medium: densityColor("medium"),
  high: densityColor("high"),
}
const TIMELINE_GRID_LINES = [0, 25, 50, 75] as const
const TIMELINE_GRID_BACKGROUND =
  "repeating-linear-gradient(to right, hsl(var(--neutral-30)) 0, hsl(var(--neutral-30)) 1px, transparent 1px, transparent 11px)"
type DetailsPanelState = "responsive" | "open" | "closed"

const densityLevel = (
  value: number,
  scale: NonNullable<DashboardLocationConfig["densityScale"]>
): F0MapDensityLevel => {
  const { mediumAt, highAt } = scale
  if (value >= highAt) return "high"
  if (value >= mediumAt) return "medium"
  return "low"
}

const subdueMapLabels = (
  style: F0MapStylePair["light"]
): F0MapStylePair["light"] => {
  if (typeof style === "string") return style

  return {
    ...style,
    layers: style.layers.map((layer) => {
      if (layer.type !== "symbol") return layer

      const currentOpacity = layer.paint?.["text-opacity"]
      const textOpacity =
        currentOpacity === undefined
          ? 0.38
          : typeof currentOpacity === "number"
            ? Math.min(currentOpacity, 0.38)
            : Array.isArray(currentOpacity)
              ? (["*", currentOpacity, 0.38] as ExpressionSpecification)
              : 0.38

      return {
        ...layer,
        paint: {
          ...layer.paint,
          "text-opacity": textOpacity,
        },
      }
    }),
  }
}

const locationMapStyle = (style: F0MapStylePair): F0MapStylePair => ({
  light: subdueMapLabels(style.light),
  dark: subdueMapLabels(style.dark),
})

const Summary = ({
  label,
  value,
  icon,
  tone,
  density = "regular",
}: {
  label: string
  value: string
  icon: IconType
  tone: DashboardLocationSummaryTone
  density?: "regular" | "compact" | "responsive"
}) => (
  <div
    className={cn(
      "min-w-0 px-2",
      density === "regular" && "py-2.5 @[520px]:px-3",
      density === "compact" && "py-1.5 @[520px]:px-2.5",
      density === "responsive" &&
        "flex h-full flex-col justify-center py-1.5 @[520px]:px-2.5 @[896px]:px-3"
    )}
  >
    <dt>
      <F0Text content={label} variant="description" ellipsis markdown={false} />
    </dt>
    <dd
      className={cn(
        "flex min-w-0 items-center gap-1",
        density === "regular" && "mt-1 @[520px]:gap-2",
        density === "compact" && "mt-0.5",
        density === "responsive" && "mt-0.5 @[896px]:mt-1 @[896px]:gap-2"
      )}
      title={value}
    >
      <span
        className={cn(
          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
          density === "regular" && "@[520px]:h-7 @[520px]:w-7",
          density === "responsive" && "@[896px]:h-7 @[896px]:w-7",
          tone === "positive" && "bg-f1-background-positive",
          tone === "critical" && "bg-f1-background-critical",
          tone === "selected" && "bg-f1-background-selected",
          tone === "default" && "bg-f1-background-secondary"
        )}
      >
        <F0Icon icon={icon} size="sm" color={tone} aria-hidden="true" />
      </span>
      <span
        className={cn(
          "min-w-0 truncate text-sm font-semibold leading-tight tracking-tight tabular-nums text-f1-foreground",
          density === "regular" && "@[520px]:text-base",
          density === "responsive" && "@[896px]:text-base"
        )}
      >
        {value}
      </span>
    </dd>
  </div>
)

const DensityLegend = ({
  config,
  scale,
  embedded = false,
}: {
  config: DashboardLocationConfig
  scale: NonNullable<DashboardLocationConfig["densityScale"]>
  embedded?: boolean
}) => (
  <div
    className={cn(
      "pointer-events-none items-center gap-3 rounded-lg border border-solid border-f1-border bg-f1-background px-3 py-2 shadow-sm",
      embedded
        ? "relative flex flex-wrap"
        : "relative z-20 flex max-w-full shrink-0 self-start flex-wrap gap-x-2.5 gap-y-1 px-2.5 py-1.5 @[640px]:absolute @[640px]:bottom-[154px] @[640px]:left-4 @[640px]:max-w-[calc(100%_-_408px)]"
    )}
  >
    <span className="text-xs font-medium text-f1-foreground">
      {config.densityLabel}
    </span>
    {[
      {
        label: config.densityLowLabel(scale.mediumAt),
        color: DENSITY_COLORS.low,
      },
      {
        label: config.densityMediumLabel(scale.mediumAt, scale.highAt),
        color: DENSITY_COLORS.medium,
      },
      {
        label: config.densityHighLabel(scale.highAt),
        color: DENSITY_COLORS.high,
      },
    ].map((item) => (
      <span
        key={item.label}
        className="flex items-center gap-1 text-xs text-f1-foreground-secondary"
      >
        <span
          aria-hidden="true"
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: item.color }}
        />
        {item.label}
      </span>
    ))}
  </div>
)

const LocationDetailsPanel = ({
  location,
  config,
  id,
  embedded = false,
  panelState = "responsive",
  onDismiss,
  dismissRef,
}: {
  location: DashboardLocationPoint | undefined
  config: DashboardLocationConfig
  id?: string
  embedded?: boolean
  panelState?: DetailsPanelState
  onDismiss?: (event: MouseEvent<HTMLElement>) => void
  dismissRef?: Ref<HTMLButtonElement | HTMLAnchorElement>
}) => (
  <aside
    id={id}
    data-location-details=""
    aria-label={location?.name ?? config.selectLocationLabel}
    className={cn(
      "pointer-events-auto min-h-0 flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background",
      embedded
        ? "relative flex max-h-[368px] self-start"
        : cn(
            "relative z-20 max-h-full w-full flex-initial @[480px]:w-[320px] @[640px]:absolute @[640px]:right-4 @[640px]:top-[96px] @[640px]:max-h-[calc(100%_-_250px)] @[720px]:top-4 @[720px]:w-[calc(50%_-_20px)] @[720px]:max-h-[calc(100%_-_170px)] @[896px]:w-[400px]",
            panelState === "open"
              ? "flex"
              : panelState === "closed"
                ? "hidden"
                : "hidden @[720px]:flex"
          )
    )}
  >
    <div className="flex h-[64px] shrink-0 items-center border-0 border-b border-solid border-f1-border-secondary px-3 py-2">
      <div className="flex w-full min-w-0 items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-selected">
          <F0Icon icon={Pin} size="sm" color="selected" aria-hidden="true" />
        </span>
        <div className="min-w-0 flex-1">
          {location ? (
            <div className="min-w-0">
              <Text
                as="span"
                content={location.name}
                variant="heading"
                ellipsis
                markdown={false}
              />
              <F0Text
                content={location.detailsLabel}
                variant="description"
                markdown={false}
              />
            </div>
          ) : (
            <div>
              <F0Text
                content={config.selectLocationLabel}
                variant="description"
                markdown={false}
              />
            </div>
          )}
        </div>
        {!embedded && panelState !== "closed" && onDismiss && (
          <span className="shrink-0">
            <F0Button
              ref={dismissRef}
              label={config.closeLocationDetailsLabel}
              icon={ChevronUp}
              hideLabel
              size="sm"
              variant="ghost"
              onClick={onDismiss}
            />
          </span>
        )}
      </div>
      <span className="sr-only" aria-live="polite">
        {location
          ? `${location.name}, ${location.detailsLabel}`
          : config.selectLocationLabel}
      </span>
    </div>

    <ul
      aria-label={location?.detailsLabel}
      tabIndex={location?.details.length ? 0 : undefined}
      className={cn(
        "min-h-0 flex-1 divide-y divide-f1-border-secondary overflow-y-auto overscroll-contain px-3",
        location?.details.length && focusRing("rounded-b-xl ring-inset")
      )}
    >
      {location?.details.map((detail) => (
        <li
          key={detail.id}
          className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-2.5 py-2.5"
        >
          <F0Avatar size="sm" avatar={detail.avatar} />
          <div className="min-w-0 flex-1">
            <F0Text
              content={detail.title}
              variant="label"
              ellipsis
              markdown={false}
            />
            {detail.description && (
              <F0Text
                content={detail.description}
                variant="description"
                ellipsis
                markdown={false}
              />
            )}
          </div>
          <div
            data-location-detail-values=""
            className="flex max-w-[55%] shrink-0 flex-wrap items-center justify-end gap-x-3 gap-y-1 text-sm tabular-nums @[896px]:max-w-none @[896px]:flex-nowrap"
          >
            {detail.values.map((detailValue) => (
              <span
                key={detailValue.label}
                className={cn(
                  "flex items-center gap-1 whitespace-nowrap",
                  detailValue.tone === "positive"
                    ? "text-f1-foreground-positive"
                    : detailValue.tone === "critical"
                      ? "text-f1-foreground-critical"
                      : "text-f1-foreground"
                )}
              >
                {detailValue.icon && (
                  <F0Icon
                    icon={detailValue.icon}
                    size="xs"
                    color={detailValue.iconColor ?? "default"}
                    aria-hidden="true"
                  />
                )}
                <span className="sr-only">{detailValue.label}: </span>
                {detailValue.value}
              </span>
            ))}
          </div>
        </li>
      ))}
    </ul>
  </aside>
)

const LocationDetailsTrigger = ({
  location,
  config,
  controlsId,
  onOpen,
  triggerRef,
  responsiveDefault,
}: {
  location: DashboardLocationPoint
  config: DashboardLocationConfig
  controlsId: string
  onOpen: (event: MouseEvent<HTMLButtonElement>) => void
  triggerRef: Ref<HTMLButtonElement>
  responsiveDefault: boolean
}) => (
  <button
    ref={triggerRef}
    data-location-details-trigger=""
    type="button"
    aria-label={config.viewLocationDetailsLabel(location.name)}
    aria-describedby={`${controlsId}-trigger-description`}
    aria-controls={controlsId}
    aria-expanded={false}
    onClick={onOpen}
    className={cn(
      "pointer-events-auto absolute right-4 top-[84px] z-20 flex h-[64px] max-w-[calc(100%_-_32px)] items-center gap-2.5 rounded-lg border border-solid border-f1-border-secondary bg-f1-background px-3 py-2 text-left @[720px]:top-4 @[720px]:w-[calc(50%_-_20px)] @[720px]:max-w-none @[896px]:w-[400px]",
      responsiveDefault && "@[720px]:hidden",
      focusRing()
    )}
  >
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-f1-background-selected">
      <F0Icon icon={Pin} size="sm" color="selected" aria-hidden="true" />
    </span>
    <span className="min-w-0 flex-1">
      <Text
        as="span"
        content={location.name}
        variant="heading"
        ellipsis
        markdown={false}
      />
      <span id={`${controlsId}-trigger-description`}>
        <F0Text
          as="span"
          content={location.detailsLabel}
          variant="description"
          ellipsis
          markdown={false}
        />
      </span>
    </span>
    <F0Icon icon={ChevronDown} size="sm" color="default" aria-hidden="true" />
  </button>
)

const LocationTimeline = ({
  timeline,
  config,
  embedded = false,
}: {
  timeline: DashboardLocationData["timeline"]
  config: DashboardLocationConfig
  embedded?: boolean
}) => {
  const categories = [...timeline.categories]
  const series = timeline.series.map((item) => ({
    ...item,
    data: [...item.data],
  }))
  const lastIndex = Math.max(0, categories.length - 1)
  const fineStep = Math.max(1, Math.ceil(lastIndex / 12))
  const mediumStep = Math.max(fineStep, Math.ceil(lastIndex / 6))
  const coarseStep = Math.max(mediumStep, Math.ceil(lastIndex / 4))
  const axisIndexes = categories
    .map((_, index) => index)
    .filter(
      (index) => index === 0 || index === lastIndex || index % fineStep === 0
    )

  return (
    <figure
      data-location-timeline=""
      className={cn(
        "pointer-events-auto rounded-xl border border-solid border-f1-border-secondary bg-f1-background px-3 pb-1.5 pt-2.5 shadow-lg",
        embedded
          ? "relative"
          : "absolute bottom-4 left-4 right-4 z-20 h-[126px]"
      )}
    >
      <figcaption className="flex items-center justify-between gap-3">
        <F0Text
          content={config.timelineTitle}
          variant="label"
          markdown={false}
        />
        <ul
          aria-label={series.map((item) => item.name).join(", ")}
          className="flex shrink-0 list-none items-center gap-3"
        >
          {series.map((item, index) => {
            const color = item.color
              ? resolveChartColorToken(item.color)
              : paletteColor(index)
            return (
              <li key={item.name} className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    "w-4",
                    item.dashed
                      ? "border-0 border-t-2 border-dashed"
                      : "h-0.5 rounded-full"
                  )}
                  style={
                    item.dashed
                      ? { borderColor: color }
                      : { backgroundColor: color }
                  }
                />
                <F0Text
                  content={item.name}
                  variant="description"
                  markdown={false}
                />
              </li>
            )
          })}
        </ul>
      </figcaption>

      <div className="relative h-[74px]" aria-hidden="true">
        <div className="pointer-events-none absolute bottom-1 left-0 right-0 top-2 z-0">
          {TIMELINE_GRID_LINES.map((position) => (
            <span
              key={position}
              data-grid-line
              className="absolute left-0 right-0 h-px after:absolute after:right-0 after:top-0 after:h-px after:w-px after:bg-f1-border"
              style={{
                top: `${position}%`,
                backgroundImage: TIMELINE_GRID_BACKGROUND,
              }}
            />
          ))}
        </div>
        <F0DataChart
          type="line"
          categories={categories}
          series={series}
          lineType="smooth"
          showArea={false}
          showGrid={false}
          showLegend={false}
          valueFormatter={() => ""}
          tooltipValueFormatter={(value) => `${value}`}
          categoryFormatter={() => ""}
          echartsOptions={{
            grid: {
              left: 0,
              right: 0,
              top: 8,
              bottom: 4,
              containLabel: false,
              outerBoundsMode: "none",
            },
          }}
        />
      </div>
      <ol aria-hidden="true" className="relative h-4 list-none">
        {axisIndexes.map((index) => {
          const isEndpoint = index === 0 || index === lastIndex
          const visibility =
            isEndpoint || index % coarseStep === 0
              ? "inline"
              : index % mediumStep === 0
                ? "hidden @3xl:inline"
                : "hidden @5xl:inline"
          return (
            <li
              key={`${categories[index]}-${index}`}
              className={cn(
                "absolute top-0 text-xs text-f1-foreground-secondary",
                index === 0
                  ? "translate-x-0"
                  : index === lastIndex
                    ? "-translate-x-full"
                    : "-translate-x-1/2"
              )}
              style={{
                left: `${lastIndex === 0 ? 0 : (index / lastIndex) * 100}%`,
              }}
            >
              <span className={visibility}>{categories[index]}</span>
            </li>
          )
        })}
      </ol>
      <ul aria-label={config.timelineAriaLabel} className="sr-only">
        {categories.map((category, index) => (
          <li key={`${category}-${index}`}>
            {timeline.accessibleLabels?.[index] ??
              `${category}: ${series
                .map((item) => `${item.name} ${item.data[index] ?? 0}`)
                .join(", ")}`}
          </li>
        ))}
      </ul>
    </figure>
  )
}

const MapFallback = ({
  locations,
  selectedLocationId,
  onSelect,
  config,
  formatCount,
  densityScale,
}: {
  locations: readonly DashboardLocationPoint[]
  selectedLocationId: string | null
  onSelect: (id: string) => void
  config: DashboardLocationConfig
  formatCount: (value: number) => string
  densityScale: NonNullable<DashboardLocationConfig["densityScale"]>
}) => (
  <section
    role="region"
    aria-label={config.mapAriaLabel}
    className="flex h-[368px] min-h-0 flex-col overflow-hidden rounded-xl border border-solid border-f1-border-secondary bg-f1-background shadow-sm"
  >
    <div className="border-0 border-b border-solid border-f1-border-secondary px-4 py-3">
      <F0Heading
        as="h4"
        content={config.mapAriaLabel}
        variant="heading"
        ellipsis
      />
    </div>
    {locations.length > 0 ? (
      <ul className="grid min-h-0 flex-1 grid-cols-1 gap-2 overflow-y-auto p-3 @3xl:grid-cols-2">
        {locations.map((location) => (
          <li key={location.id}>
            <button
              type="button"
              aria-pressed={selectedLocationId === location.id}
              onClick={() => onSelect(location.id)}
              className={cn(
                "flex w-full items-center justify-between gap-3 rounded-lg border border-solid px-3 py-2.5 text-left hover:bg-f1-background-hover",
                selectedLocationId === location.id
                  ? "border-f1-border-selected bg-f1-background-selected"
                  : "border-f1-border-secondary bg-f1-background",
                focusRing()
              )}
            >
              <F0Text
                content={location.name}
                variant="label"
                ellipsis
                markdown={false}
              />
              <span className="shrink-0 text-sm tabular-nums text-f1-foreground-secondary">
                <span className="sr-only">{config.densityLabel}: </span>
                {formatCount(normalizeCount(location.density))}
              </span>
            </button>
          </li>
        ))}
      </ul>
    ) : (
      <p className="flex min-h-[120px] items-center justify-center px-4 text-sm text-f1-foreground-secondary">
        {config.noDataLabel}
      </p>
    )}
    {locations.length > 0 && (
      <div className="border-0 border-t border-solid border-f1-border-secondary p-3">
        <DensityLegend config={config} scale={densityScale} embedded />
      </div>
    )}
  </section>
)

export interface LocationVisualizationProps {
  data: DashboardLocationData
  config: DashboardLocationConfig
  selectedLocationId?: string | null
  defaultSelectedLocationId?: string | null
  onLocationSelect?: (locationId: string | null) => void
}

export function LocationVisualization({
  data,
  config,
  selectedLocationId,
  defaultSelectedLocationId,
  onLocationSelect,
}: LocationVisualizationProps) {
  const { locations, summary, timeline } = data
  const {
    densityScale = DEFAULT_DENSITY_SCALE,
    formatDensity = DEFAULT_FORMAT_COUNT,
    formatSummaryValue = DEFAULT_FORMAT_COUNT,
  } = config
  const hasExplicitDefault = defaultSelectedLocationId !== undefined
  const [selection, setSelection] = useControllableState<string | null>({
    prop: selectedLocationId,
    defaultProp: hasExplicitDefault
      ? defaultSelectedLocationId
      : (locations[0]?.id ?? null),
    onChange: onLocationSelect,
  })
  const previouslyHadLocations = useRef(locations.length > 0)
  const [mapFallbackVisible, setMapFallbackVisible] = useState(false)
  const [detailsPanelState, setDetailsPanelState] =
    useState<DetailsPanelState>("responsive")
  const widgetRef = useRef<HTMLElement>(null)
  const detailsTriggerRef = useRef<HTMLButtonElement>(null)
  const detailsDismissRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const detailsPanelId = useId()
  const { width: widgetWidth } = useContainerSize(widgetRef)

  useEffect(() => {
    if (detailsPanelState !== "responsive" || widgetWidth <= 0) return
    setDetailsPanelState(widgetWidth >= 720 ? "open" : "closed")
  }, [detailsPanelState, widgetWidth])

  useEffect(() => {
    if (locations.length === 0) setDetailsPanelState("responsive")
  }, [locations.length])

  useEffect(() => {
    const hadLocations = previouslyHadLocations.current
    previouslyHadLocations.current = locations.length > 0
    if (selectedLocationId !== undefined) return
    if (locations.length === 0) {
      if (hadLocations && selection !== null) setSelection(null)
      return
    }
    const selectionExists = locations.some(
      (location) => location.id === selection
    )
    if (selection !== null && !selectionExists) {
      setSelection(locations[0].id)
      return
    }
    if (selection === null && !hadLocations && !hasExplicitDefault) {
      setSelection(locations[0].id)
    }
  }, [
    hasExplicitDefault,
    locations,
    selectedLocationId,
    selection,
    setSelection,
  ])

  const resolvedDensityScale = useMemo(() => {
    if (
      densityScale &&
      Number.isFinite(densityScale.mediumAt) &&
      Number.isFinite(densityScale.highAt) &&
      densityScale.highAt > densityScale.mediumAt
    ) {
      return densityScale
    }
    return DEFAULT_DENSITY_SCALE
  }, [densityScale])

  const selectedLocation = locations.find(
    (location) => location.id === selection
  )
  const markers = useMemo<F0MapPoint[]>(
    () =>
      locations.map((location) => {
        const density = normalizeCount(location.density)
        return {
          id: location.id,
          coordinates: location.coordinates,
          label: location.name,
          ariaLabel: `${location.name} · ${config.densityLabel}: ${formatDensity(density)}`,
          variant: "density",
          value: density,
          level: densityLevel(density, resolvedDensityScale),
        }
      }),
    [config.densityLabel, formatDensity, locations, resolvedDensityScale]
  )
  const resolvedMapStyle = useMemo(
    () => locationMapStyle(config.mapStyle ?? f0MapStyles),
    [config.mapStyle]
  )
  const handleLocationSelect = (locationId: string | null) => {
    setSelection(locationId)
    setDetailsPanelState(locationId === null ? "responsive" : "open")
  }
  const openDetails = (event: MouseEvent<HTMLButtonElement>) => {
    setDetailsPanelState("open")
    if (event.detail === 0) {
      queueMicrotask(() => detailsDismissRef.current?.focus())
    }
  }
  const closeDetails = (event: MouseEvent<HTMLElement>) => {
    setDetailsPanelState("closed")
    if (event.detail === 0) {
      queueMicrotask(() => detailsTriggerRef.current?.focus())
    }
  }
  const summaryDensity = mapFallbackVisible ? "regular" : "responsive"
  const formatSummary = (value: string | number | undefined) =>
    typeof value === "number"
      ? formatSummaryValue(value)
      : value === undefined
        ? "—"
        : value

  return (
    <section
      ref={widgetRef}
      data-location-visualization=""
      className={cn(
        "@container relative h-full min-h-[560px] w-full bg-f1-background-secondary",
        mapFallbackVisible ? "overflow-auto p-4" : "overflow-hidden"
      )}
    >
      <dl
        data-location-summary=""
        className={cn(
          "grid grid-cols-3 divide-x divide-f1-border-secondary overflow-hidden rounded-lg border border-solid border-f1-border-secondary bg-f1-background shadow-sm @[896px]:grid-cols-[120px_120px_160px]",
          mapFallbackVisible
            ? "relative mt-3 w-full @4xl:w-[400px]"
            : "absolute left-4 top-4 z-20 h-[64px] w-[calc(100%_-_32px)] @[720px]:w-[calc(50%_-_20px)] @[896px]:w-[400px]"
        )}
      >
        {config.summaryMetrics.map((metric) => (
          <Summary
            key={metric.id}
            label={metric.label}
            value={formatSummary(summary[metric.id])}
            icon={metric.icon}
            tone={metric.tone ?? "default"}
            density={summaryDensity}
          />
        ))}
      </dl>

      {!mapFallbackVisible && (
        <div className="absolute inset-0">
          <F0Map
            markers={markers}
            selectedMarkerId={selection}
            onMarkerSelect={handleLocationSelect}
            fitToMarkers
            fullScreen
            showControls={false}
            mapStyle={resolvedMapStyle}
            loading={false}
            onFallbackChange={setMapFallbackVisible}
            ariaLabel={config.mapAriaLabel}
          />
        </div>
      )}

      {mapFallbackVisible && (
        <div
          data-location-fallback-layout=""
          className={cn(
            "mt-4 grid min-h-0 gap-4",
            selectedLocation && "@4xl:grid-cols-[minmax(0,1fr)_400px]"
          )}
        >
          <MapFallback
            locations={locations}
            selectedLocationId={selection}
            onSelect={handleLocationSelect}
            config={config}
            formatCount={formatDensity}
            densityScale={resolvedDensityScale}
          />
          {selectedLocation && (
            <LocationDetailsPanel
              location={selectedLocation}
              config={config}
              id={detailsPanelId}
              embedded
            />
          )}
          <div className={cn(selectedLocation && "@4xl:col-span-2")}>
            <LocationTimeline timeline={timeline} config={config} embedded />
          </div>
        </div>
      )}

      {!mapFallbackVisible && locations.length === 0 && (
        <div
          role="status"
          className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center"
        >
          <p className="rounded-md border border-solid border-f1-border-secondary bg-f1-background px-4 py-3 text-sm text-f1-foreground-secondary shadow-sm">
            {config.noDataLabel}
          </p>
        </div>
      )}
      {!mapFallbackVisible && (
        <>
          {selectedLocation && detailsPanelState !== "open" && (
            <LocationDetailsTrigger
              location={selectedLocation}
              config={config}
              controlsId={detailsPanelId}
              onOpen={openDetails}
              triggerRef={detailsTriggerRef}
              responsiveDefault={detailsPanelState === "responsive"}
            />
          )}
          <div className="pointer-events-none absolute bottom-[154px] left-4 right-4 top-[96px] z-20 flex min-h-0 flex-col items-stretch gap-2 @[480px]:items-end @[640px]:contents">
            {selectedLocation && (
              <LocationDetailsPanel
                location={selectedLocation}
                config={config}
                id={detailsPanelId}
                panelState={detailsPanelState}
                onDismiss={closeDetails}
                dismissRef={detailsDismissRef}
              />
            )}
            {locations.length > 0 && (
              <DensityLegend config={config} scale={resolvedDensityScale} />
            )}
          </div>
          <LocationTimeline timeline={timeline} config={config} />
        </>
      )}
    </section>
  )
}

LocationVisualization.displayName = "LocationVisualization"
