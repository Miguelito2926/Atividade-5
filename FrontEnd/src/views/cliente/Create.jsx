import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Create() {

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarCliente = (e) => {
    e.preventDefault();

    const cliente = { nome, email, cpf};

    if (id) {
      ClienteService.updateCliente(id, cliente).then((response) => {
            navigate("/Cliente");
        });

    } else {
      ClienteService.createCliente(cliente).then((response) => {navigate("/Cliente");
        });
    }
  };

  useEffect(() => {
      function getClienteById() {
        if (id) {
          ClienteService.getClienteById(id)
            .then((response) => {
                setNome(response.data.nome);
                setEmail(response.data.email);
                setCpf(response.data.cpf);
            })
            .catch((error) => {
                console.log(error);
            });
        }
      }
      getClienteById();
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
            <label htmlFor="Email" className="form-label">
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
              id="CPF"
              className="form-control"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-outline-primary" onClick={(e) => criarOuEditarCliente(e)}>
          <strong>Enviar</strong>
          </button>
          <Link
            to="/Cliente"
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
