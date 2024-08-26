<template>
  <div>
   <HomeIni></HomeIni>
  </div>
</template>

<script>
import HomeIni from '../components/home';

export default {
  name: 'Vw_Home',
  components: {
    HomeIni
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
