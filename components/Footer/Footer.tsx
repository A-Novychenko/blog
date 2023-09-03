import Link from "next/link";
import Image from "next/image";
import {FC} from "react";

import {Logo} from "../Logo/Logo";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Link href="/" className={styles.link_logo}>
          <Logo />
          <span className={styles.name}>Blog</span>
        </Link>
        <ul className={styles.linkWrap}>
          <li className={styles.link_item}>
            <Link href="mailto:a.Novychenko@outlook.com" target="_blanck">
              A.Novychenko@outlook.com
            </Link>
          </li>
          <li className={styles.link_item}>
            <Link href="tel:+380679995570" target="_blanck">
              +38 067 999 55 70
            </Link>
          </li>
          <li className={styles.link_item}>
            <Link href="https://github.com/A-Novychenko" target="_blanck">
              <Image src="/git.svg" alt="github" width={32} height={32} />
            </Link>
          </li>
          <li className={styles.link_item}>
            <Link href="https://t.me/NovychenkoA" target="_blanck">
              <Image src="/tg.svg" alt="telegram" width={32} height={32} />
            </Link>
          </li>
          <li className={styles.link_item}>
            <Link
              href="https://www.linkedin.com/in/oleksandr-novychenko/"
              target="_blanck"
            >
              <Image src="/li.svg" alt="linkedin" width={32} height={32} />
            </Link>
          </li>
          <li className={styles.link_item}>
            <Link
              href="https://asset.cloudinary.com/dkwbqq1n1/ff145f42980cb04526daa3935ad960ca"
              target="_blanck"
            >
              <Image src="/resume.svg" alt="resume" width={32} height={32} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};
