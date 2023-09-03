import Link from "next/link";
import {FC} from "react";

import {Logo} from "../Logo/Logo";

import styles from "./Heder.module.css";
import {getServerSession} from "next-auth";

import {authConfig} from "@/configs/auth";

import {NavBar} from "./NavBar";

export const Header: FC = async () => {
  const session = await getServerSession(authConfig);

  console.log("sessionHeader", session);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo />
          <span className={styles.name}>Blog</span>
        </Link>
        {/* {session && session?.user?.data?.role === "author" && (
          <div>
            <Link href="/blog/feed">Feed</Link>
            <Link href="/blog/authfeed">Auth feed</Link>
          </div>
        )}
        {session && session?.user?.data?.role === "commentator" && (
          <div>
            <Link href="/blog/feed">Feed</Link>
          </div>
        )} */}
        <NavBar />
      </div>
    </header>
  );
};
