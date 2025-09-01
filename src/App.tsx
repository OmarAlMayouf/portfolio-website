import Navbar from "./components/Navbar/Navbar";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/Footer/Footer";
import MouseTracker from "./components/MouseTracker/MouseTracker";

function App() {
  return (
    <div className="bg-primary-bg min-h-full">
      <Navbar />
      <div className="flex items-center justify-center transition-colors duration-500">
        <MouseTracker />

        <div>
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>

      </div>
    </div>
  );
}

export default App;