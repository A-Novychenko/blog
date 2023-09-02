import {authConfig} from "@/configs/auth";
import {getServerSession} from "next-auth";

import {redirect} from "next/navigation";

export default async function BlogPage() {
  const session = await getServerSession(authConfig);

  console.log("session", session);

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <h1>BLOG</h1>
    </>
  );
}
