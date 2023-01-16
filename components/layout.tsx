import Header from "./header";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col px-8 font-poppins">
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </div>
  );
}
