<template>
  <div class="sideBar continer-fluid ">
    <nav class="navbar navbar-expand-md d-block" id="navbar">
      <div class="justify-content-evenly ">
        <button class="navbar-toggler me-auto d-xs-block d-md-none" title="toggler" type="button" aria-controls="mainnavbar" aria-expanded="false"
        data-bs-toggle="collapse" data-bs-target="#mainnavbar">
        <span class="navbar-toggler-icon d-sm-none"></span>
      </button>
      <div class="collapse align-items-evenly d-md-block navbar-collapse" id="mainnavbar">

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
        <img src="../../assets/image/logo_bg.png" class="d-flex" style="width: 5vh; height: 5vh" alt="logo" /></li>
        

        <li class="nav-item">
        <router-link :to="{name:'DevDb'}" class="btn  mx-2">
            <img src="../../assets/image/Dashboard.svg" class="mx-1 icons " alt="dashboard" />
            <span class="text">DashBoard</span>
          </router-link></li>

          <li class="nav-item">
          <router-link :to="{ name: 'Dc' }" @click="selectComponent('Dc')" class="btn mx-2">
            <img src="../../assets/image/chat.svg" class="icons mx-1" alt="Chat" />
            <span class="text">Chats</span> </router-link><br /></li>

            <li class="nav-item">
          <router-link :to="{ name: 'Dt' }" @click="selectComponent('Dt')" class="btn mx-2">
            <img src="../../assets/image/tsak.svg" class="task mx-1" alt="Tasks" style="width:3vh; height:3vh;" />
            <span class="text">Tasks</span> </router-link><br /></li>

            <li class="nav-item">
          <router-link :to="{ name: 'Dp' }" @click="selectComponent('Dp')" class="btn mx-2">
            <img src="../../assets/image/projects.svg" class="icons mx-1" alt="projects" />
            <span class="text">Projects</span> </router-link><br /></li>
  
            <li class="nav-item">
          <router-link :to="{ name: 'Da' }" @click="selectComponent('Da')" class="btn mx-2">
            <img src="../../assets/image/account.svg" class="icons mx-1" alt="account" />
            <span class="text">Account</span>
          </router-link></li>
          
          <li class="nav-item">
          <div type="file" accept="image/*" class="hidden" ref="file" @click=(click) >
            <img src="src" atl="profile" class="" style="width:5vh; height:5vh;" />
            </div>
          </li>
            <!-- <button @click='browse()'>browse</button> -->
          
          </ul>
          </div>
        </div>
          
        <!--  src="../../assests/image/default_profile.svg" -->
        <!-- <div v-if="preview"> -->
          <!-- <img :src="preview" class="img-fluid rounded-circle" style="height:4vh; height:5vh" /> -->
        </nav>
             <!-- </div> -->
        


      </div>
    <div class="row">
      <router-view ></router-view>

    </div>
  
  <br />

  <!-- </aside> -->
</template>

<script>
import _ from 'lodash';
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
    
    getValue(object, string, defaultValue = '') {
      return _.get(object, string, defaultValue)
    },
    // selectComponent(componentName) {
    //   this.componentName = componentName;
    // },
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
  align-items:normal;
  width: 100%;
}
nav {
  background-color: var(--primary);
  text-decoration-color: var(--light);

}
.task svg{
  fill: white;
      size: 20px;
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
    width:12px;
    height: 12px;
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