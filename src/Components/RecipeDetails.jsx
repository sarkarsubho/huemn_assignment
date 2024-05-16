import { Link } from "react-router-dom";
import "./styles/RecipeDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa6";
import { addToWishlist } from "../Redux/actionCreators";

const RecipeDetails = () => {
  const { selectedRecipe, wishlist } = useSelector((store) => store);

  console.log(wishlist);
  const dispatch = useDispatch();

  const ingredients = [];

  if (selectedRecipe) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = selectedRecipe[`strIngredient${i}`];
      const measure = selectedRecipe[`strMeasure${i}`];

      if (!ingredient) break;

      ingredients.push(`${measure} - ${ingredient}`);
    }
  }

  const isItemInWishlist = (recipe) => {
    let result = wishlist.findIndex((item) => item.idMeal === recipe.idMeal);

    return result === -1 ? false : true;
  };

  return selectedRecipe ? (
    <div className="recipe-select-container">
        <button  onClick={() => dispatch(addToWishlist(selectedRecipe))}>
            <FaHeart
              size={22}
              color={isItemInWishlist(selectedRecipe) ? "red" : "white"}
            />
          </button>
      <div className="recipe-container">
        <div>
          <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
        </div>
        <div className="recipe-details">
          

          <h1>
            <span>{selectedRecipe.strMeal}</span> - {selectedRecipe.strArea}
          </h1>
          {
            <p>
              {selectedRecipe.strCategory}{" "}
              {selectedRecipe.strTags && `- ${selectedRecipe.strTags}`}
            </p>
          }
          <h3>Steps:</h3>
          <p>{selectedRecipe.strInstructions}</p>

          <h3>Ingredients</h3>
          <div className="recipe-ingredient">
            {ingredients.map((ingredient) => (
              <span key={ingredient}>{ingredient}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="initial-message">
      <h1>No Recipe Selected.</h1>
    </div>
  );
};

export default RecipeDetails;
