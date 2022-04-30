const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://myallies-breaking-news-v1.p.rapidapi.com/GetCompanyDetailsBySymbol',
  params: {symbol: 'twtr'},
  headers: {
    'X-RapidAPI-Host': 'myallies-breaking-news-v1.p.rapidapi.com',
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});