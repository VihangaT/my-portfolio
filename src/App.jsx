import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Testimonial from "./components/testimonials/Testimonial";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setmenuOpen] = useState(true);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
