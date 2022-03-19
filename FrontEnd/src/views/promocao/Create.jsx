import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AutorService from "../../services/AutorService";
import EditoraService from "../../services/EditoraService";
import LivroService from "../../services/LivroService";

export default function Create() {
  const [nome, setNome] = useState("");
  const [isbn, setIsbn] = useState("");
  const [preco, setPreco] = useState(0.0);
  const [autor, setAutor] = useState({ id_autor: "", nome: ""});
  const [editora, setEditora] = useState({ id: "", nome: "" });
  const [autores, setAutores] = useState([]);
  const [editoras, setEditoras] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const getAllEditoras = () => {
    EditoraService.getAllEditoras()
      .then((response) => {
        setEditoras(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllEditoras();
  }, []);

  const getAllAutores = () => {
    AutorService.getAllAutores()
      .then((response) => {
        setAutores(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllAutores();
  }, []);

  const criarOuEditarAutor = (e) => {
    e.preventDefault();

    const livro = { nome, isbn, preco, autor, editora };
    console.log(livro)
    if (id) {
      LivroService.updateLivro(id, livro).then((response) => {
        navigate("/Livros");
      });
    } else {
      LivroService.createLivro(livro).then((response) => {
        navigate("/Livros");
      });
    }
  };

  useEffect(() => {
    function getLivroById() {
      if (id) {
        LivroService.getLivroById(id)
          .then((response) => {
            setNome(response.data.nome);
            setIsbn(response.data.isbn);
            setPreco(response.data.preco);
            setAutor({
              id_autor: response.data.autor.id_autor,
              nome: response.data.autor.nome,
            });
            setEditora({
              id: response.data.editora.id,
              nome: response.data.editora.nome,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }

    getLivroById();
  }, [id]);

  return (
    <div className="container py-3">
      <form>
        <fieldset>
          <legend>
            <h2 className="text-center">{id ? "Editar" : "Criar"}</h2>
          </legend>
          <div className="form-group mb-3">
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

          <div className="form-group mb-3">
            <label htmlFor="Isbn" className="form-label">
              Isbn
            </label>
            <input
              type="text"
              id="Isbn"
              className="form-control"
              placeholder="Isbn"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Preco" className="form-label">
              Preço
            </label>
            <input
              type="text"
              id="Preco"
              className="form-control"
              placeholder="Preco"
              value={preco}
              onChange={(e) => setPreco(Number.parseFloat(e.target.value))}
            />
          </div>

          <div className="form-group mb-3">
            <label htmlFor="AutorId_autor" className="form-label">
              Autor
            </label>
            <select
              id="AutorId_autor"
              name="AutorId_autor"
              className="form-select"
              onChange={(e) =>
                setAutor({ id_autor: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? autor.nome : 'Escolha um autor'}</option>
              {autores.map((autor) => (
                <option key={autor.id_autor} value={autor.id_autor}>
                  {autor.nome} {autor.sobrenome}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group mb-3">
            <label htmlFor="Editora" className="form-label">
              Editora
            </label>
            <select
              id="Editora"
              name="Editora"
              className="form-select"
              onChange={(e) =>
                setEditora({ id: Number.parseInt(e.target.value) })
              }
            >
              <option value="DEFAULT" >{id ? editora.nome : 'Escolha um editora'}</option>
              {editoras.map((editora) => (
                <option key={editora.id} value={editora.id}>
                  {editora.nome}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => criarOuEditarAutor(e)}
          >
            Enviar
          </button>
          <Link
            to="/Livros"
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
