import { IJSON } from "../utils/types";

export const advancedForm = (): IJSON => ({
  name: "advanced_form",
  className: "w-full bg-white rounded p-4 sm:p-6 space-y-4",
  fields: [
    {
      name: "heading",
      element: "text",
      label: "Dynamic Form Example - Advanced",
      className: "text-lg font-medium col-span-full",
    },
    {
      name: "form-container",
      element: "div",
      className: "rounded border p-2 sm:p-4 space-y-2 sm:space-y-4",
      fields: [
        {
          name: "primary",
          className: "border rounded p-2 sm:p-4 space-y-2",
          element: "div",
          fields: [
            {
              name: "primary_details",
              element: "text",
              label: "1. Primary Details",
            },
            {
              name: "primary_details_container",
              element: "div",
              className: "flex flex-col sm:grid sm:grid-cols-6 gap-2 gap-y-3 sm:gap-y-5",
              fields: [
                {
                  name: "full_name",
                  element: "input",
                  label: "Full Name",
                  required: true,
                  containerClassName: "col-span-2",
                },
                {
                  name: "is_referral",
                  element: "radio",
                  label: "Are you referred by someone?",
                  required: true,
                  containerClassName: "col-span-2",
                  options: [
                    {
                      label: "Yes",
                      value: "yes",
                    },
                    {
                      label: "No",
                      value: "no",
                    },
                  ],
                },
                {
                  name: "referred_by",
                  element: "single-select",
                  label: "Referred By",
                  endPoint: "/users",
                  visibilityCondition: "return state?.is_referral === 'yes';",
                  placeholder: "Select one referral",
                  containerClassName: "col-span-2",
                },
              ],
            },
          ],
        },
        {
          name: "employment",
          className: "border rounded p-2 sm:p-4 space-y-2",
          element: "div",
          fields: [
            {
              name: "contact_details",
              element: "text",
              label: "2. Employment Details",
            },
            {
              name: "experience",
              element: "add-more-table",
              thead: [
                {
                  label: "Company",
                  name: "company",
                  element: "input",
                  placeholder: "Eg: Google",
                },
                {
                  label: "Experience",
                  name: "experience",
                  element: "input",
                  type: "number",
                  placeholder: "Eg: 2",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "btns",
      element: "div",
      className: "flex flex-col sm:flex-row gap-3 sm:gap-1 sm:justify-end sm:items-center *:sm:basis-1/6",
      fields: [
        {
          name: "reset",
          label: "Reset",
          element: "button",
          type: "reset",
        },
        {
          name: "submit",
          label: "Submit",
          element: "button",
          type: "submit",
        },
      ],
    },
  ],
});
