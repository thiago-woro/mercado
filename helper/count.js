const axios = require('axios');

const mercadoName = 'Giassi';
const apiKey = 'Jr4tBOKzszYGFwh0t850wlOZ1hNZWulXs8KVPV78Lt76xKHAN31G2XAxtPWZlqOF'; // Replace with your actual API key

const apiUrl = 'https://sa-east-1.aws.data.mongodb-api.com/app/data-hxowz/endpoint/data/v1/action/find';

const requestData = {
  dataSource: 'mercado',
  database: 'products',
  collection: 'products',
  filter: {
    mercado: mercadoName,
  },
};

const config = {
  headers: {
    'api-key': apiKey,
    'Access-Control-Request-Headers': '*',
    'content-type': 'application/json',
  },
};

axios.post(apiUrl, requestData, config)
  .then(response => {
    if (!response.data || !response.data.results) {
      console.log('Error: Failed to get item count');
      return;
    }

    const results = response.data.results;
    const itemCount = results.length;
    console.log('Total count:', itemCount);
  })
  .catch(error => {
    console.error('Error:', error);
  });