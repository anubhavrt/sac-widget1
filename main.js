sap.ui.define([], function () {
  "use strict";

  class SimpleWidget extends HTMLElement {

    constructor() {
      super();

      // Create container
      const container = document.createElement("div");
      container.style.width = "100%";
      container.style.height = "100%";

      // Create iframe
      this._iframe = document.createElement("iframe");
      this._iframe.style.width = "100%";
      this._iframe.style.height = "100%";
      this._iframe.style.border = "none";

      container.appendChild(this._iframe);
      this.appendChild(container);
    }

    // Called when widget properties change
    onCustomWidgetAfterUpdate() {
      if (this.appUrl && this._iframe.src !== this.appUrl) {
        this._iframe.src = this.appUrl;
      }
    }
  }

  customElements.define(
    "com-company-simple-widget",
    SimpleWidget
  );

  return SimpleWidget;
});
