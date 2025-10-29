# 🌦️ Estação Meteorológica - Projeto IoT

[![ESP32](https://img.shields.io/badge/ESP32-C6-blue?logo=espressif)](https://www.espressif.com/)
[![Arduino IDE](https://img.shields.io/badge/Arduino-IDE-green?logo=arduino)](https://www.arduino.cc/en/software)
[![Wokwi](https://img.shields.io/badge/Wokwi-Simulation-orange?logo=wokwi)](https://wokwi.com/)
[![Status](https://img.shields.io/badge/Status-Concluído-success)]()

Este repositório apresenta o projeto **Estação Meteorológica**, desenvolvido como parte da disciplina de **Internet das Coisas (IoT)**, integrando conhecimentos de **Sistemas Operacionais**, **Arquitetura de Redes**, **Lógica de Programação** e **Levantamento de Requisitos**.  
O projeto tem como objetivo criar uma **estação meteorológica compacta**, utilizando um **ESP32-C6** e sensores para coletar, enviar e visualizar dados ambientais em tempo real.

---

## 🚀 Tecnologias Utilizadas

- ⚙️ **ESP32-C6** – Microcontrolador principal com Wi-Fi integrado  
- 🌡️ **DHT11** – Sensor de temperatura e umidade (3V)  
- 🧪 **MQ-135** – Sensor de qualidade do ar (5V)  
- 💡 **LEDs de status e alerta**  
- 💻 **Arduino IDE** – Desenvolvimento e upload do firmware  
- 🛰️ **Mosquitto Broker (MQTT)** – Envio e recebimento dos dados  
- 🌐 **HTML, CSS, JavaScript e React** – Desenvolvimento do site responsivo  
- 🧩 **Wokwi** – Simulação do circuito eletrônico  
- ☁️ **Vercel** – Publicação do site  

![Tecnologias](https://img.shields.io/badge/Front%20End-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20React-blue)
![IoT](https://img.shields.io/badge/IoT-ESP32%20%7C%20MQTT-lightgrey)

---

## 🧭 Estrutura do Site

O site foi criado para apresentar todas as etapas do projeto e está dividido em oito seções principais:

1. 🏠 **Home** – Introdução, objetivo do projeto e integração multidisciplinar  
2. 📘 **O Projeto** – Problema, solução IoT e fluxograma (Sensor → ESP32 → Mosquitto → Cliente MQTT)  
3. ⚙️ **Simulação Wokwi** – Imagem e link do circuito virtual  
4. 🔩 **Hardware** – Descrição e imagens dos componentes utilizados  
5. 💻 **Software** – Código comentado e configuração do Arduino IDE  
6. ❓ **Perguntas e Respostas** – 22 perguntas relacionadas ao desenvolvimento  
7. 📊 **Resultados** – Aprendizados e vídeo demonstrativo do sensor MQ-135 em ação  
8. 👥 **Equipe** – Fotos, nomes e funções de cada integrante  

---

## 🧠 Objetivo do Projeto

> Criar uma estação meteorológica compacta capaz de:
> - Coletar **temperatura**, **umidade** e **qualidade do ar**  
> - Controlar **LEDs de alerta** conforme os níveis de gás ou temperaturas detectados  
> - Enviar dados para um **servidor MQTT (Mosquitto)** via **Wi-Fi**  
> - Exibir as informações em um **cliente MQTT** no celular  

---

## 📸 Resultados e Demonstração

- Protótipo físico funcional com ESP32-C6 e sensores DHT11 e MQ-135  
- Comunicação MQTT validada e visualização em tempo real  
- Site informativo e responsivo hospedado na **Vercel**  

🎥 *O vídeo demonstra o funcionamento do sensor MQ-135 ao acender um fósforo próximo, provocando alteração na leitura de gases.*

🔗 [**Acesse o site do projeto aqui**](https://estacao-meteorologica-pi.vercel.app/)

---

## 👨‍💻 Equipe

| Integrante | Função |
|-------------|--------|
| **Laura Betti Migliaccio** | Pesquisas e imagens das páginas , Wireframe ( Software ) , Programação ( Página Software ) |
| **Lucas Casagrande da Silva** | Wireframe ( Projeto , Perguntas e Respostas , Resultados ) , Programação ( Página Projeto e Resultados ) |
| **Milena Souza** | Pesquisas e imagens das páginas  e Wireframe ( Equipe e Hardware ) , Programação ( Página Equipe ) |
| **Pietro Melle Michelin** | WireFrame (Header e Footer e Home ) , Programação ( Página Perguntas e Respostas , NavBar , Header , Footer e Home ) |
| **Pyetro Joaquim Taborda Nunes** | Wireframe ( Wooki )  , Programação ( Página Wooki ) |
| **Vitor Geraldo Cecato** | Criação do GitHub ,  Produção do Hardware do Wook , Programação ( Página Hardware ) , Programação do Arduino IDE |

📸 *Foto da equipe disponível na seção “Equipe” do site.*

---

## 🧾 Informações

Desenvolvido por:

> [**Laura Betti Migliaccio**](https://github.com/LauraBetti)  
> 📧 **bettilaura0@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/laura-betti/)  

> [**Lucas Casagrande da Silva**](https://github.com/LucasCasagrande-sesi)  
> 📧 **lucascasagrandesesi@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/lucascasagrandesilva/)  

> [**Milena Souza**](https://github.com/MilenaSouza08)  
> 📧 **mile.26souza08@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/milena-oliveira-souza-18324034a/)  

> [**Pietro Melle Michelin**](https://github.com/PietroMelle)  
> 📧 **mellepietro3@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/pietro-michelin/) 

> [**Pyetro Joaquim Taborda Nunes**](https://github.com/Extreme18870)  
> 📧 **npyetro26@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/pyetro-joaquim-nunes/)  

> [**Vitor Geraldo Cecato**](https://github.com/vitorcecato-sesi)  
> 📧 **mellepietro3@gmail.com**  
> 🔗 [LinkedIn](https://www.linkedin.com/in/vitorgcecato/)  
