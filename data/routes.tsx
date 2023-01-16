interface Route {
  href: string;
  title: string;
  exact?: boolean;
}

export const routes: Array<Route> = [
  {
    href: "/",
    title: "Home",
    exact: true,
  },
  {
    href: "/about",
    title: "About",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/resume",
    title: "Resume",
  },
];
