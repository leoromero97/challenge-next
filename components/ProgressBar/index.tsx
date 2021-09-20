import styles from "./styles.module.css";

export interface IProgressBar {
  value: number;
  max: number;
  message: string;
}

function ProgressBar({ value, max, message }: IProgressBar) {
  return (
    <div>
      <progress value={value} max={max} className={styles.progressBar} />
      <p>{message}</p>
    </div>
  );
}

export default ProgressBar;
