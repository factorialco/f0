import { ButtonInternal } from "@/components/F0Button/internal"
import { RenderSuggestionsListProps } from "@copilotkit/react-ui"

export const SuggestionsList = ({
  suggestions,
  onSuggestionClick,
}: RenderSuggestionsListProps) => {
  return (
    <div className="flex flex-row gap-1 overflow-x-auto pb-1 sm:flex-col sm:overflow-x-visible sm:pb-0">
      {suggestions.map((s, i) => (
        <ButtonInternal
          variant="ghost"
          className="shrink-0 font-medium"
          key={i}
          onClick={() => onSuggestionClick(s.message)}
          label={s.message}
        />
      ))}
    </div>
  )
}
