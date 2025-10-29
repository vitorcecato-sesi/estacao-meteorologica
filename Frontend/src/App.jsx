// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilização
  import './App.css'

// Páginas
import Home from './pages/Home'
import PerguntasRespostas from './pages/PerguntasRespostas'
import Equipe from './pages/Equipe'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/perguntas-respostas' element={<PerguntasRespostas/>} />
          <Route path='/equipe' element={<Equipe/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App