import './wokwi.css';
import fotoLogo from '../assets/fotoLogo.png';
import Codigo from '../assets/Codigo.mp4';
import fotoComponenete from '../assets/fotoComponenete.png';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';


function Wokwi() { 
  return (
    <>
    <Navbar />
    <section className="titulo1">
      <h1>Simulação Wolwi </h1>
      
      </section>
      <section className='blockDeExplicação'>
        
         <h1 className='tituloDaExplicação'>Wokwi</h1>
         
        <section className='imgDoLado'>
        <img className='imagem-wokwi' src={fotoLogo} alt="Simulação Wokwi"  />
        <p>Wokwi é um simulador de eletrônica online e gratuito que permite projetar  e testar circuitos com microcontroladores como Arduino, ESP32 e Raspberry Pi Pico diretamente no navegador. Ele possibilita a prototipagem de projetos de eletrônica e IoT sem a necessidade de hardware físico.</p>
        </section>
     
        
     </section>
     <section className='titulosection' > 
        <center>
                    <h1> Foto dos componentes</h1>
                    </center>
        <section className='imgDoLado2'>
       
          <p> 
Na simulação realizada na plataforma Wokwi, é possível visualizar o circuito eletrônico da Estação Meteorológica com ESP32, que integra sensores e indicadores para monitorar as condições ambientais.

O sensor DHT11 (ou similar DHT22, conforme a simulação) está conectado ao pino digital designado, sendo responsável pela leitura de temperatura e umidade.
O sensor de qualidade do ar MQ‑135 está ligado ao pino analógico do ESP32 para detectar concentração de gases poluentes no ambiente.
Três LEDs (verde, vermelho e azul) estão configurados como indicadores visuais de status: por exemplo, LED vermelho para temperatura elevada, LED verde para umidade saudável, LED azul para alerta de gás detectado.
O ESP32 está alimentado e conectado ao módulo Wi-Fi integrado, permitindo a comunicação com o servidor MQTT.
</p>
 <img className='imagemcomponente' src={fotoComponenete} alt="Simulação Wokwi"  />
</section>
     </section>
<section className='listradeSeparação' >
    <p></p>

</section>
<section className='titulosection'>
    <center> 
<h1> Foto do codigo </h1>
</center>

<section className='imgDoLado2'>
<video className='imagem-wokwi2' src={Codigo} controls>

</video>

<p>O código-fonte foi desenvolvido na Arduino IDE, formatado como um arquivo “.ino” compatível com as bibliotecas de IoT. Nele estão contemplados:

A inclusão das bibliotecas de WiFi (WiFi.h), MQTT (PubSubClient.h) e do sensor DHT (DHT.h).
A configuração dos pinos utilizados (sensores e LEDs), bem como os parâmetros de rede (SSID, senha) e do broker MQTT (endereço, porta, tópicos de publicação).
</p>
<p> No setup(), inicialização da comunicação serial, sensores, pinos de saída dos LEDs, conexão Wi-Fi e definição do servidor MQTT.
No loop(), há a lógica de verificação da conexão MQTT, leitura periódica dos sensores, formatação e envio dos dados aos tópicos MQTT, além de controle condicional dos LEDs conforme valores lidos (por exemplo, acionar LED azul se o valor do gás ultrapassar limite definido).
O sketch contempla tratamento de erros (como leituras inválidas do sensor) e uso de variáveis de tempo para publicação regular sem bloqueios excessivos.
</p>

</section>

<section className='listradeSeparação' >
    <p></p>

</section>
<section>


<button className='wokwi-button' onClick={() => window.open('https://wokwi.com/projects/446084663726957569')}>Clique aqui para acessar o projeto no Wokwi</button>



</section>

</section>
<Footer />

      
    </>
  );
}
export default Wokwi;