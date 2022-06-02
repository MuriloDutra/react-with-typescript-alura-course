import React from "react";
import { ItemTask } from "../../types/ItemTask";
import Button from "../Button";
import style from "./Form.module.scss";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ItemTask[]>>;
}

interface FormState {
  name: string;
  time: string;
}

export default class Form extends React.Component<FormProps> {
  state: FormState = {
    name: "",
    time: "00:00",
  };

  addTask(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    this.props.setTasks((prevTasks) => [...prevTasks, { ...this.state }]);
  }

  render(): React.ReactNode {
    return (
      <form className={style.novaTarefa} onSubmit={this.addTask.bind(this)}>
        <div className={style.inputContainer}>
          <label htmlFor="task">Adicione um novo estudo</label>
          <input
            value={this.state.name}
            onChange={(event) =>
              this.setState({ ...this.state, name: event.target.value })
            }
            type="text"
            name="task"
            id="task"
            placeholder="O que você quer estudar"
            required
          />
        </div>
        <div className={style.inputContainer}>
          <label htmlFor="time">Tempo</label>
          <input
            value={this.state.time}
            onChange={(event) =>
              this.setState({ ...this.state, time: event.target.value })
            }
            type="time"
            step={1}
            name="time"
            id="time"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Button type="submit">Adicionar</Button>
      </form>
    );
  }
}
