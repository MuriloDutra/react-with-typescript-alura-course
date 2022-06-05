import { useEffect, useState } from "react";
import { parseToSeconds } from "../../common/utils/time";
import { ItemTask } from "../../types/ItemTask";
import Button from "../Button";
import Clock from "./Clock";
import style from "./Timer.module.scss";

interface Props {
  selected: ItemTask | undefined;
}

export default function Timer(props: Props) {
  const { selected } = props;
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (selected?.time) setTime(parseToSeconds(selected.time));
  }, [selected]);

  function regression(counter: number = 0) {
    setTimeout(() => {
      if (counter > 0) {
        setTime(counter - 1);
        return regression(counter - 1);
      }
    }, 1000);
  }

  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
      <p>Tempo: {time}</p>
      <div className={style.relogioWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regression(time)}>Começar!</Button>
    </div>
  );
}
