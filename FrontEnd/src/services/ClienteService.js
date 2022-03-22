import axios from "axios";

const CLIENTE_API_URL = 'http://localhost:8080/cliente'

class ClienteService{

    getAllClientes(){  //consultar todos
        return axios.get(CLIENTE_API_URL)
    }

    createCliente(cliente){ //criar novo cliente
        return axios.post(CLIENTE_API_URL, cliente)
    }

    getClienteById(clienteId){ // consultar por id
        return axios.get(CLIENTE_API_URL + "/" + clienteId )
    }

    updateCliente(clienteId, cliente){ // atualizar por id
        return axios.put(CLIENTE_API_URL + '/' + clienteId, cliente)
    } 

    deleteCliente(clienteId){ // deletar por id
        return axios.delete(CLIENTE_API_URL + '/' + clienteId)
    }    

}

export default new ClienteService();