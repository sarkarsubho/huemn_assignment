import "./styles/RecipeList.scss";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { selectRecipe, updateRecipeOrder } from "../Redux/actionCreators";
import { fetchRecipes } from "../Redux/actions";
import { useEffect } from "react";
import Loader from "./Loader";

const RecipeList = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((store) => store);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, []);

  const handleRecipeSelect = (recipe) => {
    dispatch(selectRecipe(recipe));
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return; // If dropped outside the droppable area, do nothing
    const items = Array.from(recipes);
    const [reorderedItem] = items.splice(result.source.index, 1); // Remove the dragged item
    items.splice(result.destination.index, 0, reorderedItem); // Insert the dragged item at the new position

    // Update state with the new order of items
    dispatch(updateRecipeOrder(items));
  };

  return (
    <div className="recipes-list">
      {loading ? (
       <Loader/>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="recipes">
            {(provided) => (
              <ul {...provided.droppableProps} ref={provided.innerRef}>
                {recipes.map((recipe, index) => (
                  <Draggable
                    key={recipe.idMeal}
                    draggableId={recipe.idMeal}
                    index={index}
                  >
                    {(provided) => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => handleRecipeSelect(recipe)}
                      >
                        {recipe.strMeal}
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                      </li>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};
export default RecipeList;
