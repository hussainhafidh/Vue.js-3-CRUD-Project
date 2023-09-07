<template>
  <!-- <h1>Header</h1> -->
  <div class="nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="add">Add Restaurant</RouterLink>
    <!-- <RouterLink to="update">Update Restaurant</RouterLink> -->
    <!-- NO NEED OF update router-link from here now cuz we can directly update from update link -->

    <a v-on:click="logout" href="#">Logout</a>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "HeaderCmp",
  components: { RouterLink },
  methods: {
    logout() {
      // console.log("logout functn called by clicking on logout")
      localStorage.clear();
      this.$router.push({ name: "LogIN" });
    },
  },
};
</script>

<style>
.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  background-color: skyblue;
}

.nav a {
  padding: 14px;
  text-decoration: none;
  color: #333;
  /* margin: 0 10px; Add margin to create space between items */
}
.nav a:hover {
  background-color: #ddd;
  color: #222;
}
</style>
