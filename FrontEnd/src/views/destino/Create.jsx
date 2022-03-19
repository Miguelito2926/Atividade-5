import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ServicosLocalidades from "../../services/ServicosLocalidades";

export default function Create() {
  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [data, setData] = useState("");
  const [preco, setPreco] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  const criarOuEditarLocalidades = (e) => {
    e.preventDefault();

    const localidades= { origem, destino, data, preco};

    if (id) {
      ServicosLocalidades.updateLocalidades(id, localidades).then((response) => {
        navigate("/Localidades");
      });
    } else {
      ServicosLocalidades.createLocalidades(localidades).then((response) => {
        navigate("/Localidades");
      });
    }
  };

  useEffect(() => {
    function getLocalidadesById() {
      if (id) {
        ServicosLocalidades.getLocalidadesById(id)
          .then((response) => {
            setOrigem(response.data.origem);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getLocalidadesById();
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

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarLocalidades(e)}
          >
            Enviar
          </button>
          <Link
            to="/Localidades"
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
