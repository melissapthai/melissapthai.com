import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

import NavLink from "./navlink";
import { routes } from "../data/routes";

export default function Header() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";
  const src = `/dark-mode-icons/${isDarkMode ? "sun" : "moon"}.svg`;
  const ariaLabel = isDarkMode ? "Activate Light Mode" : "Activate Dark Mode";
  const alt = isDarkMode ? "sun icon" : "moon icon";

  return (
    <header className="flex items-center px-10">
      <div className="basis-1/3">
        <h1>Melissa Thai</h1>
      </div>
      <nav className="basis-1/3" aria-label="Main Navigation">
        <div className="flex justify-center">
          {routes.map((route) => (
            <NavLink
              key={route.href}
              href={route.href}
              title={route.title}
              selected={
                route.exact
                  ? route.href === router.asPath
                  : router.asPath.startsWith(route.href)
              }
            />
          ))}
        </div>
      </nav>
      <div className="flex basis-1/3 justify-end">
        <div className="grid content-center">
          <button
            aria-label={ariaLabel}
            onClick={() => setTheme(isDarkMode ? "light" : "dark")}
          >
            <Image src={src} alt={alt} width={24} height={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
