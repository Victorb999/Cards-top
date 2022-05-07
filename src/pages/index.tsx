import type { NextPage } from "next";
import Head from "next/head";
import { Card } from "../components/Card";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>New Project</title>
      </Head>
      <div className="welcomeContainer">
        <h1>Cards</h1>
        <Card />     
      </div>
    </>
  );
};

export default Home;
