import { h } from "preact";

import About from "./style";

export default () => {
  return (
    <About title="About me" id="about">
      <div>
        <h1 className="title">I'm Eamon Mikulec a frontend web developer</h1>
      </div>
      <div>
        <h1 className="title has-text-weight-light is-size-1">Eamon Mikulec</h1>
        <h2 className="subtitle">Frontend web developer</h2>
      </div>
    </About>
  );
};
