import clsx from 'clsx';
import Image from 'next/image';
import emMonocle from '../../public/assets/emojis/monocle.svg';
import styles from './styles.module.css';

export interface IErrorScreen {
  className?: string;
  message: string;
  title: string;
}

function ErrorScreen({className, message, title}: IErrorScreen) {
  return (
    <div className={clsx(styles.container, className)}>
      <Image src={emMonocle} alt="Emoji pensativo" />
      <h3 className={clsx("h3", styles.title)}>{title}</h3>
      <p className={clsx("label", styles.message)}>{message}</p>
    </div>
  )
}

export default ErrorScreen;
