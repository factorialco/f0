// Survey split-canvas mock for the "Creation with AI" co-creation story — a
// representative Survey reproduced with the real SurveyAnsweringForm (inline,
// read-only). Modeled on the SurveyAnsweringForm story's `sampleElements`,
// themed to the "Employee engagement survey" card.

import type { SurveyAnswers } from "@/sds/surveys/SurveyAnsweringForm"
import type { SurveyFormBuilderElement } from "@/sds/surveys/SurveyFormBuilder/types"

export const SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "question",
    question: {
      id: "q-name",
      title: "What is your name?",
      description: "Responses stay anonymous in aggregate reporting.",
      type: "text" as const,
    },
  },
  {
    type: "question",
    question: {
      id: "q-review-period",
      title: "Which period is this pulse check for?",
      type: "date" as const,
    },
  },
  {
    type: "section",
    section: {
      id: "section-motivation",
      title: "Motivation & engagement",
      description:
        "How energised and supported you feel in your day-to-day work.",
      questions: [
        {
          id: "q-engagement-rating",
          title: "How motivated do you feel at work right now?",
          description: "1 is not at all, 5 is highly motivated.",
          type: "rating" as const,
          options: [
            { value: 1, label: "1" },
            { value: 2, label: "2" },
            { value: 3, label: "3" },
            { value: 4, label: "4" },
            { value: 5, label: "5" },
          ],
          required: true,
        },
        {
          id: "q-energises",
          title: "What energises you most in your role?",
          description: "Share the work that makes a good day.",
          type: "longText" as const,
        },
        {
          id: "q-drivers",
          title: "Which factors drive your motivation?",
          description: "Select all that apply.",
          type: "multi-select" as const,
          options: [
            { value: "growth", label: "Growth & learning" },
            { value: "recognition", label: "Recognition" },
            { value: "autonomy", label: "Autonomy" },
            { value: "impact", label: "Impact of the work" },
            { value: "team", label: "The team" },
          ],
        },
        {
          id: "q-team",
          title: "Which team are you on?",
          type: "dropdown-single" as const,
          datasetKey: "teams",
          required: true,
        },
      ],
    },
  },
  {
    type: "section",
    section: {
      id: "section-clarity",
      title: "Team & clarity",
      description: "How clear and connected you feel with your team and goals.",
      questions: [
        {
          id: "q-clarity",
          title: "How clear are your goals for this quarter?",
          type: "select" as const,
          options: [
            { value: "very-clear", label: "Very clear" },
            { value: "somewhat", label: "Somewhat clear" },
            { value: "unclear", label: "Unclear" },
          ],
          required: true,
        },
        {
          id: "q-collaborators",
          title: "Who do you collaborate with most closely?",
          type: "dropdown-multi" as const,
          datasetKey: "employees",
        },
        {
          id: "q-one-on-ones",
          title: "How many 1:1s did you have with your manager this month?",
          type: "numeric" as const,
        },
        {
          id: "q-acknowledge",
          title: "Acknowledgement",
          description: "Please confirm before submitting.",
          type: "checkbox" as const,
          label: "My responses reflect how I genuinely feel.",
          required: true,
        },
      ],
    },
  },
]

export const SURVEY_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-name": { type: "text", value: "Jordan Lee" },
  "q-engagement-rating": { type: "rating", value: 4 },
  "q-drivers": { type: "multi-select", value: ["growth", "team"] },
  "q-team": { type: "dropdown-single", value: "engineering" },
  "q-clarity": { type: "select", value: "very-clear" },
}
