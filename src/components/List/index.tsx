import React from "react";
import style from "./List.module.scss";

export default function List() {
  const tasks = [
    { name: "React", time: "02:00:00" },
    { name: "English", time: "01:30:00" },
    { name: "Javascript", time: "01:30:00" },
  ];

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task, index) => (
          <li className={style["item"]} key={index}>
            <h3>{task.name}</h3>
            <span>{task.time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
