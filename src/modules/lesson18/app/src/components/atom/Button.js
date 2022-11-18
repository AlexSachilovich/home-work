import { Component } from "../../core/Component/Component.js";
export class SideButton extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.addEventListener("click", () => {
      this.dispatch("toogle-menu");
    });
  }

  render() {
    return `
    <button type="button" class="btn btn-primary">Click!</button>
      `;
  }
}
customElements.define("side-btn", SideButton);
