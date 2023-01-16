import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row py-8 px-10">
      <div className="flex w-1/2 justify-center">
        <div className="w-paragraph">
          <h1 className="text-2xl py-4">About</h1>
          <div className="text-lg  space-y-6 leading-loose">
            <p>
              Hi, hello!
            </p>
            <p>
              I'm a software engineer by trade (if you want to learn more, check out
              my resume), but at my core I'm a Serial Dabbler — I like rock climbing
              and building stuff, and have a casual relationship with a few musical
              instruments and singing. I'm always in motion and love trying new things.
            </p>
            <p>
              This site is the central hub for all my musings, learnings, and adventures. 
              My goal is to keep growing as a person and document my process, not only 
              for myself but for whoever happens to stumble upon my little corner of the 
              internet.
            </p>
            <p>So that's it, hope you enjoy!</p>
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
        />
      </div>
    </div>
  );
}
