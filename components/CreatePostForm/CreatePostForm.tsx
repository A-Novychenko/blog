// "use client";

import {useForm, SubmitHandler, set} from "react-hook-form";
import {signIn, useSession} from "next-auth/react";
import Image from "next/image";
import {useRouter} from "next/navigation";

import styles from "./CreatePostForm.module.css";
import {useState} from "react";
import {get} from "http";
import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {revalidatePath} from "next/cache";

type Inputs = {
  title: string;
  description: string;
};

export const CreatePostForm = async () => {
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   formState: {errors},
  // } = useForm<Inputs>();

  // const session = useSession();
  const session = await getServerSession(authConfig);

  const userId = session?.user.data._id;

  const onSubmit = async (form: FormData) => {
    "use server";

    const title = form.get("title")?.toString();
    const description = form.get("description")?.toString();
    const owner = userId;

    const res = await fetch("http://localhost:3000/api/post/create", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title, description, owner: userId}),
    });

    if (res.ok) {
      revalidatePath("/feed");
      console.log("GOOOOOOOD");
    }
    // const {data} = await res.json();
  };

  // const onSubmit1: SubmitHandler<Inputs> = async ({title, description}) => {
  //   try {
  //     const res = await fetch("/api/post/create", {
  //       method: "POST",
  //       headers: {"Content-Type": "application/json"},
  //       body: JSON.stringify({title, description, owner: userId}),
  //     });

  //     const {data} = await res.json();

  //     console.log("res", data);

  //     if (res.status === 409) {
  //       throw new Error("This user already exists");
  //     }

  //     if (res.status !== 200) {
  //       throw new Error(`${res.statusText}`);
  //     }

  //     if (res.status === 200) {
  //       const res = await signIn("login", {
  //         email: data.email,
  //         password: data.password,

  //         redirect: false,
  //       });
  //     }
  //   } catch (e: any) {
  //     console.log("e", e);
  //   }
  // };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.title}>Add post</h1>

        <div className={styles.form_wrap}>
          <form action={onSubmit} className={styles.form}>
            <label className={styles.label}>
              <p>Title</p>
              <input
                required
                name="title"
                // {...register("title", {
                //   required: true,
                //   minLength: 4,
                //   maxLength: 20,
                // })}
                className={styles.input}
              />
              {/* {errors.title && (
                <span className={styles.title}>Invalid email address</span>
              )} */}
            </label>

            <label className={styles.label}>
              <p>Description</p>
              <input
                name="description"
                required
                // {...register("description", {
                //   required: true,
                //   minLength: 4,
                //   maxLength: 200,
                // })}
                className={styles.input}
              />
              {/* {errors.description && (
                <span className={styles.error}>
                  the field is required and must contain from 4 to 8 characters
                </span>
              )} */}
            </label>

            <input type="submit" value="Add post" className={styles.btn} />
          </form>
        </div>
      </div>
    </section>
  );
};
// "use client";

// import {useForm, SubmitHandler, set} from "react-hook-form";
// import {signIn, useSession} from "next-auth/react";
// import Image from "next/image";
// import {useRouter} from "next/navigation";

// import styles from "./CreatePostForm.module.css";
// import {useState} from "react";

// type Inputs = {
//   title: string;
//   description: string;
// };

// export const CreatePostForm = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: {errors},
//   } = useForm<Inputs>();

//   const session = useSession();

//   const userId = session.data?.user.data._id;

//   const onSubmit: SubmitHandler<Inputs> = async ({title, description}) => {
//     try {
//       const res = await fetch("/api/post/create", {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify({title, description, owner: userId}),
//       });

//       const {data} = await res.json();

//       console.log("res", data);

//       if (res.status === 409) {
//         throw new Error("This user already exists");
//       }

//       if (res.status !== 200) {
//         throw new Error(`${res.statusText}`);
//       }

//       if (res.status === 200) {
//         const res = await signIn("login", {
//           email: data.email,
//           password: data.password,

//           redirect: false,
//         });
//       }
//     } catch (e: any) {
//       console.log("e", e);
//     }
//   };

//   return (
//     <section className={styles.section}>
//       <div className={styles.container}>
//         <h1 className={styles.title}>Add post</h1>

//         <div className={styles.form_wrap}>
//           <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
//             <label className={styles.label}>
//               <p>Title</p>
//               <input
//                 required
//                 {...register("title", {
//                   required: true,
//                   minLength: 4,
//                   maxLength: 20,
//                 })}
//                 className={styles.input}
//               />
//               {errors.title && (
//                 <span className={styles.title}>Invalid email address</span>
//               )}
//             </label>

//             <label className={styles.label}>
//               <p>Description</p>
//               <input
//                 required
//                 {...register("description", {
//                   required: true,
//                   minLength: 4,
//                   maxLength: 200,
//                 })}
//                 className={styles.input}
//               />
//               {errors.description && (
//                 <span className={styles.error}>
//                   the field is required and must contain from 4 to 8 characters
//                 </span>
//               )}
//             </label>

//             <input type="submit" value="Add post" className={styles.btn} />
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };
