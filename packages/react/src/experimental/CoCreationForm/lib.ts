import { QuestionType } from "./types"

export const getDefaultParamsForQuestionType = (questionType: QuestionType) => {
  switch (questionType) {
    case "rating":
      return {
        value: 0,
        range: { min: 1, max: 5 },
      }
    case "select":
    case "multi-select":
      return {
        options: [
          {
            value: "option-1",
            label: "New option 1",
          },
        ],
      }
    case "text":
    case "longText":
      return {
        value: "",
      }
    case "numeric":
      return {
        value: 0,
      }
    case "link":
      return {
        value: "",
      }
    case "date":
      return {
        value: new Date(),
      }
    default:
      throw new Error(`Unsupported question type: ${questionType}`)
  }
}
