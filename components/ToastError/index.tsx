import clsx from 'clsx';
import Image from 'next/image';
import icAlert from '../../public/assets/icons/alert.svg';
import styles from './styles.module.css';

export interface IToastError {
  className?: string;
  message: string;
}

function ToastError({ className, message }: IToastError) {
  return (
    <div className={clsx(styles.container, className)}>
      <Image src={icAlert} alt="alert" />
      <p className={clsx("label", styles.message)}>{message}</p>
    </div>
  );
}

export default ToastError;
