import { AppProvider } from "./context/AppContext";
import Banner from "./components/Banner";
import FocusAreas from "./components/FocusAreas";
import About from "./components/About";
import Skills from "./components/Skills";
import Proyects from "./components/Proyects";
import VideoEditing from "./components/VideoEditing";
import Contact from "./components/Contact";
import FloatingCV from "./components/FloatingCV";
import Certificates from "./components/Certificates";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <AppProvider>
      <Banner name="Sofía Zapata" />

      <main className="container">
        <FocusAreas />
        <About />
        <Skills />
        <Proyects />
        <VideoEditing />
        <Contact />
        <Certificates />
      </main>

      <Navbar />
      <FloatingCV />
      <Controls />
    </AppProvider>
  );
}
