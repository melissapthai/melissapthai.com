import Image from "next/image";

// Icons taken from: https://simpleicons.org/

export default function SocialIcon({ kind = "", href = "/", size = 20 }) {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const src = `/social-icons/${kind}.svg`;

  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      <Image
        src={src}
        className="transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110"
        alt={kind}
        width={size}
        height={size}
      />
    </a>
  );
}
