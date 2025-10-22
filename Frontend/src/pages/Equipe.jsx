import React from "react";
import ImagemEquipe from "../assets/imgEquipe.png";
import LogoG3 from "../assets/logoG3.png";
import Img from "../assets/ImgEquHe.png";

import Laura from "../assets/ImgR1.png";
import Lucas from "../assets/ImgR2.png";
import Milena from "../assets/ImgR3.png";
import Pietro from "../assets/ImgR4.png";
import Pyetro from "../assets/ImgR5.png";
import Vitor from "../assets/Img6R.png";

import "./Equipe.css";
import Navbar from "../components/Navbar";

export default function Equipe() {
  return (
    <>
      <Navbar />

      <section className="headerPaginaEquipe">
        <h1 className="enfeiteEquipe"> | </h1>
        <h1 className="tituloEquipe"> Equipe </h1>
        <img className="simboloEquipe" src={Img} alt="Simbolo Equipe" />
      </section>

      <article>
        <section>
          <section>
            <section className="equipe-img-texto">
              <img
                src={ImagemEquipe}
                alt="Logo do grupo abacate"
                className="ImgEquipe"
              />
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

        <section className="Bloco-Integrantes">
          <h2 className="Titulo-In">
            Integrantes da Equipe e Suas Participações
          </h2>

          {/* Primeira linha de integrantes */}
          <section className="equipe-container">
            <div className="integrante">
              <div className="hover-card">
                <img src={Laura} alt="Laura Betti" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Laura Betti</p>
                    <p className="funcao-hover">Pesquisas e imagens das páginas</p>
                    <p className="funcao-hover">Wireframe ( Software )</p>
                    <p className="funcao-hover">Programação ( Página Software)</p>
                  </div>
                </div>
              </div>
              <p>Laura Betti</p>
            </div>

            <div className="integrante">
              <div className="hover-card">
                <img src={Lucas} alt="Lucas Casagrande" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Lucas Casagrande</p>
                    <p className="funcao-hover">Wireframe ( Projeto , Perguntas e Respostas , Resultados )</p>
                    <p className="funcao-hover">Programação ( Página Projeto e Resultados )</p>
                  </div>
                </div>
              </div>
              <p>Lucas Casagrande</p>
            </div>

            <div className="integrante">
              <div className="hover-card">
                <img src={Milena} alt="Milena" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Milena</p>
                    <p className="funcao-hover">Pesquisas e imagens das páginas</p>
                    <p className="funcao-hover">Wireframe ( Equipe e Hardware )</p>
                    <p className="funcao-hover">Programação ( Página Equipe )</p>
                  </div>
                </div>
              </div>
              <p>Milena</p>
            </div>
          </section>

          {/* Segunda linha de integrantes */}
          <section className="equipe-container">
            <div className="integrante">
              <div className="hover-card">
                <img src={Pietro} alt="Pietro Melle" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Pietro Melle</p>
                    <p className="funcao-hover">WireFrame (Header e Footer e  Home )</p>
                    <p className="funcao-hover">Programação ( Página Perguntas e Respostas , NavBar , Header , Footer e Home )</p>
                  </div>
                </div>
              </div>
              <p>Pietro Melle</p>
            </div>

            <div className="integrante">
              <div className="hover-card">
                <img src={Pyetro} alt="Pyetro Joaquim" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Pyetro Joaquim</p>
                    <p className="funcao-hover">Wireframe ( Wooki )</p>
                    <p className="funcao-hover">Programação ( Página Wooki )</p>
                  </div>
                </div>
              </div>
              <p>Pyetro Joaquim</p>
            </div>

            <div className="integrante">
              <div className="hover-card">
                <img src={Vitor} alt="Vitor Geraldo" />
                <div className="hover-info">
                  <div className="foto-hover"></div>
                  <div className="texto-hover">
                    <p className="nome-hover">Vitor Geraldo</p>
                    <p className="funcao-hover">Criação do GitHub</p>
                    <p className="funcao-hover">Produção do Hardware do Wooki</p>
                    <p className="funcao-hover">Programação (Página Hardware )</p>
                    <p className="funcao-hover">Programação do arduino IDE</p>
                  </div>
                </div>
              </div>
              <p>Vitor Geraldo</p>
            </div>
          </section>
        </section>

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
          <section>
            <img src={LogoG3} alt="Logo do grupo abacate" className="Img-Logo" />
          </section>
        </section>
      </article>
    </>
  );
}
