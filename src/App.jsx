import { Route, Routes } from "react-router-dom";
import "./style/App.css";
import Home from "./pages/Home";
import Shows from "./pages/Shows";
import PodCast from "./pages/PodCast";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import News from "./pages/News";
import PrivacyPolicy from "./pages/PrivaciPolicy";
import Faqs from "./pages/Faqs";
import TermnsAndConditions from "./pages/TermnsAndConditions";

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
        <Route path="/news"element={<News/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/terms" element={<TermnsAndConditions/>}/>
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;
