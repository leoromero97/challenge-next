import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import clsx from "clsx";
import ToastError from "../../components/ToastError";
import Routes from "../../constants/routes";
import { REGEX_MAIL, REGEX_PASSWORD } from "../../constants/regex";
import useLogin from "../../hooks/useLogin";

import styles from "./styles.module.css";

interface ILogin {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const router = useRouter();
  const { data, mutate, ...dataQuery } = useLogin();

  const onSubmit: SubmitHandler<ILogin> = (dataForm) => {
    const success = () => {
      router.push(Routes.Home);
    };
    mutate(dataForm, { onSuccess: success });
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="h3">Ingresá tu mail y contraseña</h1>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <label className={clsx("label", styles.label)}>Mail</label>
          <input
            type="text"
            {...register("email", {
              required: true,
              maxLength: 40,
              minLength: 10,
              pattern: {
                value: new RegExp(REGEX_MAIL),
                message: "",
              },
            })}
            placeholder="Mail"
            className={clsx("input input-large", styles.inputEmail)}
          />
          {errors.email?.type === "required" && (
            <ToastError
              message="No olvides ingresar tu mail"
              className={styles.errorMail}
            />
          )}
          {errors.email?.type === "maxLength" && (
            <ToastError
              message="Ups, el máximo de carácteres permitido es 40"
              className={styles.errorMail}
            />
          )}
          {errors.email?.type === "minLength" && (
            <ToastError
              message="Ups, el mínimo de carácteres permitido es 10"
              className={styles.errorMail}
            />
          )}
          {errors.email?.type === "pattern" && (
            <ToastError
              message="Ups, mail inválido, volvelo a ingresar"
              className={styles.errorMail}
            />
          )}
          <label className={clsx("label", styles.labelPassword)}>
            Contraseña
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              maxLength: 15,
              minLength: 8,
              pattern: {
                value: new RegExp(REGEX_PASSWORD),
                message: "",
              },
            })}
            placeholder="Contraseña"
            className="input input-large"
          />
          {errors.password?.type === "required" && (
            <ToastError
              message="No olvides ingresar tu contraseña"
              className={styles.errorPassword}
            />
          )}
          {errors.password?.type === "maxLength" && (
            <ToastError
              message="Ups, tu contraseña debe tener cómo máximo 15 carácteres"
              className={styles.errorPassword}
            />
          )}
          {errors.password?.type === "minLength" && (
            <ToastError
              message="Ups, tu contraseña debe tener cómo mínimo 8 carácteres"
              className={styles.errorMail}
            />
          )}
          {errors.password?.type === "pattern" && (
            <ToastError
              message="Ups, revisá tu contraseña, debe tener sólo minúsculas"
              className={styles.errorMail}
            />
          )}
          <input
            type="submit"
            className={clsx("button buttonPrimary", styles.button)}
            value="Ingresar"
          />
        </form>
      </main>
      <footer className={styles.footer}>
        <a onClick={router.back} className="button buttonTertiary">
          Volver
        </a>
      </footer>
    </div>
  );
};

export default Login;
