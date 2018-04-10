import { h } from "preact";

import Section from "./style";

export default ({ children, className, id }) => (
  <Section className={className} id={id}>
    <div>
      <div className="container has-text-centered">{children}</div>
    </div>
  </Section>
);
