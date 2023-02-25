<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">
    <div class="logo">
		<img src="../../assets/image/logo.png"/>
	</div>

    <div class="menu-toggle-wrap">
      <button class="menu-toggle" @click="ToggleMenu">
        <span src="../../assets/image/toggler.png"></span>
      </button>
    </div>

    <router-link :to="{ name: 'd2' }" @click="setComponent('d2')" class=""
      ><img src="../../assets/image/sideBar_icon.png" class="mx-3" alt="" />
      <span class="text">DashBoard</span> </router-link
    ><br />
    <router-link :to="{ name: 'dp' }" @click="setComponent('dp')" class="">
      <img src="../../assets/image/proejct_icon.png" class="mx-3" alt="" />
      <span class="text">Project</span> </router-link
    ><br />
    <router-link :to="{ name: 'db' }" @click="setComponent('db')" class="">
      <img src="../../assets/image/billing_icon.png" class="mx-3" alt="" />
      <span class="text">Billing</span> </router-link
    ><br />
    <router-link :to="{ name: 'da' }" @click="setComponent('da')" class="">
      <img src="../../assets/image/account_icon.png" class="mx-3" alt="" />
      <span class="text">Account</span> </router-link
    ><br />

    <router-link :to="{ name: 'ds' }" class="">
      <img src="../../assets/image/Setting_icon.png" class="mx-3" alt="" />
      <span class="text">Settings</span>
    </router-link>

    <div class="flex"></div>

    <div class="menu">
      <router-link :to="{name:'ds'}" class="button">
        <span class="material-icons">settings</span>
        <span class="text">Settings</span>
      </router-link>
    </div>
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

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: rgb(248, 86, 6);
  color: var(--primary);
  width: calc(2rem + 32px);
  overflow: hidden;
  min-height: 100vh;
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
  .menu-toggle-wrap {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 1rem;
    position: relative;
    top: 0;
    transition: 0.2s ease-in-out;
    .menu-toggle .text {
      transition: 0.2s ease-in-out;
      text-transform: none;
      .material-icons {
        font-size: 2rem;
        color: var(--light);
        transition: 0.2s ease-out;
      }

      &:hover {
        .material-icons {
          color: var(--primary);
          transform: translateX(0.5rem);
        }
      }
    }
  }
  .button {
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  .menu {
    margin: 0 -1rem;
    .button {
      display: flex;
      align-items: center;
      text-decoration: none;
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
        .material-icons,
        .text {
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
    h3,
    .button .text {
      opacity: 1;
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