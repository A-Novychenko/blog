import {getServerSession} from "next-auth";
import {authConfig} from "@/configs/auth";
import {revalidatePath} from "next/cache";

import {Form} from "./FormComponent";
import styles from "./AddComment.module.css";

const {NEXTAUTH_URL} = process.env;

export const AddComment = async ({id}: {id: string}) => {
  const session = await getServerSession(authConfig);

  const userId = session?.user.data._id;
  const ownerName = session?.user.data.email;

  const onSubmit = async (form: FormData) => {
    "use server";

    const _id = id;
    const comment = form.get("comment")?.toString();

    // const res = await fetch("http://localhost:3000/api/post/comment", {
    const res = await fetch(`${NEXTAUTH_URL}/api/post/comment`, {
      method: "PUT",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({
        _id,
        data: {owner: ownerName, comment},
      }),
    });

    if (res.ok) {
      // revalidatePath("/blog");

      console.log("GOOOOOOOD");
    }
  };

  return (
    <div className={styles.form_wrap}>
      {/* <form action={onSubmit} className={styles.form}>
        <input required name="comment" className={styles.input} />

        <input type="submit" value="Add comment" className={styles.btn} />
      </form> */}
      <Form onSubmit={onSubmit} />
    </div>
  );
};
