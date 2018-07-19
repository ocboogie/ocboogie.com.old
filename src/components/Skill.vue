<template>
  <a v-if="website" :href="website" :class="{small}" class="skill" data-placement="top" :data-tooltipid="name" :title="name">
    <img :style="imgStyle" :src="logo" />
  </a>
  <span v-else :class="{small}" class="skill" data-placement="top" :data-tooltipid="name" :title="name">
    <img :style="imgStyle" :src="logo" />
  </span>
</template>
<script>
import $ from "jquery";

export default {
  mounted() {
    $(`.skill[data-tooltipid="${this.name}"]`).tooltip();
  },
  props: {
    name: String,
    website: String,
    logo: {
      type: String,
      required: true
    },
    imgStyle: String,
    small: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss" scoped>
.skill {
  overflow: hidden;
  height: 100px;
  width: 100px;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 5px;
  border-radius: 50%;
  overflow: hidden;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-content: center;
  cursor: pointer;
  &.small {
    height: 75px;
    width: 75px;
  }
  img {
    max-width: 100%;
  }
  @include media-breakpoint-up(sm) {
    margin: 10px;
  }
}
</style>
