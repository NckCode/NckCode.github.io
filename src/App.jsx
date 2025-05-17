import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import SmoothScroll from "./components/SmoothScroll";
import TransitionOverlay from "./components/TransitionOverlay";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <TransitionOverlay />
      <SmoothScroll>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </SmoothScroll>
    </Router>
  );
}

export default App;
