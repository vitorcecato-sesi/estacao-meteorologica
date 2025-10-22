import React, { useState } from "react";

import "./Software.css";
import Navbar from "../components/Navbar";

//Imagens
import simboloSoftware from "../assets/simboloSoftware.png";
import logoArduinoIDE from "../assets/logoArduinoIDE.png";
import fotoConfiguracoes from "../assets/fotoConfiguracoes.png";
import fotoBoardEPorta from "../assets/fotoBoardEPorta.png";
import fotoConfiguracaoInicial from "../assets/fotoConfiguracaoInicial.png"
import fotoLoopSetup from "../assets/fotoLoopSetup.png"
import fotoLeds from "../assets/fotoLeds.png"

const tabs = [
  {
    id: "config",
    title: "Configuração Inicial",
    img: {fotoConfiguracaoInicial}, // substitua pelo caminho real
    text: "O código-fonte, desenvolvido no formato .ino, foi estruturado para realizar de forma contínua a coleta e o envio das informações captadas pelos sensores. No início do programa, estão as definições dos pinos utilizados, variáveis e parâmetros de rede, como o nome da rede Wi-Fi (SSID), senha e o endereço do broker MQTT (Mosquitto).",
  },
  {
    id: "setup",
    title: "Setup e Loop",
    img: {fotoLoopSetup},
    text: "No setup(), são inicializados a comunicação serial, os sensores e a conexão Wi-Fi, além da definição do servidor MQTT. No loop(), o ESP32 realiza a leitura da temperatura, umidade e qualidade do ar, processa essas informações e as envia para o servidor MQTT por meio de tópicos específicos.",
  },
  {
    id: "leds",
    title: "LEDs",
    img:{fotoLeds},
    text: "O sistema também aciona os LEDs de status e alerta, permitindo uma resposta visual de acordo com as condições ambientais detectadas — por exemplo, indicando temperatura elevada, boa qualidade do ar ou presença de gases nocivos.",
  },
];

export default function Software() {
  const [active, setActive] = useState(tabs[0].id); //armazena qual aba esta ativa

  return (
    <>
      <Navbar />

      <section className="headerPaginaSoftware">
        <h1 className="enfeiteSoftware"> | </h1>
        <h1 className="tituloSoftware"> Software </h1>
        <img
          className="simboloSoftware"
          src={simboloSoftware}
          alt="Simbolo Software"
        />
      </section>

      <section className="blocoArduinoIDE">
        <article className="paragrafoArduinoIDE">
          <h2> Arduino IDE </h2>
          <p className="estiloTexto">
            Para desenvolver o projeto Estação Meteorológica com ESP32, foi
            utilizada a Arduino IDE, uma plataforma gratuita e fácil de usar que
            permite programar microcontroladores como o ESP32, oferecendo um
            ambiente integrado para escrever, compilar e enviar códigos, além de
            contar com diversas bibliotecas para sensores e módulos IoT.
          </p>
        </article>
        <img
          className="logoArduinoIDE"
          src={logoArduinoIDE}
          alt="Logo Arduino IDE"
        />
      </section>

      <section className="blocoConfiguracoes">
        <img
          className="fotoConfiguracoes"
          src={fotoConfiguracoes}
          alt="Print das Bibliotecas"
        />
        <article className="textoConfiguracoes">
          <h2> Configuração </h2>
          <p>
            Foi realizado o processo de instalação do suporte à placa ESP32 Dev
            Module, possibilitando sua configuração e gravação direta do código
            no microcontrolador. Para isso, adicionamos as bibliotecas
            necessárias para o funcionamento do projeto:
          </p>
          <ul>
            <li> WiFi.h → responsável pela conexão à rede sem fio; </li>
            <li>
              PubSubClient.h → usada para comunicação com o servidor MQTT;
            </li>
            <li>
              DHT.h → possibilita a leitura dos dados de temperatura e umidade.
            </li>
          </ul>
        </article>
      </section>

      <hr />

      <section className="blocoBoardEPorta">
        <article className="paragrafoBoardEPorta">
          <h2> Seleção de Board e Porta </h2>
          <p>
            Após a instalação, a IDE foi configurada com a seleção da placa
            ESP32 no menu de ferramentas, definição da porta COM correspondente
            ao dispositivo conectado e, por fim, o carregamento do sketch
            principal no ESP32.
          </p>
        </article>
        <img
          className="fotoBoardEPorta"
          src={fotoBoardEPorta}
          alt="Board e Porta Selecionadas"
        />
      </section>

      <section className="softwareContainer">
        <h1 className="tituloPartesCodigo"> Partes Fundamentais do Código Fonte </h1>
        {/* 
        Navegação das abas: um nav que contém botões para cada aba.
        Cada botão representa uma aba e permite alternar entre elas.
        */}
        <nav className="softwareTabs">
          {/* 
        Mapeia o array 'tabs' para criar um botão para cada aba.
        'tab' é um objeto com id, title, etc.
        */}
          {tabs.map((tab) => (
            <button
              key={tab.id} // Chave única para React identificar cada botão no loop
              className={`softwareTab ${active === tab.id ? "active" : ""}`} // Classe condicional: 'active' se esta aba estiver selecionada, senão vazia
              onClick={() => setActive(tab.id)} // Ao clicar, define esta aba como ativa
              role="tab" // Atributo ARIA: indica que é um elemento de aba para acessibilidade
              aria-selected={active === tab.id} // ARIA: true se selecionada, false se não; ajuda leitores de tela
            >
              {tab.title} {/* Texto do botão é o título da aba */}
            </button>
          ))}
        </nav>

        {/* 
        Conteúdo das abas: um div que contém os painéis de conteúdo.
        Apenas o painel da aba ativa é mostrado.
        */}
        <div className="softwareContent">
          {/* 
        Mapeia o array 'tabs' novamente para criar um painel (article) para cada aba.
        Cada painel é mostrado ou escondido baseado na aba ativa.
        */}
          {tabs.map((tab) => (
            <article
              key={tab.id} // Chave única para React
              className={`tabPanel ${active === tab.id ? "show" : "hide"}`} // Classe condicional: 'show' para exibir, 'hide' para esconder
              aria-hidden={active !== tab.id} // ARIA: true se escondido (não ativo), false se visível; para acessibilidade
            >
              {/* Imagem da aba, com alt para acessibilidade */}
              <img className="tabImage" src={tab.img} alt={tab.title} />

              {/* Texto da aba: título e descrição */}
              <div className="tabText">
                <h3 className="tabTitle">{tab.title}</h3> {/* Título da aba */}
                <p>{tab.text}</p> {/* Descrição ou conteúdo textual da aba */}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
