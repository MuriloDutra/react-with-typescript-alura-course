import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  children: React.ReactNode;
}

export default class Button extends React.Component<ButtonProps> {
  render(): React.ReactNode {
    return <button className={style.botao}>{this.props.children}</button>;
  }
}
