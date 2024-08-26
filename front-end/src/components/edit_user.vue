<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Editar Usuário
        </h1>

        <v-sheet class="mx-auto" max-width="300">
          <v-form ref="form">
            <v-text-field v-model="editedUser.username" label="Username" required></v-text-field>
            <v-text-field v-model="editedUser.password" label="Password" type="password" required></v-text-field>
            <v-text-field v-model="editedUser.confirmaPassword" label="Confirmar password" type="password" required></v-text-field>
            <v-select :items="perfis" v-model="perfilSelecionado" label="Perfil"
              item-title="perfil" item-value="perfil_id" 
            ></v-select>
            <v-btn @click="salvar">Salvar</v-btn>
          </v-form>
        </v-sheet>
      </v-col>
    </v-row>
    <Modal v-model="exibirModal" :texto="mensagem"></Modal>
  </v-container>
</template>

<script>

import Modal from "./modal.vue"
import servicoUsuario from "../api/usuario";

export default {
  name: "vwEditUser",
  components: {
    Modal
  },
  data: () => ({
    editedUser: {
      username: '',
      password: '',
      confirmaPassword: '',
      perfil_id: null
    },
    exibirModal: false,
    mensagem: '',
    perfis: [],
    perfilSelecionado: null
  }),

  methods: {
    async salvar() {
      //console.log(JSON.stringify(this.credenciais))
      this.editedUser.password = null;
      this.editedUser.perfil_id = this.perfilSelecionado;
      await servicoUsuario.updateUser(this.editedUser)
        .then((res) => {
          console.log(JSON.stringify(res));
          this.mensagem = `Usuário salvo com sucesso!`
          this.exibirModal = true;
        })
        .catch(() => {
          this.mensagem = `Falha ao salvar usuário!`
          this.exibirModal = true;
        });
    },
  },

  async mounted() {
    console.log(`antes de buscar perfis`)
    servicoUsuario.getPerfis()
    .then(async (res) => {
      this.perfis = res;
      this.editedUser = await servicoUsuario.getUser(this.$route.params.id);
      this.perfilSelecionado = this.editedUser.perfil_id;
    })
    .catch((e)=>{
      console.error(JSON.stringify(e));
    });
    console.log(`depios de buscar perfis ${this.perfis.length}`)
  }
};

</script>