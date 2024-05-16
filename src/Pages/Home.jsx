import "./styles/Home.scss";

import RecipeList from "../Components/RecipeList";
import RecipeDetails from "../Components/RecipeDetails";

const Landing = () => {
  return (
    <div className="recipe-container">
      <RecipeList />
      <RecipeDetails />
    </div>
  );
};

export default Landing;
