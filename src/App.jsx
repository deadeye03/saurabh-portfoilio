import About from "./section/About";
import Clients from "./section/Client";
import Contact from "./section/Contact";
import WorkExperience from "./section/Experience";
import Footer from "./section/Footer";
import Hero from "./section/Hero";
import Navbar from "./section/Navbar";
import Projects from "./section/Project";

export default function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About/>
      <Projects/>
      <WorkExperience/>
      {/* <Clients/> */}
      <Contact/>
      <Footer />
    </main>
  )
}