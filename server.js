const express = require('express');
const app = express();
const PORT = 3001;

console.log(process.env.MONGO_USER);

app.get('/', function(request, response) { response.send('Hello World!') });

app.listen(PORT, function() { console.log(`Server listening on port ${PORT}`) });