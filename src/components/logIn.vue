<template>

    <section class="p-5 mb-5 lg">
      <div class="container">
      <div class="d-lg-flex">
        <img class="p-5 bg-primary align-center w-50" style="width:200px" src="src\assets\logo.jpeg" />
          <div>
            <h4 class="container container-lg p-3 text-center"> Ragister Here</h4>
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
    
    export default {
        name : '#ragister-Fp',
        
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
    
    
    