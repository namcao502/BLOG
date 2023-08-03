import React from "react";
import Image from "next/image";
import imgSrc from "../public/images/dungtt2.jpg";
import Head from "next/head";
import Footer from "../components/footer";

export default function FirstPost() {
  return (
    <div>
      <Head>
        <title> DSSJ3 </title>
      </Head>
      <h2>Just kidding</h2>

      <h1>Super Saiyan 3 Dungx</h1>

      <div className="mockup-phone">
        <div className="camera"></div>
        <div className="display">
          <Image src={imgSrc} alt="Dungx ssj3"></Image>
        </div>
      </div>

      <Footer isHome></Footer>
    </div>
  );
}
