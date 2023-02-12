<template>
    <RouterLink to="/contacto" class="contact-button">CONTACTO</RouterLink>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";

.contact-button {
    color: inherit;
    padding: 0.5rem 1rem;
    border-radius: 40px;
    border: 1px solid variables.$primary_color;
    cursor: pointer;
    font-family: variables.$font-family-projects;
    text-decoration: none;
  }

  .contact-button:hover{
    color:variables.$text-inverted-color;
    background-color: variables.$primary_color;
    transition: all 0.3s ease-in-out;
  }


/* .btn{
  border: 1px solid variables.$primary_color ;
  border-radius: 40px;
  padding: 10px;
  text-decoration: none;
  font-family: variables.$font-family-projects;
  padding: 12px;
} */
</style>