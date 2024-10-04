import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';
const Footer = () => (
  <footer>
    <h3>Encuéntrame en</h3>
    <ul>
      <li>
        <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
      </li>
      <li>
        <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={30} />
        </a>
      </li>
      <li>
        <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
      </li>
    </ul>
  </footer>
);

export default Footer;
  