const express = require('express');
const router = express.Router();
const path = require('path');
const access = require('../database/controllers.js');
const fs = require('fs');
const test = require('../client/dist/fakeData.js');
const axios = require('axios');

router.get('/productBundle', (req, res, next) => {
    res.status(200).sendFile(path.resolve('client/dist/bundle.js'));
    // res.sendFile(path.resolve('client/dist/index.html'));
})

router.get('/images/:productId', async (req, res, next) => {
  const productId = req.params.productId
  const config = {
    url: `http://localhost:8001/display/${productId}`,
    method: 'GET'
  }
  let results = await axios(config);
  console.log(results)
  results = JSON.parse(results.data.urls).reduce((arr, item) => {
    arr.push({url: item})
    return arr;
  }, [])
  res.status(200).send(results);
});

router.get('/:productId', async (req, res, next) => {
  if (!req.query.indicator) {
    res.sendFile(path.resolve('client/dist/index.html'));
    // res.status(200).sendFile(path.resolve('client/dist/bundle.js'));
  } else if (req.query.indicator === 'activity') {
    try {
      const productId = req.params.productId;
      const result = await access.getActivity(productId);
      res.json({ activity: result.activity });
    } catch (err) {
      console.error(err.message);
      if (err.message.match(/Cannot read property 'dataValues' of null/gm)) {
        res.status(404).send(`Product Not Found!`);
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  } else {
    try {
      const productId = req.params.productId;
      const result = await access.getAll(productId);
      const responeObj = {};
      const featureArr = [];
      const features = result.product_feature['dataValues']

      for (let key in features) {
        if (key.match(/feature/gm)) {
          featureArr.push(features[key]);
        }
      }

      const descriptors = result.product_description['dataValues'];
      const descriptorArr = [[], []];
      for (let key in descriptors) {
        if (key !== `id` && !key.match(/atedAt/gm)) {
          if (key === 'product_description') {
            descriptorArr[0].push({ [key]: descriptors[key] })
          } else {
            descriptorArr[1].push({ [key]: descriptors[key] });
          }
        }
      }

      let materialSpecs = result.material_specification[`dataValues`];
      const materialArr = [];
      for (let key in materialSpecs) {
        if (key !== `id` && !key.match(/atedAt/)) {
          materialArr.push({ [key]: materialSpecs[key] });
        }
      }

      const technicalDetails = result.technical_detail[`dataValues`];

      let indicator = false;
      const technicalArr = [[], []];
      for (let key in technicalDetails) {
        if (key !== `id` && !key.match(/atedAt/)) {
          if (key === `model_size`) {
            indicator = true;
            technicalArr[0].push({ [key]: technicalDetails[key] });
          } else if (indicator === false) {
            technicalArr[0].push({ [key]: technicalDetails[key] });
          } else {
            technicalArr[1].push({ [key]: technicalDetails[key] });
          }
        }
      }
      const careDetails = result.care_instruction['dataValues'];
      const careArr = [[], []];

      for (let key in careDetails) {
        if (key !== `id` && !key.match(/atedAt/)) {
          if (key === `additional_care_instructions`) {
            careArr[1].push({ [key]: careDetails[key] });
          } else {
            careArr[0].push({ [key]: careDetails[key] });
          }
        }
      }

      responeObj['product_details'] = result.product_details;
      responeObj['product_features'] = featureArr;
      responeObj['product_description'] = descriptorArr;
      responeObj[`material_specification`] = materialArr;
      responeObj[`technical_details`] = technicalArr;
      responeObj[`care_instructions`] = careArr;
      res.json(responeObj);
    } catch(err) {
      console.error(err.message);
      if (err.message.match(/Cannot read property 'dataValues' of null/gm)) {
        res.status(404).send(`Product Not Found!`);
      } else {
        res.status(500).send('Internal Server Error');
      }
    }
  }
});

module.exports = router;