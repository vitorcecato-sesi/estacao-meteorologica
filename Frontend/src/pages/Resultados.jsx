import "./Resultados.css";

import projeto2 from "../assets/projeto2.png";
import projeto3 from "../assets/projeto3.png";
import projeto4 from "../assets/projeto4.png";
import projeto5 from "../assets/projeto5.png";
import projeto6 from "../assets/projeto6.png";
import projeto7 from "../assets/projeto7.png";
import videoResultado from "../assets/projetoSensores.mp4";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Resultados() {
return (
<>
<Navbar/>
<h1 className="tituloResultados">Resultados</h1>
<p className="paragrafoResultados">Durante o processo de construção do protótipo, foi possível compreender de forma prática como ocorre a leitura de sensores ambientais e a transmissão de dados em tempo real através do protocolo MQTT, utilizando o servidor Mosquitto. O projeto proporcionou uma visão completa do funcionamento de um sistema IoT, desde a coleta das informações de temperatura, umidade e qualidade do ar, até o envio e visualização dos dados em um cliente MQTT instalado no celular. Além disso, a experiência contribuiu para o aprimoramento dos conhecimentos em eletrônica aplicada, lógica de programação, configuração de redes sem fio e análise de dados ambientais.</p>
<hr className="divisaoResultados"/>
<p className="paragrafoResultados">Um dos testes realizados consistia em acender um fósforo próximo ao sensor MQ-135, simulando um aumento temporário na concentração de gases no ambiente. Esse experimento demonstra a sensibilidade do sensor de qualidade do ar, que rapidamente detecta a alteração e envia a informação para o broker MQTT, que por sua vez transmite o dado para o cliente MQTT no celular. O resultado é uma leitura instantânea no aplicativo, mostrando o valor elevado de gás e acionando o LED de alerta no circuito.</p>

<section className="videoResultados">
    <video controls>
        <source src={videoResultado} type="video/mp4"/>
    </video>
    <p>Essa etapa final comprovou a eficiência da integração entre sensores, microcontrolador e comunicação via rede, além de evidenciar o potencial da Internet das Coisas na criação de soluções simples, acessíveis e úteis para o monitoramento ambiental. O projeto, portanto, não apenas consolidou conhecimentos técnicos, mas também reforçou a importância da tecnologia na observação e melhoria da qualidade de vida por meio de sistemas inteligentes e conectados.</p>
</section>

<h1 className="tituloResultados">Galeria de Imagens</h1>
<p className="paragrafoResultados">Nas imagens a seguir, é possível observar o circuito físico montado com o ESP32, o sensor DHT11, o sensor MQ-135 e os LEDs de status e alerta em funcionamento. O sistema responde automaticamente às variações nas medições, acendendo os LEDs conforme as condições detectadas.</p>
<section className="galeriaResultados">
    <img src={projeto2}></img>
    <img src={projeto3}></img>
    <img src={projeto4}></img>
    <img src={projeto5}></img>
    <img src={projeto6}></img>
    <img src={projeto7}></img>
</section>

<Footer/>
</>
)
}

export default Resultados;