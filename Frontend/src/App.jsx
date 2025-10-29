// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Estilização
import "./App.css";

// Páginas
import Home from "./pages/Home";
import Projeto from "./pages/Projeto";
import Simulacao from "./pages/Wokwi";
import Hardware from "./pages/Hardware";
import Software from "./pages/Software";
import PerguntasRespostas from "./pages/PerguntasRespostas";
import Resultados from "./pages/Resultados";
import Equipe from "./pages/Equipe";

// Componente App
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/projeto' element={<Projeto/>} />
          <Route path='/simulacao' element={<Simulacao/>} />
          <Route path='/hardware' element={<Hardware/>} />
          <Route path='/software' element={<Software/>} />
          <Route path='/perguntasRespostas' element={<PerguntasRespostas/>} />
          <Route path='/resultados' element={<Resultados/>} />
          <Route path='/equipe' element={<Equipe/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
