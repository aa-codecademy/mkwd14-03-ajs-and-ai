/**
 * Creates a CountryModel from raw API response data.
 * Maps all fields with appropriate fallbacks applied at creation time.
 *
 * @param {Object} raw - Raw country object from REST Countries API
 * @returns {Object} CountryModel with normalized data
 */
export function createCountryModel(raw) {
    return {
        name: raw.name?.common || 'Unknown',
        officialName: raw.name?.official || raw.name?.common || 'Unknown',
        flag: raw.flags?.png || '',
        flagAlt: raw.flags?.alt || `${raw.name?.common || 'Country'} flag`,
        population: raw.population || 0,
        capital: raw.capital?.[0] || 'N/A',
        area: raw.area || 0,
        code: raw.cca3 || '',
        borders: raw.borders || [],
        region: raw.region || 'Unknown',
        wikiUrl: '', // Will be filled by formatter if needed
    };
}
