import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AutorService from "../../services/ClienteService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, SetCPF] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, email, cpf};

    if (id) {
        AutorService.updateCliente(id, cliente)
        .then((response) => {
            navigate("/Cliente")
        })

    } else {
        AutorService.createCliente(cliente)
        .then((response) => {
            navigate("/Clientes")
        })
    }
  }

  useEffect(() => {
      function getClienteById() {
        if (id) {
            AutorService.getClienteById(id)
            .then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
                SetCPF(response.data.cpf)
            })
            .catch((error) => {
                console.log(error);
            })
        }
      }
      getClienteById()
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Nome" className="form-label">
              Nome
            </label>
            <input
              type="text"
              id="Nome"
              className="form-control"
              placeholder="Nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Sobrenome" className="form-label">
              E-mail
            </label>
            <input
              type="text"
              id="Email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Cpf" className="form-label">
              CPF
            </label>
            <input
              type="text"
              id="Cpf"
              className="form-control"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary" onClick={(e) => criarOuEditarCliente(e)}>
            Enviar
          </button>
          <Link
            to="/Cliente"
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
