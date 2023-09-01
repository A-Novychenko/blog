"use client";

import {useForm, SubmitHandler, set} from "react-hook-form";
import {signIn} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import styles from "./RegisterForm.module.css";
import {useState} from "react";

type Inputs = {
  email: string;
  password: string;
  role: string;
};

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm<Inputs>();

  const {push} = useRouter();

  const [error, setError] = useState("");

  const onSubmit: SubmitHandler<Inputs> = async ({email, password, role}) => {
    setError("");
    try {
      const res = await fetch("http://localhost:3000/api/user/registration", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password, role}),
      });

      if (res.status === 409) {
        throw new Error("This user already exists");
      }

      if (res.status !== 200) {
        throw new Error(`${res.statusText}`);
      }

      if (res.status === 200) {
        const res = await signIn("login", {
          email,
          password,
          role,
          redirect: false,
        });

        if (res?.ok) {
          push("/blog");
        }
      }
    } catch (e: any) {
      setError(`${e?.message}`);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Registration</h1>
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

            <label className={styles.label}>
              <p>Role</p>
              <select
                {...register("role", {required: true})}
                className={styles.input}
              >
                <option value="">Select...</option>
                <option value="author">Author</option>
                <option value="commentator">Commentator</option>
              </select>
              {errors.role && (
                <span className={styles.error}>This field is required</span>
              )}
            </label>

            <input type="submit" value="Register" className={styles.btn} />
          </form>
          <div className={styles.img_wrap}>
            <Image
              src="/register.jpg"
              alt="register"
              width="300"
              height="300"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};