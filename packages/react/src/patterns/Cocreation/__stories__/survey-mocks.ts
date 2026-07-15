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
//
// Training's guided creation flow asks the user to pick a form type up front
// (Satisfaction / Effectiveness / Knowledge Test) before it ever shows a
// template. That choice determines a LOCKED first question every survey of
// that type carries — seeded whether the user starts from "Empty Survey" or
// applies a template. Each `*_LOCKED_ELEMENT` below is that first section;
// each `*_SURVEY_ELEMENTS` is the locked element plus the type's follow-up
// questions (what a template preview/apply seeds); "Empty Survey" seeds just
// the locked element on its own.
// ---------------------------------------------------------------------------

export const SATISFACTION_LOCKED_ELEMENT: SurveyFormBuilderElement = {
  type: "section",
  section: {
    id: "section-satisfaction-score",
    locked: true,
    title: "Predefined satisfaction section",
    description:
      "This section powers your satisfaction score, so it can't be edited, moved, or removed.",
    questions: [
      {
        id: "q-satisfaction-score",
        title: "How satisfied are you with the overall quality of the course?",
        description: "1 is very low, 5 is very high.",
        type: "rating" as const,
        options: [
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
          { value: 4, label: "4" },
          { value: 5, label: "5" },
        ],
        required: true,
        lockedNote: {
          description:
            "The standard satisfaction question — its wording and 1–5 scale are fixed so scores stay comparable over time.",
        },
      },
    ],
  },
}

export const SATISFACTION_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  SATISFACTION_LOCKED_ELEMENT,
  {
    type: "section",
    section: {
      id: "section-satisfaction-feedback",
      title: "Your feedback",
      description:
        "A little context behind your score — these are yours to edit.",
      questions: [
        {
          id: "q-satisfaction-reason",
          title: "What's the main reason for your score?",
          description: "Tell us what's behind the number you picked.",
          type: "longText" as const,
        },
        {
          id: "q-satisfaction-format",
          title: "Which parts of the course were you most satisfied with?",
          description: "Select all that apply.",
          type: "multi-select" as const,
          options: [
            { value: "instructor", label: "Instructor" },
            { value: "materials", label: "Materials" },
            { value: "pacing", label: "Pacing" },
            { value: "format", label: "Format (live / self-paced)" },
          ],
        },
        {
          id: "q-satisfaction-team",
          title: "Which team are you on?",
          type: "dropdown-single" as const,
          datasetKey: "teams",
        },
      ],
    },
  },
]

export const EFFECTIVENESS_LOCKED_ELEMENT: SurveyFormBuilderElement = {
  type: "section",
  section: {
    id: "section-effectiveness-score",
    locked: true,
    title: "Predefined effectiveness section",
    description:
      "This section powers your effectiveness score, so it can't be edited, moved, or removed.",
    questions: [
      {
        id: "q-effectiveness-score",
        title: "How would you rate the overall effectiveness of the course?",
        description: "1 is very low, 5 is very high.",
        type: "rating" as const,
        options: [
          { value: 1, label: "1" },
          { value: 2, label: "2" },
          { value: 3, label: "3" },
          { value: 4, label: "4" },
          { value: 5, label: "5" },
        ],
        required: true,
        lockedNote: {
          description:
            "The standard effectiveness question — its wording and 1–5 scale are fixed so scores stay comparable over time.",
        },
      },
    ],
  },
}

export const EFFECTIVENESS_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  EFFECTIVENESS_LOCKED_ELEMENT,
  {
    type: "section",
    section: {
      id: "section-effectiveness-application",
      title: "Applying what you learned",
      description: "Checking comprehension and how you'll apply it.",
      questions: [
        {
          id: "q-effectiveness-confidence",
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
          id: "q-effectiveness-mentors",
          title: "Who else should take this training?",
          type: "dropdown-multi" as const,
          datasetKey: "employees",
        },
        {
          id: "q-effectiveness-hours",
          title: "How many hours did you spend on this training?",
          type: "numeric" as const,
        },
      ],
    },
  },
]

