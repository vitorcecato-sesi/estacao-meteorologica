// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilização
  import './App.css'

// Páginas
import Home from './pages/Home'
import PerguntasRespostas from './pages/PerguntasRespostas'
import Wokwi from './pages/Wokwi'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/perguntasRespostas' element={<PerguntasRespostas />} />
          <Route path='/simulacao' element={<Wokwi />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App