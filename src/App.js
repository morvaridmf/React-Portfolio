import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";
import { React, useState } from "react"
import ThemeContexProvider from "./contex/ThemeContex"

function App() {

  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <div className="app">
      <ThemeContexProvider>
        <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="section">
          <Home />
          <About />
          <Skills />
          <Projects />
          <div className="contact-section">
            <Contact />
          </div>
          <div className="footer-section">
            <Footer />
          </div>
        </div>

      </ThemeContexProvider>
    </div>
  );
}

export default App;
