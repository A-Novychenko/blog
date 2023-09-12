import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";

import {RegisterForm} from "@/components/RegisterForm/RegisterForm";
import {authConfig} from "@/configs/auth";

export default async function RegistrationPage() {
  const session = await getServerSession(authConfig);

  console.log("session", session);

  if (session !== null) {
    redirect("/blog");
  }

  return <RegisterForm />;
}
