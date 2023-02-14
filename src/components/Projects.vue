<template>
  <div>
    <h2>Proyectos</h2>
    <div
      class="projects-list"
      @mouseleave="
        mouseMoved(mouseIn.index, { in: false, action: '', img: '' })
      "
    >
      <div id="cursor">
        <img
          v-if="mouseIn.opts.in && mouseIn.opts.img !== ''"
          class="img"
          :src="`/img/${mouseIn.opts.img}`"
        />
      </div>
      <div
        v-for="(project, index) of projects"
        class="project"
        @mouseenter="
          mouseMoved(index, {
            in: true,
            action: 'enter',
            img: project.photo[0],
          })
        "
        @click="goToProject(index)"
      >
        <div class="project__column">
          <label>{{ project.workFunction }}</label>
          <label>{{ project.name }}</label>
        </div>
        <div class="project__type">{{ project.type }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from "@/models/project";
import { storeProjects } from "@/stores/storeProjects";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const goToProject = (index: number) => {
  router.push({ name: "project", params: { index } });
};

const projects: Project[] = storeProjects();

const mouseIn = ref({ index: -1, opts: { in: false, img: "", action: "" } } as {
  index: number;
  opts: { in: boolean; img: string; action: "enter" | "" };
});

//Funcion para mostrar imagenes al pasar el ratón por encima
function mouseMoved(
  index: number,
  opts: { in: boolean; img: string; action: "enter" | "" }
) {
  mouseIn.value = { index, opts };

  if (!mouseIn.value.opts.in) return;

  const cursor = document.querySelector("#cursor") as HTMLImageElement;

  if (mouseIn.value.opts.in) {
    document.addEventListener("mousemove", (e) => {
      const { scrollY } = window;
      cursor.style.left = e.clientX + 20 + "px";
      cursor.style.top = e.clientY - 100 + scrollY + "px";
    });
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";

.projects-list {
  margin-bottom: 20rem;
}

.project {
  cursor: pointer;
  border-bottom: 1px blue solid;
  max-width: 50em;
  display: flex;
  padding: 0.5em;
  align-items: center;
  font-family: variables.$font-family-projects;

  * {
    cursor: pointer;
  }

  &__column {
    display: flex;
    flex-direction: column;
  }

  &__type {
    margin-left: auto;
  }
}

#cursor {
  position: absolute;
  z-index: 9999;
  max-width: 25%;
  max-height: 25%;
}

.img {
  width: 30vw;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgb(194, 194, 194);

}
</style>
