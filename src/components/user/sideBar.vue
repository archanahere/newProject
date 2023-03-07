<template>
  <aside :class="`${is_expanded ? 'is-expanded' : 'not'}`">
    <div class="logo">
      <img src="../../assets/image/logo_bg.png" alt="logo" />
    </div>

    <div class="menu-toggle-wrap">
      <img
        class=""
        src="../../assets/image/toggler.png"
        title="Toggle menu"
        @click="ToggleMenu"
      />
    </div>

    <router-link :to="{ name: 'd2' }" @click="setComponent('d2')" class="button"
      ><img src="../../assets/image/Dashboard.svg" class="icon mx-3" alt="DashBoard" />
      <span class="text">DashBoard</span> </router-link
    ><br />
    <router-link
      :to="{ name: 'dp' }" active-class="bg-light "
      @click="setComponent('dp')"
      class="button"
    >
      <img src="../../assets/image/projects.svg" class= "icon mx-3" alt="Project" />
      <span class="text">Project</span> </router-link
    ><br />
    <router-link
      :to="{ name: 'db' }"
      @click="setComponent('db')"
      class="button"
    >
      <img src="../../assets/image/billing_icon.svg" class=" icon mx-3" alt="Billing" />
      <span class="text">Billing</span> </router-link
    ><br />
    <router-link
      :to="{ name: 'da' }"
      @click="setComponent('da')"
      class="button"
    >
      <img src="../../assets/image/account.svg" class="icon  mx-3" alt="Account" />
      <span class="text">Account</span> </router-link
    ><br />

    <router-link :to="{ name: 'ds' }" class="button">
      <img src="../../assets/image/setting_icon.svg" class="icon mx-3" alt="Settings" />
      <span class="text">Settings</span>
    </router-link>
  </aside>
</template>

<script setup>
import { ref } from "vue";

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value;
  localStorage.setItem("is_expanded", is_expanded.value);
};
</script>

<style lang="scss">
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  width: calc(2rem + 20px);
  overflow: hidden;
  height: 100vh;
  padding: 1rem;
  position: sticky;
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
  .text{
    font-size: medium;
  }
  
  .button {
    opacity: 2;
    transition: opacity 0.3s ease-in-out;
   

  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-middle;
    position: relative;
    top: 2rem;
    transition: 0.2s ease-in-out;
     .text{
      visibility: hidden !important;
     }
    } 
   
      }
      &.router-link-exact-active {
        .button{
          background-color: var(--light);
          border-right: 5px solid var(--primary);
          
        }
        .icons {
          fill: var(--primary-alt);
          width: 4vh;
          height:4vh
        }
        .text {
          color: var(--primary);
        }
      }
      @media (max-width: 1024px) {
    position: absolute;
    z-index: 99;
  }
  &.is-expanded {
    width: var(--sidebar-width);
    .menu-toggle-wrap {
      top: -2rem;
        transform: rotate(-180deg);
    }
    .icons {
      margin-top: 2px;
      font-size: 2rem;
      fill: var(--light);
      transition: 0.2s ease-out;
      margin-right: 3rem;
      size: 5vh;
    }
    .footer {
      opacity: 0;
    }
  }
  &.not {
.icons{
  // margin-right: none;
  align-self:center ;
  // transition: calc(2px+top );
  margin-top: 2px;
}
.text {
    
    visibility: hidden !important;
    
  }
} 
}

</style>