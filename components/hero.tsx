import siteMetadata from "../data/siteMetadata";
import SocialIcon from "./socialicon";

export default function Hero() {
  // NOTE(10/26/22):
  // Tailwind isn't importing the background image through bg-[url('../public/hero.jpg')] in production,
  // so I just extracted it out as a separate style.
  return (
    <div
      className="mx-[-2rem] flex h-[30rem] flex-col-reverse bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/hero.jpg)" }}
    >
      <div className="mb-24 flex flex-row justify-center space-x-10 p-8">
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="goodreads" href={siteMetadata.goodreads} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} />
        <SocialIcon kind="github" href={siteMetadata.github} />
      </div>
    </div>
  );
}
