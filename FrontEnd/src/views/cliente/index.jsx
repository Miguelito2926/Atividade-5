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
          alert("Não é possível excluir este dado!");
        }
      });
  };

  return (
    <>
      <header className="header">
        <h1 className="container">Cadastro de Clientes</h1>
      </header>
      <div className="container p-5">
        <Link to="Cliente-Create" className="btn btn-outline-primary mb-2">
        <strong>Novo Cliente</strong> 
        </Link>
        <div className="table-responsive">
          <table className="table table-hover table-sm">
            <thead className="text-primary">
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
                      className="btn btn-outline-primary"><strong>Editar</strong> </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteCliente(cliente.id)}
                      style={{ marginLeft: "10px" }}
                    >
                      <strong>Excluir</strong>
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
