import { useUpdateProductMutation } from "../app/features/products/api";

export default function UpdateProduct() {
  const [updateProduct, { data, error, isLoading }] =
    useUpdateProductMutation();
  console.log("updated", data);
  if (error) {
    return <h1>error</h1>;
  }
  if (isLoading) {
    return <h1>Loadinggg</h1>;
  }

  const updateProductHandler = async () => {
    try {
      console.log("update", updateProduct);
      await updateProduct({ id: 1 });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button disabled={isLoading} onClick={updateProductHandler}>
        Update
      </button>
      <h1>{data?.id}</h1>
      <h1>{data?.title}</h1>
      <h1>{data?.description}</h1>
    </div>
  );
}
