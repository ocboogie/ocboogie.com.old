<template>
  <div class="skill-info">
    <span class="close" @click="$emit('close')">×</span>
    <h3 class="mb-3">{{name}}</h3>
    <div>
      {{description}}
    </div>
    <template v-if="subskills">
      <hr>
      <div class="subskills">
        <skill v-for="skill in subskills" :key="skill.name" :website="skill.website" :name="skill.name" :logo="skill.logo" :img-style="skill.style" small />
      </div>
    </template>
  </div>
</template>
<script>
import Skill from "./Skill.vue";

export default {
  props: {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    canClose: {
      type: Boolean,
      default: false
    },
    subskills: Array
  },
  components: {
    Skill
  }
};
</script>
<style lang="scss" scoped>
.skill-info {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-color: #fafafa;
  padding: 1rem;
  .subskills {
    max-width: 500px;
    margin: auto;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
  }
  .close {
    font-size: 1.5rem;
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    padding-right: 17.5px;
    cursor: pointer;
    float: right;
    font-weight: 700;
    line-height: 1;
    color: #000;
    text-shadow: 0 1px 0 #fff;
    opacity: 0.5;
    &:hover {
      opacity: 0.75;
    }
  }
}
</style>
