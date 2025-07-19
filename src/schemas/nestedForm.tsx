import { IJSON } from "../utils/types";

export const nestedForm = (): IJSON => ({
  name: "nested_form",
  className: "w-full bg-white rounded p-4 sm:p-6 space-y-4",
  fields: [
    {
      name: "heading",
      element: "text",
      label: "Dynamic Form Example - Nested",
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
                  name: "gender",
                  element: "radio",
                  label: "Gender",
                  required: true,
                  containerClassName: "col-span-2",
                  options: [
                    {
                      label: "Male",
                      value: "male",
                    },
                    {
                      label: "Female",
                      value: "female",
                    },
                    {
                      label: "Other",
                      value: "other",
                    },
                  ],
                },
                {
                  name: "dob",
                  element: "input",
                  type: "date",
                  label: "Date Of Birth",
                  containerClassName: "col-span-2",
                },
              ],
            },
          ],
        },
        {
          name: "contact",
          className: "border rounded p-2 sm:p-4 space-y-2",
          element: "div",
          fields: [
            {
              name: "contact_details",
              element: "text",
              label: "2. Contact Details",
            },
            {
              name: "primary_details_container",
              element: "div",
              className: "flex flex-col sm:grid sm:grid-cols-6 gap-2 gap-y-3 sm:gap-y-5",
              fields: [
                {
                  name: "email",
                  element: "input",
                  type: "email",
                  label: "Email",
                  containerClassName: "col-span-2",
                },
                {
                  name: "phno",
                  element: "input",
                  type: "number",
                  placeholder: "Enter phone number",
                  label: "Phone Number",
                  containerClassName: "col-span-2",
                },
                {
                  name: "country",
                  element: "single-select",
                  label: "Country",
                  containerClassName: "col-span-2",
                  placeholder: "Select your country",
                  options: [
                    { label: "Australia", value: "au" },
                    { label: "Brazil", value: "br" },
                    { label: "Canada", value: "ca" },
                    { label: "China", value: "cn" },
                    { label: "France", value: "fr" },
                    { label: "Germany", value: "de" },
                    { label: "India", value: "in" },
                    { label: "Italy", value: "it" },
                    { label: "Japan", value: "jp" },
                    { label: "Mexico", value: "mx" },
                    { label: "Netherlands", value: "nl" },
                    { label: "New Zealand", value: "nz" },
                    { label: "Singapore", value: "sg" },
                    { label: "South Africa", value: "za" },
                    { label: "South Korea", value: "kr" },
                    { label: "Spain", value: "es" },
                    { label: "Sweden", value: "se" },
                    { label: "United Arab Emirates", value: "ae" },
                    { label: "United Kingdom", value: "uk" },
                    { label: "United States", value: "us" },
                  ],
                },
                {
                  name: "address",
                  element: "textarea",
                  label: "Where do you live?",
                  required: true,
                  rows: 4,
                  placeholder: "Eg: Kondapur, Hyderabad",
                  containerClassName: "col-span-full",
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
