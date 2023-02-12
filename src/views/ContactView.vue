<template>
  <div class="contenido">
    <div>
      <h1>Hola!</h1>
      <p>Puedes contactar conmigo a través de estos canales:</p>
      <div>
        <a class="links" href="mailto: marsenengilabert@gmail.com">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.125 4.3125H2.875C2.49375 4.3125 2.12812 4.46395 1.85853 4.73353C1.58895 5.00312 1.4375 5.36875 1.4375 5.75V17.25C1.4375 17.6312 1.58895 17.9969 1.85853 18.2665C2.12812 18.536 2.49375 18.6875 2.875 18.6875H20.125C20.5062 18.6875 20.8719 18.536 21.1415 18.2665C21.411 17.9969 21.5625 17.6312 21.5625 17.25V5.75C21.5625 5.36875 21.411 5.00312 21.1415 4.73353C20.8719 4.46395 20.5062 4.3125 20.125 4.3125ZM18.5437 5.75L11.5 10.6231L4.45625 5.75H18.5437ZM2.875 17.25V6.40406L11.0903 12.0894C11.2106 12.1728 11.3536 12.2176 11.5 12.2176C11.6464 12.2176 11.7894 12.1728 11.9097 12.0894L20.125 6.40406V17.25H2.875Z"
              fill="#000AFF"
            />
          </svg>

          marsenengilabert@gmail.com
        </a>
        <a class="links" href="https://www.linkedin.com/in/marsenen/" target="_blank">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
              fill="#000AFF"
            />
          </svg>
          www.linkedin.com/in/marsenen
        </a>
      </div>
    </div>
    <div>
      <img src="../../public/img/foto.jpg" alt="Foto_Mar" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "@/assets/styles/settings/variables";
.contenido {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10rem;
}

img {
  max-width: 225px;
  max-height: 225px;
  border-radius: 100%;
  box-sizing: border-box;
  box-shadow: 0px 0px 10px 5px rgb(194, 194, 194);
}
.links {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style>
