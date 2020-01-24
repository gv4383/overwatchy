<template>
  <div class="columns is-desktop is-multiline">
    <div v-if="!isReady">
      <b-loading :is-full-page="true" :active="true" :can-cancel="false"></b-loading>
    </div>
    <div
      class="column is-3"
      @click="test"
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
    <b-modal :active.sync="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/static/img/placeholder-1280x960.png" alt="Image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="/static/img/placeholder-1280x960.png" alt="Image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>
          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus nec iaculis mauris. <a>@bulmaio</a>.
            <a>#css</a> <a>#responsive</a>
            <br>
            <small>11:09 PM - 1 Jan 2016</small>
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
      isModalActive: false,
    };
  },
  computed: {
    ...mapGetters('filters', ['filtersList']),
    ...mapGetters('heroes', ['heroesList', 'isReady']),
  },
  methods: {
    test() {
      // console.log(this.isModalActive);
      this.isModalActive = !this.isModalActive;
    },
  },
};
</script>
