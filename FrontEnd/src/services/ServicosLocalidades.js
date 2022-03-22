import axios from 'axios';

const LOCALIDADES_API_URL = "http://localhost:8080/localidades";

class ServicosLocalidades {

    getAllDestinos(){
        return axios.get(LOCALIDADES_API_URL);
    }

    createDestinos(localidades){
        return axios.post(LOCALIDADES_API_URL, localidades);
    }

    getLocalidadesById(localidadesId){
        return axios.get(LOCALIDADES_API_URL + '/' + localidadesId);
    }

    updateLocalidades(localidades, localidadesId){
        return axios.put(LOCALIDADES_API_URL + '/' + localidadesId, localidades);
    }

    deleteLocalidades(localidadesId){
        return axios.delete(LOCALIDADES_API_URL + '/' + localidadesId);
    }
}

export default new ServicosLocalidades()