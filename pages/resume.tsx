import Head from "next/head";
import siteMetadata from "../data/siteMetadata";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <iframe className="h-screen w-full" src={siteMetadata.resume}></iframe>
    </>
  );
}
