import React, { ReactElement } from "react"
import { View, Text } from "react-native"
import Svg, { Circle } from "react-native-svg"
import { useCSSVariable } from "uniwind"

import { cn } from "../../../../lib/utils"
import { CompanyAvatar } from "../../../Avatars/CompanyAvatar"
import { PersonAvatar } from "../../../Avatars/PersonAvatar"
import { TeamAvatar } from "../../../Avatars/TeamAvatar"
import { AlertTag, F0Image, F0Text, PressableFeedback } from "../../../exports"
import { F0Icon, type IconType } from "../../../primitives/F0Icon"
import { DotTag, DotTagProps, NewColor } from "../../../Tags/DotTag"

import { ItemContainer } from "./ItemContainer"

export type DataListProps = {
  children: ReactElement<Items>[] | ReactElement<Items>
  label?: string
  isHorizontalItem?: boolean
  tableView?: boolean
  fullWidth?: boolean
}

type Items =
  | typeof Item
  | typeof PersonItem
  | typeof CompanyItem
  | typeof TeamItem
  | typeof CardItem

const _DataList = ({
  children,
  label,
  isHorizontalItem = false,
  tableView = false,
  fullWidth = false,
}: DataListProps) => {
  return (
    <View
      className={cn(
        isHorizontalItem
          ? "flex min-h-12 flex-shrink flex-row"
          : fullWidth
            ? "w-full"
            : "max-w-72 min-w-32",
        tableView ? "px-[8px] pt-[14px] pb-[10px]" : ""
      )}
    >
      {!!label && (
        <Text
          className={cn(
            "px-1.5 text-f0-foreground-secondary",
            isHorizontalItem ? "mt-1.5 w-36 shrink-0" : ""
          )}
        >
          {label}
        </Text>
      )}
      <View className="flex flex-shrink justify-center gap-0.5">
        {children}
      </View>
    </View>
  )
}

export type ItemProps = {
  text: string
  icon?: IconType
  action?: ActionType
}

export type ActionType = CopyActionType | GenericActionType | NoopActionType

export type CopyActionType = {
  type: "copy"
  text?: string
}

export type GenericActionType = {
  type: "generic"
  handlePress?: () => void
}

export type NoopActionType = {
  type: "noop"
}

const Item = ({ text, icon, action }: ItemProps) => {
  return (
    <ItemContainer
      text={text}
      leftIcon={icon}
      action={getInternalAction(action, text)}
    />
  )
}

type URL = string

type EmployeeItemProps = {
  firstName: string
  lastName: string
  avatarUrl?: URL
  action?: ActionType
}

const PersonItem = ({
  action,
  avatarUrl,
  firstName,
  lastName,
}: EmployeeItemProps) => {
  const fullName = `${firstName} ${lastName}`
  return (
    <ItemContainer
      leftIcon={() => (
        <PersonAvatar
          size="xsmall"
          src={avatarUrl}
          firstName={firstName}
          lastName={lastName}
        />
      )}
      text={fullName}
      action={getInternalAction(action, fullName)}
    />
  )
}

type CompanyItemProps = {
  name: string
  avatarUrl?: URL
  action?: ActionType
}

const CompanyItem = ({ avatarUrl, name, action }: CompanyItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => (
        <CompanyAvatar name={name} size="xsmall" src={avatarUrl} />
      )}
      text={name}
      action={getInternalAction(action, name)}
    />
  )
}

type TeamItemProps = {
  name: string
  action?: ActionType
}

const TeamItem = ({ action, name }: TeamItemProps) => {
  return (
    <ItemContainer
      leftIcon={() => <TeamAvatar name={name} size="xsmall" />}
      text={name}
      action={getInternalAction(action, name)}
    />
  )
}

type DotTagItemProps = DotTagProps

const DotTagItem = ({ ...props }: DotTagItemProps) => {
  return (
    <View className="flex items-start pt-1">
      <DotTag {...props} />
    </View>
  )
}

