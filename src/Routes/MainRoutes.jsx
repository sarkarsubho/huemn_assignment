import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Wishlist from "../Pages/Wishlist";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Wishlist />} />
    </Routes>
  );
};

export default MainRoutes;
