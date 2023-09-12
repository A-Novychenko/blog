import {Welcome} from "@/components/Welcome/Welcome";
import {authConfig} from "@/configs/auth";
import {getServerSession} from "next-auth";

export default async function Home() {
  const session = await getServerSession(authConfig);

  console.log("sessionH", session);
  return <Welcome />;
}
