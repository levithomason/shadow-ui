import {LitElement, html} from 'https://unpkg.com/@polymer/lit-element?module'

class SUIButton extends LitElement {
  constructor() {
    super();
  }

  computeButtonClass() {
    let classes = ""
    if (this.hasAttribute('primary')) {
      classes += " primary"
    } else if (this.hasAttribute('secondary')) {
      classes += " secondary"
    }
    return "ui" + classes + " button"
  }

  renderLabeledButton() {
    const position = this.getAttribute('labelPosition') || 'right'
    const buttonClass = this.computeButtonClass()

    return html`
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/button.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/label.css" />

      <div class="ui ${position} labeled button">
        <button class="${buttonClass}" role="button" tabindex="0">
          <slot></slot>
        </button>
        <div class="ui left pointing basic label">
          <slot name="label">
            ${this.getAttribute('label')}
          </slot>
        </div>
      </div>
    `
  }

  render() {
    if (this.hasAttribute('label')) {
      return this.renderLabeledButton()
    }

    return html`
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/components/button.css" />

    <button class="${this.computeButtonClass()}" role="button">
      <slot></slot>
    </button>
    `
  }
}

customElements.define('sui-button', SUIButton);
