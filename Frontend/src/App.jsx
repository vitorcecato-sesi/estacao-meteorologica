// Hooks
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Estilização
import "./App.css";

// Páginas
import Home from "./pages/Home";
import Hardware from "./pages/Hardware";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hardware" element={<Hardware />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
