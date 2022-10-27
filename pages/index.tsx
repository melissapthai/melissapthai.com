import type { NextPage } from "next";
import Head from "next/head";

import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Melissa Thai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="flex flex-col p-8">
        <div className="flex flex-col space-y-8 pb-8 w-[44rem] self-center text-center text-lg leading-relaxed antialiased">
          <div>
            <span className="font-semibold">Hi there!</span> My name is Melissa and I’m a software engineer and rock climber.
          </div>
          <div>
          I like to build things, travel around in my van to climb mountains, and occasionally tinker on the piano when no one is looking.
          </div>
          <div>
          This site is the central hub for all my musings, learnings, and adventures. If you want to chat or collaborate on a project, let me know! 
          </div>
        </div>
        <div className="flex flex-row">
          <div className="w-1/2">
            Blog
          </div>
          <div className="w-1/2">
            Contact
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
