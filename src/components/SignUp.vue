<template>
  <h3>Sign Up</h3>
  <div class="wrapper">
    <div class="register">
      <input type="text" v-model="name" placeholder="Enter Name" />
      <input type="text" v-model="email" placeholder="Enter Email" />
      <input type="text" v-model="password" placeholder="Enter Password" />
      <button @click="signUp">Sign UP</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      // console.warn("signUp", this.name, this.email, this.password)
      let result = await axios.post("http://localhost:3000/users", {
        email: this.email,
        name: this.name,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        // alert ("signUp done")

        localStorage.setItem("user-info", JSON.stringify(result.data));
        //in console output is in object BUT localstorage store in string, so stringfy

        //now, dont alert but when status is 201 IT SHUD rediret to HomeCmp Page.
        this.$router.push({ name: "HomeCmp" });
      }
    },
  },
  //when the user is signed in, it will redirect to HOme page
  //and NOT ALLOW TO COME BACK ON sign-up page again
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "HomeCmp" });
    }
  },
  //when the user doesnt exist or removed from localStorage
  //mounted will not allow going back to sign-up page after sign-up
  //it will remail on HomeCmp
};
</script>

<style scoped>
/* * {
  background-color: rgb(77, 65, 65);
} */

h3 {
  font-weight: bold;
  color: rgb(20, 18, 18);
}
.wrapper {
  /* background-color: rgb(245, 115, 115); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.register {
  width: 300px;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-color: skyblue;
  border-radius: 5px;

  /* display: block;
  margin-left: auto;
  margin-right: auto; */
}

.register button {
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
