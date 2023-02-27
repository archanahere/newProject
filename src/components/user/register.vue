
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

           <!-- <router-link to="$router.go()" class="btn" >Back</router-link> -->
       <backButton />
          
<div class="container fluid ">
<p class="mx-3 p-1">Complete Your Profile </p>

<form class="p-3 mx-auto">
<label >Phone number</label>

<input aria-selected="" class="form-control " type="text" placeholder="Phone number" v-model="Phone_number" /><br> 

<label >profession</label>
<input class="form-control" type="profession" placeholder="profession" v-model="profession" /><br>

<label >Youe Address</label>
<input class="form-control" type="Your_adderss" placeholder="Your_adderss" v-model="Your_adderss" /><br>

<label >Country Of Resistence</label>
<input class="form-control" type="country_of_resistence" placeholder="Country of resistence" v-model="country_of_resistence" /><br>

<button type="button" @click="SaveContinue" class="btn text-white">Save & Continue</button>
</form>
</div>
 </div>
</div>
  
  </template>
  <script>
  // import router from 'vue-router'
  import backButton from '@/components/user/backButton.vue'
  import router from '../router'
  // import axios from 'axios'
  // import { stringify } from 'querystring-es3'
  export default {
      name : '#registerFinal',
      components:{backButton},
    data() {
      return {
        Phone_number:'',
profession:'',
Your_adderss:'',
country_of_resistence:''
      };
    },
    methods:{
      async SaveContinue(){
//         let result = await axios.post("",{
//           Phone_number:this.Phone_number,
// profession:this.profession,
// Your_adderss:this.Your_adderss,
// country_of_resistence:this.country_of_resistence
//         }) 
//           console.warn(result);
//           if(result.status==201){
//             localStorage.setItem("user-info",stringify(result.data))
            router.push({name:'LogIn'})  
//           console.log("login")       
//           }
          
    //       },
    },
    // created() {
    //   this.message = 'For the purpose of industry regulation, your deatis are required';
    // },
  }
}
  </script>
 <style lang="scss" scoped>
  .box{

background-color: var(--primary);
} 

.btn{
background-color: var(--primary);


&:hover{
    background-color: var(--primary-alt);
    border-bottom-color: var(--primary);
    text-decoration-color: var(--primary);
}

}
  </style>
  
  
  