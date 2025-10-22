// Hooks
  import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Estilização
  import './App.css'

// Páginas
import Home from './pages/Home'
import Software from './pages/Software'

function App() {

  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} /> 
          <Route path='/Software' element={<Software/>} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App