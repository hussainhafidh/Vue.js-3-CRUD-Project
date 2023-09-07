<!-- //Make delete function in this component also -->
<template>
  <HeaderCmp />
  <h1>Hello {{ name }}, wolcome to Home page</h1>
  <div class="table">
    <table border="1">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Address</td>
        <td>Contact</td>
        <td>Actions</td>
      </tr>
      <tr v-for="item in restaurants" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.contact }}</td>
        <!-- //now to update restaurant, add RouterLink with specific id -->
        <td>
          <RouterLink :to="'/update/' + item.id" class="ActionBtn"
            >Update</RouterLink
          >
          <button v-on:click="deleteRestaurant(item.id)" class="ActionBtn">
            Delete
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
//install and import axios again for restaurant API
import axios from "axios";
import HeaderCmp from "./HeaderCmp.vue";
import { RouterLink } from "vue-router";
export default {
  name: "HomeCmp", //just rewrote it and the code worked
  components: {
    HeaderCmp,
    RouterLink, //automatically got added after importing
  },

  data() {
    //to show name from database on home page
    return {
      //also add a line in mounted method
      name: "", //and add moustache in h1 tag
      restaurants: [], //TO SHOW RESTAURANT API on home page
    };
  },
  methods: {
    async deleteRestaurant(id) {
      // console.warn(id)//just to check if id is displaying or not
      let result = await axios.delete(
        "http://localhost:3000/restaurants/" + id
      ); //just copy from mounted & paste it here and add id
      //dont forget slash / after restaurants else 404 server error bcuz of wrong API
      if (result.status == 200) {
        this.loadData();
      }
    },
    async loadData() {
      let user = localStorage.getItem("user-info");
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({ name: "SignUp" });
      }
      //now to show restaurant list in home page
      //install axios agian and make API of restaurant
      let result = await axios.get("http://localhost:3000/restaurants");
      // console.warn(result)
      this.restaurants = result.data; //result k under ka data chahiye
    },
  },
  //when the user doesnt exist or removed from localStorage
  //it should redirect to sign-up page
  async mounted() {
    // let user = localStorage.getItem("user-info");
    // this.name = JSON.parse(user).name;
    // if (!user) {
    //   this.$router.push({ name: "SignUp" });
    // }
    // //now to show restaurant list in home page
    // //install axios agian and make API of restaurant
    // let result = await axios.get("http://localhost:3000/restaurants");
    // // console.warn(result)
    // this.restaurants = result.data; //result k under ka data chahiye

    this.loadData();
  },
};
</script>

<style>
td {
  width: 160px;
  height: 40px;
}

.table {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ActionBtn {
  background-color: rgb(109, 174, 209);
  color: black;
  padding: 8px;
  text-decoration: none;
  border: none;
  outline: none;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
}
</style>
