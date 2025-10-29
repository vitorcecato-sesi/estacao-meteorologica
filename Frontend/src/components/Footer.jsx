// Hooks
import { Link } from "react-router-dom";

// Estilização
import "./Footer.css";

// Componente Footer
export default function Footer() {
  return (
    // Container total do footer
    <footer className="footerProjeto">

      {/* Container dos links */}
      <section className="linksContainer">
        <nav className="links">

          <Link to="/" className="footerLink">
            O Projeto
          </Link>

          <Link to="/hardware" className="footerLink">
            Hardware
          </Link>

          <Link to="/perguntasRespostas" className="footerLink">
            Perguntas e Respostas
          </Link>

          <Link to="/equipe" className="footerLink">
            Equipe
          </Link>

        </nav>
      </section>

      {/* Container dos direitos autorais */}
      <section className="direitosAutorais">
        {/* Imagem da logo do grupo */}
        <img
          src="/logoG3.png"
          alt="logoFooter"
          className="logoFooter"
        />

        {/* Textos */}
        <section className="textoDireitos">
          <p>&copy; Grupo 3. 2025</p>
          <p>All Rights Reserved</p>
        </section>

      </section>
    </footer>
  );
}
