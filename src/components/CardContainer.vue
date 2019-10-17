<template>
  <div class="columns is-desktop is-multiline">
    <div
      class="column is-3"
      :key="index"
      v-for="(hero, index) in heroList"
    >
      <HeroCard />
    </div>
  </div>
</template>

<script>
import HeroCard from './HeroCard.vue';

export default {
  name: 'CardContainer',
  components: {
    HeroCard,
  },
  data() {
    return {
      heroList: [1, 1, 1, 1, 1, 1, 1, 1],
    };
  },
};
</script>
