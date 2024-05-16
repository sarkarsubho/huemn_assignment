import { FaTrash } from "react-icons/fa6";
import "./styles/Wishlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../Redux/actionCreators";

const Wishlist = () => {
  const dispatch = useDispatch();

  const { wishlist } = useSelector((store) => store);

  return (
    <div className="wishlist-wrapper">
      <div>
        <h1 className="wishlist-heading">Fovorite recipes</h1>
      </div>
      <div className="wishlist-items">
        {wishlist &&
          wishlist?.map((item) => (
            <div key={item.idMeal} className="wishlist-item">
              <div>
                <img src={item.strMealThumb} alt={item.strMeal} />
              </div>
              <button onClick={() => dispatch(addToWishlist(item))}>
                <FaTrash size={20} color="red" />
              </button>

              <h1>
                <span>{item.strMeal}</span> - {item.strArea}
              </h1>
              {
                <p>
                  {item.strCategory} {item.strTags && `- ${item.strTags}`}
                </p>
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
