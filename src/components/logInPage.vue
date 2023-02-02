<template>
  
<section>
<div class="d-flex">
    <div class="container container-sm-h-25 bg-primary w-50 d-flex d-sm align-items-center" style="height: 100vh;">
     
      <div class="mx-auto"> <img class="align-center" src="./src/assets/logo.jpeg" />
    </div>
    </div>
  
    <div class="w-50 d-flex align-items-center">
      
      <div class="container ">
        <!-- container-sm-lg-md -->
        
        <backButton class="my-2"/>
            <h4 class="container container-lg p-3 text-center"> Login Here</h4>
       <!-- <p class="mx-3 p-1"> {{ message }} </p> -->
       
       <form class="p-3 mx-4">
            <label >Email Address</label>
          <input class="form-control" type="email" placeholder="Email" v-model="email" /><br>
    
          <label >Enter Password</label>
          <input class="form-control" type="password" placeholder="Password" v-model="password" /><br>
    
          <button class="btn btn-primary" @click="logIn()" >Next</button>
        </form>
    
          </div>  
      </div>
          
        </div>      
    </section>
    
    </template>
    <script>
    import axios from 'axios';
    import { warn } from '@vue/runtime-core';
    import backButton from './backButton.vue';
    
    export default {
        name : '#LogIn',
        components:{
            backButton
        },  
      data() {
        return {
          email: '',
          password: '',
          username: '',
         
        };
      },methods:{
        async logIn() {
            //validation for name, eamil,password
            this.errorMessage = '';
          
          if (!this.email) {
            this.errorMessage = 'Email is required';
            return;
          }
          
          if (!this.password) {
            this.errorMessage = 'Password is required';
            return;
          }
          let result = await axios.post("",
          {
          email:this.email,
          password:this.password
          });
         
          if (result.status === 201) {
    warn("Registered...");
    this.$store.dispatch("user-info", {});
    localStorage.setItem("user-info", JSON.stringify(result));
    this.$router.push({ name: "ragister" });
  }
}, catch (error) {
  console.error(error);
  if (error.response.status === 401) {
    warn("Wrong password");
  } else {
    warn("An error occurred, please try again later.");
  }
}
      }
    }
    </script>
    
    
    