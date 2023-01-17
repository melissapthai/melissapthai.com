import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <div className="flex flex-row py-8 px-10">
        <div className="flex w-1/2 justify-center">
          <div className="w-paragraph">
            <h1 className="py-4 text-2xl">About</h1>
            <div className="space-y-6  text-lg leading-loose">
              <p>Hi, hello!</p>
              <p>
                I'm a software engineer by trade (if you want to learn more,
                check out my{" "}
                <Link
                  href={"/resume"}
                  style={{ textDecoration: "underline", color: "blue" }}
                >
                  resume
                </Link>
                ), but at my core I'm a Serial Dabbler — I like rock climbing
                and building stuff, and have a casual relationship with a few
                musical instruments and singing. I'm always in motion and love
                trying new things.
              </p>
              <p>
                This site is the central hub for all my musings, learnings, and
                adventures. My goal is to keep growing as a person and document
                my process, not only for myself but for whoever happens to
                stumble upon my little corner of the internet.
              </p>
              <p>That's all for now, hope you enjoy!</p>
            </div>
          </div>
        </div>
        <div className="flex h-full w-1/2 justify-center">
          <Image
            src="/bio.jpg"
            alt="picture of melissa"
            width={300}
            height={300}
            className="rounded-full"
            priority={true}
          />
        </div>
      </div>
    </>
  );
}
