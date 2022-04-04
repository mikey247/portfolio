import About from "./components/About";
import Contact from "./components/Contact";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import ProjectCard from "./UI/ProjectCard";

function App() {
  return (
    <>
      <NavBar />
      <HomePage />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
