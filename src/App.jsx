import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import PodCast from "./pages/PodCast";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/podcast" element={<PodCast />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
