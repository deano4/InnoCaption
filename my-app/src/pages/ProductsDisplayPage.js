import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from '../components/Item';
import { useLocation } from 'react-router-dom';

const ProductsDisplayPage = ({ products, addToCart }) => {
  const [productsList, setProductsList] = useState(products);
  const [query, setQuery] = useState(new URLSearchParams(useLocation().search));
  
  useEffect(() => {
  if (query.get("query"))
  {
    const filteredProducts = [];
    const queryTerms = new Set(query.get("query").toLowerCase().split(" "));
    const addedProducts = new Set();
    // Filter function
    for (var productInfo of productsList.values())
    {
      const productTerms = new Set(String(productInfo["title"] + " " + productInfo["brand"]).toLowerCase().split(" "));
      const relevanceScore = queryTerms.intersection(productTerms).size;
      if (relevanceScore > 0)
      {
        productInfo["relevance"] = relevanceScore;
        filteredProducts.push(productInfo);
        addedProducts.add(productInfo["id"]);
      }
    }
    filteredProducts.sort((a,b) => a["relevance"] - b["relevance"]);

    fetch(`https://dummyjson.com/products/search?q=${query.get("query")}`)
    .then(res => res.json())
    .then((data) => {
      for (var productInfo of data["products"])
      {
        if (!addedProducts.has(productInfo["id"]))
        {
          filteredProducts.push(productInfo);
        }
      }
      
    setProductsList(filteredProducts);
    });

  }
}, [query]);
  return (
    <div style={{ margin: '20px 60px 60px', justifyContent: "center", display: 'grid', gridTemplateColumns: 'repeat(auto-fill, 340px) '}}>
      {productsList.map((product) => (
        <Item key={product.title} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductsDisplayPage;