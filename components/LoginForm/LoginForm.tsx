"use client";

import {useForm, SubmitHandler} from "react-hook-form";
import {signIn} from "next-auth/react";
import Image from "next/image";

import {useRouter} from "next/navigation";

import styles from "./LoginForm.module.css";
import {useState} from "react";

type Inputs = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm<Inputs>();

  const [error, setError] = useState("");

  const {push} = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await signIn("login", {
        email: data.email,
        password: data.password,
        redirect: false,
      });

      if (res?.status === 200 && !res.error) {
        reset();
        push("/blog");
      } else {
        throw new Error(
          `${
            res?.error === "CredentialsSignin"
              ? "email or password is not correct"
              : res?.error
          }`
        );
      }
    } catch (e: any) {
      setError(`${e?.message}`);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Login</h1>
        {error && <p className={styles.err_text}>{error}</p>}
        <div className={styles.form_wrap}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <label className={styles.label}>
              <p>Email</p>
              <input
                required
                {...register("email", {
                  required: true,
                  pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                })}
                className={styles.input}
              />
              {errors.email && (
                <span className={styles.error}>Invalid email address</span>
              )}
            </label>

            <label className={styles.label}>
              <p>Password</p>
              <input
                required
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 4,
                  maxLength: 8,
                })}
                className={styles.input}
              />
              {errors.password && (
                <span className={styles.error}>
                  the field is required and must contain from 4 to 8 characters
                </span>
              )}
            </label>

            <input value="Login" type="submit" className={styles.btn} />
          </form>
          <Image
            src="./login.svg"
            alt="login"
            width="300"
            height="400"
            priority={true}
            style={{
              fill: "transparent",
            }}
          />
        </div>
      </div>
    </section>
  );
};
