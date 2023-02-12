<template>
  <header>

  <div class="header-left">
    <RouterLink to="/"><div class="logo-circle" ></div></RouterLink>
  </div>
  <div class="header-right">
    <ButtonContact/>
  </div>

  </header>

  <body>
    <RouterView />
  </body>
</template>

<script setup lang="ts">
import HomeView from "./views/HomeView.vue";
import ButtonContact from "@/components/buttons/ButtonContact.vue";
import { RouterLink } from "vue-router";
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
  }

  .logo-circle {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background-color: variables.$primary_color;
  }

  
body {
  display: flex;
  justify-content: center;
  text-decoration: none;
}
</style>

