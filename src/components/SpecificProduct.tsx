import { useState } from "react";
import { useGetProductByIDQuery } from "../app/features/products/api";

export default function SpecificProduct() {
  const [getProduct, setProduct] = useState<number>(0);
  const resOne = useGetProductByIDQuery(Number(getProduct));
  console.log("data", resOne);
  return (
    <div>
      <label
        style={{ color: "black" }}
        htmlFor="PLease input ID of the product"
      ></label>
      <input
        aria-label=""
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setProduct(Number(e.target.value))
        }
        value={getProduct}
      />
      <section style={{ display: "flex", gap: 2, alignItems: "center" }}>
        <span>{resOne.data && resOne.data.brand}</span>
        <span>{resOne.data && resOne.data.title}</span>

        <img
          src={resOne.data && resOne.data.thumbnail}
          alt=""
          width={20}
          height={20}
          style={{ borderRadius: "50%" }}
        />
      </section>
    </div>
  );
}
