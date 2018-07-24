<template>
  <div class="hero is-fullheight skill-section">
    <div class="hero-body" data-aos="fade-in" data-aos-anchor=".skill-section" data-aos-offset="500">
      <div class="has-text-centered skill-section-inner">
        <div class="section-title">My skills</div>
        <div class="skills-container">
          <h1 class="title is-2">Languages</h1>
          <div class="skills">
            <skill v-for="(skill, index) in skills" @click.native="() => selectSkill(index)" :key="skill.name" :name="skill.name" :logo="skill.logo" :img-style="skill.style" />
          </div>
          <transition name="info-scale">
            <skill-info v-if="selectedSkill" class="skill-info" :name="selectedSkill.name" :description="selectedSkill.description" :subskills="selectedSkill.subskills" @close="closeInfo()" />
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Skill from "./Skill.vue";
import SkillInfo from "./SkillInfo.vue";
import skills from "../skills";

export default {
  methods: {
    selectSkill(id) {
      this.selectedSkill = this.skills[id];
    },
    closeInfo() {
      this.selectedSkill = null;
    }
  },
  data() {
    return {
      selectedSkill: null,
      skills
    };
  },
  components: {
    Skill,
    SkillInfo
  }
};
</script>

<style scoped lang="scss">
.skill-section {
  background-color: #faaca8;
  background-image: linear-gradient(135deg, #faaca8 0%, #ddd6f3 100%);
  .skill-section-inner {
    width: 100%;
    .skills-container {
      position: relative;
      width: 100%;
      .title {
        margin-bottom: 0.5rem;
      }
      .skills {
        max-width: 500px;
        margin: auto;
        justify-content: center;
        flex-wrap: wrap;
        display: flex;
        // @include media-breakpoint-up(sm) {
        // align-content: center;
        // height: 250px;
        // width: 500px;
        // }
      }
      .skill-info {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        margin: auto;
        width: 90%;
        max-width: 600px;
        min-height: 200px;
        &.info-scale-enter-active,
        &.info-scale-leave-active {
          transition: all 0.25s cubic-bezier(0, 0, 0.25, 1);
          opacity: 1;
        }
        &.info-scale-enter,
        &.info-scale-leave-to {
          opacity: 0;
          transform: scale(0.75, 0.8);
        }
      }
    }
  }
}
</style>
