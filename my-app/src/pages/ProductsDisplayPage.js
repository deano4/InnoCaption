import React, { useEffect, useState } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import Item from '../components/Item';
import { useLocation } from 'react-router-dom';

const ProductsDisplayPage = ({ products }) => {
  const [productsList, setProductsList] = useState(products);
  const [query, setQuery] = useState(new URLSearchParams(useLocation().search));
  useEffect(() => {
  if (query.get("query"))
  {
    const filteredProducts = [];
    const queryTerms = new Set(query.get("query").toLowerCase().split(" "));
    // Filter function
    for (var productInfo of productsList.values())
    {
      const productTerms = new Set(String(productInfo["title"] + " " + productInfo["brand"]).toLowerCase().split(" "));
      const relevanceScore = queryTerms.intersection(productTerms).size;
      if (relevanceScore > 0)
      {
        productInfo["relevance"] = relevanceScore;
        filteredProducts.push(productInfo);
      }
    }
    filteredProducts.sort((a,b) => a["relevance"] - b["relevance"]);
    setProductsList(filteredProducts);
  }
}, [query]);
  return (
    <SimpleGrid minChildWidth="300px" spacing="10px" p={5}>
      {productsList.map((product) => (
        <Item key={product.title} product={product} />
      ))}
    </SimpleGrid>
  );
};

export default ProductsDisplayPage;