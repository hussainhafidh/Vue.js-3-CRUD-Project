<template>
  <HeaderCmp />
  <h1>Hello, wolcome to ADD Restauran page</h1>
  <div class="wrapper">
    <form class="add">
      <input
        type="text"
        placeholder="Enter Name"
        v-model="restaurants.name"
        name="name"
      />
      <input
        type="text"
        placeholder="Enter Address"
        v-model="restaurants.address"
        name="address"
      />
      <input
        type="text"
        placeholder="Enter Contact"
        v-model="restaurants.contact"
        name="contact"
      />
      <button type="button" v-on:click="addRestaurants" class="btn">
        Add New Restaurant
      </button>
      <!-- http://localhost:8080/add?name=anil&address=anil%40gmail.com&contact=anil%40123 -->
      <!-- this comes on localhosts bar when adding something so needs 
      to define type i.e. write type="button in button" -->
    </form>
  </div>
</template>

<script>
import axios from "axios";
import HeaderCmp from "./HeaderCmp.vue";
export default {
  name: "AddRes", //just rewrote it and the code worked
  components: {
    HeaderCmp,
  },

  //now define data property for above input
  data() {
    return {
      restaurants: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },

  methods: {
    async addRestaurants() {
      console.log(this.restaurants);
      const result = await axios.post("http://localhost:3000/restaurants", {
        name: this.restaurants.name,
        address: this.restaurants.address,
        contact: this.restaurants.contact,
      });
      if (result.status === 201) {
        this.$router.push({ name: "HomeCmp" });
      }
      console.log("result", result);
    },
  },

  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
  //when the user doesnt exist or removed from localStorage
  //it should redirect to sign-up page
};
</script>

<style>
.wrapper {
  /* background-color: rgb(245, 115, 115); */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.add {
  width: 300px;
}
input {
  width: 100%;
  height: 40px;
  margin-bottom: 30px;
  border-color: skyblue;
  border-radius: 5px;
}
.btn {
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
