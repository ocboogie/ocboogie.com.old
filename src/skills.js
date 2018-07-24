import rust from "./assets/descriptions/Rust.md";
import node from "./assets/descriptions/Node.md";
import python from "./assets/descriptions/Python.md";
import unity from "./assets/descriptions/Unity.md";

export default [
  {
    name: "Rust",
    logo: "https://cdn.svgporn.com/logos/rust.svg",
    description: rust
  },
  {
    name: "Node.js",
    logo: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
    description: node,
    subskills: [
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
  },
  {
    name: "Python",
    description: python,
    logo: "https://cdn.svgporn.com/logos/python.svg"
  },
  {
    name: "Unity",
    logo: "https://cdn.svgporn.com/logos/unity.svg",
    description: unity,
    style: "margin-right: 13px;"
  }
];
