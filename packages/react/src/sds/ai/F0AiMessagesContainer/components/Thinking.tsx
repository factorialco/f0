import Lightbulb from "@/icons/app/Lightbulb"
import { useI18n } from "@/lib/providers/i18n"

import { F0ActionItem } from "../../F0ActionItem"

import { CollapsibleMessage } from "./CollapsibleMessage"

import { ThinkingProps } from "../types"

export const Thinking = ({ titles, title }: ThinkingProps) => {
  const translations = useI18n()

  return (
    <CollapsibleMessage
      icon={Lightbulb}
      title={title ?? translations.ai.thoughtsGroupTitle}
    >
      <div className="flex flex-col gap-2 pl-7">
        {titles.map((stepTitle, index) => (
          <div key={index} className="-ml-1">
            <F0ActionItem title={stepTitle} status="completed" inGroup />
          </div>
        ))}
      </div>
    </CollapsibleMessage>
  )
}
