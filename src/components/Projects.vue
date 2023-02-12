<template>
  <div>
    <h2>Proyectos</h2>
    <div
      @mouseleave="
        mouseMoved(mouseIn.index, { in: false, action: '', img: '' })
      "
    >
      <div id="cursor">
        <img
          v-if="mouseIn.opts.in && mouseIn.opts.img !== ''"
          class="img"
          :src="`../../public/img/${mouseIn.opts.img}`"
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
        @mousemove="($event) => moving($event)"
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
import { storeProjects } from "@/stores/storeProjects";
import type { Project } from "@/models/project";
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const oldTarget = ref({} as any);

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
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    });
  }
}

function moving(event: any) {
  if (!!oldTarget.value.target === false) {
    event.target.style.color = "orange";

    oldTarget.value = event;
    return;
  }

  if (
    !!oldTarget.value.target === true &&
    oldTarget.value.target !== event.target
  ) {
    oldTarget.value.target.style.color = "inherit";

    event.target.style.color = "orange";

    oldTarget.value = event;
    return
  }
}
</script>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";

.project {
  border-bottom: 1px blue solid;
  max-width: 50em;
  display: flex;
  padding: 0.5em;
  align-items: center;
  font-family: variables.$font-family-projects;

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
  height: 30vh;
  object-fit: contain;
}
</style>
