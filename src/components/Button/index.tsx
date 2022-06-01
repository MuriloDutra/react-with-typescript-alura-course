import React from "react";
import style from "./Button.module.scss";

export default class Button extends React.Component {
  render(): React.ReactNode {
    return <button className={style.botao}>Botão</button>;
  }
}
