import { IButton } from "../utils/types";

const Button = (props: IButton) => {
  const { name, className, type, label, onClick } = props;
  return (
    <button
      name={name}
      className={`btn ${type} ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
