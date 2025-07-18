export interface IFormTypes {
  label: string;
  value: string;
}

export type IElements =
  | "button"
  | "div"
  | "input"
  | "password"
  | "radio"
  | "single-select"
  | "text"
  | "textarea";

export interface IBase {
  name: string;
  className?: string;
  element: IElements;
  required?: boolean;
}
export interface ILabel {
  name: string;
  label?: string;
  className?: string;
  required?: boolean;
}

export interface IDiv extends IBase{
  fields: IField[]
}
export interface IText extends IBase {
  element: "text";
  label?: string;
}
export interface IButton extends IBase {
  element: "button";
  label?: string;
  type?: "submit" | "reset";
  onClick?: () => void;
}
export interface IInput extends IBase {
  element: "input";
  type?: "text" | "number" | "email" | "date" | "tel" | undefined;
  label?: string;
  value?: string | number;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  onChange?: (value: string | number) => void;
}
export interface ITextArea extends IBase {
  element: "textarea";
  label?: string;
  value?: string | number;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  rows?: number;
  onChange?: (value: string | number) => void;
}
export interface IPassword extends IBase {
  element: "password";
  label?: string;
  value?: string | number;
  minLength: number;
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  onChange?: (value: string | number) => void;
}
export interface IOption {
  label: string;
  value: string | number;
}
export interface IRadio extends IBase {
  element: "radio";
  label?: string;
  value?: string | number;
  options: IOption[];
  containerClassName?: string;
  labelClassName?: string;
  onChange?: (value: string | number) => void;
}
export interface ISingleSelect extends IBase {
  element: "single-select";
  label?: string;
  value?: string | number;
  options: IOption[];
  placeholder?: string;
  containerClassName?: string;
  labelClassName?: string;
  onChange?: (value: string | number) => void;
}

export type IField =
  | IButton
  | IDiv
  | IInput
  | IPassword
  | IRadio
  | ISingleSelect
  | IText
  | ITextArea;

export interface IJSON {
  name: string;
  className?: string;
  fields: IField[];
}
export interface IBuilder {
  json: IJSON;
}
