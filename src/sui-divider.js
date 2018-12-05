import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element?module'

class SUIDivider extends LitElement {
  render() {
    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/divider.css" />

    <div class="ui divider"></div>
    `
  }
}

customElements.define('sui-divider', SUIDivider);
