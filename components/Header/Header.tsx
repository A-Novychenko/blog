import Link from "next/link";
import {FC} from "react";

import {Logo} from "../Logo/Logo";

import styles from "./Heder.module.css";

export const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <p>
          <Logo />
          <span className={styles.name}>Blog</span>
        </p>
        <nav className={styles.navWrap}>
          <Link href="/register">Registration</Link>
          <Link href="/register">Login</Link>
        </nav>
      </div>
    </header>
  );
};
