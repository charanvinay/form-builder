import { useCallback, useEffect, useState } from "react";
import { IOption, ISingleSelect } from "../utils/types";
import Label from "./Label";
import { Utils } from "../utils";

const SingleSelect = (props: ISingleSelect) => {
  const {
    name,
    label = "",
    required,
    onChange,
    value,
    className = "",
    placeholder = "",
    endPoint = "",
    containerClassName = "",
    labelClassName = "",
  } = props;

  const [options, setOptions] = useState<IOption[]>([]);

  const fetchOptions = useCallback(async () => {
    try {
      const response = await Utils.makeApiCall({ endPoint });
      if (response?.status) {
        setOptions(() =>
          response.data.map((option) => ({
            value: option.id,
            label: option.name,
          }))
        );
      }
    } catch (error) {}
  }, [endPoint]);

  useEffect(() => {
    if (endPoint) {
      fetchOptions();
    } else {
      setOptions([...(props.options || [])]);
    }
  }, [fetchOptions, props.options, endPoint]);

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
