<template>
  
  
  <div class="row">  
    <!-- <div class="col"> -->
      <div class=" box col-sm-3 col-md-6 d-flex justify-content-center align-items-center" style="height:100vh">
      <figure class="">
        <img class="m-auto img-fluid" src="../../assets/image/logo_bg.png" style="width:20vh; height:22vh" />
      </figure>
    </div>
    <!-- </div> -->
    
  
      <div class="col-sm-9 col-md-6 ">

        <backButton />
        <h4 class="container p-3 text-center">Login Here</h4>
        <!-- <p class="mx-3 p-1"> {{ message }} </p> -->
        
        <form class="p-3 mx-4">
          <select class="form-select form-select-sm" aria-label=".form-select-sm example">
          <option selected></option>
          <option value="1">User</option>
          <option value="2">Developer</option>
          <option value="3">Admin</option>
          </select>
          <br>
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


          <button class="btn text-white align-items-center d-block" @click="logIn()">Next</button>
        </form>
      </div>
    </div>
  
</template>
    <script>
// import axios from "axios";
// import { warn } from "@vue/runtime-core";
import router from "../router";
import backButton from "@/components/user/backButton.vue";

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
        router.push({ name: "d2" });
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
    
  <style scoped lang="scss">
.box{

background-color: var(--primary);
} 

.btn{
background-color: var(--primary);

&:hover{
    background-color: var(--primary-alt);
    border-bottom-color: var(--primary);
}

}

</style>
    