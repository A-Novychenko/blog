"use client";

import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

import styles from "./Heder.module.css";

export const NavBar = () => {
  const session = useSession();
  const {status} = session;

  console.log("session", session);
  console.log("status", status);

  return (
    <nav className={styles.navWrap}>
      {status === "unauthenticated" && (
        <>
          <Link href="/registration">Registration</Link>
          <Link href="/login">Login</Link>
        </>
      )}
      {status === "authenticated" && (
        <button
          onClick={() => signOut({callbackUrl: "/"})}
          style={{
            width: 50,
            height: 50,
            color: "rgb(255, 0, 0)",
            backgroundColor: "transparent",
          }}
        >
          Logout
        </button>
      )}
    </nav>
  );
};
