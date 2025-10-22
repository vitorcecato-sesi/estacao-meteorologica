import { useState } from "react";
import "./CardPerguntaResposta.css";

export default function CardPerguntaResposta({ pergunta, resposta, cor, numero }) {
  const [virado, setVirado] = useState(false);
  return (
    <div
      className={`cardPerguntaResposta${virado ? " virado" : ""}`}
      style={{ background: cor }}
      onClick={() => setVirado((v) => !v)}
      tabIndex={0}
      role="button"
      aria-pressed={virado}
    >
      <div className="cardFace cardFrente">
        <span className="perguntaTexto">{pergunta}</span>
        <span className="cardNumero">{numero}</span>
        <span className="cardHint">(clique para resposta)</span>
      </div>
      <div className="cardFace cardVerso">
        <span className="respostaTexto">{resposta}</span>
      </div>
    </div>
  );
}
