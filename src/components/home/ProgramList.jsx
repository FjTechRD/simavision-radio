import React from "react";

const ProgramList = () => {
  const programs = [
    { name: "Morning Beats", time: "6 AM - 10 AM", host: "DJ Sunrise" },
    { name: "Afternoon Chill", time: "12 PM - 3 PM", host: "DJ Breeze" },
    { name: "Night Vibes", time: "8 PM - 12 AM", host: "DJ Moon" },
  ];

  return (
    <section className="program-list">
      <h2>Programación</h2>
      <ul>
        {programs.map((program, index) => (
          <li key={index} className="program-item">
            <h3>{program.name}</h3>
            <p>{program.time}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProgramList;
