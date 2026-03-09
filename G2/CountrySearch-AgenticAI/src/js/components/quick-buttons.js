/**
 * QuickButtons - Three preset region/country buttons.
 * Calls onRegionSelect callback with the selected region/code on click.
 */
export class QuickButtons {
    constructor({ onRegionSelect }) {
        this.onRegionSelect = onRegionSelect;
        this.rootElement = document.getElementById('quick-buttons');
        this.buttons = [];
        this.render();
    }

    /**
     * Render the quick buttons.
     */
    render() {
        this.rootElement.innerHTML = `
      <button class="quick-btn" id="btn-europe">🇪🇺 Europe</button>
      <button class="quick-btn" id="btn-africa">🦁 Africa</button>
      <button class="quick-btn" id="btn-macedonia">🦅 Macedonia</button>
    </button>
      <button class="quick-btn" id="btn-neighbors">🤝 Neighbors of Macedonia</button>
    `;

        // Store button references
        this.buttons = [
            { element: this.rootElement.querySelector('#btn-europe'), value: 'europe' },
            { element: this.rootElement.querySelector('#btn-africa'), value: 'africa' },
            { element: this.rootElement.querySelector('#btn-macedonia'), value: 'MKD' },
            { element: this.rootElement.querySelector('#btn-neighbors'), value: 'neighbors' },
        ];

        // Add event listeners
        this.buttons.forEach((btn) => {
            btn.element.addEventListener('click', () => this.onRegionSelect(btn.value));
        });
    }

    /**
     * Set the disabled state of all buttons.
     * @param {boolean} disabled
     */
    setDisabled(disabled) {
        this.buttons.forEach((btn) => {
            btn.element.disabled = disabled;
        });
    }
}
