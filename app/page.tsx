import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Game from "../components/Game";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 min-h-screen flex flex-col px-4 w-full max-w-[100vw] overflow-x-hidden">
      <div className="absolute top-0 left-0 w-full h-[120vh] z-0 grid-bg pointer-events-none" />
      <Header />

      <div className="mx-auto max-w-4xl pt-24 pb-6 flex-grow w-full">
        <Hero />
        <TechStack />
        <Projects />
        <Game />
        <Newsletter />
        <Footer />
      </div>
    </main>
  );
}
