
import Navbar from "../components/Navbar"; // Barra de navegação
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <section className="imagemTextoPrincipalContainer">
          <h1 className="textoPrincipal">Internet of Things.</h1>

          <section className="cardImagemContainer">
            <section className="cardVede" />
            <img
              className="cardImagem"
              src="https://img.freepik.com/fotos-gratis/papel-de-parede-de-atmosfera-brilhante-do-globo-azul_53876-102623.jpg?semt=ais_hybrid&w=740&q=80"
              alt="globe"
            />
          </section>

        </section>

        <section>
          <p className="textoTrusted">Trusted by:</p>

          <section className="containerLogosTrusted">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png"
              alt="SENAI"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_SESI_vermelho.jpg"
              alt="SESI"
            />

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/05/SENAI_logo_2024.png"
              alt="SESI"
            />
          </section>

        </section>

        <section className="containerObjetivoProjeto">
          <section className="containerTextoTituloObjetivo">
            <p className="subtituloObjetivo"> Project </p>

            <h2 className="tituloObjetivo"> Objetivo do Projeto </h2>

            <p className="descricaoObjetivo"> Area provides the real objective of the project on IoT </p>
          </section>

          <section className="containerTextosObjetivo">
            <section className="caixaDeTextoObjetivo">
              <i class="fa-regular fa-keyboard" style={{ fontSize: 23, color: 'black' }} aria-hidden="true"></i>
              <h1 className="titulosObjetivos"> Using ESP32 </h1>
              <p className="textosObjetivo"> 
                O projeto Estação Meteorológica com ESP32 tem como objetivo desenvolver um sistema capaz de monitorar variáveis 
                ambientais, como temperatura, umidade e qualidade do ar, de forma automática e conectada à internet, aplicando os 
                conceitos de Internet das Coisas (IoT). 
              </p>
            </section>

            <section className="caixaDeTextoObjetivo">
              <i class="fa-regular fa-sun" style={{ fontSize: 23, color: 'black' }} aria-hidden="true"></i>
              <h1 className="titulosObjetivos"> Specifications </h1>
              <p className="textosObjetivo"> 
                Utilizando o microcontrolador ESP32, que possui conectividade Wi-Fi integrada e alto desempenho, o sistema realiza a 
                leitura dos sensores DHT11 (para temperatura e umidade) e MQ-135 (para qualidade do ar). Os dados coletados são 
                processados e enviados a um servidor MQTT (Mosquitto), permitindo sua visualização em tempo real em um aplicativo 
                cliente MQTT instalado no celular.
              </p>
            </section>

            <section className="caixaDeTextoObjetivo">
              <i class="fa-regular fa-comments" style={{ fontSize: 23, color: 'black' }} aria-hidden="true"></i>
              <h1 className="titulosObjetivos"> Communication </h1>
              <p className="textosObjetivo"> 
                Além da coleta e transmissão dos dados, o projeto conta com LEDs indicadores de status e alerta, que auxiliam na 
                identificação visual do funcionamento e de possíveis condições críticas detectadas pelos sensores. Assim, a estação 
                meteorológica se torna uma solução prática, educativa e acessível, demonstrando como dispositivos inteligentes 
                podem ser aplicados no monitoramento ambiental. 
              </p>
            </section>

          </section>

        </section>

        <section className="integracaoMultiContainer">
          <h1 className="tituloIntegracaoMulti"> Integração Multidisciplinar </h1>

          <p className="descricaoIntegracaoMulti"> 
            Sistemas Operacionais, Arquitetura de redes e IoT, Lógica de programação e Algoritmos, 
            Levantamento de Requisitos e IoT 
          </p>

          <section className="containerTextosEImgIntegracaoMulti">
            <section className="textoIntegracaoMultiContainer">
              <section className="textosIntegracaoMulti">
              <p className="numeroTextoIntMult"> 01 </p>
              <p className="textoIntMult"> 
                O ESP32 executa instruções em tempo real, o que exige o entendimento de gerenciamento 
                de tarefas, interrupções e recursos do hardware. Conceitos de sistemas operacionais foram aplicados para otimizar 
                o funcionamento simultâneo das leituras de sensores e da comunicação MQTT, garantindo eficiência e estabilidade 
                na execução do programa. 
              </p>
              <p className="textoTemaIntMult"> Sistemas Operacionais </p>
              </section>

              <section className="textosIntegracaoMulti">
              <p className="numeroTextoIntMult"> 02 </p>
              <p className="textoIntMult"> 
                A comunicação entre o ESP32 e o servidor Mosquitto foi implementada usando o protocolo MQTT, amplamente utilizado 
                em aplicações IoT por sua leveza e eficiência. Nessa etapa, foram explorados conceitos de topologia de rede, 
                endereçamento IP, conexão Wi-Fi e publicação/assinatura de tópicos, permitindo que os dados fossem enviados e 
                recebidos de forma confiável.
              </p>
              <p className="textoTemaIntMult"> Aquitetura de Redes e IoT </p>
              </section>

              <section className="textosIntegracaoMulti">
              <p className="numeroTextoIntMult"> 03 </p>
              <p className="textoIntMult"> 
                O desenvolvimento do código no Arduino IDE envolveu a aplicação de estruturas condicionais, laços de repetição e 
                funções para realizar a leitura dos sensores, controle dos LEDs e envio dos dados via rede. Essa lógica garante o 
                funcionamento sequencial e automatizado do sistema, transformando informações analógicas dos sensores em dados digitais úteis.
              </p>
              <p className="textoTemaIntMult" style={{marginRight: "-3.5em"}}> e Algoritmos </p>
              <p className="textoTemaIntMult"> Lógica de Programação </p>
              </section>

              <section className="textosIntegracaoMulti">
              <p className="numeroTextoIntMult"> 04 </p>
              <p className="textoIntMult"> 
                Antes do desenvolvimento, foi realizado um levantamento dos requisitos necessários para o funcionamento da estação — 
                definição dos sensores, forma de comunicação, controle de LEDs e interface de visualização dos dados. Essa etapa foi 
                essencial para garantir que o projeto atendesse às necessidades de monitoramento ambiental, aplicando práticas de análise 
                e planejamento de sistemas IoT.
              </p>
              <p className="textoTemaIntMult"> Levantamento de Requisitos </p>
              </section>

              <section className="textosIntegracaoMulti">
              <p className="numeroTextoIntMult"> 05 </p>
              <p className="textoIntMult"> 
                IoT refere-se à Internet das Coisas (Internet of Things), que é a interconexão de objetos físicos à internet, 
                permitindo que coletem, processem e compartilhem dados. 
              </p>
              <p className="textoTemaIntMult"> IoT </p>
              </section>

            </section>
            <img
              className="imgIntegracaoMulti"
              src="https://images.pexels.com/photos/6914435/pexels-photo-6914435.jpeg"
              alt="iot"
            />
          </section>

        </section>

        <section className="containerImagensProjeto">

          <section className="containerTextoTituloObjetivo">

            <p className="subtituloObjetivo"> Project </p>

            <h2 className="tituloObjetivo"> Imagens do Projeto </h2>

            <p className="descricaoObjetivo"> Area designated for demonstrating project images </p>
          </section>

          <section className="imagensProjeto">

            <section className="linhaImagem1">
            <img
              className="imagemProjeto"
              src="../../public/ft1robo.jpeg"
              alt="projeto1"
            />

            <img
              className="imagemProjeto"
              src="../../public/ft2robo.jpeg"
              alt="projeto2"
            />
            </section>

            <section className="linhaImagem2">
            <img
              className="imagemProjeto"
              src="../../public/ft3robo.jpeg"
              alt="projeto3"
            />

            <img
              className="imagemProjeto"
              src="../../public/ft4robo.jpeg"
              alt="projeto4"
            />
          </section>


          </section>

        </section>

      </main>
      <Footer />
    </>
  );
}
export default Home;
