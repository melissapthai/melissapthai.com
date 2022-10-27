import Header from './header'
import Footer from './footer'

const routes = [
  {
    href: '/',
    title: 'Home',
    exact: true,
  },
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/blog',
    title: 'Blog',
  },
  {
    href: '/resume',
    title: 'Resume',
  },
]

export default function Layout({ children }) {
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
