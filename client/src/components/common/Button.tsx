import React from "react";
import { ButtonProps } from "../../types/components";
import Spinner from "./Spinner";

const Button = ({
  type,
  buttonStyle,
  text,
  isLoading,
  className,
  onClick,
  children,
}: ButtonProps) => {
  const btnClass = buttonStyle || "primary";
  return (
    <button
      type={type}
      className={`btn btn-${btnClass} ${className}`}
      onClick={onClick}
      tabIndex={0}
    >
      {isLoading ? (
        <Spinner size="button" />
      ) : (
        <>
          {text}
          {children}
        </>
      )}
    </button>
  );
};

export default Button;
