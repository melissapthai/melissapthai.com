import Head from "next/head";

export default function Resume() {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <iframe className="h-screen w-full" src="resume_20230116.pdf"></iframe>
    </>
  );
}
