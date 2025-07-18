import { IInput } from "../utils/types";
import Label from "./Label";

const Input = (props: IInput) => {
  const {
    name,
    label = "",
    type = "text",
    value,
    required,
    onChange,
    className = "",
    placeholder = "Enter text",
    containerClassName = "",
    labelClassName = "",
  } = props;
  return (
    <div key={name} className={containerClassName}>
      <Label name={`${name}_label`} label={label} className={labelClassName} required={required}/>
      <input
        type={type}
        name={name}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
