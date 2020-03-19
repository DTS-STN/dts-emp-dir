
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index');

const app = express();
const PORT = process.env.NODE_SERVER_PORT;
const MONGO_CONN_STRING = process.env.MONGO_CONN_STRING.replace('-password-', process.env.MONGO_DB_PASS);

//development verification
if (process.env.NODE_ENV == 'development'){ console.log(`CONNECTION STRING ${MONGO_CONN_STRING} : SERVER PORT ${PORT}`);}

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', router);

mongoose.connect(`${MONGO_CONN_STRING}`, { useNewUrlParser: true, useFindAndModify: false });
mongoose.connection.once('open', function(){
    console.log('connected to the Database.');
});
mongoose.connection.on('error', function(error) {
    console.log('Mongoose Connection Error : ' + error);
});

//test to see if api is running
app.get('/', function(request, response) { response.send(`API is live. Port: ${PORT} and database is: ${process.env.MONGO_CONN_STRING}`) });
app.listen(PORT, function() { console.log(`Server listening on port ${PORT}`) });