import { elements } from './base';

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = '';
};

export const clearResults = () => {
    elements.searchResList.innerHTML = '';
    elements.searchResPages.innerHTML = '';
};

export const highlightSelected = id => {
    const resultsArr = Array.from(document.querySelectorAll('.results__link'));
    resultsArr.forEach(el => {
        el.classList.remove('results__link--active');
    });
    document.querySelector(`.results__link[href*="${id}"]`).classList.add('results__link--active');
};

export const limitRecipeTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split(' ').reduce((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push(cur);
            } 
            return acc + cur.length;
        }, 0);
        return `${newTitle.join(' ')} ...`;
    } 
    return title;
};

const renderRecipe = recipe => {
    const markup = `
        <li>
            <a class="results__link " href="#${recipe.recipe_id}">
                <figure class="results__fig">
                    <img src="${recipe.image_url}" alt="Test">
                </figure>
                <div class="results__data">
                    <h4 class="results__name">${limitRecipeTitle(recipe.title)}</h4>
                    <p class="results__author">${recipe.publisher}</p>
                </div>
            </a>
        </li>
    `;
    elements.searchResList.insertAdjacentHTML('beforeend', markup);
};

const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;

const renderButtons = (page, numOfResults, resPerPage) => {
    const pages = Math.ceil(numOfResults / resPerPage);
    let button;
    if (page === 1 && pages > 1) {
        // show only button to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // show both next and previous button
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } 
    else if (page === pages && pages > 1) {
        //show only button to the previous page
        button = createButton(page, 'prev');
    } 
    elements.searchResPages.insertAdjacentHTML('afterbegin', button);
};

export const renderResults = (recipes, page = 1, recPerPage = 10) => {
    const start = (page - 1) * recPerPage;
    const end = (recPerPage * page);

    recipes.slice(start, end).forEach(element => renderRecipe(element));
    renderButtons(page, recipes.length, recPerPage);
};