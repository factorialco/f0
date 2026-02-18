import { useEffect } from "react";

type Rules = {
  disallowEmpty?: boolean;
  minLength?: number;
  maxLength?: number;
};

const textFormatEnforcer = (text: string, rules: Rules) => {
  if (rules.disallowEmpty && text.length === 0) {
    throw Error("You need to provide some text that is not empty");
  }

  if (rules.maxLength !== undefined && text.length > rules.maxLength) {
    throw Error(
      `"${text}" should have no more than ${rules.maxLength} characters`,
    );
  }

  if (rules.minLength !== undefined && text.length < rules.minLength) {
    throw Error(`"${text}" should have at least ${rules.minLength} characters`);
  }
};

export const useTextFormatEnforcer = (text?: string, rules?: Rules) => {
  useEffect(() => {
    if (text !== undefined && rules) {
      textFormatEnforcer(text, rules);
    }
  }, [text, rules]);
};
