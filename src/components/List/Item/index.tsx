import { ItemTask } from "../../../types/ItemTask";
import style from "../List.module.scss";

export default function Item(data: ItemTask) {
  return (
    <li className={style["item"]}>
      <h3>{data.name}</h3>
      <span>{data.time}</span>
    </li>
  );
}
