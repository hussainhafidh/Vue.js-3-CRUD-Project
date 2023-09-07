<template>
  <!-- <SignUp></SignUp> -->
  <RouterView></RouterView>
</template>

<script>
import { RouterView } from "vue-router";

// import SignUp from './components/SignUp.vue';

export default {
  name: "App",
  components: { RouterView },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

body {
  padding: 0;
  margin: 0;
  background: linear-gradient(to right, #2dc1e6, #ff5733);
}
</style>
