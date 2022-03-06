<template>
  <div>
    <header class="container-fluid aboutbg flexed">
      <div class="row">
        <div class="col-12 text-center text-light">
          <h2 class="fs-1">Sobre Mi</h2>
        </div>
      </div>
    </header>
    <div class="container my-4">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <p>
            Este es un blog dedicado al mundo automotor, en el cual te mostraré
            las últimas novedades de automóviles, los lanzamientos más recientes
            y te enseñaremos algunos tips para cuidar tu vehículo.
          </p>
          <p>
            Este es un medio independiente. Si te gusta nuestro contenido,
            ayúdanos en Patreon o haciendo una donación a través de PayPal. Te
            lo agradeceré mucho.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.aboutbg {
  background-image: url(../assets/img/about-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 15rem;
  width: 100%;
}
.flexed {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>