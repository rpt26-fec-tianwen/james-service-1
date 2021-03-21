import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductDetails from './ProductSections/ProductDetails.jsx';
import ProductFeatures from './ProductSections/ProductFeatures/ProductFeatures.jsx';
import ProductDescription from './ProductSections/ProductDescription.jsx';
import MaterialSpecification from './ProductSections/MaterialSpecification.jsx';
import TechnicalDetails from './ProductSections/TechnicalDetails.jsx';
import CareInstructions from './ProductSections/CareInstructions.jsx';
import Extra from './ProductSections/Extra.jsx';
import style from '../styles/app.scss';

const App = () => {
  const [details, setDetails] = useState({});

  useEffect(async () => {
    const productId = window.location.href.split('/').filter((item) => { return Number(item) }).join('') || 1;
    const results = await axios(`/${productId}`, { params: { indicator: 'all', service: 'details' } })
    setDetails(results.data)
    return () => {console.log(details)};
  }, [])

  const { product_details, product_features, product_description, material_specification, technical_details, care_instructions } = details;

  let descriptor;
  if (product_description) {
    descriptor = Object.values(product_description[0]).join('');
  }
  {
    return descriptor !== undefined ?
      (
        <div id={style.productFeatures}>
          <ProductDetails currentComponentDetails={product_details} style={style} />
          <ProductFeatures currentComponentDetails={product_features} style={style} />
          <ProductDescription currentComponentDetails={product_description} style={style} />
          <MaterialSpecification currentComponentDetails={material_specification} style={style} selector={['material_specification']} />
          <TechnicalDetails currentComponentDetails={technical_details} style={style} />
          <CareInstructions currentComponentDetails={care_instructions} style={style} />
        </div>) : <div>Product Details is not available</div>;
  }
}
export default App;