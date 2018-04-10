import { h } from "preact";

import Skills from "./style";

export default () => {
  return (
    <Skills title="My Skills" id="skills">
      <div>
        <h1 className="title">I'm Eamon Mikulec a frontend web developer</h1>
      </div>
      <div>
        <h1 className="title has-text-weight-light is-size-1">Eamon Mikulec</h1>
        <h2 className="subtitle">Frontend web developer</h2>
      </div>
    </Skills>
  );
};
