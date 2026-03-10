import { createSortModel } from '../models/sort-model.js';

/**
 * SortMenu - Sort dropdown UI.
 * Opens on button click and emits onSort callback with SortModel when an option is selected.
 */
export class SortMenu {
    constructor({ onSort }) {
        this.onSort = onSort;
        this.rootElement = document.getElementById('sort-menu');
        this.isOpen = false;
        this.currentSort = createSortModel('name', 'asc');
        this.render();
    }

    /**
     * Render the sort menu button and dropdown.
     */
    render() {
        this.rootElement.innerHTML = `
      <button class="sort-btn" id="sort-toggle">Sort by ⇅</button>
      <div class="sort-dropdown" id="sort-dropdown">
        <button class="sort-option" data-field="name" data-direction="asc">Name A → Z</button>
        <button class="sort-option" data-field="name" data-direction="desc">Name Z → A</button>
        <button class="sort-option" data-field="population" data-direction="desc">Population ↓</button>
        <button class="sort-option" data-field="population" data-direction="asc">Population ↑</button>
        <button class="sort-option" data-field="area" data-direction="desc">Area ↓</button>
        <button class="sort-option" data-field="area" data-direction="asc">Area ↑</button>
      </div>
    `;

        this.toggleBtn = this.rootElement.querySelector('#sort-toggle');
        this.dropdown = this.rootElement.querySelector('#sort-dropdown');
        this.options = this.rootElement.querySelectorAll('.sort-option');

        // Toggle dropdown on button click
        this.toggleBtn.addEventListener('click', () => this.toggleDropdown());

        // Handle option selection
        this.options.forEach((option) => {
            option.addEventListener('click', (e) => {
                const field = e.target.dataset.field;
                const direction = e.target.dataset.direction;
                this.selectOption(field, direction);
            });
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.rootElement.contains(e.target)) {
                this.closeDropdown();
            }
        });

        // Mark initial active state
        this.updateActiveOption();
    }

    /**
     * Toggle the dropdown open/closed.
     */
    toggleDropdown() {
        if (this.isOpen) {
            this.closeDropdown();
        } else {
            this.openDropdown();
        }
    }

    /**
     * Open the dropdown.
     */
    openDropdown() {
        this.isOpen = true;
        this.dropdown.classList.add('open');
    }

    /**
     * Close the dropdown.
     */
    closeDropdown() {
        this.isOpen = false;
        this.dropdown.classList.remove('open');
    }

    /**
     * Handle option selection.
     * @param {string} field - Sort field
     * @param {string} direction - Sort direction
     */
    selectOption(field, direction) {
        this.currentSort = createSortModel(field, direction);
        this.updateActiveOption();
        this.closeDropdown();
        this.onSort(this.currentSort);
    }

    /**
     * Update visual active state on options.
     */
    updateActiveOption() {
        this.options.forEach((option) => {
            const isActive =
                option.dataset.field === this.currentSort.field &&
                option.dataset.direction === this.currentSort.direction;
            option.classList.toggle('active', isActive);
        });
    }

    /**
     * Set the disabled state of the sort button.
     * @param {boolean} disabled
     */
    setDisabled(disabled) {
        this.toggleBtn.disabled = disabled;
    }
}
