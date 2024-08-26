<template>
  <v-container>
    <v-treeview
      :items="tree"
      activatable
      open-on-click
    ></v-treeview>
  </v-container>
</template>

<script>
//import axios from 'axios';

export default { 
  name: 'TreeView',
  data() {
    return {
      tree: [
        {
          id: 1,
          title: 'Vuetify Human Resources',
          children: [
            {
              id: 2,
              title: 'Core team',
              children: [
                {
                  id: 201,
                  title: 'John',
                },
              ],
            },
          ],
        },        
      ],
    };
  },
  created() {
    this.fetchTreeData();
  },
  methods: {
    async fetchTreeData() {
      try {
        //const response = await axios.get('http://localhost:3000/tree');
        //this.tree = response.data;
      } catch (error) {
        console.error('Erro ao buscar dados da árvore:', error);
      }
    }
  }
};
</script>

<style>
/* Você pode adicionar estilos aqui, se necessário */
</style>