// Unlike Satisfaction/Effectiveness, Knowledge Test has no standardized,
// locked first question — grading is per-course, not comparable across
// surveys. "Empty Survey" for this type seeds a single blank, fully editable
// question (mirrors `SurveyFormBuilder`'s own default when a question is
// added: a "select" question with no title and one placeholder option).
export const KNOWLEDGE_TEST_BLANK_ELEMENT: SurveyFormBuilderElement = {
  type: "section",
  section: {
    id: "section-knowledge-test-question",
    title: "",
    questions: [
      {
        id: "q-knowledge-test-blank",
        title: "",
        description: "",
        type: "select" as const,
        options: [{ value: "option-1", label: "New option 1" }],
        required: true,
      },
    ],
  },
}

export const KNOWLEDGE_TEST_SURVEY_ELEMENTS: SurveyFormBuilderElement[] = [
  {
    type: "section",
    section: {
      id: "section-knowledge-test-questions",
      title: "Course knowledge",
      description: "Graded questions checking course comprehension.",
      questions: [
        {
          id: "q-knowledge-test-1",
          title: "Which of these is correct?",
          type: "select" as const,
          options: [
            { value: "correct", label: "The correct answer" },
            { value: "other", label: "Another option" },
          ],
          required: true,
        },
        {
          id: "q-knowledge-test-2",
          title: "What's the first step in the standard procedure?",
          type: "select" as const,
          options: [
            { value: "correct", label: "The correct answer" },
            { value: "other", label: "Another option" },
          ],
          required: true,
        },
        {
          id: "q-knowledge-test-3",
          title: "When should you escalate an issue?",
          type: "select" as const,
          options: [
            { value: "correct", label: "The correct answer" },
            { value: "other", label: "Another option" },
          ],
          required: true,
        },
        {
          id: "q-knowledge-test-team",
          title: "Which team are you on?",
          type: "dropdown-single" as const,
          datasetKey: "teams",
        },
      ],
    },
  },
]

export const SATISFACTION_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-satisfaction-score": { type: "rating", value: 4 },
  "q-satisfaction-format": { type: "multi-select", value: ["instructor"] },
  "q-satisfaction-team": { type: "dropdown-single", value: "engineering" },
}

export const EFFECTIVENESS_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-effectiveness-score": { type: "rating", value: 4 },
  "q-effectiveness-confidence": { type: "select", value: "very-confident" },
}

export const KNOWLEDGE_TEST_DEFAULT_VALUES: Partial<SurveyAnswers> = {
  "q-knowledge-test-1": { type: "select", value: "correct" },
  "q-knowledge-test-2": { type: "select", value: "correct" },
  "q-knowledge-test-team": { type: "dropdown-single", value: "engineering" },
}

// Spoken-style refinement requests the user dictates into the chat composer.
// Kept type-agnostic (the locked first question differs per type) and
// centred on the two survey mechanics the flow is about — follow-up
// questions and the triggers (conditional logic) that surface them.
const TRAINING_DICTATION_TRANSCRIPTS = [
  "Add a follow-up question after the first rating so that whenever someone scores three or lower we ask them what specifically felt unclear or unhelpful.",
  "If a respondent doesn't feel confident applying what they learned, trigger an open text follow-up asking which part they'd like a refresher on.",
  "Set up a branch where people who took the course virtually get a couple of follow-ups about the online experience, while everyone else skips straight to the next section.",
  "Whenever someone answers the first question negatively, show a follow-up asking what's blocking them and flag that response for L&D to follow up.",
  "Add a question about whether they'd recommend this course to a teammate, and if they say no trigger a follow-up asking what would change their mind.",
  "For the first question, add a trigger so low scores get a follow-up asking for the single most important thing we should fix first.",
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
