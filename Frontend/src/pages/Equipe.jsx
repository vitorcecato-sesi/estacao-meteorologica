import React from "react";
import ImagemEquipe from '../assets/imgEquipe.png';
import LogoG3 from '../assets/logoG3.png'; 
import Laura from '../assets/ImgR1.png';
import Lucas from  '../assets/ImgR2.png';
import Milena from '../assets/ImgR3.png';
import Pietro from '../assets/ImgR4.png';
import Pyetro from '../assets/ImgR5.png';
import Vitor from '../assets/ImgR6.png';

import './Equipe.css'
export default function Equipe() {
     const integrantes = [
    { nome: "Laura Betti", img: Laura },
    { nome: "Lucas Casagrande", img: Lucas },
    { nome: "Milena", img: Milena },
    { nome: "Pietro Melle", img: Pietro },
    { nome: "Pyetro Joaquim", img: Pyetro },
    { nome: "Vitor Geraldo", img: Vitor },
  ];

  return (
    <article>
      <section>
        <section>
             <section className="equipe-img-texto">
         <img src={ImagemEquipe} alt="Logo do grupo abacate" className="ImgEquipe"/>
         <section className="blequipe-texto">
            <h2 className="Titulo-Equipe">Quem Somos Nós?</h2>
          <p className="Texto-Equipe">
            O grupo 3 é formado por Laura Betti, Lucas Casagrande, Milena,
            Pietro Melle, Pyetro Joaquim e Vitor Geraldo. Nosso grupo se destaca
            por valorizar três princípios fundamentais: honestidade,
            comprometimento e união. Acreditamos que a honestidade é essencial
            para manter a confiança e o respeito entre os integrantes  o
            comprometimento demonstra nossa dedicação em cada atividade e desejo
            de alcançar sempre o melhor resultado já a união é o que fortalece
            nossa equipe, tornando o trabalho mais leve, produtivo e harmonioso.
            Esses valores guiam o grupo 3 mesmo diante de desafios, e é por isso
            que cada conquista se torna ainda mais significativa.
          </p>
          </section>
          </section>
        </section>
      </section>

    
      <section >
        <h2 >
          Integrantes da Equipe e Suas Participações
        </h2>

        <div className="equipe-container">
      {integrantes.map((i) => (
        <div className="integrante" key={i.nome}>
          <img src={i.img} alt={i.nome} />
          <p>{i.nome}</p>
        </div>
      ))}
    </div>
        </section>

      
      <section className="equipe-texto-logo" >
        <section className="blequipe-textologo">
        <h3 className="Titulo-Logo">Explicação da Logo do Grupo</h3>
        <p className="texto-expli" >
          O abacate da logo do nosso grupo foi criado a partir de uma
          brincadeira de mímica feita em aula. No centro dele estão os nomes dos
          integrantes, e por fora há palavras que representam as características
          do grupo: honestidade, comprometimento e união. O abacate simboliza
          algo simples, natural e cheio de energia — assim como nossa equipe.
        </p>
        </section>
        <section>
       <img src={LogoG3} alt="Logo do grupo abacate" className="Img-Logo"/>
      </section>
      </section>

    </article>
  );
}
