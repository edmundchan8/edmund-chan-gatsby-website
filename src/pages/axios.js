import * as React from 'react'

const axios = require('axios').default;
  axios.get('https://v2.jokeapi.dev/joke/Programming?idRange=22')
  .then(function (response){
    console.log(response[0]);
  })
  .catch(function(error){
    console.log(error);
  })

export default axios