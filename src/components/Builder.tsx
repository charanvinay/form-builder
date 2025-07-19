import React, { useState } from "react";
import {
  IAddMoreTable,
  IBuilder,
  IButton,
  IDiv,
  IField,
  IInput,
  IRadio,
  ISingleSelect,
  ITextArea,
} from "../utils/types";
import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Radio from "./Radio";
import SingleSelect from "./SingleSelect";
import TextArea from "./TextArea";
import { Utils } from "../utils";
import AddMoreTable from "./AddMoreTable";

const Builder = (props: IBuilder) => {
  const { json } = props;
  const [formData, setFormData] = useState<Record<string, any>>({});
  const handleChange = (
    name: string,
    value: string | number | object | object[]
  ) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleButtonClick = (type?: "submit" | "reset") => {
    if (type === "reset") {
      setFormData({});
    } else if (type === "submit") {
      const inValidLabel = Utils.validateForm({ json, formData });
      if (inValidLabel) {
        alert(`${inValidLabel} required`);
      } else {
        alert("Form Submitted Successfully!!!");
        setFormData({});
      }
    }
  };

  const renderElement = (field: IField) => {
    const visible = field?.visibilityCondition
      ? Utils.jsCodeExecutor({
          code: field?.visibilityCondition || "",
          state: formData,
        })
      : true;
    if (!visible) return <React.Fragment key={field.name}></React.Fragment>;
    if (field.element === "add-more-table") {
      const node = field as IAddMoreTable;
      return (
        <AddMoreTable
          {...node}
          key={field.name}
          tbody={formData[node?.name] || ""}
          onChange={(value) => handleChange(node.name, value)}
        />
      );
    } else if (field.element === "button") {
      const node = field as IButton;
      return (
        <Button
          {...node}
          key={field.name}
          onClick={() => handleButtonClick(node.type)}
        />
      );
    } else if (field.element === "div") {
      const node = field as IDiv;
      return (
        <div className={node.className} key={node.name}>
          {renderFields(node.fields)}
        </div>
      );
    } else if (field.element === "input") {
      const node = field as IInput;
      return (
        <Input
          {...node}
          key={node.name}
          value={formData[node?.name] || ""}
          onChange={(value) => handleChange(node.name, value)}
        />
      );
    } else if (field.element === "radio") {
      const node = field as IRadio;
      return (
        <Radio
          {...node}
          key={node.name}
          value={formData[node?.name] || ""}
          onChange={(value) => handleChange(node.name, value)}
        />
      );
    } else if (field.element === "single-select") {
      const node = field as ISingleSelect;
      return (
        <SingleSelect
          {...node}
          key={node.name}
          value={formData[node?.name] || ""}
          onChange={(value) => handleChange(node.name, value)}
        />
      );
    } else if (field.element === "text") {
      return <Label {...field} key={field.name} />;
    } else if (field.element === "textarea") {
      const node = field as ITextArea;
      return (
        <TextArea
          {...node}
          key={node.name}
          value={formData[node?.name] || ""}
          onChange={(value) => handleChange(node.name, value)}
        />
      );
    }
    return <></>;
  };

  const renderFields = (fields: IField[]): React.ReactNode[] =>
    fields.map(renderElement);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 divide-y sm:divide-x bg-white rounded-md rounded-tl-none">
      <div className={`col-span-2 ${json.className}`} key={json.name}>
        {renderFields(json.fields)}
      </div>
      <FormDataPreview name={json.name} formData={formData} />
    </div>
  );
};

export default Builder;

interface IPreviewProps {
  name: string;
  formData?: Record<string, any>;
}

const FormDataPreview = (props: IPreviewProps) => {
  const { name, formData } = props;
  return (
    <div className="p-4">
      <pre className="h-full bg-gray-100 p-4 border rounded text-sm overflow-auto">
        <Label name={name} label="Form Data" />
        {JSON.stringify(formData, null, 2)}
      </pre>
    </div>
  );
};
