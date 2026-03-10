/**
 * SearchBar - Search input and button component.
 * Emits onSearch callback with the query when user clicks Search or presses Enter.
 * Validates that input is not empty before triggering callback.
 */
export class SearchBar {
    constructor({ onSearch }) {
        this.onSearch = onSearch;
        this.rootElement = document.getElementById('search-bar');
        this.render();
    }

    /**
     * Render the search bar HTML.
     */
    render() {
        this.rootElement.innerHTML = `
      <div class="search-bar-container">
        <input
          type="text"
          class="search-input"
          placeholder="Search for a country..."
          id="search-input"
        />
        <button class="search-btn" id="search-button">Search</button>
      </div>
    `;

        this.inputElement = this.rootElement.querySelector('#search-input');
        this.buttonElement = this.rootElement.querySelector('#search-button');

        // Add event listeners
        this.buttonElement.addEventListener('click', () => this.handleSearch());
        this.inputElement.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                this.handleSearch();
            }
        });
    }

    /**
     * Handle search action - validate and trigger callback.
     */
    handleSearch() {
        const query = this.inputElement.value.trim();
        this.onSearch(query);
    }

    /**
     * Set the disabled state of search controls.
     * @param {boolean} disabled
     */
    setDisabled(disabled) {
        this.inputElement.disabled = disabled;
        this.buttonElement.disabled = disabled;
    }

    /**
     * Clear the search input.
     */
    clear() {
        this.inputElement.value = '';
    }
}
