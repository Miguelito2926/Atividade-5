

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicosLocalidades from "../../services/ServicosLocalidades";


export default function Index() {
  const [destinos, setDestinos] = useState([]);

  const getAllDestinos = () => {
    ServicosLocalidades.getAllDestinos()
      .then((response) => {
        setDestinos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllDestinos();
  }, []);

  const deleteDestinos = (Id_destino) => {
    ServicosLocalidades.deleteLocalidades(Id_destino)
      .then((response) => {
        getAllDestinos();
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
                <th>ID</th>
                <th>ORIGEM</th>
                <th>DESTINO</th>
                <th>DATA</th>
                <th>PREÇO</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {destinos.map((destino) => (
                <tr key={destino.id}>
                  <td>{destino.id}</td>
                  <td>{destino.origem}</td>
                  <td>{destino.destino}</td>
                  <td>{destino.data}</td>
                  <td>{destino.preco}</td>            
                 

                  <td className="d-flex">
                    <Link
                      to={`/Localidades-Update/${destino.id}`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteDestinos(destino.Id)}
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

