import style from "./Clock.module.scss";

interface Props {
  time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minutesTen, minuteUnit] = String(minutes).padStart(2, "0");
  const [secondsTen, secondsUnit] = String(seconds).padStart(2, "0");

  return (
    <>
      <span className={style.relogioNumero}>{minutesTen}</span>
      <span className={style.relogioNumero}>{minuteUnit}</span>
      <span className={style.relogioDivisao}>:</span>
      <span className={style.relogioNumero}>{secondsTen}</span>
      <span className={style.relogioNumero}>{secondsUnit}</span>
    </>
  );
}
