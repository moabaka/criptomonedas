var express = require('express') //llamamos a Express
var app = express()
const axios = require('axios');

var port = process.env.PORT || 8080  // establecemos nuestro puerto

app.get('/', async function(req, res) {

    let response = null;

      try {
        response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=5', {
          headers: {
            'X-CMC_PRO_API_KEY': '008936d0-fe00-4ada-870a-d34c69d6db33',
          },
        });
      } catch(ex) {
        response = null;
        // error
        console.log(ex);
        res.json(ex);
      }
      if (response) {
        // success
        const json = response.data;
        console.log(json);
        res.json(json);
      }
})

// iniciamos nuestro servidor
app.listen(port)
console.log('API escuchando en el puerto ' + port)
