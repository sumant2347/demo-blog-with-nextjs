import Head from "next/head";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
        <br />
        <Link href="/posts/secondPost" replace>
          <a>Second Post</a>
        </Link>
      </h2>
    </>
  );
}
