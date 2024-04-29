import { useDeleteProductMutation } from "../app/features/products/api";

export default function DeleteProduct() {
  const [deleteProduct, { data, error, isLoading }] =
    useDeleteProductMutation();
  if (error) {
    return <h1>error</h1>;
  }
  if (isLoading) {
    return <h1>Loadinggg</h1>;
  }
  const handleDelete = async () => {
    try {
      const res = await deleteProduct({ id: 1 });
      console.log("deleted", data);
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button onClick={handleDelete}>delete</button>
      {/* Deleted: <h1>{res && res?.data.isDeleted}</h1> */}
    </div>
  );
}
