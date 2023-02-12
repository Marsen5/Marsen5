<template>
  <div>
    <h2>Skills</h2>
    <label v-for="skill of skillsDesign" class="skills">{{ skill }}</label>
    <br />
    <label v-for="skill of skillsDeveloper" class="skills">{{ skill }}</label>
  </div>
</template>

<script lang="ts" setup>
const skillsDesign: string[] = [
  "Branding",
  "Diseño UI/UX",
  "Diseño web con Figma",
  "Edición de video con After Effects y Premier",
  "Dominio avanzado de Illustrator, Indesign y Photoshop",
];

const skillsDeveloper: string[] = [
  "Programación Frontend - HTML SCSS Javascript",
  "Programación Backend - Node PHP",
  "Bases de Datos SQL y Mongodb",
  "Trabajar con Frameworks como Vuejs ",
  "Taildwind CSS, Boostrap",
  "Strapi",
  "Typscript",
];
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";
.skills {
  font-family: variables.$font-family-skills;
  display: flex;
}
</style>
