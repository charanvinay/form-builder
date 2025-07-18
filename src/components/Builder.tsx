import React, { useState } from "react";
import { IBuilder, IButton } from "../utils/types";
import Input from "./Input";
import Radio from "./Radio";
import Label from "./Label";
import SingleSelect from "./SingleSelect";
import TextArea from "./TextArea";
import Button from "./Button";

const Builder = (props: IBuilder) => {
  const { json } = props;
  const [formData, setFormData] = useState<Record<string, any>>({});
  const handleChange = (
    name: string,
    value: string | number | object | object[]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    let inValidLabel: string | undefined = "";

    for (const field of json.fields) {
      if (!["text"].includes(field.element)) {
        if (field.required) {
          const value = formData[field.name];
          if (!Boolean(value)) {
            inValidLabel = field.label;
            break;
          }
        }
      }
    }

    return inValidLabel;
  };

  const handleButtonClick = (type?: "submit" | "reset") => {
    if (type === "reset") {
      setFormData({});
    } else if (type === "submit") {
      const inValidLabel = validateForm();
      if (inValidLabel) {
        alert(`${inValidLabel} required`);
      } else {
        alert("Form Submitted Successfully!!!");
        setFormData({});
      }
    }
  };
  return (
    <div className="grid grid-cols-3 gap-2 divide-x bg-white rounded-md rounded-tl-none">
      <div className={`col-span-2 ${json.className}`} key={json.name}>
        {json.fields.map((field) => {
          if (field.element === "button") {
            return (
              <Button
                {...(field as IButton)}
                key={field.name}
                onClick={() => handleButtonClick(field.type)}
              />
            );
          } else if (field.element === "input") {
            return (
              <Input
                {...field}
                key={field.name}
                value={formData[field?.name] || ""}
                onChange={(value) => handleChange(field.name, value)}
              />
            );
          } else if (field.element === "radio") {
            return (
              <Radio
                {...field}
                key={field.name}
                value={formData[field?.name] || ""}
                onChange={(value) => handleChange(field.name, value)}
              />
            );
          } else if (field.element === "single-select") {
            return (
              <SingleSelect
                {...field}
                key={field.name}
                value={formData[field?.name] || ""}
                onChange={(value) => handleChange(field.name, value)}
              />
            );
          } else if (field.element === "text") {
            return <Label {...field} key={field.name} />;
          } else if (field.element === "textarea") {
            return (
              <TextArea
                {...field}
                key={field.name}
                value={formData[field?.name] || ""}
                onChange={(value) => handleChange(field.name, value)}
              />
            );
          }
          return <></>;
        })}
      </div>
      <div className="p-2 h-full">
        <Label name={props.json.name} label="Form Data" />
        <pre className="h-fit bg-gray-100 p-4 border rounded text-sm overflow-auto">
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Builder;
