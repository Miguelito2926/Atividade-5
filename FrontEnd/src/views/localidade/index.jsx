

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicosLocalidades from "../../services/ServicosLocalidades";


export default function Index() {
  const [localidades, setLocalidades] = useState([]);

  const getAllLocalidades=() => {
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

  const deleteLocalidade = (localidadesId) => {
    ServicosLocalidades.deleteLocalidade(localidadesId)
      .then((response) => {
        getAllLocalidades();
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
        <h1 className="container">Cadastro de Localidades</h1>
      </header>
      <div className="container py-3">
        <Link to="/Localidades-Create" className="btn btn-outline-primary mb-2">
         <strong>Criar Localidades</strong> 
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead className="text-primary">
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
              {localidades.map((localidade) => (
                <tr key={localidade.id}>
                  <td>{localidade.id}</td>
                  <td>{localidade.origem}</td>
                  <td>{localidade.destino}</td>
                  <td>{localidade.data}</td>
                  <td>{localidade.preco}</td>            
                 

                  <td className="d-flex">
                    <Link
                      to={`/Localidades-Update/${localidade.id}`}
                      className="btn btn-outline-primary"
                    >
                      <strong>Editar</strong>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deleteLocalidade(localidade.id)}
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

