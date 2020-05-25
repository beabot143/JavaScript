import Search from './models/Search';
import * as searchView from './views/SearchView';
import * as recipehView from './views/RecipeView';
import { elements, renderLoader, clearLoader } from './views/base';
import Recipe from './models/Recipe';

/** Global State of the app
 * - Searh Object
 * - current recipe object
 * - Shopping list obect
 * - liked recipes
 */
const state = {};


/** 
 * SEARCH CONTROLER 
 * */
const controlSearch = async () => {
    // 1. Get query from view
    //const query = searchView.getInput(); //TODO

    const query ='pizza';

    if (query) {
        // 2. New Search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try {
            // 4. Search for Recipes. getResults returns a promise
            await state.search.getResults();
            clearLoader();

            // 5. render results on UI only to hapoen after we receive recipes
            searchView.renderResults(state.search.result);
            
        } catch (error) {
            alert('Something wrong with the search...');
            clearLoader();
        }
        
    }

}

elements.searchForm.addEventListener('submit', e => {
    // when submit button is clicked, prevents page from reloading and instead will run the controlSearch() function.
    e.preventDefault();
    controlSearch();
});


// FOR testing
window.addEventListener('load', e => {
    // when submit button is clicked, prevents page from reloading and instead will run the controlSearch() function.
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
    
});


/** 
 * RECIPE CONTROLER 
 * */
const controlRecipe = async () => {

    //location is the url. (ie: http://localhost:8081/#47746). Hash is the number after the hash # symbol

    // get ID from URL
    const id = window.location.hash.replace('#', '');
    
    if (id) {
        
        // Prepare UI for changes
        recipehView.clearRecipe();
        renderLoader(elements.recipe);

        // Create new Recipe object
        state.recipe = new Recipe(id);

        // testing
        window.r = state.recipe;

        try {
            // Get recipe Data
            await state.recipe.getRecipe();
            console.log(state.recipe.ingredients);
            state.recipe.parseIngredients();

            // Calculte serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render Recipe
            clearLoader();
            recipehView.renderRecipe(state.recipe);
            console.log(state.recipe);

        } catch (error) {
            console.log(error);
            alert ('Error: processing recipe');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


