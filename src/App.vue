<template>
  <div id="app">
    <div class="logo-style">
      <img alt="Vue logo" src="./assets/logo.png" class="logo-style">
    </div>
    <FilterBar />
    <CardContainer />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CardContainer from './components/CardContainer.vue';
import FilterBar from './components/FilterBar.vue';

export default {
  name: 'app',
  components: {
    CardContainer,
    FilterBar,
  },
  computed: {
    ...mapGetters('filters', ['filtersList']),
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
  color: #2c3e50;
  margin-top: 60px;
}

.logo-style {
  text-align: center;
}

.columns {
  margin: 0;
}
</style>
