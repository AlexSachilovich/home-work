import { Component } from "../../core/Component/Component.js";
export class Sidebar extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: true,
    };
  }

  componentDidMount() {
    window.addEventListener("toogle-menu", () => {
      this.setState((state) => {
        return {
          isOpen: state.isOpen ? false : true,
        };
      });
    });
  }

  render() {
    return `
          <div class="${
            this.state.isOpen ? "sidenav" : "sidenav sidenav__hidden"
          }">
              ${this.props
                .map((item) => {
                  return `<li class="menu__item">
                              <a href="#">${item}</a>
                          </li>`;
                })
                .join("")}
          </div>
    `;
  }

  static get observedAttributes() {
    return ["brand"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.componentWillUpdate(name, oldValue, newValue);
    this.props = JSON.parse(this.getAttribute("brand"));
  }
}
customElements.define("my-sidebar", Sidebar);
