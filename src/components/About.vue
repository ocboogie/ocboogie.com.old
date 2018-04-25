<template>
  <Section class="about">
    <h1 class="display-2">Eamon Mikulec
      <div class="subtitle">Frontend web developer</div>
    </h1>
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
  .subtitle {
    color: #4a4a4a;
    font-size: 2rem;
    font-weight: 400;
    line-height: 1.25;
  }
}
</style>
