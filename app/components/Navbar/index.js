import { h, Component, render } from "preact";

import LogoContainer from "./style";

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
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <LogoContainer className="navbar-item" href="https://bulma.io">
            <svg
              version="1.1"
              width="48"
              height="48"
              viewBox="0 0 500 500"
              style="enable-background:new 0 0 500 500;"
            >
              <circle
                fill="none"
                stroke="#EF5350"
                stroke-width="40"
                cx="250"
                cy="250"
                r="201.7"
              />
              <path
                fill="none"
                stroke="#03A9F4"
                stroke-width="55"
                d="M342.8,306.7c-31.1,50.9-98.6,67.2-149.5,36s-67.2-98.6-36-149.5s98.6-67.2,149.5-36c14.7,9,27,21.3,36,35.9"
              />
            </svg>
          </LogoContainer>
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
            <a className="navbar-item" href="https://bulma.io/">
              About
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="/documentation/overview/start/">
                Projects
              </a>
              <div className="navbar-dropdown is-boxed">
                <a
                  className="navbar-item"
                  href="/documentation/overview/start/"
                >
                  Action Hub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
