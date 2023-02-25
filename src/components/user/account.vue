<template>
  <div class="row">
    
    <div class="col-3">
      <sideBar />
  </div>
  
  <div class=" col-9 ">
  <div class="row">
    
    <div class="col-4 bg-light" style="height: 100vh; width: 100vh">
      <div class="btn-group-vertical" role="group" aria-label="Button group with primary border-right">
        <button class="
        btn btn-light
        p-3
        bg-opacity-10
        border  
        "
             
        @click="setComponent('ep')">Account </button><br>
            
        <button class="
        btn btn-light
            p-3
            bg-opacity-10
            border
            "  @click="setComponent('nf')" >Notification </button><br>
            
            <button class="
            btn btn-light
            p-3
            bg-opacity-10
            border
            "  @click="setComponent('pass')" >Password & Security </button><br>
        </div>
        <!-- <router-view :is="Component"></router-view> -->
        <!-- <router-link class="btn py-2 m-2" to="savedCard"
          >Notification
        </router-link> -->
      </div>
      <div class=" col-5 bg-secondary-subtle">
        <!-- <h5 class="mt-2">{{ nameOfPage }}</h5> -->
        <br />
        
        <router-view :is="componentName">
        </router-view>
      </div>
    </div>
  </div>
  </div>
  
</template>
<script>
import sideBar from "@/components/user/sideBar.vue";
// import router from '../router';
// import navBar from "@/components/user/navbar.vue";
// import editProfile from "@/components/user/editProfile.vue";
export default {
  name: "#dbAccount",
  components: {
    sideBar,
    // navBar,
    // editProfile,
  },
  data() {
    return {
      
      componentName:'',
      
      profile_details: {
        First_name: "",
        Last_name: "",
        Email: "",
        Phone: "",
        Profession: "",
        Address: "",
        Country: "",
        City: "",
      },
    };
  },
  methods: {
    setComponent(componentName) {
     this.componentName=componentName
    },
    //   SelectedComponent(componentName) {
    //     this.Component = componentName;
    //   },
  }
}
// };
</script>
<style scoped>

.active-link {
  border-right-color: #007bff;
}
</style>
    
  