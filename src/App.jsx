import { useEffect } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import  "/src/assets/maternityimage.jpg";

function App() {
  const { pathname } = useLocation()
  useEffect(() => {
    const navigationContainer = document.getElementById("navigation-container");
    if (navigationContainer) {
      navigationContainer.scrollTop = 0;
    }
  }, [pathname]);
  return (
    <section className="content-container" id="navigation-container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  )
}

export default App
