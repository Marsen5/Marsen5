<template>
  <div>
    <div class="content">
      <div>
        <h1>{{ project.name }}</h1>
        <h3>{{ project.workFunction }} {{ project.year }}</h3>
        <p>{{ project.description }}</p>
      </div>
      <div>
        <div v-for="img of project.photo">
          <img :src="`../../public/img/${img}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeProjects } from "@/stores/storeProjects";
import type { Project } from "@/models/project";
import { useRoute } from "vue-router";

const route = useRoute();

const projects: Project[] = storeProjects();

const project = projects[Number(route.params.index)];
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50rem;
  gap: 65px;
}

img {
  max-width: 50rem;
}
</style>
