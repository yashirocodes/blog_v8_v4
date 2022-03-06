<template>
  <NavBar></NavBar>
  <transition name="slide-fade">
    <router-view/>
  </transition>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/FooterPage.vue'
export default {
  el:'App',
  data(){
    return{

    }
  },
  components:{
    NavBar,
    Footer
  }
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>