// Survey split-canvas mocks for the "Walkthrough" co-creation story — sample
// question sets reproduced with the real SurveyAnsweringForm (inline,
// read-only). Modeled on the SurveyAnsweringForm story's `sampleElements`.
// Each flow (Engagement, Training) gets its own themed element/answer/
// dictation sets so the two examples never share content.

import { makeMockTranscribe } from "@/lib/storybook-utils/ai-mocks"
import type { SurveyAnswers } from "@/sds/surveys/SurveyAnsweringForm"
import {
  getDefaultParamsForQuestionType,
  getDefaultQuestionTypeToAdd,
  getNewElementId,
} from "@/sds/surveys/SurveyFormBuilder/lib"
import type {
  QuestionElement,
  SurveyFormBuilderElement,
} from "@/sds/surveys/SurveyFormBuilder/types"

/**
 * The starting point of a blank survey: a single empty section holding one
 * default (text) question — exactly what `SurveyFormBuilder` seeds on its first
 * render for an empty survey. We build it here so a freshly-created "empty
 * survey" already carries this first section/question as durable store state,
 * rather than relying on the form builder's render-time auto-seed. Shared by
 * every flow — a blank survey starts the same way regardless of domain.
 */
export const makeInitialSurveyElements = (): SurveyFormBuilderElement[] => {
  const questionType = getDefaultQuestionTypeToAdd()
  return [
    {
      type: "section",
      section: {
        id: getNewElementId("section"),
        title: "",
        questions: [
          {
            id: getNewElementId("question"),
            title: "",
            description: "",
            type: questionType,
            required: true,
            ...getDefaultParamsForQuestionType(questionType),
          } as QuestionElement,
        ],
      },
    },
  ]
}

// ---------------------------------------------------------------------------
// Engagement Surveys flow
// ---------------------------------------------------------------------------

export const ENGAGEMENT_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "section",
    section: {
      id: "section-intro",
      title: "Before you start",
      description:
        "A couple of quick details to set the context for your responses.",
      questions: [
        {
          id: "q-name",
          title: "What is your name?",
          description: "Responses stay anonymous in aggregate reporting.",
          type: "text" as const,
        },
        {
          id: "q-review-period",
          title: "Which period is this pulse check for?",
          type: "date" as const,
        },
      ],
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

// Survey seeded by the "Employee NPS" welcome card. It opens with a dedicated,
// blocked initial section holding the predefined eNPS question: `locked` on the
// section strips its edit menu, disables its fields and removes its drag handle
// (and, by inheritance, blocks the question inside it too), while its title and
// description explain why it's fixed and a "Locked" tag marks it. A following
// "Your feedback" section holds the ordinary editable questions, so the
// contrast (blocked vs editable) is visible across sections.
export const NPS_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "section",
    section: {
      id: "section-enps-score",
      locked: true,
      title: "Predefined eNPS section",
      description:
        "This section powers your Employee NPS score, so it can't be edited, moved, or removed.",
      questions: [
        {
          id: "q-enps",
          title:
            "How likely are you to recommend [Company] as a place to work?",
          description: "0 is not at all likely, 10 is extremely likely.",
          type: "rating" as const,
          options: Array.from({ length: 11 }, (_, value) => ({
            value,
            label: String(value),
          })),
          required: true,
          lockedNote: {
            description:
              "The standard eNPS question — its wording and 0–10 scale are fixed so scores stay comparable over time.",
          },
        },
      ],
    },
  },
  {
    type: "section",
    section: {
      id: "section-enps-feedback",
      title: "Your feedback",
      description:
        "A little context behind your score — these are yours to edit.",
      questions: [
        {
          id: "q-enps-reason",
          title: "What's the main reason for your score?",
          description: "Tell us what's behind the number you picked.",
          type: "longText" as const,
        },
        {
          id: "q-enps-improve",
          title: "What's one thing that would improve your experience here?",
          type: "longText" as const,
        },
        {
          id: "q-enps-team",
          title: "Which team are you on?",
          type: "dropdown-single" as const,
          datasetKey: "teams",
        },
      ],
    },
  },
]

