import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
// import NavigationBar from "./components/NavBar";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      {/* <NavigationBar /> */}
      <HomePage />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
