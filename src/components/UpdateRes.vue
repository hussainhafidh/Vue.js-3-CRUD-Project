<template>
  <HeaderCmp />
  <h1>Hello, wolcome to Update Restaurant page</h1>
  <div class="wrapper">
    <form class="update">
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
      <button type="button" v-on:click="updateRestaurants" class="updateButton">
        Update Restaurant
      </button>
      <!-- http://localhost:8080/add?name=anil&address=anil%40gmail.com&contact=anil%40123 -->
      <!-- this comes on localhosts bar when adding something so needs 
      to define type i.e. write type="button in button" -->
    </form>
  </div>
</template>

<script>
import HeaderCmp from "./HeaderCmp.vue";
import axios from "axios";

export default {
  // name: "HomeCmp", //just rewrote it and the code worked
  name: "UpdateRes",
  components: {
    HeaderCmp,
  },
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
    //to update a restaurant we have to call a functin
    async updateRestaurants() {
      // console.log("functn called", this.restaurants);
      const result = await axios.put(
        "http://localhost:3000/restaurants/" + this.$route.params.id,
        {
          name: this.restaurants.name,
          address: this.restaurants.address,
          contact: this.restaurants.contact,
        }
      );
      if (result.status === 200) {
        //use 201 when creating a new record, 200 for update
        this.$router.push({ name: "HomeCmp" });
      }
    },
  },

  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    //to get restaurants and update them by dynamic id
    const result = await axios.get(
      "http://localhost:3000/restaurants/" + this.$route.params.id
    );
    // console.warn(this.$route.params.id)
    // console.log(result.data);
    //TO PREFILL DATA on placeholder after clicking on update
    this.restaurants = result.data;
  },
};
</script>

<style>
.update {
  width: 300px;
  /* border: 1px solid black; */
}

.updateButton {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #fff;
  background-color: #4c96af;
  border: none;
  border-radius: 30px;
  box-shadow: 0 9px #999;
}

.updateButton:hover {
  background-color: #3e8e41;
}

.updateButton-button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>

<!-- this is taking styling from AddRes page -->
