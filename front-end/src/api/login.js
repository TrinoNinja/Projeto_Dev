import api from './index';

// solicitar requisicao ao servidor
export default {

  async login(data) {
    const resultado = await api().post(`/auth`, data);
    const token   = resultado.data.token;
    const user_id = resultado.data.id;
    console.log(resultado)
    localStorage.setItem('token', token);
    sessionStorage.setItem('user_id', user_id);
    sessionStorage.setItem('login', '');
    return resultado.data;
  },


}  
