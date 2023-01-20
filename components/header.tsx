import { useState, useCallback, useEffect } from "react";
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

  // Source: https://github.com/vercel/next.js/discussions/14810#discussioncomment-1709481
  // Not proud of this but it'll do for now
  const useMediaQuery = (width: number) => {
    const [targetReached, setTargetReached] = useState(false);

    const updateTarget = useCallback((e: any) => {
      if (e.matches) {
        setTargetReached(true);
      } else {
        setTargetReached(false);
      }
    }, []);

    useEffect(() => {
      const media = window.matchMedia(`(max-width: ${width}px)`);
      media.addListener(updateTarget);

      // Check on mount (callback is not called until a change occurs)
      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }, []);

    return targetReached;
  };

  // Get small breakpoint as defined in tailwind docs: https://tailwindcss.com/docs/responsive-design
  const isBreakpoint = useMediaQuery(640);
  const name = isBreakpoint ? "MT" : "Melissa Thai";

  return (
    <header className="flex items-center py-2 lg:py-0 lg:px-10">
      <div className="basis-1/3">
        <h1>{name}</h1>
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
