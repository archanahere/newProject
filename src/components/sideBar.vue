<template>
  <div class="row">
    <div class="col-3">
      <div class="sidebar">

        <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
          <div class="logo">
            <img src="../assets/image/logo.png" class="img-fluid continer-fluid" style="width: 10vh; height: 10vh" />
          </div>
          <div class="menu-toggle-wrap">
			<button class="menu-toggle" src="../assets/image/toggler.png" @click="ToggleMenu">
				<span class="material-icons"> </span>
			</button>
		</div>
      <router-link :to="{ name: 'd2' }" button @click="setComponent('d2')"
      class="btn btn-lg align-text-left text-light mx-2"><img src="../assets/image/sideBar_icon.png" class="mx-3"
              alt="" />DashBoard </router-link><br />
          <router-link :to="{ name: 'dp' }" @click="setComponent('dp')" class="btn btn-lg text-light m-3">
            <img src="../assets/image/proejct_icon.png" class="mx-2" alt="Project" />Project</router-link><br />
          <router-link :to="{ name: 'db' }" @click="setComponent('db')" class="btn btn-lg text-light m-3">
            <img src="../assets/image/billing_icon.png" class="mx-2" alt="Billing" />
            Billing</router-link><br />
          <router-link :to="{ name: 'da' }" @click="setComponent('da')" class="btn btn-lg text-light m-3">
            <img src="../assets/image/account_icon.png" class="mx-2" alt="Account" />
            Account</router-link><br />
          
          <router-link  :to="{name:'ds'}"
          class="btn btn-lg text-light m-3">
          <img src="../assets/image/Setting_icon.png" class="mx-2" alt="Settings" />
          Settings</router-link>
        </aside>
      </div>
    </div>
    <!-- Canvas of the page -->
    
    
    <div class="col-9">
      <router-view :is="componentName"></router-view>
    </div>
  </div>
  
</template>
<script>
// import {collapsed ,sideBar_width,toggleSlidebar} from '@/components/status.js'
// import dashBoard from "@/components/dashBoard.vue";

import { ref } from 'vue'

import router from './router';

const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
export default {
  name: "#sideBar",
  
  data() {
    return{
      componentName:'',
      is_expanded:''
    }
    
    
  },
  methods:{
    setComponent(name){
      router.push({name})
    },
     ToggleMenu () {
      is_expanded.value = !is_expanded.value
      localStorage.setItem("is_expanded", is_expanded.value)
    }

  }


  
  }

</script>
<style lang="scss">
:root {
  --sidebar-bg-color: rgb(49, 49, 170);
  --sidebar-item-active: rgb(220, 213, 213);
  --text-decoration-color: aqua;
}

.active-link {
  background: #ffffff;
  text-decoration-color: var(--text-decoration-color);
}

aside {
  display: flex;
  flex-direction: column;
  background-color: var(--sidebar-bg-color);
  // color: var();
  width: 230px;
  overflow: hidden;
  min-height: 100vh;
  padding: 1rem;
  transition: 0.2s ease-in-out;

  .flex {
    flex: 1 1 0%;
  }

  .logo {
    margin-bottom: 1rem;

    img {
      width: 2rem;
    }
  }

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;

    .menu-toggle {
      transition: 0.2s ease-in-out;

      .material-icons {
        font-size: 2rem;
       
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(5rem);
        }
      }
    }
  }

  
  .button .text {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }



  .menu {
    margin: 0 -1rem;

    .button {
      display: flex;
      align-items: center;
  
      transition: 0.2s ease-in-out;
      padding: 0.5rem 1rem;

      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      .text {
        color: var(--light);
        transition: 0.2s ease-in-out;
      }

      &:hover {
        background-color: var(--dark-alt);

        .material-icons,
        .text {
          color: var(--primary);
        }
      }

      &.router-link-exact-active {
        background-color: var(--dark-alt);
        border-right: 5px solid var(--primary);

        .material-icons
        {
          color: var(--primary);
        }
      }
    }
  }

  .footer {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;

    p {
      font-size: 0.875rem;
      color: var(--grey);
    }
  }

  &.is-expanded {
    width: var(--sidebar-width);

    .menu-toggle-wrap {
      top: -3rem;

      .menu-toggle {
        transform: rotate(-180deg);
      }
    }


    .button {
      .material-icons {
        margin-right: 1rem;
      }
    }

    .footer {
      opacity: 0;
    }
  }

  @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
}
</style>

