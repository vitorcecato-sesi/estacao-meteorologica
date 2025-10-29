// Importa o React, necessário para criar componentes funcionais
import React from "react";

// Importação de imagens usadas na página da equipe
import ImagemEquipe from "../assets/imgEquipe.png";
import LogoG3 from "../assets/logoG3.png";
import Img from "../assets/ImgEquHe.png";

// Importa as imagens dos integrantes individualmente
import Laura from "../assets/ImgR1.png";
import Lucas from "../assets/ImgR2.png";
import Milena from "../assets/ImgR3.png";
import Pietro from "../assets/ImgR4.png";
import Pyetro from "../assets/ImgR5.png";
import Vitor from "../assets/Img6R.png";

// Importa o arquivo CSS específico desta página
import "./Equipe.css";

// Importa componentes reutilizáveis (menu e rodapé)
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Declara o componente principal da página "Equipe"
export default function Equipe() {
  return (
    <>
      {/* Navbar é o menu fixo que aparece no topo da página */}
      <Navbar />
      {/* Cabeçalho da página Equipe */}
      <section className="headerPaginaEquipe">
        <h1 className="enfeiteEquipe"> | </h1> {/* Barra decorativa */}
        <h1 className="tituloEquipe"> Equipe </h1> {/* Título principal */}
        <img className="simboloEquipe" src={Img} alt="Simbolo Equipe" />{" "}
        {/* Ícone decorativo */}
      </section>

      <article>
        {/* Seção de apresentação do grupo */}
        <section>
          <section>
            <section className="equipe-img-texto">
              {/* Imagem do grupo */}
              <img
                src={ImagemEquipe}
                alt="Logo do grupo abacate"
                className="ImgEquipe"
              />
              {/* Texto descritivo sobre quem é o grupo */}
              <section className="blequipe-texto">
                <h2 className="Titulo-Equipe">Quem Somos Nós?</h2>
                <p className="Texto-Equipe">
                  O grupo 3 é formado por Laura Betti, Lucas Casagrande, Milena,
                  Pietro Melle, Pyetro Joaquim e Vitor Geraldo. Nosso grupo se
                  destaca por valorizar três princípios fundamentais:
                  honestidade, comprometimento e união. Acreditamos que a
                  honestidade é essencial para manter a confiança e o respeito
                  entre os integrantes, o comprometimento demonstra nossa
                  dedicação em cada atividade e desejo de alcançar sempre o
                  melhor resultado; já a união é o que fortalece nossa equipe,
                  tornando o trabalho mais leve, produtivo e harmonioso. Esses
                  valores guiam o grupo 3 mesmo diante de desafios, e é por isso
                  que cada conquista se torna ainda mais significativa.
                </p>
              </section>
            </section>
          </section>
        </section>

        {/* Seção com os integrantes e suas funções */}
        <section className="Bloco-Integrantes">
          <h2 className="Titulo-In">
            Integrantes da Equipe e Suas Participações
          </h2>

          {/* Primeira linha de integrantes */}
          <section className="equipe-container">
            {/* Cada integrante é um card com imagem + hover */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Laura} alt="Laura Betti" className="IMGin" />
                {/* Área que aparece quando passa o mouse */}
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">
                      •Pesquisas e imagens das páginas
                    </p>
                    <p className="funcao-hover">•Wireframe ( Software )</p>
                    <p className="funcao-hover">
                      •Programação ( Página Software)
                    </p>
                  </div>
                </div>
              </div>
              <p className="Nome">Laura Betti</p>
            </div>

            {/* Segundo integrante */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Lucas} alt="Lucas Casagrande" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">
                      •Wireframe ( Projeto , Perguntas e Respostas , Resultados
                      )
                    </p>
                    <p className="funcao-hover">
                      •Programação ( Página Projeto e Resultados )
                    </p>
                  </div>
                </div>
              </div>
              <p className="Nome">Lucas Casagrande</p>
            </div>

            {/* Terceiro integrante */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Milena} alt="Milena" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">
                      •Pesquisas e imagens das páginas
                    </p>
                    <p className="funcao-hover">
                      •Wireframe ( Equipe e Hardware )
                    </p>
                    <p className="funcao-hover">
                      •Programação ( Página Equipe )
                    </p>
                  </div>
                </div>
              </div>
              <p className="Nome">Milena</p>
            </div>
          </section>

          {/* Segunda linha de integrantes */}
          <section className="equipe-container">
            {/* Pietro */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Pietro} alt="Pietro Melle" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">
                      •WireFrame (Header e Footer e Home )
                    </p>
                    <p className="funcao-hover">
                      •Programação ( Página Perguntas e Respostas , NavBar ,
                      Header , Footer e Home )
                    </p>
                  </div>
                </div>
              </div>
              <p className="Nome">Pietro Melle</p>
            </div>

            {/* Pyetro */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Pyetro} alt="Pyetro Joaquim" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">•Wireframe ( Wooki )</p>
                    <p className="funcao-hover">
                      •Programação ( Página Wooki )
                    </p>
                  </div>
                </div>
              </div>
              <p className="Nome">Pyetro Joaquim</p>
            </div>

            {/* Vitor */}
            <div className="integrante">
              <div className="hover-card">
                <img src={Vitor} alt="Vitor Geraldo" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Funções</p>
                    <p className="funcao-hover">•Criação do GitHub</p>
                    <p className="funcao-hover">
                      •Produção do Hardware do Wooki
                    </p>
                    <p className="funcao-hover">
                      •Programação (Página Hardware )
                    </p>
                    <p className="funcao-hover">•Programação do arduino IDE</p>
                  </div>
                </div>
              </div>
              <p className="Nome">Vitor Geraldo</p>
            </div>
          </section>
        </section>

        {/* Seção que explica o significado da logo do grupo */}
        <section className="equipe-texto-logo">
          <section className="blequipe-textologo">
            <h3 className="Titulo-Logo">Explicação da Logo do Grupo</h3>
            <p className="texto-expli">
              O abacate da logo do nosso grupo foi criado a partir de uma
              brincadeira de mímica feita em aula. No centro dele estão os nomes
              dos integrantes, e por fora há palavras que representam as
              características do grupo: honestidade, comprometimento e união. O
              abacate simboliza algo simples, natural e cheio de energia — assim
              como nossa equipe.
            </p>
          </section>
          {/* Imagem da logo do grupo */}
          <section>
            <img
              src={LogoG3}
              alt="Logo do grupo abacate"
              className="Img-Logo"
            />
          </section>
        </section>
      </article>

      {/* Rodapé com informações finais */}
      <Footer />
    </>
  );
}
