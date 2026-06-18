import { JSX as JSX_2 } from 'react';

/** A mocked single-choice question. */
declare type SampleChoiceQuestion = {
    type: "choice";
    /** The question prompt shown above the options */
    question: string;
    /** The answer options, rendered as non-interactive radio rows */
    options: string[];
};

/**
 * A non-interactive preview of a survey question, used to illustrate what a
 * given survey type produces (for example inside the survey type selector).
 * It is purely presentational — the inputs are mocked placeholders, not real
 * form fields.
 */
export declare function SampleQuestion(props: SampleQuestionProps): JSX_2.Element;

export declare type SampleQuestionProps = SampleRatingQuestion | SampleChoiceQuestion;

/** A mocked rating-scale question (e.g. Very low → Very high). */
declare type SampleRatingQuestion = {
    type: "rating";
    /** The question prompt shown above the scale */
    question: string;
    /** Number of rating steps to render (default 5) */
    steps?: number;
    /** Caption under the lowest step */
    minLabel?: string;
    /** Caption under the highest step */
    maxLabel?: string;
};

export { }
