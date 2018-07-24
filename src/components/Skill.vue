<template>
  <a v-if="website" :href="website" :class="{small}" class="skill tooltip" :data-tooltip="name">
    <img :style="imgStyle" :src="logo" />
  </a>
  <span v-else :class="{small}" class="skill tooltip" :data-tooltip="name">
    <img :style="imgStyle" :src="logo" />
  </span>
</template>
<script>
export default {
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
  height: 100px;
  width: 100px;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 10px;
  border-radius: 50%;
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
}
</style>
