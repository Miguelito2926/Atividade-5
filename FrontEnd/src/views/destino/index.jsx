import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicosLocalidades from "../../services/";

export default function Index() {
  const [localidades, setLocalidades] = useState([]);

  const getAllLocalidades = () => {
    ServicosLocalidades.getAllLocalidades()
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

  const deleteLocalidades = (localidadesId) => {
    ServicosLocalidades.deleteLocalidades(localidadesId)
      .then((response) => {
        getAllLocalidades();
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
        <h1 className="container">Cadastro Localidades</h1>
      </header>
      <div className="container py-3">
        <Link to="/Localidades-Create" className="btn btn-primary mb-2">
          Criar Destinos
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Origem</th>
                <th>Destino</th>
                <th>Data</th>
                <th>Preço</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {localidades.map((editora) => (
                <tr key={localidades.id}>
                  <td>{localidades.id}</td>
                  <td>{localidades.origem}</td>
                  <td>{localidades.destino}</td>
                  <td>{localidades.data}</td>
                  <td>{localidades.preco}</td>
                  <td className="d-flex">
                    <Link
                      to={`/Localidades-Update/${localidades.id}`}
                      className="btn btn-info"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteLocalidades(localidades.id)}
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
