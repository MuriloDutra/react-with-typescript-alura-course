import { ItemTask } from "../../types/ItemTask";
import Item from "./Item";
import style from "./List.module.scss";

export default function List({ tasks }: { tasks: ItemTask[] }) {
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
