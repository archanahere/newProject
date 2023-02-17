<template>
  <div class="row" style="min-height: 100%">
    <div class="col-sm-4 h-sm-25 col-md-6 h-md-100 bg-primary" id="cols">
      <figure class="container-fluid">
        <img class="align-center" src="../assets/image/logo.png" />
      </figure>
    </div>

    <div
      class="col-sm-8 col-md-6 h-sm-75 h-md-100 d-flex justify-content-center"
      id="cols"
    >
      <div class="container">
        <!-- container-sm-lg-md -->

        <backButton />
        <h4 class="container p-3 text-center">Login Here</h4>
        <!-- <p class="mx-3 p-1"> {{ message }} </p> -->

        <form class="p-3 mx-4">
          <label>Email Address</label>
          <input
            class="form-control"
            type="email"
            placeholder="Email"
            v-model="email"
          /><br />

          <label>Enter Password</label>
          <input
            class="form-control"
            type="password"
            placeholder="Password"
            v-model="password"
          /><br />

          <button class="btn btn-primary" @click="logIn()">Next</button>
        </form>
      </div>
    </div>
  </div>
</template>
    <script>
// import axios from "axios";
// import { warn } from "@vue/runtime-core";
// import router from "./router";
import backButton from "@/components/backButton.vue";

export default {
  name: "#LogIn",
  components: {
    backButton,
  },
  data() {
    return {
      email: "",
      password: "",
      username: "",
    };
  },
  methods: {
    async logIn() {
      //validation for name, eamil,password
      // this.errorMessage = "";

      // if (!this.email) {
      //   this.errorMessage = "Email is required";
      //   return;
      // }

      // if (!this.password) {
      //   this.errorMessage = "Password is required";
      //   return;
      // }
      // let result = await axios.post("http://localhost:3000/user-info", {
      //   email: this.email,
      //   password: this.password,
      // });

      // if (result.status === 201) {
      //   warn("Registered...");

      //   localStorage.setItem("user-info", JSON.stringify(result));
    //     router.push({ name: "dp" });
    //   }
    // },
    // catch(error) {
    //   console.error(error);
    //   if (error.response.status === 401) {
    //     warn("Wrong password");
    //   } else {
    //     warn("An error occurred, please try again later.");
    //   }
    },
  },
};
</script>
    
  <style scoped>
/* cols {
    h
  } */
</style>
    