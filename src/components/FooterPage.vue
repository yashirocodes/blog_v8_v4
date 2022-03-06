<template>
  <div class="footer">
      <div class="container">
          <section class="row">
              <article class="col-12 display">
                  <a href="https://facebook.com" target="_black">
                      <fa class="icon-footer fs-1 facebook" :icon="['fab', 'facebook-square']"></fa>
                  </a>
                  <a href="https://twitter.com" target="_black">
                      <fa class="icon-footer fs-1 twitter" :icon="['fab', 'twitter-square']"></fa>
                  </a>
                  <a href="https://github.com" target="_black">
                       <fa class="icon-footer fs-1 github" :icon="['fab', 'github-square']"></fa>
                  </a>
              </article>
              <article class="p-footer display">
                  <p class="text-muted"> Copyright&nbsp;©&nbsp;V8 - 2022 </p>
              </article>
          </section>
      </div>
  </div>
</template>

<script>
export default {
    name:'FooterPage'

}
</script>

<style scoped>
a{
    text-decoration: none;
    color: #252422;
}
.display{
    display: flex;
    justify-content: center;

}
.icon-footer{
    margin:0.5rem 1rem;
}
.facebook:hover{
    color: #3b5998;
}
.twitter:hover{
    color:#00acee;
}
.github:hover{
    color: #4078c0;
}
</style>