/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useGetAllProductsQuery } from "../app/features/products/api";
import {
  currentLimit,
  listOfAllProducts
} from "../app/features/products/productSlice";
import { useAppDispatch } from "../app/hooks";

export default function AllProducts() {
  const res = useGetAllProductsQuery(20);
  console.log("all", res);
  const dispatch = useAppDispatch();

  if (res.data) {
    dispatch(listOfAllProducts(res.data.products));
    dispatch(currentLimit(res.data.limit));
  }

  return (
    <main>
      All Products
      {/* {res.data && res.data.limit}
      {res.data && JSON.stringify(res.data.products)} */}
      {res.status === "fulfilled" && (
        <section>
          {res.data.products.map((item: any) => (
            <main
              key={item.id}
              style={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))"
              }}
            >
              {item.brand}{" "}
              <img
                src={item.thumbnail}
                alt=""
                width={20}
                height={20}
                style={{ borderRadius: "50%" }}
              />
            </main>
          ))}
        </section>
      )}
    </main>
  );
}
