import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeOne from "./pages/HomeOne";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./elements/RouteScrollToTop";
import About from "./pages/About";
import HomeTwo from "./pages/HomeTwo";
import HomeThree from "./pages/HomeThree";
import ServiceDetailsPage from "./pages/ServiceDetailsPage";
import ProjectPage from "./pages/ProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import BlogPage from "./pages/BlogPage";
import BlogDetailsPage from "./pages/BlogDetailsPage";
import ContactPage from "./pages/ContactPage";

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
        <Route exact path="/home-2" element={<HomeTwo />} />
        <Route exact path="/home-3" element={<HomeThree />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/blog" element={<BlogPage />} />
        <Route exact path="/blog-details" element={<BlogDetailsPage />} />
        <Route exact path="/project" element={<ProjectPage />} />
        <Route exact path="/project-details" element={<ProjectDetailsPage />} />
        <Route exact path="/service-details" element={<ServiceDetailsPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
      </Routes>
      <ScrollToTop smooth color="#FA4318" />
    </BrowserRouter>
  );
}

export default App;
