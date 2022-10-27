import type { NextPage } from "next";
import Head from "next/head";

import Button from "../components/button";
import Hero from "../components/hero";
import siteMetadata from "../data/siteMetadata";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Melissa Thai</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <div className="flex flex-col p-8">
        <div className="flex w-[44rem] flex-col space-y-8 self-center pb-8 text-center text-lg leading-relaxed antialiased">
          <div>
            <span className="font-semibold">Hi there!</span> My name is Melissa
            and I'm a <span className="font-semibold">software engineer</span>{" "}
            and <span className="font-semibold">rock climber</span>.
          </div>
          <div>
            I like to build things, travel around in my van to climb mountains,
            and occasionally tinker on the piano when no one is looking.
          </div>
          <div>
            This site is the central hub for all my musings, learnings, and
            adventures. If you want to chat or collaborate on a project, let me
            know!
          </div>
        </div>
        <div className="pt-8 text-center">
          <h1 className="pb-8 text-4xl">Get In Touch</h1>
          <p className="pb-6 text-lg leading-relaxed antialiased">
            Feel free to send an email if you'd like to talk. I promise I'm
            friendly :)
          </p>
          <Button
            href={`mailto:${siteMetadata.email}`}
            className="p-8 transition duration-150 ease-in-out hover:scale-105"
          >
            <span className="text-xl text-white">
              Say Hello{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
