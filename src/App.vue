<template>
  <div id="app">
    <Navbar />
    <div v-scroll-spy="{time: 200, steps: 30}">
      <About/>
      <Skills/>
    </div>
  </div>
</template>

<script>
import About from "./components/About.vue";
import Navbar from "./components/Navbar.vue";
import Skills from "./components/Skills.vue";

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
@import "~bulma/sass/utilities/initial-variables";
@import "~bulma/sass/utilities/functions";

$navbar-height: 5rem;
$navbar-item-active-background-color: darken($white, 3%);

@import "~bulma";
@import "~bulma-tooltip/dist/bulma-tooltip.sass";
</style>
