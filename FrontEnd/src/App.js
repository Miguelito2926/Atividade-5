import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Cliente from "./views/cliente";
import ClienteCreate from "./views/cliente/Create";
import Localidades from "./views/localidade";
import LocalidadesCreate from "./views/localidade/Create";
import Promocao from "./views/promocao";
import PromocaoCreate from "./views/promocao/Create";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import Contato from "./views/Contato";

import "./style.css";

function App() {
  return (
    <BrowserRouter>
      <main>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cliente" element={<Cliente />} />
          <Route path="Cliente/Cliente-Create" element={<ClienteCreate />} />
          <Route path="/Cliente-Update/:id" element={<ClienteCreate />} />
          <Route path="/Localidades" element={<Localidades />} />
          <Route path="/Localidades-Create" element={<LocalidadesCreate />} />
          <Route path="/Localidades-Update/:id" element={<LocalidadesCreate />} />
          <Route path="/Promocao" element={<Promocao />} />
          <Route path="/Promocao-Create" element={<PromocaoCreate />} />
          <Route path="/Promocao-Update/:id" element={<PromocaoCreate />} />
          <Route path="/Contato" element={<Contato/>} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
