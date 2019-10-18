<template>
  <div class="columns is-desktop is-multiline">
    <div
      class="column is-3"
      :key="index"
      v-for="(hero, index) in heroesList"
    >
      <HeroCard />
    </div>
  </div>
</template>

<script>
import {
  mapGetters,
} from 'vuex';
import HeroCard from './HeroCard.vue';

export default {
  name: 'CardContainer',
  components: {
    HeroCard,
  },
  computed: {
    ...mapGetters('heroes', ['heroesList']),
  },
};
</script>
