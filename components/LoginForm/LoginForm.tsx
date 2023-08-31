"use client";

import {useForm, SubmitHandler} from "react-hook-form";
import {signIn} from "next-auth/react";

import {useRouter} from "next/navigation";

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

  const {push} = useRouter();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const res = await signIn("login", {
        email: data.email,
        password: data.password,
        redirect: false,
      });
      console.log("res", res);
      if (res?.status === 200 && !res.error) {
        console.log("gggggggggggggggggggggggggggggggggggggggggggg");
        reset();
        push("/blog");

        // router.push("/library");
      } else {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
        // router.push("/signin");
        throw new Error("LOGIN ERROR");
        //вивести нотіфікашку!!!
      }
    } catch (error) {}
  };

  console.log(watch("email"));
  console.log(watch("password"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="email" {...register("email")} />
      {errors.email && <span>This field is required</span>}

      <input {...register("password", {required: true})} />
      {errors.password && <span>This field is required</span>}

      <input type="submit" />
    </form>
  );
};
