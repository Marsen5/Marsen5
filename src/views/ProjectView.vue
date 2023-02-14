<template>
  <div>
    <div class="content">
      <div>
        <h1>{{ project.name }}</h1>
        <h3>{{ project.workFunction }} {{ project.year }}</h3>
        <p>{{ project.description }}</p>
      </div>
      <div>
        <div v-if="project.video" v-html="project.video" class="video">
        </div>
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
}

.video {
  width: 100rem;
  max-width: 50rem;
  max-height: 50rem;
}
img {
  max-width: 50rem;
}
</style>
