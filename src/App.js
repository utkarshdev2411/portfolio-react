import Navbar from "./Components/Navbar/navbar";
import Intro from "./Components/Intro/intro"
import Services from "./Components/Services/services"
import Experience from "./Components/Experience/experience";
import Work from "./Components/Work/work";
import Portfolio from "./Components/Portfolio/portfolio";
import './App.css';
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { themeContext } from "./Context";
import { useContext } from "react";
// import Skills from "./Components/Skills/skills";

function App() {


      const theme=useContext(themeContext)
      const darkMode= theme.state.darkMode;
  return (
    <div className="App" style={{background: darkMode?'black':'',color: darkMode?'white':''}}>
     
     <Navbar/>
     <Intro/>
     <Services/>
     {/* <Experience/>
     <Work/>
     <Portfolio/>
     

     <Contact/>
     <Footer/> */}
    </div>
   
  );
}

export default App;
