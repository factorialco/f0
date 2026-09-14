import { motion, type Transition } from "motion/react"
import type { ReactNode } from "react"
import { F0AvatarCompany } from "@/components/avatars/F0AvatarCompany"
import { F0AvatarList } from "@/components/avatars/F0AvatarList"
import { F0AvatarPerson } from "@/components/avatars/F0AvatarPerson"
import { F0AvatarTeam } from "@/components/avatars/F0AvatarTeam"
import { F0TagAlert } from "@/components/tags/F0TagAlert"
import { F0TagBalance } from "@/components/tags/F0TagBalance"
import { cn } from "@/lib/utils"
import type { ContentType, AiInsightCardContent, BalanceConfig } from "../types"
import { headingVariants, labelVariants } from "../variants"

const hiddenBottomLabelTypes = new Set<ContentType>([
  "person",
  "people",
  "team",
  "company",
  "alert",
  "balance",
])

type CardMetadataProps = {
  heading: string
  label?: string
  shouldFadeContent?: boolean
  fadeTransition?: Transition
} & AiInsightCardContent

/** An avatar with the metadata's label beside it. */
const AvatarWithLabel = ({
  label,
  children,
}: {
  label?: string
  children: ReactNode
}) => (
  <div className="flex items-center gap-1">
    {children}
    {label ? <span className={cn(labelVariants())}>{label}</span> : null}
  </div>
)

const BalanceTag = ({ balance }: { balance: BalanceConfig }) => {
  return (
    <F0TagBalance
      amount={balance.amount}
      percentage={balance.percentage ?? undefined}
      invertStatus={balance.invertStatus}
      hint={balance.hint}
    />
  )
}

/** The reading itself: one shape per content type, and a card shows exactly one. */
const CardMetadataReading = (
  props: AiInsightCardContent & Pick<CardMetadataProps, "label">
) => {
  const { label } = props

  if (props.content === "person") {
    return (
      <AvatarWithLabel label={label}>
        <F0AvatarPerson
          firstName={props.avatar.firstName}
          lastName={props.avatar.lastName}
          src={props.avatar.src}
          size="xs"
        />
      </AvatarWithLabel>
    )
  }

  if (props.content === "people") {
    return (
      <F0AvatarList type="person" avatars={props.avatars} size="md" max={3} />
    )
  }

  if (props.content === "team") {
    return (
      <AvatarWithLabel label={label}>
        <F0AvatarTeam
          name={props.avatar.name}
          src={props.avatar.src}
          size="xs"
        />
      </AvatarWithLabel>
    )
  }

  if (props.content === "company") {
    return (
      <AvatarWithLabel label={label}>
        <F0AvatarCompany
          name={props.avatar.name}
          src={props.avatar.src}
          size="xs"
        />
      </AvatarWithLabel>
    )
  }

  if (props.content === "alert") {
    return <F0TagAlert text={props.alertLabel} level={props.level} />
  }

  if (props.content === "balance") {
    return <BalanceTag balance={props.balance} />
  }

  return null
}

export const CardMetadata = (props: CardMetadataProps) => {
  const {
    heading,
    label,
    content,
    shouldFadeContent = false,
    fadeTransition,
  } = props

  return (
    <div className="flex flex-1 flex-col gap-2">
      <span className={cn(headingVariants())}>{heading}</span>

      <motion.div
        className="flex flex-1 flex-col justify-end gap-2"
        animate={{ opacity: shouldFadeContent ? 0 : 1 }}
        transition={fadeTransition}
      >
        <CardMetadataReading {...props} />
      </motion.div>

      {label && !hiddenBottomLabelTypes.has(content) ? (
        <motion.span
          className={cn(labelVariants())}
          animate={{ opacity: shouldFadeContent ? 0 : 1 }}
          transition={fadeTransition}
        >
          {label}
        </motion.span>
      ) : null}
    </div>
  )
}
