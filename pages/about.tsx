import Image from "next/image";

export default function About() {
  return (
    <div className="flex flex-row py-8 px-10">
      <div className="w-1/2 space-y-4 leading-relaxed">
        <h1 className="text-2xl">About</h1>
        <p>I'm pretty awkward at these, but I'll try my best. Hi, hello.</p>
        <p>
          I'm a software engineer by trade (if you want to learn more, check out
          my resume), but at my core I'm a Serial Dabbler — I like rock climbing
          and building stuff, and have a casual relationship with a few musical
          instruments and singing.
        </p>
        <p>
          I grew up in a Vietnamese-Filipino household in the suburbs of
          Washington, DC, earned a computer science degree from the Rose-Hulman
          Institute of Technology in 2016, and immediately moved to San
          Francisco after graduating to work in tech. After half a decade in the
          industry — longing deeply for a reprieve from Bay Area hustle culture
          — I left a stable engineering job to build a life around adventure and
          authenticity. Which basically meant I drove around in my converted
          van, climbed a bunch of mountains, and did some things I don't
          normally do like answer calls for the National Suicide Prevention
          Lifeline and become an engineering coach. I'm still doing most of
          these things nowadays, but I'm also working on some side projects and
          contributing to open source software, and all that has been very
          fulfilling.
        </p>
        <p>Ok… that was a lot of bio, but really who am I?</p>
        <p>
          In essence, I'm an adventurer of the external physical world, and of
          the internal human condition. I'm an introvert who thrives in spaces
          of shared vulnerability. I'm a voracious learner with a knack for
          writing code and an affinity for resilience and the growth mindset.
          And I'm always in motion, wayfinding in an ever-evolving journey to
          sedate a bubbling inner restlessness.
        </p>
        <p>So yea, that's me. I hope you enjoy the stories I have to tell.</p>
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
