import Header from "../components/Header";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import BlogPosts from "../components/BlogPosts";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen w-full flex-col px-4">
      <div className="grid-bg pointer-events-none fixed inset-0" />
      <Header />

      <div className="mx-auto w-full max-w-4xl grow pt-24 pb-6">
        <Hero />
        <TechStack />
        <BlogPosts />
        <Footer />
      </div>
    </main>
  );
}
