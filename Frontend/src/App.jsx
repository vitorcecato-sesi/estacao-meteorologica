// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilização
  import './App.css'

// Páginas
import Home from './pages/Home'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App