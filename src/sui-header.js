import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element?module'

class SUIHeader extends LitElement {
  render() {
    let classes = ''
    if (this.getAttribute('size')) {
      classes += this.getAttribute('size') + ' '
    }
    classes = 'ui ' + classes + ' header'

    return html`
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/header.css"
      />

      <div class="${classes}"><slot></slot></div>
    `
  }
}

customElements.define('sui-header', SUIHeader)
