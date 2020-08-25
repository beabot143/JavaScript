import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';
import Likes from './models/Likes';
import * as searchView from './views/SearchView';
import * as recipeView from './views/RecipeView';
import * as listView from './views/ListView';
import * as likesView from './views/LikesView';
import { elements, renderLoader, clearLoader, elementStrings } from './views/base';


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
    const query = searchView.getInput(); //TODO

    //const query ='pizza';

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


// // FOR testing
// window.addEventListener('load', e => {
//     // when submit button is clicked, prevents page from reloading and instead will run the controlSearch() function.
//     e.preventDefault();
//     controlSearch();
// });

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
 **/
const controlRecipe = async () => {

    //location is the url. (ie: http://localhost:8081/#47746). Hash is the number after the hash # symbol

    // get ID from URL
    const id = window.location.hash.replace('#', '');
    
    if (id) {
        
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // highlight selected search item
        if (state.search) searchView.highlightSelected(id);

        // Create new Recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe Data
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculte serving and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render Recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));

        } catch (error) {
            console.log(error);
            alert ('Error: processing recipe');
        }
    }
}

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

/** 
 * SHOPPING LIST CONTROLER 
 **/
const controlList = () => {
    // Create a new list IF there  is none yet
    if (!state.list) state.list = new List();

    // Add each ingredients to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};

// handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // handle delete event
    if (e.target.matches('.shopping__delete, .shopping__delete *')) {
        // delete from state
        state.list.deleteItem(id);

        // delete from UI
        listView.deleteItem(id);

    // handle count update
    } else if (e.target.matches('.shopping__count--value')) {
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val); 
    }
});

/**
 * LIKES CONTROLLER
 */
const controlLike = () => {
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // user has not yet liked current recipe by default
    if(!state.likes.isLiked(currentID)) {
        // Add like to the state
        const newLike = state.likes.addLike(
            currentID,
            state.recipe.title,
            state.recipe.author,
            state.recipe.img
        );

        // Toggle the like button
        likesView.toggleLikeBtn(true);                

        // Add like to the UI list
        likesView.renderLike(newLike);

    // user has not yet liked current recipe by default
    } else {
        // Remove Like from state
        state.likes.deleteLike(currentID);

        // Toggel like button
        likesView.toggleLikeBtn(false);

        // Remove like from the UI list
        
        likesView.deleteLike(currentID);
        
    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());
    
};

window.addEventListener('load', () => {
    state.likes = new Likes(); 

    // Restore Like
    state.likes.readStorage();
    
    // Toggle the like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
})


// handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn-decrease *')) {
        // decrease btn is clicked
        if (state.recipe.servings > 1){
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredients(state.recipe);
        }
    } else if(e.target.matches('.btn-increase, .btn-increase *')) {
        // increase btn is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    } else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
        // add ingredients to shopping list
        controlList();
    } else if (e.target.matches('.recipe__love, .recipe__love *')) {
        controlLike()
    }
});





