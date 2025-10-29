import "./Projeto.css";
import diagrama from "../assets/diagrama.png";
import fotoProjeto from "../assets/projeto1.png";

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Projeto() {
    return (
        <>
            <Navbar/>
            <h1 className="tituloProjeto">O Projeto</h1>
            <section className="descricaoProjeto">
                <p>Este projeto consiste em uma estação meteorológica compacta desenvolvida com o microcontrolador ESP32, capaz de monitorar temperatura, umidade e qualidade do ar de forma integrada e conectada. O sensor DHT11, alimentado a 3V, fornece as leituras de temperatura e umidade do ambiente, enquanto o MQ-135, operando a 5V, mede a qualidade do ar, detectando gases como amônia, CO₂ e fumaça.</p>
                <img src={fotoProjeto} />
            </section>
            <br></br>
            <hr className="divisaoProjeto" />
            <section className="detalhesProjeto">
                <section className="problemaProjeto">
                    <h2>O Problema</h2>
                    <p>A variação constante das condições climáticas e da qualidade do ar tem impacto direto na saúde, agricultura, conforto térmico e segurança ambiental. O monitoramento da temperatura, umidade e qualidade do ar é essencial para compreender o ambiente e agir de forma preventiva.
                        Altas temperaturas e baixa umidade podem indicar risco de desidratação ou incêndios florestais, enquanto níveis elevados de gases poluentes comprometem a qualidade do ar e afetam diretamente a saúde respiratória das pessoas. No entanto, medições manuais e equipamentos analógicos limitam a frequência das coletas e dificultam a análise em tempo real — criando a necessidade de uma solução automatizada e conectada.</p>
                </section>
                <hr></hr>   
                <section className="solucaoProjeto">
                    <h2>A Solução</h2>
                    <p>A Internet das Coisas (IoT) surge como resposta a esse desafio, conectando sensores e dispositivos à internet para coletar, processar e compartilhar dados em tempo real. No projeto Estação Meteorológica com ESP32, o microcontrolador atua como o cérebro do sistema, lendo os sensores DHT11 (temperatura e umidade) e MQ-135 (qualidade do ar).
                        Esses dados são transmitidos via Wi-Fi para um servidor Mosquitto, que utiliza o protocolo MQTT — leve e ideal para IoT — para publicar as informações. Por meio de um cliente MQTT em um smartphone, o usuário pode visualizar os valores instantaneamente, acompanhando a variação ambiental em tempo real. Assim, o sistema oferece automação, conectividade e eficiência, demonstrando como a IoT transforma dados em informações úteis para o bem-estar e o monitoramento ambiental.</p>
                </section>
            </section>
            
            <section className="diagramaProjeto">
                <h1>Diagrama do projeto</h1>
                <img className="" src={diagrama} />
            </section>
            <Footer/>
        </>
    )
}

export default Projeto;