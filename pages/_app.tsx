import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { pathname } = router;
  const { pid } = router.query;
  const check = pathname === "/ssr/[pid]";

  const [count, setCount] = useState(Number(pid));

  const plus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCount(count + 1);
  };
  const minus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setCount(count - 1);
  };

  useEffect(() => {
    router.push(`/ssr/${count}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  return (
    <div>
      <Head>
        <title>test</title>
      </Head>
      <div>
        <h2>navigation</h2>
        {/* 라우터 */}
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/profile"}>Profile</Link>
        <Link href={"/introduce"}>Introduce</Link>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}>
          Home
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/about");
          }}>
          About
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/profile");
          }}>
          Profile
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            router.push("/introduce");
          }}>
          Introduce
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setCount(1)
            router.push("/ssr/1");
          }}>
          Post
        </div>
        <div style={{ display: check ? "flex" : "none" }}>
          <button
            onClick={async (e) => {
              minus(e);
            }}
            style={{ width: 20 }}
            disabled={count === 1 ? true : false}>
            -
          </button>
          <div style={{ width: "100%", textAlign: "center" }}>{count}</div>
          <button
            onClick={(e) => {
              plus(e);
            }}
            style={{ width: 20 }}
            disabled={count === 100 ? true : false}>
            +
          </button>
        </div>
      </div>
      <Component {...pageProps} />
      <h2>footer</h2>
    </div>
  );
}
