import "./App.css";
import AniCursor from "./components/Animation/AniCursor";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Number from "./components/Number/Number";
import Portfolio from "./components/Portfolio/Portfolio";
import Service from "./components/Service/Service";
import Skill from "./components/Skill/Skill";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <AniCursor />
      <Navbar />
      <Hero />
      <Skill />
      <Service />
      <Portfolio />
      <Number />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
