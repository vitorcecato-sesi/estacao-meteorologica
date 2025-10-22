import React from "react";
import ImagemEquipe from '../../assets/imgEquipe.png';
import LogoG3 from '../../assets/logoG3.png'; 

export default function Equipe() {
  return (
    <article>
      <section>
        <section>
         <img src={ImagemEquipe} alt="Logo do grupo abacate" />
          <p>
            O grupo 3 é formado por Laura Betti, Lucas Casagrande, Milena,
            Pietro Melle, Pyetro Joaquim e Vitor Geraldo. Nosso grupo se destaca
            por valorizar três princípios fundamentais: honestidade,
            comprometimento e união. Acreditamos que a honestidade é essencial
            para manter a confiança e o respeito entre os integrantes; o
            comprometimento demonstra nossa dedicação em cada atividade e desejo
            de alcançar sempre o melhor resultado; já a união é o que fortalece
            nossa equipe, tornando o trabalho mais leve, produtivo e harmonioso.
            Esses valores guiam o grupo 3 mesmo diante de desafios, e é por isso
            que cada conquista se torna ainda mais significativa.
          </p>
        </section>
      </section>

    
      <section >
        <h2 >
          Integrantes da Equipe e Suas Participações
        </h2>
        </section>

      
      <section >
        <h3>Explicação da Logo do Grupo</h3>
        <p >
          O abacate da logo do nosso grupo foi criado a partir de uma
          brincadeira de mímica feita em aula. No centro dele estão os nomes dos
          integrantes, e por fora há palavras que representam as características
          do grupo: honestidade, comprometimento e união. O abacate simboliza
          algo simples, natural e cheio de energia — assim como nossa equipe.
        </p>
      </section>

      <section>
       <img src={LogoG3} alt="Logo do grupo abacate" />
      </section>
    </article>
  );
}
