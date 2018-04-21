<template>
  <Section class="about">
    <h1 class="title has-text-weight-light is-size-1">Eamon Mikulec</h1>
    <h2 class="subtitle">
      Frontend web developer
    </h2>
  </Section>
</template>

<script>
import Section from "./Section.vue";

export default {
  components: {
    Section
  }
};
</script>

<style lang="scss">
.about {
  background-color: #faaca8;
  background-image: linear-gradient(45deg, #faaca8 0%, #ddd6f3 100%);
}
</style>
