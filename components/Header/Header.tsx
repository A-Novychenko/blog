import Link from "next/link";
import {FC} from "react";

import {Logo} from "../Logo/Logo";
import {NavBar} from "./NavBar";

import styles from "./Heder.module.css";

export const Header: FC = async () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.link_logo}>
          <Logo />
          <span className={styles.name}>Blog</span>
        </Link>
        <NavBar />
      </div>
    </header>
  );
};
