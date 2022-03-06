<template>
  <div>
    <header class="container-fluid contactbg flexed">
      <div class="row">
        <div class="col-12 text-center text-light ts">
          <h2 class="fs-1">Contactame</h2>
        </div>
      </div>
    </header>
    <h2 class="text-center my-3">
      ¿Tienes dudas o sugerencias? Déjame un mensaje y me contactaré contigo.
    </h2>
    <div class="container flexed my-5">
      <form class="fomrwidth">
        <label for="exampleFormControlInput1" class="form-label">Nombre</label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Juan Perez ..."
        />
        <label for="exampleFormControlInput1" class="form-label"
          >Email address</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
        <label for="exampleFormControlInput1" class="form-label"
          >Numero de Telefono</label
        >
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="+569 5555 5555"
        />
        <label for="exampleFormControlTextarea1" class="form-label"
          >Mensaje</label
        >
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
        <button class="btn btn-primary my-2">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactMe",
};
</script>

<style scoped>
.fomrwidth {
  width: 50%;
}
.contactbg {
  background-image: url(../assets/img/contact-bg.jpg);
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
.ts {
  text-shadow: 1px 2px 9px rgba(0, 0, 0, 0.74);
}
</style>