import { ItemTask } from "../../../types/ItemTask";
import style from "../List.module.scss";

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
      }`}
      onClick={() => selectTask(task)}
    >
      <h3>{task.name}</h3>
      <span>{task.time}</span>
    </li>
  );
}
