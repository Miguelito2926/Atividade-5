import axios from 'axios';

const LOCALIDADES_API_URL = "http://localhost:8080/localidades";

class ServicosLocalidades {

    getAllLocalidades(){
        return axios.get(LOCALIDADES_API_URL);
    }

    createLocalidade(localidades){
        return axios.post(LOCALIDADES_API_URL, localidades);
    }

    getLocalidadeById(localidadesId){
        return axios.get(LOCALIDADES_API_URL + '/' + localidadesId);
    }

    updateLocalidade(localidades, localidadesId){
        return axios.put(LOCALIDADES_API_URL + '/' + localidadesId, localidades);
    }

    deleteLocalidade(localidadesId){
        return axios.delete(LOCALIDADES_API_URL + '/' + localidadesId);
    }
}

export default new ServicosLocalidades()