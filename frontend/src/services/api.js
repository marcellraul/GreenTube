import axios from "axios";

export default () => {
  return axios.create({//axios para el consumo
    baseURL: `http://localhost:3000`,//mandamos la URL de donde consumiremos el API
    headers: {
      'Authorization': `Bearer ${window.localStorage.getItem('_token')}`,
    } //TOken generados para la autrnticacion del usuario.
  });
};
