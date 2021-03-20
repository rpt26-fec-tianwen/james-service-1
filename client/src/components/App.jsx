import React from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails.jsx';
import ProductFeatures from './ProductFeatures.jsx';
import ProductDescription from './ProductDescription.jsx';
import Extra from './Extra.jsx';
// import fakeData from '../../dist/fakeData.js';
import style from '../app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const productId = window.location.href.split('/').filter((item) => { return Number(item) }).join('') || 1;
    const config = {
      method: 'GET',
      url: window.location.href,
      params: {
        indicator: 'all',
        service: 'details'
      }
    }

    const results = await axios(config)

    this.setState({
      ...results.data
    }, () => {
      // console.log(this.state);
    })
  }

  render() {
    const { productFeatures, product_description, material_specification, technical_details, careInstructions } = this.state;
    let components = Object.entries(this.state);
    let descriptor;
    if (product_description) {
      descriptor = Object.values(product_description[0]).join('');
    }
    {
      return descriptor !== undefined ?
        (
          <div id={style.productFeatures}>
            {components.map((component, index) => {
              if (component[0] === 'extra') {
                return <Extra key={index} currentComponentDetails={component[1]} style={style} />
              } else if (index === 0) {
                return <ProductDetails key={index} currentComponentDetails={component[1]} style={style} />
              } else if (index === 1) {
                return <ProductFeatures key={index} currentComponentDetails={component[1]} style={style} />
              } else {
                return <ProductDescription key={index} currentComponentDetails={component[1]} style={style} selector={component[0].toString().split('_').join(' ')} descriptor={descriptor} />
              }
            })}
          </div>
        ) : null;
    }
  }
}

export default App;