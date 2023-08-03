import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Header from "./header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to become young buffalo like Dungx"
        />
      </Head>
      <main>{children}</main>
    </div>
  );
}
