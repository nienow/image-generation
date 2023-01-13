import {render} from "solid-js/web";
import App from "App";

if (!window.customElements.get('randombits-diffusion')) {
  class ExternalApp extends HTMLElement {
    connectedCallback() {
      render(() => <App />, this);
    }
  }

  window.customElements.define('randombits-diffusion', ExternalApp);
}
