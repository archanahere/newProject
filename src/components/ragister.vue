
<template>

  <section class="p-5 mb-5 lg">
    <div class="container">
    <div class="d-lg-flex">
      <img class="p-5 bg-primary align-center w-50" style="width:200px" src="src\assets\logo.jpeg" />
        <div>
          <h4 class="container container-lg p-3 text-center"> Ragister Here</h4>
     <p class="mx-3 p-1"> {{ message }} </p>
     
     <form class="p-3 mx-4">
          <label >Full name</label>
        <input class="form-control " type="text" placeholder="Username" v-model="Phone_number" /><br> 
  
          <label >Email Address</label>
        <input class="form-control" type="profession" placeholder="profession" v-model="profession" /><br>
  
        <label >create Password</label>
        <input class="form-control" type="Your_adderss" placeholder="Your_adderss" v-model="Your_adderss" /><br>

        <label >Country Of Resistence</label>
        <input class="form-control" type="country_of_resistence" placeholder="Country of resistence" v-model="country_of_resistence" /><br>
  
        <button class="btn btn-primary" type="Save & Continue">Save & Continue</button>
      </form>
  
        </div>  
    </div>
        
      </div>      
  </section>
  
  </template>
  <script>
  export default {
      name : '#ragisterPage',
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
      this.message = 'For the purpose of industry your deatis are required';
    },
  };
  </script>
  
  
  