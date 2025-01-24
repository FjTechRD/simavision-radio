import React from "react";
import HeroSection from "../components/home/HeroSection";
import ProgramList from "../components/home/ProgramList";
import AboutSection from "../components/home/AboutSection";
import NewsSection from "../components/home/NewsSection";
import "../style/Home.css";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <ProgramList />
      <AboutSection />
      <NewsSection />
    </main>
  );
};

export default Home;
