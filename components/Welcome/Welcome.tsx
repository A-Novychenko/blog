import {FC} from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./Welcome.module.css";

export const Welcome: FC = () => {
  return (
    <section className={styles.container}>
      <h1 className="visually-hidden">Blog</h1>
      <h2 className={styles.title}>Welcome to our blog!</h2>
      <div className={styles.content_box}>
        <div className={styles.descr_box}>
          <p className={styles.descr}>
            Here you will find various and interesting articles on a variety of
            topics. We are passionate about exploring and discussing everything
            around us and this blog is the place where we share our thoughts,
            ideas and discoveries.
          </p>
          <p className={styles.descr}>
            We do not have one narrow specialization, because the world is so
            diverse, and we want to capture all its beauty and versatility. Our
            articles are short but informative. We try to bring new ideas and
            perspectives to every topic we touch. We hope that you will find
            something that will interest you and that our posts will become a
            source of inspiration and knowledge for you.
          </p>
          <p className={styles.descr}>
            We always welcome your comments and feedback, so feel free to share
            your thoughts with us.
          </p>
          <p className={styles.descr}>
            Thank you for stopping by and lets explore this wonderful world
            together!
          </p>
        </div>
        <Image
          src="/blog.jpg"
          alt="blog"
          width="960"
          height="700"
          className={styles.img}
        />
      </div>
      <Link href="/registration" className={styles.start_btn}>
        Get Started
      </Link>
    </section>
  );
};
