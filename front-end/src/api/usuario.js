import api from './index';

const config = () => {
  const tokenSessao = sessionStorage.getItem('token');
  const tokenLocal = localStorage.getItem('token');
  const token = tokenSessao?tokenSessao:tokenLocal;
  return {
    headers: { 'Authorization': `${token}` }
  }
}
export default {
  async getUser(user_id) {
    const resultado = await api().get(`/user/select/${user_id}`, config());
    return resultado.data;
  },
  async getUsers() {    
    const resultado = await api().get('/user/select/', config());
    return resultado.data;
  },
  async getPerfil(perfil_id) {
    const resultado = await api().get(`/perfil/select/${perfil_id}`, config());
    return resultado.data;
  },
  async getPerfis() {    
    const resultado = await api().get('/perfil/select/', config());
    return resultado.data;
  },
  async getPermissao(pessoa_id) {
    const resultado = await api().get(`/permissao/select/${pessoa_id}`, config());
    return resultado.data;
  },
  createUser(data) {
    return api().post('/user/insert/', data, config());
  },
  updateUser(data) {
    return api().put(`/user/update/${data.id}`, data, config());
  },
  deleteUser(user_id) {
    return api().delete(`/user/delete/${user_id}`, null, config());
  },
};
