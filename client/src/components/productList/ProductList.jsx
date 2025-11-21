import { useEffect } from "react";
import { fetchProducts } from "../../services/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../productCard/ProductCard";
import Loader from "../loader/Loader";

const ProductList = () => {
  const dispatch = useDispatch();

  const productsData = useSelector((state) => state.products.products); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="max-w-screen-2xl mx-auto w-full p-5">
      <div className="grid gap-4 items-center grid-cols-[repeat(auto-fit,minmax(220px,1fr))]">
        {productsData?.length
          ? productsData?.map((product) => <ProductCard key={product?.id} product={product} />)
          : 
          <div className="flex items-center justify-center h-96"><Loader /></div>
          }
      </div>
    </div>
  );
};

export default ProductList;
