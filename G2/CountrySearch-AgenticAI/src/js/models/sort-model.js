/**
 * Creates a SortModel to represent the current sort state.
 *
 * @param {string} field - Sort field: 'name', 'population', or 'area'
 * @param {string} direction - Sort direction: 'asc' or 'desc'
 * @returns {Object} SortModel
 */
export function createSortModel(field, direction) {
    return {
        field,
        direction,
    };
}
