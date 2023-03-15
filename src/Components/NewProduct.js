import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";


export default function NewProduct() {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
          try {
            setLoading(true);
            const response = await fetch('http://127.0.0.1:3000/products');
            const json = await response.json();
            setData(json);
          } catch (error) {
            console.error(error);
          } finally {
            setLoading(false);
          }
        }
        fetchData();
      }, []);
      console.log(data)
  return (
    <div>
        <h1>Products</h1>
        {loading ?(
            <p>Loading</p>
        ):(
            <div className="flex flex-wrap justify-between">
                {data.map((item) =>(
                   <ProductsCard key={item.id} image_url={item.image_url} sku={item.sku} name={item.name} price={item.price} />
                ))}
            </div>
        )}
    </div>
  )

}
