import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { GetStaticProps } from "next";
import React from "react";
import { useRouter } from "next/navigation";
import Footer from "../components/footer";
import Image from "next/image";
import layoutStyles from "../components/layout.module.css";

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  const router = useRouter();
  var ssj: { name: string; img: string }[] = [
    {
      name: "Dungx",
      img: "/images/dungtt.jpg",
    },
    {
      name: "Base Form",
      img: "/images/djjbase.png",
    },
    {
      name: "Super Saiyan 1",
      img: "/images/djj1.png",
    },
    {
      name: "Super Saiyan 2",
      img: "/images/djj2.png",
    },
    {
      name: "Super Saiyan 3",
      img: "/images/djj3.png",
    },
    {
      name: "Super Saiyan 4",
      img: "/images/djj4.png",
    },
  ];

  const [count, setCount] = React.useState(0);

  function handleClick() {
    if (count < 5) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  }

  return (
    <div>
      <Head>
        <title>Just SSJ</title>
      </Head>
      <div className={layoutStyles.header}>
        <div className="avatar">
          <div className="w-300 mask mask-squircle">
            <Image
              priority
              src={ssj[count]["img"]}
              height={400}
              width={300}
              alt="DSSJ"
            />
          </div>
        </div>
        <p className={utilStyles.heading2Xl}>
          This is {ssj[count]["name"]}
          <br />
        </p>
      </div>
      <section className={utilStyles.headingCenter}>
        <p className={utilStyles.paddingItem}>
          Wanna see Dungx's super young buffalo transformation? <br />
        </p>
        <button className={"btn btn-neutral"} onClick={handleClick}>
          Transform!!!
        </button>
      </section>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section> */}
      <br />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/alljj.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">This is a concept about Super Saiyan</p>
            <button
              className="btn btn-neutral"
              onClick={() => {
                router.push("dtt3");
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
      <Footer isHome={false}></Footer>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
