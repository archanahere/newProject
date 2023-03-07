<template>
  <div class="sideBar">
    <nav class="navbar navbar-expand-lg continer-fluid d-inline-flex w-100" id="navbar">
      <div class="d-inline-flex justify-content-evenly">
        <div class="">
          <img src="../../assets/image/logo_bg.png" class="d-flex" style="width: 3vh; height: 3vh" />
          <router-link :to="{name:'DevDb'}" @click="selectComponent('Dev')" class="btn  mx-2">
            <img src="../../assets/image/Dashboard.svg" class="mx-1 icons " alt="dashboard" />
            <span class="text">DashBoard</span>
          </router-link>
          <router-link :to="{ name: 'Dc' }" @click="selectComponent('Dc')" class="btn mx-2">
            <img src="../../assets/image/chat.svg" class="icons mx-1" alt="Chat" />
            <span class="text">Chats</span> </router-link><br />
          <router-link :to="{ name: 'Dt' }" @click="selectComponent('Dt')" class="btn mx-2">
            <img src="../../assets/image/tsak.svg" class="task mx-1" alt="Tasks" style="width:3vh; height:3vh;" />
            <span class="text">Tasks</span> </router-link><br />
          <router-link :to="{ name: 'Dp' }" @click="selectComponent('Dp')" class="btn mx-2">
            <img src="../../assets/image/projects.svg" class="mx-1" alt="projects" />
            <span class="text">Projects</span> </router-link><br />
  
          <router-link :to="{ name: 'Da' }" @click="selectComponent('Da')" class="btn mx-2">
            <img src="../../assets/image/account.svg" class="mx-1" alt="account" />
            <span class="text">Account</span>
          </router-link>

          <div type="file" accept="image/*" class="hidden" ref="file" @click=(click) >
            <img src="src" atl="profile" class="" style="width:5vh; height:5vh;" />
            <!-- <button @click='browse()'>browse</button> -->
          </div>

          <!--  src="../../assests/image/default_profile.svg" -->
          <!-- <div v-if="preview"> -->
              <!-- <img :src="preview" class="img-fluid rounded-circle" style="height:4vh; height:5vh" /> -->
             <!-- </div> -->
        </div>


      </div>
    </nav>
    <div class="row">
      <router-view :is="componentName"></router-view>

    </div>
  </div>
  <br />

  <!-- </aside> -->
</template>

<script>
export default {
  name: "DevSidebar",
  props:{
    value:null,
    // defaultsrc:String
  },
  data(){
    return{
      componentName:'',
          src:'../../assets/image/default_profile.svg',
        defaultsrc:String,
        fill:null
      //   newProfile:null,
      //   preview: null,
      // image: null,
      // preview_list: [],
      // image_list: []
      
    }
  },
  // component options
  methods: {
    selectComponent(componentName) {
      this.componentName = componentName;
    },
    click(e){
      this.$refs.file.change();
      this.file=e.target.files[0];
      this.$emit('image',this.file);
      let render = new FileReader();
      render.readAsDataURL(this.file);
      render.load=(e)=>{
        this.src =e.taget.result;
      }
    }
  }
  }
</script>

<style lang="scss" scoped>
  .navbar {
  align-items: center;
}
nav {
  background-color: var(--primary);
  text-decoration-color: var(--light);

}
.task{
  fill: white;
      
  }
.btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  width:20vh;
  align-content: center;

  .icons {
    font-size: 3rem;
    transition: 0.2s ease-in-out;
    width:3rem;
    height: 3rem;
  }

  .text {
    color: var(--light);
    transition: 0.2s ease-in-out;
    font-size:smaller;
  }
  
  &:hover {
    background-color: rgba(250, 250, 250, 0.69);
.router-link{
    color: var(--primary);
}
    // transition-property: ;
    .icons,
    .text {
    color: var(--primary);
    }
  }
  
  &.router-link-active-link {
    background-color:rgba(250, 250, 250, 0.79) ;
    border-right: var(--light);

    .icons
     {
      color: var(--primary);
    }
  }
}
</style>