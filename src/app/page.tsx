import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Prizes from "@/components/Prizes";
import Rules from "@/components/Rules";
import RegisterCTA from "@/components/RegisterCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Schedule />
        <Prizes />
        <Rules />
        <RegisterCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
