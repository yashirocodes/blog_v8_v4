<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link class="navbar-brand" to="/">V8</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Inicio</router-link>
        <router-link class="nav-link" to="/about">Sobre Mi</router-link>
        <router-link class="nav-link" to="/contact">Contacto</router-link>
        <router-link class="nav-link" to="/blog/1">Blog</router-link>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name:'NavBar'
}
</script>

<style>

</style>