<template>
  <h1>Login</h1>
  <div class="wrapper">
    <div class="login">
      <input type="text" v-model="email" placeholder="Enter email" />
      <input type="text" v-model="password" placeholder="Enter password" />
      <button v-on:click="login">Login</button>
      <p>
        <!-- <router-link to="/sign-up"></router-link> -->
        <RouterLink to="/sign-up"></RouterLink>
      </p>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      let result = await axios.get(
        `http://localhost:3000/users?email=${this.email}&password=${this.password}`
      );
      // alert("login function is called")
      // console.warn(this.email, this.password);
      if (result.status == 200 && result.data.length > 0) {
        localStorage.setItem("user-info", JSON.stringify(result.data[0]));

        this.$router.push({ name: "HomeCmp" });
      }
      // console.log(result);
    },
  },
  //to stop coming back to login page after user has logged in.
  //it will not come back back from home page to login page after even changing the api of loclhost
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeCmp" });
    }
  },
  components: { RouterLink }, //automatically got added
};
</script>

<style scoped>
.wrapper {
  /* background-color: rgb(245, 115, 115); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.login {
  width: 300px;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-color: skyblue;
  border-radius: 5px;
}
.login button {
  width: 300px;
  color: white;
  padding: 5px;
  height: 40px;
  background-color: skyblue;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
}
</style>
