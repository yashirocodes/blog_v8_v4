<template>
  <div>
    <header class="bg-home container-fluid flexed">
      <div class="row">
        <div class="col-12 text-center text-light">
          <h1><strong>V8</strong></h1>
          <p class="fs-4">Noticias u reseñas de automóviles</p>
        </div>
      </div>
    </header>
    <div class="container flexed text-center my-5">
      <router-link class="linkto" to="/blog/1">
        <img
          src="https://www.ventos.site/wp-content/uploads/2021/10/2022-chevrolet-blazer-rs-4wd-suv-angular-front.png"
          alt=""
        />
        <h2 class="fw-bold">Chevrolet presenta la totalmente nueva Blazer</h2>
        <p class="fs-5 font-monospace"> Llega como la primera SUV deportiva de la marca >> </p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.linkto {
  text-decoration: none;
  color: #252422;
}
.linkto:hover{
    color:red;
}
.bg-home {
  background-image: url(../assets/img/home-bg.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 15rem;
  width: 100%;
}
.flexed {
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  width: 250px;
}
</style>