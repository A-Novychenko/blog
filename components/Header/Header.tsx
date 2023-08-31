import Link from "next/link";
import {FC} from "react";

import {Logo} from "../Logo/Logo";

import styles from "./Heder.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <Logo />
          <span className={styles.name}>Blog</span>
        </Link>
        <nav className={styles.navWrap}>
          <Link href="/registration">Registration</Link>
          <Link href="/login">Login</Link>
        </nav>
      </div>
    </header>
  );
};
