import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AutorService from "../../services/AutorService";

export default function Index() {
  const [clientes, setClientes] = useState([]);

  const getAllClientes = () => {
    AutorService.getAllClientes()
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

  const deleteCliente = (clienteId) => {
    AutorService.deleteCliente(clienteId)
      .then((response) => {
        getAllClientes();
      })
      .catch((error) => {
        console.log(error);
        const { data } = error.response;
        if (data.status === 500) {
          alert("Erro na API");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro Cliente</h1>
      </header>
      <div className="container p-5">
        <Link to="/Cliente-Create" className="btn btn-primary mb-2">
          Criar Cliente
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nome</th>
                <th>CPF</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((autor) => (
                <tr key={clientes.id}>
                  <td>{clientes.id}</td>
                  <td>{clientes.nome}</td>
                  <td>{clientes.email}</td>
                  <td>{clientes.cpf}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Cliente-Update/${clientes.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCliente(clientes.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
