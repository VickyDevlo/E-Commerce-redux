import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../services/slice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart.items);

  const isExisting = cartProduct.some((item) => item.id === product?.id);

  return (
    <div className="shadow-md rounded-md flex flex-col justify-center bg-blue-200 relative">
      <div className="w-full h-40 flex items-center justify-center overflow-hidden">
        <img
          src={product?.thumbnail}
          alt="product_img"
          className="max-h-full object-contain"
        />
      </div>

      <span
        className="absolute top-2 right-2 text-gray-500 font-semibold text-sm
        bg-white py-1 px-4 rounded-2xl"
      >
        ⭐ {product?.rating?.toFixed(1)}
      </span>

      <div className="w-full flex flex-col justify-center p-3">
        <h2 className="text-base md:text-lg font-bold truncate">
          {product?.title}
        </h2>

        <span className="text-base font-semibold text-gray-600">
          {product?.brand}
        </span>

        <p className="text-green-800 font-bold text-base">${product?.price}</p>
      </div>

      <div className="flex items-center justify-center px-3 my-2">
        <button
          onClick={() =>
            isExisting
              ? dispatch(removeItem(product?.id))
              : dispatch(addItem(product))
          }
          className={`text-lg rounded-md 
           w-full px-4 py-1 text-white cursor-pointer transition-all duration-300 ${
             isExisting
               ? "bg-[#f24246] hover:bg-[#cf3639]"
               : "bg-cyan-800 hover:bg-cyan-900"
           }`}
        >
          {isExisting ? "Remove From Cart" : "Add To Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
