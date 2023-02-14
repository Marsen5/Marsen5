<template>
  <div class="content">
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
import Projects from "@/components/Projects.vue";
import Skills from "@/components/Skills.vue";
</script>

<style lang="scss" scoped>
p {
  max-width: 50rem;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 65px;
}
</style>
