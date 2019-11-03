<template>
  <div>
    <span v-on:click="test">All</span>
    <span>Tank</span>
    <span>Offense</span>
    <span>Defense</span>
    <span>Support</span>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  methods: {
    test() {
      console.log('TEST');
    },
  },
};
</script>
