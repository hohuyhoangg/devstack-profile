import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Education from "./components/Education";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div style={{ background: "#fff" }}>
      <a href="#main-content" className="skip-nav">Skip to main content</a>
      <header>
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Works />
        <Education />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
};

export default App;
