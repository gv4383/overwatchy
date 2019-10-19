<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <CardContainer />
  </div>
</template>

<script>
import CardContainer from './components/CardContainer.vue';

export default {
  name: 'app',
  components: {
    CardContainer,
  },
  data() {
    return {
      info: null,
      error: [],
    };
  },
  created() {
    this.$store.dispatch('heroes/fetchHeroes');
  },
};
</script>

<style lang="scss">
$family-sans-serif:'Avenir', Helvetica, Arial, sans-serif !important;

@import "~bulma/sass/utilities/_all";
@import "~bulma";
@import "~buefy/src/scss/buefy";

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.columns {
  margin: 0;
}
</style>
