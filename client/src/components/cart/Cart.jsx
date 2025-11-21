import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeItem, updateQty, clearCart } from "../../services/slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCart = cart.length > 0;

  const handleQtyChange = (id, value) => {
    const qty = Number(value);
    if (!qty || qty < 1) return;
    dispatch(updateQty({ id, qty }));
  };

  const handlePlaceOrder = () => {
    dispatch(clearCart());
    alert("YOUR ORDER HAS BEEN PLACED!!!");
    navigate("/");
  };

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="w-full">
      <div className="bg-emerald-100 md:p-3 shadow-lg rounded">
        {isCart && (
          <div className="flex items-center justify-between border-b border-gray-400 p-2">
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-500 md:text-xl font-medium">
                {cart?.length} {cart?.length <= 1 ? "item" : "items"}
              </span>
            </div>
            <button
              onClick={handlePlaceOrder}
              className="bg-black text-white shadow px-3 md:px-4 py-1 rounded text-base md:text-lg cursor-pointer hover:bg-black/80 transition-all duration-300"
            >
              Place Order
            </button>
          </div>
        )}

        {/* FIXED HEIGHT SCROLL AREA */}
        <div className="h-[410px] md:h-[380px] overflow-y-auto">
          {isCart ? (
            cart?.map((item) => (
              <div
                key={item.id}
                className="flex items-center max-md:gap-2 justify-between px-2 md:px-5 py-3 border-b border-gray-300"
              >
                <div className="flex items-center gap-1">
                  <div className="flex items-center justify-center bg-gray-100 rounded-xl md:mr-1">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="max-md:hidden w-10 md:w-[70px] md:h-[70px] object-cover shrink-0"
                    />
                  </div>

                  <div className="flex flex-col justify-start">
                    <h2 className="max-md:w-28 md:w-80 truncate text-sm md:text-lg font-semibold">
                      {item.title}
                    </h2>
                    <p className="text-xs md:text-sm font-medium text-gray-500">
                      {item.brand}
                    </p>
                  </div>
                </div>

                <div className="flex items-end md:items-center justify-between w-1/2">
                  <input
                    type="number"
                    value={item.qty}
                    onChange={(e) => handleQtyChange(item.id, e.target.value)}
                    className="max-md:text-sm border border-gray-500 rounded w-16 p-1"
                  />

                  <div className="flex flex-col gap-1 items-start">
                    <span className="text-green-800 font-extrabold text-base md:text-lg">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="bg-cyan-600 text-white max-md:text-sm px-2 md:px-4 py-1 rounded hover:bg-cyan-500 transition-all duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-gray-600">
              <p className="text-lg font-semibold uppercase flex flex-col justify-center gap-2 my-32">
                Your cart is empty 🛍️
              </p>
            </div>
          )}
        </div>
      </div>

      {isCart && (
        <div className="flex justify-between w-full py-3 px-3 md:px-10 shadow text-xl bg-black/80 text-white font-bold">
          <span>Total</span>
          <p>${totalAmount.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
