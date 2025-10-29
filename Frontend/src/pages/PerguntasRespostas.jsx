// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CardPerguntaResposta from "../components/CardPerguntaResposta";

// Estilização
import "./PerguntasRespostas.css";

// Componente PerguntasRespostas
export default function PerguntasRespostas() {
    return (
        <>
            {/* Componente NAVBAR */}
            <Navbar />

            {/* Titulo */}
            <section className="tituloPagina">
                <h1>Perguntas e Respostas</h1>
            </section>

            {/* Grid (Container) de Perguntas e Respostas, cada um é enviado por props ao componente */}
            <section className="gridPerguntasRespostas">
                <CardPerguntaResposta
                    pergunta="O que significa a sigla MQTT?"
                    resposta="MQTT significa Message Queuing Telemetry Transport, um protocolo de mensagens leve projetado para 
                    comunicação M2M (máquina a máquina) e IoT."
                    cor="#485C11"
                    numero={1}
                />
                <CardPerguntaResposta
                    pergunta="O que é um cliente MQTT?"
                    resposta="É qualquer dispositivo ou aplicação que se conecta a um broker para publicar mensagens em tópicos ou 
                    assinar tópicos e receber mensagens."
                    cor="#A7D493"
                    numero={2}
                />
                <CardPerguntaResposta
                    pergunta="Qual é o modelo de mensagens utilizado pelo protocolo MQTT?"
                    resposta="O MQTT utiliza o modelo de publicação/assinatura (publish/subscribe), em que um broker atua como 
                    intermediário entre os clientes."
                    cor="#5A6F2B"
                    numero={3}
                />
                <CardPerguntaResposta
                    pergunta="Qual é a relação entre MQTT e o protocolo TCP/IP?"
                    resposta="O MQTT usa o TCP/IP como base de transporte, garantindo a entrega confiável das mensagens entre 
                    clientes e broker."
                    cor="#A7D493"
                    numero={4}
                />
                <CardPerguntaResposta
                    pergunta="Qual é a função de um broker na arquitetura MQTT?"
                    resposta="O broker recebe mensagens dos publicadores, filtra-as por tópico e as distribui aos clientes assinantes 
                    interessados."
                    cor="#485C11"
                    numero={5}
                />
                <CardPerguntaResposta
                    pergunta="O que significa publicar (publish) uma mensagem em MQTT?"
                    resposta="É o ato de um cliente enviar uma mensagem a um tópico específico no broker."
                    cor="#A7D493"
                    numero={6}
                />
                <CardPerguntaResposta
                    pergunta="O que significa assinar (subscribe) um tópico em MQTT?"
                    resposta="Significa que o cliente se registra para receber todas as mensagens publicadas naquele canal específico."
                    cor="#485C11"
                    numero={7}
                />
                <CardPerguntaResposta
                    pergunta="Como ocorre a comunicação entre dispositivos via MQTT?"
                    resposta="Um dispositivo (publicador) envia uma mensagem a um tópico no broker, que a encaminha aos 
                    dispositivos inscritos nesse tópico."
                    cor="#A7D493"
                    numero={8}
                />
                <CardPerguntaResposta
                    pergunta="Quais são as três partes principais que compõem uma mensagem MQTT?"
                    resposta="Cabeçalho fixo (Fixed Header), cabeçalho variável (Variable Header) e carga útil (Payload)."
                    cor="#485C11"
                    numero={9}
                />
                <CardPerguntaResposta
                    pergunta="Qual é o papel do payload em uma mensagem MQTT?"
                    resposta="É o conteúdo real da mensagem — os dados transmitidos, como leituras de sensores ou comandos."
                    cor="#A7D493"
                    numero={10}
                />
                <CardPerguntaResposta
                    pergunta="O que é um tópico na arquitetura MQTT?"
                    resposta="É um canal ou “endereço” usado para organizar e filtrar mensagens, permitindo que o broker as 
                    envie aos assinantes corretos."
                    cor="#485C11"
                    numero={11}
                />
                <CardPerguntaResposta
                    pergunta="O que é um retain message?"
                    resposta="É uma mensagem armazenada pelo broker como a última publicada em um tópico, entregue imediatamente 
                    a novos assinantes."
                    cor="#A7D493"
                    numero={12}
                />
                <CardPerguntaResposta
                    pergunta="O que é o “Last Will and Testament” no MQTT?"
                    resposta="É uma mensagem configurada por um cliente que o broker envia caso o cliente se desconecte inesperadamente."
                    cor="#485C11"
                    numero={13}
                />
                <CardPerguntaResposta
                    pergunta=" Por que o MQTT é ideal para integração com sensores e atuadores em IoT?"
                    resposta="Por ser leve e eficiente, funciona bem em dispositivos com poucos recursos e redes limitadas."
                    cor="#A7D493"
                    numero={14}
                />
                <CardPerguntaResposta
                    pergunta="O que é o Mosquitto no ecossistema MQTT?"
                    resposta="Um broker MQTT de código aberto, leve e gratuito, muito usado em aplicações industriais e IoT."
                    cor="#485C11"
                    numero={15}
                />
                <CardPerguntaResposta
                    pergunta="Qual é a porta padrão para conexões MQTT não criptografadas?"
                    resposta="A porta 1883."
                    cor="#A7D493"
                    numero={16}
                />
                <CardPerguntaResposta
                    pergunta="Qual é uma boa prática de segurança em redes MQTT industriais para proteger o broker?"
                    resposta="Isolar o broker com firewall e permitir apenas portas essenciais, como 8883 (segura) e 443 (WebSocket seguro)."
                    cor="#485C11"
                    numero={17}
                />
                <CardPerguntaResposta
                    pergunta="Como o MQTT lida com dispositivos que perdem a conexão com o broker?"
                    resposta="Pode usar o “Last Will and Testament” ou mensagens retain para manter o sistema informado sobre desconexões."
                    cor="#A7D493"
                    numero={18}
                />
                <CardPerguntaResposta
                    pergunta=" Como o MQTT pode ser usado em automação residencial?"
                    resposta="Permite que sensores e atuadores troquem dados via Wi-Fi, possibilitando o controle remoto de dispositivos inteligentes."
                    cor="#485C11"
                    numero={19}
                />
                <CardPerguntaResposta
                    pergunta="Qual a principal diferença entre o modelo MQTT e o HTTP?"
                    resposta="No MQTT há um broker intermediário; no HTTP o cliente comunica-se diretamente com o servidor."
                    cor="#A7D493"
                    numero={20}
                />
                <CardPerguntaResposta
                    pergunta="Quais são as vantagens do MQTT em projetos IoT?"
                    resposta="É leve, eficiente, fácil de implementar e ideal para conexões instáveis ou de baixa largura de banda."
                    cor="#485C11"
                    numero={21}
                />
                <CardPerguntaResposta
                    pergunta="O que representa a porta 8883 no MQTT?"
                    resposta="É a porta padrão para conexões seguras com criptografia TLS/SSL."
                    cor="#A7D493"
                    numero={22}
                />
            </section>

            <br />
            <br />

            {/* Componente FOOTER */}
            <Footer />
        </>
    )
}