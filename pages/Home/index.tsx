import type { NextPage } from "next";
import clsx from "clsx";
import Link from "next/link";
import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="h1">Empecemos</h1>
        <p className={clsx("body-i", styles.description)}>
          Ingresá la cantidad de personas que van a jugar
        </p>
        <form className={styles.form}>
          <label className={clsx("label", styles.label)}>
            Cantidad de jugadores
          </label>
          <input
            type="text"
            placeholder="5"
            maxLength={2}
            minLength={1}
            className="input input-small"
          />
        </form>
      </main>
      <footer className={styles.footer}>
        <Link href="/">
          <a className="button buttonTertiary">Cerrar sesión</a>
        </Link>
      </footer>
    </div>
  );
};

export default Home;
