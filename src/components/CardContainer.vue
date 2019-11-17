<template>
  <div class="columns is-desktop is-multiline">
    <div
      class="column is-3"
      v-for="hero in heroesList"
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
    ...mapGetters('heroes', ['heroesList']),
  },
};
</script>
