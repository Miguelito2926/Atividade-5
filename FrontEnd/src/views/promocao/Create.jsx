

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";
import ServicosPromocao from "../../services/ServicosPromocao";
import ServicosLocalidades from "../../services/ServicosLocalidades";
export default function Create() {

  const [promocao, setPromocao] = useState("Ex:5% de desconto");
  const [cliente, setCliente] = useState({ id: "", nome: "", email: "", cpf: "" });
  const [clientes, setClientes] = useState([]);
  const [localidades, setLocalidades] = useState({id: "", origem: "", destino: "", data: "", preco: ""});
  const [localidadess, setLocalidadess] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();


  const getAllLocalidades = () => {
    ServicosLocalidades.getAllLocalidades()
      .then((response) => {
        setLocalidadess(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllLocalidades();
  }, []);

  const getAllClientes = () => {
    ClienteService.getAllClientes()
      .then((response) => {
        setClientes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllClientes();
  }, []);

  const criarOuEditarPromocao = (e) => {
    e.preventDefault();

    const promocaos = { promocao, cliente, localidades,};
    console.log(promocaos)
    if (id) {
      ServicosPromocao.updatePromocao(id, promocaos).then((response) => {
        navigate("/Promocao");
      });
    } else {
      ServicosPromocao.createPromocao(promocaos).then((response) => {
        navigate("/Promocao");
      });
    }
  };

  useEffect(() => {
    function getPromocaoById() {
      if (id) {
        ServicosPromocao.getPromocaoById(id)
          .then((response) => {
            setPromocao(response.data.promocao.id);
            setPromocao(response.data.promocao);
            setCliente({
              id: response.data.cliente.id,
              nome: response.data.cliente.nome,
              email: response.data.cliente.email,
              cpf: response.data.cliente.cpf,
            });
            setLocalidades({
              id: response.data.localidades.id,
              origem: response.data.localidades.origem,
              destino: response.data.localidades.destino,
              data: response.data.localidades.data,
              preco: response.data.localidades.preco,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getPromocaoById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
            <label htmlFor="Promoção" className="form-label">
              Promoção
            </label>
            <input
              type="text"
              id="Promoção"
              className="form-control"
              placeholder="5% de Desconto"
              value={promocao}
              onChange={(e) => setPromocao(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Cliente" className="form-label">
              Cliente
            </label>
            <select
              id="Cliente"
              name="Cliente"
              className="form-select"
              onChange={(e) =>setCliente({ id: Number.parseInt(e.target.value)})}
            >
              <option value="default">{id ? cliente.nome : 'Selecione um cliente'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome} {cliente.email} {cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Localidade" className="form-label">
              Localidade
            </label>
            <select
              id="Localidades"
              name="Localidades"
              className="form-select"
              onChange={(e) => setLocalidades({ id: Number.parseInt(e.target.value)})}
            >
              <option value="default" >{id ? localidades.origem : 'Selecionar locais'}</option>
              {localidadess.map((localidades) => (
                <option key={localidades.id} value={localidades.id}>
                  {localidades.origem} {localidades.destino} {localidades.data} {localidades.preco}
                </option>
              ))}
            </select>
          </div>

          

          <button type="submit" className="btn btn-outline-primary" onClick={(e) => criarOuEditarPromocao(e)}>
          <strong>Enviar</strong>
          </button>

          <Link
            to="/Promocao"
            className="btn btn-outline-danger"
            style={{ marginLeft: "10px" }}
          >
          <strong>Cancelar</strong>
          </Link>
        </fieldset>
      </form>
    </div>
  );
  
  }
