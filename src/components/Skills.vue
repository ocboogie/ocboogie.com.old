<template>
  <Section class="skills">
    <h1 class="display-4">My skills</h1>
    <div id="skillsCarouselControls" class="carousel slide" data-interval="false">
      <ol class="carousel-indicators">
        <li v-for="(skill, _, index) in skills" :key="skill.name" data-target="#skillsCarouselControls" :data-slide-to="index" :class="{active: index === 0}" />
      </ol>
      <div class="carousel-inner" role="listbox">
        <div :class="{active: index === 0}" class="carousel-item" v-for="(skillsList, skillsName, index) in skills" :key="skillsName">
          <h1 class="title">{{skillsName}}</h1>
          <div class="skills-container">
            <a v-for="skill in skillsList" :href="skill.website" :key="skill.name" class="skill" data-toggle="tooltip" data-placement="top" :title="skill.name">
              <img :style="skill.style" :src="skill.logo" />
            </a>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#skillsCarouselControls" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#skillsCarouselControls" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </Section>
</template>
<script>
import $ from "jquery";

import Section from "./Section.vue";

export default {
  mounted() {
    this.tooltips = $('.skills [data-toggle="tooltip"]');
    this.tooltips.tooltip();

    // Update tooltips when sliding
    $("#skillsCarouselControls").on("slide.bs.carousel", () => {
      this.sliding = true;
      this.updateTooltipsWhenSliding();
    });
    $("#skillsCarouselControls").on("slid.bs.carousel", () => {
      this.sliding = false;
    });
  },
  methods: {
    updateTooltipsWhenSliding() {
      if (!this.sliding) {
        return;
      }
      this.tooltips.tooltip("update");
      window.requestAnimationFrame(this.updateTooltipsWhenSliding);
    }
  },
  data() {
    return {
      sliding: false,
      tooltips: null,
      skills: {
        Languages: [
          {
            name: "Rust",
            logo: "https://cdn.svgporn.com/logos/rust.svg",
            website: "http://www.rust-lang.org/"
          },
          {
            name: "Node.js",
            logo: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
            website: "https://nodejs.org/"
          },
          {
            name: "Python",
            logo: "https://cdn.svgporn.com/logos/python.svg",
            website: "https://www.python.org/"
          },
          {
            name: "Unity",
            logo: "https://cdn.svgporn.com/logos/unity.svg",
            website: "https://unity3d.com/",
            style: "margin-right: 13px;"
          }
        ],
        JavaScript: [
          {
            name: "React",
            logo: "https://cdn.svgporn.com/logos/react.svg",
            website: "https://reactjs.org/"
          },
          {
            name: "Webpack",
            logo: "https://cdn.svgporn.com/logos/webpack.svg",
            website: "https://webpack.js.org/"
          },
          {
            name: "Typescript",
            logo: "https://cdn.svgporn.com/logos/typescript-icon.svg",
            website: "https://www.typescriptlang.org/",
            style: "border-radius: 50%"
          },
          {
            name: "Babel",
            logo: "https://cdn.svgporn.com/logos/babel.svg",
            website: "https://babeljs.io/"
          },
          {
            name: "Flow",
            logo: "https://cdn.svgporn.com/logos/flow.svg",
            website: "http://flowtype.org/"
          },
          {
            name: "ReactiveX",
            logo: "https://cdn.svgporn.com/logos/reactivex.svg",
            website: "http://reactivex.io/"
          },
          {
            name: "Vue",
            logo: "https://cdn.svgporn.com/logos/vue.svg",
            website: "https://vuejs.org/",
            style: "margin-top: 10px;"
          },
          {
            name: "Redux",
            logo: "https://cdn.svgporn.com/logos/redux.svg",
            website: "https://redux.js.org/",
            style: "margin-bottom: 5px;"
          }
        ]
      }
    };
  },
  components: {
    Section
  }
};
</script>

<style scoped lang="scss">
.skills {
  background-color: #faaca8;
  background-image: linear-gradient(135deg, #faaca8 0%, #ddd6f3 100%);
  .carousel-indicators {
    bottom: -35px;
  }
  .skills-container {
    max-width: 500px;
    margin: 0 50px;
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    @include media-breakpoint-up(sm) {
      margin: 0 100px;
      align-content: center;
      height: 250px;
      width: 500px;
    }
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
      img {
        max-width: 100%;
      }
      @include media-breakpoint-up(sm) {
        margin: 10px;
      }
    }
  }
}
</style>
