const fetch = require('node-fetch');

// Make a fetch request to https://next.json-generator.com/api/json/get/EJPkuFBIV

fetch("https://next.json-generator.com/api/json/get/EJPkuFBIV")
.then(response => response.json())
.then(data => console.table(data))
.catch(error => console.log("Failed!", error.message));