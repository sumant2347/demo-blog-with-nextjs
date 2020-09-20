import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Axios from "axios";
import Link from "next/link";
import Date from "../src/components/Date";

export default function Home({ allPostsData, fakeData }) {
  return (
    <Layout home>
      <Head>
        <title>SK Portfolio</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Frontend developer and on my way to becoming a MERN stack developer.
          Ready to work in React.js and Node.js. Love to explore new stuff.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
        <pre className={utilStyles.pre}>
          <code className={utilStyles.code}>{JSON.stringify(fakeData)}</code>
        </pre>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const { data } = await Axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  // await new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve("");
  //   }, 10000);
  // });
  return {
    props: {
      allPostsData,
      fakeData: data,
    },
  };
}
