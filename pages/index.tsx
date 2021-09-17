import type { NextPage } from "next";
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

const Onboarding: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={clsx("h1", styles.title)}>A tomar !</h1>
        <p className={clsx("body-i", styles.description)}>
          Registrate para poder jugar
        </p>
        <Link href="Login/">
          <a className={clsx("button buttonPrimary", styles.buttonLogin)}>
            Iniciar sesión
          </a>
        </Link>
        <Link href="#">
          <a className="button buttonTertiary">
            Registrarse
          </a>
        </Link>
      </main>
    </div>
  );
};

export default Onboarding;
