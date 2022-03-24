
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicosLocalidades from "../../services/ServicosLocalidades";


export default function Create() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [preco, setPreco] = useState("0.0");
  const { id } = useParams();
  const navigate = useNavigate();
 
  const criarOuEditarLocalidade = (e) => {
    e.preventDefault();
    const localidades = {origem, destino, data, preco};

    if (id) {
      ServicosLocalidades.updateLocalidade(id, localidades).then((response) => {
        navigate("/Localidades");
      });
    } else {
      ServicosLocalidades.createLocalidade(localidades).then((response) => {
        navigate("/Localidades");
      });
    }
  };

  useEffect(() => {
    function getLocalidadeById() {
      if (id) {
        ServicosLocalidades.getLocalidadeById(id)
          .then((response) => {

            setOrigem(response.data.origem);
            setDestino(response.data.destino);
            setData(response.data.data);
            setPreco(response.data.preco);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getLocalidadeById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="mb-3">
            <label htmlFor="Origem" className="form-label">
              Origem
            </label>
            <input
              type="text"
              id="Origem"
              className="form-control"
              placeholder="Origem"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Destino" className="form-label">
              Destino
            </label>
            <input
              type="text"
              id="Destino"
              className="form-control"
              placeholder="Destino"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="Data" className="form-label">
              Data
            </label>
            <input
              type="date"
              id="Data"
              className="form-control"
              placeholder="Data"
              value={data}
              onChange={(e) => setData(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="Preco" className="form-label">
              Preço
            </label>
            <input
              type="numeric"
              id="Preco"
              className="form-control"
              placeholder="Preco"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />
          </div>        

          
          <button type="submit" className="btn btn-outline-primary" onClick={(e) => criarOuEditarLocalidade(e)}>
          <strong>Enviar</strong>
          </button>
          <Link
            to="/Localidades"
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
