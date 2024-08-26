<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo_eliel.png')"
          class="my-3"
          contain
          height="100"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Acesso ao Sistema
        </h1>

      <v-sheet class="mx-auto" max-width="300">
       <v-form ref="form">
         <v-text-field
           v-model="credenciais.username"
           label="Username"
           required
         ></v-text-field>
         <v-text-field
           v-model="credenciais.password"
           label="Password"
           type="password"
            required
         ></v-text-field>
         <v-btn @click="login">Login</v-btn>
       </v-form>
      </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import servicoLogin from "../api/login";

export default {
  name: "vwUserLogin",

  data: () => ({
    credenciais: {
      username: 'eliel',
      password: '654321'
    },
    response: null
  }),

  methods: {
    async login() {
      try {
        //chamada do servico de login
        ////await servicoLogin.login(this.credenciais);
        const resultado = await servicoLogin.login(this.credenciais);
        ////alert(JSON.stringify(resultado));
        ////alert(JSON.parse(JSON.stringify(resultado.menu)));
        
        //criar sessao
        ////alert(this.credenciais.username);
        if (resultado) {
          sessionStorage.login = this.credenciais.username;
          localStorage.setItem('menu', JSON.parse(JSON.stringify(resultado.menu)));
          ////alert(JSON.parse(JSON.stringify(resultado.menu)));
        }

        //direcionar para a pagina home
        this.$router.push('/home');
      } catch (error) {
        sessionStorage.login = '';
        console.error('Erro ao fazer login:', error);
        this.response = error.response ? error.response.data : 'Erro desconhecido'; 
      }            
    },    
  },

};

</script>