export const ENGAGEMENT_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-name": { type: "text", value: "Jordan Lee" },
  "q-engagement-rating": { type: "rating", value: 4 },
  "q-drivers": { type: "multi-select", value: ["growth", "team"] },
  "q-team": { type: "dropdown-single", value: "engineering" },
  "q-clarity": { type: "select", value: "very-clear" },
}

// Spoken-style refinement requests the user dictates into the chat composer.
// Themed to the engagement / eNPS surveys above and centred on the two survey
// mechanics the flow is about — follow-up questions and the triggers (conditional
// logic) that surface them — so the streamed transcript reads as a natural "make
// my survey smarter" ask rather than the generic dictation pool in ai-mocks.
const ENGAGEMENT_DICTATION_TRANSCRIPTS = [
  "Add a follow-up question after the motivation rating so that whenever someone scores three or lower we ask them what's getting in the way and how we could support them better.",
  "If a respondent says their goals for the quarter are unclear, trigger an open text follow-up asking which goals they'd like more clarity on and who should help define them.",
  "Set up a branch where people who aren't happy with management get a couple of follow-ups about communication and feedback, while everyone else skips straight to the next section.",
  "Whenever someone signals they might leave in the next six months, show a follow-up asking what would make them stay and flag that response for the people team to review.",
  "Add a work-life balance rating, and if the score comes in below average trigger a follow-up that asks whether it's mostly workload, scheduling, or after-hours messages.",
  "For the eNPS question, add a trigger so detractors who give a six or lower get a follow-up asking for the single most important thing we should fix first.",
] as const

/**
 * Survey-contextual voice dictation for the Engagement Surveys flow: streams a
 * spoken-style survey-refinement request (follow-up questions and triggers)
 * into the composer so the user can review it and send. Wired to the chat via
 * the ApplicationFrame `ai.onTranscribe` prop.
 */
export const mockEngagementTranscribe = makeMockTranscribe(
  ENGAGEMENT_DICTATION_TRANSCRIPTS
)

// ---------------------------------------------------------------------------
// Training Surveys flow
// ---------------------------------------------------------------------------

