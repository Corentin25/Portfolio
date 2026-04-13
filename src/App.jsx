import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { RippleGrid } from "./Components/RippleGrid/RippleGrid";
import { MainLayout } from "./Layouts/MainLayout";

import { LandingPage } from "./Pages/LandingPage/LandingPage";
import { Home } from "./Pages/Home/Home";
import { Projects } from "./Pages/Projects/Projects";
import { AboutMe } from "./Pages/AboutMe/AboutMe";
import { Contact } from "./Pages/Contact/Contact";
import { LegalNotice } from "./Pages/LegalNotice/LegalNotice";
import { Error404 } from "./Pages/Error404/Error404";

export function App() {
  return (
    <Router>
      <RippleGrid />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<LegalNotice />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}
