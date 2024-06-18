import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function getProduct() {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="single-product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>
    </div>
  );
}

export default SingleProduct;
