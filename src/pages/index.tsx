import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Project</title>
      </Head>
      <div className="welcomeContainer">
        <h1>Cards</h1>       
      </div>
    </>
  );
};

export default Home;
