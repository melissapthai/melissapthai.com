import Github from './github.svg'
import Goodreads from './goodreads.svg'
import Instagram from './instagram.svg'
import Mail from './mail.svg'
import Linkedin from './linkedin.svg'
import Image from 'next/image';

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  goodreads: Goodreads,
  instagram: Instagram,
  linkedin: Linkedin,
}

export default function SocialIcon({ kind = '', href = '/', size = 20 }) {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const src = components[kind]

  return (
    <a
      className="text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Image src={src} alt={kind} width={size} height={size} />
    </a>
  );
}
