<template>
  <div class="columns is-desktop is-multiline">
    <div v-if="!isReady">
      <b-loading :is-full-page="true" :active="true" :can-cancel="false"></b-loading>
    </div>
    <div
      class="column is-3"
      v-else
      v-for="hero in heroesList.filter(hero => filtersList.indexOf(hero.role) >= 0)"
      :key="hero.id"
      @click="toggleModal(hero.id)"
    >
      <HeroCard
        :description="hero.description"
        :difficulty="hero.difficulty"
        :image="hero.image"
        :name="hero.name"
        :role="hero.role"
      />
    </div>
    <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img :src="activeHero.image" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ activeHero.name }}</p>
              <p class="subtitle is-6">{{ activeHero.role }}</p>
            </div>
          </div>
          <div class="content">
            {{ activeHero.description }}
          </div>
        </div>
      </div>
    </b-modal>
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
  data() {
    return {
      activeHero: {},
      isModalActive: false,
    };
  },
  computed: {
    ...mapGetters('filters', ['filtersList']),
    ...mapGetters('heroes', ['heroesList', 'isReady']),
  },
  methods: {
    toggleModal(id) {
      const index = this.heroesList.findIndex(hero => hero.id === id);
      this.activeHero = this.heroesList[index];
      this.isModalActive = !this.isModalActive;
    },
  },
};
</script>
