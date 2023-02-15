
<template>
<back class="postion relative">
  <div class="position-absolute top-0 start-0">Back</div>
</back>
<div class="d-flex">
    <div class="container container-sm-h-25 bg-primary w-50 d-flex d-sm align-items-center" style="height: 100vh;">
      <img class="align-center" src="../assets/image/logo.png" />
    </div>
    <div class="w-50 d-flex align-items-center">
      <div class="container container-sm-lg-md">

<h4 class="col col-lg-8 colxxl-12 col-sm-4 col-md-6 p-3 text-center">Complete Your Profile</h4>
<p class="mx-3 p-1"> {{ message }} </p>

<form class="p-3 mx-4">
<label >Phone number</label>

<input aria-selected="" class="form-control " type="text" placeholder="Phone number" v-model="Phone_number" /><br> 

<label >profession</label>
<input class="form-control" type="profession" placeholder="profession" v-model="profession" /><br>

<label >Youe Address</label>
<input class="form-control" type="Your_adderss" placeholder="Your_adderss" v-model="Your_adderss" /><br>

<label >Country Of Resistence</label>
<input class="form-control" type="country_of_resistence" placeholder="Country of resistence" v-model="country_of_resistence" /><br>

<button class="btn btn-primary" type="Save & Continue">Save & Continue</button>
</form>
</div>

 </div>
  
  </div>
  </template>
  <script>
  export default {
      name : '#registerFinal',
    data() {
      return {
        Phone_number:'',
profession:'',
Your_adderss:'',
country_of_resistence:''
      };
    },methods:{
          next(){
                   
          }
    },
    created() {
      this.message = 'For the purpose of industry regulation, your deatis are required';
    },
  };
  </script>
  
  
  