/**
 * Loader - Loading spinner displayed during API operations.
 * Shows/hides a CSS-based spinner to indicate loading state.
 */
export class Loader {
    constructor() {
        this.rootElement = document.getElementById('loader');
        this.render();
    }

    /**
     * Render the loader spinner.
     */
    render() {
        this.rootElement.innerHTML = '<div class="spinner"></div>';
    }

    /**
     * Show the loader.
     */
    show() {
        this.rootElement.style.display = 'block';
    }

    /**
     * Hide the loader.
     */
    hide() {
        this.rootElement.style.display = 'none';
    }
}
