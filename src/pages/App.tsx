import { useState } from "react";
import Form from "../components/Form";
import List from "../components/List";
import Timer from "../components/Timer";
import { ItemTask } from "../types/ItemTask";
import style from "./App.module.scss";

function App() {
  const [tasks, setTasks] = useState<ItemTask[]>([]);
  const [selected, setSelected] = useState<ItemTask>();

  function selectTask(selectedTask: ItemTask) {
    setSelected(selectedTask);
    setTasks((previousTasks) =>
      previousTasks.map((task) => ({
        ...task,
        selected: task.id === selectedTask.id ? true : false,
      }))
    );
  }

  return (
    <div className={style.AppStyle}>
      <Form setTasks={setTasks} />
      <List tasks={tasks} selectTask={selectTask} />
      <Timer selected={selected} />
    </div>
  );
}

export default App;
