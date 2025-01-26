import { useState, useEffect } from "react";

const HeroSection = () => {
  const [background, setBackground] = useState("");
  const [currentProgram, setCurrentProgram] = useState("Morning Beats");

  useEffect(() => {
    const hour = new Date().getHours();

    // Cambia el fondo según la hora del día
    if (hour >= 6 && hour < 12) {
      setBackground("morning");
    } else if (hour >= 12 && hour < 18) {
      setBackground("afternoon");
    } else {
      setBackground("night");
    }

    // Cambia el fondo según el programa actual
    if (currentProgram === "Morning Beats") {
      setBackground("morning-program");
    } else if (currentProgram === "Night Vibes") {
      setBackground("night-program");
    } else if (currentProgram === "Afternoon Chill") {
      setBackground("afternoon-program");
    }
  }, [currentProgram]);

  return (
    <section className={`hero ${background}`}>
      <div className="hero-content">
        <h1>Radio Online: {currentProgram}</h1>
        <p>
          ¡Escucha los mejores éxitos y programas en vivo las 24 horas del día!
        </p>
        {/* El reproductor de radio en lugar del botón y las ondas */}
        <div className="radio-player">
          <iframe
            src="https://player.gmpro.top/player-home-page/7045"
            frameBorder="0"
            width="100%"
            height="465"
            title="Radio Player"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
