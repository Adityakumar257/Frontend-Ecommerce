import React from 'react'
// import all_product from './../Assets/all_product';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { BreadCrum } from '../Components/BreadCrum/BreadCrum';
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay';
import { DescriptionBox } from '../Components/Description-Box/DescriptionBox';
import { RelatedProduct } from '../Components/RelatedProduct/RelatedProduct';
// import { Product } from './Product';

export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {ProductId} = useParams();
  const Product = all_product.find((e) => e.id === Number(ProductId))
  return (
    <div>
    <BreadCrum product = {Product}/>
    <ProductDisplay Product={Product}/>
    <DescriptionBox/>
    <RelatedProduct/>
    </div>
  )
}
