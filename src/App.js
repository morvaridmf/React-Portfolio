import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.scss";


function App() {
  return (
    <div className="app">
      <Topbar />
      <div className="section">
        <Home />
        <About />
        <Skills />
        <Projects />
        <div className="contact">
          <Contact />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>


    </div>
  );
}

export default App;
