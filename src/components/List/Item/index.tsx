import { ItemTask } from "../../../types/ItemTask";
import style from "./Item.module.scss";

interface Props {
  task: ItemTask;
  selectTask: (task: ItemTask) => void;
}
export default function Item(props: Props) {
  const { task, selectTask } = props;

  return (
    <li
      className={`${style["item"]} ${
        task.selected ? style.itemSelecionado : ""
      } ${task.completed ? style.itemCompletado : ""}`}
      onClick={() => !task.completed && selectTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
}
