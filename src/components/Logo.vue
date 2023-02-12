<template>
  <div class="logo-container">
    <div class="logo" @click="showInput = !showInput">
      <!-- Your logo here -->
    </div>
    <input
      v-if="showInput"
      type="color"
      v-model="color"
      @change="updateColor"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showInput: false,
      color: '#333',
    };
  },
  methods: {
    updateColor() {
      document.documentElement.style.setProperty('--logo-color', this.color);
    },
  },
};
</script>

<style>
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  background-color: var(--logo-color);
  cursor: pointer;
}
</style>

<style lang="scss">
:root {
  --logo-color: #333;
}
</style>