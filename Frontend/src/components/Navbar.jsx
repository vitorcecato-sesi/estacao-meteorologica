/* Hooks */
import { NavLink } from "react-router-dom"; // Hook de navegação

/* Estilização */
import "./Navbar.css";

/* Componente NAVBAR */
export default function Navbar() {
  return (

    <header className="navbar">
      {/* Texto-título - agora é um link para a página 'Equipe' */}
      <NavLink to="/equipe" className="logoTexto"> Grupo 3 </NavLink>

      {/* Input checkbox para controlar o menu hambúrguer */}
      <input type="checkbox" id="menu-toggle" style={{ display: 'none' }} />

      {/* Label do hambúrguer */}
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* Links de navegação */}
      <nav className="navlinks">
        <NavLink to="/" end> Home </NavLink>
        <NavLink to="/projeto"> O Projeto </NavLink>
        <NavLink to="/simulacao"> Simulação Wokwi </NavLink>
        <NavLink to="/hardware"> Hardware </NavLink>
        <NavLink to="/software"> Software </NavLink>
        <NavLink to="/perguntasRespostas"> Perguntas e Respostas </NavLink>
        <NavLink to="/resultados"> Resultados </NavLink>
        <NavLink to="/equipe"> Equipe </NavLink>
      </nav>

      {/* Botão para ir ao repositório do projeto */}
      <a
        className="botaoGitHub"
        href="https://github.com/vitorcecato-sesi/estacao-meteorologica"
        target="_blank"
      >
        GitHub 🡥
      </a>
      
    </header>
  );
}
