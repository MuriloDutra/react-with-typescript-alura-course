import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export default class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    const { type = "button", children } = this.props;
    return (
      <button type={type} className={style.botao}>
        {children}
      </button>
    );
  }
}
