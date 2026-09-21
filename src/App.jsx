import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Menu from "./components/menu/Menu";
import Intro from "./components/intro/Intro";
import Agentic from "./components/agentic/Agentic";
import Work from "./components/work/Work";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  const [menuOpen, setmenuOpen] = useState(false);

  return (
    <div className="app">
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="sections">
        <Intro />
        <Agentic />
        <Work />
        <Skills />
        <Portfolio />
        <Testimonial />
        <Contact />
      </div>
    </div>
  );
}

export default App;
