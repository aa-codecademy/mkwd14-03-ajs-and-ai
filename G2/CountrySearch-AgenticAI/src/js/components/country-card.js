import { formatPopulation, formatArea, wikiUrl } from '../utils/formatter.js';

/**
 * CountryCard - Renders a single country card.
 * Returns an HTMLElement that can be appended to the DOM.
 */
export class CountryCard {
  /**
   * @param {CountryModel} country - Country data to render
   */
  constructor(country) {
    this.country = country;
  }

  /**
   * Render the country card and return the DOM element.
   * Does not append element to DOM - caller is responsible.
   * @returns {HTMLElement}
   */
  render() {
    const card = document.createElement('div');
    card.className = 'country-card';

    const flagImg = document.createElement('img');
    flagImg.className = 'country-flag';
    flagImg.src = this.country.flag;
    flagImg.alt = this.country.flagAlt;

    const content = document.createElement('div');
    content.className = 'country-content';

    const name = document.createElement('h2');
    name.className = 'country-name';
    name.textContent = this.country.name;

    const populationDetail = document.createElement('div');
    populationDetail.className = 'country-detail';
    populationDetail.innerHTML = `
      <span class="country-detail-label">Population</span>
      <span class="country-detail-value">${formatPopulation(this.country.population)}</span>
    `;

    const areaDetail = document.createElement('div');
    areaDetail.className = 'country-detail';
    areaDetail.innerHTML = `
      <span class="country-detail-label">Area</span>
      <span class="country-detail-value">${formatArea(this.country.area)}</span>
    `;

    const capitalDetail = document.createElement('div');
    capitalDetail.className = 'country-detail';
    capitalDetail.innerHTML = `
      <span class="country-detail-label">Capital</span>
      <span class="country-detail-value">${this.country.capital}</span>
    `;

    const wikiLink = document.createElement('a');
    wikiLink.className = 'country-wiki-link';
    wikiLink.href = wikiUrl(this.country.name);
    wikiLink.textContent = 'Open on Wikipedia';
    wikiLink.target = '_blank';
    wikiLink.rel = 'noopener noreferrer';

    content.appendChild(name);
    content.appendChild(populationDetail);
    content.appendChild(areaDetail);
    content.appendChild(capitalDetail);
    content.appendChild(wikiLink);

    card.appendChild(flagImg);
    card.appendChild(content);

    return card;
  }
}
