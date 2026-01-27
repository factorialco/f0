import { QuestionType } from "./types"

export type RatingOptionType = "1-5" | "1-10" | "emojis"

export const getRatingOptions = (type: RatingOptionType) => {
  switch (type) {
    case "1-5":
      return new Array(5).fill(0).map((_, index) => ({
        value: index + 1,
        label: (index + 1).toString(),
      }))
    case "1-10":
      return new Array(10).fill(0).map((_, index) => ({
        value: index + 1,
        label: (index + 1).toString(),
      }))
    case "emojis":
      return [
        { value: 1, label: "😠" },
        { value: 2, label: "😐" },
        { value: 3, label: "😊" },
        { value: 4, label: "😍" },
        { value: 5, label: "🤩" },
      ]
  }
}

export const detectRatingOptionType = (
  options: { value: number; label: string }[]
): RatingOptionType | null => {
  if (!options || options.length === 0) return null

  const length = options.length

  // Check if all labels are numeric
  const allNumeric = options.every((opt) => /^\d+$/.test(opt.label.trim()))

  // If length is 5 and all labels are numeric → "1-5"
  if (length === 5 && allNumeric) {
    return "1-5"
  }

  // If length is 10 and all labels are numeric → "1-10"
  if (length === 10 && allNumeric) {
    return "1-10"
  }

  // If length is 5 and not all numeric (has emojis) → "emojis"
  if (length === 5 && !allNumeric) {
    return "emojis"
  }

  return null
}

export const getDefaultParamsForQuestionType = (questionType: QuestionType) => {
  switch (questionType) {
    case "rating":
      return {
        value: 0,
        options: getRatingOptions("1-5"),
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

const DEFAULT_QUESTION_TYPES: QuestionType[] = [
  "text",
  "longText",
  "select",
  "multi-select",
  "numeric",
  "link",
  "date",
]

export const getDefaultQuestionTypeToAdd = (
  allowedQuestionTypes?: QuestionType[]
) => {
  if (!allowedQuestionTypes) {
    return DEFAULT_QUESTION_TYPES[0]
  }

  const result = DEFAULT_QUESTION_TYPES.find((type) =>
    allowedQuestionTypes?.includes(type)
  )

  if (!result) {
    throw new Error(
      `No default question type found for allowed question types: ${allowedQuestionTypes.join(", ")}`
    )
  }

  return result
}
