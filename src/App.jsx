import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Testimonial from "./components/testimonials/Testimonial";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <Topbar/>
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
