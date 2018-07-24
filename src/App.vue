<template>
  <div id="app">
    <Navbar/>
    <About id="about" />
    <Skills id="skills" />
  </div>
</template>

<script>
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

.section-title {
  font-size: 3.5rem;
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 0.5rem;
  color: rgb(33, 37, 41);
}

.margin-none {
  margin: 0 !important;
}
</style>
