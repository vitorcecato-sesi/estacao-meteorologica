/* Hooks */
import { NavLink } from "react-router-dom"; // Hook de navegação

/* Estilização */
import "./Navbar.css";

/* Componente NAVBAR */
export default function Navbar() {
  return (
    <header className="navbar">

      {/* Texto-título */}
      <section className="logoTexto">
        Grupo 3
      </section>

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