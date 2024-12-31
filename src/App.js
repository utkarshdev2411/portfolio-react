import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro";
import Services from "./Components/Services/services";
import Experience from "./Components/Experience/experience";
import Work from "./Components/Work/work";
import Portfolio from "./Components/Portfolio/portfolio";
import './App.css';
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import { Element } from "react-scroll";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="App" style={{ background: darkMode ? 'black' : '', color: darkMode ? 'white' : '' }}>
      <Navbar />
      <Element name="intro">
        <Intro />
      </Element>
      <Element name="services">
        <Services />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="work">
        <Work />
      </Element>
      {/* <Element name="portfolio">
        <Portfolio />
      </Element> */}
      {/* <Element name="contact">
        <Contact />
      </Element> */}
      <Footer />
    </div>
  );
}

export default App;