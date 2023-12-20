import React from "react";

interface IProps {
  className?: string;
  disabled?: string;
  children: React.ReactNode;
}
const Button = ({ className, disabled, children }: IProps) => {
  const handleClick = () => {};
  const a = 1;

  console.log("KAKA");

  const data: string = "a";
  return (
    <button className="xx" onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
