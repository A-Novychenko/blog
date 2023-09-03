"use client";

import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

import styles from "./NavBar.module.css";

export const NavBar = () => {
  const session = useSession();
  const {status} = session;
  const role = session?.data?.user?.data?.role;

  return (
    <nav className={styles.navWrap}>
      {session && role === "author" && (
        <div>
          <Link href="/blog">Feed</Link>
          <Link href="/blog/authfeed">Auth feed</Link>
        </div>
      )}
      {session && role === "commentator" && (
        <div>
          <Link href="/blog">Feed</Link>
        </div>
      )}
      {status === "unauthenticated" && (
        <>
          <Link href="/registration">Registration</Link>
          <Link href="/login">Login</Link>
        </>
      )}
      {status === "authenticated" && (
        <button
          onClick={() => signOut({callbackUrl: "/"})}
          className={styles.logoutBtn}
        >
          Logout
        </button>
      )}
    </nav>
  );
};
