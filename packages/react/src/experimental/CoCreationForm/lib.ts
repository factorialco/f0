import { QuestionType } from "./types"

export const getDefaultParamsForQuestionType = (questionType: QuestionType) => {
  switch (questionType) {
    case "rating":
      return {
        value: 0,
        options: [
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
          { value: 4, label: "4" },
          { value: 5, label: "5" },
        ],
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

export const getNewElementId = (type: "section" | "question") =>
  `new-${type}-${Date.now()}`
