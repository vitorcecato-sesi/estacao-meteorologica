import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footerProjeto">
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

      <section className="direitosAutorais">
        <img
          src="../../public/logoG3.png"
          alt="logoFooter"
          className="logoFooter"
        />
        <section className="textoDireitos">
          <p>&copy; Grupo 3. 2025</p>
          <p>All Rights Reserved</p>
        </section>
      </section>
    </footer>
  );
}
