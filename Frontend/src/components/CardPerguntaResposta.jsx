// Hooks
import { useState } from "react";

// Estilização
import "./CardPerguntaResposta.css";

// Componente CardPerguntaResposta
export default function CardPerguntaResposta({ pergunta, resposta, cor, numero }) { // Utiliza props para receber os dados dinâmicos

  const [virado, setVirado] = useState(false); // Estado para controlar se o card está virado ou não, quando clicado

  return (

    // Container do card, que muda de classe quando virado
    <section
      className={`cardPerguntaResposta ${virado ? " virado" : ""}`} // Classe condicional baseada no estado 'virado'
      style={{ background: cor }}
      onClick={() => setVirado((v) => !v)} // Alterna o estado ao clicar
      role="button" // Indica que é um elemento interativo
      aria-pressed={virado} // Indica o estado atual para acessibilidade
    >

      {/* Modifica o card quando esta de frente */}
      <section className="cardFace cardFrente">
        <span className="perguntaTexto"> {pergunta} </span>
        <span className="cardNumero"> {numero} </span>
        <span className="cardHint"> (clique para resposta) </span>
      </section>

      {/* Modifica o card quando esta de verso (virado) */}
      <section className="cardFace cardVerso">
        <span className="respostaTexto"> {resposta} </span>
      </section>

    </section>
  );
}
