import type { ModuleId } from "@/components/avatars/F0AvatarModule";
import type { DialogPosition } from "@/components/F0Dialog/types";
import type { UseFileUpload } from "@/components/F0Form/fields/file/types";
import type { F0FormErrorTriggerMode } from "@/components/F0Form/types";
import type { ResourceHeaderProps } from "@/experimental/Information/Headers/ResourceHeader";

import type { SurveyFormBuilderElement } from "../SurveyFormBuilder/types";

export type { SurveyFormBuilderElement };

export type SurveyAnswerValue =
  | { type: "text" | "longText"; value: string | null }
  | { type: "rating"; value: number | null }
  | { type: "select"; value: string | null }
  | { type: "multi-select"; value: string[] | null }
  | { type: "dropdown-single"; value: string | null }
  | { type: "numeric"; value: number | null }
  | { type: "link"; value: string | null }
  | { type: "date"; value: Date | null }
  | { type: "file"; value: string[] | null }
  | { type: "checkbox"; value: boolean | null };

export type SurveyAnswers = Record<string, SurveyAnswerValue>;

export type SurveySubmitAnswers = Record<
  string,
  string | number | boolean | string[] | Date | null
>;

export type SurveyFormSubmitResult =
  | { success: true; message?: string }
  | { success: false; errors?: Record<string, string> };

export type SurveyAnsweringFormMode = "stepped" | "all-questions";

type SurveyAnsweringFormModule = {
  id: ModuleId;
  label: string;
  href: string;
};

interface SurveyAnsweringFormBaseProps {
  elements: SurveyFormBuilderElement[];
  mode: SurveyAnsweringFormMode;
  title: string;
  description?: string;
  resourceHeader?: Omit<ResourceHeaderProps, "title" | "description">;
  module: SurveyAnsweringFormModule;
  position?: DialogPosition;
  isOpen: boolean;
  onClose: () => void;
  allowToChangeFullscreen?: boolean;
  defaultValues?: Partial<SurveyAnswers>;
  errorTriggerMode?: F0FormErrorTriggerMode;
  loading?: boolean;
  useUpload?: UseFileUpload;
  labels?: {
    empty?: {
      title?: string;
      description?: string;
      emoji?: string;
    };
  };
}

export type SurveyAnsweringFormDefaultProps = SurveyAnsweringFormBaseProps & {
  preview?: false;
  onSubmit: (
    answers: SurveySubmitAnswers,
  ) => Promise<SurveyFormSubmitResult> | SurveyFormSubmitResult;
};

export type SurveyAnsweringFormPreviewProps = SurveyAnsweringFormBaseProps & {
  preview: true;
  onSubmit?: never;
};

export type SurveyAnsweringFormProps =
  | SurveyAnsweringFormDefaultProps
  | SurveyAnsweringFormPreviewProps;

export type FlatQuestion = {
  id: string;
  type: string;
  required?: boolean;
  sectionTitle?: string;
  sectionDescription?: string;
};
