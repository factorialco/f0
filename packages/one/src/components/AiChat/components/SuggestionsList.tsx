import { RenderSuggestionsListProps } from "@copilotkit/react-ui"
import { ButtonInternal } from "../../../components/F0Button/internal"

export const SuggestionsList = ({
  suggestions,
  onSuggestionClick,
}: RenderSuggestionsListProps) => {
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
