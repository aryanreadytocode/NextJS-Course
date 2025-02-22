import Product from "./product";

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
}
export default async function Page() {
  let products = await productList();
  return (
    <div>
      <h1>Product List</h1>
      <ol style={{ paddingLeft: "40px" }}>
        {products.map((product, index) => {
          return (
            <li key={index}>
              Name: {product.title}, Price: {product.price}
              <Product price={product.price}/>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
