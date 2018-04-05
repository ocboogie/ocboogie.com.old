import { h, render } from "preact";

import App from "./components/App";

const mountNode = document.getElementById("root");

render(
  <div>
    <App />
  </div>,
  mountNode,
  mountNode.lastChild
);

if (module.hot) {
  module.hot.accept();
}
