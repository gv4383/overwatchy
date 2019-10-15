<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1>Hello World</h1>
    <p>{{ info }}</p>
    <p>{{ error }}</p>
  </div>
</template>

<script>
import HTTP from './api/http-common';
// import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    // HelloWorld,
  },
  data() {
    return {
      info: null,
      error: [],
    };
  },
  created() {
    HTTP.get()
      .then((res) => {
        this.info = res.data;
      })
      .catch((e) => {
        this.error = e.message;
      });
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
