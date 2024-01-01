import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const {
    label,
    size,
    rounded,
    borderColor,
    backGroundColor,
    hoverBackGroundColor,
    children,
  } = props;

  return <button> {label ? label : children} </button>;
};

export default Button;
