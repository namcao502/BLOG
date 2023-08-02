import React from "react";
import Image from "next/image";
import imgSrc from "../public/images/dungtt.jpg";
import Head from "next/head";
import Layout from "../components/layout";
import { siteTitle } from "../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>Just kidding</h2>

      <h1>Super Saiyan 3 Dungx</h1>

      <Image src={imgSrc} alt="Dungx ssj3"></Image>
    </Layout>
  );
}
