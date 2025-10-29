// Hooks
import  {BrowserRouter, Routes, Route} from 'react-router-dom';

// Estilização
import './App.css';

// Páginas
import Home from './pages/Home';
import Projeto from './pages/Projeto';
import Resultados from './pages/Resultados'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/projeto' element={<Projeto/>} />
          <Route path='/resultados' element={<Resultados/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;