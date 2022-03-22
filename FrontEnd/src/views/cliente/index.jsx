import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ClienteService from "../../services/ClienteService";

export default function Index() {
  const [clientes, setClientes] = useState([]);

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

  const deleteCliente = (clienteId) => {
    ClienteService.deleteCliente(clienteId)
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
        <h1 className="container">Cadastro de Clientes</h1>
      </header>
      <div className="container p-5">
        <Link to="Cliente-Create" className="btn btn-primary mb-2">
          Novo Cliente
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>CPF</th>
                <th>OPCÕES</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.nome}</td>
                  <td>{cliente.email}</td>
                  <td>{cliente.cpf}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Cliente-Update/${cliente.id}`}
                      className="btn btn-primary"> Editar</Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteCliente(cliente.id)}
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