export const TRAINING_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "section",
    section: {
      id: "section-training-intro",
      title: "Before you start",
      description: "A couple of quick details about the course you took.",
      questions: [
        {
          id: "q-training-name",
          title: "What is your name?",
          description: "Responses stay anonymous in aggregate reporting.",
          type: "text" as const,
        },
        {
          id: "q-training-date",
          title: "When did you complete the training?",
          type: "date" as const,
        },
      ],
    },
  },
  {
    type: "section",
    section: {
      id: "section-content-delivery",
      title: "Content & delivery",
      description: "How the material and the delivery worked for you.",
      questions: [
        {
          id: "q-content-rating",
          title: "How would you rate the quality of the training content?",
          description: "1 is poor, 5 is excellent.",
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
          id: "q-content-feedback",
          title: "What could make the content clearer or more useful?",
          type: "longText" as const,
        },
        {
          id: "q-training-format",
          title: "Which format did you take this training in?",
          description: "Select all that apply.",
          type: "multi-select" as const,
          options: [
            { value: "live", label: "Live session" },
            { value: "self-paced", label: "Self-paced video" },
            { value: "in-person", label: "In-person workshop" },
            { value: "reading", label: "Reading material" },
          ],
        },
        {
          id: "q-training-team",
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
      id: "section-assessment",
      title: "Assessment & application",
      description: "Checking comprehension and how you'll apply it.",
      questions: [
        {
          id: "q-confidence",
          title: "How confident do you feel applying what you learned?",
          type: "select" as const,
          options: [
            { value: "very-confident", label: "Very confident" },
            { value: "somewhat", label: "Somewhat confident" },
            { value: "not-confident", label: "Not yet confident" },
          ],
          required: true,
        },
        {
          id: "q-training-mentors",
          title: "Who else should take this training?",
          type: "dropdown-multi" as const,
          datasetKey: "employees",
        },
        {
          id: "q-training-hours",
          title: "How many hours did you spend on this training?",
          type: "numeric" as const,
        },
        {
          id: "q-training-acknowledge",
          title: "Acknowledgement",
          description: "Please confirm before submitting.",
          type: "checkbox" as const,
          label: "I completed all required modules for this training.",
          required: true,
        },
      ],
    },
  },
]

// Survey seeded by the "Compliance training" welcome card. It opens with a
// dedicated, blocked initial section holding the mandatory completion
// question: `locked` on the section strips its edit menu, disables its fields
// and removes its drag handle (and, by inheritance, blocks the question inside
// it too), while its title and description explain why it's fixed and a
// "Locked" tag marks it. A following "Your feedback" section holds the
// ordinary editable questions, so the contrast (blocked vs editable) is
// visible across sections — mirrors the eNPS preset in the Engagement flow.
export const TRAINING_COMPLIANCE_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "section",
    section: {
      id: "section-compliance-completion",
      locked: true,
      title: "Predefined completion section",
      description:
        "This section powers your compliance completion record, so it can't be edited, moved, or removed.",
      questions: [
        {
          id: "q-compliance-completion",
          title: "Did you complete all required modules in this course?",
          description:
            "This confirmation is recorded against your compliance record.",
          type: "select" as const,
          options: [
            { value: "yes", label: "Yes, all modules" },
            { value: "partial", label: "Some modules" },
            { value: "no", label: "No" },
          ],
          required: true,
          lockedNote: {
            description:
              "The standard completion question — its wording and options are fixed so compliance records stay consistent.",
          },
        },
      ],
    },
  },
  {
    type: "section",
    section: {
      id: "section-compliance-feedback",
      title: "Your feedback",
      description:
        "A little context behind your answer — these are yours to edit.",
      questions: [
        {
          id: "q-compliance-reason",
          title: "Was anything unclear or hard to complete?",
          description: "Tell us what tripped you up, if anything.",
          type: "longText" as const,
        },
        {
          id: "q-compliance-improve",
          title: "What would make this training easier to complete?",
          type: "longText" as const,
        },
        {
          id: "q-compliance-team",
          title: "Which team are you on?",
          type: "dropdown-single" as const,
          datasetKey: "teams",
        },
      ],
    },
  },
]

export const TRAINING_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-training-name": { type: "text", value: "Jordan Lee" },
  "q-content-rating": { type: "rating", value: 4 },
  "q-training-format": { type: "multi-select", value: ["live", "reading"] },
  "q-training-team": { type: "dropdown-single", value: "engineering" },
  "q-confidence": { type: "select", value: "very-confident" },
}

// Spoken-style refinement requests the user dictates into the chat composer.
// Themed to the training / compliance surveys above and centred on the two
// survey mechanics the flow is about — follow-up questions and the triggers
// (conditional logic) that surface them.
const TRAINING_DICTATION_TRANSCRIPTS = [
  "Add a follow-up question after the content rating so that whenever someone scores three or lower we ask them what specifically felt unclear or unhelpful.",
  "If a respondent says they're not yet confident applying what they learned, trigger an open text follow-up asking which part they'd like a refresher on.",
  "Set up a branch where people who took the self-paced format get a couple of follow-ups about pacing and platform issues, while everyone else skips straight to the next section.",
  "Whenever someone marks the completion question as 'Some modules' or 'No', show a follow-up asking what's blocking them and flag that response for L&D to follow up.",
  "Add a question about whether they'd recommend this course to a teammate, and if they say no trigger a follow-up asking what would change their mind.",
  "For the completion question, add a trigger so anyone who answers 'No' gets a reminder follow-up with the deadline to finish the remaining modules.",
] as const

/**
 * Survey-contextual voice dictation for the Training Surveys flow: streams a
 * spoken-style survey-refinement request (follow-up questions and triggers)
 * into the composer so the user can review it and send. Wired to the chat via
 * the ApplicationFrame `ai.onTranscribe` prop.
 */
export const mockTrainingTranscribe = makeMockTranscribe(
  TRAINING_DICTATION_TRANSCRIPTS
)
