import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import Contact from "./components/Contact";
import FloatingCV from "./components/FloatingCV";
import Certificates from "./components/Certificates";



export default function App() {
  return (
    <>
      <Banner name="Sofía" />
      <main className="container">
        <About />
        <Skills />
        <Proyects />
        <Contact />
        <Certificates/>
      </main>
      <FloatingCV />
    </>
  );
}
