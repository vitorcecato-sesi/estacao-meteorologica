
import Navbar from "../components/Navbar"; // Barra de navegação
import Footer from "../components/Footer";
import CardPerguntaResposta from "../components/CardPerguntaResposta";
import "./PerguntasRespostas.css";

export default function PerguntasRespostas() {
    return (
        <>
            <Navbar />

            <section className="tituloPagina">
                <h1>Perguntas e Respostas</h1>
            </section>

            <section className="gridPerguntasRespostas">
                <CardPerguntaResposta
                    pergunta="O que significa a sigla MQTT?"
                    resposta="MQTT significa Message Queuing Telemetry Transport."
                    cor="#485C11"
                    numero={1}
                />
                <CardPerguntaResposta
                    pergunta="O que é um cliente MQTT?"
                    resposta="É qualquer dispositivo ou software que se conecta ao broker MQTT para enviar (publicar) ou receber (assinar) mensagens."
                    cor="#A7D493"
                    numero={2}
                />
                <CardPerguntaResposta
                    pergunta="Qual é o modelo de mensagens utilizado pelo protocolo MQTT?"
                    resposta="O modelo publish/subscribe (publicação/assinatura)."
                    cor="#5A6F2B"
                    numero={3}
                />
                <CardPerguntaResposta
                    pergunta="Qual é a relação entre MQTT e o protocolo TCP/IP?"
                    resposta="O MQTT funciona sobre o protocolo TCP/IP, que garante a entrega das mensagens."
                    cor="#A7D493"
                    numero={4}
                />
                <CardPerguntaResposta
                    pergunta="Qual é a função de um broker na arquitetura MQTT?"
                    resposta="O broker é o servidor responsável por receber, filtrar e encaminhar as mensagens entre os clientes."
                    cor="#485C11"
                    numero={5}
                />
                <CardPerguntaResposta
                    pergunta="O que significa publicar (publish) uma mensagem em MQTT?"
                    resposta="Significa enviar uma mensagem para um tópico específico, tornando-a disponível para todos os clientes que assinam esse tópico."
                    cor="#A7D493"
                    numero={6}
                />
            </section>

            <Footer />
        </>
    )
}