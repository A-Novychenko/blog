"use client";

import {useForm, SubmitHandler} from "react-hook-form";
import {signIn} from "next-auth/react";

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
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const res = await signIn("registration", {
        email: data.email,
        password: data.password,
        role: data.role,
        redirect: true,
      });

      if (res?.status === 200) {
        console.log("tttttttttttttttttttttttttt");
        reset();
        return;

        // router.push("/library");
      } else {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!");
        // router.push("/signin");
        throw new Error("LOGIN ERROR");
        //вивести нотіфікашку!!!
      }
    } catch (error) {
      console.log("ERRRRRRRRRRRRR", error);
    }
  };

  console.log(watch("email"));
  console.log(watch("password"));
  console.log(watch("role"));

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{display: "flex", flexDirection: "column"}}
    >
      <input {...register("email")} />
      {errors.email && <span>This field is required</span>}

      <input {...register("password", {required: true})} />
      {errors.password && <span>This field is required</span>}

      <label>
        Role
        <select {...register("role")}>
          <option value="">Select...</option>
          <option value="author">Author</option>
          <option value="commentator">Commentator</option>
        </select>
      </label>

      <input type="submit" />
    </form>
  );
};
