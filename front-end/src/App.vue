<template>
 <v-app>
  <v-main>
   <v-container>        
    <div id="app">
     <div class="text-left">

<!--  
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/users">Usuários</router-link> |
      <router-link to="/edit_user">Editar Usuário</router-link> |
      <router-link to="/contato">Contato</router-link> |
      <router-link to="/sobre">Sobre</router-link>
    </nav>
-->

<div style="display:none;">
    <template v-if="itens">
      <v-navigation-drawer>
        <v-list-item title="Menu" subtitle="Lateral"></v-list-item>
        <v-divider></v-divider>
        <v-list-item v-for="item in itens" :to="item.link" :key="item.id">
         <v-btn color="primary" dark v-bind="attrs" v-on="on">
           <v-list-item-title>{{item.label}}</v-list-item-title>
         </v-btn>
        </v-list-item>
      </v-navigation-drawer>
    </template>
</div>

  <v-layout class="overflow-visible" style="height: 56px;">
    <v-bottom-navigation
      v-model="value"
      color="teal"
      grow
    >


     <v-list-item v-for="item in itens" :to="item.link" :key="item.id">
      <v-btn>
       <v-icon>{{item.icon}}</v-icon>
       <nav>
        <router-link :to="item.link">
        {{item.label}}
        </router-link>
       </nav>
      </v-btn>
     </v-list-item>


    <v-menu
      v-model="menu"
      :close-on-content-click="false"
      transition="slide-x-transition"
      location="top"
      color="indigo"
      bottom
    >
      <template v-slot:activator="{ on, props }">
        <v-btn
          color="indigo"
          dark
          icon
          v-bind="props"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
          <nav>Conta</nav>
        </v-btn>
       </template>
      <v-card min-width="300">
        <v-list>
          <v-list-item
            prepend-avatar="http://www.elielvieira.com.br/agenda/img_pes/pessoa_2.jpg"
            subtitle="Administrador"
            title="Eliel Vieira"
          >
            <template v-slot:append>
              <v-btn
                :class="fav ? 'text-blue' : ''"
                icon="mdi-account"
                variant="text"
                @click="fav = !fav"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>



 
            
 
        <v-list-item v-for="item in itens" :to="item.link" :key="item.id">
        <nav>
         <v-card-actions>
          <v-btn @click="menu = false">
           <router-link :to="item.link"><v-icon>{{item.icon}}</v-icon><span style="padding:2px 0px 0px 10px;">{{item.label}}</span></router-link>
          </v-btn>
         </v-card-actions>
        </nav>
        </v-list-item>



        <v-divider></v-divider>

        <v-list>
          <v-list-item>
            <v-switch
              v-model="message"
              color="purple"
              label="Habilitar Mensagens"
              hide-details
            ></v-switch>
          </v-list-item>

          <v-list-item>
            <v-switch
              v-model="hints"
              color="purple"
              label="Habilitar Dicas"
              hide-details
            ></v-switch>
          </v-list-item>
        </v-list>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            variant="text"
            @click="menu = false"
          >
            Desconectar
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-menu>

    </v-bottom-navigation>
   </v-layout>

  </div>

     <router-view></router-view>
    </div>
   </v-container>
  </v-main>
 </v-app>
</template>

<script>

//import TreeView from './components/treeview.vue';

export default {
  name: 'app',

//  components: {
//    TreeView
//  },

  data: () => ({
    fav: true,
    message: false,
    hints: true,
    value: 1,
    itens: [],
    array_itens: [
     {"id":1,"link":"/","label":"Login","icon":"mdi-login"},
     {"id":5,"link":"/contato","label":"Contato","icon":"mdi-gmail"},
     {"id":6,"link":"/sobre","label":"Sobre","icon":"mdi-information-outline"}
    ],         
  }),

  mounted() {
    ////alert(JSON.parse(localStorage.getItem('menu')));
    const array_menu = JSON.parse(localStorage.getItem('menu'));
    //array_menu = array_menu.split(',');
    //alert(array_menu.label);
    let array_res = this.array_itens;
    //alert(array_res.label);
    if (array_menu && array_menu) {
      array_res = array_menu;
    }    
    this.itens = array_res;
    //alert(this.itens);
  },
}

</script>

<style>
@import '~vuetify/dist/vuetify.min.css'; 
nav {
  margin-bottom: 2px;
}
nav a {
  margin-right: 2px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
}

</style>
