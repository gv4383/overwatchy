<template>
  <div class="columns is-desktop is-multiline">
    <div class="loading-container" v-if="!isReady">
      <h1>LOADING...</h1>
    </div>
    <div
      class="column is-3"
      v-else
      v-for="hero in heroesList.filter(hero => filtersList.indexOf(hero.role) >= 0)"
      :key="hero.id"
    >
      <HeroCard
        :description="hero.description"
        :difficulty="hero.difficulty"
        :image="hero.image"
        :name="hero.name"
        :role="hero.role"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HeroCard from './HeroCard.vue';

export default {
  name: 'CardContainer',
  components: {
    HeroCard,
  },
  computed: {
    ...mapGetters('filters', ['filtersList']),
    ...mapGetters('heroes', ['heroesList', 'isReady']),
  },
};
</script>

<style lang="scss">
.loading-container {
  margin-top: 20px;
  text-align: center;
  width: 100%;
}
</style>
