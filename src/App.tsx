/* eslint-disable @typescript-eslint/no-explicit-any */
import { setTheme } from "./app/features/theme/themeSlice";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import AddProduct from "./components/AddProduct";
import AllProducts from "./components/AllProducts";
import DeleteProduct from "./components/DeleteProduct";
import SpecificProduct from "./components/SpecificProduct";
import UpdateProduct from "./components/UpdateProduct";

function App() {
  const currentTheme = useAppSelector((state) => state.theme);
  console.log("currenttheme", currentTheme);
  const dispatch = useAppDispatch();

  // const { brand, category, description, price, rating, thumbnail, title } = data.products;
  return (
    <main>
      <nav
        style={{
          background: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          width: "100dvw",
          padding: "2rem"
        }}
      >
        <h1>RTK and RTK-Query</h1>
        <section
          style={{
            display: "flex",
            gap: 10,
            justifyContent: "space-between"
          }}
        >
          <button onClick={() => dispatch(setTheme())}>change theme</button>
          <h1>{currentTheme.theme}</h1>
        </section>
      </nav>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100dvw",
          gap: 5
        }}
      >
        <head
          style={{
            display: "flex",
            width: "50%",
            margin: "1rem auto",
            justifyContent: "space-between"
          }}
        >
          <SpecificProduct />
          <AddProduct />
          <DeleteProduct />
          <UpdateProduct />
        </head>
        <main className="all-products">
          <AllProducts />
        </main>
      </section>
    </main>
  );
}

export default App;
