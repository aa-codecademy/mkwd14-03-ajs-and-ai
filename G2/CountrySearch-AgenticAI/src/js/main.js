// Import all modules
import { CountryAPI } from './api/country-api.js';
import { SearchBar } from './components/search-bar.js';
import { QuickButtons } from './components/quick-buttons.js';
import { CountryCard } from './components/country-card.js';
import { CountryList } from './components/country-list.js';
import { Notification } from './components/notification.js';
import { Loader } from './components/loader.js';
import { SortMenu } from './components/sort-menu.js';
import { createNotificationModel } from './models/notification-model.js';

// Constants
const MACEDONIA_CODE = 'MKD';
const DEFAULT_REGION_EUROPE = 'europe';
const DEFAULT_REGION_AFRICA = 'africa';
const API_TIMEOUT_MS = 8000;

// Initialize all modules
const api = new CountryAPI(API_TIMEOUT_MS);
const notification = new Notification();
const loader = new Loader();
const countryList = new CountryList({});
const sortMenu = new SortMenu({
    onSort: (sortModel) => countryList.setSort(sortModel),
});
const searchBar = new SearchBar({
    onSearch: (query) => handleSearch(query),
});
const quickButtons = new QuickButtons({
    onRegionSelect: (region) => handleRegionSelect(region),
});

/**
 * Handle search by country name.
 * @param {string} query - Country name or partial name
 */
async function handleSearch(query) {
    if (!query || query.trim().length === 0) {
        notification.show(
            createNotificationModel('Please enter a search value!', 'warning'),
        );
        return;
    }

    try {
        setLoading(true);
        const countries = await api.fetchByName(query);
        countryList.display(countries);
        notification.hide();
    } catch (error) {
        handleError(error.message || 'An unexpected error occurred.');
    } finally {
        setLoading(false);
    }
}

/**
 * Handle quick button selections.
 * @param {string} region - Region code or special value
 */
async function handleRegionSelect(region) {
    try {
        setLoading(true);
        let countries = [];

        if (region === 'neighbors') {
            // Fetch Macedonia's border countries (two-step process in fetchBorders)
            countries = await api.fetchBorders(MACEDONIA_CODE);
            if (countries.length === 0) {
                throw new Error('Macedonia has no border countries.');
            }
        } else if (region === MACEDONIA_CODE) {
            // Fetch Macedonia by code
            const country = await api.fetchByCode(MACEDONIA_CODE);
            countries = [country];
        } else {
            // Fetch by region
            countries = await api.fetchByRegion(region);
        }

        countryList.display(countries);
        notification.hide();
    } catch (error) {
        handleError(error.message || 'An unexpected error occurred.');
    } finally {
        setLoading(false);
    }
}

/**
 * Handle errors by displaying notification.
 * @param {string} message - Error message
 */
function handleError(message) {
    notification.show(createNotificationModel(message, 'error'));
}

/**
 * Set loading state - show/hide loader and disable buttons.
 * @param {boolean} isLoading
 */
function setLoading(isLoading) {
    if (isLoading) {
        loader.show();
        searchBar.setDisabled(true);
        quickButtons.setDisabled(true);
        sortMenu.setDisabled(true);
    } else {
        loader.hide();
        searchBar.setDisabled(false);
        quickButtons.setDisabled(false);
        sortMenu.setDisabled(false);
    }
}

/**
 * Initialize the app - display initial state.
 */
function init() {
    // Display an empty state message on first load
    notification.show(
        createNotificationModel(
            'Welcome! Search for a country or use the quick buttons',
            'info',
            10000,
        ),
    );
}

// Start the app
init();
