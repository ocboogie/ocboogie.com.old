<template>
  <div id="app">
    <Navbar/>
    <div class="main container-fluid h-100">
      <About id="about" />
      <Skills id="skills" />
    </div>
  </div>
</template>

<script>
import "bootstrap";
import SmoothScroll from "smooth-scroll";

import About from "./components/About.vue";
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";

SmoothScroll('a[href*="#"][data-scroll="true"]');

export default {
  name: "app",
  components: {
    About,
    Navbar,
    Skills
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}
</style>
>
