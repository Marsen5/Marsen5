<template>
  <header>
    <div class="header-left">
      <RouterLink to="/"><div class="logo-circle"></div></RouterLink>
    </div>
    <div class="header-right">
      <ButtonContact />
    </div>
  </header>

  <body>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in" appear>
        <component :is="Component" :key="Component"></component>
      </Transition>
    </RouterView>
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

.fade-enter-active {
  transition: all 0.7s ease;
}
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from {
  transform: translateX(-80vw);
}

.fade-leave-to {
  transform: translateX(85vw);
}
</style>
