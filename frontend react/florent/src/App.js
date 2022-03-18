import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Inicio/Home";
import Promocao from "./views/Promocao/Promocao";
import Cadastro from "./views/Cadastro/Cadastro";
import Contato from "./views/Contato/Contato";
import Destino from "./views/Destino/Destino";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import './assets/css/agencia.css';



function Rotas() {
  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Promocao" element={<Promocao/>} />
        <Route path="/Destino" element={<Destino/>} />
        <Route path="/Contato" element={<Contato/>} />
        <Route path="/Cadastro" element={<Cadastro/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default Rotas;
