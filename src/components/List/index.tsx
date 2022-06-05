import { ItemTask } from "../../types/ItemTask";
import Item from "./Item";
import style from "./List.module.scss";

interface ListProps {
  tasks: ItemTask[];
  selectTask: (task: ItemTask) => void;
}

export default function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} task={task} />
        ))}
      </ul>
    </aside>
  );
}
