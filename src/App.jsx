import Banner from "./components/Banner";
import FocusAreas from "./components/FocusAreas";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import VideoEditing from "./components/VideoEditing";
import Contact from "./components/Contact";
import FloatingCV from "./components/FloatingCV";
import Certificates from "./components/Certificates";

export default function App() {
  return (
    <>
      <Banner name="Sofía" />

      <main className="container">
        <FocusAreas />
        <About />
        <Skills />
        <Proyects />
        <VideoEditing />
        <Contact />
        <Certificates />
      </main>

      <FloatingCV />
    </>
  );
}