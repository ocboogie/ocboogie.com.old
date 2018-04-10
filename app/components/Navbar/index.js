import { h, Component, render } from "preact";

import { Title, NavItem } from "./style";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hamburgerMenmOpen: false
    };
  }

  hamburgerClickHandler = () => {
    this.setState({ hamburgerMenmOpen: !this.state.hamburgerMenmOpen });
  };

  render() {
    return (
      <nav className="navbar is-fixed-top has-shadow">
        <div className="navbar-brand">
          <Title className="navbar-itema">
            <h1 className="title">Eamon Mikulec</h1>
            <h2 className="subtitle">Frontend web developer</h2>
          </Title>
          <div
            onClick={this.hamburgerClickHandler}
            className={`navbar-burger burger ${
              this.state.hamburgerMenmOpen ? "is-active" : ""
            }`}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div
          className={`navbar-menu ${
            this.state.hamburgerMenmOpen ? "is-active" : ""
          }`}
        >
          <div className="navbar-start">
            <NavItem
              className="navbar-item"
              activeClass="is-active"
              to="about"
              spy={true}
              smooth={true}
            >
              About me
            </NavItem>
            <NavItem
              className="navbar-item"
              activeClass="is-active"
              to="skills"
              spy={true}
              smooth={true}
            >
              My skills
            </NavItem>
            <NavItem
              className="navbar-item"
              activeClass="is-active"
              to="projects"
              spy={true}
              smooth={true}
            >
              My projects
            </NavItem>
          </div>
        </div>
      </nav>
    );
  }
}
