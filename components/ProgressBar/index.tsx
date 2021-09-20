import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export interface IProgressBar {
  message: string;
}

function ProgressBar({ message }: IProgressBar) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue) => {
        const newValue = oldValue + 20;

        if (newValue === 100) {
          clearInterval(interval);
        }

        return newValue;
      });
    }, 1000);
  }, []);

  return (
    <>
      <progress value={value} max={100} className={styles.progressBar} />
      <p>{message}</p>
    </>
  );
}

export default ProgressBar;
