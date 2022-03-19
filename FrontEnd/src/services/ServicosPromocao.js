import axios from 'axios';

const PROMOCAO_API_URL = "http://localhost:8080/promocao";

class ServicosPromocao {

    getPromocao(){
        return axios.get(PROMOCAO_API_URL);
    }

    createPromocao(localidades){
        return axios.post(PROMOCAO_API_URL, localidades);
    }

    getPromocaoById(promocaoId){
        return axios.get(PROMOCAO_API_URL+ '/' + promocaoId);
    }

    updatePromocao(promocao, promocaoId){
        return axios.put(PROMOCAO_API_URL + '/' + promocaoId, promocao);
    }

    deletePromocao(promocaoId){
        return axios.delete(PROMOCAO_API_URL + '/' + promocaoId);
    }
}

export default new ServicosPromocao()