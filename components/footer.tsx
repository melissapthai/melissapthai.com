import { useRouter } from 'next/router'
import NavLink from './navlink';
import { Route } from './interfaces/route';

export default function Footer({ routes }: {routes: Route[]}) {
  const router = useRouter();
  return (
    <small>
      <footer className="flex items-center p-10">
        <div className='flex basis-1/3'>
          &copy; 2022 Melissa Thai. All rights reserved.
        </div>
        <div className='basis-1/3 text-center'>
          Made with ❤️ by Melissa Thai
        </div>
        <div className="flex basis-1/3">
          {routes.map(route => (
            <NavLink
              key={route.href}
              href={route.href}
              title={route.title}
              selected={
                route.exact ? route.href === router.asPath : router.asPath.startsWith(route.href)
              }
            />
          ))}
        </div>
      </footer>
    </small>
  );
}