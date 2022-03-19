import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Autores from "./views/autores";
import AutoresCreate from "./views/autores/Create";
import Editoras from "./views/editoras";
import EditorasCreate from "./views/editoras/Create";
import Livros from "./views/livros";
import LivrosCreate from "./views/livros/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Autores" element={<Autores />} />
          <Route path="/Autores-Create" element={<AutoresCreate />} />
          <Route path="/Autores-Update/:id" element={<AutoresCreate />} />
          <Route path="/Editoras" element={<Editoras />} />
          <Route path="/Editoras-Create" element={<EditorasCreate />} />
          <Route path="/Editoras-Update/:id" element={<EditorasCreate />} />
          <Route path="/Livros" element={<Livros />} />
          <Route path="/Livros-Create" element={<LivrosCreate />} />
          <Route path="/Livros-Update/:id" element={<LivrosCreate />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
