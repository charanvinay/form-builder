import { IField, IJSON } from "./types";

const validateForm = ({
  json,
  formData,
}: {
  json: IJSON;
  formData: Record<string, any>;
}) => {
  let inValidLabel = "";

  const traverseFields = (fields: IField[]): boolean => {
    for (const field of fields) {
      if (field.element === "div" && field.fields) {
        const foundInvalid = traverseFields(field.fields);
        if (foundInvalid) return true;
      } else {
        if (field.required) {
          const value = formData[field.name];
          if (!Boolean(value)) {
            inValidLabel =
              "label" in field && typeof field.label === "string"
                ? field.label
                : field.name;
            return true;
          }
        }
      }
    }
    return false;
  };

  traverseFields(json.fields);

  return inValidLabel;
};

export const Utils = {
  validateForm,
};
