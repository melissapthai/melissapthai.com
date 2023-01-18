import { useRouter } from "next/router";
import NavLink from "./navlink";
import { routes } from "../data/routes";

export default function Footer() {
  const router = useRouter();
  const currentYear = new Date().getFullYear();

  return (
    <>
      <hr />
      <small>
        <footer>
          <div className="grid grid-cols-1 p-4 lg:grid-cols-3">
            <div className="py-2 text-center lg:py-4 lg:text-left">
              &copy; {currentYear} Melissa Thai. All rights reserved.
            </div>
            <div className="py-2 text-center lg:py-4">
              Made with ❤️ by Melissa Thai
            </div>
            <div className="flex justify-center lg:justify-end">
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
          </div>
        </footer>
      </small>
    </>
  );
}
