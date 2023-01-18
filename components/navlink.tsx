import Link from "next/link";
import classNames from "classnames";

export default function NavLink({
  href = "/",
  title = "Link",
  selected = false,
}) {
  return (
    <Link
      href={href}
      className={classNames("p-2 underline-offset-8 hover:underline lg:p-4", {
        "underline underline-offset-8": selected,
      })}
    >
      {title}
    </Link>
  );
}
