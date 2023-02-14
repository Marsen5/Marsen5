<template>
  <div>
    <div class="content">
      <div class="content__info">
        <h1>{{ project.name }}</h1>
        <h3>{{ project.workFunction }} {{ project.year }}</h3>
        <p>{{ project.description }}</p>
      </div>
      <div class="content__img">
        <div v-if="project.video" v-html="project.video" class="video"></div>
        <div v-for="img of project.photo">
          <img :src="`/img/${img}`" />
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

  &__img {
    width: 100%
  }
}

.video {
  max-width: 100%;
  max-height: 50rem;
}
img {
  max-width: 100%;
}
</style>
