import { useRouter } from "next/router";

import NavLink from "./navlink";
import { Route } from "./interfaces/route";

export default function Header({ routes }: { routes: Route[] }) {
  const router = useRouter();
  return (
    <header className="flex items-center px-10">
      <div className="basis-1/3">
        <h1>Melissa Thai</h1>
      </div>
      <nav className=" basis-1/3" aria-label="Main Navigation">
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
      <div className=" basis-1/3 text-right">
        <h3>Light/dark mode</h3>
      </div>
    </header>
  );
}
