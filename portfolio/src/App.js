import logo from "./logo.svg";
import "./App.css";
import { Hero } from "./Components/Hero";
import { Navigation } from "./Components/Navigation";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";
import { Footer } from "./Components/Footer";
import { Contact } from "./Components/Contact";
import { AboutMe } from "./Components/AboutMe";
function App() {
  return (
    <div className="wrapper" id="wrapper">
      <Hero />

      <Skill />
      <Project />
      <AboutMe />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
