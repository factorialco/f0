import { Button } from "@/components/Actions/Button"
import { IconType } from "@/components/F0Icon"
import { F0TagRaw } from "@/components/tags/F0TagRaw"
import { Select } from "@/experimental/Forms/Fields/Select"
import { SolidPause, SolidPlay, SolidStop } from "@/icons/app"
import { motion } from "motion/react"
import { Dispatch, useState } from "react"
import { ClockInGraph, ClockInGraphProps } from "../ClockInGraph"
import { getInfo } from "./helpers"
import Selector from "./Selector"

interface BreakType {
  id: string
  name: string
  duration?: string
  description?: string
  isPaid: boolean
}

export interface ClockInControlsProps {
  /** Optional remaining time in minutes */
  remainingMinutes?: number
  /** Clock in entries data */
  data: ClockInGraphProps["data"]
  /** Tracked minutes */
  trackedMinutes: number
  /** Labels for all text content */
  labels: {
    clockedOut: string
    clockedIn: string
    onBreak: string
    clockIn: string
    clockOut: string
    break: string
    resume: string
    remainingTime: string
    overtime: string
    selectLocation: string
    selectProject: string
    paid: string
    unpaid: string
  }
  locationId?: string
  onChangeLocationId: Dispatch<string>
  locations: {
    id: string
    name: string
    icon: IconType
  }[]
  breakTypes?: BreakType[]
  onChangeBreakTypeId?: Dispatch<string>
  canShowLocation?: boolean
  locationSelectorDisabled?: boolean
  canShowBreakButton?: boolean
  canSeeGraph?: boolean
  canSeeRemainingTime?: boolean
  /** Callback when Clock In button is clicked */
  onClockIn?: () => void
  /** Callback when Clock Out button is clicked */
  onClockOut?: () => void
  /** Callback when Break button is clicked */
  onBreak?: (breakTypeId?: string) => void
  canShowProject?: boolean
  projectSelectorElement?: React.ReactNode
  breakTypeName?: string
}

