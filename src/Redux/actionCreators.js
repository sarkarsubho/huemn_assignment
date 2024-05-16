import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  SELECT_RECIPE,
  ADD_TO_WISHLIST,
  UPDATE_RECIPE_ORDER,
} from "./actionTypes";

export const fetchRecipesRequest = () => {
  return {
    type: FETCH_RECIPES_REQUEST,
  };
};

export const fetchRecipesSuccess = (recipes) => {
  return {
    type: FETCH_RECIPES_SUCCESS,
    payload: recipes,
  };
};

export const fetchRecipesFailure = (error) => {
  return {
    type: FETCH_RECIPES_FAILURE,
    payload: error,
  };
};

export const selectRecipe = (recipe) => {
  return {
    type: SELECT_RECIPE,
    payload: recipe,
  };
};

export const addToWishlist = (item) => {
  return {
    type: ADD_TO_WISHLIST,
    payload: item,
  };
};

export const updateRecipeOrder = (newOrder) => ({
  type: UPDATE_RECIPE_ORDER,
  payload: newOrder,
});
