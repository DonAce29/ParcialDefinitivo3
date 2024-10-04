import React from 'react';
import './Skills.css'; // Asegúrate de que la ruta sea correcta

const Skills = () => {
  return (
    <section id="skills">
      <h2>Habilidades</h2>
      <div className="skills-container">
        <div className="skills-category">
          <h3>Habilidades Duras</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>CSS</li>
            <li>Node.js</li>
            <li>Python</li>
          </ul>
        </div>
        <div className="skills-category">
          <h3>Habilidades Blandas</h3>
          <ul>
            <li>Comunicación efectiva</li>
            <li>Trabajo en equipo</li>
            <li>Resolución de problemas</li>
            <li>Adaptabilidad</li>
            <li>Creatividad</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
