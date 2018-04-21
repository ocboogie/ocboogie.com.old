<template>
  <Section class="skills">
    <h1 class="title has-text-weight-light is-size-1">My skills</h1>
    <Carousel :per-page="1" :navigation-enabled="true">
      <Slide v-for="(skillsList, skillsName) in skills" :key="skillsName">
        <h1 class="title">{{skillsName}}</h1>
        <div class="skills-container">
          <a v-for="skill in skillsList" :href="skill.website" :key="skill.name" :data-tooltip="skill.name" class="skill tooltip">
            <span :style="skill.containerStyle" class="logo-container">
              <img :style="skill.style" :src="skill.logo" />
            </span>
          </a>
        </div>
      </Slide>
    </Carousel>
  </Section>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";

import Section from "./Section.vue";

export default {
  data() {
    return {
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
    Section,
    Carousel,
    Slide
  }
};
</script>

<style scoped lang="scss">
.skills {
  background-color: #faaca8;
  background-image: linear-gradient(135deg, #faaca8 0%, #ddd6f3 100%);
}
.skills-container {
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.skill {
  height: 100px;
  width: 100px;
  background-color: #fafafa;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin: 5px;
  border-radius: 50%;
}
.logo-container {
  padding: 10px;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
}
</style>
<style lang="scss">
@media screen and (max-width: 768px) {
  .VueCarousel-navigation-button {
    visibility: hidden;
    display: inline;
  }
}
</style>
