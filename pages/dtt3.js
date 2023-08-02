import Image from "next/image";
import imgSrc from "../public/images/dungtt.jpg";
import Head from "next/head";
import Layout from "../components/layout.js";
import { siteTitle } from "../components/layout.js";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h2>Bố đùa thôi</h2>

      <h1>Dũng trẻ trâu cấp 3</h1>

      <Image src={imgSrc} alt="Dũng trẻ trâu ssj3"></Image>
    </Layout>
  );
}
