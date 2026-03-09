import { CountryCard } from './country-card.js';
import { createSortModel } from '../models/sort-model.js';

/**
 * CountryList - Renders and manages a collection of country cards.
 * Owns the list container and the active SortModel.
 * Handles sorting of displayed results without an API call.
 */
export class CountryList {
    constructor({ onCountrySelect }) {
        this.onCountrySelect = onCountrySelect;
        this.rootElement = document.getElementById('country-list');
        this.countries = [];
        this.sortModel = createSortModel('name', 'asc'); // Default sort
    }

    /**
     * Display countries in the list.
     * Clears previous results and renders new ones.
     * @param {CountryModel[]} countries - Array of countries to display
     */
    display(countries) {
        this.countries = [...countries]; // Store a copy
        this.applySort();
    }

    /**
     * Apply current sort to the countries array and re-render.
     */
    applySort() {
        // Sort the internal countries array
        const sorted = [...this.countries];

        switch (this.sortModel.field) {
            case 'name':
                sorted.sort((a, b) => {
                    const comparison = a.name.localeCompare(b.name);
                    return this.sortModel.direction === 'asc' ? comparison : -comparison;
                });
                break;
            case 'population':
                sorted.sort((a, b) => {
                    const comparison = a.population - b.population;
                    return this.sortModel.direction === 'asc' ? comparison : -comparison;
                });
                break;
            case 'area':
                sorted.sort((a, b) => {
                    const comparison = a.area - b.area;
                    return this.sortModel.direction === 'asc' ? comparison : -comparison;
                });
                break;
        }

        this.render(sorted);
    }

    /**
     * Render the list of countries.
     * @private
     */
    render(countries) {
        this.rootElement.innerHTML = '';
        this.rootElement.classList.remove('empty');

        if (!countries || countries.length === 0) {
            this.rootElement.classList.add('empty');
            return;
        }

        countries.forEach((country) => {
            const card = new CountryCard(country);
            const cardElement = card.render();
            this.rootElement.appendChild(cardElement);
        });
    }

    /**
     * Clear the list.
     */
    clear() {
        this.countries = [];
        this.rootElement.innerHTML = '';
        this.rootElement.classList.add('empty');
    }

    /**
     * Set the sort model and re-sort displayed results.
     * Does not trigger an API call - re-sorts current data.
     * @param {SortModel} sortModel
     */
    setSort(sortModel) {
        this.sortModel = sortModel;
        this.applySort();
    }
}
