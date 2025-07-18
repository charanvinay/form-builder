import { ITextArea } from "../utils/types";
import Label from "./Label";

const TextArea = (props: ITextArea) => {
  const {
    name,
    label = "",
    value,
    required,
    onChange,
    rows = 2,
    className = "",
    placeholder = "Enter text...",
    containerClassName = "",
    labelClassName = "",
  } = props;
  return (
    <div key={name} className={containerClassName}>
      <Label name={`${name}_label`} label={label} className={labelClassName} required={required}/>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        rows={rows}
        className={className}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default TextArea;
