import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQty } from "../../services/slice";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  const isCartNotEmpty = cart.length > 0;

  const totalAmount = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handleQtyChange = (id, value) => {
    const qty = Number(value);
    if (!qty || qty < 1) return;
    dispatch(updateQty({ id, qty }));
  };

  return (
    <div className="w-full p-4">
      <div className="overflow-auto max-h-[379px] bg-gray-300 rounded-t-xl shadow">
        {isCartNotEmpty ? (
          <table className="w-full table-fixed">
            <thead className="bg-gray-200 sticky top-0 shadow-sm">
              <tr className="text-gray-800 text-sm">
                <th className="max-md:hidden p-3">No.</th>
                <th className="p-3">Product</th>
                <th className="p-3">Price</th>
                <th className="p-3">Qty</th>
                <th className="max-md:hidden p-3">Subtotal</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody className="text-center font-medium">
              {cart.map((item, index) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-100"
                >
                  <td className="max-md:hidden p-2">{index + 1}</td>

                  <td className="p-2 w-32 md:w-48">
                    <div className="flex items-center gap-2 justify-start truncate">
                      <img
                        src={item.thumbnail}
                        alt={item.title}
                        className="w-15 h-15 object-cover rounded"
                      />
                      <span className="max-md:hidden truncate">{item.title}</span>
                    </div>
                  </td>

                  <td className="p-2 font-bold text-green-800">
                    ₹{item.price?.toFixed(2)}
                  </td>

                  <td className="p-2">
                    <input
                      type="number"
                      min={1}
                      value={item.qty}
                      onChange={(e) => handleQtyChange(item.id, e.target.value)}
                      className="w-12 rounded px-2 border outline-none"
                    />
                  </td>

                  <td className="max-md:hidden p-2 font-bold text-green-800">
                    ₹{(item.price * item.qty).toFixed(2)}
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => dispatch(removeItem(item.id))}
                      className="cursor-pointer"
                    >
                      ❌
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="p-8 text-center text-gray-600">
            <p className="text-lg font-semibold uppercase flex justify-center gap-2">
              Your cart is empty 🛍️
            </p>
          </div>
        )}
      </div>

      {isCartNotEmpty && (
        <div className="flex justify-end bg-white p-3 text-gray-900 font-bold rounded-b-xl shadow">
          Total: ₹{totalAmount.toFixed(2)}
        </div>
      )}
    </div>
  );
};

export default Cart;
