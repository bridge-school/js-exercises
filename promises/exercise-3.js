const fetch = require('node-fetch');

// Make a fetch request to https://next.json-generator.com/api/json/get/EJPkuFBIV

fetch("https://next.json-generator.com/api/json/get/EJPkuFBIV")
    .then((res) => res.json())
    .then(response => {
        response.map(item => console.log(item.first))
    });