export function ClockInControls({
  trackedMinutes,
  remainingMinutes,
  data = [],
  labels,
  locationId,
  locations,
  canShowLocation = true,
  locationSelectorDisabled = false,
  onClockIn,
  onClockOut,
  onBreak,
  breakTypes,
  onChangeBreakTypeId,
  canShowBreakButton = true,
  canSeeGraph = true,
  canSeeRemainingTime = true,
  // onClickProjectSelector,
  onChangeLocationId,
  canShowProject = true,
  projectSelectorElement,
  breakTypeName,
}: ClockInControlsProps) {
  const { status, statusText, subtitle, statusColor } = getInfo({
    data,
    labels,
    trackedMinutes,
    remainingMinutes,
    canSeeRemainingTime,
  })

  const showLocationAndProjectSelectors = status === "clocked-out"

  const breakTypeOptions =
    breakTypes?.map((breakType) => ({
      value: breakType.id,
      label: breakType.duration
        ? `${breakType.name} · ${breakType.duration}`
        : breakType.name,
      description: breakType.description,
      tag: breakType.isPaid ? labels.paid : labels.unpaid,
    })) ?? []

  const [breakTypePickerOpen, setBreakTypePickerOpen] = useState(false)

  const handleClickBreakButton = () => {
    if (breakTypeOptions.length > 1) {
      if (!breakTypePickerOpen) {
        setBreakTypePickerOpen(true)
      }
    } else {
      const firstBreakTypeValue = breakTypeOptions?.[0]?.value
      onBreak?.(firstBreakTypeValue)
    }
  }

  const handleChangeBreakType = (value: string) => {
    onChangeBreakTypeId?.(value)
    setBreakTypePickerOpen(false)
    onBreak?.(value)
  }

  const canSelectLocation =
    showLocationAndProjectSelectors &&
    locations.length &&
    !locationSelectorDisabled &&
    canShowLocation

  // const canSelectProject =
  //   showLocationAndProjectSelectors &&
  //   !projectSelectorDisabled &&
  //   canShowProject

  const location = locations.find((location) => location.id === locationId)

  const locationOptions = locations.map((location) => ({
    value: location.id,
    label: location.name,
    icon: location.icon,
  }))

  const canShowBreakTypeName = status === "break"

  const [locationPickerOpen, setLocationPickerOpen] = useState(false)

  return (
    <div className="@container">
      <div className="flex-grow flex-col">
        <div className="flex flex-col-reverse items-center gap-2 @xs:flex-row">
          <div className="flex-1 space-y-4">
            <div className="flex flex-col items-center space-y-0.5 @xs:items-start">
              <div className="flex items-center gap-2">
                <span className="line-clamp-1 text-2xl font-semibold text-f1-foreground">
                  {statusText}
                </span>
                <div className="relative aspect-square h-4">
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      backgroundColor: statusColor,
                    }}
                    initial={{ scale: 0.5, opacity: 0.6 }}
                    animate={{ scale: 1.6, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                  />
                  <div
                    className="absolute inset-[3px] rounded-full"
                    style={{
                      backgroundColor: statusColor,
                    }}
                  />
                </div>
              </div>
              {subtitle && (
                <p className="line-clamp-1 text-f1-foreground-secondary">
                  {subtitle}
                </p>
              )}
            </div>

            <div className="flex justify-center gap-2 @xs:justify-start">
              {status === "clocked-out" && (
                <div className="mr-3 @xs:mr-0">
                  <Button
                    onClick={onClockIn}
                    label={labels.clockIn}
                    icon={SolidPlay}
                  />
                </div>
              )}

              {status === "clocked-in" && (
                <>
                  {canShowBreakButton && (
                    <>
                      {breakTypeOptions.length > 1 && onChangeBreakTypeId ? (
                        <Select
                          label={labels.break}
                          hideLabel
                          value=""
                          options={breakTypeOptions}
                          onChange={handleChangeBreakType}
                          open={breakTypePickerOpen}
                          onOpenChange={setBreakTypePickerOpen}
                          selectContentClassName="min-w-80"
                        >
                          <div aria-label="Select break type">
                            <Button
                              label={labels.break}
                              variant="neutral"
                              icon={SolidPause}
                              hideLabel
                            />
                          </div>
                        </Select>
                      ) : (
                        <Button
                          onClick={handleClickBreakButton}
                          label={labels.break}
                          variant="neutral"
                          icon={SolidPause}
                          hideLabel
                        />
                      )}
                    </>
                  )}
                  <Button
                    onClick={onClockOut}
                    label={labels.clockOut}
                    variant="neutral"
                    icon={SolidStop}
                  />
                </>
              )}
              {status === "break" && (
                <>
                  <Button
                    onClick={onClockOut}
                    label={labels.clockOut}
                    variant="neutral"
                    icon={SolidStop}
                    hideLabel
                  />
                  <Button
                    onClick={onClockIn}
                    label={labels.resume}
                    icon={SolidPlay}
                  />
                </>
              )}
            </div>
          </div>
          {canSeeGraph && (
            <ClockInGraph
              data={data}
              trackedMinutes={trackedMinutes}
              remainingMinutes={canSeeRemainingTime ? remainingMinutes : 0}
            />
          )}
        </div>
        <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-2 @xs:justify-start">
          {canSelectLocation ? (
            <>
              <Select
                label={labels.selectLocation}
                hideLabel
                value={locationId}
                options={locationOptions}
                onChange={onChangeLocationId}
                open={locationPickerOpen}
                onOpenChange={setLocationPickerOpen}
                disabled={locationSelectorDisabled}
              >
                <div aria-label="Select location">
                  <Selector
                    text={location?.name}
                    placeholder={labels.selectLocation}
                    icon={location?.icon}
                  />
                </div>
              </Select>
              {canShowProject && projectSelectorElement}
            </>
          ) : (
            <>
              {canShowLocation && location && (
                <>
                  <F0TagRaw text={location.name} icon={location.icon} />
                </>
              )}
              {canShowProject && projectSelectorElement}
              {canShowBreakTypeName && breakTypeName && (
                <F0TagRaw text={breakTypeName} />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
