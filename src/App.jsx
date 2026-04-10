import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Contact } from "./Pages/Contact/Contact";
import { Error404 } from "./Pages/Error404/Error404";

import { Header } from "./Components/Header/Header";
import { Footer } from "./Components/Footer/Footer";

export function App() {
  return (
  <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  );
}
