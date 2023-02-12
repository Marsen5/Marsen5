<template>
  <div class="content" :class="{ show: isVisible }">
    <div>
      <h1>MAR SENÉN</h1>
      <p>
        Graduada en Diseño Gráfico y posteriormente en Técnico Superior en
        Desarrollo de Aplicaciones Web.Mi formación y experiencia me permiten
        abarcar todo el proceso necesario para desarrollar una página web, tanto
        el proceso de diseño y marca, como el proceso del desarrollo tecnológico
        para hacer que la web funcione de una manera eficiente y efectiva.
      </p>
    </div>

    <Skills />

    <Projects />
  </div>
</template>

<script lang="ts" setup>
import Skills from "@/components/Skills.vue";
import Projects from "@/components/Projects.vue";
import { storeProjects } from "@/stores/storeProjects";
import type { Project } from "@/models/project";
import { ref } from "vue";

const projects: Project[] = storeProjects();

const isVisible = ref(false);
setTimeout(() => {
  isVisible.value = true;
}, 1000);

</script>

<style lang="scss" scoped>
p {
  max-width: 50rem;
}

.content{
  display: flex;
  flex-direction: column;
  gap: 65px;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;
  &.show {
    opacity: 1;
  }
}
</style>
