<template>
  <div class="row">
    <!-- <div class="col"> -->
    <div
      class="box col-sm-3 col-md-6 d-flex justify-content-center align-items-center"
      style="height: 100vh"
    >
      <figure class="">
        <img
          class="m-auto img-fluid"
          src="../../assets/image/logo_bg.png"
          style="width: 20vh; height: 22vh" alt="logo"
        />
      </figure>
    </div>
    <!-- </div> -->

    <div class="col-sm-9 col-md-6">
      <h4 class="container-lg mt-3 text-center text-capitalization">Register Here</h4>
      <!-- <p class="mx-3 p-1"> {{ message }} </p> -->

      <div class="p-3 mx-4" v-on:submit.prevent="submit">
        <label>Full name</label>
        <input
          v-if="!username"
          class="form-control"
          type="text"
          placeholder="Username"
          v-model.trim="username"
        /><br />

        <label>Email Address</label>
        <input
          v-if="!email"
          class="form-control"
          type="email"
          placeholder="Email"
          v-model="email"
        /><br />

        <label>create Password</label>
        <input
          v-if="!password"
          class="form-control"
          type="password"
          placeholder="Password"
          v-model.trim="password"
        /><br />
      </div>
      <div class="form-check d-inline-block">
        <input
          class="form-check-input mx-3 mb-2"
          type="checkbox"
          value=""
          id="invalidCheck"
          required
        />
        <label class="form-check-label m-2 d-inline-block" for="invalidCheck">
          Agree to terms and conditions
        </label>
        <div class="invalid-feedback">You must agree before submitting.</div>
        <br />
        <button class="btn btn-primary mx-5" @click="next()">Next</button>
      </div>
    </div>
  </div>

  <!-- </section> -->
</template>
<script>
// import axios from "axios";
// import { warn } from "@vue/runtime-core";
import router from "../router";
// import { validate} from "validate";
export default {
  name: "#registerFp",

  data() {
    return {
      email: "",
      password: "",
      username: "",
      termsAccepted: false,
    };
  },
  methods: {
    async next() {
      router.push({ name: "r2" });
      //validation for name, eamil,password
      // this.$v.$touch();
      // validate :{
      // if (!this.$v.$pending || this.$v.$errorMessage) {
      //   this.errorMessage = "Username is required";
      //   return;
      // } else if (!this.email) {
      //   this.errorMessage = "Email is required";
      //   return;
      // } else if (!this.password) {
      //   this.errorMessage = "Password is required";
      //   return;
      // } else if (!document.getElementById("invalidCheck").checked) {
      //   this.errorMessage =
      //     "You must agree to the terms and conditions to continue.";
      //   return;
      // }

      //  await axios.post("http://localhost:3000/user-info", {
      //   username: this.username,
      //   email: this.email,
      //   password: this.password,
      // });
      // console.log(result.data);
      // if (result.status == 201) {
      //   warn("registered...");
      //   this.$store.dispatch("user-info", {});
      //   this.localStorage.setItem("user-info", JSON.stringify(result));
      //   if (this.errorMessage) {
      //     warn(this.errorMessage);
      //   }
    },
  },
};
// ,
// };
// }
//   created() {
//     this.message = '';
//   }
// }
</script>