type CardMetadataProperty = {
  icon?: IconType
  type: "text" | "progress" | "statusTag" | "alertTag"
  value: string
  status?: "warning" | "critical" | "completed" | "neutral"
  level?: "info" | "warning" | "critical"
}

type CardItemProps = {
  name: string
  thumbnailUrl?: string
  metadata?: CardMetadataProperty[]
  action?: ActionType
}

const CardItem = ({ action, name, thumbnailUrl, metadata }: CardItemProps) => {
  const [trackColor, activeColor] = useCSSVariable([
    "--color-f0-border",
    "--color-f0-background-info-bold",
  ])

  const statusColor: Record<
    "warning" | "critical" | "completed" | "neutral",
    NewColor
  > = {
    warning: "yellow",
    critical: "army",
    completed: "viridian",
    neutral: "smoke",
  }
  const renderCardMetadata = (property: CardMetadataProperty) => {
    switch (property.type) {
      case "text":
        return <F0Text variant="body-sm-default">{property.value}</F0Text>
      case "progress": {
        //TODO: Use the F0ProgressCircle component once it's implemented instead of manually calculating the progress circle
        const size = 16
        const strokeWidth = 2.5
        const radius = (size - strokeWidth) / 2
        const circumference = 2 * Math.PI * radius
        const progress = Math.min(100, Math.max(0, Number(property.value)))
        const strokeDashoffset =
          circumference - (progress / 100) * circumference
        return (
          <View className="flex flex-row items-center gap-1">
            <Svg width={size} height={size}>
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={String(trackColor)}
                strokeWidth={strokeWidth}
                fill="none"
              />
              <Circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={String(activeColor)}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={`${circumference}`}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                rotation={-90}
                origin={`${size / 2}, ${size / 2}`}
              />
            </Svg>
            <F0Text variant="body-sm-default">{`${progress}%`}</F0Text>
          </View>
        )
      }
      case "statusTag":
        return (
          <DotTag
            text={property.value.toString()}
            color={statusColor[property?.status ?? "neutral"]}
          />
        )
      case "alertTag":
        return (
          <AlertTag text={property.value} level={property.level ?? "info"} />
        )
    }
  }

  const handlePress =
    action?.type === "generic" ? action.handlePress : undefined

  const cardContent = (
    <>
      {thumbnailUrl ? (
        <View className="h-32 w-full overflow-hidden rounded-lg">
          <F0Image source={thumbnailUrl} accessibilityLabel={name} />
        </View>
      ) : (
        <View className="aspect-square h-32 w-32 rounded-sm bg-f0-background-secondary" />
      )}
      <View className="flex w-full flex-1 flex-col gap-2">
        <F0Text variant="heading-sm">{name}</F0Text>
        <View className="flex flex-row flex-wrap gap-3">
          {metadata?.map((property, index) => {
            return (
              <View key={index} className="flex flex-row items-center gap-1">
                {property.icon && (
                  <F0Icon icon={property.icon} size="md" color="secondary" />
                )}
                {renderCardMetadata(property)}
              </View>
            )
          })}
        </View>
      </View>
    </>
  )

  return (
    <View className="flex w-full items-start gap-3 rounded-lg border border-f0-border-secondary p-3">
      {handlePress ? (
        <PressableFeedback onPress={handlePress} className="flex w-full gap-3">
          {cardContent}
        </PressableFeedback>
      ) : (
        <View className="flex w-full gap-3">{cardContent}</View>
      )}
    </View>
  )
}
/**
 * convert simplified action type received from user to internal action format
 * @param action ActionType
 * @param defaultCopyText what to use if copy text is not present
 */
const getInternalAction = (
  action: ActionType | undefined,
  defaultCopyText: string
): ActionType | undefined => {
  if (action && action.type === "copy") {
    return { type: "copy", text: action.text ?? defaultCopyText }
  }

  return action
}

export const DataList = Object.assign(_DataList, {
  Item,
  CompanyItem,
  PersonItem,
  TeamItem,
  DotTagItem,
  CardItem,
})
