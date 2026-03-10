/**
 * Formats a number with thousands separators.
 * @param {number} number - The number to format
 * @returns {string} Formatted number (e.g., "44,012,345")
 */
export function formatPopulation(number) {
    return number.toLocaleString('en-US');
}

/**
 * Formats area with thousands separators and km² unit.
 * @param {number} number - The area in square kilometers
 * @returns {string} Formatted area (e.g., "603,550 km²")
 */
export function formatArea(number) {
    return `${number.toLocaleString('en-US')} km²`;
}

/**
 * Generates a Wikipedia URL for a country.
 * @param {string} countryName - The country name
 * @returns {string} Wikipedia URL
 */
export function wikiUrl(countryName) {
    // Replace spaces with underscores and construct Wikipedia URL
    const titleCase = countryName.replace(/\s+/g, '_');
    return `https://en.wikipedia.org/wiki/${titleCase}`;
}
