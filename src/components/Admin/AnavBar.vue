<template>
  <nav class="navbar navbar-expand-md" >
  <div class="container-fluid">
            <router-link :to="{ name: 'Adb' }" class="navbar-brand m-2 d-inline-block ">
          <img src="../../assets/image/logo_bg.png" style="width: 7vh; height: 7vh" alt="logo"/>
        </router-link>
        <button class="navbar-toggler me-auto d-md-none" title="toggler" type="button" aria-controls="mainnavbar" aria-expanded="false"
        data-bs-toggle="collapse" data-bs-target="#mainnavbar">
        <span class="navbar-toggler-icon"></span>
      </button>
      
      <div class="collapse navbar-collapse d-inline-block" id="mainnavbar">

        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'Adb' }" class="btn mx-2">
              <img src="../../assets/image/Dashboard.svg" class="mx-md-1 icons d-inline-block" alt="dashboard" />
              <span class="text text-capitalized d-inline-block">DashBoard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Af' }" class="btn mx-2">
              <img src="../../assets/image/feed_icon.svg" class="icons mx-1" alt="Feed" />
              <span class="text text-capitalized">Feed</span>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Ac' }" class="btn mx-2">
              <img src="../../assets/image/chat.svg" class="icons mx-1" alt="Chat" />
              <span class="text text-capitalized">Chat</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Apro' }" class="btn mx-2">
              <img src="../../assets/image/projects.svg" class="mx-1" alt="projects" />
              <span class="text text-capitalized">Projects</span>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link :to="{ name: 'ADev' }" class="btn mx-2">
              <img src="../../assets/image/Dev_icon.svg" class="Developer mx-1 d-inline-block" alt="Developer" style="width: 3vh; height: 3vh" />
              <span class="text text-capitalized d-inline-block">Developer</span>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link :to="{ name: 'Au' }" class="btn mx-2">
              <img src="../../assets/image/user_icon.svg" class="mx-1" alt="user" />
              <span class="text text-capitalized">User</span>
            </router-link>
          </li>
          
          <li class="nav-item">
            <router-link :to="{ name: 'As' }" class="btn mx-2">
              <img src="../../assets/image/setting_icon.svg" class="mx-1" alt="Settings" />
              <span class="text text-capitalized">Settings</span>
            </router-link>
          </li>
          
          <li class="nav-item">
            <div type="file" accept="image/*" class="d-" ref="file" @click="click">
              <img src="src" atl="profile" class="" style="width: 5vh; height: 5vh" />
              
            </div>
          </li>

          <!--  src="../../assests/image/default_profile.svg" -->
          <!-- <div v-if="preview"> -->
            <!-- <img :src="preview" class="img-fluid rounded-circle" style="height:4vh; height:5vh" /> -->
          </ul>
        </div>
      </div>
    
  
  </nav>
  <div class="row">
    <router-view>

    </router-view>
  </div>
</template>
  
<script>
export default {
  name: "adminNb",
  props: {
    value: null,
    // defaultsrc:String
  },
  data() {
    return {
      componentName: "",
      src: "../../assets/image/default_profile.svg",
      defaultsrc: String,
      fill: null,
      //   newProfile:null,
      //   preview: null,
      // image: null,
      // preview_list: [],
      // image_list: []
    };
  },
  // component options
  methods: {
    selectComponent(componentName) {
      this.componentName = componentName;
    },
    click(e) {
      this.$refs.file.change();
      this.file = e.target.files[0];
      this.$emit("image", this.file);
      let render = new FileReader();
      render.readAsDataURL(this.file);
      render.load = (e) => {
        this.src = e.taget.result;
      };
    },
  },
};
</script>
  
<style lang="scss" >

.button{
  text-transform: none;
  transition-duration: 3s;
  @media(max-width : 576px) {
    visibility:true !important ;
  }
}

nav {
  background-color: var(--primary);
  text-decoration-color: var(--light);
  position: sticky;
}

.task svg {
  fill: white;
}

.btn {
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  padding: 0.5rem 1rem;
  width: 20vh;
  align-content: center;

  .icons .Developer {
    font-size: 2rem;
    transition: 0.2s ease-in-out;
    
  }

  .text {
    color: var(--light);
    transition: 0.2s ease-in-out;
    font-size: smaller;
  }

  &:hover {
    .btn{
      // text-decoration: none;
      background-color: rgba(250, 250, 250, 0.69);
    }


    // transition-property: ;
    .icons,
    .text {
     text-decoration: none;
    }
  }

  &.router-link-active-link {
    .nav-item{

      background-color: rgba(250, 250, 250, 0.79);
      border-right: var(--light);
    }
    
        .icons {
          fill: var(--primary);
        }
  }
}
</style>