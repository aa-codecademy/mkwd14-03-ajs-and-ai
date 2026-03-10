import { createCountryModel } from '../models/country-model.js';

/**
 * CountryAPI - All fetch logic for the REST Countries API.
 * Maps all raw responses to CountryModel objects.
 * Never touches the DOM. Throws meaningful errors.
 */
export class CountryAPI {
    constructor(timeoutMs = 8000) {
        this.baseUrl = 'https://restcountries.com/v3.1';
        this.fields = 'name,flags,population,capital,area,borders,cca3,region';
        this.timeoutMs = timeoutMs;
    }

    /**
     * Executes a fetch with timeout protection.
     * @private
     * @param {string} url - The URL to fetch
     * @returns {Promise<Response>}
     */
    async fetchWithTimeout(url) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

        try {
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`API Error: ${response.status}`);
            }

            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            if (error.name === 'AbortError') {
                throw new Error('Request timed out');
            }
            throw error;
        }
    }

    /**
     * Fetch countries by name (partial match).
     * @param {string} query - Country name or partial name
     * @returns {Promise<CountryModel[]>}
     */
    async fetchByName(query) {
        const url = `${this.baseUrl}/name/${encodeURIComponent(query)}?fields=${this.fields}`;
        const response = await this.fetchWithTimeout(url);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error(`No countries found for '${query}'.`);
        }

        return data.map(createCountryModel);
    }

    /**
     * Fetch all countries in a region.
     * @param {string} region - Region name (e.g., 'europe', 'africa')
     * @returns {Promise<CountryModel[]>}
     */
    async fetchByRegion(region) {
        const url = `${this.baseUrl}/region/${encodeURIComponent(region)}?fields=${this.fields}`;
        const response = await this.fetchWithTimeout(url);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            throw new Error(`No countries found in region '${region}'.`);
        }

        return data.map(createCountryModel);
    }

    /**
     * Fetch a country by ISO 3-letter code.
     * @param {string} code - ISO 3-letter code (e.g., 'MKD')
     * @returns {Promise<CountryModel>}
     */
    async fetchByCode(code) {
        const url = `${this.baseUrl}/alpha/${encodeURIComponent(code)}?fields=${this.fields}`;
        const response = await this.fetchWithTimeout(url);
        const data = await response.json();

        if (!data || (Array.isArray(data) && data.length === 0)) {
            throw new Error(`Country with code '${code}' not found.`);
        }

        // Handle both single object and array responses
        const country = Array.isArray(data) ? data[0] : data;
        return createCountryModel(country);
    }

    /**
     * Fetch multiple countries by code list.
     * Used internally by fetchBorders().
     * @param {string[]} codes - Array of ISO 3-letter codes
     * @returns {Promise<CountryModel[]>}
     */
    async fetchByCodeList(codes) {
        if (!codes || codes.length === 0) {
            return [];
        }

        const codeString = codes.join(',');
        const url = `${this.baseUrl}/alpha?codes=${encodeURIComponent(codeString)}&fields=${this.fields}`;
        const response = await this.fetchWithTimeout(url);
        const data = await response.json();

        if (!Array.isArray(data) || data.length === 0) {
            return [];
        }

        return data.map(createCountryModel);
    }

    /**
     * Fetch border countries for a given country code.
     * Performs two sequential requests: first gets borders, then fetches all neighbors.
     * @param {string} code - Country code (e.g., 'MKD')
     * @returns {Promise<CountryModel[]>}
     */
    async fetchBorders(code) {
        // Step 1: Get the country and its borders
        const countryUrl = `${this.baseUrl}/alpha/${encodeURIComponent(code)}?fields=borders`;
        const countryResponse = await this.fetchWithTimeout(countryUrl);
        const countryData = await countryResponse.json();

        const borders = Array.isArray(countryData) ? countryData[0]?.borders : countryData?.borders;

        // Step 2: If there are borders, fetch all border countries
        if (!borders || borders.length === 0) {
            return [];
        }

        return this.fetchByCodeList(borders);
    }
}
