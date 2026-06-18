/** A mocked rating-scale question (e.g. Very low → Very high). */
export type SampleRatingQuestion = {
  type: "rating"
  /** The question prompt shown above the scale */
  question: string
  /** Number of rating steps to render (default 5) */
  steps?: number
  /** Caption under the lowest step */
  minLabel?: string
  /** Caption under the highest step */
  maxLabel?: string
}

/** A mocked single-choice question. */
export type SampleChoiceQuestion = {
  type: "choice"
  /** The question prompt shown above the options */
  question: string
  /** The answer options, rendered as non-interactive radio rows */
  options: string[]
}

export type SampleQuestionProps = SampleRatingQuestion | SampleChoiceQuestion
