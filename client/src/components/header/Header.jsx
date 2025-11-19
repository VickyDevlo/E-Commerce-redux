import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  
  const navigate = useNavigate();
  const cartCount = useSelector((state) => state.cart.items);

  return (
    <div className="bg-blue-950 sticky top-0 z-50">
      <div
        className="container mx-auto flex items-center justify-between
       text-white p-4"
      >
        <h1
          onClick={() => navigate("/")}
          className="text-2xl font-bold cursor-pointer"
        >
          E-Cart
        </h1>
        <ul className="flex items-center gap-5 text-lg">
          <li className="">
            <Link to="/">Home</Link>
          </li>
          <li className="relative">
            <Link to="/cart" className="relative">
              Cart
              <span
                className="absolute -top-2 -right-2 bg-red-500/80 text-white 
                w-5 h-5 text-xs flex items-center justify-center rounded-full"
              >
                {cartCount?.length ? cartCount?.length : 0}
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
