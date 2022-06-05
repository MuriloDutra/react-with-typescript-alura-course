import React, { useState } from "react";
import { ItemTask } from "../../types/ItemTask";
import Button from "../Button";
import style from "./Form.module.scss";
import { v4 as uuidv4 } from "uuid";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<ItemTask[]>>;
}

export default function Form({ setTasks }: FormProps) {
  const [name, setName] = useState("");
  const [time, setTime] = useState("00:00");

  function addTask(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    setTasks((prevTasks) => [
      ...prevTasks,
      { name, time, selected: false, completed: false, id: uuidv4() },
    ]);

    setName("");
    setTime("");
  }

  return (
    <form className={style.novaTarefa} onSubmit={addTask}>
      <div className={style.inputContainer}>
        <label htmlFor="task">Adicione um novo estudo</label>
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
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
          value={time}
          onChange={(event) => setTime(event.target.value)}
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
