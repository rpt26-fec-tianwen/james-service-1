require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const router = require('./routes.js');
const cors = require('cors');

app.use(cors());

app.use('*', (req, res, next) => {
  const { method, originalUrl } = req;
  // console.log(originalUrl);
  if (!(/(disable_hmr_logs.js)|(proxy)|(favicon)|(images)/).test(originalUrl)) {
    ((/^\/\d+$/g).test(originalUrl)) ?
      console.info('\u001b[1;35m~Serving Client~') :
        ((/indicator=all/).test(originalUrl)) ?
        console.info('Getting Data at ' + req.params['0']) :
        console.info(method, originalUrl);
  }
  next();
});

app.use(express.static(path.resolve('client/dist')));

app.use('/', router);

const port = 3001;
app.listen(port, () => {
  console.log(`Product Details Service listening on  port ${port}`);
})
