

import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";
import ServicosPromocao from "../../services/ServicosPromocao";
import ServicosLocalidades from "../../services/ServicosLocalidades";
export default function Create() {

  const [promocao, setPromocao] = useState("Ex: Pacote internacional");
  const [cliente, setCliente] = useState({ id: "", nome: "", email: "", cpf: "" });
  const [clientes, setClientes] = useState([]);
  const [localidade, setLocalidade] = useState({id: "", origem: "", destino: "", data: "", preco: ""});
  const [localidades, setLocalidades] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  
  const getAllLocalidades = () => {
    ClienteService.getAllLocalidades()
      .then((response) => {
        setLocalidades(response.data);
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


    const promocao = { promocao };

    if (id) {
      ServicosPromocao.updatePromocao(id, promocao).then((response) => {
        navigate("/Promocao");
      });
    } else {
      ServicosPromocao.createPromocao(promocao).then((response) => {
        navigate("/Promocao");
      });
    }
  };

  useEffect(() => {
    function getPromocaoById() {
      if (id) {
        ServicosPromocao.getPromocaoById(id)
          .then((response) => {
            setPromocao(response.data.promocao);
            setCliente({
              id: response.data.cliente.id,
              nome: response.data.cliente.nome,
              email: response.data.cliente.email,
              cpf: response.data.cliente.cpf,
            });
            setLocalidade({
              id: response.data.localidade.id,
              origem: response.data.localidade.origem,
              destino: response.data.localidade.destino,
              data: response.data.localidade.data,
              preco:response.data.localidade.preco,
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
          <div className="mb-3">
            <label htmlFor="Promocao" className="form-label">
              Promocao
            </label>
            <input
              type="text"
              id="Promocao"
              className="form-control"
              placeholder="Promocao"
              value={promocao}
              onChange={(e) => setPromocao(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="ClienteId_cliente" className="form-label">
              Cliente
            </label>
            <select
              id="ClienteId_cliente"
              name="clienteId_cliente"
              className="form-select"
              onChange={(e) =>
                setCliente({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? cliente.nome : 'Escolha um cliente'}</option>
              {clientes.map((cliente) => (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome} {cliente.email} {cliente.cpf}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Localidades" className="form-label">
              Localidade
            </label>
            <select
              id="Localidade"
              name="Localidade"
              className="form-select"
              onChange={(e) =>
                setLocalidade({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? localidade.origem : 'Alterar localidades'}</option>
              {localidades.map((localidade) => (
                <option key={localidade.id} value={localidade.id}>
                  {localidade.origem} {localidade.destino} {localidade.data} {localidade.preco}
                </option>
              ))}
            </select>
          </div>


          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarPromocao(e)}
          >
            Enviar
          </button>
          <Link
            to="/Promocao"
            className="btn btn-danger"
            style={{ marginLeft: "10px" }}
          >
            Cancelar
          </Link>
        </fieldset>
      </form>
    </div>
  );
}
