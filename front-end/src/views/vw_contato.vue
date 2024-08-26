<template>
  <div>
   <ContatoIni></ContatoIni>
  </div>
</template>

<script>
import ContatoIni from '../components/contato';

export default {
  name: 'Vw_Contato',
  components: {
    ContatoIni
  },
  data() {
    return {
      dados: [],
    };
  },
};
</script>

<style scoped>
/* Adicione estilos específicos para este componente aqui */
</style>
