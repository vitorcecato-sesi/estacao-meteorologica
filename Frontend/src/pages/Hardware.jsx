
// Estilização
  import "./Hardware.css";
//.

// Componentes
  import Navbar from "../components/Navbar";
  import HwInfoComp from "../components/hwInfoComp";
  import Footer from "../components/Footer";
//.

// Imagens
  import hwImageHeader from "../assets/hardware-header.png";
  import imgLed from "../assets/hwLed.png";
  import imgJumpers from '../assets/hwJumpers.png';
  import imgResistor from '../assets/hwResistor.png';
  import imgProtoboard from '../assets/hwProtoboard.png';
  import imgUSB from '../assets/hwUSB.png';
  import imgDHT11 from '../assets/hwDHT11.png';
  import imgMQ135 from '../assets/hwMQ135.png';
  import imgESP32 from '../assets/hwESP32.png';
//.

  export default function Hardware() {
  return (
    <>
      <section className="hwBody">
        <Navbar />
        <section className="hwTituloBox">
          <hr className="hwBorderTitulo" />
          <h1 className="hwTitulo">Hardware</h1>
          <img
            className="hwImgHeader"
            src={hwImageHeader}
            alt="Imagem Header"
          />
        </section>
        <article className="hwArticle">
          <p>
            Nessa página, demonstraremos os componentes utilizados na construção
            do hardware juntamente com suas funcionalidades dentro do nosso
            projeto de Estação Meteorológica.
          </p>
        </article>
        <br />
        <br />
        <br />
        <section className="hwSecComponentes">
            <section className="hwC1Componentes">
                
                <HwInfoComp
                lado="L"
                imgSrc={imgLed}
                imgAlt="Imagem Led"
                Titulo="Led's"
                Desc="Os LEDs funcionam como indicadores visuais no projeto. Cada cor representa uma situação diferente — por exemplo, o LED verde indica que o ambiente está em condições normais. Esses componentes emitem luz quando recebem corrente elétrica e são usados para mostrar o resultado das leituras dos sensores. Para evitar que queimem, são conectados em série com resistores."
                />

                <HwInfoComp
                    lado="R"
                    imgSrc={imgJumpers}
                    imgAlt="Imagem Jumpers"
                    Titulo="Jumpers"
                    Desc="Os jumpers, ou fios de conexão, são utilizados para ligar os componentes entre si e ao microcontrolador. Eles são responsáveis por conduzir a corrente elétrica e os sinais de dados dentro do circuito, garantindo que as informações percorram corretamente do sensor até o controlador, e do controlador até os LEDs."
                />

                <HwInfoComp
                    lado="L"
                    imgSrc={imgResistor}
                    imgAlt="Imagem Resistor"
                    Titulo="Resistores"
                    Desc="Os resistores têm a função de limitar a passagem de corrente elétrica pelos LEDs e outros componentes, evitando danos e garantindo o funcionamento seguro do circuito. Eles são fundamentais para proteger os dispositivos mais sensíveis."
                />

                <HwInfoComp
                    lado="R"
                    imgSrc={imgProtoboard}
                    imgAlt="Imagem Protoboard"
                    Titulo="Protoboard"
                    Desc="A protoboard, também conhecida como matriz de contatos, é a base de montagem do circuito. Ela é uma placa perfurada que permite conectar componentes eletrônicos sem a necessidade de solda, facilitando a criação e o teste de circuitos. A protoboard possui trilhas condutoras internas que interligam os pontos, permitindo que os fios e os componentes se comuniquem entre si."
                />

            </section>

            <section className="hwIcons">
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwD"></i>
                <i class="fa-solid fa-circle hwDE"></i>
            </section>

            <section className="hwC2Componentes">

                <HwInfoComp 
                    lado="R"
                    imgSrc={imgUSB}
                    imgAlt="Imagem USB"
                    Titulo="USB"
                    Desc="O cabo USB é utilizado para conectar o microcontrolador ao computador. Ele serve tanto para alimentar o circuito com energia elétrica quanto para permitir a transferência do código de programação para a placa."
                />

                <HwInfoComp 
                    lado="L"
                    imgSrc={imgDHT11}
                    imgAlt="Imagem DHT11"
                    Titulo="Sensor DHT11"
                    Desc="O sensor DHT11  é um sensor de temperatura e umidade. Ele coleta informações do ambiente, medindo o calor e a quantidade de umidade no ar, e envia esses dados para o microcontrolador. Essas informações podem ser usadas para monitorar o clima de um ambiente, acionar ventiladores ou emitir alertas luminosos através dos LEDs."
                />

                <HwInfoComp 
                    lado="R"
                    imgSrc={imgMQ135}
                    imgAlt="Imagem Sensor MQ-135"
                    Titulo="Sensor MQ-135"
                    Desc="Já o sensor MQ-135 é um sensor de gases. Ele é capaz de detectar a presença de substâncias como fumaça, GLP, butano, metano, CO₂ e álcool no ar. No projeto, ele serve para identificar quando há gases potencialmente perigosos no ambiente. Quando o sensor detecta uma concentração elevada de gás, o microcontrolador pode acionar um LED de alerta ou até um alarme."
                />

                <HwInfoComp
                    lado="L"
                    imgSrc={imgESP32}
                    imgAlt="Imagem ESP32"
                    Titulo="Microcontrolador ESP32"
                    Desc="O microcontrolador (ESP32) é o cérebro do projeto. Ele recebe os sinais enviados pelos sensores, processa as informações e toma decisões de acordo com a programação estabelecida. Por exemplo, ele pode acender um LED quando a temperatura estiver alta. Além disso, o microcontrolador é responsável por se comunicar com o computador, permitindo que os dados sejam exibidos na tela através do monitor serial."
                />

            </section>
        </section>
        <Footer />
      </section>
    </>
  );
}
