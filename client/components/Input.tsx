import { FC } from "react";
import { InputProps } from "../interfaces";

const Input: FC<InputProps> = ({name, label, type, required, ...props}: InputProps) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        required={required}
        {...props}
      />
    </>
  )
}

export default Input;