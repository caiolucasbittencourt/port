import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none absolute top-0 left-0 z-0 h-[120vh] w-full" />
      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <Hero />
        <TechStack />
        <Projects />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
