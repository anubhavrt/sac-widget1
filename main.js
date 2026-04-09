sap.ui.define([], function () {
  "use strict";

  class SimpleWidget extends HTMLElement {

    constructor() {
      super();

      const div = document.createElement("div");
      div.style.width = "100%";
      div.style.height = "100%";
      div.style.display = "flex";
      div.style.alignItems = "center";
      div.style.justifyContent = "center";
      div.style.fontSize = "18px";
      div.style.fontWeight = "bold";

      div.innerText = "Hello from Custom Widget";

      this.appendChild(div);
    }
  }

  customElements.define(
    "com-company-simple-widget",
    SimpleWidget
  );

  return SimpleWidget;
});
