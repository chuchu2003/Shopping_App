import React, { useState, useEffect } from "react";
import '../App.css';
import axios from 'axios';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.map((product) => (
          <div key={product.id} className="card">
            <div>
              <img src={product.image} alt="product" />
            </div>
            <div className="card-description">
              <h6>{product.title}</h6>
              <h6>Price: ${product.price}</h6>
              <h6>Category: {product.category}</h6>
              <button className="add-button">Add cart</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Products;