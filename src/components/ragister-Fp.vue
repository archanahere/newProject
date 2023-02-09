<template>

<div class="d-flex">
    <div class="container container-sm-h-25 bg-primary w-50 d-flex d-sm align-items-center" style="height: 100vh;">
      <img class="align-center" src="../assets/image/logo.png" />
    </div>
    <div class="w-50 d-flex align-items-center">
      <div class="container container-sm-lg-md">
        <h4 class="container container-lg p-3 text-center"> Ragister Here</h4>
   <!-- <p class="mx-3 p-1"> {{ message }} </p> -->
   
   <div class="p-3 mx-4">
    <label >Full name</label>
      <input class="form-control " type="text" placeholder="Username" v-model="username" /><br> 

        <label >Email Address</label>
      <input class="form-control" type="email" placeholder="Email" v-model="email" /><br>

      <label >create Password</label>
      <input class="form-control" type="password" placeholder="Password" v-model="password" /><br>
  
      

  </div>
      <div class="form-check">
      <input class="form-check-input mx-3 mb-2" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
      <br>
      <button class="btn btn-primary mx-5" @click="next()" >Next</button>
    </div>
  </div>
</div>
      
  </div>
 

         
<!-- </section> -->

</template>
<script>
import axios from 'axios';
import { warn } from '@vue/runtime-core';
import { $router } from 'vue-router';

export default {
    name : '#ragisterFp',
    
  data() {
    return {
      email: '',
      password: '',
      username: '',
     
    };
  },methods:{
    async next() {
        //validation for name, eamil,password
        this.errorMessage = '';
      
      if (!this.username) {
        this.errorMessage = 'Username is required';
        return;
      }
      
      if (!this.email) {
        this.errorMessage = 'Email is required';
        return;
      }
      
      if (!this.password) {
        this.errorMessage = 'Password is required';
        return;
      }
      // if (!this.termsAccepted) {
      //   this.errorMessage = 'You must agree to the terms and conditions to continue.';
      // } else {
      //   // Perform next action
      //   this.errorMessage = '';
      // }
      let result = await axios.post("",
      {
      username:this.username,
      email:this.email,
      password:this.password
      });
      console.log(result.data)
      if (result.status == 201) {
         warn("ragistered...")
         this.$store.dispatch("user-info",{})
        this.localStorage.setItem("user-info", JSON.stringify(result));
      if (this.errorMessage) {
  warn(this.errorMessage);
}
  
      $router.push({ name: "ragister" })
        }
      }
  
        }
  }
//   created() {
//     this.message = '';
//   }
// }
</script>


