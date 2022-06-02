import { useState } from "react";
import Item from "./Item";
import style from "./List.module.scss";

export default function List() {
  const [tasks, setTasks] = useState([
    { name: "React", time: "02:00:00" },
    { name: "English", time: "01:30:00" },
    { name: "Javascript", time: "01:30:00" },
  ]);

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <Item key={index} {...task} />
        ))}
      </ul>
    </aside>
  );
}
