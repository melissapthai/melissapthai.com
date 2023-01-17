import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export default function Button({ children, className, href }: ButtonProps) {
  return (
    <div className={className}>
      <a
        className={classNames(
          "bg-200 rounded-lg bg-gradient-to-r from-cyan-500 to-sky-900 px-10 py-4 md:px-20"
        )}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
}
