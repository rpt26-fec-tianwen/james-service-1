const express = require('express');
const router = express.Router();
const path = require('path');
const access = require('../database/controllers.js');
const fs = require('fs');
const axios = require('axios');

router.get('/bundle.js', (req, res, next) => {
  res.status(200).sendFile(path.resolve('client/dist/bundle.js'));
})

router.get('/images/:productId', async (req, res, next) => {
  console.log(req.params)
  try {
    let results = await axios(`http://localhost:8001/display/${req.params.productId}`);
    results = JSON.parse(results.data.urls).reduce((arr, item) => {
      arr.push({ url: item })
      return arr;
    }, [])
    res.status(200).send(results);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/details/:productId', async (req, res) => {
  try {
    let { product_details, 'product_description': { 'dataValues': descriptors }, 'product_feature': { 'dataValues': product_feature }, 'material_specification': { 'dataValues': materialSpecs }, 'technical_detail': { 'dataValues': technicalDetails }, 'care_instruction': { 'dataValues': careDetails } } = await access.getAll(req.params.productId);
    const filteredHelperMap = (section) => { return Object.entries(section).filter((item) => { return item[0] !== 'id' && item[0] !== 'createdAt' && item[0] !== 'updatedAt' ? item : null }).map((thing) => { return (/feature/g).test(thing[0]) ? thing[1] : { [thing[0]]: thing[1] } }) }
    const filteredHelperReduce = (section, regex, indicator) => {
      return Object.entries(section).filter((item) => { return !(/(id)|(atedAt)/g.test(item[0])) }).reduce((total, item, index) => {
        const [key, value] = item;
        !(regex).test(key) || (indicator && index < 3) ?
          // left div
          total[0] = [...total[0], { [key]: value }] :
          // right div
          total[1] = [...total[1], { [key]: value }]
        return total;
      }, [[], []])
    }

    featureArr = filteredHelperMap(product_feature)
    descriptorArr = filteredHelperReduce(descriptors, /^(?!product_description)/g);
    materialArr = filteredHelperMap(materialSpecs)
    technicalArr = filteredHelperReduce(technicalDetails, /^(?!model_size)/g, true)
    careArr = filteredHelperReduce(careDetails, /additional_care_instructions/)
    console.info(`Sending data from /${req.params.productId}`)
    res.json
      ({ product_details: product_details, product_features: featureArr, product_description: descriptorArr, material_specification: materialArr, technical_details: technicalArr, care_instructions: careArr });

  } catch (err) {
    console.log(err);
    (/Cannot read property 'dataValues' of null/gm).test(err.message) ?
      res.status(404).send(`Product Not Found!`) :
      res.status(500).send('Internal Server Error')
  }
})

router.get('/:productId', async (req, res, next) => {
  console.log(req.query.indicator);
  // This first condition is for local development only.
  if (!req.query.indicator) {
    res.sendFile(path.resolve('client/dist/index.html'));
  } else if ((/activity/g).test(req.query.indicator)) {
    try {
      const result = await access.getActivity(req.params.productId);
      res.json({ activity: result.activity });
    } catch (err) {
      ((/Cannot read property 'dataValues' of null/gm).test(err.message)) ?
        res.status(404).send(`Product Not Found!`) :
        res.status(500).send('Internal Server Error')
    }
  } else {
    try {
      let { product_details, 'product_description': { 'dataValues': descriptors }, 'product_feature': { 'dataValues': product_feature }, 'material_specification': { 'dataValues': materialSpecs }, 'technical_detail': { 'dataValues': technicalDetails }, 'care_instruction': { 'dataValues': careDetails } } = await access.getAll(req.params.productId);
      const filteredHelperMap = (section) => { return Object.entries(section).filter((item) => { return item[0] !== 'id' && item[0] !== 'createdAt' && item[0] !== 'updatedAt' ? item : null }).map((thing) => { return (/feature/g).test(thing[0]) ? thing[1] : { [thing[0]]: thing[1] } }) }
      const filteredHelperReduce = (section, regex, indicator) => {
        return Object.entries(section).filter((item) => { return !(/(id)|(atedAt)/g.test(item[0])) }).reduce((total, item, index) => {
          const [key, value] = item;
          !(regex).test(key) || (indicator && index < 3) ?
            // left div
            total[0] = [...total[0], { [key]: value }] :
            // right div
            total[1] = [...total[1], { [key]: value }]
          return total;
        }, [[], []])
      }

      featureArr = filteredHelperMap(product_feature)
      descriptorArr = filteredHelperReduce(descriptors, /^(?!product_description)/g);
      materialArr = filteredHelperMap(materialSpecs)
      technicalArr = filteredHelperReduce(technicalDetails, /^(?!model_size)/g, true)
      careArr = filteredHelperReduce(careDetails, /additional_care_instructions/)
      console.info(`Sending data from /${req.params.productId}`)
      res.json
        ({ product_details: product_details, product_features: featureArr, product_description: descriptorArr, material_specification: materialArr, technical_details: technicalArr, care_instructions: careArr });

    } catch (err) {
      console.log(err);
      (/Cannot read property 'dataValues' of null/gm).test(err.message) ?
        res.status(404).send(`Product Not Found!`) :
        res.status(500).send('Internal Server Error')
    }
  }
});

module.exports = router;
