import Header from './header'
import Footer from './footer'
import { Route } from './interfaces/route'

const routes: Array<Route> = [
  {
    href: '/',
    title: 'Home',
    exact: true,
  },
  {
    href: '/about',
    title: 'About',
    exact: false,
  },
  {
    href: '/blog',
    title: 'Blog',
    exact: false,
  },
  {
    href: '/resume',
    title: 'Resume',
    exact: false,
  },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col px-8 font-poppins">
      <Header routes={routes} />
      <main className='min-h-screen'>
        {children}
      </main>
      <Footer routes={routes} />
    </div>
  )
}
