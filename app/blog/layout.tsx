import {authConfig} from "@/configs/auth";
import type {Metadata} from "next";
import {getServerSession} from "next-auth";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Main",
  description: "Test task - Blog.",
};

export default async function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authConfig);

  console.log("session", session);

  return (
    <>
      {session && session?.user?.data?.role === "author" && (
        <div>
          <Link href="/blog/feed">Feed</Link>
          <Link href="/blog/authfeed">Auth feed</Link>
        </div>
      )}
      {session && session?.user?.data?.role === "commentator" && (
        <div>
          <Link href="/blog/feed">allposts</Link>
        </div>
      )}

      {children}
    </>
  );
}
