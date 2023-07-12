import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import About from "./pages/About";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <Routes>
        <Route exact path="/home" element={<HomeOne />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
