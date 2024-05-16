import axios from "axios";
import {
  fetchRecipesFailure,
  fetchRecipesRequest,
  fetchRecipesSuccess,
} from "./actionCreators";

export const fetchRecipes = () => {
  return (dispatch) => {
    dispatch(fetchRecipesRequest());
    axios
      .get("https://www.themealdb.com/api/json/v1/1/search.php?s=A")
      .then((response) => {
        const recipes = response.data.meals;

        dispatch(fetchRecipesSuccess(recipes));
      })
      .catch((error) => {
        dispatch(fetchRecipesFailure(error.message));
      });
  };
};
