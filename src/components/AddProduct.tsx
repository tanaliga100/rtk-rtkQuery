/* eslint-disable @typescript-eslint/no-explicit-any */
import { useAddNewProductMutation } from "../app/features/products/api";
import { newAdded } from "../app/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function AddProduct() {
  const dispatch = useAppDispatch();
  const updatedState = useAppSelector(
    (state) => state.products.newAddedProduct
  );
  console.log("states", updatedState);
  const [addNewProduct, { data, error, isLoading }] =
    useAddNewProductMutation();
  if (error) {
    return <h1>error</h1>;
  }
  if (isLoading) {
    return <h1>Loadinggg</h1>;
  }

  const addProduct = async () => {
    try {
      const newProd = {
        id: 1,
        title: "Aamazing tech",
        description: "Sample Description"
      };
      const res = await addNewProduct(newProd);
      if (res) {
        dispatch(newAdded(res!.data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button onClick={addProduct} disabled={isLoading}>
        Add{" "}
      </button>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
}
