import type { NextPage } from 'next';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import styles from './styles.module.css';

const Login: NextPage = () => {
  return (
    <div className={styles.container} >
      <Head>
      <title>Next Challenge | Login</title>
        <meta name="description" content="Challenge to Next Js generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={clsx('h3')}>Ingresá tu mail y contraseña</h1>
        <form className={styles.form}>
          <label className={clsx('label', styles.label)}>Mail</label>
          <input type="text" placeholder="Mail" maxLength={30} minLength={1} className={clsx('input input-large', styles.inputEmail)} />
          <label className={clsx('label', styles.label)}>Contraseña</label>
          <input type="password" placeholder="Contraseña" maxLength={15} minLength={8} className={clsx('input input-large', styles.inputPassword)} />
          <Link href="./Home/">
            <a className={clsx('button buttonPrimary', styles.button)}>
              Ingresar
            </a>
          </Link>
        </form>
      </main>
      <footer className={styles.footer}>
      <Link href="http://localhost:3000/">
        <a className={clsx('button buttonTertiary')}>
          Volver
        </a>
      </Link>
      </footer>
    </div>
  )
}

export default Login;
