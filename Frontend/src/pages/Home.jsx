import Navbar from "../components/Navbar" // Barra de navegação
import './Home.css'

function Home() {
  return (
    <>
      <Navbar/>

      <main className="home">
        <section className="hero">
          <h1 className="hero-title">Internet of Things.</h1>
          <div className="hero-card">
            <div className="card-bg" />
            <img className="card-img" src="https://img.freepik.com/fotos-gratis/papel-de-parede-de-atmosfera-brilhante-do-globo-azul_53876-102623.jpg?semt=ais_hybrid&w=740&q=80" alt="globe" />
          </div>
        </section>

        <section className="trusted">
          <p className="trusted-label">Trusted by:</p>
          <div className="trusted-logos">
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/8c/SENAI_S%C3%A3o_Paulo_logo.png" alt="SENAI" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_SESI_vermelho.jpg" alt="SESI" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/SENAI_logo_2024.png" alt="SESI" />
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
