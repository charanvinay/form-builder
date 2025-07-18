import { ISingleSelect } from "../utils/types";
import Label from "./Label";

const SingleSelect = (props: ISingleSelect) => {
  const {
    name,
    label = "",
    required,
    onChange,
    value,
    className = "",
    placeholder = "",
    options = [],
    containerClassName = "",
    labelClassName = "",
  } = props;
  return (
    <div key={name} className={containerClassName}>
      <Label
        name={`${name}_label`}
        label={label}
        className={labelClassName}
        required={required}
      />
      <select
        className={className}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => {
          const inputId = `${name}-${option.value}`;
          return (
            <option key={inputId} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SingleSelect;
