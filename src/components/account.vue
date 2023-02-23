<template>
  <navBar class="nav-item" Cus_name="jhon deo">

  </navBar>
  <div class="row">
    <div>

      <div class="changes from component to component">

      </div>
      <div class="col-5 bg-light" style="height: 100vh; width: 100vh">
        <div class="btn-group-vertical" role="group" aria-label="Button group with primary border-right">
          <btn class="
            btn btn-light
            p-3
            bg-opacity-10
            border  
            "
             :to="{name: 'ep'}" 
            @click="setComponent(ep)">Account </btn><br>

          <router-link class="
            btn btn-light
            p-3
            bg-opacity-10
            border
                " :to="{name: 'nd'}" @click="setComponent('nf')">Notification </router-link><br>

          <router-link class="
                btn btn-light
            p-3
            bg-opacity-10
            border
            " @click="setComponent('pass')" style="width:20vh;" :to="{name:'pass' }">Password & Security </router-link> ><br>
        </div>
        <!-- <router-view :is="Component"></router-view> -->
        <!-- <router-link class="btn py-2 m-2" to="savedCard"
              >Notification
            </router-link> -->
      </div>
      <div class="bg-secondary-subtle">
        <h5 class="mt-2">{{ nameOfPage }}</h5>
        <br />

        <router-view :is="componentName"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import sideBar from "@/components/sideBar.vue";
import router from './router';
import navBar from "@/components/navbar.vue";
// import editProfile from "@/components/editProfile.vue";
export default {
  name: "#dbAccount",
  components: {
    sideBar,
    navBar,
    // editProfile,
  },
  data() {
    return {
      currentComponent: '',
      Component: "",
      SelectedComponent: "",
      nameOfPage: "Account",
      Cus_name: "Name",
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
      router.push({ name: componentName })
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
    
  