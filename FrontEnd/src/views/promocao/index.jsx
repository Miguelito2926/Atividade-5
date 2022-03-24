

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ServicosPromocao from "../../services/ServicosPromocao";


export default function Index() {
  const [promocao, setPromocao] = useState([]);

  const getAllPromocao = () => {
    ServicosPromocao.getAllPromocao()
      .then((response) => {
        setPromocao(response.data);
      })
      .catch((error) => {
        console.log(error);
       
      });
  };

  useEffect(() => {
    getAllPromocao();
  }, []);

  const deletePromocao = (promocaoId) => {
    ServicosPromocao.deletePromocao(promocaoId)
      .then((response) => {
        getAllPromocao();
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
        <h1 className="container">Cadastro de Promoção</h1>
      </header>
      <div className="container py-3">
        <Link to="/Promocao-Create" className="btn btn-outline-primary mb-2">
        <strong>Criar Promoção</strong>
        </Link>
        <div className="table-responsive">
          <table className="table">
            <thead className="text-primary">
              <tr>
                <th>ID</th>
                <th>PROMOÇÃO</th>
                <th>NOME</th>
                <th>E-MAIL</th>
                <th>CPF</th>
                <th>ORIGEM</th>
                <th>DESTINO</th>
                <th>DATA</th>
                <th>PREÇO</th>             
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {promocao.map((promocao) => (
                <tr key={promocao.id}>
                  <td>{promocao.id}</td>
                  <td>{promocao.promocao}</td>              
                  <td>{promocao.cliente.nome} </td>
                  <td> {promocao.cliente.email}</td>
                  <td>{promocao.cliente.cpf}</td>
                  <td>{promocao.localidades.origem}</td>
                  <td>{promocao.localidades.destino}</td>
                  <td>{promocao.localidades.data}</td>
                  <td>{promocao.localidades.preco}</td>
                  <td className="d-flex">
                    <Link
                   to={`/Promocao-Update/${promocao.id}`}
                      className="btn btn-outline-primary"
                    >
                 <strong>Editar</strong>
                    </Link>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => deletePromocao(promocao.id)}
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
