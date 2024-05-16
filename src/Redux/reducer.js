import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  SELECT_RECIPE,
  ADD_TO_WISHLIST,
  UPDATE_RECIPE_ORDER,
} from "./actionTypes";

const initialState = {
  recipes: [],
  isLoading: false,
  error: null,
  selectedRecipe: null,
  wishlist: [],
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_RECIPES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
        error: null,
      };
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        recipes: [],
        error: action.payload,
      };
    case SELECT_RECIPE:
      return {
        ...state,
        selectedRecipe: action.payload,
      };
    case ADD_TO_WISHLIST:
      console.log(action.payload);
      const existingItemIndex = state.wishlist.findIndex(
        (item) => item.idMeal === action.payload.idMeal
      );
      if (existingItemIndex !== -1) {
        const updatedItems = [...state.wishlist];
        updatedItems.splice(existingItemIndex, 1);
        return {
          ...state,
          wishlist: updatedItems,
        };
      } else {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload],
        };
      }

    case UPDATE_RECIPE_ORDER:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default recipeReducer;
