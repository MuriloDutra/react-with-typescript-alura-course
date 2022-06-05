import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Button(props: ButtonProps) {
  const { type = "button", children, onClick } = props;
  return (
    <button onClick={onClick} type={type} className={style.botao}>
      {children}
    </button>
  );
}
