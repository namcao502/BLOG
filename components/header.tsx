import * as React from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import layoutStyles from "../components/layout.module.css";

export default function Header({ name }) {
  const [count, setCount] = React.useState(0);
  return (
    <div className={layoutStyles.header}>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {" "}
        Count: {count}
      </button>
      <div className="avatar">
        <div className="w-24 mask mask-squircle">
          <Image
            priority
            src="/images/djj3.png"
            height={144}
            width={144}
            alt={name}
          />
        </div>
      </div>
      <h1 className={utilStyles.heading2Xl}>{name}</h1>
    </div>
  );
}
