import Axios from "axios";

const CLIENTE_API_URL = `http://localhost:8080/cliente`

class ClienteService{

    getAllClientes(){  //consultar todos
        return Axios.get(CLIENTE_API_URL)
    }

    createClientes(cliente){ //criar novo cliente
        return Axios.post(CLIENTE_API_URL, cliente)
    }

    getClientesById(clienteId){ // consultar por id
        return Axios.get(CLIENTE_API_URL + "/" + clienteId )
    }

    updateClientes(clienteId, cliente){ // atualizar por id
        return Axios.put(CLIENTE_API_URL + '/' + clienteId, cliente)
    } 

    deleteClientes(clienteId){ // deletar por id
        return Axios.delete(CLIENTE_API_URL + '/' + clienteId)
    }

    

}

export default new ClienteService();