import Link from "next/link";
import Image from "next/image";
import {FC} from "react";

import {Logo} from "../Logo/Logo";

import styles from "./Footer.module.css";

export const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>
          <Logo />
          <span className={styles.name}>Blog</span>
        </p>
        <div className={styles.linkWrap}>
          <Link href="mailto:a.Novychenko@outlook.com" target="_blanck">
            A.Novychenko@outlook.com
          </Link>
          <Link href="tel:+380679995570" target="_blanck">
            +38 067 999 55 70
          </Link>
          <Link href="https://github.com/A-Novychenko" target="_blanck">
            <Image src="/git.svg" alt="github" width={32} height={32} />
          </Link>
          <Link href="https://t.me/NovychenkoA" target="_blanck">
            <Image src="/tg.svg" alt="telegram" width={32} height={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/oleksandr-novychenko/"
            target="_blanck"
          >
            <Image src="/li.svg" alt="linkedin" width={32} height={32} />
          </Link>
          <Link
            href="https://asset.cloudinary.com/dkwbqq1n1/ff145f42980cb04526daa3935ad960ca"
            target="_blanck"
          >
            <Image src="/resume.svg" alt="resume" width={32} height={32} />
          </Link>
        </div>
      </div>
    </footer>
  );
};
