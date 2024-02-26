import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Product.css';
import ProductOne from './ProductOne';


const BrandsDisplay = ({ brandInfo }) => {
  const [selectedCategory, setSelectedCategory] = useState('category1');
  const [products, setProducts] = useState([]);
  const Products = brandInfo && brandInfo.products ? brandInfo.products : 0;
  console.log(Products);
  const navigate = useNavigate();
  let _id;
  //let  productName = brandInfo.products[0].name
  if (brandInfo && brandInfo.titleup) {
    _id = brandInfo.products.name;
  } else {
    console.error('brandInfo.titleup is not available');
  }

  const idstring = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  }
  const rootId = idstring(_id);

  const showProducts = (category) => {
    setSelectedCategory(category);
    const filteredProducts = brandInfo.products.filter((product) => product.category === category);
    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (brandInfo && brandInfo.products) {
      setSelectedCategory('category1');
      const filteredProducts = brandInfo.products.filter((product) => product.category === 'category1');
      setProducts(filteredProducts);
    }
  }, [brandInfo]);

  return (
    <div>
      {brandInfo && (
        <div>
          <div className="background-container">
            <img src={brandInfo.background} className="background-image"  alt="صورة" />
            <div className="blur-container">
              <img src={brandInfo.blur} className="blur-image"  alt="صورة" />
              <div className="content-container">
                <div className="content-icon">
                  <img src={brandInfo.icon} alt="صورة" />
                </div>
                <div className="content-content">
                  <h2 className="content-content-H2">{brandInfo.titleup}</h2>
                  <p className="content-content-p">
                   {brandInfo.discriptionBrand}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="categories">
            <div
              className={`category ${selectedCategory === 'category1' ? 'active' : ''}`}
              onClick={() => showProducts('category1')}
            >
             <span className='cat-name'>{brandInfo.cat1}</span> 
            </div>
            <div
              className={`category ${selectedCategory === 'category2' ? 'active' : ''}`}
              onClick={() => showProducts('category2')}
            >
              <span className='cat-name'>{brandInfo.cat2}</span> 
            </div>
            <div
              className={`category ${selectedCategory === 'category3' ? 'active' : ''}`}
              onClick={() => showProducts('category3')}
            >
              <span className='cat-name'>{brandInfo.cat3}</span> 
            </div>
            <div
              className={`category ${selectedCategory === 'category4' ? 'active' : ''}`}
              onClick={() => showProducts('category4')}
            >
              <span className='cat-name'> {brandInfo.cat4}</span> 
            </div>
            <div
              className={`category ${selectedCategory === 'category5' ? 'active' : ''}`}
              onClick={() => showProducts('category5')}
            >
                <span className='cat-name'>{brandInfo.cat5}</span>
            </div>
          </div>
          <hr className="hr" />

          <div className="product-grid" >
            {products.map((productOne) => (
         
              <ProductOne key={productOne._id} productone={productOne} />
             
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandsDisplay;