import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllProducts from "./AllProducts";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await fetch(`http://localhost:8080/api/products/${id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    }
    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="singleProductWrapper">
      {product && (
        <>
          <ul className="single-product-wrapper">
            <div className="single-product-description">
              <h1>{product.name}</h1>
              <h2 className="sPdesigner">{product.designer}</h2>
              <ul className="sPdescription">{product.description}</ul>
              <p>${product.price}</p>
            </div>
            <div className="single-image-container">
              <img className="single-image" src={product.image} alt={product.name} />
            </div>
          </ul>
        </>
      )}
    </div>
  );
}

export default SingleProduct;

