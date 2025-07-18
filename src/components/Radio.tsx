import { IRadio } from "../utils/types";
import Label from "./Label";

const Radio = (props: IRadio) => {
  const {
    name,
    label = "",
    required,
    onChange,
    value,
    className = "",
    options = [],
    containerClassName = "",
    labelClassName = "",
  } = props;
  return (
    <div key={name} className={containerClassName}>
      <Label name={`${name}_label`} label={label} className={labelClassName} required={required}/>
      <div className="flex items-center gap-y-2 flex-wrap">
        {options.map((option) => {
          const inputId = `${name}-${option.value}`;
          return (
            <span className="space-x-1" key={option.value}>
              <input
                id={inputId}
                type="radio"
                name={name}
                checked={option.value === value}
                value={option.value}
                className={`radio-btn ${className}`}
                onChange={(e) => onChange && onChange(e.target.value)}
              />
              <label htmlFor={inputId} className="radio-label">
                {option.label}
              </label>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Radio;
