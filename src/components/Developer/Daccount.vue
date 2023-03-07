<template>
    <DsideBar/>
    <div class="row">
    
    <div class="col-3">
        <div class="col-4 bg-light" style="height: 100vh; width: 100vh">
        <div class="btn-group-vertical" role="group" aria-label="Button group with primary border-right">
          <button class="
          btn btn-light
          p-3
          bg-opacity-10
          border  
          "
               
          @click="navigateTo(DeveditPro)">Profile </button><br>
              
          <button class="
          btn btn-light
              p-3
              bg-opacity-10
              border
              "  @click="navigateTo(DPass)" > Security </button><br>
              
              <button class="
              btn btn-light
              p-3
              bg-opacity-10
              border
              "  @click="navigateTo(Dset)" >Settings </button><br>
          </div>
          <!-- <router-view :is=""></router-view>  -->
         
        <!-- <router-link :to="{name:'DeveditPro'}">Account</router-link>
        <router-link :to="{name:'DPass'}">Account</router-link>
        <router-link :to="{name:'Dset'}">Account</router-link> -->
        </div>

     
  </div>
  
  <div class=" col-9 ">
      
        <router-view :is="routeName"/>
      </div>
    </div>
  
  </template>
  <script>
import DsideBar from './DsideBar.vue';
//  import DevSidebar from "@/components/Developer/DsideBar.vue"
export default {
    name:'DevAcc',
    components:{
        DsideBar
        // DevSidebar
    },
    
    data() {
      return {
        
        routeName:'',
        
        profile_details: {
          photo:'',
          First_name: "",
          Last_name: "",
          Email: "",
          Phone: "",
          Designation: "",
          Skills: "",
          Experience: "",
          Education: "",
        },
      };
    },
methods:{
    navigateTo(routeName) {
      this.routeName=routeName;
      this.$router.push({ name: routeName });
},

        upload(){
          console.log("upload")
            // const data=new FormData();
            // data.append('image',this.selectedFile,this.selectedFile.name)
            // .then(res=>
            // console.log(res))
        
    }  
  },
  mounted()
  {

  }
}

  // };
  </script>
  <style scoped>
  
  .active-link {
    border-right-color: #007bff;
  }
  </style>
      
    
