<template>
  <div class="center-options">
    <b-checkbox v-model="checkboxGroup" native-value="tank">
        Tank
    </b-checkbox>
    <b-checkbox v-model="checkboxGroup" native-value="offense">
        Offense
    </b-checkbox>
    <b-checkbox v-model="checkboxGroup" native-value="defense">
        Defense
    </b-checkbox>
    <b-checkbox v-model="checkboxGroup" native-value="support">
        Support
    </b-checkbox>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data() {
    return {
      checkboxGroup: [
        'tank',
        'offense',
        'defense',
        'support',
      ],
    };
  },
};
</script>

<style lang="scss">
.center-options {
  display: flex;
  justify-content: center;
}
</style>
