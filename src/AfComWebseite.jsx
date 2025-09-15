import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Donate from "./components/Donate";
import Footer from "./components/Footer";

export default function AfComWebseite() {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Donate />
      <Footer />
    </div>
  );
}
