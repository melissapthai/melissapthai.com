import siteMetadata from '../data/siteMetadata'
import SocialIcon from './social-icons'

export default function Hero() {
  return (
    <div className="flex flex-col-reverse bg-[url('../public/hero.jpg')] bg-no-repeat bg-cover bg-center h-[30rem] mx-[-2rem]">
      <div className='flex flex-row justify-center space-x-10 h-2/5'>
        <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
        <SocialIcon kind="goodreads" href={siteMetadata.goodreads} />
        <SocialIcon kind="linkedin" href={siteMetadata.linkedin} />
        <SocialIcon kind="instagram" href={siteMetadata.instagram} />
        <SocialIcon kind="github" href={siteMetadata.github} />
      </div>
    </div>
  );
}