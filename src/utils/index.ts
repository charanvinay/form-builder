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

const makeApiCall = async ({ endPoint }: { endPoint: string }) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com${endPoint}`
    );
    const data = await response.json();
    if (!Array.isArray(data)) return { status: false, data: [] };
    return { status: true, data };
  } catch (error) {
    console.log(error);
  }
};

const jsCodeExecutor = ({
  code,
  state,
}: {
  code: string;
  state: Record<string, any>;
}) => {
  try {
    const func = new Function("state", code);
    return func(state);
  } catch (error) {
    console.log(error);
  }
};

export const Utils = {
  jsCodeExecutor,
  makeApiCall,
  validateForm,
};
