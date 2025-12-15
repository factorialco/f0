import { ButtonInternal } from "@/components/F0Button/internal"
import { RenderSuggestionsListProps } from "@copilotkit/react-ui"

export const SuggestionsList = ({ suggestions, onSuggestionClick }: RenderSuggestionsListProps) => {
  return (
    <div>
      {suggestions.map((s, i) => (
        <ButtonInternal
          variant="ghost"
          className="font-medium"
          key={i}
          onClick={() => onSuggestionClick(s.message)}
          label={s.message}
        />
      ))}
    </div>
  )
}
