import { Component } from "./src/core/Component/Component.js";
import { Sidebar } from "./src/components/atom/Sidebar.js";
import { SideButton } from "./src/components/atom/Button.js";
export class App extends Component {
  constructor() {
    super();
    this.brand = [
      "Apple",
      "HTC",
      "HUAWEI",
      "LG",
      "Realme",
      "Samsung",
      "Sony",
      "Vivo",
      "XIAOMI",
      "ZTE",
      "Samsung",
      "Sony",
      "Vivo",
      "XIAOMI",
      "ZTE",
      "Apple",
      "HTC",
      "HUAWEI",
      "LG",
      "Realme",
      "Samsung",
      "Sony",
      "Vivo",
      "XIAOMI",
      "ZTE",
      "Samsung",
      "Sony",
      "Vivo",
      "XIAOMI",
      "ZTE",
    ];
  }

  render() {
    return `
          <my-sidebar brand='${JSON.stringify(this.brand)}'">
          </my-sidebar>
          <side-btn><side-btn/>
          `;
  }
}

customElements.define("my-app", App);
