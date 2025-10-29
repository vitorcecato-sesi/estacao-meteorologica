// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilização
  import './App.css'

// Páginas
import Home from './pages/Home'
import PerguntasRespostas from './pages/PerguntasRespostas'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/perguntasRespostas' element={<PerguntasRespostas />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App