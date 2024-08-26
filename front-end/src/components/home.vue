<template>
  <v-app>
    <div class="d-flex justify-center ma-4">
      <v-card elevation="5" width="100%" outlined>
        <v-card-title>Página Principal</v-card-title>
        <v-card-subtitle>Bem vindo ao nosso site <b>{{s_nome}}</b>!</v-card-subtitle>
        <v-card-text>

           <v-form ref="form">
              <v-text-field
                label="Nome"
                v-model="nome"
                :rules="[rules.required, rules.min1, rules.max1]">
              </v-text-field>
              <v-text-field 
                label="E-Mail" 
                type="email"
                v-model="email"
                :rules="[rules.required, rules.email]">
              </v-text-field>
              <v-text-field 
                label="Celular"
                v-model="celular"
                :rules="[rules.required, rules.celular]">
              </v-text-field>
              <v-text-field 
                label="Mensagem"
                v-model="mensagem"
                :rules="[rules.required, rules.min1, rules.max2]">
              </v-text-field>
            </v-form>

        </v-card-text>
        <v-card-actions>
          <v-btn text color="primary" @click="submitForm">Atualizar Dados</v-btn>
          <v-btn text @click="limpar_campos">Limpar Dados</v-btn>
        </v-card-actions>
        <v-card-text v-if="isLoaded">
        <v-card-title>Dados Atualizados:</v-card-title>
          Nome: {{ nome }} <br />
          E-Mail: {{ email }} <br />
          Celular: {{ celular }} <br />
          Mensagem: {{ mensagem }} <br />
        </v-card-text>

      </v-card>
    </div>


<div style="display:none;">

    <div v-if="itens && itens.length > 1">
     <v-list-item v-for="item in itens" :to="item.link" :key="item.id">
      <v-icon>mdi-folder-network</v-icon>
      <v-treeview :items="item.id">
       {{item.label}}
      </v-treeview>
     </v-list-item>
    </div>

    <v-sheet class="pa-4 bg-primary-lighten-2">
      <v-text-field
        v-model="search"
        clear-icon="mdi-close-circle-outline"
        label="Pesquisar..."
        clearable
        dark
        flat
        hide-details
        solo-inverted
      ></v-text-field>
      <v-checkbox
        v-model="caseSensitive"
        label="Case Sensitive"
        dark
        hide-details
      ></v-checkbox>
    </v-sheet>
    
    <v-card-text>
      <v-treeview
        v-model:open="open"
        :filter="filter"
        :items="itens"
        :search="search"
        activatable
        open-on-click
      >
        <template v-slot:prepend="{ item }">
          <v-icon
            v-if="item.children"
            :icon="`mdi-${item.id === 1 ? 'home-variant' : 'folder-network'}`"
          ></v-icon>
        </template>
      </v-treeview>
    </v-card-text>

</div>



  </v-app>
</template>

<script>

////import servicoHome from "../api/usuario";
//import servicoTree from "../components/treeview";

var s_login = '';
const s_nm = sessionStorage.getItem("login");
if (s_nm) {
  s_login = s_nm[0].toUpperCase() + s_nm.substring(1);
}

export default {
  name: "vwHome",

  data: () => ({
    s_nome: s_login,
    itens: [],
    headers: [],
    nome: "eliel vieira",
    email: "eliel@elielvieira.com",
    celular: "21 9 9726 9540",
    mensagem: "Testinho...",
    array_itens: [
     {"id":1,"link":"/","label":"Login","icon":"mdi-login"},
     {"id":5,"link":"/contato","label":"Contato","icon":"mdi-gmail"},
     {"id":6,"link":"/sobre","label":"Sobre","icon":"mdi-information-outline"}
    ],

    /*
    nome: "",
    email: "",
    celular: "",
    mensagem: "",
    */

    tree: [
     {
      id: 1,
      name: 'Item 1',
      children: [
        { id: 2, name: 'Subitem 1-2' },
        { id: 3, name: 'Subitem 1-3' }
      ]
     },  
    ],

    rules: {
      required: (value) => !!value || "Campo obrigatório",
      email: (value) => {
        const pattern = (/^[^@\s]+@[^@\s]+\.[^@\s]+$/);
        return pattern.test(value) || "E-Mail inválido";
      },
      celular: (value) => {
        const pattern = /^[1-9]{2} [0-9]{1} [0-9]{4} [0-9]{4}$/;
        return pattern.test(value) || "Número inválido (Ex.: 00 0 0000 0000).";
      },
      min1: (value) => value.length >= 6 || "Valor inserido é muito curto.",
      max1: (value) => value.length <= 60 || "Valor inserido é muito longo.",
      max2: (value) => value.length <= 120 || "Valor inserido é muito longo.",
    },  

    isLoaded: false,

    open: [1, 2],
    search: null,
    caseSensitive: false,

  }),

  methods: {
    async carregarPerfil() 
    {
      ////const resultado = await servicoHome.getPermissao(sessionStorage.getItem("user_id"));
      const array_menu = JSON.parse(localStorage.getItem('menu'));
      let array_res = this.array_itens;
      if (array_menu && array_menu.length > 0) {
        array_res = array_menu;
      }
      this.itens = array_res;
      ////console.log(JSON.stringify(resultado));
    },
    async acessar() { 
      try {
        //chamada do servico
        ////const resultado = await servicoHome.home(this.dados);
        ////alert(JSON.stringify(resultado));
        ////alert('Seja Bem Vindo '+ this.dados.username);
      } catch (error) {
        console.error('Erro ao carregar site:', error);
        this.response = error.response ? error.response.data : 'Erro desconhecido'; 
      }            
    },

    submitForm() {
      this.$refs.form.validate().then((result) => {
        if (result.valid) {
          //Enviar formulario para atualizacao
          alert('Atualizando dados...');
          this.isLoaded = true;
          console.log("nome: ", this.nome);
          console.log("email: ", this.email);
          console.log("celular: ", this.celular);
          console.log("mensagem: ", this.mensagem);
        }
      });
    },

    limpar_campos() {
     this.nome = "";
     this.email = "";
     this.celular = "";
     this.mensagem = "";
    }, 
  },

  mounted() {
    this.carregarPerfil();
  },  

    computed: {
      filter () {
        return this.caseSensitive
          ? (item, search, textKey) => item[textKey].indexOf(search) > -1
          : undefined
      },
    },

};

</script>
