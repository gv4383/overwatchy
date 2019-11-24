<template>
  <div class="center-options">
    <div class="checkbox-container" v-on:click="test">
      <b-checkbox v-model="checkboxGroup" native-value="Tank">
          Tank
      </b-checkbox>
    </div>
    <div class="checkbox-container" v-on:click="test">
      <b-checkbox v-model="checkboxGroup" native-value="Offense">
          Offense
      </b-checkbox>
    </div>
    <div class="checkbox-container" v-on:click="test">
      <b-checkbox v-model="checkboxGroup" native-value="Defense">
          Defense
      </b-checkbox>
    </div>
    <div class="checkbox-container" v-on:click="test">
      <b-checkbox v-model="checkboxGroup" native-value="Support">
          Support
      </b-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  methods: {
    test() {
      this.$store.commit('filters/setFilters', this.checkboxGroup);
    },
  },
  data() {
    return {
      checkboxGroup: [
        'Tank',
        'Offense',
        'Defense',
        'Support',
      ],
    };
  },
};
</script>

<style lang="scss">
.center-options {
  display: flex;
  justify-content: center;
  align-items: center;
}
.checkbox-container {
  display: flex;
  align-items: center;
  margin-left: 10px;
}
</style>
