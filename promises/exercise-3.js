const fetch = require('node-fetch');

// Make a fetch request to https://next.json-generator.com/api/json/get/EJPkuFBIV

fetchJson = () => 
    fetch('https://next.json-generator.com/api/json/get/EJPkuFBIV')
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(error => console.log(error) )

fetchJson();