<template>
  <div class="center-options">
    <div class="checkbox-container">
      <b-checkbox v-model="checkboxGroup" native-value="Tank">
          Tank
      </b-checkbox>
    </div>
    <div class="checkbox-container">
      <b-checkbox v-model="checkboxGroup" native-value="Offense">
          Offense
      </b-checkbox>
    </div>
    <div class="checkbox-container">
      <b-checkbox v-model="checkboxGroup" native-value="Defense">
          Defense
      </b-checkbox>
    </div>
    <div class="checkbox-container">
      <b-checkbox v-model="checkboxGroup" native-value="Support">
          Support
      </b-checkbox>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  computed: {
    checkboxGroup: {
      get() {
        return this.$store.state.filters.data;
      },
      set(data) {
        return this.$store.commit('filters/setFilters', data);
      },
    },
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
