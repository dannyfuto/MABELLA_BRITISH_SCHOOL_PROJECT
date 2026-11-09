
import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Academics from "./pages/Academics.jsx";
import Facilities from "./pages/Facilities.jsx";
import Admissions from "./pages/Admissions.jsx";
import Contact from "./pages/Contact.jsx";
import PortalLogin from "./pages/PortalLogin.jsx";
import ResultChecker from "./pages/ResultChecker.jsx";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/portal/:role" element={<PortalLogin />} />

          <Route path="/results" element={<ResultChecker />} />

          <Route
            path="*"
            element={
              <div className="container section">
                <h1>Page not found</h1>
                <p>The page you requested does not exist.</p>
                <a className="btn btn-primary" href="/">
                  Return home
                </a>
              </div>
            }
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
